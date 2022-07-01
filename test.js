const repl = require('repl');
const vm = require('vm');

class Logger {
  static BASH_Color_None = '\x1b[0m';
  static BASH_Color_Green = '\x1b[32m';
  static BASH_Color_Yellow = '\x1b[33m';
  static BASH_Color_Red = '\x1b[31m';
  static BASH_Color_Blue = '\x1b[34m';
  static BASH_Color_Magenta = '\x1b[35m';
  static BASH_Color_Cyan = '\x1b[36m';

  static verbosityLevel = 4;
  static SetVerbosity(level) {
    Logger.verbosityLevel = level;
  }

  static _Log(color, message, extra, payload) {
    let out = [];

    out.push(color);
    out.push(message);
    out.push(Logger.BASH_Color_None);

    if (extra) {
      out.push(' - ');
      out.push(extra);
    }

    if (payload) {
      out.push(' -> ');
      out.push(JSON.stringify(payload));
    }

    console.log(out.join(''));
  }

  static Info(message, extra, payload) {
    if (Logger.verbosityLevel < 4) return;
    Logger._Log(Logger.BASH_Color_Blue, 'INFO: ' + message, extra, payload);
  }
  static Ok(message, extra, payload) {
    if (Logger.verbosityLevel < 2) return;
    Logger._Log(Logger.BASH_Color_Green, 'OK: ' + message, extra, payload);
  }
  static Warning(message, extra, payload) {
    if (Logger.verbosityLevel < 3) return;
    Logger._Log(Logger.BASH_Color_Yellow, 'WARNING: ' + message, extra, payload);
  }
  static Error(message, extra, payload) {
    if (Logger.verbosityLevel < 1) return;
    Logger._Log(Logger.BASH_Color_Red, 'ERROR: ' + message, extra, payload);
  }
  static Panic(message, extra, payload) {
    if (Logger.verbosityLevel < 1) return;
    Logger._Log(Logger.BASH_Color_Red, 'PANIC: ' + message, extra, payload);
		throw 'PANIC: ' + message;
  }
}


class Wire {
	constructor() {
		this.pins = [];
		this.value = false;
	}

	mergeWithWire(wire) {
		if (!wire) return;

		this.pins.push(...wire.pins);
		for (let p of wire.pins)
			p.wire = this;
		wire._mergedWith = this;
	}

	connectPin(pin) {
		if (this._mergedWith) {
			Logger.Warning('Direct access to merged wire!');
			this._mergedWith.connectPin(pin);
			return;
		}

		if (!this.pins.includes(pin))
			this.pins.push(pin);
		pin.wire = this;
	}
}


class Pin {
	constructor() {
		this.wire = null;
	}

	setValue(value) {
		if (!this.wire) return;
		this.wire.value = value;
	}

	getValue() {
		if (!this.wire) return false;
		return this.wire.value;
	}
}
const _D_HI = new Pin();
const _D_LO = new Pin();

class Footprint {
	constructor() {
		this.pins = {};
	}

	_addDebugNames() {
		for (let pk in this.pins) {
			this.pins[pk].name = pk;
		}
	}

	pinMap(regexFilter) {
		const keys = Object.keys(this.pins);
		if (regexFilter)
			keys = keys.filter(t => t.match(regexFilter));
		
		const pins = {};
		for (let k of keys)
			pins[k] = this.pins[k];

		return pins;
	}

	pinList(regexFilter) {
		const keys = Object.keys(this.pins);
		if (regexFilter)
			keys = keys.filter(t => t.match(regexFilter));
		
		const pins = [];
		for (let k of keys)
			pins.push(this.pins[k]);

		return pins;
	}

	static GetPinList(i) {
		let isArray = Array.isArray(i);
		let isFootprint = i instanceof Footprint;

		if (isArray) return i;
		if (isFootprint) return i.pinList();
		return [i];
	}

