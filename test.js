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
		this.value = false;
	}
}

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
		
		this._addDebugNames();
	}
}

class Circuit extends Footprint {
	constructor(...args) {
		super();

		this.init(...args);

		this._addDebugNames();
	}

	init() {}

	$execute() {}
}

class Component extends Circuit {

}

class Board extends Component {

}

class Bus extends Circuit {
	init(n, prefix) {
		this.prefix = prefix ?? '';

		if (Array.isArray(n)) {
			for (var i = 0; i < n.length; i++) {
				let nItem = n[i];
				if (nItem instanceof Pin) {
					this.pins[`${this.prefix}${i}`] = n;
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
		let srcPinList = Footprint.GetPinList(srcPin);
		let destPinList = Footprint.GetPinList(destPin);

		if (srcPinList.length == 0) Logger.Panic(`Connection not allowed: srcPin is empty!`);
		if (destPinList.length == 0) Logger.Panic(`Connection not allowed: destPin is empty!`);

		if ((srcPinList.length > 1) && (destPinList.length <= 1)) Logger.Panic(`Connection not allowed: cannot connect to a single destination!`);


		if (srcPinList.length == 1) {
			let newWire = new Wire();

			let srcPinItem = srcPinList[0];

			// Merge existing wires
			newWire.mergeWithWire(srcPinItem.wire);

			let destWires = Footprint.GetConnectedWires(destPinList);
			for (let w of destWires)
				newWire.mergeWithWire(w);

			// Connect pins to wire
			newWire.connectPin(srcPinItem);
			for (let p of destPinList)
				newWire.connectPin(p);

			return newWire;
		} else {
			if (srcPinList.length != destPinList.length) Logger.Panic(`Connection not allowed: mismatching pins sizes!`);

			let newWires = [];
			for (let i = 0; i < srcPinList.length; i++) {
				let newWire = new Wire();

				let srcPinItem = srcPinList[i];
				let destPinItem = destPinList[i];

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
	init() {
		this.pins = {
			IN: new Pin(),
			OUT: new Pin()
		}
	}
}

class bufa extends Circuit {
	init(n) {
		for (var i = 0; i < n; i++) {
			this.pins[`IN${i}`] = new Pin();
			this.pins[`OUT${i}`] = new Pin();
		}
	}
}

class nora extends Circuit {
	init(ni, ng) {
		for (var g = 0; g < ng; g++) {
			for (var i = 0; i < ni; i++) {
				this.pins[`IN${g}_${i}`] = new Pin();
			}
			this.pins[`OUT${g}`] = new Pin();
		}
	}
}


class dff extends Circuit {
	init(n) {
		this.pins = {
			PRESET: new Pin(),
			CLEAR: new Pin(),
			CLOCK: new Pin()
		}

		for (var i = 0; i < n; i++) {
			this.pins[`D${i}`] = new Pin();
			this.pins[`Q${i}`] = new Pin();
		}
	}
}

class buf3a extends Circuit {
	init(n) {
		this.pins = {
			EN: new Pin()
		}

		for (var i = 0; i < n; i++) {
			this.pins[`D${i}`] = new Pin();
			this.pins[`Q${i}`] = new Pin();
		}
	}
}

/**
 * Octal D-TYPE Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74HC574 extends Component {
	init() {
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
		this.UD = new dff(8);
		this.UQS = new buf3a(8);
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
	init() {
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


class Register_8Bit extends Circuit {
	init() {
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
		//Connect(this.c1.OutputBus(), this.c2.InputBus());
		//Connect(this.c2.OutputBus(), this.b1);

		//Connect(this.pins.cs, this.c1.pins.OCBAR);
	}
}

class MainBoard extends Board {
	init() {		
		this.backplane = new Bus([ new Bus(8, 'D'), new Bus(16, 'A'), 'WR', 'CS1' ])
		this.reg_A = new Register_8Bit();
		this.reg_B = new Register_8Bit();
		this.reg_C = new Register_8Bit();
	}
}

let m = new MainBoard();
let pp = m.reg_A.pins.bus.pinList();
console.log(pp);