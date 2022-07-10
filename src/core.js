const { monitorEventLoopDelay } = require('perf_hooks');
const vm = require('vm');

Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

Object.defineProperty(global, '__line', {
  get: function(){
    return __stack[1].getLineNumber();
  }
});

global.__deepLine = function(l) {
	return __stack[l].getLineNumber();
}

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
		console.trace();
    Logger._Log(Logger.BASH_Color_Red, 'PANIC: ' + message, extra, payload);
		throw 'PANIC: ' + message;
  }
}


global.wires = [];
class Wire {
	constructor() {
		this.pins = [];
		this.value = null;
		global.wires.push(this);
	}

	MergeWithWire(wire) {
		if (!wire) return;

		this.pins.push(...wire.pins);
		for (let p of wire.pins)
			p.wire = this;
		wire._mergedWith = this;
	}

	ConnectPin(pin) {
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

	SetValue(value) {
		if (!this.wire) {
			this.wire = new Wire();
			this.wire.ConnectPin(this);
			Logger.Warning(`Wire not defined for Pin at line ${__deepLine(2)}!`);
		}
		this.wire.value = value;
	}

	GetValue() {
		if (!this.wire) return null;
		return this.wire.value;
	}
}
const _D_HI = new Pin();
const _D_LO = new Pin();
const _D_NC = new Pin();

class Footprint {
	constructor() {
		this.pins = {};
	}

	_addDebugNames() {
		for (let pk in this.pins) {
			this.pins[pk].name = pk;
		}
	}

	PinMap(regexFilter) {
		const keys = Object.keys(this.pins);
		if (regexFilter)
			keys = keys.filter(t => t.match(regexFilter));
		
		const pins = {};
		for (let k of keys)
			pins[k] = this.pins[k];

		return pins;
	}

	PinList(regexFilter) {
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
		if (isFootprint) return i.PinList();
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

		if (isFootprint) return i.PinMap();

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

	CheckMissingConnections() {
		// Check if all pins are connected
		for (let pk in this.pins) {
			let pinItem = this.pins[pk];

			if (!pinItem.wire) Logger.Warning(`Pin ${pk} not connected for circuit ${this.constructor.name}.`);
		}
	}
}

class Circuit extends Footprint {
	constructor(...args) {
		super();

		//this.init(...args);

		//this._addDebugNames();
	}

	//init() {}
	
	GetComponents(deep, ret) {
		ret = ret ?? {};
		for (let k in this) {
			let item = this[k];
			if (item instanceof Component)
				ret[k] = item;
			if (item instanceof Circuit)
				if (deep)	
					item.GetComponents(true, ret);
		}

		return ret;
	}

	GetCircuits() {
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
		_D_HI.SetValue(true);
		_D_LO.SetValue(false);

		if (!this.exeOrder) {
			let circuits = this.GetCircuits();
			let reverseCircuits = Object.keys(circuits).reverse().reduce((o, key) => ({ ...o, [key]: circuits[key]}), {})
			this.exeOrder = reverseCircuits;
		}

		for (let k in this.exeOrder)
			this.exeOrder[k].$execute(this);
		
		if (global.debug)
			if (this.$debug)
				this.$debug();
	}

	PrintPinValues(prefix) {
		if (this.$debug)
			this.$debug();
		for (let p in this.pins) {
			let pin = this.pins[p];
			if (pin instanceof Pin) {
				console.log(`[${prefix}] ${p}: ${pin.GetValue()}`);
			} else if (pin instanceof Plug) {
				for (let pp in pin.pins)
					console.log(`[${prefix}] ${p}.${pp}: ${pin.pins[pp].GetValue()}`);
			} else {
				Logger.Panic(`Instance ${pin.constructor.name} of Pin ${p} not supported!`);
			}
		}
	}