	static GetPinMap(i) {
		let isArray = Array.isArray(i);
		let isFootprint = i instanceof Footprint;

		if (isArray) {
			let out = {};
			for (let j = 0; j < i.length; j++)
				out[j] = i[j];
			return out;
		}

		if (isFootprint) return i.pinMap();

		return { 0: i };
	}

	static GetConnectedWires(pins) {
		let ret = [];

		for (let p of pins) {
			if (p.wire)
				if (!ret.includes(p.wire))
					ret.push(p.wire);
		}

		return ret;
	}
}

class Plug extends Footprint {
	constructor(n, prefix) {
		super();

		this.pins = {};

		this.prefix = prefix ?? '';
		this.n = n;

		for (var i = 0; i < n; i++)
			this.pins[`${this.prefix}${i}`] = new Pin();
		
		//this._addDebugNames();
	}
}

class Circuit extends Footprint {
	constructor(...args) {
		super();

		//this.init(...args);

		//this._addDebugNames();
	}

	//init() {}

	getCircuits() {
		let ret = {};
		for (let k in this) {
			let item = this[k];
			if (item instanceof Circuit) {
				ret[k] = item;
			}
		}
		return ret;
	}

	$execute() {
		_D_HI.setValue(true);
		_D_LO.setValue(false);

		let circuits = this.getCircuits();

		for (let k in circuits)
			circuits[k].$execute();
	}
}

class Component extends Circuit {

}

class Board extends Component {

}

class Bus extends Circuit {
	constructor(n, prefix) {
		super();

		this.prefix = prefix ?? '';

		if (Array.isArray(n)) {
			for (var i = 0; i < n.length; i++) {
				let nItem = n[i];
				if (nItem instanceof Pin) {
					this.pins[`${this.prefix}${i}`] = nItem;
				} else if (nItem instanceof Bus) {
					for (let sk in nItem.pins) {
						this.pins[sk] = nItem.pins[sk];
					}
				} else {
					this.pins[`${this.prefix}${n[i]}`] = new Pin();
				}
			}
		} else {
			for (var i = 0; i < n; i++)
				this.pins[`${this.prefix}${i}`] = new Pin();
		}
	}
}


function Connect(srcPin, destPin) {
	const destIsAbsent = (destPin === undefined);

	if (destIsAbsent) {
		const srcIsArray = Array.isArray(srcPin);
		if (!srcIsArray) Logger.Panic(`Connection not allowed with a single pin`);


	} else {
		let srcPinMap = Footprint.GetPinList(srcPin);
		let destPinMap = Footprint.GetPinList(destPin);

		if (Object.keys(srcPinMap).length == 0) Logger.Panic(`Connection not allowed: srcPin is empty!`);
		if (Object.keys(destPinMap).length == 0) Logger.Panic(`Connection not allowed: destPin is empty!`);

		if ((Object.keys(srcPinMap).length > 1) && (Object.keys(destPinMap).length <= 1)) Logger.Panic(`Connection not allowed: cannot connect to a single destination!`);

		if (Object.keys(srcPinMap).length == 1) {
			let newWire = new Wire();

			let srcPinItem = srcPinMap[0];

			// Merge existing wires
			newWire.mergeWithWire(srcPinItem.wire);

			let destWires = Footprint.GetConnectedWires(destPinMap);
			for (let w of destWires)
				newWire.mergeWithWire(w);

			// Connect pins to wire
			newWire.connectPin(srcPinItem);
			for (let p of destPinMap)
				newWire.connectPin(p);

			return newWire;
		} else {
			let newWires = [];
			for (let k in srcPinMap) {
				let newWire = new Wire();

				let srcPinItem = srcPinMap[k];
				let destPinItem = destPinMap[k];

				// Merge existing wires
				//if (srcPinItem.wire) throw srcPinItem;
				newWire.mergeWithWire(srcPinItem.wire);
				newWire.mergeWithWire(destPinItem.wire);

				// Connect pins to wire
				newWire.connectPin(srcPinItem);
				newWire.connectPin(destPinItem);

				newWires.push(newWire);
			}

			return newWires;
		}
	}
}

