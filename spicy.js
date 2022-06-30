const { publicDecrypt } = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('74hc.lib', 'utf8');

const lines = data.split('\n');

const outLines = [];
var outLine = '';
for (let l of lines) {
	if (l.startsWith('*'))
    if (!l.startsWith('* 74'))
      continue;
	if (!l.startsWith('+')) { outLines.push(outLine); outLine = ''; }

	if (l.startsWith('+')) l = l.substring(1);
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

		if (C_func.toUpperCase() != 'PINDLY') {
      cleanLines.push(l);
      circuitLines.push(l);

      let C_func_clear = C_func.split('(')[0].toLowerCase();
      functions[C_func_clear] |= 0; 
      functions[C_func_clear]++; 
    }
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
  }


  getToken() {
    while (this.ptr < this.str.length) {
      let ch = this.str[this.ptr];
      this.ptr++;

      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch == '_')) {
        let out = ch;

        ch = this.str[this.ptr];
        while ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9') || (ch == '_') || (ch == ':')) {
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

        this.ptr--;
        return { type: 'args', start: this.ptr - out.length, length: out.length, content: out };
      }
    }
  }

}


class Part {
  constructor(line) {
    let tokenizer = new Tokenizer(line);

    this.name = tokenizer.getToken().content;
    this.func = tokenizer.getToken().content.toLowerCase();
    this.args = [];

    let tokenArgs = tokenizer.getToken();
    if (tokenArgs.type == 'args')
      this.args = tokenArgs.content.substring(1, tokenArgs.content.length - 1).split(',');

    let mapper = this[`map_${this.func}`];
    if (!mapper) throw `Mapper map_${this.func} not found!`;
    mapper.apply(this, [ tokenizer, this.args ]);
  }

  map_nand(t, a) {
    this.inputs = [];
    this.output = null;

    t.getToken();
    t.getToken();

    for (var i = 0; i < a[0]; i++)
      this.inputs.push(t.getToken().content);

    this.output = t.getToken().content;
  }
  map_nor(t, a) { }
  map_inv(t, a) { }
  map_and(t, a) { }
  map_or(t, a) { }
  map_buf(t, a) { }
  map_logicexp(t, a) { }
  map_aoi(t, a) { }
  map_jkff(t, a) { }
  map_dff(t, a) { }
  map_bufa(t, a) { }
  map_dltch(t, a) { }
  map_xor(t, a) { }
  map_inva(t, a) { }
  map_buf3(t, a) { }
  map_srff(t, a) { }
  map_inv3a(t, a) { }
  map_buf3a(t, a) { }
  map_nora(t, a) { }
  map_nanda(t, a) { }
  map_ora(t, a) { }
  map_nxor(t, a) { }
  map_wdthck(t, a) { }
  map_ao(t, a) { }
  map_anda(t, a) { }
  map_suhdck(t, a) { }
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

    let comment = comments[this.name];
    if (comment) {
      out.push('/**');
      out.push(` * ${comment}`);
      out.push(' */');
    }
    out.push(`class SN${this.name} {`);

    out.push(`\tconstructor() {`);
    out.push(`\t\tthis.pins = {`);
    for (let p of this.pins) {
      out.push(`\t\t\t${p}: false,`);
    }
    out.push(`\t\t}`);
    for (let p of this.parts) {
      out.push(`\t\tthis.${p.name} = new ${p.func}(${p.args.join(',')});`);
    }
    out.push(`\t}`);

    out.push('}');

    return out.join('\n');
  }
}

let circuitsObjects = [];
for (let c of circuits) {
  let newC = new Circuit(c);
  circuitsObjects.push(newC);
}

const codeLines = [];
for (var c of circuitsObjects) {
  codeLines.push(c.compile());
}

console.log(comments);

fs.writeFileSync('74hc_code.js', codeLines.join('\n\n'));

fs.writeFileSync('74hc_functions.txt', JSON.stringify(functions, null, 2));
fs.writeFileSync('74hc_oneline.lib', outLines.join('\n'));
fs.writeFileSync('74hc_clean.lib', cleanLines.join('\n'));
fs.writeFileSync('74hc_circuits_list.lib', JSON.stringify(circuits, null, 2));
fs.writeFileSync('74hc_circuits.lib', JSON.stringify(circuitsObjects, null, 2));