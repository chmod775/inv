const { publicDecrypt } = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('74hc.lib', 'utf8');

/* Define function for escaping user input to be treated as 
	a literal string within a regular expression */
function escapeRegExp(string){
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
		
/* Define functin to find and replace specified term with replacement string */
String.prototype.replaceAll = function(term, replacement) {
	return this.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
}

const lines = data.split('\n');

const outLines = [];
var outLine = '';
for (let l of lines) {
	if (l.startsWith('*'))
    if (!l.startsWith('* 74'))
      continue;
	if (!l.startsWith('+')) { outLines.push(outLine); outLine = ''; }

	if (l.startsWith('+')) l = l.substring(1);
	if (l.includes(';')) l = l.substring(0, l.indexOf(';'));
	l = l.replace('\n', '');
	l = l.replace('\r', '');
	outLine += l;
}


const cleanLines = [];
const functions = {};
const circuits = [];
let circuitLines = [];
const comments = {};
for (let l of outLines) {
  l = l.replace(/[$\/]+/g, '_');

	if (l.startsWith('.')) {
		if (l.toUpperCase().startsWith('.SUBCKT')) {
      cleanLines.push(l);
      circuitLines = [ l ];
    }
		if (l.toUpperCase().startsWith('.ENDS')) {
      cleanLines.push(l);
      circuits.push(circuitLines);
      circuitLines = [];
    }
	}

  if (l.startsWith('*')) {
    let cleanText = l.substring(2);
    let firstSpace = cleanText.indexOf(' ');
    let name = cleanText.substring(0, firstSpace);

    if (!(name in comments))
      comments[name] = cleanText.substring(firstSpace).trim();
  }

	if (l.startsWith('U')) {
		let tokens = l.split(/[ \t]+/);
		let C_name = tokens[0];
		let C_func = tokens[1];

		//if (C_func.toUpperCase() != 'PINDLY') {
      cleanLines.push(l);
      circuitLines.push(l);

      let C_func_clear = C_func.split('(')[0].toLowerCase();
      functions[C_func_clear] |= 0; 
      functions[C_func_clear]++; 
    //}
	}

	if (l.startsWith('X')) {
		cleanLines.push(l);
    circuitLines.push(l);
	}
}

function sanitizeName(name) {
  return name.replace(/(^\d.*)/, '_$1').replace(/[-[/\]{}()*+?.,\\^$|#\s]/g, '_');
}


class Tokenizer {
  constructor(str) {
    this.str = str;
    this.ptr = 0;
		this.lastPtr = 0;
  }


  getToken() {
		this.lastPtr = this.ptr;
    while (this.ptr < this.str.length) {
      let ch = this.str[this.ptr];
      this.ptr++;

      if ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch == '_')) {
        let out = ch;

        ch = this.str[this.ptr];
        while ((ch != '\t') && (ch != '\n') && (ch != ' ') && (ch != '(')) {
          out += ch;
          this.ptr++;
          ch = this.str[this.ptr];
        }

        if (out.endsWith(':'))
          return { type: 'sector', start: this.ptr - out.length, length: out.length, content: out };

        return { type: 'token', start: this.ptr - out.length, length: out.length, content: out };
      } else if (ch == '(') {
        let out = ch;
        
        ch = this.str[this.ptr];
        while (ch != ')') {
          out += ch;
          this.ptr++;
          ch = this.str[this.ptr];
        }
        out += ch;

        return { type: 'args', start: this.ptr - out.length, length: out.length, content: out };
      }
    }
  }

	undoToken() {
		this.ptr = this.lastPtr;
	}
}


class Part {
  constructor(line) {
    let tokenizer = new Tokenizer(line);

    this.name = tokenizer.getToken().content;
    this.func = tokenizer.getToken().content.toLowerCase();
    this.args = [];

		this.pins = {};

    let tokenArgs = tokenizer.getToken();
    if (tokenArgs.type == 'args')
      this.args = tokenArgs.content.substring(1, tokenArgs.content.length - 1).split(',');
		else
			tokenizer.undoToken();

    let mapper = this[`map_${this.func}`];
    if (!mapper) throw `Mapper map_${this.func} not found!`;
    mapper.apply(this, [ tokenizer, this.args ]);
  }

  map_nand(t, a) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`IN${i}`] = t.getToken().content;
		this.pins['OUT'] = t.getToken().content;
  }
  map_nor(t, a) { }
  map_inv(t, a) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		this.pins[`IN`] = t.getToken().content;
		this.pins['OUT'] = t.getToken().content;
	}
  map_and(t, a) { }
  map_or(t, a) { }
  map_buf(t, a) { }
  map_aoi(t, a) { }
  map_jkff(t, a) { }
  map_dff(t, a) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		this.pins[`PRESET`] = t.getToken().content;
		this.pins[`CLEAR`] = t.getToken().content;
		this.pins[`CLOCK`] = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`D${i}`] = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`Q${i}`] = t.getToken().content;
	}
  map_bufa(t, a) { }
  map_dltch(t, a) { }
  map_xor(t, a) { }
  map_inva(t, a) { }
  map_buf3(t, a) { }
  map_srff(t, a) { }
  map_inv3a(t, a) { }
  map_buf3a(t, a) {
		let vcc = t.getToken().content;
    let gnd = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`D${i}`] = t.getToken().content;
		this.pins[`EN`] = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`Q${i}`] = t.getToken().content;
	}
  map_nora(t, a) { }
  map_nanda(t, a) { }
  map_ora(t, a) { }
  map_nxor(t, a) { }
  map_wdthck(t, a) { }
  map_ao(t, a) { }
  map_anda(t, a) { }
  map_suhdck(t, a) { }

  map_logicexp(t, a) {
		let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		
		this.context = {
			inputs: [],
			outputs: [],
			temps: []
		};

		let nInputs = a[0];
		let nOutputs = a[1];

		for (var i = 0; i < nInputs; i++) {
			let tc = sanitizeName(t.getToken().content);
			this.pins[tc] = tc;
			this.context.inputs.push(tc);
		}

		for (var i = 0; i < nOutputs; i++) {
			let tc = sanitizeName(t.getToken().content);
			this.pins[tc] = tc;
			this.context.outputs.push(tc);
		}

		// Find logic
		let tok = null;
		while (1) {
			tok = t.getToken();
			if (tok.content.toUpperCase() == 'LOGIC:') break;
		}

		let logicCode = t.str.substring(tok.start + tok.length);

		let logicLines = logicCode.replace(/\{/g, '').split('}').filter(l => l.length > 0);

		let vars = [];
		for (let l of logicLines) {
			let varItem = l.substring(0, l.indexOf('=')).trim();
			vars.push(varItem);
		}

		let sanitizedCode = logicLines.join('\n');
		for (let v of vars) {
			sanitizedCode = sanitizedCode.replaceAll(v, sanitizeName(v));
		}

		sanitizedCode = sanitizedCode.replaceAll('~', '!');
		//sanitizedCode = sanitizedCode.replaceAll('&', '&&');
		//sanitizedCode = sanitizedCode.replaceAll('|', '||');

		let sanitizedCodeLines = sanitizedCode.split('\n');
		let jsCodeLines = [];
		for (let l of sanitizedCodeLines) {
			let varItem = l.substring(0, l.indexOf('=')).trim();
			
			if (this.pins[varItem]) {
				jsCodeLines.push(`${l};`);
			} else {
				this.context.temps.push(varItem);
				//jsCodeLines.push(`let ${l};`);
				jsCodeLines.push(`${l};`);
			}
		}

		this.logic = jsCodeLines.join('');
	}

	map_pindly(t, a) {
		let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		
		let nPaths = a[0];
		let nEnables = a[1];
		let nRefs = a[2];

		this.paths = {
			inputs: [],
			outputs: []
		};

		this.enables = [];
		this.references = [];

		for (var i = 0; i < nPaths; i++) {
			let tc = sanitizeName(t.getToken().content);
			this.pins[tc] = tc;
			this.paths.inputs.push(tc);
		}

		for (var i = 0; i < nEnables; i++) {
			let tc = sanitizeName(t.getToken().content);
			this.pins[tc] = tc;
			this.enables.push(tc);
		}

		for (var i = 0; i < nRefs; i++) {
			let tc = sanitizeName(t.getToken().content);
			this.pins[tc] = tc;
			this.references.push(tc);
		}

		for (var i = 0; i < nPaths; i++) {
			let tc = sanitizeName(t.getToken().content);
			this.pins[tc] = tc;
			this.paths.outputs.push(tc);
		}
	}
}

