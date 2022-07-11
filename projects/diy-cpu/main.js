const repl = require('repl');

const { Connect, _D_HI, _D_LO, Logger, Wire, Pin, Footprint, Circuit, Component, Board, Bus, inv, inva, and, or, bufa, nora, dff, dltch, buf3a, logicexp } = require('../../src/core.js');
const hc = require('../../generated/74hc_code.js');
const ls = require('../../generated/74ls_code.js');

hc.SN74HC573.prototype.InputBus = function() {
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
hc.SN74HC573.prototype.OutputBus = function() {
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
hc.SN74HC573.prototype._readValue = function() {
	let internalBus = new Bus([
		this.U2.pins.IN0_0,
		this.U2.pins.IN1_0,
		this.U2.pins.IN2_0,
		this.U2.pins.IN3_0,
		this.U2.pins.IN4_0,
		this.U2.pins.IN5_0,
		this.U2.pins.IN6_0,
		this.U2.pins.IN7_0
	]);

	return internalBus.ReadData();
}


hc.SN74HC574.prototype.InputBus = function() {
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
hc.SN74HC574.prototype.OutputBus = function() {
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


hc.SN74HC244.prototype.InputBus = function() {
	return new Bus([
		this.pins._1A1,
		this.pins._1A2,
		this.pins._1A3,
		this.pins._1A4,
		this.pins._2A1,
		this.pins._2A2,
		this.pins._2A3,
		this.pins._2A4
	]);
}
hc.SN74HC244.prototype.OutputBus = function() {
	return new Bus([
		this.pins._1Y1,
		this.pins._1Y2,
		this.pins._1Y3,
		this.pins._1Y4,
		this.pins._2Y1,
		this.pins._2Y2,
		this.pins._2Y3,
		this.pins._2Y4
	]);
}

hc.SN74HC138.prototype.SelBus = function() {
	return new Bus([
		this.pins.A_I,
		this.pins.B_I,
		this.pins.C_I
	]);
}
hc.SN74HC138.prototype.OutputBus = function() {
	return new Bus([
		this.pins.Y0_O,
		this.pins.Y1_O,
		this.pins.Y2_O,
		this.pins.Y3_O,
		this.pins.Y4_O,
		this.pins.Y5_O,
		this.pins.Y6_O,
		this.pins.Y7_O
	]);
}

hc.SN74HC154.prototype.SelBus = function() {
	return new Bus([
		this.pins.A_I,
		this.pins.B_I,
		this.pins.C_I,
		this.pins.D_I
	]);
}
hc.SN74HC154.prototype.OutputBus = function() {
	return new Bus([
		this.pins.Y0_O,
		this.pins.Y1_O,
		this.pins.Y2_O,
		this.pins.Y3_O,
		this.pins.Y4_O,
		this.pins.Y5_O,
		this.pins.Y6_O,
		this.pins.Y7_O,
		this.pins.Y8_O,
		this.pins.Y9_O,
		this.pins.Y10_O,
		this.pins.Y11_O,
		this.pins.Y12_O,
		this.pins.Y13_O,
		this.pins.Y14_O,
		this.pins.Y15_O
	]);
}

hc.SN74HC181.prototype.SelBus = function() {
	return new Bus([
		this.pins.S0_I,
		this.pins.S1_I,
		this.pins.S2_I,
		this.pins.S3_I
	]);
}
hc.SN74HC181.prototype.ABus = function() {
	return new Bus([
		this.pins.A0BAR_I,
		this.pins.A1BAR_I,
		this.pins.A2BAR_I,
		this.pins.A3BAR_I
	]);
}
hc.SN74HC181.prototype.BBus = function() {
	return new Bus([
		this.pins.B0BAR_I,
		this.pins.B1BAR_I,
		this.pins.B2BAR_I,
		this.pins.B3BAR_I
	]);
}
hc.SN74HC181.prototype.OutBus = function() {
	return new Bus([
		this.pins.F0BAR_O,
		this.pins.F1BAR_O,
		this.pins.F2BAR_O,
		this.pins.F3BAR_O
	]);
}


hc.SN74HC163.prototype.SetBus = function() {
	return new Bus([
		this.pins.A_I,
		this.pins.B_I,
		this.pins.C_I,
		this.pins.D_I
	]);
}
hc.SN74HC163.prototype.OutBus = function() {
	return new Bus([
		this.pins.QA_O,
		this.pins.QB_O,
		this.pins.QC_O,
		this.pins.QD_O
	]);
}


hc.SN74HC193.prototype.SetBus = function() {
	return new Bus([
		this.pins.A_I,
		this.pins.B_I,
		this.pins.C_I,
		this.pins.D_I
	]);
}
hc.SN74HC193.prototype.OutBus = function() {
	return new Bus([
		this.pins.QA_O,
		this.pins.QB_O,
		this.pins.QC_O,
		this.pins.QD_O
	]);
}


ls.SN74LS197.prototype.SetBus = function() {
	return new Bus([
		this.pins.A_I,
		this.pins.B_I,
		this.pins.C_I,
		this.pins.D_I
	]);
}
ls.SN74LS197.prototype.OutBus = function() {
	return new Bus([
		this.pins.QA_O,
		this.pins.QB_O,
		this.pins.QC_O,
		this.pins.QD_O
	]);
}


class TestBoard extends Board {
	constructor() {
		super();

		this.pins = {
			a: new Pin(),
			q: new Pin(),
			z: new Pin(),
		}

		this.u1 = new hc.SN74HC08();
		this.u2 = new hc.SN74HC05();
		this.u20 = new hc.SN74HC05();
		this.u3 = new hc.SN74HC574();
		this.u100 = new hc.SN74HC181();

		this.u101 = new ls.SN74LS47();

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

class RegistersBoard extends Board {
	constructor() {		
		super();

		this.pins = {
			data: new Bus(8, 'D'),
			addr: new Bus(16, 'D'),
			sel: new Bus(4, 'S'),
			$le: new Pin(),
			$oe: new Pin(),
			$oe_addr: new Pin()
		};

		this.lsb_data_buf = new hc.SN74HC244();
		this.msb_data_buf = new hc.SN74HC244();
		
		this.lsb_addr_buf = new hc.SN74HC244();
		this.msb_addr_buf = new hc.SN74HC244();

		for (var i = 0; i < 16; i++) {
			this[`reg_${i}`] = new hc.SN74HC573();
			Connect(this[`reg_${i}`].InputBus(), this.pins.data);
			Connect(this[`reg_${i}`].OutputBus(), (i < 8) ? this.lsb_data_buf.InputBus() : this.msb_data_buf.InputBus());
		}

		Connect(this.lsb_data_buf.InputBus(), this.lsb_addr_buf.InputBus());
		Connect(this.msb_data_buf.InputBus(), this.msb_addr_buf.InputBus());

		Connect(this.lsb_data_buf.OutputBus(), this.pins.data);
		Connect(this.msb_data_buf.OutputBus(), this.pins.data);

		Connect(this.lsb_addr_buf.OutputBus(), this.pins.addr.Split(0, 7));
		Connect(this.msb_addr_buf.OutputBus(), this.pins.addr.Split(8, 15));

		Connect(this.pins.$oe_addr, [ this.lsb_addr_buf.pins.G1BAR, this.lsb_addr_buf.pins.G2BAR, this.msb_addr_buf.pins.G1BAR, this.msb_addr_buf.pins.G2BAR ]);

		this.selBit_inv = new hc.SN74HC04();
		Connect(this.pins.sel.pins.S3, this.selBit_inv.pins.A);

		this.lsb_data_sel = new hc.SN74HC32();
		Connect(this.pins.$oe, this.lsb_data_sel.pins.A);
		Connect(this.selBit_inv.pins.Y, this.lsb_data_sel.pins.B);

		this.msb_data_sel = new hc.SN74HC32();
		Connect(this.pins.$oe, this.msb_data_sel.pins.A);
		Connect(this.selBit_inv.pins.A, this.msb_data_sel.pins.B);

		Connect(this.msb_data_sel.pins.Y, [ this.lsb_data_buf.pins.G1BAR, this.lsb_data_buf.pins.G2BAR ]);
		Connect(this.lsb_data_sel.pins.Y, [ this.msb_data_buf.pins.G1BAR, this.msb_data_buf.pins.G2BAR ]);
		
		// OE Demultiplexer
		this.oe_demult = new hc.SN74HC138();

		Connect(_D_HI, this.oe_demult.pins.G1_I);

		this.oe_demult_or = new hc.SN74HC08();
		Connect(this.pins.$oe, this.oe_demult_or.pins.A);
		Connect(this.pins.$oe_addr, this.oe_demult_or.pins.B);
		Connect(this.oe_demult_or.pins.Y, [ this.oe_demult.pins.G2ABAR_I, this.oe_demult.pins.G2BBAR_I ]);

		Connect(this.pins.sel.Split(0, 2), this.oe_demult.SelBus());
		for (var i = 0; i < 8; i++) {
			Connect(this.oe_demult.OutputBus().pins[i], this[`reg_${i}`].pins.OCBAR);
			Connect(this.oe_demult.OutputBus().pins[i], this[`reg_${i + 8}`].pins.OCBAR);
		}
		
		// LE Demultiplexer
		this.le_demult = new hc.SN74HC154();
		Connect(this.pins.$le, [ this.le_demult.pins.G1BAR_I, this.le_demult.pins.G2BAR_I ]);
		Connect(this.pins.sel, this.le_demult.SelBus());
		for (var i = 0; i < 16; i++) {
			let newInv = new hc.SN74HC04();
			this[`le_inv_${i}`] = newInv;

			Connect(this.le_demult.pins[`Y${i}_O`], newInv.pins.A);
			Connect(newInv.pins.Y, this[`reg_${i}`].pins.C)
		}
	}

	$debug() {
		let oes = [];
		for (let i = 0; i < 16; i++)
			oes.push(this[`reg_${i}`].pins.OCBAR.GetValue());
		console.log('oes', oes);

		console.log(this.pins.$oe_addr.GetValue());
		console.log('data', this.pins.data.ReadData());
		console.log('addr', this.pins.addr.ReadData());
	}

	WriteToRegister(sel, value) {
		this.pins.data.WriteData(value);
		this.pins.sel.WriteData(sel);
		this.pins.$le.SetValue(false);
		this.pins.$oe.SetValue(true);
		this.pins.$oe_addr.SetValue(true);
		this.$execute();this.$execute();

		this.pins.$le.SetValue(true);
		this.pins.$oe.SetValue(true);
		this.pins.$oe_addr.SetValue(true);
		this.$execute();this.$execute();
	}

	ReadDataFromRegister(sel) {
		this.pins.sel.WriteData(sel);
		this.pins.$le.SetValue(true);
		this.pins.$oe.SetValue(false);
		this.pins.$oe_addr.SetValue(true);
		this.$execute();this.$execute();
		this.$execute();this.$execute();


		let oes = [];
		for (let i = 0; i < 16; i++)
			oes.push(this[`reg_${i}`].pins.OCBAR.GetValue());
		console.log('oes', oes);

		console.log(this.lsb_data_buf.pins.G1BAR, this.msb_data_buf.pins.G1BAR);

		console.log('data', this.pins.data.ReadData());
		console.log('addr', this.pins.addr.ReadData());

		return this.pins.data.ReadData();
	}

	ReadAddrFromRegister(sel) {
		this.pins.sel.WriteData(sel);
		this.pins.$le.SetValue(true);
		this.pins.$oe.SetValue(true);
		this.pins.$oe_addr.SetValue(false);
		this.$execute();this.$execute();
		this.$execute();this.$execute();

		console.log(this.oe_demult.OutputBus().pins);

		let oes = [];
		for (let i = 0; i < 16; i++)
			oes.push(this[`reg_${i}`].pins.OCBAR.GetValue());
		console.log('oes', oes);

		console.log(this.lsb_data_buf.pins.G1BAR, this.msb_data_buf.pins.G1BAR);

		console.log(this.lsb_data_buf.InputBus().ReadData(), this.msb_data_buf.InputBus().ReadData());

		console.log('data', this.pins.data.ReadData());
		console.log('addr', this.pins.addr.ReadData());

		return this.pins.data.ReadData();
	}

	_readRegisters() {
		let ret = [];
		for (let i = 0; i < 16; i++) {
			let reg = this[`reg_${i}`];
			ret.push(reg._readValue());
		}
		return ret;
	}
}

class ALUBoard extends Board {
	constructor() {
		super();

		this.pins = {
			data: new Bus(8, 'D'),
			op_lsb: new Bus(4, 'OP'),
			op_msb: new Bus(4, 'OP'),
			op_M: new Pin(),
			exe: new Pin(),
			$acc_oe: new Pin()
		};

		this.pre_acc = new hc.SN74HC573();
		this.post_acc = new hc.SN74HC573();
		this.buf = new hc.SN74HC244();

		this.lsb_alu = new hc.SN74HC181();
		Connect(this.pins.op_M, this.lsb_alu.pins.M_I);
		Connect(_D_HI, this.lsb_alu.pins.CN_I);
		Connect(this.pins.op_lsb, this.lsb_alu.SelBus());
		let lsb_dataBus = this.pins.data.Split(0, 3);
		let lsb_accBus = this.post_acc.OutputBus().Split(0, 3);
		Connect(lsb_dataBus, this.lsb_alu.ABus());
		Connect(lsb_accBus, this.lsb_alu.BBus());
		Connect(this.lsb_alu.OutBus(), this.pre_acc.InputBus().Split(0, 3));

		this.msb_alu = new hc.SN74HC181();
		Connect(this.pins.op_M, this.msb_alu.pins.M_I);
		Connect(this.lsb_alu.pins.CN_4_O, this.msb_alu.pins.CN_I);
		Connect(this.pins.op_msb, this.msb_alu.SelBus());
		let msb_dataBus = this.pins.data.Split(4, 7);
		let msb_accBus = this.post_acc.OutputBus().Split(4, 7);
		Connect(msb_dataBus, this.msb_alu.ABus());
		Connect(msb_accBus, this.msb_alu.BBus());
		Connect(this.msb_alu.OutBus(), this.pre_acc.InputBus().Split(4, 7));

		this.not_exe = new hc.SN74HC04();
		Connect(this.pins.exe, this.not_exe.pins.A);

		Connect(_D_LO, this.pre_acc.pins.OCBAR);
		Connect(this.pins.exe, this.pre_acc.pins.C);

		Connect(_D_LO, this.post_acc.pins.OCBAR);
		Connect(this.not_exe.pins.Y, this.post_acc.pins.C);

		Connect(this.pre_acc.OutputBus(), this.post_acc.InputBus());

		Connect(this.pre_acc.OutputBus(), this.buf.InputBus());
		Connect(this.pins.$acc_oe, [ this.buf.pins.G1BAR, this.buf.pins.G2BAR ]);
		Connect(this.buf.OutputBus(), this.pins.data);
	}

	LoadAcc(value) {
		this.pins.data.WriteData(value);
		this.pins.op.WriteData(0);
		this.Execute();
	}

	_readAccValue() {
		return this.pre_acc.OutputBus().ReadData();
	}

	Execute() {
		this.pins.exe.SetValue(true);
		this.pins.acc_oe.SetValue(true);
		this.$execute();this.$execute();
		
		this.pins.exe.SetValue(false);
		this.pins.acc_oe.SetValue(true);
		this.$execute();this.$execute();
	}

}

class PCDecoder extends Board {
	constructor() {
		super();

		this.pins = {
			data: new Bus(8, 'D'),
			addr: new Bus(16, 'A'),
			clk: new Pin(),
			clk2: new Pin(),
			reset: new Pin(),
			decoded: {
				alu_op_lsb: new Bus(4, 'OP'),
				alu_op_msb: new Bus(4, 'OP'),
				alu_M: new Pin(),
				alu_exe: new Pin(),
				alu_acc_oe: new Pin(),
				reg_sel: new Bus(4, 'S'),
				reg_le: new Pin(),
				reg_oe: new Pin(),
				reg_oe_addr: new Pin(),
				ram_we: new Pin(),
				ram_oe: new Pin()
			}
		};

		this.oe_pc = new Pin();
		this.le_pc = new Pin();
		this.le_decoder = new Pin();

		this.n1_counter = new hc.SN74HC193();
		this.n2_counter = new hc.SN74HC193();
		this.n3_counter = new hc.SN74HC193();
		this.n4_counter = new hc.SN74HC193();

		this.lsb_buf = new hc.SN74HC244();
		this.msb_buf = new hc.SN74HC244();

		Connect(_D_HI, this.n1_counter.pins.DOWN_I);
		Connect(this.pins.clk, this.n1_counter.pins.UP_I);
		Connect([ this.n1_counter.pins.BOBAR_O, this.n1_counter.pins.COBAR_O ], [ this.n2_counter.pins.DOWN_I, this.n2_counter.pins.UP_I ]);
		Connect([ this.n2_counter.pins.BOBAR_O, this.n2_counter.pins.COBAR_O ], [ this.n3_counter.pins.DOWN_I, this.n3_counter.pins.UP_I ]);
		Connect([ this.n3_counter.pins.BOBAR_O, this.n3_counter.pins.COBAR_O ], [ this.n4_counter.pins.DOWN_I, this.n4_counter.pins.UP_I ]);

		Connect(this.pins.reset, [ this.n1_counter.pins.CLR_I, this.n2_counter.pins.CLR_I, this.n3_counter.pins.CLR_I, this.n4_counter.pins.CLR_I ]);

		Connect(this.pins.addr.Split(0, 3), this.n1_counter.SetBus());
		Connect(this.pins.addr.Split(4, 7), this.n2_counter.SetBus());
		Connect(this.pins.addr.Split(8, 11), this.n3_counter.SetBus());
		Connect(this.pins.addr.Split(12, 15), this.n4_counter.SetBus());
		Connect(this.le_pc, [ this.n1_counter.pins.LOADBAR_I, this.n2_counter.pins.LOADBAR_I, this.n3_counter.pins.LOADBAR_I, this.n4_counter.pins.LOADBAR_I ])

		Connect(this.oe_pc, [ this.lsb_buf.pins.G1BAR, this.lsb_buf.pins.G2BAR, this.msb_buf.pins.G1BAR, this.msb_buf.pins.G2BAR ]);

		Connect(this.n1_counter.OutBus(), this.lsb_buf.InputBus().Split(0, 3));
		Connect(this.n2_counter.OutBus(), this.lsb_buf.InputBus().Split(4, 7));
		Connect(this.n3_counter.OutBus(), this.msb_buf.InputBus().Split(0, 3));
		Connect(this.n4_counter.OutBus(), this.msb_buf.InputBus().Split(4, 7));

		Connect(this.lsb_buf.OutputBus(), this.pins.addr.Split(0, 7));
		Connect(this.msb_buf.OutputBus(), this.pins.addr.Split(8, 15));
		
		this.instr = 0xFF;
	}

	$execute() {
		let clk = this.pins.clk.GetValue();
		let clk2 = this.pins.clk2.GetValue();

		if (!clk2) {
			this.pins.decoded.ram_we.SetValue(true);
			this.pins.decoded.ram_oe.SetValue(true);

			this.pins.decoded.alu_exe.SetValue(false);
			this.pins.decoded.alu_acc_oe.SetValue(true);

			this.pins.decoded.reg_oe.SetValue(true);
			this.pins.decoded.reg_oe_addr.SetValue(true);
			this.pins.decoded.reg_le.SetValue(true);

			this.oe_pc.SetValue(false);
			this.le_pc.SetValue(true);
			return;
		}

		if (clk) {
			this.pins.decoded.ram_we.SetValue(true);
			this.pins.decoded.ram_oe.SetValue(false);

			this.pins.decoded.alu_exe.SetValue(false);
			this.pins.decoded.alu_acc_oe.SetValue(true);

			this.pins.decoded.reg_oe.SetValue(true);
			this.pins.decoded.reg_oe_addr.SetValue(true);
			this.pins.decoded.reg_le.SetValue(true);

			this.oe_pc.SetValue(false);
			this.le_pc.SetValue(true);

			this.instr = this.pins.data.ReadData();
		} else {
			this.pins.decoded.ram_we.SetValue(true);
			this.pins.decoded.ram_oe.SetValue(true);

			this.oe_pc.SetValue(true);
			this.le_pc.SetValue(true);

			let instr_lsb = this.instr & 0x0F;
			let instr_msb = this.instr & 0xF0;

			switch (instr_msb) {
				case 0x00: // Set ACC nibble
					this.pins.decoded.alu_M.SetValue(true);
					this.pins.decoded.alu_op_lsb.WriteData(0b1111);
					this.pins.decoded.alu_op_msb.WriteData(0b1010);
					this.pins.decoded.alu_exe.SetValue(true);
					break;

				case 0x10: // Move Register into Acc
					this.pins.decoded.reg_sel.WriteData(instr_lsb);
					this.pins.decoded.reg_oe.SetValue(false);

					this.pins.decoded.alu_M.SetValue(true);
					this.pins.decoded.alu_op_lsb.WriteData(0b1111);
					this.pins.decoded.alu_op_msb.WriteData(0b1111);
					this.pins.decoded.alu_exe.SetValue(true);
					break;

				case 0x20: // Move Acc into Register
					this.pins.decoded.alu_acc_oe.SetValue(false);
					this.pins.decoded.reg_sel.WriteData(instr_lsb);
					this.pins.decoded.reg_le.SetValue(false);
					break;

				case 0x30: // LDM or STM
					var reg = instr_lsb & 0x07;
					this.pins.decoded.reg_sel.WriteData(reg);

					if (instr_lsb & 0x08) { // STM
						this.pins.decoded.alu_acc_oe.SetValue(false);
						this.pins.decoded.reg_oe_addr.SetValue(false);
						this.pins.decoded.ram_we.SetValue(false);
					} else { // LDM
						this.pins.decoded.reg_oe_addr.SetValue(false);
						this.pins.decoded.ram_oe.SetValue(false);

						this.pins.decoded.alu_M.SetValue(true);
						this.pins.decoded.alu_op_lsb.WriteData(0b1111);
						this.pins.decoded.alu_op_msb.WriteData(0b1111);
						this.pins.decoded.alu_exe.SetValue(true);
					}
					break;

				case 0x40: // JMP
					var reg = instr_lsb & 0x07;
					if (!(instr_lsb & 0x08)) { // JMP
						this.pins.decoded.reg_sel.WriteData(reg);
						this.pins.decoded.reg_oe_addr.SetValue(false);
						this.le_pc.SetValue(false);
					}

					break;

				case 0x80: // Add
					this.pins.decoded.reg_sel.WriteData(instr_lsb);
					this.pins.decoded.reg_oe.SetValue(false);

					this.pins.decoded.alu_M.SetValue(false);
					this.pins.decoded.alu_op_lsb.WriteData(0b1001);
					this.pins.decoded.alu_op_msb.WriteData(0b1001);
					this.pins.decoded.alu_exe.SetValue(true);
					break;

				case 0xF0:
					if (instr_lsb == 0x0F) return;
			}
		}

		super.$execute();

	}
}

class RAM extends Board {
	constructor(dataSize, addrSize) {
		super();
		
		dataSize = dataSize ?? 8;
		addrSize = addrSize ?? 16;

		this.pins = {
			data: new Bus(dataSize, 'D'),
			addr: new Bus(addrSize, 'A'),
			$cs: new Pin(),
			$we: new Pin(),
			$oe: new Pin()
		};

		this.content = [];
		
		for (let i = 0; i < Math.pow(2, addrSize); i++)
			this.content[i] = 0x00;
		
	}

	$execute() {
		let addr = this.pins.addr.ReadData();

		if (!this.pins.$cs.GetValue()) {
			if (!this.pins.$we.GetValue()) {
				console.log('ram write', addr);
				this.content[addr] = this.pins.data.ReadData();
			} else if (!this.pins.$oe.GetValue()) {
				this.pins.data.WriteData(this.content[addr]);
			}
		}
	}

	Write(start, data) {
		for (let a = start; a < start + data.length; a++)
			this.content[a] = data[a - start];
	}

	PrintArea(start, banks) {
		banks = banks ?? 8;

		for (let b = 0; b < banks; b++) {
			let startAddr = start + (16 * b);
			let bankData = [];
			for (let a = startAddr; a < startAddr + 16; a++)
				bankData.push(this.content[a]);
			
			console.log(`[${startAddr.toString(16).padStart(4, '0')}] ${bankData.map(t => t.toString(16).padStart(2, '0')).join(' ')}`);
		}
	}
}

class CPU extends Board {
	constructor() {
		super();

		this.addrBus = new Bus(16);
		this.dataBus = new Bus(8);
		this.clk = new Pin();
		this.clk2 = new Pin();
		
		this.ram = new RAM(8, 16);
		this.pc = new PCDecoder();
		this.regs = new RegistersBoard(16);
		this.alu = new ALUBoard();
		
		Connect(this.clk, [ this.pc.pins.clk ]);
		Connect(this.clk2, [ this.pc.pins.clk2 ]);
		
		Connect(this.addrBus, this.ram.pins.addr);
		Connect(this.addrBus, this.pc.pins.addr);
		Connect(this.addrBus, this.regs.pins.addr);
		
		Connect(this.dataBus, this.alu.pins.data);
		Connect(this.dataBus, this.regs.pins.data);
		Connect(this.dataBus, this.pc.pins.data);
		Connect(this.dataBus, this.ram.pins.data);
		
		Connect(this.pc.pins.decoded.alu_op_lsb, this.alu.pins.op_lsb);
		Connect(this.pc.pins.decoded.alu_op_msb, this.alu.pins.op_msb);
		Connect(this.pc.pins.decoded.alu_M, this.alu.pins.op_M);
		Connect(this.pc.pins.decoded.alu_exe, this.alu.pins.exe);
		Connect(this.pc.pins.decoded.alu_acc_oe, this.alu.pins.$acc_oe);
		
		Connect(this.pc.pins.decoded.reg_sel, this.regs.pins.sel);
		Connect(this.pc.pins.decoded.reg_oe, this.regs.pins.$oe);
		Connect(this.pc.pins.decoded.reg_oe_addr, this.regs.pins.$oe_addr);
		Connect(this.pc.pins.decoded.reg_le, this.regs.pins.$le);

		Connect(_D_LO, this.ram.pins.$cs);
		Connect(this.pc.pins.decoded.ram_oe, this.ram.pins.$oe);
		Connect(this.pc.pins.decoded.ram_we, this.ram.pins.$we);

	}

	Execute(clk1, clk2) {
		let realWires = wires.filter(t => !t._mergedWith);
		//for (let w of realWires)
	//		w.value = null;
		this.clk.SetValue(clk1); this.clk2.SetValue(clk2);
		this.$execute();this.$execute();this.$execute();
		this.$execute();this.$execute();this.$execute();
	}

	Step() {
		//this.Execute(true, false);
		//this.Execute(false, false);
		this.Execute(true, true);
		this.Execute(false, true);
	}

	StepOn() {
		this.clk.SetValue(true);
		this.$execute();this.$execute();this.$execute();
	}

	StepOff() {
		this.clk.SetValue(false);
		this.$execute();this.$execute();this.$execute();
	}

	static LABEL = function(name, asm) {
		return asm;
	};

	static ASM = {
		SET: function(nibble) { return (nibble & 0x0F); },
		R2A: function(reg) { return 0x10 | (reg & 0x0F); },
		A2R: function(reg) { return 0x20 | (reg & 0x0F); },
		LDM: function(reg) { return 0x30 | (reg & 0x07); },
		STM: function(reg) { return 0x38 | (reg & 0x07); },
		JMP: function(reg) { return 0x40 | (reg & 0x07); },
		ADD: function(reg) { return 0x80 | (reg & 0x0F); }
	};
}

//t.printSegments();

let m = new CPU();

const circs = m.GetCircuits_extended(true);
const circs_reversed = Object.keys(circs).reverse().map(t => circs[t]);

let times = {};
function monitor() {
	for (let ck in circs) {
		let c = circs[ck];
		var hrstart = process.hrtime()
		for (var i = 0; i < 100000; i++)
			c.item.$execute(c.owner);
		var hrend = process.hrtime(hrstart);
		let tms = (hrend[1] / 1000000) + (hrend[0] * 1000);
		times[ck] = tms;
	}
}

function exe() {
	for (let c of circs_reversed) {
		c.item.$execute(c.owner);
	}
}

m.ram.Write(0, [
	CPU.ASM.SET(7),
	CPU.ASM.A2R(0),
	CPU.ASM.SET(3),
	CPU.ASM.A2R(1),

	CPU.ASM.ADD(0),
	CPU.ASM.A2R(2),
	CPU.ASM.JMP(1),
	/*
	CPU.ASM.SET(7),
	CPU.ASM.A2R(0),
	CPU.ASM.SET(3),
	CPU.ASM.A2R(1),
	CPU.ASM.R2A(0),
	CPU.ASM.ADD(1),
	CPU.ASM.A2R(2),
	CPU.ASM.STM(2),
	CPU.LABEL("loop", CPU.ASM.LDM(1))
	*/
]);



console.log('acc', m.alu._readAccValue());

m.clk.SetValue(true);m.clk2.SetValue(true);
m.pc.pins.reset.SetValue(true);
m.$execute();m.$execute();m.$execute();

m.pc.pins.reset.SetValue(false);
m.clk.SetValue(false);m.clk2.SetValue(false);
m.$execute();m.$execute();m.$execute();

m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();
m.Step();


console.log('acc', m.alu._readAccValue().toString(16));
console.log('regs', m.regs._readRegisters());
m.ram.PrintArea(0);


/*
var hrstart = process.hrtime()
for (var i = 0; i < 100000; i++) {
	//m.$execute();
	exe();
}
var hrend = process.hrtime(hrstart);
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

//m.regs.ReadAddrFromRegister(5);test
console.log(Object.keys(m.alu.GetComponents()));

const generator = require('../../gui');
//generator.Export(m.alu);
*/
monitor();

let perc = {};

let max = 0;
let total = 0;
for (let tk in times) {
	max = Math.max(max, times[tk]);
	total += times[tk];
}

for (let tk in times) {
	perc[tk] = +((times[tk] / total) * 100).toFixed(2);
}

console.log(total, times);