class inv extends Circuit {
	constructor() {
		super();

		this.pins = {
			IN: new Pin(),
			OUT: new Pin()
		}
	}

	$execute() {
		this.pins.OUT.setValue(!this.pins.IN.getValue());
	}
}

class and extends Circuit {
	constructor(n) {
		super();

		this.n = n;
		for (var i = 0; i < n; i++) {
			this.pins[`IN${i}`] = new Pin();
		}
		this.pins.OUT = new Pin();
	}

	$execute() {
		let out = true;
		for (var i = 0; i < this.n; i++) {
			out = out && this.pins[`IN${i}`].getValue();
		}
		this.pins.OUT.setValue(out);
	}
}

class bufa extends Circuit {
	constructor(n) {
		super();

		for (var i = 0; i < n; i++) {
			this.pins[`IN${i}`] = new Pin();
			this.pins[`OUT${i}`] = new Pin();
		}
	}
}

class nora extends Circuit {
	constructor(ni, ng) {
		super();

		for (var g = 0; g < ng; g++) {
			for (var i = 0; i < ni; i++) {
				this.pins[`IN${g}_${i}`] = new Pin();
			}
			this.pins[`OUT${g}`] = new Pin();
		}
	}
}


class dff extends Circuit {
	constructor(n) {
		super();

		this.pins = {
			PRESET: new Pin(),
			CLEAR: new Pin(),
			CLOCK: new Pin()
		}

		this.oldClock = false;

		this.n = n;
		for (var i = 0; i < n; i++) {
			this.pins[`D${i}`] = new Pin();
			this.pins[`Q${i}`] = new Pin();
		}
	}

	$execute() {
		let presetActive = !this.pins.PRESET.getValue();
		let clearActive = !this.pins.CLEAR.getValue();
		let clock = this.pins.CLOCK.getValue();

		if (clock && !this.oldClock) {
			for (var i = 0; i < this.n; i++)
				this.pins[`Q${i}`].setValue(this.pins[`D${i}`].getValue());
		}

		if (presetActive)
			for (var i = 0; i < this.n; i++)
				this.pins[`Q${i}`].setValue(true);

		if (clearActive)
			for (var i = 0; i < this.n; i++)
				this.pins[`Q${i}`].setValue(false);
		
		this.oldClock = clock;
	}
}

class buf3a extends Circuit {
	constructor(n) {
		super();

		this.pins = {
			EN: new Pin()
		}

		this.n = n;
		for (var i = 0; i < n; i++) {
			this.pins[`D${i}`] = new Pin();
			this.pins[`Q${i}`] = new Pin();
		}
	}

	$execute() {
		if (this.pins.EN.getValue())
			for (var i = 0; i < this.n; i++)
				this.pins[`Q${i}`].setValue(this.pins[`D${i}`].getValue());
	}
}

class logicexp extends Circuit {
	constructor(inputs, outputs) {
		super();

		this.inputs = inputs;
		this.outputs = outputs;

		for (var i of inputs)
			this.pins[i] = new Pin();

		for (var i of outputs)
			this.pins[i] = new Pin();
	}


	Logic(code) {
		this.code = code;
		return this;
	}

	$execute() {
		let context = {};

		for (var i of this.inputs)
			context[i] = this.pins[i].getValue();
		for (var i of this.outputs)
			context[i] = null;
		
		vm.createContext(context); 
		vm.runInContext(this.code, context);

		for (var i of this.outputs)
			this.pins[i].setValue(context[i]);
	}
}