	SanityCheck() {
		// Check if all pins are connected
		this.CheckMissingConnections();

		let circuits = this.GetCircuits();
		for (let k in circuits)
			circuits[k].SanityCheck();
	}
}

class Component extends Circuit {

}

class Board extends Circuit {
	GetBoards() {
		let ret = {};
		for (let k in this) {
			let item = this[k];
			if (item instanceof Board)
				ret[k] = item;
		}
		return ret;
	}
}

class Bus extends Circuit {
	constructor(n, prefix) {
		super();

		this.prefix = prefix ?? '';

		if (Array.isArray(n)) {
			this.n = n.length;
			for (var i = 0; i < n.length; i++) {
				let nItem = n[i];
				if (!nItem) Logger.Panic(`Pin not found!`);
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
			this.n = n;
			for (var i = 0; i < n; i++)
				this.pins[`${this.prefix}${i}`] = new Pin();
		}
	}

	Split(start, end) {
		let ret = new Bus(0);
		for (var i = start; i <= end; i++) {
			ret.pins[`${this.prefix}${i}`] = this.pins[`${this.prefix}${i}`];
		}
		ret.prefix = this.prefix;
		return ret;
	}

	WriteData(data) {
		for (var i = 0; i < this.n; i++) {
			this.pins[`${this.prefix}${i}`].SetValue(data & 0x01 ? true : false);
			data = data >> 1;
		}
	}

	ReadData() {
		let out = 0x00;
		for (var i = 0; i < this.n; i++)
			out |= this.pins[`${this.prefix}${i}`].GetValue() ? (1 << i) : 0;
		return out;
	}
}

function Execute(circ) {

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
			newWire.MergeWithWire(srcPinItem.wire);

			let destWires = Footprint.GetConnectedWires(destPinMap);
			for (let w of destWires)
				newWire.MergeWithWire(w);

			// Connect pins to wire
			newWire.ConnectPin(srcPinItem);
			for (let p of destPinMap)
				newWire.ConnectPin(p);

			return newWire;
		} else {
			let newWires = [];

			for (let k in srcPinMap) {
				let newWire = new Wire();

				let srcPinItem = srcPinMap[k];
				let destPinItem = destPinMap[k];

				// Merge existing wires
				//if (srcPinItem.wire) throw srcPinItem;
				newWire.MergeWithWire(srcPinItem.wire);
				newWire.MergeWithWire(destPinItem.wire);

				// Connect pins to wire
				newWire.ConnectPin(srcPinItem);
				newWire.ConnectPin(destPinItem);

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
			IN0: new Pin(),
			OUT: new Pin()
		}
	}

	$execute() {
		this.pins.OUT.SetValue(!this.pins.IN0.GetValue());
	}
}

class inva extends Circuit {
	constructor(n) {
		super();

		this.n = n;

		this.n = n;
		for (var i = 0; i < n; i++) {
			this.pins[`IN${i}_0`] = new Pin();
			this.pins[`OUT${i}`] = new Pin();
		}
	}

	$execute() {
		for (var i = 0; i < this.n; i++)
			this.pins[`OUT${i}`].SetValue(!this.pins[`IN${i}_0`].GetValue());
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
			out = out && this.pins[`IN${i}`].GetValue();
		}
		this.pins.OUT.SetValue(out);
	}
}

class nand extends Circuit {
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
			out = out && this.pins[`IN${i}`].GetValue();
		}
		this.pins.OUT.SetValue(!out);
	}
}

class or extends Circuit {
	constructor(n) {
		super();

		this.n = n;
		for (var i = 0; i < n; i++) {
			this.pins[`IN${i}`] = new Pin();
		}
		this.pins.OUT = new Pin();
	}

	$execute() {
		let out = false;
		for (var i = 0; i < this.n; i++) {
			out = out || this.pins[`IN${i}`].GetValue();
		}
		this.pins.OUT.SetValue(out);
	}
}


class bufa extends Circuit {
	constructor(n) {
		super();

		for (var i = 0; i < n; i++) {
			this.pins[`IN${i}_0`] = new Pin();
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
			this.pins[`QBAR${i}`] = new Pin();
		}
	}

	$execute() {
		let presetActive = !this.pins.PRESET.GetValue();
		let clearActive = !this.pins.CLEAR.GetValue();
		let clock = this.pins.CLOCK.GetValue();

		for (var i = 0; i < this.n; i++) {
			if (clock && !this.oldClock)
				this.pins[`Q${i}`].SetValue(this.pins[`D${i}`].GetValue());

			if (presetActive)
				this.pins[`Q${i}`].SetValue(true);

			if (clearActive)
				this.pins[`Q${i}`].SetValue(false);
			
			this.pins[`QBAR${i}`].SetValue(!this.pins[`Q${i}`].GetValue());
		}

		this.oldClock = clock;
	}
}


