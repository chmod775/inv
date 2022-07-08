const { publicDecrypt } = require('crypto');
const fs = require('fs');

/* Define function for escaping user input to be treated as 
	a literal string within a regular expression */
function escapeRegExp(string){
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
		
/* Define functin to find and replace specified term with replacement string */
String.prototype.replaceAll = function(term, replacement) {
	return this.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
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

	map_multiinputs_singlegate(t, nInputs, withEnable) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
    for (var i = 0; i < nInputs; i++)
			this.pins[`IN${i}`] = t.getToken().content;
		if (withEnable)
			this.pins[`EN`] = t.getToken().content;
		this.pins['OUT'] = t.getToken().content;
	}

	map_multiinputs_multigate(t, nInputs, nGates, withEnable, singleOutput) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;

		for (var g = 0; g < nGates; g++)
			for (var i = 0; i < nInputs; i++)
				this.pins[`IN${g}_${i}`] = t.getToken().content;
		if (withEnable)
			this.pins[`EN`] = t.getToken().content;
		if (singleOutput) {
			this.pins['OUT'] = t.getToken().content;
		} else {
			for (var g = 0; g < nGates; g++)
				this.pins[`OUT${g}`] = t.getToken().content;
		}
	}

	// Standard gates
  map_inv(t, a) { this.map_multiinputs_singlegate(t, 1, false); }
  map_buf(t, a) { this.map_multiinputs_singlegate(t, 1, false); }
  map_nxor(t, a) { this.map_multiinputs_singlegate(t, 2, false); }
  map_xor(t, a) { this.map_multiinputs_singlegate(t, 2, false); }

  map_and(t, a) { this.map_multiinputs_singlegate(t, a[0], false); }
  map_nand(t, a) { this.map_multiinputs_singlegate(t, a[0], false); }
  map_nor(t, a) { this.map_multiinputs_singlegate(t, a[0], false); }
  map_or(t, a) { this.map_multiinputs_singlegate(t, a[0], false); }

  map_inva(t, a) { this.map_multiinputs_multigate(t, 1, a[0], false, false); }
  map_bufa(t, a) { this.map_multiinputs_multigate(t, 1, a[0], false, false); }

  map_anda(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], false, false); }
  map_nanda(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], false, false); }
  map_nora(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], false, false); }
  map_ora(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], false, false); }

	map_nxora(t, a) { this.map_multiinputs_multigate(t, 2, a[0], false, false); }
  map_xora(t, a) { this.map_multiinputs_multigate(t, 2, a[0], false, false); }

  map_ao(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], false, true); }
  map_aoi(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], false, true); }
  map_oa(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], false, true); }
  map_oai(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], false, true); }

	// Tristate gates
  map_inv3(t, a) { this.map_multiinputs_singlegate(t, 1, true); }
  map_buf3(t, a) { this.map_multiinputs_singlegate(t, 1, true); }
  map_nxor3(t, a) { this.map_multiinputs_singlegate(t, 2, true); }
  map_xor3(t, a) { this.map_multiinputs_singlegate(t, 2, true); }

  map_and3(t, a) { this.map_multiinputs_singlegate(t, a[0], true); }
  map_nand3(t, a) { this.map_multiinputs_singlegate(t, a[0], true); }
  map_nor3(t, a) { this.map_multiinputs_singlegate(t, a[0], true); }
  map_or3(t, a) { this.map_multiinputs_singlegate(t, a[0], true); }

  map_inv3a(t, a) { this.map_multiinputs_multigate(t, 1, a[0], true, false); }
  map_buf3a(t, a) { this.map_multiinputs_multigate(t, 1, a[0], true, false); }

  map_anda3(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], true, false); }
  map_nanda3(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], true, false); }
  map_nora3(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], true, false); }
  map_ora3(t, a) { this.map_multiinputs_multigate(t, a[0], a[1], true, false); }

	map_nxor3a(t, a) { this.map_multiinputs_multigate(t, 2, a[0], true, false); }
  map_xor3a(t, a) { this.map_multiinputs_multigate(t, 2, a[0], true, false); }

	// Flip-flops and latches
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
		for (var i = 0; i < a[0]; i++)
			this.pins[`QBAR${i}`] = t.getToken().content;
	}
  map_jkff(t, a) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		this.pins[`PRESET`] = t.getToken().content;
		this.pins[`CLEAR`] = t.getToken().content;
		this.pins[`CLOCK`] = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`J${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`K${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`Q${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`QBAR${i}`] = t.getToken().content;
	}
  map_dffde(t, a) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		this.pins[`PRESET`] = t.getToken().content;
		this.pins[`CLEAR`] = t.getToken().content;
		this.pins[`CLOCK`] = t.getToken().content;
		this.pins[`POS_EDGE`] = t.getToken().content;
		this.pins[`NEG_EDGE`] = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`D${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`Q${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`QBAR${i}`] = t.getToken().content;
	}
  map_jkffde(t, a) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		this.pins[`PRESET`] = t.getToken().content;
		this.pins[`CLEAR`] = t.getToken().content;
		this.pins[`CLOCK`] = t.getToken().content;
		this.pins[`POS_EDGE`] = t.getToken().content;
		this.pins[`NEG_EDGE`] = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`J${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`K${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`Q${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`QBAR${i}`] = t.getToken().content;
	}

  map_srff(t, a) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		this.pins[`PRESET`] = t.getToken().content;
		this.pins[`CLEAR`] = t.getToken().content;
		this.pins[`GATE`] = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`S${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`R${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`Q${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`QBAR${i}`] = t.getToken().content;
	}
  map_dltch(t, a) {
    let vcc = t.getToken().content;
    let gnd = t.getToken().content;
		this.pins[`PRESET`] = t.getToken().content;
		this.pins[`CLEAR`] = t.getToken().content;
		this.pins[`GATE`] = t.getToken().content;
    for (var i = 0; i < a[0]; i++)
			this.pins[`D${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`Q${i}`] = t.getToken().content;
		for (var i = 0; i < a[0]; i++)
			this.pins[`QBAR${i}`] = t.getToken().content;
	}



  map_wdthck(t, a) { }
  map_suhdck(t, a) { }

	map_constraint(t, a) { }

	map_stim(t, a) { }

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

    this.name = 'SN' + commandTokens[1];
    
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

    out.push(`class ${this.name} extends Component {`);

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
					//out.push(`\t\tthis.${p.name} = new ${p.func}([${p.context.inputs.map(t => `'${t}'`).join(',')}], [${p.context.outputs.map(t => `'${t}'`).join(',')}], [${p.context.temps.map(t => `'${t}'`).join(',')}]).Logic('${p.logic}');`);
					//out.push(`\t\tthis.${p.name} = new ${p.func}(${p.args.join(',')}).Context([${p.context.inputs.map(t => `'${t}'`).join(',')}], [${p.context.outputs.map(t => `'${t}'`).join(',')}]).Logic('${p.logic}');`);
				} else {
					out.push(`\t\tthis.${p.name} = new ${p.func}(${p.args.join(',')});`);
				}
	
				for (let ppk in p.pins) {
					let pp = sanitizeName(p.pins[ppk]);
					
					let isTemporary = !this.pins.includes(pp);
					var destPin = `this.pins.${pp}`;
	
					if (isTemporary) {
						if ((pp != '_D_HI') && (pp != '_D_LO') && (pp != '_D_NC'))
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

const core = require('./core');

function ConvertFile(filename) {
	const data = fs.readFileSync(filename + '.lib', 'utf8');
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
				comments['SN' + name] = cleanText.substring(firstSpace).trim();
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

	console.log(comments);

	let circuitsObjects = [];
	for (let c of circuits) {
		let newC = new Circuit(c);
		circuitsObjects.push(newC);
	}
	
	const codeLines = [];
	codeLines.push(`const { ${Object.keys(core).join(', ')} } = require('./core.js');`)
	for (var c of circuitsObjects) {
    let comment = comments[c.name];
    if (comment) {
      codeLines.push(`/**\n * ${comment}\n */`);
    }

		codeLines.push(c.compile());
	}
	
	let exp = [];
	for (var c of circuitsObjects) {
		exp.push(`module.exports.${c.name} = ${c.name};`);
	}
	codeLines.push(exp.join('\n'));
	
	fs.writeFileSync(filename + '_code.js', codeLines.join('\n'));
}

ConvertFile('74hc');
ConvertFile('74ls');