/**
 * Octal D-TYPE Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
 class SN74HC574 extends Component {
	constructor() {
		super();
		this.pins = {
			OCBAR: new Pin(),
			CLK: new Pin(),
			_1D: new Pin(),
			_2D: new Pin(),
			_3D: new Pin(),
			_4D: new Pin(),
			_5D: new Pin(),
			_6D: new Pin(),
			_7D: new Pin(),
			_8D: new Pin(),
			_1Q: new Pin(),
			_2Q: new Pin(),
			_3Q: new Pin(),
			_4Q: new Pin(),
			_5Q: new Pin(),
			_6Q: new Pin(),
			_7Q: new Pin(),
			_8Q: new Pin(),
		}
		this.UOC = new inv();
		Connect(this.UOC.pins.IN, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.UOC.pins.OUT, OC);
		this.UD = new dff(8);
		Connect(this.UD.pins.PRESET, _D_HI);
		Connect(this.UD.pins.CLEAR, _D_HI);
		Connect(this.UD.pins.CLOCK, this.pins.CLK);
		Connect(this.UD.pins.D0, this.pins._1D);
		Connect(this.UD.pins.D1, this.pins._2D);
		Connect(this.UD.pins.D2, this.pins._3D);
		Connect(this.UD.pins.D3, this.pins._4D);
		Connect(this.UD.pins.D4, this.pins._5D);
		Connect(this.UD.pins.D5, this.pins._6D);
		Connect(this.UD.pins.D6, this.pins._7D);
		Connect(this.UD.pins.D7, this.pins._8D);
		let SQ1 = new Pin();
		Connect(this.UD.pins.Q0, SQ1);
		let SQ2 = new Pin();
		Connect(this.UD.pins.Q1, SQ2);
		let SQ3 = new Pin();
		Connect(this.UD.pins.Q2, SQ3);
		let SQ4 = new Pin();
		Connect(this.UD.pins.Q3, SQ4);
		let SQ5 = new Pin();
		Connect(this.UD.pins.Q4, SQ5);
		let SQ6 = new Pin();
		Connect(this.UD.pins.Q5, SQ6);
		let SQ7 = new Pin();
		Connect(this.UD.pins.Q6, SQ7);
		let SQ8 = new Pin();
		Connect(this.UD.pins.Q7, SQ8);
		this.UQS = new buf3a(8);
		Connect(this.UQS.pins.D0, SQ1);
		Connect(this.UQS.pins.D1, SQ2);
		Connect(this.UQS.pins.D2, SQ3);
		Connect(this.UQS.pins.D3, SQ4);
		Connect(this.UQS.pins.D4, SQ5);
		Connect(this.UQS.pins.D5, SQ6);
		Connect(this.UQS.pins.D6, SQ7);
		Connect(this.UQS.pins.D7, SQ8);
		Connect(this.UQS.pins.EN, OC);
		Connect(this.UQS.pins.Q0, this.pins._1Q);
		Connect(this.UQS.pins.Q1, this.pins._2Q);
		Connect(this.UQS.pins.Q2, this.pins._3Q);
		Connect(this.UQS.pins.Q3, this.pins._4Q);
		Connect(this.UQS.pins.Q4, this.pins._5Q);
		Connect(this.UQS.pins.Q5, this.pins._6Q);
		Connect(this.UQS.pins.Q6, this.pins._7Q);
		Connect(this.UQS.pins.Q7, this.pins._8Q);
	}
}
SN74HC574.prototype.InputBus = function() {
	return new Bus([
		this.pins._1D,
		this.pins._2D,
		this.pins._3D,
		this.pins._4D,
		this.pins._5D,
		this.pins._6D,
		this.pins._7D,
		this.pins._8D
	]);
}
SN74HC574.prototype.OutputBus = function() {
	return new Bus([
		this.pins._1Q,
		this.pins._2Q,
		this.pins._3Q,
		this.pins._4Q,
		this.pins._5Q,
		this.pins._6Q,
		this.pins._7Q,
		this.pins._8Q
	]);
}


/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC245 extends Component {
	constructor() {
		super();

		this.pins = {
			DIR_I: new Pin(),
			GBAR_I: new Pin(),
			A1_B: new Pin(),
			A2_B: new Pin(),
			A3_B: new Pin(),
			A4_B: new Pin(),
			A5_B: new Pin(),
			A6_B: new Pin(),
			A7_B: new Pin(),
			A8_B: new Pin(),
			B1_B: new Pin(),
			B2_B: new Pin(),
			B3_B: new Pin(),
			B4_B: new Pin(),
			B5_B: new Pin(),
			B6_B: new Pin(),
			B7_B: new Pin(),
			B8_B: new Pin(),
		}
		this.U1 = new bufa(2);
		this.U2 = new inv();
		this.U3 = new nora(2,2);
		this.U4 = new buf3a(8);
		this.U5 = new buf3a(8);
	}
}
SN74HC245.prototype.InputBus = function() {
	return new Bus([
		this.pins.A1_B,
		this.pins.A2_B,
		this.pins.A3_B,
		this.pins.A4_B,
		this.pins.A5_B,
		this.pins.A6_B,
		this.pins.A7_B,
		this.pins.A8_B
	]);
}
SN74HC245.prototype.OutputBus = function() {
	return new Bus([
		this.pins.B1_B,
		this.pins.B2_B,
		this.pins.B3_B,
		this.pins.B4_B,
		this.pins.B5_B,
		this.pins.B6_B,
		this.pins.B7_B,
		this.pins.B8_B
	]);
}

/**
 * Quadruple 2-input Positive-And Gates
 */
