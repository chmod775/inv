const repl = require('repl');

const core = require('./core.js');
const hc = require('./74hc_code.js');
const ls = require('./74ls_code.js');

SN74HC573.prototype.InputBus = function() {
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
SN74HC573.prototype.OutputBus = function() {
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

SN74HC244.prototype.InputBus = function() {
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
SN74HC244.prototype.OutputBus = function() {
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

SN74HC154.prototype.SelBus = function() {
	return new Bus([
		this.pins.A_I,
		this.pins.B_I,
		this.pins.C_I,
		this.pins.D_I
	]);
}


SN74HC181.prototype.ABus = function() {
	return new Bus([
		this.pins.A0BAR_I,
		this.pins.A1BAR_I,
		this.pins.A2BAR_I,
		this.pins.A3BAR_I
	]);
}
SN74HC181.prototype.BBus = function() {
	return new Bus([
		this.pins.B0BAR_I,
		this.pins.B1BAR_I,
		this.pins.B2BAR_I,
		this.pins.B3BAR_I
	]);
}
SN74HC181.prototype.OutBus = function() {
	return new Bus([
		this.pins.F0BAR_I,
		this.pins.F1BAR_I,
		this.pins.F2BAR_I,
		this.pins.F3BAR_I
	]);
}

class Register_8Bit extends Circuit {
	constructor() {
		super();

		this.pins = {
			bus: new Plug(8, 'D'),
			le: new Pin(),
			oe: new Pin()
		}

		this.b1 = new Bus(8);
		this.c1 = new SN74HC573();
		//this.c2 = new SN74HC244();

		Connect(this.pins.bus, this.b1);

		Connect(this.b1, this.c1.InputBus());
		//Connect(this.c1.OutputBus(), this.c2.InputBus());
		Connect(this.c1.OutputBus(), this.b1);

		Connect(this.pins.oe, this.c1.pins.OCBAR);
		Connect(this.pins.le, this.c1.pins.C);
	}
}

class RegistersBoard extends Board {
	constructor(n_regs) {		
		super();

		this.pins = {
			data: new Plug(8, 'D'),
			sel: new Plug(4, 'A'),
			le: new Pin(),
			oe: new Pin()
		};

		for (var i = 0; i < n_regs; i++) {
			this[`reg_${i}`] = new Register_8Bit();
			Connect(this[`reg_${i}`].pins.bus, this.pins.data);
		}
		
		// OE Demultiplexer
		this.oe_demult = new SN74HC154();
		Connect(this.pins.oe, this.oe_demult.pins.G1BAR_I);
		Connect(this.pins.oe, this.oe_demult.pins.G2BAR_I);
		Connect(this.pins.sel, this.oe_demult.SelBus());
		for (var i = 0; i < n_regs; i++)
			Connect(this.oe_demult.pins[`Y${i}_O`], this[`reg_${i}`].pins.oe);
		
		// LE Demultiplexer
		this.le_demult = new SN74HC154();
		Connect(this.pins.le, this.le_demult.pins.G1BAR_I);
		Connect(this.pins.le, this.le_demult.pins.G2BAR_I);
		Connect(this.pins.sel, this.le_demult.SelBus());
		for (var i = 0; i < n_regs; i++) {
			let newInv = new SN74HC04();
			this[`le_inv_${i}`] = newInv;

			Connect(this.le_demult.pins[`Y${i}_O`], newInv.pins.A);
			Connect(newInv.pins.Y, this[`reg_${i}`].pins.le)
		}
	}

	WriteValue(sel, value) {
		this.pins.data.WriteData(value);
		this.pins.sel.WriteData(sel);
		this.pins.le.SetValue(false);
		this.pins.oe.SetValue(true);
		this.$execute();this.$execute();

		this.pins.le.SetValue(true);
		this.pins.oe.SetValue(true);
		this.$execute();this.$execute();
	}

	ReadValue(sel) {
		this.pins.sel.WriteData(sel);
		this.pins.le.SetValue(true);
		this.pins.oe.SetValue(false);
		this.$execute();this.$execute();

		return this.pins.data.ReadData();
	}
}

class ALUBoard extends Board {
	constructor() {
		super();

		this.pins = {
			data: new Plug(8, 'D'),
			op: new Plug(4, 'OP'),
			exe: new Pin()
		};

		this.alu = new SN74HC181();
		this.pre_acc = new SN74HC574();
		this.post_acc = new SN74HC574();
		this.buf = new SN74HC244();

		let lsb_dataBus = this.pins.data.Split(0, 3);
		let msb_dataBus = this.pins.data.Split(4, 7);

		let lsb_accBus = this.post_acc.OutputBus().Split(0, 3);
		let msb_accBus = this.post_acc.OutputBus().Split(4, 7);

		Connect(lsb_dataBus, this.alu.ABus());
		Connect(lsb_accBus, this.alu.BBus());



	}

	Execute() {

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

		this.u101 = new SN74LS47();

		this.reg = new Register_8Bit();

		let p = new Pin();

		Connect(this.pins.a, this.u1.pins.A);
		Connect(this.pins.a, this.u1.pins.B);

		Connect(this.pins.q, this.u1.pins.Y);

		Connect(this.u1.pins.Y, this.u2.pins.A);
		Connect(this.u2.pins.Y, p);
		Connect(p, this.u20.pins.A);
		Connect(this.u20.pins.Y, this.pins.z);

		Connect(this.u101.pins.LTBAR_I, _D_HI);
		Connect(this.u101.pins.RBIBAR_I, _D_HI);

		Connect(this.u101.pins.INA_I, this.u100.pins.F0BAR_O);
		Connect(this.u101.pins.INB_I, this.u100.pins.F1BAR_O);
		Connect(this.u101.pins.INC_I, this.u100.pins.F2BAR_O);
		Connect(this.u101.pins.IND_I, this.u100.pins.F3BAR_O);
	}

	printSegments() {
		let SEG_A = !this.u101.pins.OUTA_O.GetValue() ? '_' : ' ';
		let SEG_B = !this.u101.pins.OUTB_O.GetValue() ? '|' : ' ';
		let SEG_C = !this.u101.pins.OUTC_O.GetValue() ? '|' : ' ';
		let SEG_D = !this.u101.pins.OUTD_O.GetValue() ? '_' : ' ';
		let SEG_E = !this.u101.pins.OUTE_O.GetValue() ? '|' : ' ';
		let SEG_F = !this.u101.pins.OUTF_O.GetValue() ? '|' : ' ';
		let SEG_G = !this.u101.pins.OUTG_O.GetValue() ? '_' : ' ';

		let out = ` ${SEG_A} \n${SEG_F}${SEG_G}${SEG_B}\n${SEG_E}${SEG_D}${SEG_C}\n`;
		console.log(out);
	}
}

let t = new TestBoard();
/*
t.u3.pins._1D.SetValue(true);
t.$execute();
console.log(t.u3.pins._1Q.GetValue());

t.u3.pins.CLK.SetValue(true);
t.$execute();
console.log(t.u3.pins._1Q.GetValue());

t.u3.pins._1D.SetValue(false);
t.$execute();
console.log(t.u3.pins._1Q.GetValue());

t.u3.pins.CLK.SetValue(false);
t.$execute();
console.log(t.u3.pins._1Q.GetValue());

t.u3.pins.CLK.SetValue(true);
t.$execute();
console.log(t.u3.pins._1Q.GetValue());
*/

t.u100.pins.M_I.SetValue(false);
t.u100.pins.CN_I.SetValue(true);
t.u100.pins.S0_I.SetValue(true);
t.u100.pins.S1_I.SetValue(false);
t.u100.pins.S2_I.SetValue(false);
t.u100.pins.S3_I.SetValue(true);

t.u100.pins.A0BAR_I.SetValue(false);
t.u100.pins.A1BAR_I.SetValue(false);
t.u100.pins.A2BAR_I.SetValue(true);
t.u100.pins.A3BAR_I.SetValue(false);

t.u100.pins.B0BAR_I.SetValue(false);
t.u100.pins.B1BAR_I.SetValue(false);
t.u100.pins.B2BAR_I.SetValue(false);
t.u100.pins.B3BAR_I.SetValue(false);

t.$execute();t.$execute();

console.log(t.u100.pins.F0BAR_O.GetValue());
console.log(t.u100.pins.F1BAR_O.GetValue());
console.log(t.u100.pins.F2BAR_O.GetValue());
console.log(t.u100.pins.F3BAR_O.GetValue());

console.log('');
/*
t.reg.pins.bus.WriteData(10);
t.reg.pins.le.SetValue(true);
t.reg.pins.oe.SetValue(true);
t.$execute();t.$execute();

t.reg.pins.le.SetValue(false);
t.reg.pins.oe.SetValue(true);
t.$execute();t.$execute();

t.reg.pins.bus.WriteData(111);
t.reg.pins.le.SetValue(false);
t.reg.pins.oe.SetValue(false);
t.$execute();t.$execute();


console.log(t.reg.pins.bus.ReadData());
*/

t.printSegments();


let b = new RegistersBoard(8);
let a = new ALUBoard();
/*
b.pins.data.WriteData(111);
b.pins.sel.WriteData(0);
b.pins.le.SetValue(false);
b.pins.oe.SetValue(true);
b.$execute();b.$execute();

b.pins.le.SetValue(true);
b.pins.oe.SetValue(true);
b.$execute();b.$execute();

b.pins.data.WriteData(3);
b.pins.sel.WriteData(0);
b.pins.le.SetValue(true);
b.pins.oe.SetValue(false);
b.$execute();b.$execute();

console.log(b.pins.data.ReadData());
*/

b.WriteValue(0, 123);
b.WriteValue(1, 1);
b.WriteValue(2, 255);
b.WriteValue(3, 3);
b.WriteValue(4, 5);
console.log(b.ReadValue(0));
console.log(b.ReadValue(1));
console.log(b.ReadValue(2));
console.log(b.ReadValue(3));
console.log(b.ReadValue(4));

