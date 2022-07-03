const repl = require('repl');

const core = require('./core.js');
const hc = require('./74hc_code.js');
const ls = require('./74ls_code.js');

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

		this.u101 = new SN74LS47();

		let p = new Pin();

		Connect(this.pins.a, this.u1.pins.A);
		Connect(this.pins.a, this.u1.pins.B);

		Connect(this.pins.q, this.u1.pins.Y);

		Connect(this.u1.pins.Y, this.u2.pins.A);
		Connect(this.u2.pins.Y, p);
		Connect(p, this.u20.pins.A);
		Connect(this.u20.pins.Y, this.pins.z);

		Connect(this.u101.pins.LTBAR_I, _D_HI);
		Connect(this.u101.pins.BIBAR_RBOBAR_B, _D_HI);

		Connect(this.u101.pins.INA_I, this.u100.pins.F0BAR_O);
		Connect(this.u101.pins.INB_I, this.u100.pins.F1BAR_O);
		Connect(this.u101.pins.INC_I, this.u100.pins.F2BAR_O);
		Connect(this.u101.pins.IND_I, this.u100.pins.F3BAR_O);
	}

	printSegments() {
		let SEG_A = !this.u101.pins.OUTA_O.getValue() ? '_' : ' ';
		let SEG_B = !this.u101.pins.OUTB_O.getValue() ? '|' : ' ';
		let SEG_C = !this.u101.pins.OUTC_O.getValue() ? '|' : ' ';
		let SEG_D = !this.u101.pins.OUTD_O.getValue() ? '_' : ' ';
		let SEG_E = !this.u101.pins.OUTE_O.getValue() ? '|' : ' ';
		let SEG_F = !this.u101.pins.OUTF_O.getValue() ? '|' : ' ';
		let SEG_G = !this.u101.pins.OUTG_O.getValue() ? '_' : ' ';

		let out = ` ${SEG_A} \n${SEG_F}${SEG_G}${SEG_B}\n${SEG_E}${SEG_D}${SEG_C}\n`;
		console.log(out);
	}
}

let t = new TestBoard();
/*
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
*/

t.u100.pins.M_I.setValue(false);
t.u100.pins.CN_I.setValue(true);
t.u100.pins.S0_I.setValue(true);
t.u100.pins.S1_I.setValue(false);
t.u100.pins.S2_I.setValue(false);
t.u100.pins.S3_I.setValue(true);

t.u100.pins.A0BAR_I.setValue(false);
t.u100.pins.A1BAR_I.setValue(true);
t.u100.pins.A2BAR_I.setValue(true);
t.u100.pins.A3BAR_I.setValue(false);

t.u100.pins.B0BAR_I.setValue(false);
t.u100.pins.B1BAR_I.setValue(false);
t.u100.pins.B2BAR_I.setValue(false);
t.u100.pins.B3BAR_I.setValue(false);

t.$execute();

console.log(t.u100.pins.F0BAR_O.getValue());
console.log(t.u100.pins.F1BAR_O.getValue());
console.log(t.u100.pins.F2BAR_O.getValue());
console.log(t.u100.pins.F3BAR_O.getValue());

console.log('');

t.printSegments();

global.TestBoard = TestBoard;
//const local = repl.start('inv> ');