class SN74HC08 extends Component {
	constructor() {
		super();

		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin()
		}
		this.U1 = new and(2);

		Connect(this.pins.A, this.U1.pins.IN0);
		Connect(this.pins.B, this.U1.pins.IN1);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}

/**
 * Hex Inverters with Open-Collector Outputs
 */
 class SN74HC05 extends Component {
	constructor() {
		super();

		this.pins = {
			A: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new inv();
		Connect(this.pins.A, this.U1.pins.IN);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}


/**
 * ALU _ FUNCTION GENERATOR
 */
 class SN74HC181 extends Component {
	constructor() {
		super();
		this.pins = {
			A0BAR_I: new Pin(),
			A1BAR_I: new Pin(),
			A2BAR_I: new Pin(),
			A3BAR_I: new Pin(),
			B0BAR_I: new Pin(),
			B1BAR_I: new Pin(),
			B2BAR_I: new Pin(),
			B3BAR_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			S2_I: new Pin(),
			S3_I: new Pin(),
			M_I: new Pin(),
			CN_I: new Pin(),
			F0BAR_O: new Pin(),
			F1BAR_O: new Pin(),
			F2BAR_O: new Pin(),
			F3BAR_O: new Pin(),
			AEQUALB_O: new Pin(),
			PBAR_O: new Pin(),
			GBAR_O: new Pin(),
			CN_4_O: new Pin(),
		}
		this.UHC181LOG = new logicexp(['A0BAR_I','A1BAR_I','A2BAR_I','A3BAR_I','B0BAR_I','B1BAR_I','B2BAR_I','B3BAR_I','S0_I','S1_I','S2_I','S3_I','M_I','CN_I'], ['A0BAR','A1BAR','A2BAR','A3BAR','B0BAR','B1BAR','B2BAR','B3BAR','S0','S1','S2','S3','M','CN','F0BAR','F1BAR','F2BAR','F3BAR','AEQUALB','PBAR','GBAR','CN_4']).Logic('   A0BAR   =  A0BAR_I ;   A1BAR   =  A1BAR_I ;   A2BAR   =  A2BAR_I ;   A3BAR   =  A3BAR_I ;   B0BAR   =  B0BAR_I ;   B1BAR   =  B1BAR_I ;   B2BAR   =  B2BAR_I ;   B3BAR   =  B3BAR_I ;   S0      =  S0_I ;   S1      =  S1_I ;   S2      =  S2_I ;   S3      =  S3_I ;   M       =  M_I ;   CN      =  CN_I ;let    TOP3    =  ~( (A3BAR & B3BAR & S3) | (A3BAR & ~B3BAR & S2) ) ;let    BOT3    =  ~(        (~B3BAR & S1) |  A3BAR | (B3BAR & S0) ) ;let    TOP2    =  ~( (A2BAR & B2BAR & S3) | (A2BAR & ~B2BAR & S2) ) ;let    BOT2    =  ~(        (~B2BAR & S1) |  A2BAR | (B2BAR & S0) ) ;let    TOP1    =  ~( (A1BAR & B1BAR & S3) | (A1BAR & ~B1BAR & S2) ) ;let    BOT1    =  ~(        (~B1BAR & S1) |  A1BAR | (B1BAR & S0) ) ;let    TOP0    =  ~( (A0BAR & B0BAR & S3) | (A0BAR & ~B0BAR & S2) ) ;let    BOT0    =  ~(        (~B0BAR & S1) |  A0BAR | (B0BAR & S0) ) ;let    MBAR    =  ~M ;   F3BAR   =  (TOP3 ^ BOT3) ^ ~( (  CN & MBAR & TOP2 & TOP1 & TOP0) |                                  (BOT0 & MBAR & TOP2 & TOP1) |                                  (BOT1 & MBAR & TOP2) |                                  (BOT2 & MBAR) ) ;   F2BAR   =  (TOP2 ^ BOT2) ^ ~( (  CN & MBAR & TOP1 & TOP0) |                                  (BOT0 & MBAR & TOP1) |                                  (BOT1 & MBAR) ) ;   F1BAR   =  (TOP1 ^ BOT1) ^ ~( (  CN & MBAR & TOP0) |                                  (BOT0 & MBAR) ) ;   F0BAR   =  (TOP0 ^ BOT0) ^ ~(    CN & MBAR) ;   AEQUALB =  F3BAR & F2BAR & F1BAR & F0BAR ;   PBAR    =  ~(         TOP3 & TOP2 & TOP1 & TOP0) ;   GBAR    =  ~( (BOT0 & TOP3 & TOP2 & TOP1) |                  (BOT1 & TOP3 & TOP2) |                  (BOT2 & TOP3) |                    BOT3 ) ;let    CN_4    =  ~GBAR | (~PBAR & CN) ;');
		Connect(this.UHC181LOG.pins.A0BAR_I, this.pins.A0BAR_I);
		Connect(this.UHC181LOG.pins.A1BAR_I, this.pins.A1BAR_I);
		Connect(this.UHC181LOG.pins.A2BAR_I, this.pins.A2BAR_I);
		Connect(this.UHC181LOG.pins.A3BAR_I, this.pins.A3BAR_I);
		Connect(this.UHC181LOG.pins.B0BAR_I, this.pins.B0BAR_I);
		Connect(this.UHC181LOG.pins.B1BAR_I, this.pins.B1BAR_I);
		Connect(this.UHC181LOG.pins.B2BAR_I, this.pins.B2BAR_I);
		Connect(this.UHC181LOG.pins.B3BAR_I, this.pins.B3BAR_I);
		Connect(this.UHC181LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.UHC181LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.UHC181LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.UHC181LOG.pins.S3_I, this.pins.S3_I);
		Connect(this.UHC181LOG.pins.M_I, this.pins.M_I);
		Connect(this.UHC181LOG.pins.CN_I, this.pins.CN_I);
		let A0BAR = new Pin();
		Connect(this.UHC181LOG.pins.A0BAR, A0BAR);
		let A1BAR = new Pin();
		Connect(this.UHC181LOG.pins.A1BAR, A1BAR);
		let A2BAR = new Pin();
		Connect(this.UHC181LOG.pins.A2BAR, A2BAR);
		let A3BAR = new Pin();
		Connect(this.UHC181LOG.pins.A3BAR, A3BAR);
		let B0BAR = new Pin();
		Connect(this.UHC181LOG.pins.B0BAR, B0BAR);
		let B1BAR = new Pin();
		Connect(this.UHC181LOG.pins.B1BAR, B1BAR);
		let B2BAR = new Pin();
		Connect(this.UHC181LOG.pins.B2BAR, B2BAR);
		let B3BAR = new Pin();
		Connect(this.UHC181LOG.pins.B3BAR, B3BAR);
		let S0 = new Pin();
		Connect(this.UHC181LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.UHC181LOG.pins.S1, S1);
		let S2 = new Pin();
		Connect(this.UHC181LOG.pins.S2, S2);
		let S3 = new Pin();
		Connect(this.UHC181LOG.pins.S3, S3);
		let M = new Pin();
		Connect(this.UHC181LOG.pins.M, M);
		let CN = new Pin();
		Connect(this.UHC181LOG.pins.CN, CN);
		let F0BAR = new Pin();
		Connect(this.UHC181LOG.pins.F0BAR, F0BAR);
		let F1BAR = new Pin();
		Connect(this.UHC181LOG.pins.F1BAR, F1BAR);
		let F2BAR = new Pin();
		Connect(this.UHC181LOG.pins.F2BAR, F2BAR);
		let F3BAR = new Pin();
		Connect(this.UHC181LOG.pins.F3BAR, F3BAR);
		let AEQUALB = new Pin();
		Connect(this.UHC181LOG.pins.AEQUALB, AEQUALB);
		let PBAR = new Pin();
		Connect(this.UHC181LOG.pins.PBAR, PBAR);
		let GBAR = new Pin();
		Connect(this.UHC181LOG.pins.GBAR, GBAR);
	}
}

class Register_8Bit extends Circuit {
	constructor() {
		super();

		this.pins = {
			bus: new Plug(8, 'D'),
			cs: new Pin(),
			wr: new Pin()
		}

		this.b1 = new Bus(8);
		this.c1 = new SN74HC574();
		this.c2 = new SN74HC245();

		Connect(this.pins.bus, this.b1);

		Connect(this.b1, this.c1.InputBus());
		Connect(this.c1.OutputBus(), this.c2.InputBus());
		Connect(this.c2.OutputBus(), this.b1);

		Connect(this.pins.cs, this.c1.pins.OCBAR);
	}
}

class MainBoard extends Board {
	constructor() {		
		super();

		this.backplane = new Bus([ new Bus(8, 'D'), new Bus(16, 'A'), 'WR', 'CS1' ])
		this.reg_A = new Register_8Bit();
		this.reg_B = new Register_8Bit();
		this.reg_C = new Register_8Bit();

		Connect(this.reg_A.pins.bus, this.backplane);
	}
}


class TestBoard extends Board {
	constructor() {
		super();

		this.pins = {
			a: new Pin(),
			q: new Pin(),
			z: new Pin(),
		}

		this.u1 = new SN74HC08();
		this.u2 = new SN74HC05();
		this.u20 = new SN74HC05();
		this.u3 = new SN74HC574();
		this.u100 = new SN74HC181();

		let p = new Pin();

		Connect(this.pins.a, this.u1.pins.A);
		Connect(this.pins.a, this.u1.pins.B);

		Connect(this.pins.q, this.u1.pins.Y);

		Connect(this.u1.pins.Y, this.u2.pins.A);
		Connect(this.u2.pins.Y, p);
		Connect(p, this.u20.pins.A);
		Connect(this.u20.pins.Y, this.pins.z);
	}
}

let t = new TestBoard();

t.u3.pins._1D.setValue(true);
t.$execute();
console.log(t.u3.pins._1Q.getValue());

t.u3.pins.CLK.setValue(true);
t.$execute();
console.log(t.u3.pins._1Q.getValue());

t.u3.pins._1D.setValue(false);
t.$execute();
console.log(t.u3.pins._1Q.getValue());

t.u3.pins.CLK.setValue(false);
t.$execute();
console.log(t.u3.pins._1Q.getValue());

t.u3.pins.CLK.setValue(true);
t.$execute();
console.log(t.u3.pins._1Q.getValue());





global.TestBoard = TestBoard;
//const local = repl.start('inv> ');