class Circuit {
  constructor(lines) {
    let commandLine = lines[0];
    let commandTokens = commandLine.split(/[ \t]+/);

    this.name = commandTokens[1];
    
    // Pins
    this.pins = [];
    for (let i = 2; i < commandTokens.length; i++) {
      if (commandTokens[i].endsWith(':')) break;
      this.pins.push(sanitizeName(commandTokens[i]));
    }

    // Parts
    this.parts = [];
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].startsWith('U')) {
        let newP = new Part(lines[i]);
        this.parts.push(newP);
      }
    }
  }

  compile() {
    let out = [];

		let temporary = [];

    let comment = comments[this.name];
    if (comment) {
      out.push('/**');
      out.push(` * ${comment}`);
      out.push(' */');
    }
    out.push(`class SN${this.name} extends Component {`);

    out.push(`\tconstructor() {`);
    out.push(`\t\tsuper();`);
    out.push(`\t\tthis.pins = {`);
    for (let p of this.pins) {
      out.push(`\t\t\t${p}: new Pin(),`);
    }
    out.push(`\t\t}`);
    for (let p of this.parts) {
			if (p.paths) {
				for (let i = 0; i < p.paths.inputs.length; i++) {
					let pi = p.paths.inputs[i];
					let po = p.paths.outputs[i];

					let srcPin = `this.pins.${pi}`;
					if (temporary.includes(pi))
						srcPin = pi;

					let destPin = `this.pins.${po}`;
					if (temporary.includes(po))
						destPin = po;
					
					out.push(`\t\tConnect(${srcPin}, ${destPin});`);
				}
			} else {
				if (p.logic) {
					out.push(`\t\tthis.${p.name} = new ${p.func}([${p.context.inputs.map(t => `'${t}'`).join(',')}], [${p.context.outputs.map(t => `'${t}'`).join(',')}], [${p.context.temps.map(t => `'${t}'`).join(',')}]).Logic('${p.logic}');`);
					//out.push(`\t\tthis.${p.name} = new ${p.func}(${p.args.join(',')}).Context([${p.context.inputs.map(t => `'${t}'`).join(',')}], [${p.context.outputs.map(t => `'${t}'`).join(',')}]).Logic('${p.logic}');`);
				} else {
					out.push(`\t\tthis.${p.name} = new ${p.func}(${p.args.join(',')});`);
				}
	
				for (let ppk in p.pins) {
					let pp = sanitizeName(p.pins[ppk]);
					
					let isTemporary = !this.pins.includes(pp);
					var destPin = `this.pins.${pp}`;
	
					if (isTemporary) {
						if ((pp != '_D_HI') && (pp != '_D_LOW'))
							if (!temporary.includes(pp)) {
								temporary.push(pp);
								out.push(`\t\tlet ${pp} = new Pin();`);
							}
	
						destPin = pp;
					}
	
					out.push(`\t\tConnect(this.${p.name}.pins.${sanitizeName(ppk)}, ${destPin});`);
				}
			}




    }
    out.push(`\t}`);

    out.push('}');

    return out.join('\n');
  }
}

fs.writeFileSync('74hc_clean.lib', cleanLines.join('\n'));

let circuitsObjects = [];
for (let c of circuits) {
  let newC = new Circuit(c);
  circuitsObjects.push(newC);
}

const codeLines = [];

for (var c of circuitsObjects) {
  codeLines.push(c.compile());
}


//console.log(circuitsObjects[61].compile());
//console.log(circuitsObjects[0].pins);

//console.log(circuitsObjects.map(t => t.name).indexOf('74HC181'));


fs.writeFileSync('74hc_code.js', codeLines.join('\n\n'));

fs.writeFileSync('74hc_functions.txt', JSON.stringify(functions, null, 2));
fs.writeFileSync('74hc_oneline.lib', outLines.join('\n'));
fs.writeFileSync('74hc_circuits_list.lib', JSON.stringify(circuits, null, 2));
fs.writeFileSync('74hc_circuits.lib', JSON.stringify(circuitsObjects, null, 2));