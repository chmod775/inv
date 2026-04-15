const { Connect, _D_HI, _D_LO, Logger, Wire, Pin, Footprint, Circuit, Component, Board, Bus, inv, inva, and, or, bufa, nora, dff, dltch, buf3a, logicexp } = require('../../src/core.js');
const hc = require('../../generated/74hc_code.js');
const ls = require('../../generated/74ls_code.js');

/**
 * 7 Segment display
 */
class DISP_7SEG extends Component {
	constructor(common_anode, size) {
		super();
    this.common_anode = common_anode;
    this.size = size;

    if (this.size > 1) {
      this.pins = {};
      for (let i = 0; i < size; i++) {
        this.pins[`SEG_A_${i}`] = new Pin();
        this.pins[`SEG_B_${i}`] = new Pin();
        this.pins[`SEG_C_${i}`] = new Pin();
        this.pins[`SEG_D_${i}`] = new Pin();
        this.pins[`SEG_E_${i}`] = new Pin();
        this.pins[`SEG_F_${i}`] = new Pin();
        this.pins[`SEG_G_${i}`] = new Pin();
      }
    } else {
      this.pins = {
        SEG_A: new Pin(),
        SEG_B: new Pin(),
        SEG_C: new Pin(),
        SEG_D: new Pin(),
        SEG_E: new Pin(),
        SEG_F: new Pin(),
        SEG_G: new Pin()
      }
    }
	}
	$execute(owner) {
    let out = '';

    if (this.size > 1) {
      let lines = [[], [], []];
      for (let i = 0; i < this.size; i++) {
        let SEG_A = (this.common_anode ? !this.pins[`SEG_A_${i}`].GetValue() : this.pins[`SEG_A_${i}`].GetValue()) ? '_' : ' ';
        let SEG_B = (this.common_anode ? !this.pins[`SEG_B_${i}`].GetValue() : this.pins[`SEG_B_${i}`].GetValue()) ? '|' : ' ';
        let SEG_C = (this.common_anode ? !this.pins[`SEG_C_${i}`].GetValue() : this.pins[`SEG_C_${i}`].GetValue()) ? '|' : ' ';
        let SEG_D = (this.common_anode ? !this.pins[`SEG_D_${i}`].GetValue() : this.pins[`SEG_D_${i}`].GetValue()) ? '_' : ' ';
        let SEG_E = (this.common_anode ? !this.pins[`SEG_E_${i}`].GetValue() : this.pins[`SEG_E_${i}`].GetValue()) ? '|' : ' ';
        let SEG_F = (this.common_anode ? !this.pins[`SEG_F_${i}`].GetValue() : this.pins[`SEG_F_${i}`].GetValue()) ? '|' : ' ';
        let SEG_G = (this.common_anode ? !this.pins[`SEG_G_${i}`].GetValue() : this.pins[`SEG_G_${i}`].GetValue()) ? '_' : ' ';

        let l1 = ` ${SEG_A} `;
        let l2 = `${SEG_F}${SEG_G}${SEG_B}`;
        let l3 = `${SEG_E}${SEG_D}${SEG_C}`;
        lines[0].push(l1);
        lines[1].push(l2);
        lines[2].push(l3);
      }

      out = lines.map(l => l.join(' ')).join('\n');
    } else {
      let SEG_A = (this.common_anode ? !this.pins.SEG_A.GetValue() : this.pins.SEG_A.GetValue()) ? '_' : ' ';
      let SEG_B = (this.common_anode ? !this.pins.SEG_B.GetValue() : this.pins.SEG_B.GetValue()) ? '|' : ' ';
      let SEG_C = (this.common_anode ? !this.pins.SEG_C.GetValue() : this.pins.SEG_C.GetValue()) ? '|' : ' ';
      let SEG_D = (this.common_anode ? !this.pins.SEG_D.GetValue() : this.pins.SEG_D.GetValue()) ? '_' : ' ';
      let SEG_E = (this.common_anode ? !this.pins.SEG_E.GetValue() : this.pins.SEG_E.GetValue()) ? '|' : ' ';
      let SEG_F = (this.common_anode ? !this.pins.SEG_F.GetValue() : this.pins.SEG_F.GetValue()) ? '|' : ' ';
      let SEG_G = (this.common_anode ? !this.pins.SEG_G.GetValue() : this.pins.SEG_G.GetValue()) ? '_' : ' ';
  
      out = ` ${SEG_A} \n${SEG_F}${SEG_G}${SEG_B}\n${SEG_E}${SEG_D}${SEG_C}\n`;
    }

		console.log(out);
	}
}