class srff extends Circuit {
	constructor(n) {
		super();

		this.pins = {
			PRESET: new Pin(),
			CLEAR: new Pin(),
			GATE: new Pin()
		}

		this.n = n;
		for (var i = 0; i < n; i++) {
			this.pins[`S${i}`] = new Pin();
			this.pins[`R${i}`] = new Pin();
			this.pins[`Q${i}`] = new Pin();
			this.pins[`QBAR${i}`] = new Pin();
		}
	}

	$execute() {
		let presetActive = !this.pins.PRESET.GetValue();
		let clearActive = !this.pins.CLEAR.GetValue();
		let gate = this.pins.GATE.GetValue();

		for (var i = 0; i < this.n; i++) {
			if (gate) {
				if (this.pins[`S${i}`].GetValue()) this.pins[`Q${i}`].SetValue(true);
				if (this.pins[`R${i}`].GetValue()) this.pins[`Q${i}`].SetValue(false);
			}

			if (presetActive)
				this.pins[`Q${i}`].SetValue(true);

			if (clearActive)
					this.pins[`Q${i}`].SetValue(false);
			
			this.pins[`QBAR${i}`].SetValue(!this.pins[`Q${i}`].GetValue());
		}
	}
}

class dltch extends Circuit {
	constructor(n) {
		super();

		this.pins = {
			PRESET: new Pin(),
			CLEAR: new Pin(),
			GATE: new Pin()
		}

		this.n = n;
		for (var i = 0; i < n; i++) {
			this.pins[`D${i}`] = new Pin();
			this.pins[`Q${i}`] = new Pin();
			this.pins[`QBAR${i}`] = new Pin();
		}
	}

	$execute() {
		let presetActive = !this.pins.PRESET.GetValue();
		let clearActive = !this.pins.CLEAR.GetValue();
		let gate = this.pins.GATE.GetValue();

		for (var i = 0; i < this.n; i++) {
			if (gate)
				this.pins[`Q${i}`].SetValue(this.pins[`D${i}`].GetValue());
	
			if (presetActive)
				this.pins[`Q${i}`].SetValue(true);
	
			if (clearActive)
				this.pins[`Q${i}`].SetValue(false);
			
			this.pins[`QBAR${i}`].SetValue(!this.pins[`Q${i}`].GetValue());
		}
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
			this.pins[`IN${i}_0`] = new Pin();
			this.pins[`OUT${i}`] = new Pin();
		}
	}

	$execute() {
		if (this.pins.EN.GetValue())
			for (var i = 0; i < this.n; i++)
				this.pins[`OUT${i}`].SetValue(this.pins[`IN${i}_0`].GetValue());
	}
}

const scopeEval = require('./eval.js');

class logicexp extends Circuit {
	constructor(inputs, outputs, temps) {
		super();

		this.inputs = inputs;
		this.outputs = outputs;
		this.temps = temps ?? [];

		for (var i of inputs)
			this.pins[i] = new Pin();

		for (var i of outputs)
			this.pins[i] = new Pin();
	}

	Callback(cb) {
		this.cb = cb;
		return this;
	}

	$execute(owner) {
		this.cb.apply(owner);
		return;
	}
}

module.exports.Connect = Connect;
module.exports._D_HI = _D_HI;
module.exports._D_LO = _D_LO;
module.exports._D_NC = _D_NC;

module.exports.Logger = Logger;
module.exports.Wire = Wire;
module.exports.Pin = Pin;
module.exports.Footprint = Footprint;
module.exports.Circuit = Circuit;
module.exports.Component = Component;
module.exports.Board = Board;
module.exports.Bus = Bus;

module.exports.inv = inv;
module.exports.inva = inva;
module.exports.and = and;
module.exports.nand = nand;
module.exports.or = or;
module.exports.bufa = bufa;
module.exports.nora = nora;
module.exports.dff = dff;
module.exports.srff = srff;
module.exports.dltch = dltch;
module.exports.buf3a = buf3a;
module.exports.logicexp = logicexp;