class MainBoard extends Board {
	constructor() {
		super();

    this.pins = {
      clr: new Pin(),
      clk: new Pin(),
      sec1_bus: new Bus(['A', 'B', 'C', 'D', 'E', 'F', 'G']),
      sec10_bus: new Bus(['A', 'B', 'C', 'D', 'E', 'F', 'G']),
    };

    this.u_cnt_sec10 = new ls.SN74LS192();
    this.u_cnt_sec1 = new ls.SN74LS192();
    
    this.u_disp_sec10 = new ls.SN74LS47();
    this.u_disp_sec1 = new ls.SN74LS47();


    // Sec 1
    Connect(this.u_disp_sec1.pins.OUTA_O, this.pins.sec1_bus.pins.A);
    Connect(this.u_disp_sec1.pins.OUTB_O, this.pins.sec1_bus.pins.B);
    Connect(this.u_disp_sec1.pins.OUTC_O, this.pins.sec1_bus.pins.C);
    Connect(this.u_disp_sec1.pins.OUTD_O, this.pins.sec1_bus.pins.D);
    Connect(this.u_disp_sec1.pins.OUTE_O, this.pins.sec1_bus.pins.E);
    Connect(this.u_disp_sec1.pins.OUTF_O, this.pins.sec1_bus.pins.F);
    Connect(this.u_disp_sec1.pins.OUTG_O, this.pins.sec1_bus.pins.G);
    
		Connect(this.u_disp_sec1.pins.LTBAR_I, _D_HI);
		Connect(this.u_disp_sec1.pins.RBIBAR_I, _D_HI);

		Connect(this.u_disp_sec1.pins.INA_I, this.u_cnt_sec1.pins.QA_O);
		Connect(this.u_disp_sec1.pins.INB_I, this.u_cnt_sec1.pins.QB_O);
		Connect(this.u_disp_sec1.pins.INC_I, this.u_cnt_sec1.pins.QC_O);
		Connect(this.u_disp_sec1.pins.IND_I, this.u_cnt_sec1.pins.QD_O);

    Connect(this.u_cnt_sec1.pins.A_I, _D_LO);
    Connect(this.u_cnt_sec1.pins.B_I, _D_LO);
    Connect(this.u_cnt_sec1.pins.C_I, _D_LO);
    Connect(this.u_cnt_sec1.pins.D_I, _D_LO);

    Connect(this.pins.clk, this.u_cnt_sec1.pins.UP_I);
    Connect(this.u_cnt_sec1.pins.DOWN_I, _D_HI);
    Connect(this.u_cnt_sec1.pins.LOADBAR_I, _D_HI);
    Connect(this.u_cnt_sec1.pins.CLR_I, this.pins.clr);

    // Sec 10
    Connect(this.u_disp_sec10.pins.OUTA_O, this.pins.sec10_bus.pins.A);
    Connect(this.u_disp_sec10.pins.OUTB_O, this.pins.sec10_bus.pins.B);
    Connect(this.u_disp_sec10.pins.OUTC_O, this.pins.sec10_bus.pins.C);
    Connect(this.u_disp_sec10.pins.OUTD_O, this.pins.sec10_bus.pins.D);
    Connect(this.u_disp_sec10.pins.OUTE_O, this.pins.sec10_bus.pins.E);
    Connect(this.u_disp_sec10.pins.OUTF_O, this.pins.sec10_bus.pins.F);
    Connect(this.u_disp_sec10.pins.OUTG_O, this.pins.sec10_bus.pins.G);
    
		Connect(this.u_disp_sec10.pins.LTBAR_I, _D_HI);
		Connect(this.u_disp_sec10.pins.RBIBAR_I, _D_HI);

    Connect(this.u_disp_sec10.pins.INA_I, this.u_cnt_sec10.pins.QA_O);
		Connect(this.u_disp_sec10.pins.INB_I, this.u_cnt_sec10.pins.QB_O);
		Connect(this.u_disp_sec10.pins.INC_I, this.u_cnt_sec10.pins.QC_O);
		Connect(this.u_disp_sec10.pins.IND_I, this.u_cnt_sec10.pins.QD_O);

    Connect(this.u_cnt_sec10.pins.A_I, _D_LO);
    Connect(this.u_cnt_sec10.pins.B_I, _D_LO);
    Connect(this.u_cnt_sec10.pins.C_I, _D_LO);
    Connect(this.u_cnt_sec10.pins.D_I, _D_LO);

    Connect(this.u_cnt_sec1.pins.COBAR_O, this.u_cnt_sec10.pins.UP_I);
    Connect(this.u_cnt_sec10.pins.DOWN_I, _D_HI);
    Connect(this.u_cnt_sec10.pins.LOADBAR_I, _D_HI);
    Connect(this.u_cnt_sec10.pins.CLR_I, this.pins.clr);
	}

}

let b1 = new MainBoard();
let d1 = new DISP_7SEG(true, 2);
Connect(b1.pins.sec1_bus.pins.A, d1.pins.SEG_A_1);
Connect(b1.pins.sec1_bus.pins.B, d1.pins.SEG_B_1);
Connect(b1.pins.sec1_bus.pins.C, d1.pins.SEG_C_1);
Connect(b1.pins.sec1_bus.pins.D, d1.pins.SEG_D_1);
Connect(b1.pins.sec1_bus.pins.E, d1.pins.SEG_E_1);
Connect(b1.pins.sec1_bus.pins.F, d1.pins.SEG_F_1);
Connect(b1.pins.sec1_bus.pins.G, d1.pins.SEG_G_1);

Connect(b1.pins.sec10_bus.pins.A, d1.pins.SEG_A_0);
Connect(b1.pins.sec10_bus.pins.B, d1.pins.SEG_B_0);
Connect(b1.pins.sec10_bus.pins.C, d1.pins.SEG_C_0);
Connect(b1.pins.sec10_bus.pins.D, d1.pins.SEG_D_0);
Connect(b1.pins.sec10_bus.pins.E, d1.pins.SEG_E_0);
Connect(b1.pins.sec10_bus.pins.F, d1.pins.SEG_F_0);
Connect(b1.pins.sec10_bus.pins.G, d1.pins.SEG_G_0);

b1.pins.clk.SetValue(false);
b1.pins.clr.SetValue(true);
b1.$execute();
b1.pins.clr.SetValue(false);
b1.$execute();

for (let i = 0; i < 123; i++) {
  b1.pins.clk.SetValue(true);
  b1.$execute();
  b1.pins.clk.SetValue(false);
  b1.$execute();
}

b1.$execute();



d1.$execute();

/*
let u1 = new ls.SN74LS47();
let d1 = new DISP_7SEG(true);
Connect(u1.pins.OUTA_O, d1.pins.SEG_A);
Connect(u1.pins.OUTB_O, d1.pins.SEG_B);
Connect(u1.pins.OUTC_O, d1.pins.SEG_C);
Connect(u1.pins.OUTD_O, d1.pins.SEG_D);
Connect(u1.pins.OUTE_O, d1.pins.SEG_E);
Connect(u1.pins.OUTF_O, d1.pins.SEG_F);
Connect(u1.pins.OUTG_O, d1.pins.SEG_G);

u1.pins.LTBAR_I.SetValue(true);
u1.pins.RBIBAR_I.SetValue(true);

u1.pins.INA_I.SetValue(true);
u1.pins.INB_I.SetValue(true);
u1.pins.INC_I.SetValue(false);
u1.pins.IND_I.SetValue(false);

u1.$execute();
u1.$execute();
d1.$execute();*/