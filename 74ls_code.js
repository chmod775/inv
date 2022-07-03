const core = require('./core.js');
/**
 * Quadruple 2-input Positive-Nand Gates
 */
class SN74LS00 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Positive-Nand Gates with Open-Collector Outputs
 */
class SN74LS01 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Positive-Nor Gates
 */
class SN74LS02 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(2);
	}
}
/**
 * Quadruple 2-input Positive-Nand Gates with Open-Collector Outputs
 */
class SN74LS03 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Hex Inverters
 */
class SN74LS04 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new inv();
		Connect(this.U1.pins.IN, this.pins.A);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Hex Inverters with Open-Collector Outputs
 */
class SN74LS05 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new inv();
		Connect(this.U1.pins.IN, this.pins.A);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Positive-And Gates
 */
class SN74LS08 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new and(2);
	}
}
/**
 * Quadruple 2-input Positive-And Gates with Open-Collector Outputs
 */
class SN74LS09 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new and(2);
	}
}
/**
 * Triple 3-input Positive-Nand Gates
 */
class SN74LS10 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(3);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Triple 3-input Positive-And Gates
 */
class SN74LS11 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new and(3);
	}
}
/**
 * Triple 3-input Positive-Nand Gates with Open-Collector Outputs
 */
class SN74LS12 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(3);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Dual 4-input Positive-Nand Schmitt Triggers
 */
class SN74LS13 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(4);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Hex Schmitt-Trigger Inverters
 */
class SN74LS14 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new inv();
		Connect(this.U1.pins.IN, this.pins.A);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Triple 3-input Positive-And Gates with Open-Collector Outputs
 */
class SN74LS15 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new and(3);
	}
}
/**
 * Schmitt-Trigger 4-input Positive-Nand Gates with Totem-Pole Outputs
 */
class SN74LS18 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(4);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Schmitt-Trigger Inverters with Totem-Pole Outputs
 */
class SN74LS19 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new inv();
		Connect(this.U1.pins.IN, this.pins.A);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Dual 4-input Positive-Nand Gates
 */
class SN74LS20 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(4);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Dual 4-input Positive-And Gates
 */
class SN74LS21 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new and(4);
	}
}
/**
 * Dual 4-input Positive-Nand Gates with Open-Collector Outputs
 */
class SN74LS22 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(4);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Schmitt-Trigger 2-input Positive-Nand Gates w_ Totem-Pole Outputs
 */
class SN74LS24 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * High-Voltage Interface Positive-Nand Gates
 */
class SN74LS26 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Triple 3-input Positive-Nor Gates
 */
class SN74LS27 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(3);
	}
}
/**
 * Quadruple 2-input Positive-Nor Buffers
 */
class SN74LS28 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(2);
	}
}
/**
 * 8-input Positive-Nand Gates
 */
class SN74LS30 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			E: new Pin(),
			F: new Pin(),
			G: new Pin(),
			H: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(8);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.IN4, this.pins.E);
		Connect(this.U1.pins.IN5, this.pins.F);
		Connect(this.U1.pins.IN6, this.pins.G);
		Connect(this.U1.pins.IN7, this.pins.H);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Delay Elements
 */
class SN74LS31 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A: new Pin(),
			_2A: new Pin(),
			_3A: new Pin(),
			_3B: new Pin(),
			_1Y: new Pin(),
			_2Y: new Pin(),
			_3Y: new Pin(),
		}
		this.U1 = new inv();
		Connect(this.U1.pins.IN, this.pins._1A);
		Connect(this.U1.pins.OUT, this.pins._1Y);
		this.U2 = new buf();
		this.U3 = new nand(2);
		Connect(this.U3.pins.IN0, this.pins._3A);
		Connect(this.U3.pins.IN1, this.pins._3B);
		Connect(this.U3.pins.OUT, this.pins._3Y);
	}
}
/**
 * Quadruple 2-input Positive-Or Gates
 */
class SN74LS32 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new or(2);
	}
}
/**
 * Quadruple 2-input Positive-Nor Buffers w_ Open-Collector Outputs
 */
class SN74LS33 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(2);
	}
}
/**
 * Quadruple 2-input Positive-Nand Buffers
 */
class SN74LS37 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Positive-Nand Buffers w_ Open-Collector Outputs
 */
class SN74LS38 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Dual 4-input Positive-Nand Buffers
 */
class SN74LS40 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(4);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * DECODER BCD-DECIMAL 4-10 LINE
 */
class SN74LS42 extends Component {
	constructor() {
		super();
		this.pins = {
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			Y0_O: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
			Y5_O: new Pin(),
			Y6_O: new Pin(),
			Y7_O: new Pin(),
			Y8_O: new Pin(),
			Y9_O: new Pin(),
		}
		this.ULS42LOG = new logicexp(['A_I','B_I','C_I','D_I'], ['A','B','C','D','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9'], []).Logic('   A    =  A_I ;   B    =  B_I ;   C    =  C_I ;   D    =  D_I ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    CBAR =  !C ;   CBAR =  !C ;let    DBAR =  !D ;   DBAR =  !D ;   Y0   =  !(DBAR & CBAR & BBAR & ABAR ) ;   Y1   =  !(DBAR & CBAR & BBAR & A    ) ;   Y2   =  !(DBAR & CBAR & B    & ABAR ) ;   Y3   =  !(DBAR & CBAR & B    & A    ) ;   Y4   =  !(DBAR & C    & BBAR & ABAR ) ;   Y5   =  !(DBAR & C    & BBAR & A    ) ;   Y6   =  !(DBAR & C    & B    & ABAR ) ;   Y7   =  !(DBAR & C    & B    & A    ) ;   Y8   =  !(D    & CBAR & BBAR & ABAR ) ;   Y9   =  !(D    & CBAR & BBAR & A    ) ;');
		Connect(this.ULS42LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS42LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS42LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS42LOG.pins.D_I, this.pins.D_I);
		let A = new Pin();
		Connect(this.ULS42LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS42LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS42LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS42LOG.pins.D, D);
		let Y0 = new Pin();
		Connect(this.ULS42LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.ULS42LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS42LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS42LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS42LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.ULS42LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.ULS42LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.ULS42LOG.pins.Y7, Y7);
		let Y8 = new Pin();
		Connect(this.ULS42LOG.pins.Y8, Y8);
		let Y9 = new Pin();
		Connect(this.ULS42LOG.pins.Y9, Y9);
		Connect(Y0, this.pins.Y0_O);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
		Connect(Y5, this.pins.Y5_O);
		Connect(Y6, this.pins.Y6_O);
		Connect(Y7, this.pins.Y7_O);
		Connect(Y8, this.pins.Y8_O);
		Connect(Y9, this.pins.Y9_O);
	}
}
/**
 * DECODER_DRIVER BCD-7 SEGMENT WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS47 extends Component {
	constructor() {
		super();
		this.pins = {
			INA_I: new Pin(),
			INB_I: new Pin(),
			INC_I: new Pin(),
			IND_I: new Pin(),
			RBIBAR_I: new Pin(),
			LTBAR_I: new Pin(),
			BIBAR_RBOBAR_B: new Pin(),
			OUTA_O: new Pin(),
			OUTB_O: new Pin(),
			OUTC_O: new Pin(),
			OUTD_O: new Pin(),
			OUTE_O: new Pin(),
			OUTF_O: new Pin(),
			OUTG_O: new Pin(),
		}
		this.U1 = new or(6);
		this.ULS47LOG = new logicexp(['INA_I','INB_I','INC_I','IND_I','RBIBAR_I','LTBAR_I','BIBAR_RBOBAR_B'], ['INA','INB','INC','IND','RBIBAR','LT','OUTA','OUTB','OUTC','OUTD','OUTE','OUTF','OUTG'], []).Logic('   INA    =  INA_I ;   INB    =  INB_I ;   INC    =  INC_I ;   IND    =  IND_I ;   RBIBAR =  RBIBAR_I ;let    LTBAR  =  LTBAR_I ;   LTBAR  =  LTBAR_I ;let    BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   LT     =  !LTBAR ;let    ALT    =  !(INA & LTBAR) ;   ALT    =  !(INA & LTBAR) ;let    BLT    =  !(INB & LTBAR) ;   BLT    =  !(INB & LTBAR) ;let    CLT    =  !(INC & LTBAR) ;   CLT    =  !(INC & LTBAR) ;let    DLT    =  !IND ;   DLT    =  !IND ;let    ABI    =  !(ALT & BIBAR_RBOBAR) ;   ABI    =  !(ALT & BIBAR_RBOBAR) ;let    BBI    =  !(BLT & BIBAR_RBOBAR) ;   BBI    =  !(BLT & BIBAR_RBOBAR) ;let    CBI    =  !(CLT & BIBAR_RBOBAR) ;   CBI    =  !(CLT & BIBAR_RBOBAR) ;let    DBI    =  !(DLT & BIBAR_RBOBAR) ;   DBI    =  !(DLT & BIBAR_RBOBAR) ;   OUTA   =  (BBI & DBI) | (ALT & CBI) | (ABI & BLT & CLT & DLT) ;   OUTB   =  (BBI & DBI) | (ABI & BLT & CBI) | (ALT & BBI & CBI) ;   OUTC   =  (CBI & DBI) | (ALT & BBI & CLT) ;   OUTD   =  (ABI & BLT & CLT) | (ALT & BLT & CBI) | (ABI & BBI & CBI) ;   OUTE   =   ABI | (BLT & CBI) ;   OUTF   =  (ABI & BBI) | (BBI & CLT) | (ABI & CLT & DLT) ;   OUTG   =  (ABI & BBI & CBI) | (BLT & CLT & DLT & LTBAR) ;');
		Connect(this.ULS47LOG.pins.INA_I, this.pins.INA_I);
		Connect(this.ULS47LOG.pins.INB_I, this.pins.INB_I);
		Connect(this.ULS47LOG.pins.INC_I, this.pins.INC_I);
		Connect(this.ULS47LOG.pins.IND_I, this.pins.IND_I);
		Connect(this.ULS47LOG.pins.RBIBAR_I, this.pins.RBIBAR_I);
		Connect(this.ULS47LOG.pins.LTBAR_I, this.pins.LTBAR_I);
		Connect(this.ULS47LOG.pins.BIBAR_RBOBAR_B, this.pins.BIBAR_RBOBAR_B);
		let INA = new Pin();
		Connect(this.ULS47LOG.pins.INA, INA);
		let INB = new Pin();
		Connect(this.ULS47LOG.pins.INB, INB);
		let INC = new Pin();
		Connect(this.ULS47LOG.pins.INC, INC);
		let IND = new Pin();
		Connect(this.ULS47LOG.pins.IND, IND);
		let RBIBAR = new Pin();
		Connect(this.ULS47LOG.pins.RBIBAR, RBIBAR);
		let LT = new Pin();
		Connect(this.ULS47LOG.pins.LT, LT);
		let OUTA = new Pin();
		Connect(this.ULS47LOG.pins.OUTA, OUTA);
		let OUTB = new Pin();
		Connect(this.ULS47LOG.pins.OUTB, OUTB);
		let OUTC = new Pin();
		Connect(this.ULS47LOG.pins.OUTC, OUTC);
		let OUTD = new Pin();
		Connect(this.ULS47LOG.pins.OUTD, OUTD);
		let OUTE = new Pin();
		Connect(this.ULS47LOG.pins.OUTE, OUTE);
		let OUTF = new Pin();
		Connect(this.ULS47LOG.pins.OUTF, OUTF);
		let OUTG = new Pin();
		Connect(this.ULS47LOG.pins.OUTG, OUTG);
		Connect(OUTA, this.pins.OUTA_O);
		Connect(OUTB, this.pins.OUTB_O);
		Connect(OUTC, this.pins.OUTC_O);
		Connect(OUTD, this.pins.OUTD_O);
		Connect(OUTE, this.pins.OUTE_O);
		Connect(OUTF, this.pins.OUTF_O);
		Connect(OUTG, this.pins.OUTG_O);
	}
}
/**
 * DECODER_DRIVER BCD-7 SEGMENT WITH INTERNAL PULLUPS
 */
class SN74LS48 extends Component {
	constructor() {
		super();
		this.pins = {
			INA_I: new Pin(),
			INB_I: new Pin(),
			INC_I: new Pin(),
			IND_I: new Pin(),
			RBIBAR_I: new Pin(),
			LTBAR_I: new Pin(),
			BIBAR_RBOBAR_B: new Pin(),
			OUTA_O: new Pin(),
			OUTB_O: new Pin(),
			OUTC_O: new Pin(),
			OUTD_O: new Pin(),
			OUTE_O: new Pin(),
			OUTF_O: new Pin(),
			OUTG_O: new Pin(),
		}
		this.U1 = new or(6);
		this.ULS48LOG = new logicexp(['INA_I','INB_I','INC_I','IND_I','RBIBAR_I','LTBAR_I','BIBAR_RBOBAR_B'], ['INA','INB','INC','IND','RBIBAR','LT','OUTA','OUTB','OUTC','OUTD','OUTE','OUTF','OUTG'], []).Logic('   INA    =  INA_I ;   INB    =  INB_I ;   INC    =  INC_I ;   IND    =  IND_I ;   RBIBAR =  RBIBAR_I ;let    LTBAR  =  LTBAR_I ;   LTBAR  =  LTBAR_I ;let    BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   LT     =  !LTBAR ;let    ALT    =  !(INA & LTBAR) ;   ALT    =  !(INA & LTBAR) ;let    BLT    =  !(INB & LTBAR) ;   BLT    =  !(INB & LTBAR) ;let    CLT    =  !(INC & LTBAR) ;   CLT    =  !(INC & LTBAR) ;let    DLT    =  !IND ;   DLT    =  !IND ;let    ABI    =  !(ALT & BIBAR_RBOBAR) ;   ABI    =  !(ALT & BIBAR_RBOBAR) ;let    BBI    =  !(BLT & BIBAR_RBOBAR) ;   BBI    =  !(BLT & BIBAR_RBOBAR) ;let    CBI    =  !(CLT & BIBAR_RBOBAR) ;   CBI    =  !(CLT & BIBAR_RBOBAR) ;let    DBI    =  !(DLT & BIBAR_RBOBAR) ;   DBI    =  !(DLT & BIBAR_RBOBAR) ;   OUTA   =  !((BBI & DBI) | (ALT & CBI) | (ABI & BLT & CLT & DLT)) ;   OUTB   =  !((BBI & DBI) | (ABI & BLT & CBI) | (ALT & BBI & CBI)) ;   OUTC   =  !((CBI & DBI) | (ALT & BBI & CLT)) ;   OUTD   =  !((ABI & BLT & CLT) | (ALT & BLT & CBI) | (ABI & BBI & CBI)) ;   OUTE   =  !( ABI | (BLT & CBI)) ;   OUTF   =  !((ABI & BBI) | (BBI & CLT) | (ABI & CLT & DLT)) ;   OUTG   =  !((ABI & BBI & CBI) | (BLT & CLT & DLT & LTBAR)) ;');
		Connect(this.ULS48LOG.pins.INA_I, this.pins.INA_I);
		Connect(this.ULS48LOG.pins.INB_I, this.pins.INB_I);
		Connect(this.ULS48LOG.pins.INC_I, this.pins.INC_I);
		Connect(this.ULS48LOG.pins.IND_I, this.pins.IND_I);
		Connect(this.ULS48LOG.pins.RBIBAR_I, this.pins.RBIBAR_I);
		Connect(this.ULS48LOG.pins.LTBAR_I, this.pins.LTBAR_I);
		Connect(this.ULS48LOG.pins.BIBAR_RBOBAR_B, this.pins.BIBAR_RBOBAR_B);
		let INA = new Pin();
		Connect(this.ULS48LOG.pins.INA, INA);
		let INB = new Pin();
		Connect(this.ULS48LOG.pins.INB, INB);
		let INC = new Pin();
		Connect(this.ULS48LOG.pins.INC, INC);
		let IND = new Pin();
		Connect(this.ULS48LOG.pins.IND, IND);
		let RBIBAR = new Pin();
		Connect(this.ULS48LOG.pins.RBIBAR, RBIBAR);
		let LT = new Pin();
		Connect(this.ULS48LOG.pins.LT, LT);
		let OUTA = new Pin();
		Connect(this.ULS48LOG.pins.OUTA, OUTA);
		let OUTB = new Pin();
		Connect(this.ULS48LOG.pins.OUTB, OUTB);
		let OUTC = new Pin();
		Connect(this.ULS48LOG.pins.OUTC, OUTC);
		let OUTD = new Pin();
		Connect(this.ULS48LOG.pins.OUTD, OUTD);
		let OUTE = new Pin();
		Connect(this.ULS48LOG.pins.OUTE, OUTE);
		let OUTF = new Pin();
		Connect(this.ULS48LOG.pins.OUTF, OUTF);
		let OUTG = new Pin();
		Connect(this.ULS48LOG.pins.OUTG, OUTG);
		Connect(OUTA, this.pins.OUTA_O);
		Connect(OUTB, this.pins.OUTB_O);
		Connect(OUTC, this.pins.OUTC_O);
		Connect(OUTD, this.pins.OUTD_O);
		Connect(OUTE, this.pins.OUTE_O);
		Connect(OUTF, this.pins.OUTF_O);
		Connect(OUTG, this.pins.OUTG_O);
	}
}
/**
 * DECODER_DRIVER BCD-7 SEGMENT WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS49 extends Component {
	constructor() {
		super();
		this.pins = {
			INA_I: new Pin(),
			INB_I: new Pin(),
			INC_I: new Pin(),
			IND_I: new Pin(),
			BIBAR_I: new Pin(),
			OUTA_O: new Pin(),
			OUTB_O: new Pin(),
			OUTC_O: new Pin(),
			OUTD_O: new Pin(),
			OUTE_O: new Pin(),
			OUTF_O: new Pin(),
			OUTG_O: new Pin(),
		}
		this.ULS49LOG = new logicexp(['INA_I','INB_I','INC_I','IND_I','BIBAR_I'], ['OUTA','OUTB','OUTC','OUTD','OUTE','OUTF','OUTG'], []).Logic('let    INA   =  INA_I ;   INA   =  INA_I ;let    INB   =  INB_I ;   INB   =  INB_I ;let    INC   =  INC_I ;   INC   =  INC_I ;let    IND   =  IND_I ;   IND   =  IND_I ;let    BIBAR =  BIBAR_I ;   BIBAR =  BIBAR_I ;let    ABAR  =  !INA ;   ABAR  =  !INA ;let    BBAR  =  !INB ;   BBAR  =  !INB ;let    CBAR  =  !INC ;   CBAR  =  !INC ;let    DBAR  =  !IND ;   DBAR  =  !IND ;let    ABI   =  !(ABAR & BIBAR) ;   ABI   =  !(ABAR & BIBAR) ;let    BBI   =  !(BBAR & BIBAR) ;   BBI   =  !(BBAR & BIBAR) ;let    CBI   =  !(CBAR & BIBAR) ;   CBI   =  !(CBAR & BIBAR) ;let    DBI   =  !(DBAR & BIBAR) ;   DBI   =  !(DBAR & BIBAR) ;   OUTA  =  !((BBI & DBI) | (ABAR & CBI) | (ABI & BBAR & CBAR & DBAR)) ;   OUTB  =  !((BBI & DBI) | (ABI & BBAR & CBI) | (ABAR & BBI & CBI)) ;   OUTC  =  !((CBI & DBI) | (ABAR & BBI & CBAR)) ;   OUTD  =  !((ABI & BBAR & CBAR) | (ABAR & BBAR & CBI) |               (ABI & BBI & CBI)) ;   OUTE  =  !( ABI | (BBAR & CBI)) ;   OUTF  =  !((ABI & BBI) | (BBI & CBAR) | (ABI & CBAR & DBAR)) ;   OUTG  =  !((ABI & BBI & CBI) | (BBAR & CBAR & DBAR)) ;');
		Connect(this.ULS49LOG.pins.INA_I, this.pins.INA_I);
		Connect(this.ULS49LOG.pins.INB_I, this.pins.INB_I);
		Connect(this.ULS49LOG.pins.INC_I, this.pins.INC_I);
		Connect(this.ULS49LOG.pins.IND_I, this.pins.IND_I);
		Connect(this.ULS49LOG.pins.BIBAR_I, this.pins.BIBAR_I);
		let OUTA = new Pin();
		Connect(this.ULS49LOG.pins.OUTA, OUTA);
		let OUTB = new Pin();
		Connect(this.ULS49LOG.pins.OUTB, OUTB);
		let OUTC = new Pin();
		Connect(this.ULS49LOG.pins.OUTC, OUTC);
		let OUTD = new Pin();
		Connect(this.ULS49LOG.pins.OUTD, OUTD);
		let OUTE = new Pin();
		Connect(this.ULS49LOG.pins.OUTE, OUTE);
		let OUTF = new Pin();
		Connect(this.ULS49LOG.pins.OUTF, OUTF);
		let OUTG = new Pin();
		Connect(this.ULS49LOG.pins.OUTG, OUTG);
		Connect(OUTA, this.pins.OUTA_O);
		Connect(OUTB, this.pins.OUTB_O);
		Connect(OUTC, this.pins.OUTC_O);
		Connect(OUTD, this.pins.OUTD_O);
		Connect(OUTE, this.pins.OUTE_O);
		Connect(OUTF, this.pins.OUTF_O);
		Connect(OUTG, this.pins.OUTG_O);
	}
}
/**
 * And-Or-Invert Gates
 */
class SN74LS51 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A: new Pin(),
			_1B: new Pin(),
			_1C: new Pin(),
			_1D: new Pin(),
			_1E: new Pin(),
			_1F: new Pin(),
			_1Y: new Pin(),
			_2A: new Pin(),
			_2B: new Pin(),
			_2C: new Pin(),
			_2D: new Pin(),
			_2Y: new Pin(),
		}
		this.U1 = new aoi(3,2);
		this.U2 = new aoi(2,2);
	}
}
/**
 * 4-wide And-Or-Invert Gates
 */
class SN74LS54 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			E: new Pin(),
			F: new Pin(),
			G: new Pin(),
			H: new Pin(),
			I: new Pin(),
			J: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new aoi(3,4);
	}
}
/**
 * 2-wide 4-input And-Or-Invert Gates
 */
class SN74LS55 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			E: new Pin(),
			F: new Pin(),
			G: new Pin(),
			H: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new aoi(4,2);
	}
}
/**
 * Frequency Dividers(5 to 1, 5 to 1, and 10 to 1)
 */
class SN74LS56 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR: new Pin(),
			CLKA: new Pin(),
			CLKB: new Pin(),
			QA: new Pin(),
			QB: new Pin(),
			QC: new Pin(),
		}
		this.U1 = new bufa(2);
		this.U2 = new inv();
		Connect(this.U2.pins.IN, this.pins.CLR);
		let CLRB = new Pin();
		Connect(this.U2.pins.OUT, CLRB);
		this.U3 = new bufa(2);
		this.U4 = new buf();
	}
}
class SN56DIV5 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR: new Pin(),
			CLK: new Pin(),
			Q: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UE1 = new jkff(2);
		this.UE2 = new jkff(1);
		this.U3 = new ao(2,2);
	}
}
class SN56DIV2 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR: new Pin(),
			CLK: new Pin(),
			Q: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UE1 = new jkff(1);
	}
}
/**
 * Frequency Dividers(6 to 1, 5 to 1, and 10 to 1)
 */
class SN74LS57 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR: new Pin(),
			CLKA: new Pin(),
			CLKB: new Pin(),
			QA: new Pin(),
			QB: new Pin(),
			QC: new Pin(),
		}
		this.U1 = new bufa(2);
		this.U2 = new inv();
		Connect(this.U2.pins.IN, this.pins.CLR);
		let CLRB = new Pin();
		Connect(this.U2.pins.OUT, CLRB);
		this.U3 = new bufa(2);
	}
}
class SN57DIV5 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR: new Pin(),
			CLK: new Pin(),
			Q: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UE1 = new jkff(2);
		this.UE2 = new jkff(1);
		this.U3 = new ao(2,2);
	}
}
class SN57DIV2 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR: new Pin(),
			CLK: new Pin(),
			Q: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UE1 = new jkff(1);
	}
}
class SN57DIV6 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR: new Pin(),
			CLK: new Pin(),
			Q: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UE1 = new jkff(2);
		this.UE3 = new jkff(1);
		this.U1 = new ao(2,2);
		this.U2 = new ao(2,2);
	}
}
/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74LS68 extends Component {
	constructor() {
		super();
		this.pins = {
			_1CLRBAR_I: new Pin(),
			_1CLKA_I: new Pin(),
			_1CLKB_I: new Pin(),
			_1QA_O: new Pin(),
			_1QB_O: new Pin(),
			_1QC_O: new Pin(),
			_1QD_O: new Pin(),
			_2CLRBAR_I: new Pin(),
			_2CLK_I: new Pin(),
			_2QA_O: new Pin(),
			_2QB_O: new Pin(),
			_2QC_O: new Pin(),
			_2QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new jkff(1);
		this.U6 = new jkff(1);
		this.U7 = new jkff(1);
		this.U8 = new jkff(1);
		this.ULS68LOG = new logicexp(['_1CLRBAR_I','_1CLKA_I','_1CLKB_I','_1QBBAR','_1QCBAR','_1QDBAR','_2CLRBAR_I','_2CLK_I','_2QA','_2QBBAR','_2QCBAR','_2QDBAR'], ['_1CLRBAR','_1CLKA','_1CLKB','_1CLOCK2','_1CLOCK4','_2CLRBAR','_2CLK','_2CLOCK2','_2CLOCK4'], []).Logic('   _1CLRBAR =  _1CLRBAR_I ;   _1CLKA   =  _1CLKA_I ;   _1CLKB   =  _1CLKB_I ;   _1CLOCK2 =  _1CLKB & 1QDBAR ;   _1CLOCK4 =  !( (1QBBAR & 1QDBAR) | (1QCBAR & 1QDBAR) ) & _1CLKB ;   _2CLRBAR =  _2CLRBAR_I ;   _2CLK    =  _2CLK_I ;   _2CLOCK2 =  2QA & 2QDBAR ;   _2CLOCK4 =  !( (2QBBAR & 2QDBAR) | (2QCBAR & 2QDBAR) ) & 2QA ;');
		Connect(this.ULS68LOG.pins._1CLRBAR_I, this.pins._1CLRBAR_I);
		Connect(this.ULS68LOG.pins._1CLKA_I, this.pins._1CLKA_I);
		Connect(this.ULS68LOG.pins._1CLKB_I, this.pins._1CLKB_I);
		let _1QBBAR = new Pin();
		Connect(this.ULS68LOG.pins._1QBBAR, _1QBBAR);
		let _1QCBAR = new Pin();
		Connect(this.ULS68LOG.pins._1QCBAR, _1QCBAR);
		let _1QDBAR = new Pin();
		Connect(this.ULS68LOG.pins._1QDBAR, _1QDBAR);
		Connect(this.ULS68LOG.pins._2CLRBAR_I, this.pins._2CLRBAR_I);
		Connect(this.ULS68LOG.pins._2CLK_I, this.pins._2CLK_I);
		let _2QA = new Pin();
		Connect(this.ULS68LOG.pins._2QA, _2QA);
		let _2QBBAR = new Pin();
		Connect(this.ULS68LOG.pins._2QBBAR, _2QBBAR);
		let _2QCBAR = new Pin();
		Connect(this.ULS68LOG.pins._2QCBAR, _2QCBAR);
		let _2QDBAR = new Pin();
		Connect(this.ULS68LOG.pins._2QDBAR, _2QDBAR);
		let _1CLRBAR = new Pin();
		Connect(this.ULS68LOG.pins._1CLRBAR, _1CLRBAR);
		let _1CLKA = new Pin();
		Connect(this.ULS68LOG.pins._1CLKA, _1CLKA);
		let _1CLKB = new Pin();
		Connect(this.ULS68LOG.pins._1CLKB, _1CLKB);
		let _1CLOCK2 = new Pin();
		Connect(this.ULS68LOG.pins._1CLOCK2, _1CLOCK2);
		let _1CLOCK4 = new Pin();
		Connect(this.ULS68LOG.pins._1CLOCK4, _1CLOCK4);
		let _2CLRBAR = new Pin();
		Connect(this.ULS68LOG.pins._2CLRBAR, _2CLRBAR);
		let _2CLK = new Pin();
		Connect(this.ULS68LOG.pins._2CLK, _2CLK);
		let _2CLOCK2 = new Pin();
		Connect(this.ULS68LOG.pins._2CLOCK2, _2CLOCK2);
		let _2CLOCK4 = new Pin();
		Connect(this.ULS68LOG.pins._2CLOCK4, _2CLOCK4);
		Connect(this.pins._1QA, this.pins._1QA_O);
		Connect(this.pins._1QB, this.pins._1QB_O);
		Connect(this.pins._1QC, this.pins._1QC_O);
		Connect(this.pins._1QD, this.pins._1QD_O);
		Connect(_2QA, this.pins._2QA_O);
		Connect(this.pins._2QB, this.pins._2QB_O);
		Connect(this.pins._2QC, this.pins._2QC_O);
		Connect(this.pins._2QD, this.pins._2QD_O);
	}
}
/**
 * COUNTER BINARY 4-BIT, ASYNCHRONOUS
 */
class SN74LS69 extends Component {
	constructor() {
		super();
		this.pins = {
			_1CLRBAR_I: new Pin(),
			_1CLKA_I: new Pin(),
			_1CLKB_I: new Pin(),
			_1QA_O: new Pin(),
			_1QB_O: new Pin(),
			_1QC_O: new Pin(),
			_1QD_O: new Pin(),
			_2CLRBAR_I: new Pin(),
			_2CLK_I: new Pin(),
			_2QA_O: new Pin(),
			_2QB_O: new Pin(),
			_2QC_O: new Pin(),
			_2QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new jkff(1);
		this.U6 = new jkff(1);
		this.U7 = new jkff(1);
		this.U8 = new jkff(1);
		this.U9 = new bufa(5);
		Connect(this.pins._1QA, this.pins._1QA_O);
		Connect(this.pins._1QB, this.pins._1QB_O);
		Connect(this.pins._1QC, this.pins._1QC_O);
		Connect(this.pins._1QD, this.pins._1QD_O);
		Connect(this.pins._2QA, this.pins._2QA_O);
		Connect(this.pins._2QB, this.pins._2QB_O);
		Connect(this.pins._2QC, this.pins._2QC_O);
		Connect(this.pins._2QD, this.pins._2QD_O);
	}
}
/**
 * Dual J-K Flip-Flops with Clear
 */
class SN74LS73A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			CLRBAR: new Pin(),
			J: new Pin(),
			K: new Pin(),
			Q: new Pin(),
			QBAR: new Pin(),
		}
		this.U1 = new jkff(1);
	}
}
class SN74LS74A extends Component {
	constructor() {
		super();
		this.pins = {
			_1CLRBAR: new Pin(),
			_1D: new Pin(),
			_1CLK: new Pin(),
			_1PREBAR: new Pin(),
			_1Q: new Pin(),
			_1QBAR: new Pin(),
		}
		this.UFF1 = new dff(1);
		Connect(this.UFF1.pins.PRESET, this.pins._1PREBAR);
		Connect(this.UFF1.pins.CLEAR, this.pins._1CLRBAR);
		Connect(this.UFF1.pins.CLOCK, this.pins._1CLK);
		Connect(this.UFF1.pins.D0, this.pins._1D);
		Connect(this.UFF1.pins.Q0, this.pins._1Q);
	}
}
/**
 * 4-bit bistable latches (dual 2-bit common clock)
 */
class SN74LS75 extends Component {
	constructor() {
		super();
		this.pins = {
			_1D: new Pin(),
			_2D: new Pin(),
			C: new Pin(),
			_1Q: new Pin(),
			_1QBAR: new Pin(),
			_2Q: new Pin(),
			_2QBAR: new Pin(),
		}
		this.UIBUF = new bufa(3);
		this.U12 = new dltch(2);
		this.U12B = new dltch(2);
	}
}
/**
 * Dual J-K Flip-Flops with Preset and Clear
 */
class SN74LS76A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			PREBAR: new Pin(),
			CLRBAR: new Pin(),
			J: new Pin(),
			K: new Pin(),
			Q: new Pin(),
			QBAR: new Pin(),
		}
		this.U1 = new jkff(1);
	}
}
/**
 * 4-bit bistable latches
 */
class SN74LS77 extends Component {
	constructor() {
		super();
		this.pins = {
			_1D: new Pin(),
			_2D: new Pin(),
			C: new Pin(),
			_1Q: new Pin(),
			_2Q: new Pin(),
		}
		this.UIBUF = new buf();
		this.U1 = new dltch(2);
	}
}
/**
 * Dual J-K Flip-Flops with Preset, Common Clear and Common Clock
 */
class SN74LS78A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			CLRBAR: new Pin(),
			_1PREBAR: new Pin(),
			_1J: new Pin(),
			_1K: new Pin(),
			_1Q: new Pin(),
			_1QBAR: new Pin(),
			_2PREBAR: new Pin(),
			_2J: new Pin(),
			_2K: new Pin(),
			_2Q: new Pin(),
			_2QBAR: new Pin(),
		}
		this.UIBUF = new bufa(4);
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
	}
}
/**
 * 4-BIT BINARY FULL ADDERS WITH FAST CARRY
 */
class SN74LS83A extends Component {
	constructor() {
		super();
		this.pins = {
			C0_I: new Pin(),
			A1_I: new Pin(),
			A2_I: new Pin(),
			A3_I: new Pin(),
			A4_I: new Pin(),
			B1_I: new Pin(),
			B2_I: new Pin(),
			B3_I: new Pin(),
			B4_I: new Pin(),
			C4_O: new Pin(),
			SUM1_O: new Pin(),
			SUM2_O: new Pin(),
			SUM3_O: new Pin(),
			SUM4_O: new Pin(),
		}
		this.ULS83ALOG = new logicexp(['C0_I','A1_I','A2_I','A3_I','A4_I','B1_I','B2_I','B3_I','B4_I'], ['C0','A1','A2','A3','A4','B1','B2','B3','B4','C4','SUM1','SUM2','SUM3','SUM4'], []).Logic('   C0 =  C0_I ;   A1 =  A1_I ;   A2 =  A2_I ;   A3 =  A3_I ;   A4 =  A4_I ;   B1 =  B1_I ;   B2 =  B2_I ;   B3 =  B3_I ;   B4 =  B4_I ;let    NAND4 =  !(A4 & B4) ;   NAND4 =  !(A4 & B4) ;let    NAND3 =  !(A3 & B3) ;   NAND3 =  !(A3 & B3) ;let    NAND2 =  !(A2 & B2) ;   NAND2 =  !(A2 & B2) ;let    NAND1 =  !(A1 & B1) ;   NAND1 =  !(A1 & B1) ;let    NOR4 =  !(A4 | B4) ;   NOR4 =  !(A4 | B4) ;let    NOR3 =  !(A3 | B3) ;   NOR3 =  !(A3 | B3) ;let    NOR2 =  !(A2 | B2) ;   NOR2 =  !(A2 | B2) ;let    NOR1 =  !(A1 | B1) ;   NOR1 =  !(A1 | B1) ;let    C0BAR =  !C0 ;   C0BAR =  !C0 ;   SUM1 =  (NAND1 & !NOR1) ^ C0 ;   SUM2 =  (NAND2 & !NOR2) ^ (!(NOR1 | (NAND1 & C0BAR))) ;   SUM3 =  (NAND3 & !NOR3) ^ (!(NOR2 | (NOR1 & NAND2) |            (NAND2 & NAND1 & C0BAR))) ;   SUM4 =  (NAND4 & !NOR4) ^ (!(NOR3 | (NOR2 & NAND3) |            (NOR1 & NAND3 & NAND2) | (NAND3 & NAND2 & NAND1 & C0BAR))) ;   C4 =  !( NOR4 | (NOR3 & NAND4) | (NOR2 & NAND4 & NAND3) |             (NOR1 & NAND4 & NAND3 & NAND2) |             (NAND4 & NAND3 & NAND2 & NAND1 & C0BAR) ) ;');
		Connect(this.ULS83ALOG.pins.C0_I, this.pins.C0_I);
		Connect(this.ULS83ALOG.pins.A1_I, this.pins.A1_I);
		Connect(this.ULS83ALOG.pins.A2_I, this.pins.A2_I);
		Connect(this.ULS83ALOG.pins.A3_I, this.pins.A3_I);
		Connect(this.ULS83ALOG.pins.A4_I, this.pins.A4_I);
		Connect(this.ULS83ALOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS83ALOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS83ALOG.pins.B3_I, this.pins.B3_I);
		Connect(this.ULS83ALOG.pins.B4_I, this.pins.B4_I);
		let C0 = new Pin();
		Connect(this.ULS83ALOG.pins.C0, C0);
		let A1 = new Pin();
		Connect(this.ULS83ALOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS83ALOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS83ALOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS83ALOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS83ALOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS83ALOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS83ALOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS83ALOG.pins.B4, B4);
		let C4 = new Pin();
		Connect(this.ULS83ALOG.pins.C4, C4);
		let SUM1 = new Pin();
		Connect(this.ULS83ALOG.pins.SUM1, SUM1);
		let SUM2 = new Pin();
		Connect(this.ULS83ALOG.pins.SUM2, SUM2);
		let SUM3 = new Pin();
		Connect(this.ULS83ALOG.pins.SUM3, SUM3);
		let SUM4 = new Pin();
		Connect(this.ULS83ALOG.pins.SUM4, SUM4);
		Connect(SUM1, this.pins.SUM1_O);
		Connect(SUM2, this.pins.SUM2_O);
		Connect(SUM3, this.pins.SUM3_O);
		Connect(SUM4, this.pins.SUM4_O);
		Connect(C4, this.pins.C4_O);
	}
}
/**
 * 4-BIT MAGNITUDE COMPARATOR
 */
class SN74LS85 extends Component {
	constructor() {
		super();
		this.pins = {
			A3_I: new Pin(),
			A2_I: new Pin(),
			A1_I: new Pin(),
			A0_I: new Pin(),
			B3_I: new Pin(),
			B2_I: new Pin(),
			B1_I: new Pin(),
			B0_I: new Pin(),
			AGBIN_I: new Pin(),
			AEBIN_I: new Pin(),
			ALBIN_I: new Pin(),
			AGBOUT_O: new Pin(),
			AEBOUT_O: new Pin(),
			ALBOUT_O: new Pin(),
		}
		this.ULS85LOG = new logicexp(['A3_I','A2_I','A1_I','A0_I','B3_I','B2_I','B1_I','B0_I','AGBIN_I','AEBIN_I','ALBIN_I'], ['A3','A2','A1','A0','B3','B2','B1','B0','AGBIN','AEBIN','ALBIN','AGBOUT','AEBOUT','ALBOUT'], []).Logic('   A3     =  A3_I ;   A2     =  A2_I ;   A1     =  A1_I ;   A0     =  A0_I ;   B3     =  B3_I ;   B2     =  B2_I ;   B1     =  B1_I ;   B0     =  B0_I ;   AGBIN  =  AGBIN_I ;   AEBIN  =  AEBIN_I ;   ALBIN  =  ALBIN_I ;let    C3     =  !(A3 & B3) ;   C3     =  !(A3 & B3) ;let    C2     =  !(A2 & B2) ;   C2     =  !(A2 & B2) ;let    C1     =  !(A1 & B1) ;   C1     =  !(A1 & B1) ;let    C0     =  !(A0 & B0) ;   C0     =  !(A0 & B0) ;let    A3C3    =  A3 & C3 ;   A3C3    =  A3 & C3 ;let    A2C2    =  A2 & C2 ;   A2C2    =  A2 & C2 ;let    A1C1    =  A1 & C1 ;   A1C1    =  A1 & C1 ;let    A0C0    =  A0 & C0 ;   A0C0    =  A0 & C0 ;let    B3C3    =  B3 & C3 ;   B3C3    =  B3 & C3 ;let    B2C2    =  B2 & C2 ;   B2C2    =  B2 & C2 ;let    B1C1    =  B1 & C1 ;   B1C1    =  B1 & C1 ;let    B0C0    =  B0 & C0 ;   B0C0    =  B0 & C0 ;let    D3      =  !(A3C3 | B3C3) ;   D3      =  !(A3C3 | B3C3) ;let    D2      =  !(A2C2 | B2C2) ;   D2      =  !(A2C2 | B2C2) ;let    D1      =  !(A1C1 | B1C1) ;   D1      =  !(A1C1 | B1C1) ;let    D0      =  !(A0C0 | B0C0) ;   D0      =  !(A0C0 | B0C0) ;let    D32     =  D3 & D2 ;   D32     =  D3 & D2 ;let    D31     =  D32 & D1 ;   D31     =  D32 & D1 ;let    D30     =  D31 & D0 ;   D30     =  D31 & D0 ;   AGBOUT  =  !B3C3 & !(B2C2 & D3) & !(B1C1 & D32) & !(B0C0 & D31) &               !(ALBIN & D30) & !(AEBIN & D30) ;   AEBOUT  =  D30 & AEBIN ;   ALBOUT  =  !(AEBIN & D30) & !(AGBIN & D30) & !(A0C0 & D31) &               !(A1C1 & D32)  & !(A2C2 & D3)   & !A3C3 ;');
		Connect(this.ULS85LOG.pins.A3_I, this.pins.A3_I);
		Connect(this.ULS85LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.ULS85LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.ULS85LOG.pins.A0_I, this.pins.A0_I);
		Connect(this.ULS85LOG.pins.B3_I, this.pins.B3_I);
		Connect(this.ULS85LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS85LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS85LOG.pins.B0_I, this.pins.B0_I);
		Connect(this.ULS85LOG.pins.AGBIN_I, this.pins.AGBIN_I);
		Connect(this.ULS85LOG.pins.AEBIN_I, this.pins.AEBIN_I);
		Connect(this.ULS85LOG.pins.ALBIN_I, this.pins.ALBIN_I);
		let A3 = new Pin();
		Connect(this.ULS85LOG.pins.A3, A3);
		let A2 = new Pin();
		Connect(this.ULS85LOG.pins.A2, A2);
		let A1 = new Pin();
		Connect(this.ULS85LOG.pins.A1, A1);
		let A0 = new Pin();
		Connect(this.ULS85LOG.pins.A0, A0);
		let B3 = new Pin();
		Connect(this.ULS85LOG.pins.B3, B3);
		let B2 = new Pin();
		Connect(this.ULS85LOG.pins.B2, B2);
		let B1 = new Pin();
		Connect(this.ULS85LOG.pins.B1, B1);
		let B0 = new Pin();
		Connect(this.ULS85LOG.pins.B0, B0);
		let AGBIN = new Pin();
		Connect(this.ULS85LOG.pins.AGBIN, AGBIN);
		let AEBIN = new Pin();
		Connect(this.ULS85LOG.pins.AEBIN, AEBIN);
		let ALBIN = new Pin();
		Connect(this.ULS85LOG.pins.ALBIN, ALBIN);
		let AGBOUT = new Pin();
		Connect(this.ULS85LOG.pins.AGBOUT, AGBOUT);
		let AEBOUT = new Pin();
		Connect(this.ULS85LOG.pins.AEBOUT, AEBOUT);
		let ALBOUT = new Pin();
		Connect(this.ULS85LOG.pins.ALBOUT, ALBOUT);
		Connect(AGBOUT, this.pins.AGBOUT_O);
		Connect(AEBOUT, this.pins.AEBOUT_O);
		Connect(ALBOUT, this.pins.ALBOUT_O);
	}
}
class SN74LS86A extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.UIBUF = new bufa(2);
		this.U1 = new or(2);
		this.U2 = new nand(2);
		let A_BUF = new Pin();
		Connect(this.U2.pins.IN0, A_BUF);
		let B_BUF = new Pin();
		Connect(this.U2.pins.IN1, B_BUF);
		let D = new Pin();
		Connect(this.U2.pins.OUT, D);
		this.U3 = new and(2);
	}
}
/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74LS90 extends Component {
	constructor() {
		super();
		this.pins = {
			R91_I: new Pin(),
			R92_I: new Pin(),
			CKA_I: new Pin(),
			CKB_I: new Pin(),
			R01_I: new Pin(),
			R02_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.ULS90LOG = new logicexp(['R91_I','R92_I','CKA_I','CKB_I','R01_I','R02_I','QB','QC'], ['R91','R92','CKA','CKB','R01','R02','J4','SET9BAR','CLRBAR','CLRBAR23'], []).Logic('   R91      =  R91_I ;   R92      =  R92_I ;   CKA      =  CKA_I ;   CKB      =  CKB_I ;   R01      =  R01_I ;   R02      =  R02_I ;   SET9BAR  =  !(R91 & R92) ;   CLRBAR   =  !(R01 & R02) ;   CLRBAR23 =  CLRBAR & SET9BAR ;   J4       =  QB & QC ;');
		Connect(this.ULS90LOG.pins.R91_I, this.pins.R91_I);
		Connect(this.ULS90LOG.pins.R92_I, this.pins.R92_I);
		Connect(this.ULS90LOG.pins.CKA_I, this.pins.CKA_I);
		Connect(this.ULS90LOG.pins.CKB_I, this.pins.CKB_I);
		Connect(this.ULS90LOG.pins.R01_I, this.pins.R01_I);
		Connect(this.ULS90LOG.pins.R02_I, this.pins.R02_I);
		let QB = new Pin();
		Connect(this.ULS90LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS90LOG.pins.QC, QC);
		let R91 = new Pin();
		Connect(this.ULS90LOG.pins.R91, R91);
		let R92 = new Pin();
		Connect(this.ULS90LOG.pins.R92, R92);
		let CKA = new Pin();
		Connect(this.ULS90LOG.pins.CKA, CKA);
		let CKB = new Pin();
		Connect(this.ULS90LOG.pins.CKB, CKB);
		let R01 = new Pin();
		Connect(this.ULS90LOG.pins.R01, R01);
		let R02 = new Pin();
		Connect(this.ULS90LOG.pins.R02, R02);
		let J4 = new Pin();
		Connect(this.ULS90LOG.pins.J4, J4);
		let SET9BAR = new Pin();
		Connect(this.ULS90LOG.pins.SET9BAR, SET9BAR);
		let CLRBAR = new Pin();
		Connect(this.ULS90LOG.pins.CLRBAR, CLRBAR);
		let CLRBAR23 = new Pin();
		Connect(this.ULS90LOG.pins.CLRBAR23, CLRBAR23);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS
 */
class SN74LS91 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			QH_O: new Pin(),
			QHBAR_O: new Pin(),
		}
		this.U1 = new bufa(3);
		this.U2 = new nand(2);
		let A = new Pin();
		Connect(this.U2.pins.IN0, A);
		let B = new Pin();
		Connect(this.U2.pins.IN1, B);
		let KA = new Pin();
		Connect(this.U2.pins.OUT, KA);
		this.U3 = new inva(2);
		this.U5 = new jkff(8);
		Connect(this.pins.QH, this.pins.QH_O);
		Connect(this.pins.QHBAR, this.pins.QHBAR_O);
	}
}
/**
 * COUNTER DIVIDE-BY-12 4-BIT, ASYNCHRONOUS
 */
class SN74LS92 extends Component {
	constructor() {
		super();
		this.pins = {
			CKA_I: new Pin(),
			CKB_I: new Pin(),
			R01_I: new Pin(),
			R02_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new bufa(4);
		this.U6 = new nand(2);
		let R01 = new Pin();
		Connect(this.U6.pins.IN0, R01);
		let R02 = new Pin();
		Connect(this.U6.pins.IN1, R02);
		let CLRBAR = new Pin();
		Connect(this.U6.pins.OUT, CLRBAR);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * COUNTER BINARY 4-BIT, ASYNCHRONOUS
 */
class SN74LS93 extends Component {
	constructor() {
		super();
		this.pins = {
			CKA_I: new Pin(),
			CKB_I: new Pin(),
			R01_I: new Pin(),
			R02_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new bufa(4);
		this.U6 = new nand(2);
		let R01 = new Pin();
		Connect(this.U6.pins.IN0, R01);
		let R02 = new Pin();
		Connect(this.U6.pins.IN1, R02);
		let CLRBAR = new Pin();
		Connect(this.U6.pins.OUT, CLRBAR);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * 4-BIT PARALLEL SHIFT REGISTERS
 */
class SN74LS95B extends Component {
	constructor() {
		super();
		this.pins = {
			MODE_I: new Pin(),
			CLK1_I: new Pin(),
			CLK2_I: new Pin(),
			SER_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.ULS95BLOG = new logicexp(['MODE_I','CLK1_I','CLK2_I','SER_I','A_I','B_I','C_I','D_I','QA','QB','QC'], ['MODE','CLK1','CLK2','SER','A','B','C','D','CLK','DA','DB','DC','DD'], []).Logic('   MODE =  MODE_I ;   CLK1 =  CLK1_I ;   CLK2 =  CLK2_I ;   SER =  SER_I ;   A   =  A_I ;   B   =  B_I ;   C   =  C_I ;   D   =  D_I ;let    MODEBAR =  !MODE ;   MODEBAR =  !MODE ;   CLK =  !((MODEBAR  & CLK1) | (MODE  & CLK2)) ;   DA  =  (MODEBAR  & SER)    | (MODE  & A) ;   DB  =  (MODEBAR  & QA) | (MODE  & B) ;   DC  =  (MODEBAR  & QB) | (MODE  & C) ;   DD  =  (MODEBAR  & QC) | (MODE  & D) ;');
		Connect(this.ULS95BLOG.pins.MODE_I, this.pins.MODE_I);
		Connect(this.ULS95BLOG.pins.CLK1_I, this.pins.CLK1_I);
		Connect(this.ULS95BLOG.pins.CLK2_I, this.pins.CLK2_I);
		Connect(this.ULS95BLOG.pins.SER_I, this.pins.SER_I);
		Connect(this.ULS95BLOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS95BLOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS95BLOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS95BLOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS95BLOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS95BLOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS95BLOG.pins.QC, QC);
		let MODE = new Pin();
		Connect(this.ULS95BLOG.pins.MODE, MODE);
		let CLK1 = new Pin();
		Connect(this.ULS95BLOG.pins.CLK1, CLK1);
		let CLK2 = new Pin();
		Connect(this.ULS95BLOG.pins.CLK2, CLK2);
		let SER = new Pin();
		Connect(this.ULS95BLOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.ULS95BLOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS95BLOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS95BLOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS95BLOG.pins.D, D);
		let CLK = new Pin();
		Connect(this.ULS95BLOG.pins.CLK, CLK);
		let DA = new Pin();
		Connect(this.ULS95BLOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.ULS95BLOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.ULS95BLOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.ULS95BLOG.pins.DD, DD);
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.D0, DA);
		Connect(this.U1.pins.D1, DB);
		Connect(this.U1.pins.D2, DC);
		Connect(this.U1.pins.D3, DD);
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.Q1, QB);
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
class SN74LS96 extends Component {
	constructor() {
		super();
		this.pins = {
			CLRBAR_I: new Pin(),
			CLK_I: new Pin(),
			SER_I: new Pin(),
			PRE_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			E_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
		}
		this.U1 = new bufa(9);
		this.U2 = new nanda(2,5);
		this.U3 = new dff(1);
		let OUT_A = new Pin();
		Connect(this.U3.pins.PRESET, OUT_A);
		let CLRBAR = new Pin();
		Connect(this.U3.pins.CLEAR, CLRBAR);
		let CLK = new Pin();
		Connect(this.U3.pins.CLOCK, CLK);
		let SER = new Pin();
		Connect(this.U3.pins.D0, SER);
		let QA = new Pin();
		Connect(this.U3.pins.Q0, QA);
		this.U4 = new dff(1);
		let OUT = new Pin();
		Connect(this.U4.pins.PRESET, OUT);
		Connect(this.U4.pins.CLEAR, CLRBAR);
		Connect(this.U4.pins.CLOCK, CLK);
		Connect(this.U4.pins.D0, QA);
		let QB = new Pin();
		Connect(this.U4.pins.Q0, QB);
		this.U5 = new dff(1);
		let OUT_C = new Pin();
		Connect(this.U5.pins.PRESET, OUT_C);
		Connect(this.U5.pins.CLEAR, CLRBAR);
		Connect(this.U5.pins.CLOCK, CLK);
		Connect(this.U5.pins.D0, QB);
		let QC = new Pin();
		Connect(this.U5.pins.Q0, QC);
		this.U6 = new dff(1);
		let OUT_D = new Pin();
		Connect(this.U6.pins.PRESET, OUT_D);
		Connect(this.U6.pins.CLEAR, CLRBAR);
		Connect(this.U6.pins.CLOCK, CLK);
		Connect(this.U6.pins.D0, QC);
		let QD = new Pin();
		Connect(this.U6.pins.Q0, QD);
		this.U7 = new dff(1);
		let OUT_E = new Pin();
		Connect(this.U7.pins.PRESET, OUT_E);
		Connect(this.U7.pins.CLEAR, CLRBAR);
		Connect(this.U7.pins.CLOCK, CLK);
		Connect(this.U7.pins.D0, QD);
		let QE = new Pin();
		Connect(this.U7.pins.Q0, QE);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
	}
}
/**
 * Dual J-K Flip-Flops with Clear
 */
class SN74LS107A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			CLRBAR: new Pin(),
			J: new Pin(),
			K: new Pin(),
			Q: new Pin(),
			QBAR: new Pin(),
		}
		this.U1 = new jkff(1);
	}
}
/**
 * Dual J-KBar Positive-Edge-Triggered Flip-Flops w_ Preset & Clear
 */
class SN74LS109A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			PREBAR: new Pin(),
			CLRBAR: new Pin(),
			J: new Pin(),
			KBAR: new Pin(),
			Q: new Pin(),
			QBAR: new Pin(),
		}
		this.UIBUF = new bufa(3);
		this.U1 = new jkff(1);
		this.U2 = new inva(2);
		this.U3 = new bufa(2);
		this.U4 = new bufa(2);
	}
}
class SN74LS112A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			PREBAR: new Pin(),
			CLRBAR: new Pin(),
			J: new Pin(),
			K: new Pin(),
			Q: new Pin(),
			QBAR: new Pin(),
		}
		this.U1 = new jkff(1);
	}
}
/**
 * Dual J-K Negative-Edge-Triggered Flip-Flops with Preset
 */
class SN74LS113A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			PREBAR: new Pin(),
			J: new Pin(),
			K: new Pin(),
			Q: new Pin(),
			QBAR: new Pin(),
		}
		this.U1 = new jkff(1);
	}
}
class SN74LS114A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			CLRBAR: new Pin(),
			_1PREBAR: new Pin(),
			_1J: new Pin(),
			_1K: new Pin(),
			_1Q: new Pin(),
			_1QBAR: new Pin(),
			_2PREBAR: new Pin(),
			_2J: new Pin(),
			_2K: new Pin(),
			_2Q: new Pin(),
			_2QBAR: new Pin(),
		}
		this.UIBUF = new bufa(4);
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
	}
}
/**
 * Quadruple Bus Buffer with 3-state Outputs
 */
class SN74LS125A extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			GBAR: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new buf3();
		this.U2 = new inv();
		Connect(this.U2.pins.IN, this.pins.GBAR);
		let G = new Pin();
		Connect(this.U2.pins.OUT, G);
	}
}
/**
 * Quadruple Bus Buffer with 3-state Outputs
 */
class SN74LS126A extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			G: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new buf3();
	}
}
/**
 * Quadruple 2-input Positive-Nand Schmitt Triggers
 */
class SN74LS132 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Exclusive-Or Gates with Open-Collector Outputs
 */
class SN74LS136 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new xor();
	}
}
/**
 * DECODER_DEMULTIPLEXER 3-8 LINE WITH ADDRESS LATCHES
 */
class SN74LS137 extends Component {
	constructor() {
		super();
		this.pins = {
			G1_I: new Pin(),
			G2BAR_I: new Pin(),
			GLBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			Y0_O: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
			Y5_O: new Pin(),
			Y6_O: new Pin(),
			Y7_O: new Pin(),
		}
		this.U1 = new dltch(3);
		this.ULS137LOG = new logicexp(['G1_I','G2BAR_I','GLBAR_I','A_I','B_I','C_I','QA','QB','QC','QABAR','QBBAR','QCBAR'], ['G1','G2BAR','GLBAR','A','B','C','LATCHEN','ENABLE','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7'], []).Logic('   G1      =  G1_I ;   G2BAR   =  G2BAR_I ;   GLBAR   =  GLBAR_I ;   A       =  A_I ;   B       =  B_I ;   C       =  C_I ;   LATCHEN =  !GLBAR ;   ENABLE  =  G1 & !G2BAR ;   Y0      =  !(ENABLE & QCBAR & QBBAR & QABAR) ;   Y1      =  !(ENABLE & QCBAR & QBBAR & QA   ) ;   Y2      =  !(ENABLE & QCBAR & QB    & QABAR) ;   Y3      =  !(ENABLE & QCBAR & QB    & QA   ) ;   Y4      =  !(ENABLE & QC    & QBBAR & QABAR) ;   Y5      =  !(ENABLE & QC    & QBBAR & QA   ) ;   Y6      =  !(ENABLE & QC    & QB    & QABAR) ;   Y7      =  !(ENABLE & QC    & QB    & QA   ) ;');
		Connect(this.ULS137LOG.pins.G1_I, this.pins.G1_I);
		Connect(this.ULS137LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS137LOG.pins.GLBAR_I, this.pins.GLBAR_I);
		Connect(this.ULS137LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS137LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS137LOG.pins.C_I, this.pins.C_I);
		let QA = new Pin();
		Connect(this.ULS137LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS137LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS137LOG.pins.QC, QC);
		let QABAR = new Pin();
		Connect(this.ULS137LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS137LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS137LOG.pins.QCBAR, QCBAR);
		let G1 = new Pin();
		Connect(this.ULS137LOG.pins.G1, G1);
		let G2BAR = new Pin();
		Connect(this.ULS137LOG.pins.G2BAR, G2BAR);
		let GLBAR = new Pin();
		Connect(this.ULS137LOG.pins.GLBAR, GLBAR);
		let A = new Pin();
		Connect(this.ULS137LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS137LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS137LOG.pins.C, C);
		let LATCHEN = new Pin();
		Connect(this.ULS137LOG.pins.LATCHEN, LATCHEN);
		let ENABLE = new Pin();
		Connect(this.ULS137LOG.pins.ENABLE, ENABLE);
		let Y0 = new Pin();
		Connect(this.ULS137LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.ULS137LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS137LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS137LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS137LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.ULS137LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.ULS137LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.ULS137LOG.pins.Y7, Y7);
		Connect(Y0, this.pins.Y0_O);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
		Connect(Y5, this.pins.Y5_O);
		Connect(Y6, this.pins.Y6_O);
		Connect(Y7, this.pins.Y7_O);
	}
}
/**
 * DECODER_DEMULTIPLEXER 3-8 LINE
 */
class SN74LS138 extends Component {
	constructor() {
		super();
		this.pins = {
			G1_I: new Pin(),
			G2ABAR_I: new Pin(),
			G2BBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			Y0_O: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
			Y5_O: new Pin(),
			Y6_O: new Pin(),
			Y7_O: new Pin(),
		}
		this.ULS138LOG = new logicexp(['G1_I','G2ABAR_I','G2BBAR_I','A_I','B_I','C_I'], ['G1','G2ABAR','G2BBAR','A','B','C','ENABLE','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7'], []).Logic('   G1     =  G1_I ;   G2ABAR =  G2ABAR_I ;   G2BBAR =  G2BBAR_I ;   A      =  A_I ;   B      =  B_I ;   C      =  C_I ;let    ABAR   =  !A ;   ABAR   =  !A ;let    BBAR   =  !B ;   BBAR   =  !B ;let    CBAR   =  !C ;   CBAR   =  !C ;   ENABLE =  !G2ABAR & !G2BBAR & G1 ;   Y0     =  !(ENABLE & CBAR & BBAR & ABAR) ;   Y1     =  !(ENABLE & CBAR & BBAR & A   ) ;   Y2     =  !(ENABLE & CBAR & B    & ABAR) ;   Y3     =  !(ENABLE & CBAR & B    & A   ) ;   Y4     =  !(ENABLE & C    & BBAR & ABAR) ;   Y5     =  !(ENABLE & C    & BBAR & A   ) ;   Y6     =  !(ENABLE & C    & B    & ABAR) ;   Y7     =  !(ENABLE & C    & B    & A   ) ;');
		Connect(this.ULS138LOG.pins.G1_I, this.pins.G1_I);
		Connect(this.ULS138LOG.pins.G2ABAR_I, this.pins.G2ABAR_I);
		Connect(this.ULS138LOG.pins.G2BBAR_I, this.pins.G2BBAR_I);
		Connect(this.ULS138LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS138LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS138LOG.pins.C_I, this.pins.C_I);
		let G1 = new Pin();
		Connect(this.ULS138LOG.pins.G1, G1);
		let G2ABAR = new Pin();
		Connect(this.ULS138LOG.pins.G2ABAR, G2ABAR);
		let G2BBAR = new Pin();
		Connect(this.ULS138LOG.pins.G2BBAR, G2BBAR);
		let A = new Pin();
		Connect(this.ULS138LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS138LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS138LOG.pins.C, C);
		let ENABLE = new Pin();
		Connect(this.ULS138LOG.pins.ENABLE, ENABLE);
		let Y0 = new Pin();
		Connect(this.ULS138LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.ULS138LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS138LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS138LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS138LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.ULS138LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.ULS138LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.ULS138LOG.pins.Y7, Y7);
		Connect(Y0, this.pins.Y0_O);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
		Connect(Y5, this.pins.Y5_O);
		Connect(Y6, this.pins.Y6_O);
		Connect(Y7, this.pins.Y7_O);
	}
}
/**
 * DECODER_DEMULTIPLEXER 2-4 LINE
 */
class SN74LS139A extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			Y0_O: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
		}
		this.ULS139LOG = new logicexp(['GBAR_I','A_I','B_I'], ['GBAR','A','B','Y0','Y1','Y2','Y3'], []).Logic('   GBAR   =  GBAR_I ;   A      =  A_I ;   B      =  B_I ;let    ABAR   =  !A ;   ABAR   =  !A ;let    BBAR   =  !B ;   BBAR   =  !B ;let    ENABLE =  !GBAR ;   ENABLE =  !GBAR ;   Y0     =  !(ENABLE & BBAR & ABAR ) ;   Y1     =  !(ENABLE & BBAR & A    ) ;   Y2     =  !(ENABLE & B    & ABAR ) ;   Y3     =  !(ENABLE & B    & A    ) ;');
		Connect(this.ULS139LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS139LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS139LOG.pins.B_I, this.pins.B_I);
		let GBAR = new Pin();
		Connect(this.ULS139LOG.pins.GBAR, GBAR);
		let A = new Pin();
		Connect(this.ULS139LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS139LOG.pins.B, B);
		let Y0 = new Pin();
		Connect(this.ULS139LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.ULS139LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS139LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS139LOG.pins.Y3, Y3);
		Connect(Y0, this.pins.Y0_O);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
	}
}
/**
 * DECODER_DRIVER BCD-DECIMAL WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS145 extends Component {
	constructor() {
		super();
		this.pins = {
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			Y0_O: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
			Y5_O: new Pin(),
			Y6_O: new Pin(),
			Y7_O: new Pin(),
			Y8_O: new Pin(),
			Y9_O: new Pin(),
		}
		this.ULS145LOG = new logicexp(['A_I','B_I','C_I','D_I'], ['Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9'], []).Logic('let    A    =  A_I ;   A    =  A_I ;let    B    =  B_I ;   B    =  B_I ;let    C    =  C_I ;   C    =  C_I ;let    D    =  D_I ;   D    =  D_I ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    CBAR =  !C ;   CBAR =  !C ;let    DBAR =  !D ;   DBAR =  !D ;   Y0   =  !(DBAR & CBAR & BBAR & ABAR ) ;   Y1   =  !(DBAR & CBAR & BBAR & A    ) ;   Y2   =  !(DBAR & CBAR & B    & ABAR ) ;   Y3   =  !(DBAR & CBAR & B    & A    ) ;   Y4   =  !(DBAR & C    & BBAR & ABAR ) ;   Y5   =  !(DBAR & C    & BBAR & A    ) ;   Y6   =  !(DBAR & C    & B    & ABAR ) ;   Y7   =  !(DBAR & C    & B    & A    ) ;   Y8   =  !(D    & CBAR & BBAR & ABAR ) ;   Y9   =  !(D    & CBAR & BBAR & A    ) ;');
		Connect(this.ULS145LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS145LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS145LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS145LOG.pins.D_I, this.pins.D_I);
		let Y0 = new Pin();
		Connect(this.ULS145LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.ULS145LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS145LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS145LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS145LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.ULS145LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.ULS145LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.ULS145LOG.pins.Y7, Y7);
		let Y8 = new Pin();
		Connect(this.ULS145LOG.pins.Y8, Y8);
		let Y9 = new Pin();
		Connect(this.ULS145LOG.pins.Y9, Y9);
		Connect(Y0, this.pins.Y0_O);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
		Connect(Y5, this.pins.Y5_O);
		Connect(Y6, this.pins.Y6_O);
		Connect(Y7, this.pins.Y7_O);
		Connect(Y8, this.pins.Y8_O);
		Connect(Y9, this.pins.Y9_O);
	}
}
/**
 * PRIORITY ENCODER 10-4 LINE
 */
class SN74LS147 extends Component {
	constructor() {
		super();
		this.pins = {
			IN1_I: new Pin(),
			IN2_I: new Pin(),
			IN3_I: new Pin(),
			IN4_I: new Pin(),
			IN5_I: new Pin(),
			IN6_I: new Pin(),
			IN7_I: new Pin(),
			IN8_I: new Pin(),
			IN9_I: new Pin(),
			A_O: new Pin(),
			B_O: new Pin(),
			C_O: new Pin(),
			D_O: new Pin(),
		}
		this.ULS147LOG = new logicexp(['IN1_I','IN2_I','IN3_I','IN4_I','IN5_I','IN6_I','IN7_I','IN8_I','IN9_I'], ['IN1','IN2','IN3','IN4','IN5','IN6','IN7','IN8','IN9','A','B','C','D'], []).Logic(' IN1    =  IN1_I ; IN2    =  IN2_I ; IN3    =  IN3_I ; IN4    =  IN4_I ; IN5    =  IN5_I ; IN6    =  IN6_I ; IN7    =  IN7_I ; IN8    =  IN8_I ; IN9    =  IN9_I ;let  IN1BAR =  !IN1 ; IN1BAR =  !IN1 ;let  IN2BAR =  !IN2 ; IN2BAR =  !IN2 ;let  IN3BAR =  !IN3 ; IN3BAR =  !IN3 ;let  IN4BAR =  !IN4 ; IN4BAR =  !IN4 ;let  IN5BAR =  !IN5 ; IN5BAR =  !IN5 ;let  IN6BAR =  !IN6 ; IN6BAR =  !IN6 ;let  IN7BAR =  !IN7 ; IN7BAR =  !IN7 ;let  IN8BAR =  !IN8 ; IN8BAR =  !IN8 ;let  IN9BAR =  !IN9 ; IN9BAR =  !IN9 ; D      =  IN8 & IN9 ; C      =  !(D & (IN4BAR | IN5BAR | IN6BAR | IN7BAR)) ; B      =  !(D & ((IN2BAR & IN4 & IN5) |                       (IN3BAR & IN4 & IN5) | IN6BAR | IN7BAR)) ; A      =  !(IN9BAR | D & ((IN1BAR & IN2 & IN4 & IN6) |                       (IN3BAR & IN4 & IN6) | (IN5BAR & IN6) | IN7BAR)) ;');
		Connect(this.ULS147LOG.pins.IN1_I, this.pins.IN1_I);
		Connect(this.ULS147LOG.pins.IN2_I, this.pins.IN2_I);
		Connect(this.ULS147LOG.pins.IN3_I, this.pins.IN3_I);
		Connect(this.ULS147LOG.pins.IN4_I, this.pins.IN4_I);
		Connect(this.ULS147LOG.pins.IN5_I, this.pins.IN5_I);
		Connect(this.ULS147LOG.pins.IN6_I, this.pins.IN6_I);
		Connect(this.ULS147LOG.pins.IN7_I, this.pins.IN7_I);
		Connect(this.ULS147LOG.pins.IN8_I, this.pins.IN8_I);
		Connect(this.ULS147LOG.pins.IN9_I, this.pins.IN9_I);
		let IN1 = new Pin();
		Connect(this.ULS147LOG.pins.IN1, IN1);
		let IN2 = new Pin();
		Connect(this.ULS147LOG.pins.IN2, IN2);
		let IN3 = new Pin();
		Connect(this.ULS147LOG.pins.IN3, IN3);
		let IN4 = new Pin();
		Connect(this.ULS147LOG.pins.IN4, IN4);
		let IN5 = new Pin();
		Connect(this.ULS147LOG.pins.IN5, IN5);
		let IN6 = new Pin();
		Connect(this.ULS147LOG.pins.IN6, IN6);
		let IN7 = new Pin();
		Connect(this.ULS147LOG.pins.IN7, IN7);
		let IN8 = new Pin();
		Connect(this.ULS147LOG.pins.IN8, IN8);
		let IN9 = new Pin();
		Connect(this.ULS147LOG.pins.IN9, IN9);
		let A = new Pin();
		Connect(this.ULS147LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS147LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS147LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS147LOG.pins.D, D);
		Connect(A, this.pins.A_O);
		Connect(B, this.pins.B_O);
		Connect(C, this.pins.C_O);
		Connect(D, this.pins.D_O);
	}
}
/**
 * PRIORITY ENCODER 8-3 LINE
 */
class SN74LS148 extends Component {
	constructor() {
		super();
		this.pins = {
			IN0_I: new Pin(),
			IN1_I: new Pin(),
			IN2_I: new Pin(),
			IN3_I: new Pin(),
			IN4_I: new Pin(),
			IN5_I: new Pin(),
			IN6_I: new Pin(),
			IN7_I: new Pin(),
			EI_I: new Pin(),
			A0_O: new Pin(),
			A1_O: new Pin(),
			A2_O: new Pin(),
			GS_O: new Pin(),
			EO_O: new Pin(),
		}
		this.ULS148LOG = new logicexp(['IN0_I','IN1_I','IN2_I','IN3_I','IN4_I','IN5_I','IN6_I','IN7_I','EI_I'], ['IN0','IN1','IN2','IN3','IN4','IN5','IN6','IN7','EI','A0','A1','A2','GS','EO'], []).Logic(' IN0    =  IN0_I ; IN1    =  IN1_I ; IN2    =  IN2_I ; IN3    =  IN3_I ; IN4    =  IN4_I ; IN5    =  IN5_I ; IN6    =  IN6_I ; IN7    =  IN7_I ; EI     =  EI_I ;let  IN0BAR =  !IN0 ; IN0BAR =  !IN0 ;let  IN1BAR =  !IN1 ; IN1BAR =  !IN1 ;let  IN2BAR =  !IN2 ; IN2BAR =  !IN2 ;let  IN3BAR =  !IN3 ; IN3BAR =  !IN3 ;let  IN4BAR =  !IN4 ; IN4BAR =  !IN4 ;let  IN5BAR =  !IN5 ; IN5BAR =  !IN5 ;let  IN6BAR =  !IN6 ; IN6BAR =  !IN6 ;let  IN7BAR =  !IN7 ; IN7BAR =  !IN7 ;let  EIBAR  =  !EI ; EIBAR  =  !EI ; A0     =  !(EIBAR & ((IN1BAR & IN2 & IN4 & IN6) |                       (IN3BAR & IN4 & IN6) | (IN5BAR & IN6) | IN7BAR)) ; A1     =  !(EIBAR & ((IN2BAR & IN4 & IN5) |                       (IN3BAR & IN4 & IN5) | IN6BAR | IN7BAR)) ; A2     =  !(EIBAR & (IN4BAR | IN5BAR | IN6BAR | IN7BAR)) ; EO     =  !(IN0 & IN1 & IN2 & IN3 & IN4 & IN5 & IN6 & IN7 & EIBAR) ; GS     =  !(EO & EIBAR) ;');
		Connect(this.ULS148LOG.pins.IN0_I, this.pins.IN0_I);
		Connect(this.ULS148LOG.pins.IN1_I, this.pins.IN1_I);
		Connect(this.ULS148LOG.pins.IN2_I, this.pins.IN2_I);
		Connect(this.ULS148LOG.pins.IN3_I, this.pins.IN3_I);
		Connect(this.ULS148LOG.pins.IN4_I, this.pins.IN4_I);
		Connect(this.ULS148LOG.pins.IN5_I, this.pins.IN5_I);
		Connect(this.ULS148LOG.pins.IN6_I, this.pins.IN6_I);
		Connect(this.ULS148LOG.pins.IN7_I, this.pins.IN7_I);
		Connect(this.ULS148LOG.pins.EI_I, this.pins.EI_I);
		let IN0 = new Pin();
		Connect(this.ULS148LOG.pins.IN0, IN0);
		let IN1 = new Pin();
		Connect(this.ULS148LOG.pins.IN1, IN1);
		let IN2 = new Pin();
		Connect(this.ULS148LOG.pins.IN2, IN2);
		let IN3 = new Pin();
		Connect(this.ULS148LOG.pins.IN3, IN3);
		let IN4 = new Pin();
		Connect(this.ULS148LOG.pins.IN4, IN4);
		let IN5 = new Pin();
		Connect(this.ULS148LOG.pins.IN5, IN5);
		let IN6 = new Pin();
		Connect(this.ULS148LOG.pins.IN6, IN6);
		let IN7 = new Pin();
		Connect(this.ULS148LOG.pins.IN7, IN7);
		let EI = new Pin();
		Connect(this.ULS148LOG.pins.EI, EI);
		let A0 = new Pin();
		Connect(this.ULS148LOG.pins.A0, A0);
		let A1 = new Pin();
		Connect(this.ULS148LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS148LOG.pins.A2, A2);
		let GS = new Pin();
		Connect(this.ULS148LOG.pins.GS, GS);
		let EO = new Pin();
		Connect(this.ULS148LOG.pins.EO, EO);
		Connect(A0, this.pins.A0_O);
		Connect(A1, this.pins.A1_O);
		Connect(A2, this.pins.A2_O);
		Connect(GS, this.pins.GS_O);
		Connect(EO, this.pins.EO_O);
	}
}
/**
 * MULTIPLEXER_DATA SELECTOR 8-1 LINE
 */
class SN74LS151 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			D5_I: new Pin(),
			D6_I: new Pin(),
			D7_I: new Pin(),
			Y_O: new Pin(),
			W_O: new Pin(),
		}
		this.ULS151LOG = new logicexp(['GBAR_I','A_I','B_I','C_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I'], ['GBAR','A','B','C','D0','D1','D2','D3','D4','D5','D6','D7','W','Y'], []).Logic('   GBAR =  GBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D0 =  D0_I ;   D1 =  D1_I ;   D2 =  D2_I ;   D3 =  D3_I ;   D4 =  D4_I ;   D5 =  D5_I ;   D6 =  D6_I ;   D7 =  D7_I ;let    IA =  !A ;   IA =  !A ;let    IB =  !B ;   IB =  !B ;let    IC =  !C ;   IC =  !C ;let    IG =  !GBAR ;   IG =  !GBAR ;let    ID0 =  D0 & IA & IB & IC & IG ;   ID0 =  D0 & IA & IB & IC & IG ;let    ID1 =  D1 & A & IB & IC & IG ;   ID1 =  D1 & A & IB & IC & IG ;let    ID2 =  D2 & IA & B & IC & IG ;   ID2 =  D2 & IA & B & IC & IG ;let    ID3 =  D3 & A & B & IC & IG ;   ID3 =  D3 & A & B & IC & IG ;let    ID4 =  D4 & IA & IB & C & IG ;   ID4 =  D4 & IA & IB & C & IG ;let    ID5 =  D5 & A & IB & C & IG ;   ID5 =  D5 & A & IB & C & IG ;let    ID6 =  D6 & IA & B & C & IG ;   ID6 =  D6 & IA & B & C & IG ;let    ID7 =  D7 & A & B & C & IG ;   ID7 =  D7 & A & B & C & IG ;   W =  !(ID0 | ID1 | ID2 | ID3 | ID4 | ID5 | ID6 | ID7) ;   Y =  !W ;');
		Connect(this.ULS151LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS151LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS151LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS151LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS151LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.ULS151LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS151LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS151LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS151LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.ULS151LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.ULS151LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.ULS151LOG.pins.D7_I, this.pins.D7_I);
		let GBAR = new Pin();
		Connect(this.ULS151LOG.pins.GBAR, GBAR);
		let A = new Pin();
		Connect(this.ULS151LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS151LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS151LOG.pins.C, C);
		let D0 = new Pin();
		Connect(this.ULS151LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.ULS151LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS151LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS151LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS151LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.ULS151LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.ULS151LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.ULS151LOG.pins.D7, D7);
		let W = new Pin();
		Connect(this.ULS151LOG.pins.W, W);
		let Y = new Pin();
		Connect(this.ULS151LOG.pins.Y, Y);
		Connect(W, this.pins.W_O);
		Connect(Y, this.pins.Y_O);
	}
}
class SN54LS152 extends Component {
	constructor() {
		super();
		this.pins = {
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			D5_I: new Pin(),
			D6_I: new Pin(),
			D7_I: new Pin(),
			W_O: new Pin(),
		}
		this.ULS152LOG = new logicexp(['A_I','B_I','C_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I'], ['A','B','C','D0','D1','D2','D3','D4','D5','D6','D7','W'], []).Logic('   A =  A_I ;   B =  B_I ;   C =  C_I ;   D0 =  D0_I ;   D1 =  D1_I ;   D2 =  D2_I ;   D3 =  D3_I ;   D4 =  D4_I ;   D5 =  D5_I ;   D6 =  D6_I ;   D7 =  D7_I ;let    IA =  !A ;   IA =  !A ;let    IB =  !B ;   IB =  !B ;let    IC =  !C ;   IC =  !C ;let    ID0 =  D0 & IA & IB & IC ;   ID0 =  D0 & IA & IB & IC ;let    ID1 =  D1 & A & IB & IC ;   ID1 =  D1 & A & IB & IC ;let    ID2 =  D2 & IA & B & IC ;   ID2 =  D2 & IA & B & IC ;let    ID3 =  D3 & A & B & IC ;   ID3 =  D3 & A & B & IC ;let    ID4 =  D4 & IA & IB & C ;   ID4 =  D4 & IA & IB & C ;let    ID5 =  D5 & A & IB & C ;   ID5 =  D5 & A & IB & C ;let    ID6 =  D6 & IA & B & C ;   ID6 =  D6 & IA & B & C ;let    ID7 =  D7 & A & B & C ;   ID7 =  D7 & A & B & C ;   W =  !(ID0 | ID1 | ID2 | ID3 | ID4 | ID5 | ID6 | ID7) ;');
		Connect(this.ULS152LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS152LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS152LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS152LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.ULS152LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS152LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS152LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS152LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.ULS152LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.ULS152LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.ULS152LOG.pins.D7_I, this.pins.D7_I);
		let A = new Pin();
		Connect(this.ULS152LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS152LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS152LOG.pins.C, C);
		let D0 = new Pin();
		Connect(this.ULS152LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.ULS152LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS152LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS152LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS152LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.ULS152LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.ULS152LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.ULS152LOG.pins.D7, D7);
		let W = new Pin();
		Connect(this.ULS152LOG.pins.W, W);
		Connect(W, this.pins.W_O);
	}
}
/**
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74LS153 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			_1C0_I: new Pin(),
			_1C1_I: new Pin(),
			_1C2_I: new Pin(),
			_1C3_I: new Pin(),
			_2C0_I: new Pin(),
			_2C1_I: new Pin(),
			_2C2_I: new Pin(),
			_2C3_I: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
		}
		this.ULS153LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','_1C0_I','_1C1_I','_1C2_I','_1C3_I','_2C0_I','_2C1_I','_2C2_I','_2C3_I'], ['G1BAR','G2BAR','A','B','_1C0','_1C1','_1C2','_1C3','_2C0','_2C1','_2C2','_2C3','Y1','Y2'], []).Logic('   G1BAR =  G1BAR_I ;   G2BAR =  G2BAR_I ;   A =  A_I ;   B =  B_I ;   _1C0 =  _1C0_I ;   _1C1 =  _1C1_I ;   _1C2 =  _1C2_I ;   _1C3 =  _1C3_I ;   _2C0 =  _2C0_I ;   _2C1 =  _2C1_I ;   _2C2 =  _2C2_I ;   _2C3 =  _2C3_I ;let    G1 =  !G1BAR ;   G1 =  !G1BAR ;let    G2 =  !G2BAR ;   G2 =  !G2BAR ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    I0 =  G1 & BBAR & ABAR & _1C0 ;   I0 =  G1 & BBAR & ABAR & _1C0 ;let    I1 =  G1 & BBAR & A    & _1C1 ;   I1 =  G1 & BBAR & A    & _1C1 ;let    I2 =  G1 & B    & ABAR & _1C2 ;   I2 =  G1 & B    & ABAR & _1C2 ;let    I3 =  G1 & B    & A    & _1C3 ;   I3 =  G1 & B    & A    & _1C3 ;let    I4 =  G2 & BBAR & ABAR & _2C0 ;   I4 =  G2 & BBAR & ABAR & _2C0 ;let    I5 =  G2 & BBAR & A    & _2C1 ;   I5 =  G2 & BBAR & A    & _2C1 ;let    I6 =  G2 & B    & ABAR & _2C2 ;   I6 =  G2 & B    & ABAR & _2C2 ;let    I7 =  G2 & B    & A    & _2C3 ;   I7 =  G2 & B    & A    & _2C3 ;   Y1 =  I0 | I1 | I2 | I3 ;   Y2 =  I4 | I5 | I6 | I7 ;');
		Connect(this.ULS153LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS153LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS153LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS153LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS153LOG.pins._1C0_I, this.pins._1C0_I);
		Connect(this.ULS153LOG.pins._1C1_I, this.pins._1C1_I);
		Connect(this.ULS153LOG.pins._1C2_I, this.pins._1C2_I);
		Connect(this.ULS153LOG.pins._1C3_I, this.pins._1C3_I);
		Connect(this.ULS153LOG.pins._2C0_I, this.pins._2C0_I);
		Connect(this.ULS153LOG.pins._2C1_I, this.pins._2C1_I);
		Connect(this.ULS153LOG.pins._2C2_I, this.pins._2C2_I);
		Connect(this.ULS153LOG.pins._2C3_I, this.pins._2C3_I);
		let G1BAR = new Pin();
		Connect(this.ULS153LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS153LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.ULS153LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS153LOG.pins.B, B);
		let _1C0 = new Pin();
		Connect(this.ULS153LOG.pins._1C0, _1C0);
		let _1C1 = new Pin();
		Connect(this.ULS153LOG.pins._1C1, _1C1);
		let _1C2 = new Pin();
		Connect(this.ULS153LOG.pins._1C2, _1C2);
		let _1C3 = new Pin();
		Connect(this.ULS153LOG.pins._1C3, _1C3);
		let _2C0 = new Pin();
		Connect(this.ULS153LOG.pins._2C0, _2C0);
		let _2C1 = new Pin();
		Connect(this.ULS153LOG.pins._2C1, _2C1);
		let _2C2 = new Pin();
		Connect(this.ULS153LOG.pins._2C2, _2C2);
		let _2C3 = new Pin();
		Connect(this.ULS153LOG.pins._2C3, _2C3);
		let Y1 = new Pin();
		Connect(this.ULS153LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS153LOG.pins.Y2, Y2);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
	}
}
/**
 * DECODER_DEMULTIPLEXER 4-16 LINE
 */
class SN74LS154 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			Y0_O: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
			Y5_O: new Pin(),
			Y6_O: new Pin(),
			Y7_O: new Pin(),
			Y8_O: new Pin(),
			Y9_O: new Pin(),
			Y10_O: new Pin(),
			Y11_O: new Pin(),
			Y12_O: new Pin(),
			Y13_O: new Pin(),
			Y14_O: new Pin(),
			Y15_O: new Pin(),
		}
		this.ULS154LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','C_I','D_I'], ['ENABLE','A','B','C','D','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9','Y10','Y11','Y12','Y13','Y14','Y15'], []).Logic('let    G1BAR  =  G1BAR_I ;   G1BAR  =  G1BAR_I ;let    G2BAR  =  G2BAR_I ;   G2BAR  =  G2BAR_I ;   ENABLE =  !(G1BAR | G2BAR) ;   A      =  A_I ;   B      =  B_I ;   C      =  C_I ;   D      =  D_I ;let    ABAR   =  !A ;   ABAR   =  !A ;let    BBAR   =  !B ;   BBAR   =  !B ;let    CBAR   =  !C ;   CBAR   =  !C ;let    DBAR   =  !D ;   DBAR   =  !D ;   Y0     =  !(ENABLE & DBAR & CBAR & BBAR & ABAR) ;   Y1     =  !(ENABLE & DBAR & CBAR & BBAR & A   ) ;   Y2     =  !(ENABLE & DBAR & CBAR & B    & ABAR) ;   Y3     =  !(ENABLE & DBAR & CBAR & B    & A   ) ;   Y4     =  !(ENABLE & DBAR & C    & BBAR & ABAR) ;   Y5     =  !(ENABLE & DBAR & C    & BBAR & A   ) ;   Y6     =  !(ENABLE & DBAR & C    & B    & ABAR) ;   Y7     =  !(ENABLE & DBAR & C    & B    & A   ) ;   Y8     =  !(ENABLE & D    & CBAR & BBAR & ABAR) ;   Y9     =  !(ENABLE & D    & CBAR & BBAR & A   ) ;   Y10    =  !(ENABLE & D    & CBAR & B    & ABAR) ;   Y11    =  !(ENABLE & D    & CBAR & B    & A   ) ;   Y12    =  !(ENABLE & D    & C    & BBAR & ABAR) ;   Y13    =  !(ENABLE & D    & C    & BBAR & A   ) ;   Y14    =  !(ENABLE & D    & C    & B    & ABAR) ;   Y15    =  !(ENABLE & D    & C    & B    & A   ) ;');
		Connect(this.ULS154LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS154LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS154LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS154LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS154LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS154LOG.pins.D_I, this.pins.D_I);
		let ENABLE = new Pin();
		Connect(this.ULS154LOG.pins.ENABLE, ENABLE);
		let A = new Pin();
		Connect(this.ULS154LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS154LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS154LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS154LOG.pins.D, D);
		let Y0 = new Pin();
		Connect(this.ULS154LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.ULS154LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS154LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS154LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS154LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.ULS154LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.ULS154LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.ULS154LOG.pins.Y7, Y7);
		let Y8 = new Pin();
		Connect(this.ULS154LOG.pins.Y8, Y8);
		let Y9 = new Pin();
		Connect(this.ULS154LOG.pins.Y9, Y9);
		let Y10 = new Pin();
		Connect(this.ULS154LOG.pins.Y10, Y10);
		let Y11 = new Pin();
		Connect(this.ULS154LOG.pins.Y11, Y11);
		let Y12 = new Pin();
		Connect(this.ULS154LOG.pins.Y12, Y12);
		let Y13 = new Pin();
		Connect(this.ULS154LOG.pins.Y13, Y13);
		let Y14 = new Pin();
		Connect(this.ULS154LOG.pins.Y14, Y14);
		let Y15 = new Pin();
		Connect(this.ULS154LOG.pins.Y15, Y15);
		Connect(Y0, this.pins.Y0_O);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
		Connect(Y5, this.pins.Y5_O);
		Connect(Y6, this.pins.Y6_O);
		Connect(Y7, this.pins.Y7_O);
		Connect(Y8, this.pins.Y8_O);
		Connect(Y9, this.pins.Y9_O);
		Connect(Y10, this.pins.Y10_O);
		Connect(Y11, this.pins.Y11_O);
		Connect(Y12, this.pins.Y12_O);
		Connect(Y13, this.pins.Y13_O);
		Connect(Y14, this.pins.Y14_O);
		Connect(Y15, this.pins.Y15_O);
	}
}
/**
 * DECODER_DEMULTIPLEXER 2-4 LINE
 */
class SN74LS155A extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C1_I: new Pin(),
			C2BAR_I: new Pin(),
			_1Y0_O: new Pin(),
			_1Y1_O: new Pin(),
			_1Y2_O: new Pin(),
			_1Y3_O: new Pin(),
			_2Y0_O: new Pin(),
			_2Y1_O: new Pin(),
			_2Y2_O: new Pin(),
			_2Y3_O: new Pin(),
		}
		this.ULS155ALOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','C1_I','C2BAR_I'], ['G1BAR','A','B','C1','ENABLE1','ENABLE2','_1Y0','_1Y1','_1Y2','_1Y3','_2Y0','_2Y1','_2Y2','_2Y3'], []).Logic('   G1BAR   =  G1BAR_I ;let    G2BAR   =  G2BAR_I ;   G2BAR   =  G2BAR_I ;   A       =  A_I ;   B       =  B_I ;   C1      =  C1_I ;let    C2BAR   =  C2BAR_I ;   C2BAR   =  C2BAR_I ;let    ABAR    =  !A ;   ABAR    =  !A ;let    BBAR    =  !B ;   BBAR    =  !B ;   ENABLE1 =  !G1BAR &  C1 ;   ENABLE2 =  !G2BAR & !C2BAR ;   _1Y0     =  !(ENABLE1 & BBAR & ABAR) ;   _1Y1     =  !(ENABLE1 & BBAR & A   ) ;   _1Y2     =  !(ENABLE1 & B    & ABAR) ;   _1Y3     =  !(ENABLE1 & B    & A   ) ;   _2Y0     =  !(ENABLE2 & BBAR & ABAR) ;   _2Y1     =  !(ENABLE2 & BBAR & A   ) ;   _2Y2     =  !(ENABLE2 & B    & ABAR) ;   _2Y3     =  !(ENABLE2 & B    & A   ) ;');
		Connect(this.ULS155ALOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS155ALOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS155ALOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS155ALOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS155ALOG.pins.C1_I, this.pins.C1_I);
		Connect(this.ULS155ALOG.pins.C2BAR_I, this.pins.C2BAR_I);
		let G1BAR = new Pin();
		Connect(this.ULS155ALOG.pins.G1BAR, G1BAR);
		let A = new Pin();
		Connect(this.ULS155ALOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS155ALOG.pins.B, B);
		let C1 = new Pin();
		Connect(this.ULS155ALOG.pins.C1, C1);
		let ENABLE1 = new Pin();
		Connect(this.ULS155ALOG.pins.ENABLE1, ENABLE1);
		let ENABLE2 = new Pin();
		Connect(this.ULS155ALOG.pins.ENABLE2, ENABLE2);
		let _1Y0 = new Pin();
		Connect(this.ULS155ALOG.pins._1Y0, _1Y0);
		let _1Y1 = new Pin();
		Connect(this.ULS155ALOG.pins._1Y1, _1Y1);
		let _1Y2 = new Pin();
		Connect(this.ULS155ALOG.pins._1Y2, _1Y2);
		let _1Y3 = new Pin();
		Connect(this.ULS155ALOG.pins._1Y3, _1Y3);
		let _2Y0 = new Pin();
		Connect(this.ULS155ALOG.pins._2Y0, _2Y0);
		let _2Y1 = new Pin();
		Connect(this.ULS155ALOG.pins._2Y1, _2Y1);
		let _2Y2 = new Pin();
		Connect(this.ULS155ALOG.pins._2Y2, _2Y2);
		let _2Y3 = new Pin();
		Connect(this.ULS155ALOG.pins._2Y3, _2Y3);
		Connect(_1Y0, this.pins._1Y0_O);
		Connect(_1Y1, this.pins._1Y1_O);
		Connect(_1Y2, this.pins._1Y2_O);
		Connect(_1Y3, this.pins._1Y3_O);
		Connect(_2Y0, this.pins._2Y0_O);
		Connect(_2Y1, this.pins._2Y1_O);
		Connect(_2Y2, this.pins._2Y2_O);
		Connect(_2Y3, this.pins._2Y3_O);
	}
}
/**
 * DECODER_DEMULTIPLEXER 2-4 LINE WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS156 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C1_I: new Pin(),
			C2BAR_I: new Pin(),
			_1Y0_O: new Pin(),
			_1Y1_O: new Pin(),
			_1Y2_O: new Pin(),
			_1Y3_O: new Pin(),
			_2Y0_O: new Pin(),
			_2Y1_O: new Pin(),
			_2Y2_O: new Pin(),
			_2Y3_O: new Pin(),
		}
		this.ULS156LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','C1_I','C2BAR_I'], ['G1BAR','A','B','C1','ENABLE1','ENABLE2','_1Y0','_1Y1','_1Y2','_1Y3','_2Y0','_2Y1','_2Y2','_2Y3'], []).Logic('   G1BAR   =  G1BAR_I ;let    G2BAR   =  G2BAR_I ;   G2BAR   =  G2BAR_I ;   A       =  A_I ;   B       =  B_I ;   C1      =  C1_I ;let    C2BAR   =  C2BAR_I ;   C2BAR   =  C2BAR_I ;let    ABAR    =  !A ;   ABAR    =  !A ;let    BBAR    =  !B ;   BBAR    =  !B ;   ENABLE1 =  !G1BAR &  C1 ;   ENABLE2 =  !G2BAR & !C2BAR ;   _1Y0     =  !(ENABLE1 & BBAR & ABAR) ;   _1Y1     =  !(ENABLE1 & BBAR & A   ) ;   _1Y2     =  !(ENABLE1 & B    & ABAR) ;   _1Y3     =  !(ENABLE1 & B    & A   ) ;   _2Y0     =  !(ENABLE2 & BBAR & ABAR) ;   _2Y1     =  !(ENABLE2 & BBAR & A   ) ;   _2Y2     =  !(ENABLE2 & B    & ABAR) ;   _2Y3     =  !(ENABLE2 & B    & A   ) ;');
		Connect(this.ULS156LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS156LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS156LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS156LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS156LOG.pins.C1_I, this.pins.C1_I);
		Connect(this.ULS156LOG.pins.C2BAR_I, this.pins.C2BAR_I);
		let G1BAR = new Pin();
		Connect(this.ULS156LOG.pins.G1BAR, G1BAR);
		let A = new Pin();
		Connect(this.ULS156LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS156LOG.pins.B, B);
		let C1 = new Pin();
		Connect(this.ULS156LOG.pins.C1, C1);
		let ENABLE1 = new Pin();
		Connect(this.ULS156LOG.pins.ENABLE1, ENABLE1);
		let ENABLE2 = new Pin();
		Connect(this.ULS156LOG.pins.ENABLE2, ENABLE2);
		let _1Y0 = new Pin();
		Connect(this.ULS156LOG.pins._1Y0, _1Y0);
		let _1Y1 = new Pin();
		Connect(this.ULS156LOG.pins._1Y1, _1Y1);
		let _1Y2 = new Pin();
		Connect(this.ULS156LOG.pins._1Y2, _1Y2);
		let _1Y3 = new Pin();
		Connect(this.ULS156LOG.pins._1Y3, _1Y3);
		let _2Y0 = new Pin();
		Connect(this.ULS156LOG.pins._2Y0, _2Y0);
		let _2Y1 = new Pin();
		Connect(this.ULS156LOG.pins._2Y1, _2Y1);
		let _2Y2 = new Pin();
		Connect(this.ULS156LOG.pins._2Y2, _2Y2);
		let _2Y3 = new Pin();
		Connect(this.ULS156LOG.pins._2Y3, _2Y3);
		Connect(_1Y0, this.pins._1Y0_O);
		Connect(_1Y1, this.pins._1Y1_O);
		Connect(_1Y2, this.pins._1Y2_O);
		Connect(_1Y3, this.pins._1Y3_O);
		Connect(_2Y0, this.pins._2Y0_O);
		Connect(_2Y1, this.pins._2Y1_O);
		Connect(_2Y2, this.pins._2Y2_O);
		Connect(_2Y3, this.pins._2Y3_O);
	}
}
/**
 * QUADRUPLE 2-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74LS157 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			_1A_I: new Pin(),
			_1B_I: new Pin(),
			_2A_I: new Pin(),
			_2B_I: new Pin(),
			_3A_I: new Pin(),
			_3B_I: new Pin(),
			_4A_I: new Pin(),
			_4B_I: new Pin(),
			SEL_I: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
		}
		this.ULS157LOG = new logicexp(['GBAR_I','_1A_I','_1B_I','_2A_I','_2B_I','_3A_I','_3B_I','_4A_I','_4B_I','SEL_I'], ['GBAR','_1A','_1B','_2A','_2B','_3A','_3B','_4A','_4B','SEL','Y1','Y2','Y3','Y4'], []).Logic('   GBAR =  GBAR_I ;   _1A =  _1A_I ;   _1B =  _1B_I ;   _2A =  _2A_I ;   _2B =  _2B_I ;   _3A =  _3A_I ;   _3B =  _3B_I ;   _4A =  _4A_I ;   _4B =  _4B_I ;   SEL =  SEL_I ;let    SEL1 =  !GBAR & !SEL ;   SEL1 =  !GBAR & !SEL ;let    SEL2 =  !GBAR &  SEL ;   SEL2 =  !GBAR &  SEL ;   Y1 =  (_1A & SEL1) | (_1B & SEL2) ;   Y2 =  (_2A & SEL1) | (_2B & SEL2) ;   Y3 =  (_3A & SEL1) | (_3B & SEL2) ;   Y4 =  (_4A & SEL1) | (_4B & SEL2) ;');
		Connect(this.ULS157LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS157LOG.pins._1A_I, this.pins._1A_I);
		Connect(this.ULS157LOG.pins._1B_I, this.pins._1B_I);
		Connect(this.ULS157LOG.pins._2A_I, this.pins._2A_I);
		Connect(this.ULS157LOG.pins._2B_I, this.pins._2B_I);
		Connect(this.ULS157LOG.pins._3A_I, this.pins._3A_I);
		Connect(this.ULS157LOG.pins._3B_I, this.pins._3B_I);
		Connect(this.ULS157LOG.pins._4A_I, this.pins._4A_I);
		Connect(this.ULS157LOG.pins._4B_I, this.pins._4B_I);
		Connect(this.ULS157LOG.pins.SEL_I, this.pins.SEL_I);
		let GBAR = new Pin();
		Connect(this.ULS157LOG.pins.GBAR, GBAR);
		let _1A = new Pin();
		Connect(this.ULS157LOG.pins._1A, _1A);
		let _1B = new Pin();
		Connect(this.ULS157LOG.pins._1B, _1B);
		let _2A = new Pin();
		Connect(this.ULS157LOG.pins._2A, _2A);
		let _2B = new Pin();
		Connect(this.ULS157LOG.pins._2B, _2B);
		let _3A = new Pin();
		Connect(this.ULS157LOG.pins._3A, _3A);
		let _3B = new Pin();
		Connect(this.ULS157LOG.pins._3B, _3B);
		let _4A = new Pin();
		Connect(this.ULS157LOG.pins._4A, _4A);
		let _4B = new Pin();
		Connect(this.ULS157LOG.pins._4B, _4B);
		let SEL = new Pin();
		Connect(this.ULS157LOG.pins.SEL, SEL);
		let Y1 = new Pin();
		Connect(this.ULS157LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS157LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS157LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS157LOG.pins.Y4, Y4);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
	}
}
/**
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74LS158 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			_1A_I: new Pin(),
			_1B_I: new Pin(),
			_2A_I: new Pin(),
			_2B_I: new Pin(),
			_3A_I: new Pin(),
			_3B_I: new Pin(),
			_4A_I: new Pin(),
			_4B_I: new Pin(),
			SEL_I: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
		}
		this.ULS158LOG = new logicexp(['GBAR_I','_1A_I','_1B_I','_2A_I','_2B_I','_3A_I','_3B_I','_4A_I','_4B_I','SEL_I'], ['GBAR','_1A','_1B','_2A','_2B','_3A','_3B','_4A','_4B','SEL','Y1','Y2','Y3','Y4'], []).Logic('   GBAR =  GBAR_I ;   _1A =  _1A_I ;   _1B =  _1B_I ;   _2A =  _2A_I ;   _2B =  _2B_I ;   _3A =  _3A_I ;   _3B =  _3B_I ;   _4A =  _4A_I ;   _4B =  _4B_I ;   SEL =  SEL_I ;let    SEL1 =  !GBAR & !SEL ;   SEL1 =  !GBAR & !SEL ;let    SEL2 =  !GBAR &  SEL ;   SEL2 =  !GBAR &  SEL ;   Y1 =  !((_1A & SEL1) | (_1B & SEL2)) ;   Y2 =  !((_2A & SEL1) | (_2B & SEL2)) ;   Y3 =  !((_3A & SEL1) | (_3B & SEL2)) ;   Y4 =  !((_4A & SEL1) | (_4B & SEL2)) ;');
		Connect(this.ULS158LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS158LOG.pins._1A_I, this.pins._1A_I);
		Connect(this.ULS158LOG.pins._1B_I, this.pins._1B_I);
		Connect(this.ULS158LOG.pins._2A_I, this.pins._2A_I);
		Connect(this.ULS158LOG.pins._2B_I, this.pins._2B_I);
		Connect(this.ULS158LOG.pins._3A_I, this.pins._3A_I);
		Connect(this.ULS158LOG.pins._3B_I, this.pins._3B_I);
		Connect(this.ULS158LOG.pins._4A_I, this.pins._4A_I);
		Connect(this.ULS158LOG.pins._4B_I, this.pins._4B_I);
		Connect(this.ULS158LOG.pins.SEL_I, this.pins.SEL_I);
		let GBAR = new Pin();
		Connect(this.ULS158LOG.pins.GBAR, GBAR);
		let _1A = new Pin();
		Connect(this.ULS158LOG.pins._1A, _1A);
		let _1B = new Pin();
		Connect(this.ULS158LOG.pins._1B, _1B);
		let _2A = new Pin();
		Connect(this.ULS158LOG.pins._2A, _2A);
		let _2B = new Pin();
		Connect(this.ULS158LOG.pins._2B, _2B);
		let _3A = new Pin();
		Connect(this.ULS158LOG.pins._3A, _3A);
		let _3B = new Pin();
		Connect(this.ULS158LOG.pins._3B, _3B);
		let _4A = new Pin();
		Connect(this.ULS158LOG.pins._4A, _4A);
		let _4B = new Pin();
		Connect(this.ULS158LOG.pins._4B, _4B);
		let SEL = new Pin();
		Connect(this.ULS158LOG.pins.SEL, SEL);
		let Y1 = new Pin();
		Connect(this.ULS158LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS158LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS158LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS158LOG.pins.Y4, Y4);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
	}
}
/**
 * Synchronous 4-bit Decade Counters with asynchronous clear
 */
class SN74LS160A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			ENP_I: new Pin(),
			ENT_I: new Pin(),
			CLRBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCO_O: new Pin(),
		}
		this.ULS160ALOG = new logicexp(['CLK_I','ENP_I','ENT_I','CLRBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD'], ['CLK','ENP','ENT','CLRBAR','LOADBAR','A','B','C','D','RCO','DA','DB','DC','DD','EN'], []).Logic('   CLK =  CLK_I ;                        ENP =  ENP_I ;   ENT =  ENT_I ;   CLRBAR =  CLRBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !LOADBAR ;   LOAD =  !LOADBAR ;                  EN =  ENP & ENT & LOADBAR ;let    QAB =  !QA ;   QAB =  !QA ;let    QBB =  !QB ;   QBB =  !QB ;let    QCB =  !QC ;   QCB =  !QC ;let    QDB =  !QD ;   QDB =  !QD ;   DA =  (!EN & LOADBAR & QA) | (EN & QAB) | (LOAD & A) ;   DB =  (QB & !(QA & EN) & LOADBAR) | (QA & EN & QDB & QBB)     | (LOAD & B) ;   DC =  (QC & !(QB & QA & EN) & LOADBAR) | (QB & QA & EN & QCB)     | (LOAD & C) ;   DD =  (QD & !(QA & EN) & LOADBAR) | (QC & QB & QA & EN & QDB)     | (LOAD & D) ;   RCO =  ENT & QA & QD ;');
		Connect(this.ULS160ALOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS160ALOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.ULS160ALOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.ULS160ALOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS160ALOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS160ALOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS160ALOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS160ALOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS160ALOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS160ALOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS160ALOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS160ALOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS160ALOG.pins.QD, QD);
		let CLK = new Pin();
		Connect(this.ULS160ALOG.pins.CLK, CLK);
		let ENP = new Pin();
		Connect(this.ULS160ALOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.ULS160ALOG.pins.ENT, ENT);
		let CLRBAR = new Pin();
		Connect(this.ULS160ALOG.pins.CLRBAR, CLRBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS160ALOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS160ALOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS160ALOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS160ALOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS160ALOG.pins.D, D);
		let RCO = new Pin();
		Connect(this.ULS160ALOG.pins.RCO, RCO);
		let DA = new Pin();
		Connect(this.ULS160ALOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.ULS160ALOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.ULS160ALOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.ULS160ALOG.pins.DD, DD);
		let EN = new Pin();
		Connect(this.ULS160ALOG.pins.EN, EN);
		this.UDFF = new dff(4);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, CLRBAR);
		Connect(this.UDFF.pins.CLOCK, CLK);
		Connect(this.UDFF.pins.D0, DA);
		Connect(this.UDFF.pins.D1, DB);
		Connect(this.UDFF.pins.D2, DC);
		Connect(this.UDFF.pins.D3, DD);
		Connect(this.UDFF.pins.Q0, QA);
		Connect(this.UDFF.pins.Q1, QB);
		Connect(this.UDFF.pins.Q2, QC);
		Connect(this.UDFF.pins.Q3, QD);
		Connect(RCO, this.pins.RCO_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * Synchronous 4-bit Binary Counter with Direct Clear
 */
class SN74LS161A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			ENP_I: new Pin(),
			ENT_I: new Pin(),
			CLRBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCO_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CLRBAR);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		this.ULS161ALOG = new logicexp(['CLK_I','ENP_I','ENT_I','CLRBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','ENP','ENT','CLRBAR','LOADBAR','A','B','C','D','RCO','DA','DB','DC','DD','IEN'], []).Logic('   CLK =  CLK_I ;   ENP =  ENP_I ;   ENT =  ENT_I ;   CLRBAR =  CLRBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  LOADBAR & ENP & ENT ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;let    IA1 =  LOADBAR & QA & !IEN ;   IA1 =  LOADBAR & QA & !IEN ;let    IA2 =  IEN & QABAR ;   IA2 =  IEN & QABAR ;let    IB1 =  QB & !(QA & IEN) & LOADBAR ;   IB1 =  QB & !(QA & IEN) & LOADBAR ;let    IB2 =  QA & IEN & QBBAR ;   IB2 =  QA & IEN & QBBAR ;let    IC1 =  QC & !(QB & QA & IEN) & LOADBAR ;   IC1 =  QC & !(QB & QA & IEN) & LOADBAR ;let    IC2 =  QB & QA & IEN & QCBAR ;   IC2 =  QB & QA & IEN & QCBAR ;let    ID1 =  QD & !(QC & QB & QA & IEN) & LOADBAR ;   ID1 =  QD & !(QC & QB & QA & IEN) & LOADBAR ;let    ID2 =  QC & QB & QA & IEN & QDBAR ;   ID2 =  QC & QB & QA & IEN & QDBAR ;   RCO =  QD & QC & QB & QA & ENT ;   DA =  IA1 | IA2 | (ILD & A) ;   DB =  IB1 | IB2 | (ILD & B) ;   DC =  IC1 | IC2 | (ILD & C) ;   DD =  ID1 | ID2 | (ILD & D) ;');
		Connect(this.ULS161ALOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS161ALOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.ULS161ALOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.ULS161ALOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS161ALOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS161ALOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS161ALOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS161ALOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS161ALOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS161ALOG.pins.QA, QA);
		Connect(this.ULS161ALOG.pins.QB, QB);
		Connect(this.ULS161ALOG.pins.QC, QC);
		Connect(this.ULS161ALOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS161ALOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS161ALOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS161ALOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS161ALOG.pins.QDBAR, QDBAR);
		Connect(this.ULS161ALOG.pins.CLK, CLK);
		let ENP = new Pin();
		Connect(this.ULS161ALOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.ULS161ALOG.pins.ENT, ENT);
		Connect(this.ULS161ALOG.pins.CLRBAR, CLRBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS161ALOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS161ALOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS161ALOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS161ALOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS161ALOG.pins.D, D);
		let RCO = new Pin();
		Connect(this.ULS161ALOG.pins.RCO, RCO);
		Connect(this.ULS161ALOG.pins.DA, DA);
		Connect(this.ULS161ALOG.pins.DB, DB);
		Connect(this.ULS161ALOG.pins.DC, DC);
		Connect(this.ULS161ALOG.pins.DD, DD);
		let IEN = new Pin();
		Connect(this.ULS161ALOG.pins.IEN, IEN);
		Connect(RCO, this.pins.RCO_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * Synchronous 4-bit Decade Counters with synchronous clear
 */
class SN74LS162A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			ENP_I: new Pin(),
			ENT_I: new Pin(),
			CLRBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCO_O: new Pin(),
		}
		this.ULS162ALOG = new logicexp(['CLK_I','ENP_I','ENT_I','CLRBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD'], ['CLK','ENP','ENT','CLRBAR','LOADBAR','A','B','C','D','RCO','DA','DB','DC','DD','EN'], []).Logic('   CLK =  CLK_I ;                        ENP =  ENP_I ;   ENT =  ENT_I ;   CLRBAR =  CLRBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !LOADBAR & !CLRBAR ;   LOAD =  !LOADBAR & !CLRBAR ;let         ICLR =  !(!CLRBAR | LOAD) ;        ICLR =  !(!CLRBAR | LOAD) ;   EN =  ENP & ENT & LOADBAR & CLRBAR ;let    QAB =  !QA ;   QAB =  !QA ;let    QBB =  !QB ;   QBB =  !QB ;let    QCB =  !QC ;   QCB =  !QC ;let    QDB =  !QD ;   QDB =  !QD ;   DA =  (!EN & ICLR & QA) | (EN & QAB) | (LOAD & A) ;   DB =  (QB & !(QA & EN) & ICLR) | (QA & EN & QDB & QBB)     | (LOAD & B) ;   DC =  (QC & !(QB & QA & EN) & ICLR) | (QB & QA & EN & QCB)     | (LOAD & C) ;   DD =  (QD & !(QA & EN) & ICLR) | (QC & QB & QA & EN & QDB)     | (LOAD & D) ;   RCO =  ENT & QA & QD ;');
		Connect(this.ULS162ALOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS162ALOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.ULS162ALOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.ULS162ALOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS162ALOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS162ALOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS162ALOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS162ALOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS162ALOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS162ALOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS162ALOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS162ALOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS162ALOG.pins.QD, QD);
		let CLK = new Pin();
		Connect(this.ULS162ALOG.pins.CLK, CLK);
		let ENP = new Pin();
		Connect(this.ULS162ALOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.ULS162ALOG.pins.ENT, ENT);
		let CLRBAR = new Pin();
		Connect(this.ULS162ALOG.pins.CLRBAR, CLRBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS162ALOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS162ALOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS162ALOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS162ALOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS162ALOG.pins.D, D);
		let RCO = new Pin();
		Connect(this.ULS162ALOG.pins.RCO, RCO);
		let DA = new Pin();
		Connect(this.ULS162ALOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.ULS162ALOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.ULS162ALOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.ULS162ALOG.pins.DD, DD);
		let EN = new Pin();
		Connect(this.ULS162ALOG.pins.EN, EN);
		this.UDFF = new dff(4);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, CLK);
		Connect(this.UDFF.pins.D0, DA);
		Connect(this.UDFF.pins.D1, DB);
		Connect(this.UDFF.pins.D2, DC);
		Connect(this.UDFF.pins.D3, DD);
		Connect(this.UDFF.pins.Q0, QA);
		Connect(this.UDFF.pins.Q1, QB);
		Connect(this.UDFF.pins.Q2, QC);
		Connect(this.UDFF.pins.Q3, QD);
		Connect(RCO, this.pins.RCO_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * Synchronous 4-bit Binary Counter with Direct Clear
 */
class SN74LS163A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			ENP_I: new Pin(),
			ENT_I: new Pin(),
			CLRBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCO_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		this.ULS163ALOG = new logicexp(['CLK_I','ENP_I','ENT_I','CLRBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','ENP','ENT','CLRBAR','LOADBAR','A','B','C','D','RCO','DA','DB','DC','DD','IEN'], []).Logic('   CLK =  CLK_I ;   ENP =  ENP_I ;   ENT =  ENT_I ;   CLRBAR =  CLRBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  CLRBAR & LOADBAR & ENP & ENT ;let    ILD =  CLRBAR & !LOADBAR ;   ILD =  CLRBAR & !LOADBAR ;let    ILC =  !(!CLRBAR | ILD) ;   ILC =  !(!CLRBAR | ILD) ;let    IA1 =  ILC & QA & !IEN ;   IA1 =  ILC & QA & !IEN ;let    IA2 =  IEN & QABAR ;   IA2 =  IEN & QABAR ;let    IB1 =  QB & !(QA & IEN) & ILC ;   IB1 =  QB & !(QA & IEN) & ILC ;let    IB2 =  QA & IEN & QBBAR ;   IB2 =  QA & IEN & QBBAR ;let    IC1 =  QC & !(QB & QA & IEN) & ILC ;   IC1 =  QC & !(QB & QA & IEN) & ILC ;let    IC2 =  QB & QA & IEN & QCBAR ;   IC2 =  QB & QA & IEN & QCBAR ;let    IDB =  QD & !(QC & QB & QA & IEN) & ILC ;   IDB =  QD & !(QC & QB & QA & IEN) & ILC ;let    IDC =  QC & QB & QA & IEN & QDBAR ;   IDC =  QC & QB & QA & IEN & QDBAR ;   RCO =  QD & QC & QB & QA & ENT ;   DA =  IA1 | IA2 | (ILD & A) ;   DB =  IB1 | IB2 | (ILD & B) ;   DC =  IC1 | IC2 | (ILD & C) ;   DD =  IDB | IDC | (ILD & D) ;');
		Connect(this.ULS163ALOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS163ALOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.ULS163ALOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.ULS163ALOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS163ALOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS163ALOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS163ALOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS163ALOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS163ALOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS163ALOG.pins.QA, QA);
		Connect(this.ULS163ALOG.pins.QB, QB);
		Connect(this.ULS163ALOG.pins.QC, QC);
		Connect(this.ULS163ALOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS163ALOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS163ALOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS163ALOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS163ALOG.pins.QDBAR, QDBAR);
		Connect(this.ULS163ALOG.pins.CLK, CLK);
		let ENP = new Pin();
		Connect(this.ULS163ALOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.ULS163ALOG.pins.ENT, ENT);
		let CLRBAR = new Pin();
		Connect(this.ULS163ALOG.pins.CLRBAR, CLRBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS163ALOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS163ALOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS163ALOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS163ALOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS163ALOG.pins.D, D);
		let RCO = new Pin();
		Connect(this.ULS163ALOG.pins.RCO, RCO);
		Connect(this.ULS163ALOG.pins.DA, DA);
		Connect(this.ULS163ALOG.pins.DB, DB);
		Connect(this.ULS163ALOG.pins.DC, DC);
		Connect(this.ULS163ALOG.pins.DD, DD);
		let IEN = new Pin();
		Connect(this.ULS163ALOG.pins.IEN, IEN);
		Connect(RCO, this.pins.RCO_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
class SN74LS164 extends Component {
	constructor() {
		super();
		this.pins = {
			CLRBAR_I: new Pin(),
			CLK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
		}
		this.U1 = new bufa(4);
		this.U2 = new and(2);
		this.U3 = new dff(8);
		Connect(this.U3.pins.PRESET, _D_HI);
		let CLRBAR = new Pin();
		Connect(this.U3.pins.CLEAR, CLRBAR);
		let CLK = new Pin();
		Connect(this.U3.pins.CLOCK, CLK);
		let IN = new Pin();
		Connect(this.U3.pins.D0, IN);
		let QA = new Pin();
		Connect(this.U3.pins.D1, QA);
		let QB = new Pin();
		Connect(this.U3.pins.D2, QB);
		let QC = new Pin();
		Connect(this.U3.pins.D3, QC);
		let QD = new Pin();
		Connect(this.U3.pins.D4, QD);
		let QE = new Pin();
		Connect(this.U3.pins.D5, QE);
		let QF = new Pin();
		Connect(this.U3.pins.D6, QF);
		let QG = new Pin();
		Connect(this.U3.pins.D7, QG);
		Connect(this.U3.pins.Q0, QA);
		Connect(this.U3.pins.Q1, QB);
		Connect(this.U3.pins.Q2, QC);
		Connect(this.U3.pins.Q3, QD);
		Connect(this.U3.pins.Q4, QE);
		Connect(this.U3.pins.Q5, QF);
		Connect(this.U3.pins.Q6, QG);
		let QH = new Pin();
		Connect(this.U3.pins.Q7, QH);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
		Connect(QF, this.pins.QF_O);
		Connect(QG, this.pins.QG_O);
		Connect(QH, this.pins.QH_O);
	}
}
/**
 * PARALLEL-LOAD 8-BIT SHIFT REGISTERS
 */
class SN74LS165A extends Component {
	constructor() {
		super();
		this.pins = {
			SH_LDBAR_I: new Pin(),
			CLK_INH_I: new Pin(),
			CLK_I: new Pin(),
			SER_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			E_I: new Pin(),
			F_I: new Pin(),
			G_I: new Pin(),
			H_I: new Pin(),
			QH_O: new Pin(),
			QHBAR_O: new Pin(),
		}
		this.ULS165LOG = new logicexp(['SH_LDBAR_I','CLK_INH_I','CLK_I','SER_I','A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I'], ['SH_LDBAR','CLK_INH','CLK','SER','A','B','C','D','E','F','G','H','SA','SB','SC','SD','SE','SF','SG','SH','RA','RB','RC','RD','RE','RF','RG','RH','CK'], []).Logic('   SH_LDBAR =  SH_LDBAR_I ;   CLK_INH =  CLK_INH_I ;   CLK =  CLK_I ;   SER =  SER_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   E =  E_I ;   F =  F_I ;   G =  G_I ;   H =  H_I ;let    LOAD =  !SH_LDBAR ;   LOAD =  !SH_LDBAR ;   SA =  !(LOAD & A) ;   SB =  !(LOAD & B) ;   SC =  !(LOAD & C) ;   SD =  !(LOAD & D) ;   SE =  !(LOAD & E) ;   SF =  !(LOAD & F) ;   SG =  !(LOAD & G) ;   SH =  !(LOAD & H) ;   RA =  !(LOAD & SA) ;   RB =  !(LOAD & SB) ;   RC =  !(LOAD & SC) ;   RD =  !(LOAD & SD) ;   RE =  !(LOAD & SE) ;   RF =  !(LOAD & SF) ;   RG =  !(LOAD & SG) ;   RH =  !(LOAD & SH) ;   CK =  CLK_INH | CLK ;');
		Connect(this.ULS165LOG.pins.SH_LDBAR_I, this.pins.SH_LDBAR_I);
		Connect(this.ULS165LOG.pins.CLK_INH_I, this.pins.CLK_INH_I);
		Connect(this.ULS165LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS165LOG.pins.SER_I, this.pins.SER_I);
		Connect(this.ULS165LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS165LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS165LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS165LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS165LOG.pins.E_I, this.pins.E_I);
		Connect(this.ULS165LOG.pins.F_I, this.pins.F_I);
		Connect(this.ULS165LOG.pins.G_I, this.pins.G_I);
		Connect(this.ULS165LOG.pins.H_I, this.pins.H_I);
		let SH_LDBAR = new Pin();
		Connect(this.ULS165LOG.pins.SH_LDBAR, SH_LDBAR);
		let CLK_INH = new Pin();
		Connect(this.ULS165LOG.pins.CLK_INH, CLK_INH);
		let CLK = new Pin();
		Connect(this.ULS165LOG.pins.CLK, CLK);
		let SER = new Pin();
		Connect(this.ULS165LOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.ULS165LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS165LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS165LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS165LOG.pins.D, D);
		let E = new Pin();
		Connect(this.ULS165LOG.pins.E, E);
		let F = new Pin();
		Connect(this.ULS165LOG.pins.F, F);
		let G = new Pin();
		Connect(this.ULS165LOG.pins.G, G);
		let H = new Pin();
		Connect(this.ULS165LOG.pins.H, H);
		let SA = new Pin();
		Connect(this.ULS165LOG.pins.SA, SA);
		let SB = new Pin();
		Connect(this.ULS165LOG.pins.SB, SB);
		let SC = new Pin();
		Connect(this.ULS165LOG.pins.SC, SC);
		let SD = new Pin();
		Connect(this.ULS165LOG.pins.SD, SD);
		let SE = new Pin();
		Connect(this.ULS165LOG.pins.SE, SE);
		let SF = new Pin();
		Connect(this.ULS165LOG.pins.SF, SF);
		let SG = new Pin();
		Connect(this.ULS165LOG.pins.SG, SG);
		let SH = new Pin();
		Connect(this.ULS165LOG.pins.SH, SH);
		let RA = new Pin();
		Connect(this.ULS165LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.ULS165LOG.pins.RB, RB);
		let RC = new Pin();
		Connect(this.ULS165LOG.pins.RC, RC);
		let RD = new Pin();
		Connect(this.ULS165LOG.pins.RD, RD);
		let RE = new Pin();
		Connect(this.ULS165LOG.pins.RE, RE);
		let RF = new Pin();
		Connect(this.ULS165LOG.pins.RF, RF);
		let RG = new Pin();
		Connect(this.ULS165LOG.pins.RG, RG);
		let RH = new Pin();
		Connect(this.ULS165LOG.pins.RH, RH);
		let CK = new Pin();
		Connect(this.ULS165LOG.pins.CK, CK);
		this.U1 = new dff(1);
		Connect(this.U1.pins.PRESET, SA);
		Connect(this.U1.pins.CLEAR, RA);
		Connect(this.U1.pins.CLOCK, CK);
		Connect(this.U1.pins.D0, SER);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		this.U2 = new dff(1);
		Connect(this.U2.pins.PRESET, SB);
		Connect(this.U2.pins.CLEAR, RB);
		Connect(this.U2.pins.CLOCK, CK);
		Connect(this.U2.pins.D0, QA);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		this.U3 = new dff(1);
		Connect(this.U3.pins.PRESET, SC);
		Connect(this.U3.pins.CLEAR, RC);
		Connect(this.U3.pins.CLOCK, CK);
		Connect(this.U3.pins.D0, QB);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		this.U4 = new dff(1);
		Connect(this.U4.pins.PRESET, SD);
		Connect(this.U4.pins.CLEAR, RD);
		Connect(this.U4.pins.CLOCK, CK);
		Connect(this.U4.pins.D0, QC);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		this.U5 = new dff(1);
		Connect(this.U5.pins.PRESET, SE);
		Connect(this.U5.pins.CLEAR, RE);
		Connect(this.U5.pins.CLOCK, CK);
		Connect(this.U5.pins.D0, QD);
		let QE = new Pin();
		Connect(this.U5.pins.Q0, QE);
		this.U6 = new dff(1);
		Connect(this.U6.pins.PRESET, SF);
		Connect(this.U6.pins.CLEAR, RF);
		Connect(this.U6.pins.CLOCK, CK);
		Connect(this.U6.pins.D0, QE);
		let QF = new Pin();
		Connect(this.U6.pins.Q0, QF);
		this.U7 = new dff(1);
		Connect(this.U7.pins.PRESET, SG);
		Connect(this.U7.pins.CLEAR, RG);
		Connect(this.U7.pins.CLOCK, CK);
		Connect(this.U7.pins.D0, QF);
		let QG = new Pin();
		Connect(this.U7.pins.Q0, QG);
		this.U8 = new dff(1);
		Connect(this.U8.pins.PRESET, SH);
		Connect(this.U8.pins.CLEAR, RH);
		Connect(this.U8.pins.CLOCK, CK);
		Connect(this.U8.pins.D0, QG);
		let QH = new Pin();
		Connect(this.U8.pins.Q0, QH);
		Connect(QH, this.pins.QH_O);
		Connect(this.pins.QHBAR, this.pins.QHBAR_O);
	}
}
/**
 * PARALLEL LOAD 8-BIT SHIFT REGISTERS
 */
class SN74LS166A extends Component {
	constructor() {
		super();
		this.pins = {
			CLRBAR_I: new Pin(),
			SH_LDBAR_I: new Pin(),
			CLK_INH_I: new Pin(),
			CLK_I: new Pin(),
			SER_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			E_I: new Pin(),
			F_I: new Pin(),
			G_I: new Pin(),
			H_I: new Pin(),
			QH_O: new Pin(),
		}
		this.ULS166LOG = new logicexp(['CLRBAR_I','SH_LDBAR_I','CLK_INH_I','CLK_I','SER_I','A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I','QA','QB','QC','QD','QE','QF','QG'], ['CLRBAR','SH_LDBAR','CLK_INH','CLK','SER','A','B','C','D','E','F','G','H','DA','DB','DC','DD','DE','DF','DG','DH','CK'], []).Logic('   CLRBAR    =  CLRBAR_I ;   SH_LDBAR  =  SH_LDBAR_I ;   CLK_INH   =  CLK_INH_I ;   CLK       =  CLK_I ;   SER       =  SER_I ;   A         =  A_I ;   B         =  B_I ;   C         =  C_I ;   D         =  D_I ;   E         =  E_I ;   F         =  F_I ;   G         =  G_I ;   H         =  H_I ;let    LOAD =  !SH_LDBAR ;   LOAD =  !SH_LDBAR ;   DA =  (SH_LDBAR & SER) | (LOAD & A) ;   DB =  (SH_LDBAR & QA)  | (LOAD & B) ;   DC =  (SH_LDBAR & QB)  | (LOAD & C) ;   DD =  (SH_LDBAR & QC)  | (LOAD & D) ;   DE =  (SH_LDBAR & QD)  | (LOAD & E) ;   DF =  (SH_LDBAR & QE)  | (LOAD & F) ;   DG =  (SH_LDBAR & QF)  | (LOAD & G) ;   DH =  (SH_LDBAR & QG)  | (LOAD & H) ;   CK =  CLK | CLK_INH ;');
		Connect(this.ULS166LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS166LOG.pins.SH_LDBAR_I, this.pins.SH_LDBAR_I);
		Connect(this.ULS166LOG.pins.CLK_INH_I, this.pins.CLK_INH_I);
		Connect(this.ULS166LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS166LOG.pins.SER_I, this.pins.SER_I);
		Connect(this.ULS166LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS166LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS166LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS166LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS166LOG.pins.E_I, this.pins.E_I);
		Connect(this.ULS166LOG.pins.F_I, this.pins.F_I);
		Connect(this.ULS166LOG.pins.G_I, this.pins.G_I);
		Connect(this.ULS166LOG.pins.H_I, this.pins.H_I);
		let QA = new Pin();
		Connect(this.ULS166LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS166LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS166LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS166LOG.pins.QD, QD);
		let QE = new Pin();
		Connect(this.ULS166LOG.pins.QE, QE);
		let QF = new Pin();
		Connect(this.ULS166LOG.pins.QF, QF);
		let QG = new Pin();
		Connect(this.ULS166LOG.pins.QG, QG);
		let CLRBAR = new Pin();
		Connect(this.ULS166LOG.pins.CLRBAR, CLRBAR);
		let SH_LDBAR = new Pin();
		Connect(this.ULS166LOG.pins.SH_LDBAR, SH_LDBAR);
		let CLK_INH = new Pin();
		Connect(this.ULS166LOG.pins.CLK_INH, CLK_INH);
		let CLK = new Pin();
		Connect(this.ULS166LOG.pins.CLK, CLK);
		let SER = new Pin();
		Connect(this.ULS166LOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.ULS166LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS166LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS166LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS166LOG.pins.D, D);
		let E = new Pin();
		Connect(this.ULS166LOG.pins.E, E);
		let F = new Pin();
		Connect(this.ULS166LOG.pins.F, F);
		let G = new Pin();
		Connect(this.ULS166LOG.pins.G, G);
		let H = new Pin();
		Connect(this.ULS166LOG.pins.H, H);
		let DA = new Pin();
		Connect(this.ULS166LOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.ULS166LOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.ULS166LOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.ULS166LOG.pins.DD, DD);
		let DE = new Pin();
		Connect(this.ULS166LOG.pins.DE, DE);
		let DF = new Pin();
		Connect(this.ULS166LOG.pins.DF, DF);
		let DG = new Pin();
		Connect(this.ULS166LOG.pins.DG, DG);
		let DH = new Pin();
		Connect(this.ULS166LOG.pins.DH, DH);
		let CK = new Pin();
		Connect(this.ULS166LOG.pins.CK, CK);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, CLRBAR);
		Connect(this.U1.pins.CLOCK, CK);
		Connect(this.U1.pins.D0, DA);
		Connect(this.U1.pins.D1, DB);
		Connect(this.U1.pins.D2, DC);
		Connect(this.U1.pins.D3, DD);
		Connect(this.U1.pins.D4, DE);
		Connect(this.U1.pins.D5, DF);
		Connect(this.U1.pins.D6, DG);
		Connect(this.U1.pins.D7, DH);
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.Q1, QB);
		Connect(this.U1.pins.Q2, QC);
		Connect(this.U1.pins.Q3, QD);
		Connect(this.U1.pins.Q4, QE);
		Connect(this.U1.pins.Q5, QF);
		Connect(this.U1.pins.Q6, QG);
		let QH = new Pin();
		Connect(this.U1.pins.Q7, QH);
		Connect(QH, this.pins.QH_O);
	}
}
class SN74LS169B extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			U_DBAR_I: new Pin(),
			ENPBAR_I: new Pin(),
			ENTBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		this.ULS169BLOG = new logicexp(['CLK_I','U_DBAR_I','ENPBAR_I','ENTBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','U_DBAR','ENPBAR','ENTBAR','LOADBAR','A','B','C','D','DA','DB','DC','DD','RCOBAR','IEN'], []).Logic('   CLK =  CLK_I ;   U_DBAR =  U_DBAR_I ;   ENPBAR =  ENPBAR_I ;   ENTBAR =  ENTBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  !(ENPBAR | ENTBAR | !LOADBAR) ;let      UP =  U_DBAR ;     UP =  U_DBAR ;let    DN =  !U_DBAR ;   DN =  !U_DBAR ;let    IA1 =  QA & IEN ;   IA1 =  QA & IEN ;let    IA2 =  !IEN & LOADBAR & QABAR ;   IA2 =  !IEN & LOADBAR & QABAR ;let    IA3 =  (QA & UP) | (DN & QABAR) ;   IA3 =  (QA & UP) | (DN & QABAR) ;let    IB1 =  QB & IEN & IA3 ;   IB1 =  QB & IEN & IA3 ;let    IB2 =  !(IEN & IA3) & LOADBAR & QBBAR ;   IB2 =  !(IEN & IA3) & LOADBAR & QBBAR ;let    IB3 =  (QB & UP) | (DN & QBBAR) ;   IB3 =  (QB & UP) | (DN & QBBAR) ;let    IC1 =  QC & IEN & IA3 & IB3 ;   IC1 =  QC & IEN & IA3 & IB3 ;let    IC2 =  !(IEN & IA3 & IB3) & LOADBAR & QCBAR ;   IC2 =  !(IEN & IA3 & IB3) & LOADBAR & QCBAR ;let    IC3 =  (QC & UP) | (DN & QCBAR) ;   IC3 =  (QC & UP) | (DN & QCBAR) ;let    ID1 =  QD & IEN & IA3 & IB3 & IC3 ;   ID1 =  QD & IEN & IA3 & IB3 & IC3 ;let    ID2 =  !(IEN & IA3 & IB3 & IC3) & LOADBAR & QDBAR ;   ID2 =  !(IEN & IA3 & IB3 & IC3) & LOADBAR & QDBAR ;let    ID3 =  (QD & UP) | (DN & QDBAR) ;   ID3 =  (QD & UP) | (DN & QDBAR) ;   DA =  !(IA1 | IA2 | !(LOADBAR | A)) ;   DB =  !(IB1 | IB2 | !(LOADBAR | B)) ;   DC =  !(IC1 | IC2 | !(LOADBAR | C)) ;   DD =  !(ID1 | ID2 | !(LOADBAR | D)) ;   RCOBAR =  !(IA3 & IB3 & IC3 & ID3 & !ENTBAR) ;');
		Connect(this.ULS169BLOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS169BLOG.pins.U_DBAR_I, this.pins.U_DBAR_I);
		Connect(this.ULS169BLOG.pins.ENPBAR_I, this.pins.ENPBAR_I);
		Connect(this.ULS169BLOG.pins.ENTBAR_I, this.pins.ENTBAR_I);
		Connect(this.ULS169BLOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS169BLOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS169BLOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS169BLOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS169BLOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS169BLOG.pins.QA, QA);
		Connect(this.ULS169BLOG.pins.QB, QB);
		Connect(this.ULS169BLOG.pins.QC, QC);
		Connect(this.ULS169BLOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS169BLOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS169BLOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS169BLOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS169BLOG.pins.QDBAR, QDBAR);
		Connect(this.ULS169BLOG.pins.CLK, CLK);
		let U_DBAR = new Pin();
		Connect(this.ULS169BLOG.pins.U_DBAR, U_DBAR);
		let ENPBAR = new Pin();
		Connect(this.ULS169BLOG.pins.ENPBAR, ENPBAR);
		let ENTBAR = new Pin();
		Connect(this.ULS169BLOG.pins.ENTBAR, ENTBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS169BLOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS169BLOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS169BLOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS169BLOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS169BLOG.pins.D, D);
		Connect(this.ULS169BLOG.pins.DA, DA);
		Connect(this.ULS169BLOG.pins.DB, DB);
		Connect(this.ULS169BLOG.pins.DC, DC);
		Connect(this.ULS169BLOG.pins.DD, DD);
		let RCOBAR = new Pin();
		Connect(this.ULS169BLOG.pins.RCOBAR, RCOBAR);
		let IEN = new Pin();
		Connect(this.ULS169BLOG.pins.IEN, IEN);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
	}
}
/**
 * REGISTER FILES 4X4 WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS170 extends Component {
	constructor() {
		super();
		this.pins = {
			GWBAR_I: new Pin(),
			WA_I: new Pin(),
			WB_I: new Pin(),
			GRBAR_I: new Pin(),
			RA_I: new Pin(),
			RB_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			Q1_O: new Pin(),
			Q2_O: new Pin(),
			Q3_O: new Pin(),
			Q4_O: new Pin(),
		}
		this.UA = new dltch(4);
		this.UB = new dltch(4);
		this.UC = new dltch(4);
		this.UD = new dltch(4);
		this.ULS170LOG = new logicexp(['GWBAR_I','WA_I','WB_I','GRBAR_I','RA_I','RB_I','D1_I','D2_I','D3_I','D4_I','AQ1','AQ2','AQ3','AQ4','BQ1','BQ2','BQ3','BQ4','CQ1','CQ2','CQ3','CQ4','DQ1','DQ2','DQ3','DQ4'], ['GWBAR','WA','WB','GRBAR','RA','RB','D1','D2','D3','D4','GATEA','GATEB','GATEC','GATED','Q1','Q2','Q3','Q4'], []).Logic('   GWBAR   =  GWBAR_I ;   WA      =  WA_I ;   WB      =  WB_I ;   GRBAR   =  GRBAR_I ;   RA      =  RA_I ;   RB      =  RB_I ;   D1      =  D1_I ;   D2      =  D2_I ;   D3      =  D3_I ;   D4      =  D4_I ;let    ENABLE2 =  !(GWBAR | WB) ;   ENABLE2 =  !(GWBAR | WB) ;let    ENABLE1 =  !(GWBAR | ENABLE2) ;   ENABLE1 =  !(GWBAR | ENABLE2) ;   GATEA   =  ENABLE2 & !WA ;   GATEB   =  ENABLE2 &  WA ;   GATEC   =  ENABLE1 & !WA ;   GATED   =  ENABLE1 &  WA ;   Q1      =  (AQ1 & !RA & !RB) |               (BQ1 &  RA & !RB) |               (CQ1 & !RA &  RB) |               (DQ1 &  RA &  RB) |                GRBAR             ;   Q2      =  (AQ2 & !RA & !RB) |               (BQ2 &  RA & !RB) |               (CQ2 & !RA &  RB) |               (DQ2 &  RA &  RB) |                GRBAR             ;   Q3      =  (AQ3 & !RA & !RB) |               (BQ3 &  RA & !RB) |               (CQ3 & !RA &  RB) |               (DQ3 &  RA &  RB) |                GRBAR             ;   Q4      =  (AQ4 & !RA & !RB) |               (BQ4 &  RA & !RB) |               (CQ4 & !RA &  RB) |               (DQ4 &  RA &  RB) |                GRBAR             ;');
		Connect(this.ULS170LOG.pins.GWBAR_I, this.pins.GWBAR_I);
		Connect(this.ULS170LOG.pins.WA_I, this.pins.WA_I);
		Connect(this.ULS170LOG.pins.WB_I, this.pins.WB_I);
		Connect(this.ULS170LOG.pins.GRBAR_I, this.pins.GRBAR_I);
		Connect(this.ULS170LOG.pins.RA_I, this.pins.RA_I);
		Connect(this.ULS170LOG.pins.RB_I, this.pins.RB_I);
		Connect(this.ULS170LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS170LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS170LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS170LOG.pins.D4_I, this.pins.D4_I);
		let AQ1 = new Pin();
		Connect(this.ULS170LOG.pins.AQ1, AQ1);
		let AQ2 = new Pin();
		Connect(this.ULS170LOG.pins.AQ2, AQ2);
		let AQ3 = new Pin();
		Connect(this.ULS170LOG.pins.AQ3, AQ3);
		let AQ4 = new Pin();
		Connect(this.ULS170LOG.pins.AQ4, AQ4);
		let BQ1 = new Pin();
		Connect(this.ULS170LOG.pins.BQ1, BQ1);
		let BQ2 = new Pin();
		Connect(this.ULS170LOG.pins.BQ2, BQ2);
		let BQ3 = new Pin();
		Connect(this.ULS170LOG.pins.BQ3, BQ3);
		let BQ4 = new Pin();
		Connect(this.ULS170LOG.pins.BQ4, BQ4);
		let CQ1 = new Pin();
		Connect(this.ULS170LOG.pins.CQ1, CQ1);
		let CQ2 = new Pin();
		Connect(this.ULS170LOG.pins.CQ2, CQ2);
		let CQ3 = new Pin();
		Connect(this.ULS170LOG.pins.CQ3, CQ3);
		let CQ4 = new Pin();
		Connect(this.ULS170LOG.pins.CQ4, CQ4);
		let DQ1 = new Pin();
		Connect(this.ULS170LOG.pins.DQ1, DQ1);
		let DQ2 = new Pin();
		Connect(this.ULS170LOG.pins.DQ2, DQ2);
		let DQ3 = new Pin();
		Connect(this.ULS170LOG.pins.DQ3, DQ3);
		let DQ4 = new Pin();
		Connect(this.ULS170LOG.pins.DQ4, DQ4);
		let GWBAR = new Pin();
		Connect(this.ULS170LOG.pins.GWBAR, GWBAR);
		let WA = new Pin();
		Connect(this.ULS170LOG.pins.WA, WA);
		let WB = new Pin();
		Connect(this.ULS170LOG.pins.WB, WB);
		let GRBAR = new Pin();
		Connect(this.ULS170LOG.pins.GRBAR, GRBAR);
		let RA = new Pin();
		Connect(this.ULS170LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.ULS170LOG.pins.RB, RB);
		let D1 = new Pin();
		Connect(this.ULS170LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS170LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS170LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS170LOG.pins.D4, D4);
		let GATEA = new Pin();
		Connect(this.ULS170LOG.pins.GATEA, GATEA);
		let GATEB = new Pin();
		Connect(this.ULS170LOG.pins.GATEB, GATEB);
		let GATEC = new Pin();
		Connect(this.ULS170LOG.pins.GATEC, GATEC);
		let GATED = new Pin();
		Connect(this.ULS170LOG.pins.GATED, GATED);
		let Q1 = new Pin();
		Connect(this.ULS170LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.ULS170LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.ULS170LOG.pins.Q3, Q3);
		let Q4 = new Pin();
		Connect(this.ULS170LOG.pins.Q4, Q4);
		Connect(Q1, this.pins.Q1_O);
		Connect(Q2, this.pins.Q2_O);
		Connect(Q3, this.pins.Q3_O);
		Connect(Q4, this.pins.Q4_O);
	}
}
/**
 * QUADRUPLE D-TYPE FLIP-FLOPS WITH CLEAR
 */
class SN74LS171 extends Component {
	constructor() {
		super();
		this.pins = {
			CLRBAR: new Pin(),
			CLK: new Pin(),
			_1D: new Pin(),
			_2D: new Pin(),
			_3D: new Pin(),
			_4D: new Pin(),
			_1Q: new Pin(),
			_2Q: new Pin(),
			_3Q: new Pin(),
			_4Q: new Pin(),
			_1QBAR: new Pin(),
			_2QBAR: new Pin(),
			_3QBAR: new Pin(),
			_4QBAR: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, this.pins.CLRBAR);
		Connect(this.U1.pins.CLOCK, this.pins.CLK);
		Connect(this.U1.pins.D0, this.pins._1D);
		Connect(this.U1.pins.D1, this.pins._2D);
		Connect(this.U1.pins.D2, this.pins._3D);
		Connect(this.U1.pins.D3, this.pins._4D);
		Connect(this.U1.pins.Q0, this.pins._1Q);
		Connect(this.U1.pins.Q1, this.pins._2Q);
		Connect(this.U1.pins.Q2, this.pins._3Q);
		Connect(this.U1.pins.Q3, this.pins._4Q);
	}
}
/**
 * REGISTERS D-TYPE 4-BIT WITH 3-STATE OUTPUTS
 */
class SN74LS173A extends Component {
	constructor() {
		super();
		this.pins = {
			CLR_I: new Pin(),
			CLK_I: new Pin(),
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			M_I: new Pin(),
			N_I: new Pin(),
			_1D_I: new Pin(),
			_2D_I: new Pin(),
			_3D_I: new Pin(),
			_4D_I: new Pin(),
			_1Q_O: new Pin(),
			_2Q_O: new Pin(),
			_3Q_O: new Pin(),
			_4Q_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CLRBAR);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		let DFF1 = new Pin();
		Connect(this.U1.pins.D0, DFF1);
		let DFF2 = new Pin();
		Connect(this.U1.pins.D1, DFF2);
		let DFF3 = new Pin();
		Connect(this.U1.pins.D2, DFF3);
		let DFF4 = new Pin();
		Connect(this.U1.pins.D3, DFF4);
		let _1Q = new Pin();
		Connect(this.U1.pins.Q0, _1Q);
		let _2Q = new Pin();
		Connect(this.U1.pins.Q1, _2Q);
		let _3Q = new Pin();
		Connect(this.U1.pins.Q2, _3Q);
		let _4Q = new Pin();
		Connect(this.U1.pins.Q3, _4Q);
		this.ULS173ALOG = new logicexp(['CLR_I','CLK_I','G1BAR_I','G2BAR_I','M_I','N_I','_1D_I','_2D_I','_3D_I','_4D_I','_1Q','_2Q','_3Q','_4Q'], ['CLR','CLRBAR','CLK','DATEN','OE','_1D','_2D','_3D','_4D','DFF1','DFF2','DFF3','DFF4'], []).Logic('   CLR      =  CLR_I ;   CLRBAR   =  !CLR ;   CLK      =  CLK_I ;let    G1BAR    =  G1BAR_I ;   G1BAR    =  G1BAR_I ;let    G2BAR    =  G2BAR_I ;   G2BAR    =  G2BAR_I ;let    M        =  M_I ;   M        =  M_I ;let    N        =  N_I ;   N        =  N_I ;   _1D       =  _1D_I ;   _2D       =  _2D_I ;   _3D       =  _3D_I ;   _4D       =  _4D_I ;let    DATENBAR =  G1BAR | G2BAR ;   DATENBAR =  G1BAR | G2BAR ;   DATEN    =  !DATENBAR ;   OE       =  !(M | N) ;   DFF1     =  (_1D & DATEN) | (1Q & DATENBAR) ;   DFF2     =  (_2D & DATEN) | (2Q & DATENBAR) ;   DFF3     =  (_3D & DATEN) | (3Q & DATENBAR) ;   DFF4     =  (_4D & DATEN) | (4Q & DATENBAR) ;');
		Connect(this.ULS173ALOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.ULS173ALOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS173ALOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS173ALOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS173ALOG.pins.M_I, this.pins.M_I);
		Connect(this.ULS173ALOG.pins.N_I, this.pins.N_I);
		Connect(this.ULS173ALOG.pins._1D_I, this.pins._1D_I);
		Connect(this.ULS173ALOG.pins._2D_I, this.pins._2D_I);
		Connect(this.ULS173ALOG.pins._3D_I, this.pins._3D_I);
		Connect(this.ULS173ALOG.pins._4D_I, this.pins._4D_I);
		Connect(this.ULS173ALOG.pins._1Q, _1Q);
		Connect(this.ULS173ALOG.pins._2Q, _2Q);
		Connect(this.ULS173ALOG.pins._3Q, _3Q);
		Connect(this.ULS173ALOG.pins._4Q, _4Q);
		let CLR = new Pin();
		Connect(this.ULS173ALOG.pins.CLR, CLR);
		Connect(this.ULS173ALOG.pins.CLRBAR, CLRBAR);
		Connect(this.ULS173ALOG.pins.CLK, CLK);
		let DATEN = new Pin();
		Connect(this.ULS173ALOG.pins.DATEN, DATEN);
		let OE = new Pin();
		Connect(this.ULS173ALOG.pins.OE, OE);
		let _1D = new Pin();
		Connect(this.ULS173ALOG.pins._1D, _1D);
		let _2D = new Pin();
		Connect(this.ULS173ALOG.pins._2D, _2D);
		let _3D = new Pin();
		Connect(this.ULS173ALOG.pins._3D, _3D);
		let _4D = new Pin();
		Connect(this.ULS173ALOG.pins._4D, _4D);
		Connect(this.ULS173ALOG.pins.DFF1, DFF1);
		Connect(this.ULS173ALOG.pins.DFF2, DFF2);
		Connect(this.ULS173ALOG.pins.DFF3, DFF3);
		Connect(this.ULS173ALOG.pins.DFF4, DFF4);
		Connect(_1Q, this.pins._1Q_O);
		Connect(_2Q, this.pins._2Q_O);
		Connect(_3Q, this.pins._3Q_O);
		Connect(_4Q, this.pins._4Q_O);
	}
}
/**
 * HEX D-TYPE FLIP-FLOPS WITH CLEAR
 */
class SN74LS174 extends Component {
	constructor() {
		super();
		this.pins = {
			CLRBAR: new Pin(),
			CLK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			D3: new Pin(),
			D4: new Pin(),
			D5: new Pin(),
			D6: new Pin(),
			Q1: new Pin(),
			Q2: new Pin(),
			Q3: new Pin(),
			Q4: new Pin(),
			Q5: new Pin(),
			Q6: new Pin(),
		}
		this.UD = new dff(6);
		Connect(this.UD.pins.PRESET, _D_HI);
		Connect(this.UD.pins.CLEAR, this.pins.CLRBAR);
		Connect(this.UD.pins.CLOCK, this.pins.CLK);
		Connect(this.UD.pins.D0, this.pins.D1);
		Connect(this.UD.pins.D1, this.pins.D2);
		Connect(this.UD.pins.D2, this.pins.D3);
		Connect(this.UD.pins.D3, this.pins.D4);
		Connect(this.UD.pins.D4, this.pins.D5);
		Connect(this.UD.pins.D5, this.pins.D6);
		Connect(this.UD.pins.Q0, this.pins.Q1);
		Connect(this.UD.pins.Q1, this.pins.Q2);
		Connect(this.UD.pins.Q2, this.pins.Q3);
		Connect(this.UD.pins.Q3, this.pins.Q4);
		Connect(this.UD.pins.Q4, this.pins.Q5);
		Connect(this.UD.pins.Q5, this.pins.Q6);
	}
}
/**
 * QUADRUPLE D-TYPE FLIP-FLOPS WITH CLEAR
 */
class SN74LS175 extends Component {
	constructor() {
		super();
		this.pins = {
			CLRBAR: new Pin(),
			CLK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			D3: new Pin(),
			D4: new Pin(),
			Q1: new Pin(),
			Q2: new Pin(),
			Q3: new Pin(),
			Q4: new Pin(),
			Q1BAR: new Pin(),
			Q2BAR: new Pin(),
			Q3BAR: new Pin(),
			Q4BAR: new Pin(),
		}
		this.UD = new dff(4);
		Connect(this.UD.pins.PRESET, _D_HI);
		Connect(this.UD.pins.CLEAR, this.pins.CLRBAR);
		Connect(this.UD.pins.CLOCK, this.pins.CLK);
		Connect(this.UD.pins.D0, this.pins.D1);
		Connect(this.UD.pins.D1, this.pins.D2);
		Connect(this.UD.pins.D2, this.pins.D3);
		Connect(this.UD.pins.D3, this.pins.D4);
		Connect(this.UD.pins.Q0, this.pins.Q1);
		Connect(this.UD.pins.Q1, this.pins.Q2);
		Connect(this.UD.pins.Q2, this.pins.Q3);
		Connect(this.UD.pins.Q3, this.pins.Q4);
	}
}
/**
 * ALU _ FUNCTION GENERATOR
 */
class SN74LS181 extends Component {
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
		this.ULS181LOG = new logicexp(['A0BAR_I','A1BAR_I','A2BAR_I','A3BAR_I','B0BAR_I','B1BAR_I','B2BAR_I','B3BAR_I','S0_I','S1_I','S2_I','S3_I','M_I','CN_I'], ['A0BAR','A1BAR','A2BAR','A3BAR','B0BAR','B1BAR','B2BAR','B3BAR','S0','S1','S2','S3','M','CN','F0BAR','F1BAR','F2BAR','F3BAR','AEQUALB','PBAR','GBAR','CN_4'], []).Logic('   A0BAR   =  A0BAR_I ;   A1BAR   =  A1BAR_I ;   A2BAR   =  A2BAR_I ;   A3BAR   =  A3BAR_I ;   B0BAR   =  B0BAR_I ;   B1BAR   =  B1BAR_I ;   B2BAR   =  B2BAR_I ;   B3BAR   =  B3BAR_I ;   S0      =  S0_I ;   S1      =  S1_I ;   S2      =  S2_I ;   S3      =  S3_I ;   M       =  M_I ;   CN      =  CN_I ;let    TOP3    =  !( (A3BAR & B3BAR & S3) | (A3BAR & !B3BAR & S2) ) ;   TOP3    =  !( (A3BAR & B3BAR & S3) | (A3BAR & !B3BAR & S2) ) ;let    BOT3    =  !(        (!B3BAR & S1) |  A3BAR | (B3BAR & S0) ) ;   BOT3    =  !(        (!B3BAR & S1) |  A3BAR | (B3BAR & S0) ) ;let    TOP2    =  !( (A2BAR & B2BAR & S3) | (A2BAR & !B2BAR & S2) ) ;   TOP2    =  !( (A2BAR & B2BAR & S3) | (A2BAR & !B2BAR & S2) ) ;let    BOT2    =  !(        (!B2BAR & S1) |  A2BAR | (B2BAR & S0) ) ;   BOT2    =  !(        (!B2BAR & S1) |  A2BAR | (B2BAR & S0) ) ;let    TOP1    =  !( (A1BAR & B1BAR & S3) | (A1BAR & !B1BAR & S2) ) ;   TOP1    =  !( (A1BAR & B1BAR & S3) | (A1BAR & !B1BAR & S2) ) ;let    BOT1    =  !(        (!B1BAR & S1) |  A1BAR | (B1BAR & S0) ) ;   BOT1    =  !(        (!B1BAR & S1) |  A1BAR | (B1BAR & S0) ) ;let    TOP0    =  !( (A0BAR & B0BAR & S3) | (A0BAR & !B0BAR & S2) ) ;   TOP0    =  !( (A0BAR & B0BAR & S3) | (A0BAR & !B0BAR & S2) ) ;let    BOT0    =  !(        (!B0BAR & S1) |  A0BAR | (B0BAR & S0) ) ;   BOT0    =  !(        (!B0BAR & S1) |  A0BAR | (B0BAR & S0) ) ;let    MBAR    =  !M ;   MBAR    =  !M ;   F3BAR   =  (TOP3 ^ BOT3) ^ !( (  CN & MBAR & TOP2 & TOP1 & TOP0) |                                  (BOT0 & MBAR & TOP2 & TOP1) |                                  (BOT1 & MBAR & TOP2) |                                  (BOT2 & MBAR) ) ;   F2BAR   =  (TOP2 ^ BOT2) ^ !( (  CN & MBAR & TOP1 & TOP0) |                                  (BOT0 & MBAR & TOP1) |                                  (BOT1 & MBAR) ) ;   F1BAR   =  (TOP1 ^ BOT1) ^ !( (  CN & MBAR & TOP0) |                                  (BOT0 & MBAR) ) ;   F0BAR   =  (TOP0 ^ BOT0) ^ !(    CN & MBAR) ;   AEQUALB =  F3BAR & F2BAR & F1BAR & F0BAR ;   PBAR    =  !(         TOP3 & TOP2 & TOP1 & TOP0) ;   GBAR    =  !( (BOT0 & TOP3 & TOP2 & TOP1) |                  (BOT1 & TOP3 & TOP2) |                  (BOT2 & TOP3) |                    BOT3 ) ;   CN_4    =  !GBAR | (!PBAR & CN) ;');
		Connect(this.ULS181LOG.pins.A0BAR_I, this.pins.A0BAR_I);
		Connect(this.ULS181LOG.pins.A1BAR_I, this.pins.A1BAR_I);
		Connect(this.ULS181LOG.pins.A2BAR_I, this.pins.A2BAR_I);
		Connect(this.ULS181LOG.pins.A3BAR_I, this.pins.A3BAR_I);
		Connect(this.ULS181LOG.pins.B0BAR_I, this.pins.B0BAR_I);
		Connect(this.ULS181LOG.pins.B1BAR_I, this.pins.B1BAR_I);
		Connect(this.ULS181LOG.pins.B2BAR_I, this.pins.B2BAR_I);
		Connect(this.ULS181LOG.pins.B3BAR_I, this.pins.B3BAR_I);
		Connect(this.ULS181LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS181LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS181LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.ULS181LOG.pins.S3_I, this.pins.S3_I);
		Connect(this.ULS181LOG.pins.M_I, this.pins.M_I);
		Connect(this.ULS181LOG.pins.CN_I, this.pins.CN_I);
		let A0BAR = new Pin();
		Connect(this.ULS181LOG.pins.A0BAR, A0BAR);
		let A1BAR = new Pin();
		Connect(this.ULS181LOG.pins.A1BAR, A1BAR);
		let A2BAR = new Pin();
		Connect(this.ULS181LOG.pins.A2BAR, A2BAR);
		let A3BAR = new Pin();
		Connect(this.ULS181LOG.pins.A3BAR, A3BAR);
		let B0BAR = new Pin();
		Connect(this.ULS181LOG.pins.B0BAR, B0BAR);
		let B1BAR = new Pin();
		Connect(this.ULS181LOG.pins.B1BAR, B1BAR);
		let B2BAR = new Pin();
		Connect(this.ULS181LOG.pins.B2BAR, B2BAR);
		let B3BAR = new Pin();
		Connect(this.ULS181LOG.pins.B3BAR, B3BAR);
		let S0 = new Pin();
		Connect(this.ULS181LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS181LOG.pins.S1, S1);
		let S2 = new Pin();
		Connect(this.ULS181LOG.pins.S2, S2);
		let S3 = new Pin();
		Connect(this.ULS181LOG.pins.S3, S3);
		let M = new Pin();
		Connect(this.ULS181LOG.pins.M, M);
		let CN = new Pin();
		Connect(this.ULS181LOG.pins.CN, CN);
		let F0BAR = new Pin();
		Connect(this.ULS181LOG.pins.F0BAR, F0BAR);
		let F1BAR = new Pin();
		Connect(this.ULS181LOG.pins.F1BAR, F1BAR);
		let F2BAR = new Pin();
		Connect(this.ULS181LOG.pins.F2BAR, F2BAR);
		let F3BAR = new Pin();
		Connect(this.ULS181LOG.pins.F3BAR, F3BAR);
		let AEQUALB = new Pin();
		Connect(this.ULS181LOG.pins.AEQUALB, AEQUALB);
		let PBAR = new Pin();
		Connect(this.ULS181LOG.pins.PBAR, PBAR);
		let GBAR = new Pin();
		Connect(this.ULS181LOG.pins.GBAR, GBAR);
		let CN_4 = new Pin();
		Connect(this.ULS181LOG.pins.CN_4, CN_4);
		Connect(F0BAR, this.pins.F0BAR_O);
		Connect(F1BAR, this.pins.F1BAR_O);
		Connect(F2BAR, this.pins.F2BAR_O);
		Connect(F3BAR, this.pins.F3BAR_O);
		Connect(PBAR, this.pins.PBAR_O);
		Connect(GBAR, this.pins.GBAR_O);
		Connect(CN_4, this.pins.CN_4_O);
		Connect(AEQUALB, this.pins.AEQUALB_O);
	}
}
/**
 * DUAL CARRY-SAVE FULL ADDERS
 */
class SN74LS183 extends Component {
	constructor() {
		super();
		this.pins = {
			CN_I: new Pin(),
			B_I: new Pin(),
			A_I: new Pin(),
			SUM_O: new Pin(),
			CN_1_O: new Pin(),
		}
		this.ULS183LOG = new logicexp(['CN_I','B_I','A_I'], ['CN','B','A','SUM','CN_1'], []).Logic('   CN =  CN_I ;   B =  B_I ;   A =  A_I ;let    CNBAR =  !CN ;   CNBAR =  !CN ;let    BBAR =  !B ;   BBAR =  !B ;let    ABAR =  !A ;   ABAR =  !A ;   CN_1 =  !((CNBAR & BBAR) | (BBAR & ABAR) | (CNBAR & ABAR)) ;   SUM =  !((CN & BBAR & A) | (CNBAR & B & A) | (CNBAR & BBAR & ABAR) |             (CN & B & ABAR)) ;');
		Connect(this.ULS183LOG.pins.CN_I, this.pins.CN_I);
		Connect(this.ULS183LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS183LOG.pins.A_I, this.pins.A_I);
		let CN = new Pin();
		Connect(this.ULS183LOG.pins.CN, CN);
		let B = new Pin();
		Connect(this.ULS183LOG.pins.B, B);
		let A = new Pin();
		Connect(this.ULS183LOG.pins.A, A);
		let SUM = new Pin();
		Connect(this.ULS183LOG.pins.SUM, SUM);
		let CN_1 = new Pin();
		Connect(this.ULS183LOG.pins.CN_1, CN_1);
		Connect(SUM, this.pins.SUM_O);
		Connect(CN_1, this.pins.CN_1_O);
	}
}
/**
 * Synchronous 4-bit Up_Down Decade Counters
 */
class SN74LS190 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			DUBAR_I: new Pin(),
			CTENBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			RCOBAR_O: new Pin(),
			MXMNOUT_O: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.ULS190 = new logicexp(['CLK_I','DUBAR_I','CTENBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','CLKBAR','DUBAR','CTENBAR','LOADBAR','A','B','C','D','MXMNOUT','RCOBAR','SA','RA','JKA','SB','RB','JKB','SC','RC','JKC','SD','RD','JKD'], []).Logic('   CLK =  CLK_I ;   CLKBAR =  !CLK_I ;   DUBAR =  DUBAR_I ;   CTENBAR =  CTENBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    DU =  !DUBAR ;   DU =  !DUBAR ;let    LOAD =  !LOADBAR ;   LOAD =  !LOADBAR ;let    CTEN =  !CTENBAR ;   CTEN =  !CTENBAR ;let    CTD =  DUBAR & CTEN ;   CTD =  DUBAR & CTEN ;let    CTU =  DU & CTEN ;   CTU =  DU & CTEN ;   MXMNOUT =  (QA & QD & DU) | (QABAR & QBBAR & QCBAR &    QDBAR & DUBAR) ;     RCOBAR =  !(MXMNOUT & CTEN & CLKBAR) ;   SA =  !(A & LOAD) ;   RA =  !(SA & LOAD) ;   JKA =  CTEN ;   SB =  !(B & LOAD) ;   RB =  !(SB & LOAD) ;let    IB =  !(QBBAR & QCBAR & QDBAR) ;   IB =  !(QBBAR & QCBAR & QDBAR) ;   JKB =  (CTD & QABAR & IB) | (QA & QDBAR & CTU) ;   SC =  !(C & LOAD) ;   RC =  !(SC & LOAD) ;   JKC =  (CTD & QABAR & QBBAR & IB) | (CTU & QB & QA) ;   SD =  !(D & LOAD) ;   RD =  !(SD & LOAD) ;   JKD =  (CTD & QABAR & QBBAR & QCBAR) | (CTU & QD & QA) |     (CTU & QC & QB & QA) ;');
		Connect(this.ULS190.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS190.pins.DUBAR_I, this.pins.DUBAR_I);
		Connect(this.ULS190.pins.CTENBAR_I, this.pins.CTENBAR_I);
		Connect(this.ULS190.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS190.pins.A_I, this.pins.A_I);
		Connect(this.ULS190.pins.B_I, this.pins.B_I);
		Connect(this.ULS190.pins.C_I, this.pins.C_I);
		Connect(this.ULS190.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS190.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS190.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS190.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS190.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS190.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS190.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS190.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS190.pins.QDBAR, QDBAR);
		let CLK = new Pin();
		Connect(this.ULS190.pins.CLK, CLK);
		let CLKBAR = new Pin();
		Connect(this.ULS190.pins.CLKBAR, CLKBAR);
		let DUBAR = new Pin();
		Connect(this.ULS190.pins.DUBAR, DUBAR);
		let CTENBAR = new Pin();
		Connect(this.ULS190.pins.CTENBAR, CTENBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS190.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS190.pins.A, A);
		let B = new Pin();
		Connect(this.ULS190.pins.B, B);
		let C = new Pin();
		Connect(this.ULS190.pins.C, C);
		let D = new Pin();
		Connect(this.ULS190.pins.D, D);
		let MXMNOUT = new Pin();
		Connect(this.ULS190.pins.MXMNOUT, MXMNOUT);
		let RCOBAR = new Pin();
		Connect(this.ULS190.pins.RCOBAR, RCOBAR);
		let SA = new Pin();
		Connect(this.ULS190.pins.SA, SA);
		let RA = new Pin();
		Connect(this.ULS190.pins.RA, RA);
		let JKA = new Pin();
		Connect(this.ULS190.pins.JKA, JKA);
		let SB = new Pin();
		Connect(this.ULS190.pins.SB, SB);
		let RB = new Pin();
		Connect(this.ULS190.pins.RB, RB);
		let JKB = new Pin();
		Connect(this.ULS190.pins.JKB, JKB);
		let SC = new Pin();
		Connect(this.ULS190.pins.SC, SC);
		let RC = new Pin();
		Connect(this.ULS190.pins.RC, RC);
		let JKC = new Pin();
		Connect(this.ULS190.pins.JKC, JKC);
		let SD = new Pin();
		Connect(this.ULS190.pins.SD, SD);
		let RD = new Pin();
		Connect(this.ULS190.pins.RD, RD);
		let JKD = new Pin();
		Connect(this.ULS190.pins.JKD, JKD);
		this.UJKFFA = new jkff(1);
		this.UJKFFB = new jkff(1);
		this.UJKFFC = new jkff(1);
		this.UJKFFD = new jkff(1);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
		Connect(MXMNOUT, this.pins.MXMNOUT_O);
	}
}
class SN74LS191 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			DUBAR_I: new Pin(),
			CTENBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			RCOBAR_O: new Pin(),
			MXMNOUT_O: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.ULS191LOG = new logicexp(['CLK_I','DUBAR_I','CTENBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','DUBAR','CTENBAR','LOADBAR','A','B','C','D','MXMNOUT','RCOBAR','MCLK','SA','RA','JKA','SB','RB','JKB','SC','RC','JKC','SD','RD','JKD'], []).Logic('   CLK =  CLK_I ;   DUBAR =  DUBAR_I ;   CTENBAR =  CTENBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    IEN1 =  !(DUBAR | CTENBAR) ;   IEN1 =  !(DUBAR | CTENBAR) ;let    IEN2 =  !(CTENBAR | !DUBAR) ;   IEN2 =  !(CTENBAR | !DUBAR) ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;let    IM1 =  !DUBAR & QA & QB & QC & QD ;   IM1 =  !DUBAR & QA & QB & QC & QD ;let    IM2 =  DUBAR & QABAR & QBBAR & QCBAR & QDBAR ;   IM2 =  DUBAR & QABAR & QBBAR & QCBAR & QDBAR ;let    IC1 =  IEN2 & QABAR & QBBAR ;   IC1 =  IEN2 & QABAR & QBBAR ;let    IC2 =  IEN1 & QA & QB ;   IC2 =  IEN1 & QA & QB ;let    ID1 =  IEN2 & QABAR & QBBAR & QCBAR ;   ID1 =  IEN2 & QABAR & QBBAR & QCBAR ;let    ID2 =  IEN1 & QA & QB & QC ;   ID2 =  IEN1 & QA & QB & QC ;   MCLK =  !CLK ;   SA =  !(A & ILD) ;   RA =  !(SA & ILD) ;   SB =  !(B & ILD) ;   RB =  !(SB & ILD) ;   SC =  !(C & ILD) ;   RC =  !(SC & ILD) ;   SD =  !(D & ILD) ;   RD =  !(SD & ILD) ;   JKA =  !CTENBAR ;   JKB =  (IEN2 & QABAR) | (QA & IEN1) ;   JKC =  IC1 | IC2 ;   JKD =  ID1 | ID2 ;   MXMNOUT =  IM1 | IM2 ;   RCOBAR =  !(MCLK & JKA & MXMNOUT) ;');
		Connect(this.ULS191LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS191LOG.pins.DUBAR_I, this.pins.DUBAR_I);
		Connect(this.ULS191LOG.pins.CTENBAR_I, this.pins.CTENBAR_I);
		Connect(this.ULS191LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS191LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS191LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS191LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS191LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS191LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS191LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS191LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS191LOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS191LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS191LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS191LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS191LOG.pins.QDBAR, QDBAR);
		let CLK = new Pin();
		Connect(this.ULS191LOG.pins.CLK, CLK);
		let DUBAR = new Pin();
		Connect(this.ULS191LOG.pins.DUBAR, DUBAR);
		let CTENBAR = new Pin();
		Connect(this.ULS191LOG.pins.CTENBAR, CTENBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS191LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS191LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS191LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS191LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS191LOG.pins.D, D);
		let MXMNOUT = new Pin();
		Connect(this.ULS191LOG.pins.MXMNOUT, MXMNOUT);
		let RCOBAR = new Pin();
		Connect(this.ULS191LOG.pins.RCOBAR, RCOBAR);
		let MCLK = new Pin();
		Connect(this.ULS191LOG.pins.MCLK, MCLK);
		let SA = new Pin();
		Connect(this.ULS191LOG.pins.SA, SA);
		let RA = new Pin();
		Connect(this.ULS191LOG.pins.RA, RA);
		let JKA = new Pin();
		Connect(this.ULS191LOG.pins.JKA, JKA);
		let SB = new Pin();
		Connect(this.ULS191LOG.pins.SB, SB);
		let RB = new Pin();
		Connect(this.ULS191LOG.pins.RB, RB);
		let JKB = new Pin();
		Connect(this.ULS191LOG.pins.JKB, JKB);
		let SC = new Pin();
		Connect(this.ULS191LOG.pins.SC, SC);
		let RC = new Pin();
		Connect(this.ULS191LOG.pins.RC, RC);
		let JKC = new Pin();
		Connect(this.ULS191LOG.pins.JKC, JKC);
		let SD = new Pin();
		Connect(this.ULS191LOG.pins.SD, SD);
		let RD = new Pin();
		Connect(this.ULS191LOG.pins.RD, RD);
		let JKD = new Pin();
		Connect(this.ULS191LOG.pins.JKD, JKD);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
		Connect(MXMNOUT, this.pins.MXMNOUT_O);
	}
}
class SN74LS192 extends Component {
	constructor() {
		super();
		this.pins = {
			UP_I: new Pin(),
			DOWN_I: new Pin(),
			CLR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			BOBAR_O: new Pin(),
			COBAR_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.ULS192LOG = new logicexp(['UP_I','DOWN_I','CLR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['UP','DOWN','CLR','LOADBAR','A','B','C','D','TA','TB','TC','TD','BOBAR','COBAR','MCLR','SA','RA','SB','RB','SC','RC','SD','RD'], []).Logic('   UP =  UP_I ;   DOWN =  DOWN_I ;   CLR =  CLR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    ID =  !DOWN ;   ID =  !DOWN ;let    IU =  !UP ;   IU =  !UP ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;   MCLR =  !CLR ;let    IN1 =  !(QBBAR & QCBAR & QDBAR) ;   IN1 =  !(QBBAR & QCBAR & QDBAR) ;   TA =  ID | IU ;   TB =  (ID & QABAR & IN1) | (IU & QA & QDBAR) ;   TC =  (ID & QABAR & QBBAR & IN1) | (IU & QA & QB) ;   TD =  (ID & QABAR & QBBAR & QCBAR) | (IU & QD & QA ) |      (IU & QA & QB & QC) ;   SA =  !(A & ILD & MCLR) ;   RA =  MCLR & !(SA & ILD) ;   SB =  !(B & ILD & MCLR) ;   RB =  MCLR & !(SB & ILD) ;   SC =  !(C & ILD & MCLR) ;   RC =  MCLR & !(SC & ILD) ;   SD =  !(D & ILD & MCLR) ;   RD =  MCLR & !(SD & ILD) ;   BOBAR =  !(ID & QABAR & QBBAR & QCBAR & QDBAR) ;   COBAR =  !(IU & QA & QD) ;');
		Connect(this.ULS192LOG.pins.UP_I, this.pins.UP_I);
		Connect(this.ULS192LOG.pins.DOWN_I, this.pins.DOWN_I);
		Connect(this.ULS192LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.ULS192LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS192LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS192LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS192LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS192LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS192LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS192LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS192LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS192LOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS192LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS192LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS192LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS192LOG.pins.QDBAR, QDBAR);
		let UP = new Pin();
		Connect(this.ULS192LOG.pins.UP, UP);
		let DOWN = new Pin();
		Connect(this.ULS192LOG.pins.DOWN, DOWN);
		let CLR = new Pin();
		Connect(this.ULS192LOG.pins.CLR, CLR);
		let LOADBAR = new Pin();
		Connect(this.ULS192LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS192LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS192LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS192LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS192LOG.pins.D, D);
		let TA = new Pin();
		Connect(this.ULS192LOG.pins.TA, TA);
		let TB = new Pin();
		Connect(this.ULS192LOG.pins.TB, TB);
		let TC = new Pin();
		Connect(this.ULS192LOG.pins.TC, TC);
		let TD = new Pin();
		Connect(this.ULS192LOG.pins.TD, TD);
		let BOBAR = new Pin();
		Connect(this.ULS192LOG.pins.BOBAR, BOBAR);
		let COBAR = new Pin();
		Connect(this.ULS192LOG.pins.COBAR, COBAR);
		let MCLR = new Pin();
		Connect(this.ULS192LOG.pins.MCLR, MCLR);
		let SA = new Pin();
		Connect(this.ULS192LOG.pins.SA, SA);
		let RA = new Pin();
		Connect(this.ULS192LOG.pins.RA, RA);
		let SB = new Pin();
		Connect(this.ULS192LOG.pins.SB, SB);
		let RB = new Pin();
		Connect(this.ULS192LOG.pins.RB, RB);
		let SC = new Pin();
		Connect(this.ULS192LOG.pins.SC, SC);
		let RC = new Pin();
		Connect(this.ULS192LOG.pins.RC, RC);
		let SD = new Pin();
		Connect(this.ULS192LOG.pins.SD, SD);
		let RD = new Pin();
		Connect(this.ULS192LOG.pins.RD, RD);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(BOBAR, this.pins.BOBAR_O);
		Connect(COBAR, this.pins.COBAR_O);
	}
}
class SN74LS193 extends Component {
	constructor() {
		super();
		this.pins = {
			UP_I: new Pin(),
			DOWN_I: new Pin(),
			CLR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			BOBAR_O: new Pin(),
			COBAR_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.ULS193LOG = new logicexp(['UP_I','DOWN_I','CLR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['UP','DOWN','CLR','LOADBAR','A','B','C','D','TA','TB','TC','TD','BOBAR','COBAR','MCLR','SA','RA','SB','RB','SC','RC','SD','RD'], []).Logic('   UP =  UP_I ;   DOWN =  DOWN_I ;   CLR =  CLR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    ID =  !DOWN ;   ID =  !DOWN ;let    IU =  !UP ;   IU =  !UP ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;   MCLR =  !CLR ;   TA =  ID | IU ;   TB =  (ID & QABAR) | (IU & QA) ;   TC =  (ID & QABAR & QBBAR) | (IU & QA & QB) ;   TD =  (ID & QABAR & QBBAR & QCBAR) | (IU & QA & QB & QC) ;   SA =  !(A & ILD & MCLR) ;   RA =  MCLR & !(SA & ILD) ;   SB =  !(B & ILD & MCLR) ;   RB =  MCLR & !(SB & ILD) ;   SC =  !(C & ILD & MCLR) ;   RC =  MCLR & !(SC & ILD) ;   SD =  !(D & ILD & MCLR) ;   RD =  MCLR & !(SD & ILD) ;   BOBAR =  !(ID & QABAR & QBBAR & QCBAR & QDBAR) ;   COBAR =  !(IU & QA & QB & QC & QD) ;');
		Connect(this.ULS193LOG.pins.UP_I, this.pins.UP_I);
		Connect(this.ULS193LOG.pins.DOWN_I, this.pins.DOWN_I);
		Connect(this.ULS193LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.ULS193LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS193LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS193LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS193LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS193LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS193LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS193LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS193LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS193LOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS193LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS193LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS193LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS193LOG.pins.QDBAR, QDBAR);
		let UP = new Pin();
		Connect(this.ULS193LOG.pins.UP, UP);
		let DOWN = new Pin();
		Connect(this.ULS193LOG.pins.DOWN, DOWN);
		let CLR = new Pin();
		Connect(this.ULS193LOG.pins.CLR, CLR);
		let LOADBAR = new Pin();
		Connect(this.ULS193LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS193LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS193LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS193LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS193LOG.pins.D, D);
		let TA = new Pin();
		Connect(this.ULS193LOG.pins.TA, TA);
		let TB = new Pin();
		Connect(this.ULS193LOG.pins.TB, TB);
		let TC = new Pin();
		Connect(this.ULS193LOG.pins.TC, TC);
		let TD = new Pin();
		Connect(this.ULS193LOG.pins.TD, TD);
		let BOBAR = new Pin();
		Connect(this.ULS193LOG.pins.BOBAR, BOBAR);
		let COBAR = new Pin();
		Connect(this.ULS193LOG.pins.COBAR, COBAR);
		let MCLR = new Pin();
		Connect(this.ULS193LOG.pins.MCLR, MCLR);
		let SA = new Pin();
		Connect(this.ULS193LOG.pins.SA, SA);
		let RA = new Pin();
		Connect(this.ULS193LOG.pins.RA, RA);
		let SB = new Pin();
		Connect(this.ULS193LOG.pins.SB, SB);
		let RB = new Pin();
		Connect(this.ULS193LOG.pins.RB, RB);
		let SC = new Pin();
		Connect(this.ULS193LOG.pins.SC, SC);
		let RC = new Pin();
		Connect(this.ULS193LOG.pins.RC, RC);
		let SD = new Pin();
		Connect(this.ULS193LOG.pins.SD, SD);
		let RD = new Pin();
		Connect(this.ULS193LOG.pins.RD, RD);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(BOBAR, this.pins.BOBAR_O);
		Connect(COBAR, this.pins.COBAR_O);
	}
}
/**
 * 4-BIT BIDIRECTIONAL UNIVERSAL SHIFT REGISTERS
 */
class SN74LS194A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			CLRBAR_I: new Pin(),
			S1_I: new Pin(),
			S0_I: new Pin(),
			SL_I: new Pin(),
			SR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.ULS194LOG = new logicexp(['CLK_I','CLRBAR_I','S1_I','S0_I','SL_I','SR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD'], ['CLK','CLRBAR','S1','S0','SL','SR','A','B','C','D','KA','KB','KC','KD','JA','JB','JC','JD','CLOCK'], []).Logic('let    LOAD   =  S1_I & S0_I ;   LOAD   =  S1_I & S0_I ;let    SRIGHT =  !S1_I & S0_I ;   SRIGHT =  !S1_I & S0_I ;let    SLEFT  =  S1_I & !S0_I ;   SLEFT  =  S1_I & !S0_I ;let    HOLD   =  !S1_I & !S0_I ;   HOLD   =  !S1_I & !S0_I ;   CLK =  CLK_I ;   CLRBAR =  CLRBAR_I ;   S1 =  S1_I ;   S0 =  S0_I ;   SL =  SL_I ;   SR =  SR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   KA =  !( (SR & SRIGHT) | (LOAD & A) | (SLEFT & QB) | (HOLD & QA) ) ;   KB =  !( (QA & SRIGHT) | (LOAD & B) | (SLEFT & QC) | (HOLD & QB) ) ;   KC =  !( (QB & SRIGHT) | (LOAD & C) | (SLEFT & QD) | (HOLD & QC) ) ;   KD =  !( (QC & SRIGHT) | (LOAD & D) | (SLEFT & SL) | (HOLD & QD) ) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;   CLOCK =  !CLK ;');
		Connect(this.ULS194LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS194LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS194LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS194LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS194LOG.pins.SL_I, this.pins.SL_I);
		Connect(this.ULS194LOG.pins.SR_I, this.pins.SR_I);
		Connect(this.ULS194LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS194LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS194LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS194LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS194LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS194LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS194LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS194LOG.pins.QD, QD);
		let CLK = new Pin();
		Connect(this.ULS194LOG.pins.CLK, CLK);
		let CLRBAR = new Pin();
		Connect(this.ULS194LOG.pins.CLRBAR, CLRBAR);
		let S1 = new Pin();
		Connect(this.ULS194LOG.pins.S1, S1);
		let S0 = new Pin();
		Connect(this.ULS194LOG.pins.S0, S0);
		let SL = new Pin();
		Connect(this.ULS194LOG.pins.SL, SL);
		let SR = new Pin();
		Connect(this.ULS194LOG.pins.SR, SR);
		let A = new Pin();
		Connect(this.ULS194LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS194LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS194LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS194LOG.pins.D, D);
		let KA = new Pin();
		Connect(this.ULS194LOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.ULS194LOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.ULS194LOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.ULS194LOG.pins.KD, KD);
		let JA = new Pin();
		Connect(this.ULS194LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.ULS194LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.ULS194LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.ULS194LOG.pins.JD, JD);
		let CLOCK = new Pin();
		Connect(this.ULS194LOG.pins.CLOCK, CLOCK);
		this.U1 = new jkff(4);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * 4-BIT PARALLEL-ACCESS SHIFT REGISTERS
 */
class SN74LS195A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			SH_LDBAR_I: new Pin(),
			CLRBAR_I: new Pin(),
			J_I: new Pin(),
			KBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QDBAR_O: new Pin(),
		}
		this.ULS195LOG = new logicexp(['CLK_I','SH_LDBAR_I','CLRBAR_I','J_I','KBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QABAR'], ['CLK','SH_LDBAR','CLRBAR','J','KBAR','A','B','C','D','KA','KB','KC','KD','JA','JB','JC','JD','CLKBAR'], []).Logic('   CLK =  CLK_I ;   SH_LDBAR =  SH_LDBAR_I ;   CLRBAR =  CLRBAR_I ;   J =  J_I ;   KBAR =  KBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !SH_LDBAR ;   LOAD =  !SH_LDBAR ;   KA =  !((QABAR & J & SH_LDBAR) | (SH_LDBAR & KBAR & QA) | (LOAD & A)) ;   KB =  !( (QA & SH_LDBAR) | (LOAD & B) ) ;   KC =  !( (QB & SH_LDBAR) | (LOAD & C) ) ;   KD =  !( (QC & SH_LDBAR) | (LOAD & D) ) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;   CLKBAR =  !CLK ;');
		Connect(this.ULS195LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS195LOG.pins.SH_LDBAR_I, this.pins.SH_LDBAR_I);
		Connect(this.ULS195LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS195LOG.pins.J_I, this.pins.J_I);
		Connect(this.ULS195LOG.pins.KBAR_I, this.pins.KBAR_I);
		Connect(this.ULS195LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS195LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS195LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS195LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS195LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS195LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS195LOG.pins.QC, QC);
		let QABAR = new Pin();
		Connect(this.ULS195LOG.pins.QABAR, QABAR);
		let CLK = new Pin();
		Connect(this.ULS195LOG.pins.CLK, CLK);
		let SH_LDBAR = new Pin();
		Connect(this.ULS195LOG.pins.SH_LDBAR, SH_LDBAR);
		let CLRBAR = new Pin();
		Connect(this.ULS195LOG.pins.CLRBAR, CLRBAR);
		let J = new Pin();
		Connect(this.ULS195LOG.pins.J, J);
		let KBAR = new Pin();
		Connect(this.ULS195LOG.pins.KBAR, KBAR);
		let A = new Pin();
		Connect(this.ULS195LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS195LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS195LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS195LOG.pins.D, D);
		let KA = new Pin();
		Connect(this.ULS195LOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.ULS195LOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.ULS195LOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.ULS195LOG.pins.KD, KD);
		let JA = new Pin();
		Connect(this.ULS195LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.ULS195LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.ULS195LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.ULS195LOG.pins.JD, JD);
		let CLKBAR = new Pin();
		Connect(this.ULS195LOG.pins.CLKBAR, CLKBAR);
		this.U1 = new jkff(4);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
		Connect(this.pins.QDBAR, this.pins.QDBAR_O);
	}
}
/**
 * 4-Bit Presettable Decade Counter_Latch
 */
class SN74LS196 extends Component {
	constructor() {
		super();
		this.pins = {
			LOADBAR_I: new Pin(),
			CLRBAR_I: new Pin(),
			CLK1_I: new Pin(),
			CLK2_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.ULS196LOG = new logicexp(['LOADBAR_I','CLRBAR_I','CLK1_I','CLK2_I','A_I','B_I','C_I','D_I','QB','QC'], ['LOADBAR','CLRBAR','CLK1','CLK2','A','B','C','D','JD','SA','SB','SC','SD','RA','RB','RC','RD'], []).Logic('   LOADBAR =  LOADBAR_I ;   CLRBAR =  CLRBAR_I ;   CLK1 =  CLK1_I ;   CLK2 =  CLK2_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !CLRBAR | !LOADBAR ;   LOAD =  !CLRBAR | !LOADBAR ;   SA =  !(A & LOAD & CLRBAR) ;   SB =  !(B & LOAD & CLRBAR) ;   SC =  !(C & LOAD & CLRBAR) ;   SD =  !(D & LOAD & CLRBAR) ;   RA =  !(SA & LOAD) ;   RB =  !(SB & LOAD) ;   RC =  !(SC & LOAD) ;   RD =  !(SD & LOAD) ;   JD =  QB & QC ;');
		Connect(this.ULS196LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS196LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS196LOG.pins.CLK1_I, this.pins.CLK1_I);
		Connect(this.ULS196LOG.pins.CLK2_I, this.pins.CLK2_I);
		Connect(this.ULS196LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS196LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS196LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS196LOG.pins.D_I, this.pins.D_I);
		let QB = new Pin();
		Connect(this.ULS196LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS196LOG.pins.QC, QC);
		let LOADBAR = new Pin();
		Connect(this.ULS196LOG.pins.LOADBAR, LOADBAR);
		let CLRBAR = new Pin();
		Connect(this.ULS196LOG.pins.CLRBAR, CLRBAR);
		let CLK1 = new Pin();
		Connect(this.ULS196LOG.pins.CLK1, CLK1);
		let CLK2 = new Pin();
		Connect(this.ULS196LOG.pins.CLK2, CLK2);
		let A = new Pin();
		Connect(this.ULS196LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS196LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS196LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS196LOG.pins.D, D);
		let JD = new Pin();
		Connect(this.ULS196LOG.pins.JD, JD);
		let SA = new Pin();
		Connect(this.ULS196LOG.pins.SA, SA);
		let SB = new Pin();
		Connect(this.ULS196LOG.pins.SB, SB);
		let SC = new Pin();
		Connect(this.ULS196LOG.pins.SC, SC);
		let SD = new Pin();
		Connect(this.ULS196LOG.pins.SD, SD);
		let RA = new Pin();
		Connect(this.ULS196LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.ULS196LOG.pins.RB, RB);
		let RC = new Pin();
		Connect(this.ULS196LOG.pins.RC, RC);
		let RD = new Pin();
		Connect(this.ULS196LOG.pins.RD, RD);
		this.UJK1 = new jkff(1);
		this.UJK2 = new jkff(1);
		this.UJK3 = new jkff(1);
		this.UJK4 = new jkff(1);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * 4-Bit Presettable Binary Counter_Latch
 */
class SN74LS197 extends Component {
	constructor() {
		super();
		this.pins = {
			LOADBAR_I: new Pin(),
			CLRBAR_I: new Pin(),
			CLK1_I: new Pin(),
			CLK2_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.ULS197LOG = new logicexp(['LOADBAR_I','CLRBAR_I','CLK1_I','CLK2_I','A_I','B_I','C_I','D_I'], ['LOADBAR','CLRBAR','CLK1','CLK2','A','B','C','D','SA','SB','SC','SD','RA','RB','RC','RD'], []).Logic('   LOADBAR =  LOADBAR_I ;   CLRBAR =  CLRBAR_I ;   CLK1 =  CLK1_I ;   CLK2 =  CLK2_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !CLRBAR | !LOADBAR ;   LOAD =  !CLRBAR | !LOADBAR ;   SA =  !(A & LOAD & CLRBAR) ;   SB =  !(B & LOAD & CLRBAR) ;   SC =  !(C & LOAD & CLRBAR) ;   SD =  !(D & LOAD & CLRBAR) ;   RA =  !(SA & LOAD) ;   RB =  !(SB & LOAD) ;   RC =  !(SC & LOAD) ;   RD =  !(SD & LOAD) ;');
		Connect(this.ULS197LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS197LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS197LOG.pins.CLK1_I, this.pins.CLK1_I);
		Connect(this.ULS197LOG.pins.CLK2_I, this.pins.CLK2_I);
		Connect(this.ULS197LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS197LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS197LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS197LOG.pins.D_I, this.pins.D_I);
		let LOADBAR = new Pin();
		Connect(this.ULS197LOG.pins.LOADBAR, LOADBAR);
		let CLRBAR = new Pin();
		Connect(this.ULS197LOG.pins.CLRBAR, CLRBAR);
		let CLK1 = new Pin();
		Connect(this.ULS197LOG.pins.CLK1, CLK1);
		let CLK2 = new Pin();
		Connect(this.ULS197LOG.pins.CLK2, CLK2);
		let A = new Pin();
		Connect(this.ULS197LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS197LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS197LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS197LOG.pins.D, D);
		let SA = new Pin();
		Connect(this.ULS197LOG.pins.SA, SA);
		let SB = new Pin();
		Connect(this.ULS197LOG.pins.SB, SB);
		let SC = new Pin();
		Connect(this.ULS197LOG.pins.SC, SC);
		let SD = new Pin();
		Connect(this.ULS197LOG.pins.SD, SD);
		let RA = new Pin();
		Connect(this.ULS197LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.ULS197LOG.pins.RB, RB);
		let RC = new Pin();
		Connect(this.ULS197LOG.pins.RC, RC);
		let RD = new Pin();
		Connect(this.ULS197LOG.pins.RD, RD);
		this.UJK1 = new jkff(1);
		this.UJK2 = new jkff(1);
		this.UJK3 = new jkff(1);
		this.UJK4 = new jkff(1);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS240 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A1: new Pin(),
			_1A2: new Pin(),
			_1A3: new Pin(),
			_1A4: new Pin(),
			_2A1: new Pin(),
			_2A2: new Pin(),
			_2A3: new Pin(),
			_2A4: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			_1Y1: new Pin(),
			_1Y2: new Pin(),
			_1Y3: new Pin(),
			_1Y4: new Pin(),
			_2Y1: new Pin(),
			_2Y2: new Pin(),
			_2Y3: new Pin(),
			_2Y4: new Pin(),
		}
		this.UAB = new inva(2);
		this.U1 = new inv3a(4);
		this.U2 = new inv3a(4);
	}
}
/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS241 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A1: new Pin(),
			_1A2: new Pin(),
			_1A3: new Pin(),
			_1A4: new Pin(),
			_2A1: new Pin(),
			_2A2: new Pin(),
			_2A3: new Pin(),
			_2A4: new Pin(),
			G1BAR: new Pin(),
			G2: new Pin(),
			_1Y1: new Pin(),
			_1Y2: new Pin(),
			_1Y3: new Pin(),
			_1Y4: new Pin(),
			_2Y1: new Pin(),
			_2Y2: new Pin(),
			_2Y3: new Pin(),
			_2Y4: new Pin(),
		}
		this.UA = new inv();
		Connect(this.UA.pins.IN, this.pins.G1BAR);
		let G1 = new Pin();
		Connect(this.UA.pins.OUT, G1);
		this.U1 = new buf3a(4);
		Connect(this.U1.pins.D0, this.pins._1A1);
		Connect(this.U1.pins.D1, this.pins._1A2);
		Connect(this.U1.pins.D2, this.pins._1A3);
		Connect(this.U1.pins.D3, this.pins._1A4);
		Connect(this.U1.pins.EN, G1);
		Connect(this.U1.pins.Q0, this.pins._1Y1);
		Connect(this.U1.pins.Q1, this.pins._1Y2);
		Connect(this.U1.pins.Q2, this.pins._1Y3);
		Connect(this.U1.pins.Q3, this.pins._1Y4);
		this.U2 = new buf3a(4);
		Connect(this.U2.pins.D0, this.pins._2A1);
		Connect(this.U2.pins.D1, this.pins._2A2);
		Connect(this.U2.pins.D2, this.pins._2A3);
		Connect(this.U2.pins.D3, this.pins._2A4);
		Connect(this.U2.pins.EN, this.pins.G2);
		Connect(this.U2.pins.Q0, this.pins._2Y1);
		Connect(this.U2.pins.Q1, this.pins._2Y2);
		Connect(this.U2.pins.Q2, this.pins._2Y3);
		Connect(this.U2.pins.Q3, this.pins._2Y4);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS242 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			GABBAR: new Pin(),
			GBA: new Pin(),
			B1: new Pin(),
			B2: new Pin(),
			B3: new Pin(),
			B4: new Pin(),
		}
		this.UA = new inv();
		Connect(this.UA.pins.IN, this.pins.GABBAR);
		let GAB = new Pin();
		Connect(this.UA.pins.OUT, GAB);
		this.U1 = new inv3a(4);
		this.U2 = new inv3a(4);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS243 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			GABBAR: new Pin(),
			GBA: new Pin(),
			B1: new Pin(),
			B2: new Pin(),
			B3: new Pin(),
			B4: new Pin(),
		}
		this.UA = new inv();
		Connect(this.UA.pins.IN, this.pins.GABBAR);
		let GAB = new Pin();
		Connect(this.UA.pins.OUT, GAB);
		this.U1 = new buf3a(4);
		Connect(this.U1.pins.D0, this.pins.A1);
		Connect(this.U1.pins.D1, this.pins.A2);
		Connect(this.U1.pins.D2, this.pins.A3);
		Connect(this.U1.pins.D3, this.pins.A4);
		Connect(this.U1.pins.EN, GAB);
		Connect(this.U1.pins.Q0, this.pins.B1);
		Connect(this.U1.pins.Q1, this.pins.B2);
		Connect(this.U1.pins.Q2, this.pins.B3);
		Connect(this.U1.pins.Q3, this.pins.B4);
		this.U2 = new buf3a(4);
		Connect(this.U2.pins.D0, this.pins.B1);
		Connect(this.U2.pins.D1, this.pins.B2);
		Connect(this.U2.pins.D2, this.pins.B3);
		Connect(this.U2.pins.D3, this.pins.B4);
		Connect(this.U2.pins.EN, this.pins.GBA);
		Connect(this.U2.pins.Q0, this.pins.A1);
		Connect(this.U2.pins.Q1, this.pins.A2);
		Connect(this.U2.pins.Q2, this.pins.A3);
		Connect(this.U2.pins.Q3, this.pins.A4);
	}
}
/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS244 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A1: new Pin(),
			_1A2: new Pin(),
			_1A3: new Pin(),
			_1A4: new Pin(),
			_2A1: new Pin(),
			_2A2: new Pin(),
			_2A3: new Pin(),
			_2A4: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			_1Y1: new Pin(),
			_1Y2: new Pin(),
			_1Y3: new Pin(),
			_1Y4: new Pin(),
			_2Y1: new Pin(),
			_2Y2: new Pin(),
			_2Y3: new Pin(),
			_2Y4: new Pin(),
		}
		this.UAB = new inva(2);
		this.U1 = new buf3a(4);
		Connect(this.U1.pins.D0, this.pins._1A1);
		Connect(this.U1.pins.D1, this.pins._1A2);
		Connect(this.U1.pins.D2, this.pins._1A3);
		Connect(this.U1.pins.D3, this.pins._1A4);
		let G1 = new Pin();
		Connect(this.U1.pins.EN, G1);
		Connect(this.U1.pins.Q0, this.pins._1Y1);
		Connect(this.U1.pins.Q1, this.pins._1Y2);
		Connect(this.U1.pins.Q2, this.pins._1Y3);
		Connect(this.U1.pins.Q3, this.pins._1Y4);
		this.U2 = new buf3a(4);
		Connect(this.U2.pins.D0, this.pins._2A1);
		Connect(this.U2.pins.D1, this.pins._2A2);
		Connect(this.U2.pins.D2, this.pins._2A3);
		Connect(this.U2.pins.D3, this.pins._2A4);
		let G2 = new Pin();
		Connect(this.U2.pins.EN, G2);
		Connect(this.U2.pins.Q0, this.pins._2Y1);
		Connect(this.U2.pins.Q1, this.pins._2Y2);
		Connect(this.U2.pins.Q2, this.pins._2Y3);
		Connect(this.U2.pins.Q3, this.pins._2Y4);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS245 extends Component {
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
		let DIR = new Pin();
		Connect(this.U2.pins.IN, DIR);
		let DIRBAR = new Pin();
		Connect(this.U2.pins.OUT, DIRBAR);
		this.U3 = new nora(2,2);
		this.U4 = new buf3a(8);
		Connect(this.U4.pins.D0, this.pins.A1_B);
		Connect(this.U4.pins.D1, this.pins.A2_B);
		Connect(this.U4.pins.D2, this.pins.A3_B);
		Connect(this.U4.pins.D3, this.pins.A4_B);
		Connect(this.U4.pins.D4, this.pins.A5_B);
		Connect(this.U4.pins.D5, this.pins.A6_B);
		Connect(this.U4.pins.D6, this.pins.A7_B);
		Connect(this.U4.pins.D7, this.pins.A8_B);
		let ENABLEAB = new Pin();
		Connect(this.U4.pins.EN, ENABLEAB);
		Connect(this.U4.pins.Q0, this.pins.B1_B);
		Connect(this.U4.pins.Q1, this.pins.B2_B);
		Connect(this.U4.pins.Q2, this.pins.B3_B);
		Connect(this.U4.pins.Q3, this.pins.B4_B);
		Connect(this.U4.pins.Q4, this.pins.B5_B);
		Connect(this.U4.pins.Q5, this.pins.B6_B);
		Connect(this.U4.pins.Q6, this.pins.B7_B);
		Connect(this.U4.pins.Q7, this.pins.B8_B);
		this.U5 = new buf3a(8);
		Connect(this.U5.pins.D0, this.pins.B1_B);
		Connect(this.U5.pins.D1, this.pins.B2_B);
		Connect(this.U5.pins.D2, this.pins.B3_B);
		Connect(this.U5.pins.D3, this.pins.B4_B);
		Connect(this.U5.pins.D4, this.pins.B5_B);
		Connect(this.U5.pins.D5, this.pins.B6_B);
		Connect(this.U5.pins.D6, this.pins.B7_B);
		Connect(this.U5.pins.D7, this.pins.B8_B);
		let ENABLEBA = new Pin();
		Connect(this.U5.pins.EN, ENABLEBA);
		Connect(this.U5.pins.Q0, this.pins.A1_B);
		Connect(this.U5.pins.Q1, this.pins.A2_B);
		Connect(this.U5.pins.Q2, this.pins.A3_B);
		Connect(this.U5.pins.Q3, this.pins.A4_B);
		Connect(this.U5.pins.Q4, this.pins.A5_B);
		Connect(this.U5.pins.Q5, this.pins.A6_B);
		Connect(this.U5.pins.Q6, this.pins.A7_B);
		Connect(this.U5.pins.Q7, this.pins.A8_B);
	}
}
/**
 * DECODER_DRIVER BCD-7 SEGMENT WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS247 extends Component {
	constructor() {
		super();
		this.pins = {
			INA_I: new Pin(),
			INB_I: new Pin(),
			INC_I: new Pin(),
			IND_I: new Pin(),
			RBIBAR_I: new Pin(),
			LTBAR_I: new Pin(),
			BIBAR_RBOBAR_B: new Pin(),
			OUTA_O: new Pin(),
			OUTB_O: new Pin(),
			OUTC_O: new Pin(),
			OUTD_O: new Pin(),
			OUTE_O: new Pin(),
			OUTF_O: new Pin(),
			OUTG_O: new Pin(),
		}
		this.U1 = new or(6);
		this.ULS247LOG = new logicexp(['INA_I','INB_I','INC_I','IND_I','RBIBAR_I','LTBAR_I','BIBAR_RBOBAR_B'], ['INA','INB','INC','IND','RBIBAR','LT','OUTA','OUTB','OUTC','OUTD','OUTE','OUTF','OUTG'], []).Logic('   INA    =  INA_I ;   INB    =  INB_I ;   INC    =  INC_I ;   IND    =  IND_I ;   RBIBAR =  RBIBAR_I ;let    LTBAR  =  LTBAR_I ;   LTBAR  =  LTBAR_I ;let    BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   LT     =  !LTBAR ;let    ALT    =  !(INA & LTBAR) ;   ALT    =  !(INA & LTBAR) ;let    BLT    =  !(INB & LTBAR) ;   BLT    =  !(INB & LTBAR) ;let    CLT    =  !(INC & LTBAR) ;   CLT    =  !(INC & LTBAR) ;let    DLT    =  !IND ;   DLT    =  !IND ;let    ABI    =  !(ALT & BIBAR_RBOBAR) ;   ABI    =  !(ALT & BIBAR_RBOBAR) ;let    BBI    =  !(BLT & BIBAR_RBOBAR) ;   BBI    =  !(BLT & BIBAR_RBOBAR) ;let    CBI    =  !(CLT & BIBAR_RBOBAR) ;   CBI    =  !(CLT & BIBAR_RBOBAR) ;let    DBI    =  !(DLT & BIBAR_RBOBAR) ;   DBI    =  !(DLT & BIBAR_RBOBAR) ;   OUTA   =  (BBI & DBI) | (ALT & BLT & CBI) | (ABI & BLT & CLT & DLT) ;   OUTB   =  (BBI & DBI) | (ABI & BLT & CBI) | (ALT & BBI & CBI) ;   OUTC   =  (CBI & DBI) | (ALT & BBI & CLT) ;   OUTD   =  (ABI & BLT & CLT & DLT) | (ALT & BLT & CBI) |              (ABI & BBI & CBI) ;   OUTE   =   ABI | (BLT & CBI) ;   OUTF   =  (ABI & BBI) | (BBI & CLT) | (ABI & CLT & DLT) ;   OUTG   =  (ABI & BBI & CBI) | (BLT & CLT & DLT & LTBAR) ;');
		Connect(this.ULS247LOG.pins.INA_I, this.pins.INA_I);
		Connect(this.ULS247LOG.pins.INB_I, this.pins.INB_I);
		Connect(this.ULS247LOG.pins.INC_I, this.pins.INC_I);
		Connect(this.ULS247LOG.pins.IND_I, this.pins.IND_I);
		Connect(this.ULS247LOG.pins.RBIBAR_I, this.pins.RBIBAR_I);
		Connect(this.ULS247LOG.pins.LTBAR_I, this.pins.LTBAR_I);
		Connect(this.ULS247LOG.pins.BIBAR_RBOBAR_B, this.pins.BIBAR_RBOBAR_B);
		let INA = new Pin();
		Connect(this.ULS247LOG.pins.INA, INA);
		let INB = new Pin();
		Connect(this.ULS247LOG.pins.INB, INB);
		let INC = new Pin();
		Connect(this.ULS247LOG.pins.INC, INC);
		let IND = new Pin();
		Connect(this.ULS247LOG.pins.IND, IND);
		let RBIBAR = new Pin();
		Connect(this.ULS247LOG.pins.RBIBAR, RBIBAR);
		let LT = new Pin();
		Connect(this.ULS247LOG.pins.LT, LT);
		let OUTA = new Pin();
		Connect(this.ULS247LOG.pins.OUTA, OUTA);
		let OUTB = new Pin();
		Connect(this.ULS247LOG.pins.OUTB, OUTB);
		let OUTC = new Pin();
		Connect(this.ULS247LOG.pins.OUTC, OUTC);
		let OUTD = new Pin();
		Connect(this.ULS247LOG.pins.OUTD, OUTD);
		let OUTE = new Pin();
		Connect(this.ULS247LOG.pins.OUTE, OUTE);
		let OUTF = new Pin();
		Connect(this.ULS247LOG.pins.OUTF, OUTF);
		let OUTG = new Pin();
		Connect(this.ULS247LOG.pins.OUTG, OUTG);
		Connect(OUTA, this.pins.OUTA_O);
		Connect(OUTB, this.pins.OUTB_O);
		Connect(OUTC, this.pins.OUTC_O);
		Connect(OUTD, this.pins.OUTD_O);
		Connect(OUTE, this.pins.OUTE_O);
		Connect(OUTF, this.pins.OUTF_O);
		Connect(OUTG, this.pins.OUTG_O);
	}
}
/**
 * DECODER_DRIVER BCD-7 SEGMENT WITH INTERNAL PULLUPS
 */
class SN74LS248 extends Component {
	constructor() {
		super();
		this.pins = {
			INA_I: new Pin(),
			INB_I: new Pin(),
			INC_I: new Pin(),
			IND_I: new Pin(),
			RBIBAR_I: new Pin(),
			LTBAR_I: new Pin(),
			BIBAR_RBOBAR_B: new Pin(),
			OUTA_O: new Pin(),
			OUTB_O: new Pin(),
			OUTC_O: new Pin(),
			OUTD_O: new Pin(),
			OUTE_O: new Pin(),
			OUTF_O: new Pin(),
			OUTG_O: new Pin(),
		}
		this.U1 = new or(6);
		this.ULS248LOG = new logicexp(['INA_I','INB_I','INC_I','IND_I','RBIBAR_I','LTBAR_I','BIBAR_RBOBAR_B'], ['INA','INB','INC','IND','RBIBAR','LT','OUTA','OUTB','OUTC','OUTD','OUTE','OUTF','OUTG'], []).Logic('   INA    =  INA_I ;   INB    =  INB_I ;   INC    =  INC_I ;   IND    =  IND_I ;   RBIBAR =  RBIBAR_I ;let    LTBAR  =  LTBAR_I ;   LTBAR  =  LTBAR_I ;let    BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   LT     =  !LTBAR ;let    ALT    =  !(INA & LTBAR) ;   ALT    =  !(INA & LTBAR) ;let    BLT    =  !(INB & LTBAR) ;   BLT    =  !(INB & LTBAR) ;let    CLT    =  !(INC & LTBAR) ;   CLT    =  !(INC & LTBAR) ;let    DLT    =  !IND ;   DLT    =  !IND ;let    ABI    =  !(ALT & BIBAR_RBOBAR) ;   ABI    =  !(ALT & BIBAR_RBOBAR) ;let    BBI    =  !(BLT & BIBAR_RBOBAR) ;   BBI    =  !(BLT & BIBAR_RBOBAR) ;let    CBI    =  !(CLT & BIBAR_RBOBAR) ;   CBI    =  !(CLT & BIBAR_RBOBAR) ;let    DBI    =  !(DLT & BIBAR_RBOBAR) ;   DBI    =  !(DLT & BIBAR_RBOBAR) ;   OUTA   =  !((BBI & DBI) | (ALT & BLT & CBI) | (ABI & BLT & CLT & DLT)) ;   OUTB   =  !((BBI & DBI) | (ABI & BLT & CBI) | (ALT & BBI & CBI)) ;   OUTC   =  !((CBI & DBI) | (ALT & BBI & CLT)) ;   OUTD   =  !((ABI & BLT & CLT & DLT) | (ALT & BLT & CBI) |                (ABI & BBI & CBI)) ;   OUTE   =  !( ABI | (BLT & CBI)) ;   OUTF   =  !((ABI & BBI) | (BBI & CLT) | (ABI & CLT & DLT)) ;   OUTG   =  !((ABI & BBI & CBI) | (BLT & CLT & DLT & LTBAR)) ;');
		Connect(this.ULS248LOG.pins.INA_I, this.pins.INA_I);
		Connect(this.ULS248LOG.pins.INB_I, this.pins.INB_I);
		Connect(this.ULS248LOG.pins.INC_I, this.pins.INC_I);
		Connect(this.ULS248LOG.pins.IND_I, this.pins.IND_I);
		Connect(this.ULS248LOG.pins.RBIBAR_I, this.pins.RBIBAR_I);
		Connect(this.ULS248LOG.pins.LTBAR_I, this.pins.LTBAR_I);
		Connect(this.ULS248LOG.pins.BIBAR_RBOBAR_B, this.pins.BIBAR_RBOBAR_B);
		let INA = new Pin();
		Connect(this.ULS248LOG.pins.INA, INA);
		let INB = new Pin();
		Connect(this.ULS248LOG.pins.INB, INB);
		let INC = new Pin();
		Connect(this.ULS248LOG.pins.INC, INC);
		let IND = new Pin();
		Connect(this.ULS248LOG.pins.IND, IND);
		let RBIBAR = new Pin();
		Connect(this.ULS248LOG.pins.RBIBAR, RBIBAR);
		let LT = new Pin();
		Connect(this.ULS248LOG.pins.LT, LT);
		let OUTA = new Pin();
		Connect(this.ULS248LOG.pins.OUTA, OUTA);
		let OUTB = new Pin();
		Connect(this.ULS248LOG.pins.OUTB, OUTB);
		let OUTC = new Pin();
		Connect(this.ULS248LOG.pins.OUTC, OUTC);
		let OUTD = new Pin();
		Connect(this.ULS248LOG.pins.OUTD, OUTD);
		let OUTE = new Pin();
		Connect(this.ULS248LOG.pins.OUTE, OUTE);
		let OUTF = new Pin();
		Connect(this.ULS248LOG.pins.OUTF, OUTF);
		let OUTG = new Pin();
		Connect(this.ULS248LOG.pins.OUTG, OUTG);
		Connect(OUTA, this.pins.OUTA_O);
		Connect(OUTB, this.pins.OUTB_O);
		Connect(OUTC, this.pins.OUTC_O);
		Connect(OUTD, this.pins.OUTD_O);
		Connect(OUTE, this.pins.OUTE_O);
		Connect(OUTF, this.pins.OUTF_O);
		Connect(OUTG, this.pins.OUTG_O);
	}
}
/**
 * DECODER_DRIVER BCD-7 SEGMENT WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS249 extends Component {
	constructor() {
		super();
		this.pins = {
			INA_I: new Pin(),
			INB_I: new Pin(),
			INC_I: new Pin(),
			IND_I: new Pin(),
			RBIBAR_I: new Pin(),
			LTBAR_I: new Pin(),
			BIBAR_RBOBAR_B: new Pin(),
			OUTA_O: new Pin(),
			OUTB_O: new Pin(),
			OUTC_O: new Pin(),
			OUTD_O: new Pin(),
			OUTE_O: new Pin(),
			OUTF_O: new Pin(),
			OUTG_O: new Pin(),
		}
		this.U1 = new or(6);
		this.ULS249LOG = new logicexp(['INA_I','INB_I','INC_I','IND_I','RBIBAR_I','LTBAR_I','BIBAR_RBOBAR_B'], ['INA','INB','INC','IND','RBIBAR','LT','OUTA','OUTB','OUTC','OUTD','OUTE','OUTF','OUTG'], []).Logic('   INA    =  INA_I ;   INB    =  INB_I ;   INC    =  INC_I ;   IND    =  IND_I ;   RBIBAR =  RBIBAR_I ;let    LTBAR  =  LTBAR_I ;   LTBAR  =  LTBAR_I ;let    BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   BIBAR_RBOBAR  =  BIBAR_RBOBAR_B ;   LT     =  !LTBAR ;let    ALT    =  !(INA & LTBAR) ;   ALT    =  !(INA & LTBAR) ;let    BLT    =  !(INB & LTBAR) ;   BLT    =  !(INB & LTBAR) ;let    CLT    =  !(INC & LTBAR) ;   CLT    =  !(INC & LTBAR) ;let    DLT    =  !IND ;   DLT    =  !IND ;let    ABI    =  !(ALT & BIBAR_RBOBAR) ;   ABI    =  !(ALT & BIBAR_RBOBAR) ;let    BBI    =  !(BLT & BIBAR_RBOBAR) ;   BBI    =  !(BLT & BIBAR_RBOBAR) ;let    CBI    =  !(CLT & BIBAR_RBOBAR) ;   CBI    =  !(CLT & BIBAR_RBOBAR) ;let    DBI    =  !(DLT & BIBAR_RBOBAR) ;   DBI    =  !(DLT & BIBAR_RBOBAR) ;   OUTA   =  !((BBI & DBI) | (ALT & BLT & CBI) | (ABI & BLT & CLT & DLT)) ;   OUTB   =  !((BBI & DBI) | (ABI & BLT & CBI) | (ALT & BBI & CBI)) ;   OUTC   =  !((CBI & DBI) | (ALT & BBI & CLT)) ;   OUTD   =  !((ABI & BLT & CLT & DLT) | (ALT & BLT & CBI) |                (ABI & BBI & CBI)) ;   OUTE   =  !( ABI | (BLT & CBI)) ;   OUTF   =  !((ABI & BBI) | (BBI & CLT) | (ABI & CLT & DLT)) ;   OUTG   =  !((ABI & BBI & CBI) | (BLT & CLT & DLT & LTBAR)) ;');
		Connect(this.ULS249LOG.pins.INA_I, this.pins.INA_I);
		Connect(this.ULS249LOG.pins.INB_I, this.pins.INB_I);
		Connect(this.ULS249LOG.pins.INC_I, this.pins.INC_I);
		Connect(this.ULS249LOG.pins.IND_I, this.pins.IND_I);
		Connect(this.ULS249LOG.pins.RBIBAR_I, this.pins.RBIBAR_I);
		Connect(this.ULS249LOG.pins.LTBAR_I, this.pins.LTBAR_I);
		Connect(this.ULS249LOG.pins.BIBAR_RBOBAR_B, this.pins.BIBAR_RBOBAR_B);
		let INA = new Pin();
		Connect(this.ULS249LOG.pins.INA, INA);
		let INB = new Pin();
		Connect(this.ULS249LOG.pins.INB, INB);
		let INC = new Pin();
		Connect(this.ULS249LOG.pins.INC, INC);
		let IND = new Pin();
		Connect(this.ULS249LOG.pins.IND, IND);
		let RBIBAR = new Pin();
		Connect(this.ULS249LOG.pins.RBIBAR, RBIBAR);
		let LT = new Pin();
		Connect(this.ULS249LOG.pins.LT, LT);
		let OUTA = new Pin();
		Connect(this.ULS249LOG.pins.OUTA, OUTA);
		let OUTB = new Pin();
		Connect(this.ULS249LOG.pins.OUTB, OUTB);
		let OUTC = new Pin();
		Connect(this.ULS249LOG.pins.OUTC, OUTC);
		let OUTD = new Pin();
		Connect(this.ULS249LOG.pins.OUTD, OUTD);
		let OUTE = new Pin();
		Connect(this.ULS249LOG.pins.OUTE, OUTE);
		let OUTF = new Pin();
		Connect(this.ULS249LOG.pins.OUTF, OUTF);
		let OUTG = new Pin();
		Connect(this.ULS249LOG.pins.OUTG, OUTG);
		Connect(OUTA, this.pins.OUTA_O);
		Connect(OUTB, this.pins.OUTB_O);
		Connect(OUTC, this.pins.OUTC_O);
		Connect(OUTD, this.pins.OUTD_O);
		Connect(OUTE, this.pins.OUTE_O);
		Connect(OUTF, this.pins.OUTF_O);
		Connect(OUTG, this.pins.OUTG_O);
	}
}
/**
 * MULTIPLEXER_DATA SELECTOR 8-1 LINE WITH 3-STATE OUTPUTS
 */
class SN74LS251 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			D5_I: new Pin(),
			D6_I: new Pin(),
			D7_I: new Pin(),
			Y_O: new Pin(),
			W_O: new Pin(),
		}
		this.ULS251LOG = new logicexp(['GBAR_I','A_I','B_I','C_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I'], ['GBAR','A','B','C','D0','D1','D2','D3','D4','D5','D6','D7','W','Y'], []).Logic('   GBAR =  GBAR_I ;   A =  A_I ;     B =  B_I ;     C =  C_I ;     D0 =  D0_I ;   D1 =  D1_I ;   D2 =  D2_I ;   D3 =  D3_I ;   D4 =  D4_I ;   D5 =  D5_I ;   D6 =  D6_I ;   D7 =  D7_I ;let    IA =  !A ;   IA =  !A ;let    IB =  !B ;   IB =  !B ;let    IC =  !C ;   IC =  !C ;let    IG =  !GBAR ;   IG =  !GBAR ;let    ID0 =  D0 & IA & IB & IC & IG ;   ID0 =  D0 & IA & IB & IC & IG ;let    ID1 =  D1 & A & IB & IC & IG ;   ID1 =  D1 & A & IB & IC & IG ;let    ID2 =  D2 & IA & B & IC & IG ;   ID2 =  D2 & IA & B & IC & IG ;let    ID3 =  D3 & A & B & IC & IG ;   ID3 =  D3 & A & B & IC & IG ;let    ID4 =  D4 & IA & IB & C & IG ;   ID4 =  D4 & IA & IB & C & IG ;let    ID5 =  D5 & A & IB & C & IG ;   ID5 =  D5 & A & IB & C & IG ;let    ID6 =  D6 & IA & B & C & IG ;   ID6 =  D6 & IA & B & C & IG ;let    ID7 =  D7 & A & B & C & IG ;   ID7 =  D7 & A & B & C & IG ;   W =  !(ID0 | ID1 | ID2 | ID3 | ID4 | ID5 | ID6 | ID7) ;   Y =  !W ;');
		Connect(this.ULS251LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS251LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS251LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS251LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS251LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.ULS251LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS251LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS251LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS251LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.ULS251LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.ULS251LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.ULS251LOG.pins.D7_I, this.pins.D7_I);
		let GBAR = new Pin();
		Connect(this.ULS251LOG.pins.GBAR, GBAR);
		let A = new Pin();
		Connect(this.ULS251LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS251LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS251LOG.pins.C, C);
		let D0 = new Pin();
		Connect(this.ULS251LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.ULS251LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS251LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS251LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS251LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.ULS251LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.ULS251LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.ULS251LOG.pins.D7, D7);
		let W = new Pin();
		Connect(this.ULS251LOG.pins.W, W);
		let Y = new Pin();
		Connect(this.ULS251LOG.pins.Y, Y);
		Connect(W, this.pins.W_O);
		Connect(Y, this.pins.Y_O);
	}
}
/**
 * DUAL 1-OF-4 DATA SELECTORS_MULTIPLEXERS WITH 3-STATE OUTPUTS
 */
class SN74LS253 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			_1C0_I: new Pin(),
			_1C1_I: new Pin(),
			_1C2_I: new Pin(),
			_1C3_I: new Pin(),
			_2C0_I: new Pin(),
			_2C1_I: new Pin(),
			_2C2_I: new Pin(),
			_2C3_I: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
		}
		this.ULS253LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','_1C0_I','_1C1_I','_1C2_I','_1C3_I','_2C0_I','_2C1_I','_2C2_I','_2C3_I'], ['G1BAR','G2BAR','A','B','_1C0','_1C1','_1C2','_1C3','_2C0','_2C1','_2C2','_2C3','Y1','Y2'], []).Logic('   G1BAR =  G1BAR_I ;   G2BAR =  G2BAR_I ;   A =  A_I ;   B =  B_I ;   _1C0 =  _1C0_I ;   _1C1 =  _1C1_I ;   _1C2 =  _1C2_I ;   _1C3 =  _1C3_I ;   _2C0 =  _2C0_I ;   _2C1 =  _2C1_I ;   _2C2 =  _2C2_I ;   _2C3 =  _2C3_I ;let    G1 =  !G1BAR ;   G1 =  !G1BAR ;let    G2 =  !G2BAR ;   G2 =  !G2BAR ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    I0 =  G1 & BBAR & ABAR & _1C0 ;   I0 =  G1 & BBAR & ABAR & _1C0 ;let    I1 =  G1 & BBAR & A    & _1C1 ;   I1 =  G1 & BBAR & A    & _1C1 ;let    I2 =  G1 & B    & ABAR & _1C2 ;   I2 =  G1 & B    & ABAR & _1C2 ;let    I3 =  G1 & B    & A    & _1C3 ;   I3 =  G1 & B    & A    & _1C3 ;let    I4 =  G2 & BBAR & ABAR & _2C0 ;   I4 =  G2 & BBAR & ABAR & _2C0 ;let    I5 =  G2 & BBAR & A    & _2C1 ;   I5 =  G2 & BBAR & A    & _2C1 ;let    I6 =  G2 & B    & ABAR & _2C2 ;   I6 =  G2 & B    & ABAR & _2C2 ;let    I7 =  G2 & B    & A    & _2C3 ;   I7 =  G2 & B    & A    & _2C3 ;   Y1 =  I0 | I1 | I2 | I3 ;   Y2 =  I4 | I5 | I6 | I7 ;');
		Connect(this.ULS253LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS253LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS253LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS253LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS253LOG.pins._1C0_I, this.pins._1C0_I);
		Connect(this.ULS253LOG.pins._1C1_I, this.pins._1C1_I);
		Connect(this.ULS253LOG.pins._1C2_I, this.pins._1C2_I);
		Connect(this.ULS253LOG.pins._1C3_I, this.pins._1C3_I);
		Connect(this.ULS253LOG.pins._2C0_I, this.pins._2C0_I);
		Connect(this.ULS253LOG.pins._2C1_I, this.pins._2C1_I);
		Connect(this.ULS253LOG.pins._2C2_I, this.pins._2C2_I);
		Connect(this.ULS253LOG.pins._2C3_I, this.pins._2C3_I);
		let G1BAR = new Pin();
		Connect(this.ULS253LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS253LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.ULS253LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS253LOG.pins.B, B);
		let _1C0 = new Pin();
		Connect(this.ULS253LOG.pins._1C0, _1C0);
		let _1C1 = new Pin();
		Connect(this.ULS253LOG.pins._1C1, _1C1);
		let _1C2 = new Pin();
		Connect(this.ULS253LOG.pins._1C2, _1C2);
		let _1C3 = new Pin();
		Connect(this.ULS253LOG.pins._1C3, _1C3);
		let _2C0 = new Pin();
		Connect(this.ULS253LOG.pins._2C0, _2C0);
		let _2C1 = new Pin();
		Connect(this.ULS253LOG.pins._2C1, _2C1);
		let _2C2 = new Pin();
		Connect(this.ULS253LOG.pins._2C2, _2C2);
		let _2C3 = new Pin();
		Connect(this.ULS253LOG.pins._2C3, _2C3);
		let Y1 = new Pin();
		Connect(this.ULS253LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS253LOG.pins.Y2, Y2);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
	}
}
/**
 * QUADRUPLE 2-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74LS257B extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			_1A_I: new Pin(),
			_1B_I: new Pin(),
			_2A_I: new Pin(),
			_2B_I: new Pin(),
			_3A_I: new Pin(),
			_3B_I: new Pin(),
			_4A_I: new Pin(),
			_4B_I: new Pin(),
			SEL_I: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
		}
		this.ULS257BLOG = new logicexp(['GBAR_I','_1A_I','_1B_I','_2A_I','_2B_I','_3A_I','_3B_I','_4A_I','_4B_I','SEL_I'], ['GBAR','_1A','_1B','_2A','_2B','_3A','_3B','_4A','_4B','SEL','Y1','Y2','Y3','Y4'], []).Logic('   GBAR =  GBAR_I ;   _1A =  _1A_I ;   _1B =  _1B_I ;   _2A =  _2A_I ;   _2B =  _2B_I ;   _3A =  _3A_I ;   _3B =  _3B_I ;   _4A =  _4A_I ;   _4B =  _4B_I ;   SEL =  SEL_I ;let    SELBAR =  !SEL ;   SELBAR =  !SEL ;   Y1 =  (_1A & SELBAR) | (_1B & SEL) ;   Y2 =  (_2A & SELBAR) | (_2B & SEL) ;   Y3 =  (_3A & SELBAR) | (_3B & SEL) ;   Y4 =  (_4A & SELBAR) | (_4B & SEL) ;');
		Connect(this.ULS257BLOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS257BLOG.pins._1A_I, this.pins._1A_I);
		Connect(this.ULS257BLOG.pins._1B_I, this.pins._1B_I);
		Connect(this.ULS257BLOG.pins._2A_I, this.pins._2A_I);
		Connect(this.ULS257BLOG.pins._2B_I, this.pins._2B_I);
		Connect(this.ULS257BLOG.pins._3A_I, this.pins._3A_I);
		Connect(this.ULS257BLOG.pins._3B_I, this.pins._3B_I);
		Connect(this.ULS257BLOG.pins._4A_I, this.pins._4A_I);
		Connect(this.ULS257BLOG.pins._4B_I, this.pins._4B_I);
		Connect(this.ULS257BLOG.pins.SEL_I, this.pins.SEL_I);
		let GBAR = new Pin();
		Connect(this.ULS257BLOG.pins.GBAR, GBAR);
		let _1A = new Pin();
		Connect(this.ULS257BLOG.pins._1A, _1A);
		let _1B = new Pin();
		Connect(this.ULS257BLOG.pins._1B, _1B);
		let _2A = new Pin();
		Connect(this.ULS257BLOG.pins._2A, _2A);
		let _2B = new Pin();
		Connect(this.ULS257BLOG.pins._2B, _2B);
		let _3A = new Pin();
		Connect(this.ULS257BLOG.pins._3A, _3A);
		let _3B = new Pin();
		Connect(this.ULS257BLOG.pins._3B, _3B);
		let _4A = new Pin();
		Connect(this.ULS257BLOG.pins._4A, _4A);
		let _4B = new Pin();
		Connect(this.ULS257BLOG.pins._4B, _4B);
		let SEL = new Pin();
		Connect(this.ULS257BLOG.pins.SEL, SEL);
		let Y1 = new Pin();
		Connect(this.ULS257BLOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS257BLOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS257BLOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS257BLOG.pins.Y4, Y4);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
	}
}
/**
 * QUADRUPLE 2-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74LS258B extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			_1A_I: new Pin(),
			_1B_I: new Pin(),
			_2A_I: new Pin(),
			_2B_I: new Pin(),
			_3A_I: new Pin(),
			_3B_I: new Pin(),
			_4A_I: new Pin(),
			_4B_I: new Pin(),
			SEL_I: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
		}
		this.ULS258BLOG = new logicexp(['GBAR_I','_1A_I','_1B_I','_2A_I','_2B_I','_3A_I','_3B_I','_4A_I','_4B_I','SEL_I'], ['GBAR','_1A','_1B','_2A','_2B','_3A','_3B','_4A','_4B','SEL','Y1','Y2','Y3','Y4'], []).Logic('   GBAR =  GBAR_I ;   _1A =  _1A_I ;   _1B =  _1B_I ;   _2A =  _2A_I ;   _2B =  _2B_I ;   _3A =  _3A_I ;   _3B =  _3B_I ;   _4A =  _4A_I ;   _4B =  _4B_I ;   SEL =  SEL_I ;let    SELBAR =  !SEL ;   SELBAR =  !SEL ;   Y1 =  !((_1A & SELBAR) | (_1B & SEL)) ;   Y2 =  !((_2A & SELBAR) | (_2B & SEL)) ;   Y3 =  !((_3A & SELBAR) | (_3B & SEL)) ;   Y4 =  !((_4A & SELBAR) | (_4B & SEL)) ;');
		Connect(this.ULS258BLOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS258BLOG.pins._1A_I, this.pins._1A_I);
		Connect(this.ULS258BLOG.pins._1B_I, this.pins._1B_I);
		Connect(this.ULS258BLOG.pins._2A_I, this.pins._2A_I);
		Connect(this.ULS258BLOG.pins._2B_I, this.pins._2B_I);
		Connect(this.ULS258BLOG.pins._3A_I, this.pins._3A_I);
		Connect(this.ULS258BLOG.pins._3B_I, this.pins._3B_I);
		Connect(this.ULS258BLOG.pins._4A_I, this.pins._4A_I);
		Connect(this.ULS258BLOG.pins._4B_I, this.pins._4B_I);
		Connect(this.ULS258BLOG.pins.SEL_I, this.pins.SEL_I);
		let GBAR = new Pin();
		Connect(this.ULS258BLOG.pins.GBAR, GBAR);
		let _1A = new Pin();
		Connect(this.ULS258BLOG.pins._1A, _1A);
		let _1B = new Pin();
		Connect(this.ULS258BLOG.pins._1B, _1B);
		let _2A = new Pin();
		Connect(this.ULS258BLOG.pins._2A, _2A);
		let _2B = new Pin();
		Connect(this.ULS258BLOG.pins._2B, _2B);
		let _3A = new Pin();
		Connect(this.ULS258BLOG.pins._3A, _3A);
		let _3B = new Pin();
		Connect(this.ULS258BLOG.pins._3B, _3B);
		let _4A = new Pin();
		Connect(this.ULS258BLOG.pins._4A, _4A);
		let _4B = new Pin();
		Connect(this.ULS258BLOG.pins._4B, _4B);
		let SEL = new Pin();
		Connect(this.ULS258BLOG.pins.SEL, SEL);
		let Y1 = new Pin();
		Connect(this.ULS258BLOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS258BLOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.ULS258BLOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.ULS258BLOG.pins.Y4, Y4);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
	}
}
/**
 * 8-BIT ADDRESSABLE LATCHES
 */
class SN74LS259B extends Component {
	constructor() {
		super();
		this.pins = {
			CLRBAR: new Pin(),
			GBAR: new Pin(),
			D: new Pin(),
			S0: new Pin(),
			S1: new Pin(),
			S2: new Pin(),
			Q0: new Pin(),
			Q1: new Pin(),
			Q2: new Pin(),
			Q3: new Pin(),
			Q4: new Pin(),
			Q5: new Pin(),
			Q6: new Pin(),
			Q7: new Pin(),
		}
		this.U1 = new bufa(3);
		this.U2 = new bufa(3);
		this.U3 = new inva(3);
		this.U4 = new nanda(3,8);
		this.U5 = new nora(2,8);
		this.U6 = new ora(2,8);
		this.U7 = new dltch(1);
		this.U8 = new dltch(1);
		this.U9 = new dltch(1);
		this.U10 = new dltch(1);
		this.U11 = new dltch(1);
		this.U12 = new dltch(1);
		this.U13 = new dltch(1);
		this.U14 = new dltch(1);
	}
}
/**
 * 2-BIT BY 4-BIT BINARY MULTIPLIERS
 */
class SN74LS261 extends Component {
	constructor() {
		super();
		this.pins = {
			C_I: new Pin(),
			M2_I: new Pin(),
			M1_I: new Pin(),
			M0_I: new Pin(),
			B0_I: new Pin(),
			B1_I: new Pin(),
			B2_I: new Pin(),
			B3_I: new Pin(),
			B4_I: new Pin(),
			Q0_O: new Pin(),
			Q1_O: new Pin(),
			Q2_O: new Pin(),
			Q3_O: new Pin(),
			Q4BAR_O: new Pin(),
		}
		this.ULS261LOG = new logicexp(['C_I','M2_I','M1_I','M0_I','B0_I','B1_I','B2_I','B3_I','B4_I','Q0','Q1','Q2','Q3','Q4BAR'], ['C','M2','M1','M0','B0','B1','B2','B3','B4','Q0','Q1','Q2','Q3','Q4BAR'], []).Logic('   C =  C_I ;   M2 =  M2_I ;   M1 =  M1_I ;   M0 =  M0_I ;   B0 =  B0_I ;   B1 =  B1_I ;   B2 =  B2_I ;   B3 =  B3_I ;   B4 =  B4_I ;let    IB1 =  !B1 ;   IB1 =  !B1 ;let    IB2 =  !B2 ;   IB2 =  !B2 ;let    IB3 =  !B3 ;   IB3 =  !B3 ;let    IB4 =  !B4 ;   IB4 =  !B4 ;let    IM1 =  M0 & M1 ;   IM1 =  M0 & M1 ;let    IM2 =  !(M0 | M1) ;   IM2 =  !(M0 | M1) ;let    IM3 =  !(IM1 | IM2) ;   IM3 =  !(IM1 | IM2) ;let    IC1 =  !C ;   IC1 =  !C ;let    IC2 =  !(M2 | IC1) ;   IC2 =  !(M2 | IC1) ;let    IC3 =  !(IC1 | IC2) ;   IC3 =  !(IC1 | IC2) ;   Q0 =  (B0 & IM1 & IC2) | (!B0 & IM2 & IC3) | (B1 & IM3 & IC2) |     (IB1 & IM3 & IC3) | (IC1 & Q0) ;   Q1 =  (B1 & IM1 & IC2) | (IB1 & IM2 & IC3) | (B2 & IM3 & IC2) |     (IB2 & IM3 & IC3) | (IC1 & Q1) ;   Q2 =  (B2 & IM1 & IC2) | (IB2 & IM2 & IC3) | (B3 & IM3 & IC2) |     (IB3 & IM3 & IC3) | (IC1 & Q2) ;   Q3 =  (B3 & IM1 & IC2) | (IB3 & IM2 & IC3) | (B4 & IM3 & IC2) |     (IB4 & IM3 & IC3) | (IC1 & Q3) ;   Q4BAR =  !((B4 & IM1 & IC2) | (IB4 & IM2 & IC3) | (B4 & IM3 & IC2) |     (IB4 & IM3 & IC3) | (IC1 & !Q4BAR)) ;');
		Connect(this.ULS261LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS261LOG.pins.M2_I, this.pins.M2_I);
		Connect(this.ULS261LOG.pins.M1_I, this.pins.M1_I);
		Connect(this.ULS261LOG.pins.M0_I, this.pins.M0_I);
		Connect(this.ULS261LOG.pins.B0_I, this.pins.B0_I);
		Connect(this.ULS261LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS261LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS261LOG.pins.B3_I, this.pins.B3_I);
		Connect(this.ULS261LOG.pins.B4_I, this.pins.B4_I);
		let Q0 = new Pin();
		Connect(this.ULS261LOG.pins.Q0, Q0);
		let Q1 = new Pin();
		Connect(this.ULS261LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.ULS261LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.ULS261LOG.pins.Q3, Q3);
		let Q4BAR = new Pin();
		Connect(this.ULS261LOG.pins.Q4BAR, Q4BAR);
		let C = new Pin();
		Connect(this.ULS261LOG.pins.C, C);
		let M2 = new Pin();
		Connect(this.ULS261LOG.pins.M2, M2);
		let M1 = new Pin();
		Connect(this.ULS261LOG.pins.M1, M1);
		let M0 = new Pin();
		Connect(this.ULS261LOG.pins.M0, M0);
		let B0 = new Pin();
		Connect(this.ULS261LOG.pins.B0, B0);
		let B1 = new Pin();
		Connect(this.ULS261LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS261LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS261LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS261LOG.pins.B4, B4);
		Connect(Q0, this.pins.Q0_O);
		Connect(Q1, this.pins.Q1_O);
		Connect(Q2, this.pins.Q2_O);
		Connect(Q3, this.pins.Q3_O);
		Connect(Q4BAR, this.pins.Q4BAR_O);
	}
}
/**
 * QUADRUPLE 2-INPUT EXCLUSIVE-NOR GATES WITH OPEN-COLLECTOR OUTPUTS.
 */
class SN74LS266 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nxor();
	}
}
/**
 * OCTAL D-TYPE EDGE-TRIGGERED FLIP-FLOPS WITH CLEAR
 */
class SN74LS273 extends Component {
	constructor() {
		super();
		this.pins = {
			CLRBAR: new Pin(),
			CLK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			D3: new Pin(),
			D4: new Pin(),
			D5: new Pin(),
			D6: new Pin(),
			D7: new Pin(),
			D8: new Pin(),
			Q1: new Pin(),
			Q2: new Pin(),
			Q3: new Pin(),
			Q4: new Pin(),
			Q5: new Pin(),
			Q6: new Pin(),
			Q7: new Pin(),
			Q8: new Pin(),
		}
		this.UD = new dff(8);
		Connect(this.UD.pins.PRESET, _D_HI);
		Connect(this.UD.pins.CLEAR, this.pins.CLRBAR);
		Connect(this.UD.pins.CLOCK, this.pins.CLK);
		Connect(this.UD.pins.D0, this.pins.D1);
		Connect(this.UD.pins.D1, this.pins.D2);
		Connect(this.UD.pins.D2, this.pins.D3);
		Connect(this.UD.pins.D3, this.pins.D4);
		Connect(this.UD.pins.D4, this.pins.D5);
		Connect(this.UD.pins.D5, this.pins.D6);
		Connect(this.UD.pins.D6, this.pins.D7);
		Connect(this.UD.pins.D7, this.pins.D8);
		Connect(this.UD.pins.Q0, this.pins.Q1);
		Connect(this.UD.pins.Q1, this.pins.Q2);
		Connect(this.UD.pins.Q2, this.pins.Q3);
		Connect(this.UD.pins.Q3, this.pins.Q4);
		Connect(this.UD.pins.Q4, this.pins.Q5);
		Connect(this.UD.pins.Q5, this.pins.Q6);
		Connect(this.UD.pins.Q6, this.pins.Q7);
		Connect(this.UD.pins.Q7, this.pins.Q8);
	}
}
/**
 * QUADRUPLE SBAR-RBAR LATCHES
 */
class SN74LS279A extends Component {
	constructor() {
		super();
		this.pins = {
			_1RBAR: new Pin(),
			_1S1BAR: new Pin(),
			_1S2BAR: new Pin(),
			_2RBAR: new Pin(),
			_2SBAR: new Pin(),
			_1Q: new Pin(),
			_2Q: new Pin(),
		}
		this.U1 = new bufa(2);
		this.U2 = new nanda(3,2);
		this.U3 = new nanda(2,2);
		this.U4 = new wdthck(5);
		this.U5 = new ora(3,2);
		this.U6 = new inva(2);
		this.U7 = new buf3();
		this.U8 = new buf3();
		this.U9 = new buf3();
		this.U10 = new buf3();
	}
}
/**
 * PARITY GENERATOR_CHECKER ODD_EVEN 9-BIT
 */
class SN74LS280 extends Component {
	constructor() {
		super();
		this.pins = {
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			E_I: new Pin(),
			F_I: new Pin(),
			G_I: new Pin(),
			H_I: new Pin(),
			I_I: new Pin(),
			EOUT_O: new Pin(),
			OOUT_O: new Pin(),
		}
		this.ULS280LOG = new logicexp(['A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I','I_I'], ['EOUT','OOUT'], []).Logic('let    A    =  A_I ;   A    =  A_I ;let    B    =  B_I ;   B    =  B_I ;let    C    =  C_I ;   C    =  C_I ;let    D    =  D_I ;   D    =  D_I ;let    E    =  E_I ;   E    =  E_I ;let    F    =  F_I ;   F    =  F_I ;let    G    =  G_I ;   G    =  G_I ;let    H    =  H_I ;   H    =  H_I ;let    I    =  I_I ;   I    =  I_I ;let    ABC  =  (A & !B & !C) | (!A & B & !C) | (!A & !B & C) | (A & B & C) ;   ABC  =  (A & !B & !C) | (!A & B & !C) | (!A & !B & C) | (A & B & C) ;let    DEF  =  (D & !E & !F) | (!D & E & !F) | (!D & !E & F) | (D & E & F) ;   DEF  =  (D & !E & !F) | (!D & E & !F) | (!D & !E & F) | (D & E & F) ;let    GHI  =  (G & !H & !I) | (!G & H & !I) | (!G & !H & I) | (G & H & I) ;   GHI  =  (G & !H & !I) | (!G & H & !I) | (!G & !H & I) | (G & H & I) ;   EOUT =  (!ABC &  DEF &  GHI) | (ABC & !DEF & GHI) | (ABC & DEF & !GHI) |            (!ABC & !DEF & !GHI) ;   OOUT =  !EOUT ;');
		Connect(this.ULS280LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS280LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS280LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS280LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS280LOG.pins.E_I, this.pins.E_I);
		Connect(this.ULS280LOG.pins.F_I, this.pins.F_I);
		Connect(this.ULS280LOG.pins.G_I, this.pins.G_I);
		Connect(this.ULS280LOG.pins.H_I, this.pins.H_I);
		Connect(this.ULS280LOG.pins.I_I, this.pins.I_I);
		let EOUT = new Pin();
		Connect(this.ULS280LOG.pins.EOUT, EOUT);
		let OOUT = new Pin();
		Connect(this.ULS280LOG.pins.OOUT, OOUT);
		Connect(EOUT, this.pins.EOUT_O);
		Connect(OOUT, this.pins.OOUT_O);
	}
}
/**
 * 4-BIT BINARY FULL ADDERS WITH FAST CARRY
 */
class SN74LS283 extends Component {
	constructor() {
		super();
		this.pins = {
			C0_I: new Pin(),
			A1_I: new Pin(),
			A2_I: new Pin(),
			A3_I: new Pin(),
			A4_I: new Pin(),
			B1_I: new Pin(),
			B2_I: new Pin(),
			B3_I: new Pin(),
			B4_I: new Pin(),
			C4_O: new Pin(),
			SUM1_O: new Pin(),
			SUM2_O: new Pin(),
			SUM3_O: new Pin(),
			SUM4_O: new Pin(),
		}
		this.ULS283LOG = new logicexp(['C0_I','A1_I','A2_I','A3_I','A4_I','B1_I','B2_I','B3_I','B4_I'], ['C0','A1','A2','A3','A4','B1','B2','B3','B4','C4','SUM1','SUM2','SUM3','SUM4'], []).Logic('   C0 =  C0_I ;   A1 =  A1_I ;   A2 =  A2_I ;   A3 =  A3_I ;   A4 =  A4_I ;   B1 =  B1_I ;   B2 =  B2_I ;   B3 =  B3_I ;   B4 =  B4_I ;let    NAND4 =  !(A4 & B4) ;   NAND4 =  !(A4 & B4) ;let    NAND3 =  !(A3 & B3) ;   NAND3 =  !(A3 & B3) ;let    NAND2 =  !(A2 & B2) ;   NAND2 =  !(A2 & B2) ;let    NAND1 =  !(A1 & B1) ;   NAND1 =  !(A1 & B1) ;let    NOR4 =  !(A4 | B4) ;   NOR4 =  !(A4 | B4) ;let    NOR3 =  !(A3 | B3) ;   NOR3 =  !(A3 | B3) ;let    NOR2 =  !(A2 | B2) ;   NOR2 =  !(A2 | B2) ;let    NOR1 =  !(A1 | B1) ;   NOR1 =  !(A1 | B1) ;let    C0BAR =  !C0 ;   C0BAR =  !C0 ;   SUM1 =  (NAND1 & !NOR1) ^ C0 ;   SUM2 =  (NAND2 & !NOR2) ^ (!(NOR1 | (NAND1 & C0BAR))) ;   SUM3 =  (NAND3 & !NOR3) ^ (!(NOR2 | (NOR1 & NAND2) |            (NAND2 & NAND1 & C0BAR))) ;   SUM4 =  (NAND4 & !NOR4) ^ (!(NOR3 | (NOR2 & NAND3) |            (NOR1 & NAND3 & NAND2) | (NAND3 & NAND2 & NAND1 & C0BAR))) ;   C4 =  !( NOR4 | (NOR3 & NAND4) | (NOR2 & NAND4 & NAND3) |             (NOR1 & NAND4 & NAND3 & NAND2) |             (NAND4 & NAND3 & NAND2 & NAND1 & C0BAR) ) ;');
		Connect(this.ULS283LOG.pins.C0_I, this.pins.C0_I);
		Connect(this.ULS283LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.ULS283LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.ULS283LOG.pins.A3_I, this.pins.A3_I);
		Connect(this.ULS283LOG.pins.A4_I, this.pins.A4_I);
		Connect(this.ULS283LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS283LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS283LOG.pins.B3_I, this.pins.B3_I);
		Connect(this.ULS283LOG.pins.B4_I, this.pins.B4_I);
		let C0 = new Pin();
		Connect(this.ULS283LOG.pins.C0, C0);
		let A1 = new Pin();
		Connect(this.ULS283LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS283LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS283LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS283LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS283LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS283LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS283LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS283LOG.pins.B4, B4);
		let C4 = new Pin();
		Connect(this.ULS283LOG.pins.C4, C4);
		let SUM1 = new Pin();
		Connect(this.ULS283LOG.pins.SUM1, SUM1);
		let SUM2 = new Pin();
		Connect(this.ULS283LOG.pins.SUM2, SUM2);
		let SUM3 = new Pin();
		Connect(this.ULS283LOG.pins.SUM3, SUM3);
		let SUM4 = new Pin();
		Connect(this.ULS283LOG.pins.SUM4, SUM4);
		Connect(SUM1, this.pins.SUM1_O);
		Connect(SUM2, this.pins.SUM2_O);
		Connect(SUM3, this.pins.SUM3_O);
		Connect(SUM4, this.pins.SUM4_O);
		Connect(C4, this.pins.C4_O);
	}
}
/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74LS290 extends Component {
	constructor() {
		super();
		this.pins = {
			R91: new Pin(),
			R92: new Pin(),
			CKA: new Pin(),
			CKB: new Pin(),
			R01: new Pin(),
			R02: new Pin(),
			QA: new Pin(),
			QB: new Pin(),
			QC: new Pin(),
			QD: new Pin(),
		}
	}
}
/**
 * COUNTER BINARY 4-BIT, ASYNCHRONOUS
 */
class SN74LS293 extends Component {
	constructor() {
		super();
		this.pins = {
			CKA: new Pin(),
			CKB: new Pin(),
			R01: new Pin(),
			R02: new Pin(),
			QA: new Pin(),
			QB: new Pin(),
			QC: new Pin(),
			QD: new Pin(),
		}
	}
}
/**
 * 4-BIT RIGHT-SHIFT LEFT-SHIFT REGISTERS WITH 3-STATE OUTPUTS
 */
class SN74LS295B extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			LD_SHBAR_I: new Pin(),
			OC_I: new Pin(),
			SER_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U295BLOG = new logicexp(['CLK_I','LD_SHBAR_I','OC_I','SER_I','A_I','B_I','C_I','D_I','QA','QB','QC'], ['CLK','LD_SHBAR','OC','SER','A','B','C','D','JA','JB','JC','JD','KA','KB','KC','KD'], []).Logic('   CLK =  CLK_I ;   LD_SHBAR =  LD_SHBAR_I ;   OC =  OC_I ;   SER =  SER_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    SHIFT =  !LD_SHBAR ;   SHIFT =  !LD_SHBAR ;   KA =  !((SER & SHIFT) | (LD_SHBAR & A)) ;   KB =  !((QA & SHIFT) | (LD_SHBAR & B)) ;   KC =  !((QB & SHIFT) | (LD_SHBAR & C)) ;   KD =  !((QC & SHIFT) | (LD_SHBAR & D)) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;');
		Connect(this.U295BLOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.U295BLOG.pins.LD_SHBAR_I, this.pins.LD_SHBAR_I);
		Connect(this.U295BLOG.pins.OC_I, this.pins.OC_I);
		Connect(this.U295BLOG.pins.SER_I, this.pins.SER_I);
		Connect(this.U295BLOG.pins.A_I, this.pins.A_I);
		Connect(this.U295BLOG.pins.B_I, this.pins.B_I);
		Connect(this.U295BLOG.pins.C_I, this.pins.C_I);
		Connect(this.U295BLOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.U295BLOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.U295BLOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.U295BLOG.pins.QC, QC);
		let CLK = new Pin();
		Connect(this.U295BLOG.pins.CLK, CLK);
		let LD_SHBAR = new Pin();
		Connect(this.U295BLOG.pins.LD_SHBAR, LD_SHBAR);
		let OC = new Pin();
		Connect(this.U295BLOG.pins.OC, OC);
		let SER = new Pin();
		Connect(this.U295BLOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.U295BLOG.pins.A, A);
		let B = new Pin();
		Connect(this.U295BLOG.pins.B, B);
		let C = new Pin();
		Connect(this.U295BLOG.pins.C, C);
		let D = new Pin();
		Connect(this.U295BLOG.pins.D, D);
		let JA = new Pin();
		Connect(this.U295BLOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.U295BLOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.U295BLOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.U295BLOG.pins.JD, JD);
		let KA = new Pin();
		Connect(this.U295BLOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.U295BLOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.U295BLOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.U295BLOG.pins.KD, KD);
		this.U1 = new jkff(4);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * MULTIPLEXERS QUAD 2-INPUT WITH STORAGE
 */
class SN74LS298 extends Component {
	constructor() {
		super();
		this.pins = {
			WS_I: new Pin(),
			CLK_I: new Pin(),
			A1_I: new Pin(),
			A2_I: new Pin(),
			B1_I: new Pin(),
			B2_I: new Pin(),
			C1_I: new Pin(),
			C2_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(4);
		this.ULS298LOG = new logicexp(['WS_I','CLK_I','A1_I','A2_I','B1_I','B2_I','C1_I','C2_I','D1_I','D2_I'], ['WS','CLK','A1','A2','B1','B2','C1','C2','D1','D2','JA','JB','JC','JD','KA','KB','KC','KD'], []).Logic('   WS =  WS_I ;   CLK =  CLK_I ;   A1 =  A1_I ;   A2 =  A2_I ;   B1 =  B1_I ;   B2 =  B2_I ;   C1 =  C1_I ;   C2 =  C2_I ;   D1 =  D1_I ;   D2 =  D2_I ;let    IWS =  !WS ;   IWS =  !WS ;   KA =  !((A1 & IWS) | (WS & A2)) ;   KB =  !((B1 & IWS) | (WS & B2)) ;   KC =  !((C1 & IWS) | (WS & C2)) ;   KD =  !((D1 & IWS) | (WS & D2)) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;');
		Connect(this.ULS298LOG.pins.WS_I, this.pins.WS_I);
		Connect(this.ULS298LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS298LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.ULS298LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.ULS298LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS298LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS298LOG.pins.C1_I, this.pins.C1_I);
		Connect(this.ULS298LOG.pins.C2_I, this.pins.C2_I);
		Connect(this.ULS298LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS298LOG.pins.D2_I, this.pins.D2_I);
		let WS = new Pin();
		Connect(this.ULS298LOG.pins.WS, WS);
		let CLK = new Pin();
		Connect(this.ULS298LOG.pins.CLK, CLK);
		let A1 = new Pin();
		Connect(this.ULS298LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS298LOG.pins.A2, A2);
		let B1 = new Pin();
		Connect(this.ULS298LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS298LOG.pins.B2, B2);
		let C1 = new Pin();
		Connect(this.ULS298LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS298LOG.pins.C2, C2);
		let D1 = new Pin();
		Connect(this.ULS298LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS298LOG.pins.D2, D2);
		let JA = new Pin();
		Connect(this.ULS298LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.ULS298LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.ULS298LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.ULS298LOG.pins.JD, JD);
		let KA = new Pin();
		Connect(this.ULS298LOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.ULS298LOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.ULS298LOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.ULS298LOG.pins.KD, KD);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * 8-BIT UNIVERSAL SHIFT_STORAGE REGISTERS
 */
class SN74LS299 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			CLRBAR_I: new Pin(),
			S1_I: new Pin(),
			S0_I: new Pin(),
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			SL_I: new Pin(),
			SR_I: new Pin(),
			A_QA_B: new Pin(),
			B_QB_B: new Pin(),
			C_QC_B: new Pin(),
			D_QD_B: new Pin(),
			E_QE_B: new Pin(),
			F_QF_B: new Pin(),
			G_QG_B: new Pin(),
			H_QH_B: new Pin(),
			QAP_O: new Pin(),
			QHP_O: new Pin(),
		}
		this.ULS299LOG = new logicexp(['CLK_I','CLRBAR_I','S1_I','S0_I','G1BAR_I','G2BAR_I','SL_I','SR_I','A_QA_B','B_QB_B','C_QC_B','D_QD_B','E_QE_B','F_QF_B','G_QG_B','H_QH_B','LA_QA','LB_QB','LC_QC','LD_QD','LE_QE','LF_QF','LG_QG','LH_QH','A_QA','B_QB','C_QC','D_QD','E_QE','F_QF','G_QG','H_QH'], ['CLK','CLRBAR','S1','S0','G1BAR','G2BAR','SL','SR','A_QA','B_QB','C_QC','D_QD','E_QE','F_QF','G_QG','H_QH','D1A','D1B','D1C','D1D','D1E','D1F','D1G','D1H','OE'], []).Logic('   CLK      =  CLK_I ;   CLRBAR   =  CLRBAR_I ;   S1       =  S1_I ;   S0       =  S0_I ;   G1BAR    =  G1BAR_I ;   G2BAR    =  G2BAR_I ;   SL       =  SL_I ;   SR       =  SR_I ;   A_QA     =  A_QA_B ;   B_QB     =  B_QB_B ;   C_QC     =  C_QC_B ;   D_QD     =  D_QD_B ;   E_QE     =  E_QE_B ;   F_QF     =  F_QF_B ;   G_QG     =  G_QG_B ;   H_QH     =  H_QH_B ;let    S0S1   =  S0  & S1 ;   S0S1   =  S0  & S1 ;let    S0_S1  =  S0  & !S1 ;   S0_S1  =  S0  & !S1 ;let    _S0S1  =  !S0 & S1 ;   _S0S1  =  !S0 & S1 ;let    _S0_S1 =  !S0 & !S1 ;   _S0_S1 =  !S0 & !S1 ;   D1A =  (S0_S1 & SR )   | (_S0S1 & LB_QB)  |           (S0S1 & A_QA)   | (_S0_S1 & LA_QA) ;   D1B =  (S0_S1 & LA_QA) | (_S0S1 & LC_QC)  |           (S0S1 & B_QB)   | (_S0_S1 & LB_QB) ;   D1C =  (S0_S1 & LB_QB) | (_S0S1 & LD_QD)  |           (S0S1 & C_QC)   | (_S0_S1 & LC_QC) ;   D1D =  (S0_S1 & LC_QC) | (_S0S1 & LE_QE)  |           (S0S1 & D_QD)   | (_S0_S1 & LD_QD) ;   D1E =  (S0_S1 & LD_QD) | (_S0S1 & LF_QF)  |           (S0S1 & E_QE)   | (_S0_S1 & LE_QE) ;   D1F =  (S0_S1 & LE_QE) | (_S0S1 & LG_QG)  |           (S0S1 & F_QF)   | (_S0_S1 & LF_QF) ;   D1G =  (S0_S1 & LF_QF) | (_S0S1 & LH_QH)  |           (S0S1 & G_QG)   | (_S0_S1 & LG_QG) ;   D1H =  (S0_S1 & LG_QG) | (_S0S1 & SL )    |           (S0S1 & H_QH)   | (_S0_S1 & LH_QH) ;   OE  =  G1BAR | G2BAR | (S1 & S0) ;');
		Connect(this.ULS299LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS299LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS299LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS299LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS299LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS299LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS299LOG.pins.SL_I, this.pins.SL_I);
		Connect(this.ULS299LOG.pins.SR_I, this.pins.SR_I);
		Connect(this.ULS299LOG.pins.A_QA_B, this.pins.A_QA_B);
		Connect(this.ULS299LOG.pins.B_QB_B, this.pins.B_QB_B);
		Connect(this.ULS299LOG.pins.C_QC_B, this.pins.C_QC_B);
		Connect(this.ULS299LOG.pins.D_QD_B, this.pins.D_QD_B);
		Connect(this.ULS299LOG.pins.E_QE_B, this.pins.E_QE_B);
		Connect(this.ULS299LOG.pins.F_QF_B, this.pins.F_QF_B);
		Connect(this.ULS299LOG.pins.G_QG_B, this.pins.G_QG_B);
		Connect(this.ULS299LOG.pins.H_QH_B, this.pins.H_QH_B);
		let LA_QA = new Pin();
		Connect(this.ULS299LOG.pins.LA_QA, LA_QA);
		let LB_QB = new Pin();
		Connect(this.ULS299LOG.pins.LB_QB, LB_QB);
		let LC_QC = new Pin();
		Connect(this.ULS299LOG.pins.LC_QC, LC_QC);
		let LD_QD = new Pin();
		Connect(this.ULS299LOG.pins.LD_QD, LD_QD);
		let LE_QE = new Pin();
		Connect(this.ULS299LOG.pins.LE_QE, LE_QE);
		let LF_QF = new Pin();
		Connect(this.ULS299LOG.pins.LF_QF, LF_QF);
		let LG_QG = new Pin();
		Connect(this.ULS299LOG.pins.LG_QG, LG_QG);
		let LH_QH = new Pin();
		Connect(this.ULS299LOG.pins.LH_QH, LH_QH);
		let A_QA = new Pin();
		Connect(this.ULS299LOG.pins.A_QA, A_QA);
		let B_QB = new Pin();
		Connect(this.ULS299LOG.pins.B_QB, B_QB);
		let C_QC = new Pin();
		Connect(this.ULS299LOG.pins.C_QC, C_QC);
		let D_QD = new Pin();
		Connect(this.ULS299LOG.pins.D_QD, D_QD);
		let E_QE = new Pin();
		Connect(this.ULS299LOG.pins.E_QE, E_QE);
		let F_QF = new Pin();
		Connect(this.ULS299LOG.pins.F_QF, F_QF);
		let G_QG = new Pin();
		Connect(this.ULS299LOG.pins.G_QG, G_QG);
		let H_QH = new Pin();
		Connect(this.ULS299LOG.pins.H_QH, H_QH);
		let CLK = new Pin();
		Connect(this.ULS299LOG.pins.CLK, CLK);
		let CLRBAR = new Pin();
		Connect(this.ULS299LOG.pins.CLRBAR, CLRBAR);
		let S1 = new Pin();
		Connect(this.ULS299LOG.pins.S1, S1);
		let S0 = new Pin();
		Connect(this.ULS299LOG.pins.S0, S0);
		let G1BAR = new Pin();
		Connect(this.ULS299LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS299LOG.pins.G2BAR, G2BAR);
		let SL = new Pin();
		Connect(this.ULS299LOG.pins.SL, SL);
		let SR = new Pin();
		Connect(this.ULS299LOG.pins.SR, SR);
		let D1A = new Pin();
		Connect(this.ULS299LOG.pins.D1A, D1A);
		let D1B = new Pin();
		Connect(this.ULS299LOG.pins.D1B, D1B);
		let D1C = new Pin();
		Connect(this.ULS299LOG.pins.D1C, D1C);
		let D1D = new Pin();
		Connect(this.ULS299LOG.pins.D1D, D1D);
		let D1E = new Pin();
		Connect(this.ULS299LOG.pins.D1E, D1E);
		let D1F = new Pin();
		Connect(this.ULS299LOG.pins.D1F, D1F);
		let D1G = new Pin();
		Connect(this.ULS299LOG.pins.D1G, D1G);
		let D1H = new Pin();
		Connect(this.ULS299LOG.pins.D1H, D1H);
		let OE = new Pin();
		Connect(this.ULS299LOG.pins.OE, OE);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, CLRBAR);
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.D0, D1A);
		Connect(this.U1.pins.D1, D1B);
		Connect(this.U1.pins.D2, D1C);
		Connect(this.U1.pins.D3, D1D);
		Connect(this.U1.pins.D4, D1E);
		Connect(this.U1.pins.D5, D1F);
		Connect(this.U1.pins.D6, D1G);
		Connect(this.U1.pins.D7, D1H);
		Connect(this.U1.pins.Q0, LA_QA);
		Connect(this.U1.pins.Q1, LB_QB);
		Connect(this.U1.pins.Q2, LC_QC);
		Connect(this.U1.pins.Q3, LD_QD);
		Connect(this.U1.pins.Q4, LE_QE);
		Connect(this.U1.pins.Q5, LF_QF);
		Connect(this.U1.pins.Q6, LG_QG);
		Connect(this.U1.pins.Q7, LH_QH);
		Connect(LA_QA, this.pins.A_QA_B);
		Connect(LB_QB, this.pins.B_QB_B);
		Connect(LC_QC, this.pins.C_QC_B);
		Connect(LD_QD, this.pins.D_QD_B);
		Connect(LE_QE, this.pins.E_QE_B);
		Connect(LF_QF, this.pins.F_QF_B);
		Connect(LG_QG, this.pins.G_QG_B);
		Connect(LH_QH, this.pins.H_QH_B);
		Connect(LA_QA, this.pins.QAP_O);
		Connect(LH_QH, this.pins.QHP_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH SIGN EXTEND
 */
class SN74LS322A extends Component {
	constructor() {
		super();
		this.pins = {
			OEBAR_I: new Pin(),
			GBAR_I: new Pin(),
			CLK_I: new Pin(),
			S_PBAR_I: new Pin(),
			SEBAR_I: new Pin(),
			CLRBAR_I: new Pin(),
			DS_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			A_QA_B: new Pin(),
			B_QB_B: new Pin(),
			C_QC_B: new Pin(),
			D_QD_B: new Pin(),
			E_QE_B: new Pin(),
			F_QF_B: new Pin(),
			G_QG_B: new Pin(),
			H_QH_B: new Pin(),
			QHP_O: new Pin(),
		}
		this.U322LOG = new logicexp(['OEBAR_I','GBAR_I','CLK_I','S_PBAR_I','SEBAR_I','CLRBAR_I','DS_I','D0_I','D1_I','A_QA_B','B_QB_B','C_QC_B','D_QD_B','E_QE_B','F_QF_B','G_QG_B','H_QH_B','LA_QA','LB_QB','LC_QC','LD_QD','LE_QE','LF_QF','LG_QG','LH_QH','A_QA','B_QB','C_QC','D_QD','E_QE','F_QF','G_QG','H_QH'], ['OEBAR','GBAR','CLK','S_PBAR','SEBAR','CLRBAR','DS','D0','D1','A_QA','B_QB','C_QC','D_QD','E_QE','F_QF','G_QG','H_QH','D1A','D1B','D1C','D1D','D1E','D1F','D1G','D1H','OE'], []).Logic('   OEBAR    =  OEBAR_I ;   CLRBAR   =  CLRBAR_I ;   CLK      =  CLK_I ;   GBAR     =  GBAR_I ;   S_PBAR   =  S_PBAR_I ;   SEBAR    =  SEBAR_I ;   DS       =  DS_I ;   D1       =  D1_I ;   D0       =  D0_I ;   A_QA     =  A_QA_B ;   B_QB     =  B_QB_B ;   C_QC     =  C_QC_B ;   D_QD     =  D_QD_B ;   E_QE     =  E_QE_B ;   F_QF     =  F_QF_B ;   G_QG     =  G_QG_B ;   H_QH     =  H_QH_B ;let    GP    =  !(GBAR | S_PBAR) ;   GP    =  !(GBAR | S_PBAR) ;let    GS    =  !(GBAR | !(GBAR | S_PBAR)) ;   GS    =  !(GBAR | !(GBAR | S_PBAR)) ;   OE    =  OEBAR | GP ;   D1A   =  (!DS & GS & SEBAR & D0) | (DS & GS & SEBAR & D1) |            (GP & A_QA) | (!SEBAR & GS & LA_QA) | (LA_QA & GBAR) ;   D1B   =  (GS & LA_QA) | (GP & B_QB) | (GBAR & LB_QB) ;   D1C   =  (GS & LB_QB) | (GP & C_QC) | (GBAR & LC_QC) ;   D1D   =  (GS & LC_QC) | (GP & D_QD) | (GBAR & LD_QD) ;   D1E   =  (GS & LD_QD) | (GP & E_QE) | (GBAR & LE_QE) ;   D1F   =  (GS & LE_QE) | (GP & F_QF) | (GBAR & LF_QF) ;   D1G   =  (GS & LF_QF) | (GP & G_QG) | (GBAR & LG_QG) ;   D1H   =  (GS & LG_QG) | (GP & H_QH) | (GBAR & LH_QH) ;');
		Connect(this.U322LOG.pins.OEBAR_I, this.pins.OEBAR_I);
		Connect(this.U322LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.U322LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.U322LOG.pins.S_PBAR_I, this.pins.S_PBAR_I);
		Connect(this.U322LOG.pins.SEBAR_I, this.pins.SEBAR_I);
		Connect(this.U322LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.U322LOG.pins.DS_I, this.pins.DS_I);
		Connect(this.U322LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.U322LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.U322LOG.pins.A_QA_B, this.pins.A_QA_B);
		Connect(this.U322LOG.pins.B_QB_B, this.pins.B_QB_B);
		Connect(this.U322LOG.pins.C_QC_B, this.pins.C_QC_B);
		Connect(this.U322LOG.pins.D_QD_B, this.pins.D_QD_B);
		Connect(this.U322LOG.pins.E_QE_B, this.pins.E_QE_B);
		Connect(this.U322LOG.pins.F_QF_B, this.pins.F_QF_B);
		Connect(this.U322LOG.pins.G_QG_B, this.pins.G_QG_B);
		Connect(this.U322LOG.pins.H_QH_B, this.pins.H_QH_B);
		let LA_QA = new Pin();
		Connect(this.U322LOG.pins.LA_QA, LA_QA);
		let LB_QB = new Pin();
		Connect(this.U322LOG.pins.LB_QB, LB_QB);
		let LC_QC = new Pin();
		Connect(this.U322LOG.pins.LC_QC, LC_QC);
		let LD_QD = new Pin();
		Connect(this.U322LOG.pins.LD_QD, LD_QD);
		let LE_QE = new Pin();
		Connect(this.U322LOG.pins.LE_QE, LE_QE);
		let LF_QF = new Pin();
		Connect(this.U322LOG.pins.LF_QF, LF_QF);
		let LG_QG = new Pin();
		Connect(this.U322LOG.pins.LG_QG, LG_QG);
		let LH_QH = new Pin();
		Connect(this.U322LOG.pins.LH_QH, LH_QH);
		let A_QA = new Pin();
		Connect(this.U322LOG.pins.A_QA, A_QA);
		let B_QB = new Pin();
		Connect(this.U322LOG.pins.B_QB, B_QB);
		let C_QC = new Pin();
		Connect(this.U322LOG.pins.C_QC, C_QC);
		let D_QD = new Pin();
		Connect(this.U322LOG.pins.D_QD, D_QD);
		let E_QE = new Pin();
		Connect(this.U322LOG.pins.E_QE, E_QE);
		let F_QF = new Pin();
		Connect(this.U322LOG.pins.F_QF, F_QF);
		let G_QG = new Pin();
		Connect(this.U322LOG.pins.G_QG, G_QG);
		let H_QH = new Pin();
		Connect(this.U322LOG.pins.H_QH, H_QH);
		let OEBAR = new Pin();
		Connect(this.U322LOG.pins.OEBAR, OEBAR);
		let GBAR = new Pin();
		Connect(this.U322LOG.pins.GBAR, GBAR);
		let CLK = new Pin();
		Connect(this.U322LOG.pins.CLK, CLK);
		let S_PBAR = new Pin();
		Connect(this.U322LOG.pins.S_PBAR, S_PBAR);
		let SEBAR = new Pin();
		Connect(this.U322LOG.pins.SEBAR, SEBAR);
		let CLRBAR = new Pin();
		Connect(this.U322LOG.pins.CLRBAR, CLRBAR);
		let DS = new Pin();
		Connect(this.U322LOG.pins.DS, DS);
		let D0 = new Pin();
		Connect(this.U322LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.U322LOG.pins.D1, D1);
		let D1A = new Pin();
		Connect(this.U322LOG.pins.D1A, D1A);
		let D1B = new Pin();
		Connect(this.U322LOG.pins.D1B, D1B);
		let D1C = new Pin();
		Connect(this.U322LOG.pins.D1C, D1C);
		let D1D = new Pin();
		Connect(this.U322LOG.pins.D1D, D1D);
		let D1E = new Pin();
		Connect(this.U322LOG.pins.D1E, D1E);
		let D1F = new Pin();
		Connect(this.U322LOG.pins.D1F, D1F);
		let D1G = new Pin();
		Connect(this.U322LOG.pins.D1G, D1G);
		let D1H = new Pin();
		Connect(this.U322LOG.pins.D1H, D1H);
		let OE = new Pin();
		Connect(this.U322LOG.pins.OE, OE);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, CLRBAR);
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.D0, D1A);
		Connect(this.U1.pins.D1, D1B);
		Connect(this.U1.pins.D2, D1C);
		Connect(this.U1.pins.D3, D1D);
		Connect(this.U1.pins.D4, D1E);
		Connect(this.U1.pins.D5, D1F);
		Connect(this.U1.pins.D6, D1G);
		Connect(this.U1.pins.D7, D1H);
		Connect(this.U1.pins.Q0, LA_QA);
		Connect(this.U1.pins.Q1, LB_QB);
		Connect(this.U1.pins.Q2, LC_QC);
		Connect(this.U1.pins.Q3, LD_QD);
		Connect(this.U1.pins.Q4, LE_QE);
		Connect(this.U1.pins.Q5, LF_QF);
		Connect(this.U1.pins.Q6, LG_QG);
		Connect(this.U1.pins.Q7, LH_QH);
		Connect(LA_QA, this.pins.A_QA_B);
		Connect(LB_QB, this.pins.B_QB_B);
		Connect(LC_QC, this.pins.C_QC_B);
		Connect(LD_QD, this.pins.D_QD_B);
		Connect(LE_QE, this.pins.E_QE_B);
		Connect(LF_QF, this.pins.F_QF_B);
		Connect(LG_QG, this.pins.G_QG_B);
		Connect(LH_QH, this.pins.H_QH_B);
		Connect(LH_QH, this.pins.QHP_O);
	}
}
/**
 * 8-BIT UNIVERSAL SHIFT_STORAGE REGISTERS
 */
class SN74LS323 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			CLRBAR_I: new Pin(),
			S1_I: new Pin(),
			S0_I: new Pin(),
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			SL_I: new Pin(),
			SR_I: new Pin(),
			A_QA_B: new Pin(),
			B_QB_B: new Pin(),
			C_QC_B: new Pin(),
			D_QD_B: new Pin(),
			E_QE_B: new Pin(),
			F_QF_B: new Pin(),
			G_QG_B: new Pin(),
			H_QH_B: new Pin(),
			QAP_O: new Pin(),
			QHP_O: new Pin(),
		}
		this.ULS323LOG = new logicexp(['CLK_I','CLRBAR_I','S1_I','S0_I','G1BAR_I','G2BAR_I','SL_I','SR_I','A_QA_B','B_QB_B','C_QC_B','D_QD_B','E_QE_B','F_QF_B','G_QG_B','H_QH_B','LA_QA','LB_QB','LC_QC','LD_QD','LE_QE','LF_QF','LG_QG','LH_QH','A_QA','B_QB','C_QC','D_QD','E_QE','F_QF','G_QG','H_QH'], ['CLK','CLRBAR','S1','S0','G1BAR','G2BAR','SL','SR','A_QA','B_QB','C_QC','D_QD','E_QE','F_QF','G_QG','H_QH','D1A','D1B','D1C','D1D','D1E','D1F','D1G','D1H','OE'], []).Logic('   CLK      =  CLK_I ;   CLRBAR   =  CLRBAR_I ;   S1       =  S1_I ;   S0       =  S0_I ;   G1BAR    =  G1BAR_I ;   G2BAR    =  G2BAR_I ;   SL       =  SL_I ;   SR       =  SR_I ;   A_QA     =  A_QA_B ;   B_QB     =  B_QB_B ;   C_QC     =  C_QC_B ;   D_QD     =  D_QD_B ;   E_QE     =  E_QE_B ;   F_QF     =  F_QF_B ;   G_QG     =  G_QG_B ;   H_QH     =  H_QH_B ;let    SA     =  !(S0 | !CLRBAR) ;   SA     =  !(S0 | !CLRBAR) ;let    SB     =  !(SA   | !CLRBAR) ;   SB     =  !(SA   | !CLRBAR) ;let    S0S1   =  SB  & S1 ;   S0S1   =  SB  & S1 ;let    S0_S1  =  SB  & !S1 ;   S0_S1  =  SB  & !S1 ;let    _S0S1  =  SA  & S1 ;   _S0S1  =  SA  & S1 ;let    _S0_S1 =  SA  & !S1 ;   _S0_S1 =  SA  & !S1 ;   D1A =  (S0_S1 & SR ) | (_S0S1 & LB_QB) | (S0S1 & A_QA) | (_S0_S1 & LA_QA) ;   D1B =  (S0_S1 & LA_QA) | (_S0S1 & LC_QC) | (S0S1 & B_QB)         | (_S0_S1 & LB_QB) ;   D1C =  (S0_S1 & LB_QB) | (_S0S1 & LD_QD) | (S0S1 & C_QC)         | (_S0_S1 & LC_QC) ;   D1D =  (S0_S1 & LC_QC) | (_S0S1 & LE_QE) | (S0S1 & D_QD)         | (_S0_S1 & LD_QD) ;   D1E =  (S0_S1 & LD_QD) | (_S0S1 & LF_QF) | (S0S1 & E_QE)         | (_S0_S1 & LE_QE) ;   D1F =  (S0_S1 & LE_QE) | (_S0S1 & LG_QG) | (S0S1 & F_QF)         | (_S0_S1 & LF_QF) ;   D1G =  (S0_S1 & LF_QF) | (_S0S1 & LH_QH) | (S0S1 & G_QG)         | (_S0_S1 & LG_QG) ;   D1H =  (S0_S1 & LG_QG) | (_S0S1 & SL ) | (S0S1 & H_QH)         | (_S0_S1 & LH_QH) ;   OE  =  G1BAR | G2BAR | (S1 & S0) ;');
		Connect(this.ULS323LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS323LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.ULS323LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS323LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS323LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS323LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS323LOG.pins.SL_I, this.pins.SL_I);
		Connect(this.ULS323LOG.pins.SR_I, this.pins.SR_I);
		Connect(this.ULS323LOG.pins.A_QA_B, this.pins.A_QA_B);
		Connect(this.ULS323LOG.pins.B_QB_B, this.pins.B_QB_B);
		Connect(this.ULS323LOG.pins.C_QC_B, this.pins.C_QC_B);
		Connect(this.ULS323LOG.pins.D_QD_B, this.pins.D_QD_B);
		Connect(this.ULS323LOG.pins.E_QE_B, this.pins.E_QE_B);
		Connect(this.ULS323LOG.pins.F_QF_B, this.pins.F_QF_B);
		Connect(this.ULS323LOG.pins.G_QG_B, this.pins.G_QG_B);
		Connect(this.ULS323LOG.pins.H_QH_B, this.pins.H_QH_B);
		let LA_QA = new Pin();
		Connect(this.ULS323LOG.pins.LA_QA, LA_QA);
		let LB_QB = new Pin();
		Connect(this.ULS323LOG.pins.LB_QB, LB_QB);
		let LC_QC = new Pin();
		Connect(this.ULS323LOG.pins.LC_QC, LC_QC);
		let LD_QD = new Pin();
		Connect(this.ULS323LOG.pins.LD_QD, LD_QD);
		let LE_QE = new Pin();
		Connect(this.ULS323LOG.pins.LE_QE, LE_QE);
		let LF_QF = new Pin();
		Connect(this.ULS323LOG.pins.LF_QF, LF_QF);
		let LG_QG = new Pin();
		Connect(this.ULS323LOG.pins.LG_QG, LG_QG);
		let LH_QH = new Pin();
		Connect(this.ULS323LOG.pins.LH_QH, LH_QH);
		let A_QA = new Pin();
		Connect(this.ULS323LOG.pins.A_QA, A_QA);
		let B_QB = new Pin();
		Connect(this.ULS323LOG.pins.B_QB, B_QB);
		let C_QC = new Pin();
		Connect(this.ULS323LOG.pins.C_QC, C_QC);
		let D_QD = new Pin();
		Connect(this.ULS323LOG.pins.D_QD, D_QD);
		let E_QE = new Pin();
		Connect(this.ULS323LOG.pins.E_QE, E_QE);
		let F_QF = new Pin();
		Connect(this.ULS323LOG.pins.F_QF, F_QF);
		let G_QG = new Pin();
		Connect(this.ULS323LOG.pins.G_QG, G_QG);
		let H_QH = new Pin();
		Connect(this.ULS323LOG.pins.H_QH, H_QH);
		let CLK = new Pin();
		Connect(this.ULS323LOG.pins.CLK, CLK);
		let CLRBAR = new Pin();
		Connect(this.ULS323LOG.pins.CLRBAR, CLRBAR);
		let S1 = new Pin();
		Connect(this.ULS323LOG.pins.S1, S1);
		let S0 = new Pin();
		Connect(this.ULS323LOG.pins.S0, S0);
		let G1BAR = new Pin();
		Connect(this.ULS323LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS323LOG.pins.G2BAR, G2BAR);
		let SL = new Pin();
		Connect(this.ULS323LOG.pins.SL, SL);
		let SR = new Pin();
		Connect(this.ULS323LOG.pins.SR, SR);
		let D1A = new Pin();
		Connect(this.ULS323LOG.pins.D1A, D1A);
		let D1B = new Pin();
		Connect(this.ULS323LOG.pins.D1B, D1B);
		let D1C = new Pin();
		Connect(this.ULS323LOG.pins.D1C, D1C);
		let D1D = new Pin();
		Connect(this.ULS323LOG.pins.D1D, D1D);
		let D1E = new Pin();
		Connect(this.ULS323LOG.pins.D1E, D1E);
		let D1F = new Pin();
		Connect(this.ULS323LOG.pins.D1F, D1F);
		let D1G = new Pin();
		Connect(this.ULS323LOG.pins.D1G, D1G);
		let D1H = new Pin();
		Connect(this.ULS323LOG.pins.D1H, D1H);
		let OE = new Pin();
		Connect(this.ULS323LOG.pins.OE, OE);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, CLRBAR);
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.D0, D1A);
		Connect(this.U1.pins.D1, D1B);
		Connect(this.U1.pins.D2, D1C);
		Connect(this.U1.pins.D3, D1D);
		Connect(this.U1.pins.D4, D1E);
		Connect(this.U1.pins.D5, D1F);
		Connect(this.U1.pins.D6, D1G);
		Connect(this.U1.pins.D7, D1H);
		Connect(this.U1.pins.Q0, LA_QA);
		Connect(this.U1.pins.Q1, LB_QB);
		Connect(this.U1.pins.Q2, LC_QC);
		Connect(this.U1.pins.Q3, LD_QD);
		Connect(this.U1.pins.Q4, LE_QE);
		Connect(this.U1.pins.Q5, LF_QF);
		Connect(this.U1.pins.Q6, LG_QG);
		Connect(this.U1.pins.Q7, LH_QH);
		Connect(LA_QA, this.pins.A_QA_B);
		Connect(LB_QB, this.pins.B_QB_B);
		Connect(LC_QC, this.pins.C_QC_B);
		Connect(LD_QD, this.pins.D_QD_B);
		Connect(LE_QE, this.pins.E_QE_B);
		Connect(LF_QF, this.pins.F_QF_B);
		Connect(LG_QG, this.pins.G_QG_B);
		Connect(LH_QH, this.pins.H_QH_B);
		Connect(LA_QA, this.pins.QAP_O);
		Connect(LH_QH, this.pins.QHP_O);
	}
}
/**
 * DECODER_DRIVER BCD-7 SEGMENT WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS347 extends Component {
	constructor() {
		super();
		this.pins = {
			INA_I: new Pin(),
			INB_I: new Pin(),
			INC_I: new Pin(),
			IND_I: new Pin(),
			RBIBAR_I: new Pin(),
			LTBAR_I: new Pin(),
			BIBAR_RBOBAR_B: new Pin(),
			OUTA_O: new Pin(),
			OUTB_O: new Pin(),
			OUTC_O: new Pin(),
			OUTD_O: new Pin(),
			OUTE_O: new Pin(),
			OUTF_O: new Pin(),
			OUTG_O: new Pin(),
		}
	}
}
/**
 * PRIORITY ENCODER 8-3 LINE WITH 3-STATE OUTPUTS
 */
class SN74LS348 extends Component {
	constructor() {
		super();
		this.pins = {
			EI_I: new Pin(),
			IN0_I: new Pin(),
			IN1_I: new Pin(),
			IN2_I: new Pin(),
			IN3_I: new Pin(),
			IN4_I: new Pin(),
			IN5_I: new Pin(),
			IN6_I: new Pin(),
			IN7_I: new Pin(),
			A0_O: new Pin(),
			A1_O: new Pin(),
			A2_O: new Pin(),
			EO_O: new Pin(),
			GS_O: new Pin(),
		}
		this.ULS348LOG = new logicexp(['EI_I','IN0_I','IN1_I','IN2_I','IN3_I','IN4_I','IN5_I','IN6_I','IN7_I'], ['EI','IN0','IN1','IN2','IN3','IN4','IN5','IN6','IN7','A0','A1','A2','EO','GS','EIEO'], []).Logic(' EI     =  EI_I ; IN0    =  IN0_I ; IN1    =  IN1_I ; IN2    =  IN2_I ; IN3    =  IN3_I ; IN4    =  IN4_I ; IN5    =  IN5_I ; IN6    =  IN6_I ; IN7    =  IN7_I ;let  EIBAR  =  !EI ; EIBAR  =  !EI ;let  IN0BAR =  !IN0 ; IN0BAR =  !IN0 ;let  IN1BAR =  !IN1 ; IN1BAR =  !IN1 ;let  IN2BAR =  !IN2 ; IN2BAR =  !IN2 ;let  IN3BAR =  !IN3 ; IN3BAR =  !IN3 ;let  IN4BAR =  !IN4 ; IN4BAR =  !IN4 ;let  IN5BAR =  !IN5 ; IN5BAR =  !IN5 ;let  IN6BAR =  !IN6 ; IN6BAR =  !IN6 ;let  IN7BAR =  !IN7 ; IN7BAR =  !IN7 ; EO     =  !(IN0 & IN1 & IN2 & IN3 & IN4 & IN5 & IN6 & IN7 & EIBAR) ; EIEO   =  EO & EIBAR ; GS     =  !EIEO ; A0     =  !(EIEO & ((IN1BAR & IN2 & IN4 & IN6) |                       (IN3BAR & IN4 & IN6) | (IN5BAR & IN6) | IN7BAR)) ; A1     =  !(EIEO & ((IN2BAR & IN4 & IN5) |                       (IN3BAR & IN4 & IN5) | IN6BAR | IN7BAR)) ; A2     =  !(EIEO & (IN4BAR | IN5BAR | IN6BAR | IN7BAR)) ;');
		Connect(this.ULS348LOG.pins.EI_I, this.pins.EI_I);
		Connect(this.ULS348LOG.pins.IN0_I, this.pins.IN0_I);
		Connect(this.ULS348LOG.pins.IN1_I, this.pins.IN1_I);
		Connect(this.ULS348LOG.pins.IN2_I, this.pins.IN2_I);
		Connect(this.ULS348LOG.pins.IN3_I, this.pins.IN3_I);
		Connect(this.ULS348LOG.pins.IN4_I, this.pins.IN4_I);
		Connect(this.ULS348LOG.pins.IN5_I, this.pins.IN5_I);
		Connect(this.ULS348LOG.pins.IN6_I, this.pins.IN6_I);
		Connect(this.ULS348LOG.pins.IN7_I, this.pins.IN7_I);
		let EI = new Pin();
		Connect(this.ULS348LOG.pins.EI, EI);
		let IN0 = new Pin();
		Connect(this.ULS348LOG.pins.IN0, IN0);
		let IN1 = new Pin();
		Connect(this.ULS348LOG.pins.IN1, IN1);
		let IN2 = new Pin();
		Connect(this.ULS348LOG.pins.IN2, IN2);
		let IN3 = new Pin();
		Connect(this.ULS348LOG.pins.IN3, IN3);
		let IN4 = new Pin();
		Connect(this.ULS348LOG.pins.IN4, IN4);
		let IN5 = new Pin();
		Connect(this.ULS348LOG.pins.IN5, IN5);
		let IN6 = new Pin();
		Connect(this.ULS348LOG.pins.IN6, IN6);
		let IN7 = new Pin();
		Connect(this.ULS348LOG.pins.IN7, IN7);
		let A0 = new Pin();
		Connect(this.ULS348LOG.pins.A0, A0);
		let A1 = new Pin();
		Connect(this.ULS348LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS348LOG.pins.A2, A2);
		let EO = new Pin();
		Connect(this.ULS348LOG.pins.EO, EO);
		let GS = new Pin();
		Connect(this.ULS348LOG.pins.GS, GS);
		let EIEO = new Pin();
		Connect(this.ULS348LOG.pins.EIEO, EIEO);
		Connect(A0, this.pins.A0_O);
		Connect(A1, this.pins.A1_O);
		Connect(A2, this.pins.A2_O);
		Connect(GS, this.pins.GS_O);
		Connect(EO, this.pins.EO_O);
	}
}
/**
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74LS352 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			_1C0_I: new Pin(),
			_1C1_I: new Pin(),
			_1C2_I: new Pin(),
			_1C3_I: new Pin(),
			_2C0_I: new Pin(),
			_2C1_I: new Pin(),
			_2C2_I: new Pin(),
			_2C3_I: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
		}
		this.ULS352LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','_1C0_I','_1C1_I','_1C2_I','_1C3_I','_2C0_I','_2C1_I','_2C2_I','_2C3_I'], ['G1BAR','G2BAR','A','B','_1C0','_1C1','_1C2','_1C3','_2C0','_2C1','_2C2','_2C3','Y1','Y2'], []).Logic('   G1BAR =  G1BAR_I ;   G2BAR =  G2BAR_I ;   A =  A_I ;   B =  B_I ;   _1C0 =  _1C0_I ;   _1C1 =  _1C1_I ;   _1C2 =  _1C2_I ;   _1C3 =  _1C3_I ;   _2C0 =  _2C0_I ;   _2C1 =  _2C1_I ;   _2C2 =  _2C2_I ;   _2C3 =  _2C3_I ;let    G1 =  !G1BAR ;   G1 =  !G1BAR ;let    G2 =  !G2BAR ;   G2 =  !G2BAR ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    I0 =  G1 & BBAR & ABAR & _1C0 ;   I0 =  G1 & BBAR & ABAR & _1C0 ;let    I1 =  G1 & BBAR & A    & _1C1 ;   I1 =  G1 & BBAR & A    & _1C1 ;let    I2 =  G1 & B    & ABAR & _1C2 ;   I2 =  G1 & B    & ABAR & _1C2 ;let    I3 =  G1 & B    & A    & _1C3 ;   I3 =  G1 & B    & A    & _1C3 ;let    I4 =  G2 & BBAR & ABAR & _2C0 ;   I4 =  G2 & BBAR & ABAR & _2C0 ;let    I5 =  G2 & BBAR & A    & _2C1 ;   I5 =  G2 & BBAR & A    & _2C1 ;let    I6 =  G2 & B    & ABAR & _2C2 ;   I6 =  G2 & B    & ABAR & _2C2 ;let    I7 =  G2 & B    & A    & _2C3 ;   I7 =  G2 & B    & A    & _2C3 ;   Y1 =  !(I0 | I1 | I2 | I3) ;   Y2 =  !(I4 | I5 | I6 | I7) ;');
		Connect(this.ULS352LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS352LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS352LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS352LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS352LOG.pins._1C0_I, this.pins._1C0_I);
		Connect(this.ULS352LOG.pins._1C1_I, this.pins._1C1_I);
		Connect(this.ULS352LOG.pins._1C2_I, this.pins._1C2_I);
		Connect(this.ULS352LOG.pins._1C3_I, this.pins._1C3_I);
		Connect(this.ULS352LOG.pins._2C0_I, this.pins._2C0_I);
		Connect(this.ULS352LOG.pins._2C1_I, this.pins._2C1_I);
		Connect(this.ULS352LOG.pins._2C2_I, this.pins._2C2_I);
		Connect(this.ULS352LOG.pins._2C3_I, this.pins._2C3_I);
		let G1BAR = new Pin();
		Connect(this.ULS352LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS352LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.ULS352LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS352LOG.pins.B, B);
		let _1C0 = new Pin();
		Connect(this.ULS352LOG.pins._1C0, _1C0);
		let _1C1 = new Pin();
		Connect(this.ULS352LOG.pins._1C1, _1C1);
		let _1C2 = new Pin();
		Connect(this.ULS352LOG.pins._1C2, _1C2);
		let _1C3 = new Pin();
		Connect(this.ULS352LOG.pins._1C3, _1C3);
		let _2C0 = new Pin();
		Connect(this.ULS352LOG.pins._2C0, _2C0);
		let _2C1 = new Pin();
		Connect(this.ULS352LOG.pins._2C1, _2C1);
		let _2C2 = new Pin();
		Connect(this.ULS352LOG.pins._2C2, _2C2);
		let _2C3 = new Pin();
		Connect(this.ULS352LOG.pins._2C3, _2C3);
		let Y1 = new Pin();
		Connect(this.ULS352LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS352LOG.pins.Y2, Y2);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
	}
}
/**
 * DUAL 1-OF-4 DATA SELECTORS_MULTIPLEXERS WITH 3-STATE OUTPUTS
 */
class SN74LS353 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			_1C0_I: new Pin(),
			_1C1_I: new Pin(),
			_1C2_I: new Pin(),
			_1C3_I: new Pin(),
			_2C0_I: new Pin(),
			_2C1_I: new Pin(),
			_2C2_I: new Pin(),
			_2C3_I: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
		}
		this.ULS353LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','_1C0_I','_1C1_I','_1C2_I','_1C3_I','_2C0_I','_2C1_I','_2C2_I','_2C3_I'], ['G1BAR','G2BAR','A','B','_1C0','_1C1','_1C2','_1C3','_2C0','_2C1','_2C2','_2C3','Y1','Y2'], []).Logic('   G1BAR =  G1BAR_I ;   G2BAR =  G2BAR_I ;   A =  A_I ;   B =  B_I ;   _1C0 =  _1C0_I ;   _1C1 =  _1C1_I ;   _1C2 =  _1C2_I ;   _1C3 =  _1C3_I ;   _2C0 =  _2C0_I ;   _2C1 =  _2C1_I ;   _2C2 =  _2C2_I ;   _2C3 =  _2C3_I ;let    G1 =  !G1BAR ;   G1 =  !G1BAR ;let    G2 =  !G2BAR ;   G2 =  !G2BAR ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    I0 =  G1 & BBAR & ABAR & _1C0 ;   I0 =  G1 & BBAR & ABAR & _1C0 ;let    I1 =  G1 & BBAR & A    & _1C1 ;   I1 =  G1 & BBAR & A    & _1C1 ;let    I2 =  G1 & B    & ABAR & _1C2 ;   I2 =  G1 & B    & ABAR & _1C2 ;let    I3 =  G1 & B    & A    & _1C3 ;   I3 =  G1 & B    & A    & _1C3 ;let    I4 =  G2 & BBAR & ABAR & _2C0 ;   I4 =  G2 & BBAR & ABAR & _2C0 ;let    I5 =  G2 & BBAR & A    & _2C1 ;   I5 =  G2 & BBAR & A    & _2C1 ;let    I6 =  G2 & B    & ABAR & _2C2 ;   I6 =  G2 & B    & ABAR & _2C2 ;let    I7 =  G2 & B    & A    & _2C3 ;   I7 =  G2 & B    & A    & _2C3 ;   Y1 =  !(I0 | I1 | I2 | I3) ;   Y2 =  !(I4 | I5 | I6 | I7) ;');
		Connect(this.ULS353LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS353LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS353LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS353LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS353LOG.pins._1C0_I, this.pins._1C0_I);
		Connect(this.ULS353LOG.pins._1C1_I, this.pins._1C1_I);
		Connect(this.ULS353LOG.pins._1C2_I, this.pins._1C2_I);
		Connect(this.ULS353LOG.pins._1C3_I, this.pins._1C3_I);
		Connect(this.ULS353LOG.pins._2C0_I, this.pins._2C0_I);
		Connect(this.ULS353LOG.pins._2C1_I, this.pins._2C1_I);
		Connect(this.ULS353LOG.pins._2C2_I, this.pins._2C2_I);
		Connect(this.ULS353LOG.pins._2C3_I, this.pins._2C3_I);
		let G1BAR = new Pin();
		Connect(this.ULS353LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS353LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.ULS353LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS353LOG.pins.B, B);
		let _1C0 = new Pin();
		Connect(this.ULS353LOG.pins._1C0, _1C0);
		let _1C1 = new Pin();
		Connect(this.ULS353LOG.pins._1C1, _1C1);
		let _1C2 = new Pin();
		Connect(this.ULS353LOG.pins._1C2, _1C2);
		let _1C3 = new Pin();
		Connect(this.ULS353LOG.pins._1C3, _1C3);
		let _2C0 = new Pin();
		Connect(this.ULS353LOG.pins._2C0, _2C0);
		let _2C1 = new Pin();
		Connect(this.ULS353LOG.pins._2C1, _2C1);
		let _2C2 = new Pin();
		Connect(this.ULS353LOG.pins._2C2, _2C2);
		let _2C3 = new Pin();
		Connect(this.ULS353LOG.pins._2C3, _2C3);
		let Y1 = new Pin();
		Connect(this.ULS353LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.ULS353LOG.pins.Y2, Y2);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
	}
}
/**
 * 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS_REGISTERS
 */
class SN74LS354 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			G3_I: new Pin(),
			SCBAR_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			S2_I: new Pin(),
			DCBAR_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			D5_I: new Pin(),
			D6_I: new Pin(),
			D7_I: new Pin(),
			Y_O: new Pin(),
			W_O: new Pin(),
		}
		this.ULS354LOG = new logicexp(['G1BAR_I','G2BAR_I','G3_I','SCBAR_I','S0_I','S1_I','S2_I','DCBAR_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I','QS2','QS2BAR','QS1','QS1BAR','QS0','QS0BAR','Q0','Q1','Q2','Q3','Q4','Q5','Q6','Q7'], ['G1BAR','G2BAR','G3','SCBAR','S0','S1','S2','DCBAR','D0','D1','D2','D3','D4','D5','D6','D7','Y','W','ENABLE13','DC','SC'], []).Logic('   D0     =  D0_I ;   D1     =  D1_I ;   D2     =  D2_I ;   D3     =  D3_I ;   D4     =  D4_I ;   D5     =  D5_I ;   D6     =  D6_I ;   D7     =  D7_I ;   G1BAR  =  G1BAR_I ;   G2BAR  =  G2BAR_I ;   G3     =  G3_I ;   SCBAR  =  SCBAR_I ;   SC     =  !SCBAR ;   S0     =  S0_I ;   S1     =  S1_I ;   S2     =  S2_I ;   DCBAR  =  DCBAR_I ;   DC     =  !DCBAR ;   ENABLE13 =  !G1BAR & !G2BAR & G3 ;   Y      =  (QS2BAR & QS1BAR & QS0BAR & Q0) |              (QS2BAR & QS1BAR & QS0    & Q1) |              (QS2BAR & QS1    & QS0BAR & Q2) |              (QS2BAR & QS1    & QS0    & Q3) |              (QS2    & QS1BAR & QS0BAR & Q4) |              (QS2    & QS1BAR & QS0    & Q5) |              (QS2    & QS1    & QS0BAR & Q6) |              (QS2    & QS1    & QS0    & Q7) ;   W      =  !Y ;');
		Connect(this.ULS354LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS354LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS354LOG.pins.G3_I, this.pins.G3_I);
		Connect(this.ULS354LOG.pins.SCBAR_I, this.pins.SCBAR_I);
		Connect(this.ULS354LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS354LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS354LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.ULS354LOG.pins.DCBAR_I, this.pins.DCBAR_I);
		Connect(this.ULS354LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.ULS354LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS354LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS354LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS354LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.ULS354LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.ULS354LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.ULS354LOG.pins.D7_I, this.pins.D7_I);
		let QS2 = new Pin();
		Connect(this.ULS354LOG.pins.QS2, QS2);
		let QS2BAR = new Pin();
		Connect(this.ULS354LOG.pins.QS2BAR, QS2BAR);
		let QS1 = new Pin();
		Connect(this.ULS354LOG.pins.QS1, QS1);
		let QS1BAR = new Pin();
		Connect(this.ULS354LOG.pins.QS1BAR, QS1BAR);
		let QS0 = new Pin();
		Connect(this.ULS354LOG.pins.QS0, QS0);
		let QS0BAR = new Pin();
		Connect(this.ULS354LOG.pins.QS0BAR, QS0BAR);
		let Q0 = new Pin();
		Connect(this.ULS354LOG.pins.Q0, Q0);
		let Q1 = new Pin();
		Connect(this.ULS354LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.ULS354LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.ULS354LOG.pins.Q3, Q3);
		let Q4 = new Pin();
		Connect(this.ULS354LOG.pins.Q4, Q4);
		let Q5 = new Pin();
		Connect(this.ULS354LOG.pins.Q5, Q5);
		let Q6 = new Pin();
		Connect(this.ULS354LOG.pins.Q6, Q6);
		let Q7 = new Pin();
		Connect(this.ULS354LOG.pins.Q7, Q7);
		let G1BAR = new Pin();
		Connect(this.ULS354LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS354LOG.pins.G2BAR, G2BAR);
		let G3 = new Pin();
		Connect(this.ULS354LOG.pins.G3, G3);
		let SCBAR = new Pin();
		Connect(this.ULS354LOG.pins.SCBAR, SCBAR);
		let S0 = new Pin();
		Connect(this.ULS354LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS354LOG.pins.S1, S1);
		let S2 = new Pin();
		Connect(this.ULS354LOG.pins.S2, S2);
		let DCBAR = new Pin();
		Connect(this.ULS354LOG.pins.DCBAR, DCBAR);
		let D0 = new Pin();
		Connect(this.ULS354LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.ULS354LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS354LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS354LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS354LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.ULS354LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.ULS354LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.ULS354LOG.pins.D7, D7);
		let Y = new Pin();
		Connect(this.ULS354LOG.pins.Y, Y);
		let W = new Pin();
		Connect(this.ULS354LOG.pins.W, W);
		let ENABLE13 = new Pin();
		Connect(this.ULS354LOG.pins.ENABLE13, ENABLE13);
		let DC = new Pin();
		Connect(this.ULS354LOG.pins.DC, DC);
		let SC = new Pin();
		Connect(this.ULS354LOG.pins.SC, SC);
		this.U1 = new dltch(8);
		this.U2 = new dltch(3);
		Connect(Y, this.pins.Y_O);
		Connect(W, this.pins.W_O);
	}
}
/**
 * 8-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS_REGISTERS WITH
 */
class SN74LS355 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			G3_I: new Pin(),
			SCBAR_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			S2_I: new Pin(),
			DCBAR_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			D5_I: new Pin(),
			D6_I: new Pin(),
			D7_I: new Pin(),
			Y_O: new Pin(),
			W_O: new Pin(),
		}
		this.ULS355LOG = new logicexp(['G1BAR_I','G2BAR_I','G3_I','SCBAR_I','S0_I','S1_I','S2_I','DCBAR_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I','QS2','QS2BAR','QS1','QS1BAR','QS0','QS0BAR','Q0','Q1','Q2','Q3','Q4','Q5','Q6','Q7'], ['G1BAR','G2BAR','G3','SCBAR','S0','S1','S2','DCBAR','D0','D1','D2','D3','D4','D5','D6','D7','Y','W','DC','SC'], []).Logic('   D0     =  D0_I ;   D1     =  D1_I ;   D2     =  D2_I ;   D3     =  D3_I ;   D4     =  D4_I ;   D5     =  D5_I ;   D6     =  D6_I ;   D7     =  D7_I ;   G1BAR  =  G1BAR_I ;   G2BAR  =  G2BAR_I ;   G3     =  G3_I ;   SCBAR  =  SCBAR_I ;   SC     =  !SCBAR ;   S0     =  S0_I ;   S1     =  S1_I ;   S2     =  S2_I ;   DCBAR  =  DCBAR_I ;   DC     =  !DCBAR ;let    Y_INTERNAL =  (QS2BAR & QS1BAR & QS0BAR & Q0) |                  (QS2BAR & QS1BAR & QS0    & Q1) |                  (QS2BAR & QS1    & QS0BAR & Q2) |                  (QS2BAR & QS1    & QS0    & Q3) |                  (QS2    & QS1BAR & QS0BAR & Q4) |                  (QS2    & QS1BAR & QS0    & Q5) |                  (QS2    & QS1    & QS0BAR & Q6) |                  (QS2    & QS1    & QS0    & Q7) ;   Y_INTERNAL =  (QS2BAR & QS1BAR & QS0BAR & Q0) |                  (QS2BAR & QS1BAR & QS0    & Q1) |                  (QS2BAR & QS1    & QS0BAR & Q2) |                  (QS2BAR & QS1    & QS0    & Q3) |                  (QS2    & QS1BAR & QS0BAR & Q4) |                  (QS2    & QS1BAR & QS0    & Q5) |                  (QS2    & QS1    & QS0BAR & Q6) |                  (QS2    & QS1    & QS0    & Q7) ;let    W_INTERNAL  =  !Y_INTERNAL ;   W_INTERNAL  =  !Y_INTERNAL ;let    ENABLEBAR =  G1BAR | G2BAR | !G3 ;   ENABLEBAR =  G1BAR | G2BAR | !G3 ;   Y =  Y_INTERNAL | ENABLEBAR ;   W =  W_INTERNAL | ENABLEBAR ;');
		Connect(this.ULS355LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS355LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS355LOG.pins.G3_I, this.pins.G3_I);
		Connect(this.ULS355LOG.pins.SCBAR_I, this.pins.SCBAR_I);
		Connect(this.ULS355LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS355LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS355LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.ULS355LOG.pins.DCBAR_I, this.pins.DCBAR_I);
		Connect(this.ULS355LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.ULS355LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS355LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS355LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS355LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.ULS355LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.ULS355LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.ULS355LOG.pins.D7_I, this.pins.D7_I);
		let QS2 = new Pin();
		Connect(this.ULS355LOG.pins.QS2, QS2);
		let QS2BAR = new Pin();
		Connect(this.ULS355LOG.pins.QS2BAR, QS2BAR);
		let QS1 = new Pin();
		Connect(this.ULS355LOG.pins.QS1, QS1);
		let QS1BAR = new Pin();
		Connect(this.ULS355LOG.pins.QS1BAR, QS1BAR);
		let QS0 = new Pin();
		Connect(this.ULS355LOG.pins.QS0, QS0);
		let QS0BAR = new Pin();
		Connect(this.ULS355LOG.pins.QS0BAR, QS0BAR);
		let Q0 = new Pin();
		Connect(this.ULS355LOG.pins.Q0, Q0);
		let Q1 = new Pin();
		Connect(this.ULS355LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.ULS355LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.ULS355LOG.pins.Q3, Q3);
		let Q4 = new Pin();
		Connect(this.ULS355LOG.pins.Q4, Q4);
		let Q5 = new Pin();
		Connect(this.ULS355LOG.pins.Q5, Q5);
		let Q6 = new Pin();
		Connect(this.ULS355LOG.pins.Q6, Q6);
		let Q7 = new Pin();
		Connect(this.ULS355LOG.pins.Q7, Q7);
		let G1BAR = new Pin();
		Connect(this.ULS355LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS355LOG.pins.G2BAR, G2BAR);
		let G3 = new Pin();
		Connect(this.ULS355LOG.pins.G3, G3);
		let SCBAR = new Pin();
		Connect(this.ULS355LOG.pins.SCBAR, SCBAR);
		let S0 = new Pin();
		Connect(this.ULS355LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS355LOG.pins.S1, S1);
		let S2 = new Pin();
		Connect(this.ULS355LOG.pins.S2, S2);
		let DCBAR = new Pin();
		Connect(this.ULS355LOG.pins.DCBAR, DCBAR);
		let D0 = new Pin();
		Connect(this.ULS355LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.ULS355LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS355LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS355LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS355LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.ULS355LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.ULS355LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.ULS355LOG.pins.D7, D7);
		let Y = new Pin();
		Connect(this.ULS355LOG.pins.Y, Y);
		let W = new Pin();
		Connect(this.ULS355LOG.pins.W, W);
		let DC = new Pin();
		Connect(this.ULS355LOG.pins.DC, DC);
		let SC = new Pin();
		Connect(this.ULS355LOG.pins.SC, SC);
		this.U1 = new dltch(8);
		this.U2 = new dltch(3);
		Connect(Y, this.pins.Y_O);
		Connect(W, this.pins.W_O);
	}
}
/**
 * 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS_REGISTERS
 */
class SN74LS356 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			G3_I: new Pin(),
			SCBAR_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			S2_I: new Pin(),
			CLK_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			D5_I: new Pin(),
			D6_I: new Pin(),
			D7_I: new Pin(),
			Y_O: new Pin(),
			W_O: new Pin(),
		}
		this.ULS356LOG = new logicexp(['G1BAR_I','G2BAR_I','G3_I','SCBAR_I','S0_I','S1_I','S2_I','CLK_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I','QS2','QS2BAR','QS1','QS1BAR','QS0','QS0BAR','Q0','Q1','Q2','Q3','Q4','Q5','Q6','Q7'], ['G1BAR','G2BAR','G3','SCBAR','S0','S1','S2','CLK','D0','D1','D2','D3','D4','D5','D6','D7','Y','W','ENABLE13','SC'], []).Logic('   D0     =  D0_I ;   D1     =  D1_I ;   D2     =  D2_I ;   D3     =  D3_I ;   D4     =  D4_I ;   D5     =  D5_I ;   D6     =  D6_I ;   D7     =  D7_I ;   G1BAR  =  G1BAR_I ;   G2BAR  =  G2BAR_I ;   G3     =  G3_I ;   SCBAR  =  SCBAR_I ;   SC     =  !SCBAR ;   S0     =  S0_I ;   S1     =  S1_I ;   S2     =  S2_I ;   CLK  =  CLK_I ;   ENABLE13 =  !G1BAR & !G2BAR & G3 ;   Y      =  (QS2BAR & QS1BAR & QS0BAR & Q0) |              (QS2BAR & QS1BAR & QS0    & Q1) |              (QS2BAR & QS1    & QS0BAR & Q2) |              (QS2BAR & QS1    & QS0    & Q3) |              (QS2    & QS1BAR & QS0BAR & Q4) |              (QS2    & QS1BAR & QS0    & Q5) |              (QS2    & QS1    & QS0BAR & Q6) |              (QS2    & QS1    & QS0    & Q7) ;   W      =  !Y ;');
		Connect(this.ULS356LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS356LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS356LOG.pins.G3_I, this.pins.G3_I);
		Connect(this.ULS356LOG.pins.SCBAR_I, this.pins.SCBAR_I);
		Connect(this.ULS356LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS356LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS356LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.ULS356LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS356LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.ULS356LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS356LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS356LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS356LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.ULS356LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.ULS356LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.ULS356LOG.pins.D7_I, this.pins.D7_I);
		let QS2 = new Pin();
		Connect(this.ULS356LOG.pins.QS2, QS2);
		let QS2BAR = new Pin();
		Connect(this.ULS356LOG.pins.QS2BAR, QS2BAR);
		let QS1 = new Pin();
		Connect(this.ULS356LOG.pins.QS1, QS1);
		let QS1BAR = new Pin();
		Connect(this.ULS356LOG.pins.QS1BAR, QS1BAR);
		let QS0 = new Pin();
		Connect(this.ULS356LOG.pins.QS0, QS0);
		let QS0BAR = new Pin();
		Connect(this.ULS356LOG.pins.QS0BAR, QS0BAR);
		let Q0 = new Pin();
		Connect(this.ULS356LOG.pins.Q0, Q0);
		let Q1 = new Pin();
		Connect(this.ULS356LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.ULS356LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.ULS356LOG.pins.Q3, Q3);
		let Q4 = new Pin();
		Connect(this.ULS356LOG.pins.Q4, Q4);
		let Q5 = new Pin();
		Connect(this.ULS356LOG.pins.Q5, Q5);
		let Q6 = new Pin();
		Connect(this.ULS356LOG.pins.Q6, Q6);
		let Q7 = new Pin();
		Connect(this.ULS356LOG.pins.Q7, Q7);
		let G1BAR = new Pin();
		Connect(this.ULS356LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS356LOG.pins.G2BAR, G2BAR);
		let G3 = new Pin();
		Connect(this.ULS356LOG.pins.G3, G3);
		let SCBAR = new Pin();
		Connect(this.ULS356LOG.pins.SCBAR, SCBAR);
		let S0 = new Pin();
		Connect(this.ULS356LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS356LOG.pins.S1, S1);
		let S2 = new Pin();
		Connect(this.ULS356LOG.pins.S2, S2);
		let CLK = new Pin();
		Connect(this.ULS356LOG.pins.CLK, CLK);
		let D0 = new Pin();
		Connect(this.ULS356LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.ULS356LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS356LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS356LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS356LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.ULS356LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.ULS356LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.ULS356LOG.pins.D7, D7);
		let Y = new Pin();
		Connect(this.ULS356LOG.pins.Y, Y);
		let W = new Pin();
		Connect(this.ULS356LOG.pins.W, W);
		let ENABLE13 = new Pin();
		Connect(this.ULS356LOG.pins.ENABLE13, ENABLE13);
		let SC = new Pin();
		Connect(this.ULS356LOG.pins.SC, SC);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.D0, D0);
		Connect(this.U1.pins.D1, D1);
		Connect(this.U1.pins.D2, D2);
		Connect(this.U1.pins.D3, D3);
		Connect(this.U1.pins.D4, D4);
		Connect(this.U1.pins.D5, D5);
		Connect(this.U1.pins.D6, D6);
		Connect(this.U1.pins.D7, D7);
		Connect(this.U1.pins.Q0, Q0);
		Connect(this.U1.pins.Q1, Q1);
		Connect(this.U1.pins.Q2, Q2);
		Connect(this.U1.pins.Q3, Q3);
		Connect(this.U1.pins.Q4, Q4);
		Connect(this.U1.pins.Q5, Q5);
		Connect(this.U1.pins.Q6, Q6);
		Connect(this.U1.pins.Q7, Q7);
		this.U2 = new dltch(3);
		Connect(Y, this.pins.Y_O);
		Connect(W, this.pins.W_O);
	}
}
/**
 * 8-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS_REGISTERS
 */
class SN74LS357 extends Component {
	constructor() {
		super();
		this.pins = {
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			G3_I: new Pin(),
			SCBAR_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			S2_I: new Pin(),
			CLK_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			D5_I: new Pin(),
			D6_I: new Pin(),
			D7_I: new Pin(),
			Y_O: new Pin(),
			W_O: new Pin(),
		}
		this.ULS357LOG = new logicexp(['G1BAR_I','G2BAR_I','G3_I','SCBAR_I','S0_I','S1_I','S2_I','CLK_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I','QS2','QS2BAR','QS1','QS1BAR','QS0','QS0BAR','Q0','Q1','Q2','Q3','Q4','Q5','Q6','Q7'], ['G1BAR','G2BAR','G3','SCBAR','S0','S1','S2','CLK','D0','D1','D2','D3','D4','D5','D6','D7','Y','W','SC'], []).Logic('   D0     =  D0_I ;   D1     =  D1_I ;   D2     =  D2_I ;   D3     =  D3_I ;   D4     =  D4_I ;   D5     =  D5_I ;   D6     =  D6_I ;   D7     =  D7_I ;   G1BAR  =  G1BAR_I ;   G2BAR  =  G2BAR_I ;   G3     =  G3_I ;   SCBAR  =  SCBAR_I ;   SC     =  !SCBAR ;   S0     =  S0_I ;   S1     =  S1_I ;   S2     =  S2_I ;   CLK  =  CLK_I ;let    Y_INTERNAL =  (QS2BAR & QS1BAR & QS0BAR & Q0) |                  (QS2BAR & QS1BAR & QS0    & Q1) |                  (QS2BAR & QS1    & QS0BAR & Q2) |                  (QS2BAR & QS1    & QS0    & Q3) |                  (QS2    & QS1BAR & QS0BAR & Q4) |                  (QS2    & QS1BAR & QS0    & Q5) |                  (QS2    & QS1    & QS0BAR & Q6) |                  (QS2    & QS1    & QS0    & Q7) ;   Y_INTERNAL =  (QS2BAR & QS1BAR & QS0BAR & Q0) |                  (QS2BAR & QS1BAR & QS0    & Q1) |                  (QS2BAR & QS1    & QS0BAR & Q2) |                  (QS2BAR & QS1    & QS0    & Q3) |                  (QS2    & QS1BAR & QS0BAR & Q4) |                  (QS2    & QS1BAR & QS0    & Q5) |                  (QS2    & QS1    & QS0BAR & Q6) |                  (QS2    & QS1    & QS0    & Q7) ;let    W_INTERNAL  =  !Y_INTERNAL ;   W_INTERNAL  =  !Y_INTERNAL ;let    ENABLEBAR =  G1BAR | G2BAR | !G3 ;   ENABLEBAR =  G1BAR | G2BAR | !G3 ;   Y =  Y_INTERNAL | ENABLEBAR ;   W =  W_INTERNAL | ENABLEBAR ;');
		Connect(this.ULS357LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS357LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.ULS357LOG.pins.G3_I, this.pins.G3_I);
		Connect(this.ULS357LOG.pins.SCBAR_I, this.pins.SCBAR_I);
		Connect(this.ULS357LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS357LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS357LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.ULS357LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS357LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.ULS357LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS357LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS357LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS357LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.ULS357LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.ULS357LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.ULS357LOG.pins.D7_I, this.pins.D7_I);
		let QS2 = new Pin();
		Connect(this.ULS357LOG.pins.QS2, QS2);
		let QS2BAR = new Pin();
		Connect(this.ULS357LOG.pins.QS2BAR, QS2BAR);
		let QS1 = new Pin();
		Connect(this.ULS357LOG.pins.QS1, QS1);
		let QS1BAR = new Pin();
		Connect(this.ULS357LOG.pins.QS1BAR, QS1BAR);
		let QS0 = new Pin();
		Connect(this.ULS357LOG.pins.QS0, QS0);
		let QS0BAR = new Pin();
		Connect(this.ULS357LOG.pins.QS0BAR, QS0BAR);
		let Q0 = new Pin();
		Connect(this.ULS357LOG.pins.Q0, Q0);
		let Q1 = new Pin();
		Connect(this.ULS357LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.ULS357LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.ULS357LOG.pins.Q3, Q3);
		let Q4 = new Pin();
		Connect(this.ULS357LOG.pins.Q4, Q4);
		let Q5 = new Pin();
		Connect(this.ULS357LOG.pins.Q5, Q5);
		let Q6 = new Pin();
		Connect(this.ULS357LOG.pins.Q6, Q6);
		let Q7 = new Pin();
		Connect(this.ULS357LOG.pins.Q7, Q7);
		let G1BAR = new Pin();
		Connect(this.ULS357LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS357LOG.pins.G2BAR, G2BAR);
		let G3 = new Pin();
		Connect(this.ULS357LOG.pins.G3, G3);
		let SCBAR = new Pin();
		Connect(this.ULS357LOG.pins.SCBAR, SCBAR);
		let S0 = new Pin();
		Connect(this.ULS357LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS357LOG.pins.S1, S1);
		let S2 = new Pin();
		Connect(this.ULS357LOG.pins.S2, S2);
		let CLK = new Pin();
		Connect(this.ULS357LOG.pins.CLK, CLK);
		let D0 = new Pin();
		Connect(this.ULS357LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.ULS357LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS357LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS357LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS357LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.ULS357LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.ULS357LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.ULS357LOG.pins.D7, D7);
		let Y = new Pin();
		Connect(this.ULS357LOG.pins.Y, Y);
		let W = new Pin();
		Connect(this.ULS357LOG.pins.W, W);
		let SC = new Pin();
		Connect(this.ULS357LOG.pins.SC, SC);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.D0, D0);
		Connect(this.U1.pins.D1, D1);
		Connect(this.U1.pins.D2, D2);
		Connect(this.U1.pins.D3, D3);
		Connect(this.U1.pins.D4, D4);
		Connect(this.U1.pins.D5, D5);
		Connect(this.U1.pins.D6, D6);
		Connect(this.U1.pins.D7, D7);
		Connect(this.U1.pins.Q0, Q0);
		Connect(this.U1.pins.Q1, Q1);
		Connect(this.U1.pins.Q2, Q2);
		Connect(this.U1.pins.Q3, Q3);
		Connect(this.U1.pins.Q4, Q4);
		Connect(this.U1.pins.Q5, Q5);
		Connect(this.U1.pins.Q6, Q6);
		Connect(this.U1.pins.Q7, Q7);
		this.U2 = new dltch(3);
		Connect(Y, this.pins.Y_O);
		Connect(W, this.pins.W_O);
	}
}
/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74LS365A extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			A5: new Pin(),
			A6: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
		}
		this.UA = new nor(2);
		this.U1 = new buf3a(6);
		Connect(this.U1.pins.D0, this.pins.A1);
		Connect(this.U1.pins.D1, this.pins.A2);
		Connect(this.U1.pins.D2, this.pins.A3);
		Connect(this.U1.pins.D3, this.pins.A4);
		Connect(this.U1.pins.D4, this.pins.A5);
		Connect(this.U1.pins.D5, this.pins.A6);
		let E = new Pin();
		Connect(this.U1.pins.EN, E);
		Connect(this.U1.pins.Q0, this.pins.Y1);
		Connect(this.U1.pins.Q1, this.pins.Y2);
		Connect(this.U1.pins.Q2, this.pins.Y3);
		Connect(this.U1.pins.Q3, this.pins.Y4);
		Connect(this.U1.pins.Q4, this.pins.Y5);
		Connect(this.U1.pins.Q5, this.pins.Y6);
	}
}
/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74LS366A extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			A5: new Pin(),
			A6: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
		}
		this.UA = new nor(2);
		this.U1 = new inv3a(6);
	}
}
/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74LS367A extends Component {
	constructor() {
		super();
		this.pins = {
			_1A1: new Pin(),
			_1A2: new Pin(),
			_1A3: new Pin(),
			_1A4: new Pin(),
			_2A1: new Pin(),
			_2A2: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			_1Y1: new Pin(),
			_1Y2: new Pin(),
			_1Y3: new Pin(),
			_1Y4: new Pin(),
			_2Y1: new Pin(),
			_2Y2: new Pin(),
		}
		this.UINV = new inva(2);
		this.U1 = new buf3a(4);
		Connect(this.U1.pins.D0, this.pins._1A1);
		Connect(this.U1.pins.D1, this.pins._1A2);
		Connect(this.U1.pins.D2, this.pins._1A3);
		Connect(this.U1.pins.D3, this.pins._1A4);
		let G1 = new Pin();
		Connect(this.U1.pins.EN, G1);
		Connect(this.U1.pins.Q0, this.pins._1Y1);
		Connect(this.U1.pins.Q1, this.pins._1Y2);
		Connect(this.U1.pins.Q2, this.pins._1Y3);
		Connect(this.U1.pins.Q3, this.pins._1Y4);
		this.U2 = new buf3a(2);
		Connect(this.U2.pins.D0, this.pins._2A1);
		Connect(this.U2.pins.D1, this.pins._2A2);
		let G2 = new Pin();
		Connect(this.U2.pins.EN, G2);
		Connect(this.U2.pins.Q0, this.pins._2Y1);
		Connect(this.U2.pins.Q1, this.pins._2Y2);
	}
}
/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74LS368A extends Component {
	constructor() {
		super();
		this.pins = {
			_1A1: new Pin(),
			_1A2: new Pin(),
			_1A3: new Pin(),
			_1A4: new Pin(),
			_2A1: new Pin(),
			_2A2: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			_1Y1: new Pin(),
			_1Y2: new Pin(),
			_1Y3: new Pin(),
			_1Y4: new Pin(),
			_2Y1: new Pin(),
			_2Y2: new Pin(),
		}
		this.UINV = new inva(2);
		this.U1 = new inv3a(4);
		this.U2 = new inv3a(2);
	}
}
/**
 * Octal D-Type Transparent Latches with 3-STATE Outputs
 */
class SN74LS373 extends Component {
	constructor() {
		super();
		this.pins = {
			OCBAR: new Pin(),
			C: new Pin(),
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
		this.UA = new inv();
		Connect(this.UA.pins.IN, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.UA.pins.OUT, OC);
		this.U1 = new dltch(8);
		this.U2 = new buf3a(8);
		let _1QI = new Pin();
		Connect(this.U2.pins.D0, _1QI);
		let _2QI = new Pin();
		Connect(this.U2.pins.D1, _2QI);
		let _3QI = new Pin();
		Connect(this.U2.pins.D2, _3QI);
		let _4QI = new Pin();
		Connect(this.U2.pins.D3, _4QI);
		let _5QI = new Pin();
		Connect(this.U2.pins.D4, _5QI);
		let _6QI = new Pin();
		Connect(this.U2.pins.D5, _6QI);
		let _7QI = new Pin();
		Connect(this.U2.pins.D6, _7QI);
		let _8QI = new Pin();
		Connect(this.U2.pins.D7, _8QI);
		Connect(this.U2.pins.EN, OC);
		Connect(this.U2.pins.Q0, this.pins._1Q);
		Connect(this.U2.pins.Q1, this.pins._2Q);
		Connect(this.U2.pins.Q2, this.pins._3Q);
		Connect(this.U2.pins.Q3, this.pins._4Q);
		Connect(this.U2.pins.Q4, this.pins._5Q);
		Connect(this.U2.pins.Q5, this.pins._6Q);
		Connect(this.U2.pins.Q6, this.pins._7Q);
		Connect(this.U2.pins.Q7, this.pins._8Q);
	}
}
/**
 * Octal D-Type Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74LS374 extends Component {
	constructor() {
		super();
		this.pins = {
			OCBAR: new Pin(),
			CLK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			D3: new Pin(),
			D4: new Pin(),
			D5: new Pin(),
			D6: new Pin(),
			D7: new Pin(),
			D8: new Pin(),
			Q1: new Pin(),
			Q2: new Pin(),
			Q3: new Pin(),
			Q4: new Pin(),
			Q5: new Pin(),
			Q6: new Pin(),
			Q7: new Pin(),
			Q8: new Pin(),
		}
		this.UOC = new inv();
		Connect(this.UOC.pins.IN, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.UOC.pins.OUT, OC);
		this.UD = new dff(8);
		Connect(this.UD.pins.PRESET, _D_HI);
		Connect(this.UD.pins.CLEAR, _D_HI);
		Connect(this.UD.pins.CLOCK, this.pins.CLK);
		Connect(this.UD.pins.D0, this.pins.D1);
		Connect(this.UD.pins.D1, this.pins.D2);
		Connect(this.UD.pins.D2, this.pins.D3);
		Connect(this.UD.pins.D3, this.pins.D4);
		Connect(this.UD.pins.D4, this.pins.D5);
		Connect(this.UD.pins.D5, this.pins.D6);
		Connect(this.UD.pins.D6, this.pins.D7);
		Connect(this.UD.pins.D7, this.pins.D8);
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
		Connect(this.UQS.pins.Q0, this.pins.Q1);
		Connect(this.UQS.pins.Q1, this.pins.Q2);
		Connect(this.UQS.pins.Q2, this.pins.Q3);
		Connect(this.UQS.pins.Q3, this.pins.Q4);
		Connect(this.UQS.pins.Q4, this.pins.Q5);
		Connect(this.UQS.pins.Q5, this.pins.Q6);
		Connect(this.UQS.pins.Q6, this.pins.Q7);
		Connect(this.UQS.pins.Q7, this.pins.Q8);
	}
}
/**
 * 4-bit Bistable Latches
 */
class SN74LS375 extends Component {
	constructor() {
		super();
		this.pins = {
			_1D: new Pin(),
			_2D: new Pin(),
			C: new Pin(),
			_1Q: new Pin(),
			_1QBAR: new Pin(),
			_2Q: new Pin(),
			_2QBAR: new Pin(),
		}
	}
}
/**
 * Octal D-TYPE Flip-Flops with Clock Enable
 */
class SN74LS377 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR: new Pin(),
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
		this.UBUF = new bufa(2);
	}
}
class SNLS377DAT extends Component {
	constructor() {
		super();
		this.pins = {
			GB: new Pin(),
			CLK: new Pin(),
			D: new Pin(),
			Q: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UBUF = new buf();
		this.USET = new inv();
		Connect(this.USET.pins.IN, this.pins.GB);
		let G2 = new Pin();
		Connect(this.USET.pins.OUT, G2);
		this.UNXOR = new nxor();
		this.UIN = new buf3();
		this.UD1 = new buf();
		this.UD2 = new buf();
		this.UINV = new inv();
		Connect(this.UINV.pins.IN, this.pins.GB);
		let G = new Pin();
		Connect(this.UINV.pins.OUT, G);
		this.UAO = new ao(2,2);
		this.UDFF = new dff(1);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, this.pins.CLK);
		let IN = new Pin();
		Connect(this.UDFF.pins.D0, IN);
		let QBUF = new Pin();
		Connect(this.UDFF.pins.Q0, QBUF);
		this.UQOUT = new buf();
	}
}
/**
 * Octal D-TYPE Flip-Flops with Clock Enable
 */
class SN74LS378 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			GBAR: new Pin(),
			_1D: new Pin(),
			_2D: new Pin(),
			_3D: new Pin(),
			_4D: new Pin(),
			_5D: new Pin(),
			_6D: new Pin(),
			_1Q: new Pin(),
			_2Q: new Pin(),
			_3Q: new Pin(),
			_4Q: new Pin(),
			_5Q: new Pin(),
			_6Q: new Pin(),
		}
		this.UBUF = new bufa(2);
	}
}
class SNLS378DAT extends Component {
	constructor() {
		super();
		this.pins = {
			GB: new Pin(),
			CLK: new Pin(),
			D: new Pin(),
			Q: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UBUF = new buf();
		this.USET = new inv();
		Connect(this.USET.pins.IN, this.pins.GB);
		let G2 = new Pin();
		Connect(this.USET.pins.OUT, G2);
		this.UNXOR = new nxor();
		this.UIN = new buf3();
		this.UD1 = new buf();
		this.UD2 = new buf();
		this.UINV = new inv();
		Connect(this.UINV.pins.IN, this.pins.GB);
		let G = new Pin();
		Connect(this.UINV.pins.OUT, G);
		this.UAO = new ao(2,2);
		this.UDFF = new dff(1);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, this.pins.CLK);
		let IN = new Pin();
		Connect(this.UDFF.pins.D0, IN);
		let QBUF = new Pin();
		Connect(this.UDFF.pins.Q0, QBUF);
		this.UQOUT = new buf();
	}
}
/**
 * Octal D-TYPE Flip-Flops with Clock Enable
 */
class SN74LS379 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK: new Pin(),
			GBAR: new Pin(),
			_1D: new Pin(),
			_2D: new Pin(),
			_3D: new Pin(),
			_4D: new Pin(),
			_1Q: new Pin(),
			_1QBAR: new Pin(),
			_2Q: new Pin(),
			_2QBAR: new Pin(),
			_3Q: new Pin(),
			_3QBAR: new Pin(),
			_4Q: new Pin(),
			_4QBAR: new Pin(),
		}
		this.UBUF = new bufa(2);
	}
}
class SNLS379DAT extends Component {
	constructor() {
		super();
		this.pins = {
			GB: new Pin(),
			CLK: new Pin(),
			D: new Pin(),
			Q: new Pin(),
			QB: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UBUF = new buf();
		this.USET = new inv();
		Connect(this.USET.pins.IN, this.pins.GB);
		let G2 = new Pin();
		Connect(this.USET.pins.OUT, G2);
		this.UNXOR = new nxor();
		this.UIN = new buf3();
		this.UD1 = new buf();
		this.UD2 = new buf();
		this.UINV = new inv();
		Connect(this.UINV.pins.IN, this.pins.GB);
		let G = new Pin();
		Connect(this.UINV.pins.OUT, G);
		this.UAO = new ao(2,2);
		this.UDFF = new dff(1);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, this.pins.CLK);
		let IN = new Pin();
		Connect(this.UDFF.pins.D0, IN);
		let QBUF = new Pin();
		Connect(this.UDFF.pins.Q0, QBUF);
		this.UQOUT = new bufa(2);
	}
}
/**
 * ALU _ FUNCTION GENERATOR
 */
class SN74LS381A extends Component {
	constructor() {
		super();
		this.pins = {
			S2_I: new Pin(),
			S1_I: new Pin(),
			S0_I: new Pin(),
			CN_I: new Pin(),
			A3_I: new Pin(),
			A2_I: new Pin(),
			A1_I: new Pin(),
			A0_I: new Pin(),
			B3_I: new Pin(),
			B2_I: new Pin(),
			B1_I: new Pin(),
			B0_I: new Pin(),
			F3_O: new Pin(),
			F2_O: new Pin(),
			F1_O: new Pin(),
			F0_O: new Pin(),
			PBAR_O: new Pin(),
			GBAR_O: new Pin(),
		}
		this.ULS381LOG = new logicexp(['S2_I','S1_I','S0_I','CN_I','A3_I','A2_I','A1_I','A0_I','B3_I','B2_I','B1_I','B0_I'], ['S2','S1','S0','CN','A3','A2','A1','A0','B3','B2','B1','B0','F3','F2','F1','F0','PBAR','GBAR'], []).Logic('   S2    =  S2_I ;   S1    =  S1_I ;   S0    =  S0_I ;   CN    =  CN_I ;   A3    =  A3_I ;   A2    =  A2_I ;   A1    =  A1_I ;   A0    =  A0_I ;   B3    =  B3_I ;   B2    =  B2_I ;   B1    =  B1_I ;   B0    =  B0_I ;let    S2BAR =  !S2 ;   S2BAR =  !S2 ;let    S1BAR =  !S1 ;   S1BAR =  !S1 ;let    S0BAR =  !S0 ;   S0BAR =  !S0 ;let    A3BAR =  !A3 ;   A3BAR =  !A3 ;let    A2BAR =  !A2 ;   A2BAR =  !A2 ;let    A1BAR =  !A1 ;   A1BAR =  !A1 ;let    A0BAR =  !A0 ;   A0BAR =  !A0 ;let    B3BAR =  !B3 ;   B3BAR =  !B3 ;let    B2BAR =  !B2 ;   B2BAR =  !B2 ;let    B1BAR =  !B1 ;   B1BAR =  !B1 ;let    B0BAR =  !B0 ;   B0BAR =  !B0 ;let    L6   =  !( (S0 & S1BAR & S2BAR) | (S0BAR & S1 & S2BAR) | (S0 & S1 & S2) ) ;   L6   =  !( (S0 & S1BAR & S2BAR) | (S0BAR & S1 & S2BAR) | (S0 & S1 & S2) ) ;let    L5   =  !( (S0 & S1BAR        ) | (S0BAR & S1        ) | (S0      & S2) ) ;   L5   =  !( (S0 & S1BAR        ) | (S0BAR & S1        ) | (S0      & S2) ) ;let    L4   =  !( (     S1BAR & S2   )                        | (S0 & S1     ) ) ;   L4   =  !( (     S1BAR & S2   )                        | (S0 & S1     ) ) ;let    L3   =  S0BAR | S1    | S2 ;   L3   =  S0BAR | S1    | S2 ;let    L2   =  S0BAR | S1BAR | S2 ;   L2   =  S0BAR | S1BAR | S2 ;let    L1   =  S0    | S1BAR | S2 ;   L1   =  S0    | S1BAR | S2 ;let    L0   =     (S0         & S2BAR) | (        S1 & S2BAR) ;   L0   =     (S0         & S2BAR) | (        S1 & S2BAR) ;let    TOP0 =  !( (A0BAR & B0BAR & L6) | (A0 & B0BAR & L4) |               (A0BAR & B0    & L4) | (A0 & B0    & L5) ) ;   TOP0 =  !( (A0BAR & B0BAR & L6) | (A0 & B0BAR & L4) |               (A0BAR & B0    & L4) | (A0 & B0    & L5) ) ;let    BOT0 =  !( (A0BAR & B0BAR     ) | (A0 & B0BAR & L1) |               (A0BAR & B0    & L3) | (A0 & B0    & L2) ) ;   BOT0 =  !( (A0BAR & B0BAR     ) | (A0 & B0BAR & L1) |               (A0BAR & B0    & L3) | (A0 & B0    & L2) ) ;let    TOP1 =  !( (A1BAR & B1BAR & L6) | (A1 & B1BAR & L4) |               (A1BAR & B1    & L4) | (A1 & B1    & L5) ) ;   TOP1 =  !( (A1BAR & B1BAR & L6) | (A1 & B1BAR & L4) |               (A1BAR & B1    & L4) | (A1 & B1    & L5) ) ;let    BOT1 =  !( (A1BAR & B1BAR     ) | (A1 & B1BAR & L1) |               (A1BAR & B1    & L3) | (A1 & B1    & L2) ) ;   BOT1 =  !( (A1BAR & B1BAR     ) | (A1 & B1BAR & L1) |               (A1BAR & B1    & L3) | (A1 & B1    & L2) ) ;let    TOP2 =  !( (A2BAR & B2BAR & L6) | (A2 & B2BAR & L4) |               (A2BAR & B2    & L4) | (A2 & B2    & L5) ) ;   TOP2 =  !( (A2BAR & B2BAR & L6) | (A2 & B2BAR & L4) |               (A2BAR & B2    & L4) | (A2 & B2    & L5) ) ;let    BOT2 =  !( (A2BAR & B2BAR     ) | (A2 & B2BAR & L1) |               (A2BAR & B2    & L3) | (A2 & B2    & L2) ) ;   BOT2 =  !( (A2BAR & B2BAR     ) | (A2 & B2BAR & L1) |               (A2BAR & B2    & L3) | (A2 & B2    & L2) ) ;let    TOP3 =  !( (A3BAR & B3BAR & L6) | (A3 & B3BAR & L4) |               (A3BAR & B3    & L4) | (A3 & B3    & L5) ) ;   TOP3 =  !( (A3BAR & B3BAR & L6) | (A3 & B3BAR & L4) |               (A3BAR & B3    & L4) | (A3 & B3    & L5) ) ;let    BOT3 =  !( (A3BAR & B3BAR     ) | (A3 & B3BAR & L1) |               (A3BAR & B3    & L3) | (A3 & B3    & L2) ) ;   BOT3 =  !( (A3BAR & B3BAR     ) | (A3 & B3BAR & L1) |               (A3BAR & B3    & L3) | (A3 & B3    & L2) ) ;   F0   =  !(TOP0 ^   !(  CN & L0) ) ;   F1   =  !(TOP1 ^ !( (  CN & L0 & TOP0) |                      (BOT0 & L0       ) ) ) ;   F2   =  !(TOP2 ^ !( (  CN & L0 & TOP0 & TOP1) |                      (BOT0 & L0        & TOP1) |                      (BOT1 & L0              ) ) ) ;   F3   =  !(TOP3 ^ !( (  CN & L0 & TOP0 & TOP1 & TOP2) |                      (BOT0 & L0        & TOP1 & TOP2) |                      (BOT1 & L0               & TOP2) |                      (BOT2 & L0                     ) ) ) ;   PBAR =  !(TOP0 & TOP1 & TOP2 & TOP3) ;   GBAR =  !(      (TOP1 & TOP2 & TOP3 & BOT0) |                           (TOP2 & TOP3 & BOT1) |                                  (TOP3 & BOT2) |                                         (BOT3) ) ;');
		Connect(this.ULS381LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.ULS381LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS381LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS381LOG.pins.CN_I, this.pins.CN_I);
		Connect(this.ULS381LOG.pins.A3_I, this.pins.A3_I);
		Connect(this.ULS381LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.ULS381LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.ULS381LOG.pins.A0_I, this.pins.A0_I);
		Connect(this.ULS381LOG.pins.B3_I, this.pins.B3_I);
		Connect(this.ULS381LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS381LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS381LOG.pins.B0_I, this.pins.B0_I);
		let S2 = new Pin();
		Connect(this.ULS381LOG.pins.S2, S2);
		let S1 = new Pin();
		Connect(this.ULS381LOG.pins.S1, S1);
		let S0 = new Pin();
		Connect(this.ULS381LOG.pins.S0, S0);
		let CN = new Pin();
		Connect(this.ULS381LOG.pins.CN, CN);
		let A3 = new Pin();
		Connect(this.ULS381LOG.pins.A3, A3);
		let A2 = new Pin();
		Connect(this.ULS381LOG.pins.A2, A2);
		let A1 = new Pin();
		Connect(this.ULS381LOG.pins.A1, A1);
		let A0 = new Pin();
		Connect(this.ULS381LOG.pins.A0, A0);
		let B3 = new Pin();
		Connect(this.ULS381LOG.pins.B3, B3);
		let B2 = new Pin();
		Connect(this.ULS381LOG.pins.B2, B2);
		let B1 = new Pin();
		Connect(this.ULS381LOG.pins.B1, B1);
		let B0 = new Pin();
		Connect(this.ULS381LOG.pins.B0, B0);
		let F3 = new Pin();
		Connect(this.ULS381LOG.pins.F3, F3);
		let F2 = new Pin();
		Connect(this.ULS381LOG.pins.F2, F2);
		let F1 = new Pin();
		Connect(this.ULS381LOG.pins.F1, F1);
		let F0 = new Pin();
		Connect(this.ULS381LOG.pins.F0, F0);
		let PBAR = new Pin();
		Connect(this.ULS381LOG.pins.PBAR, PBAR);
		let GBAR = new Pin();
		Connect(this.ULS381LOG.pins.GBAR, GBAR);
		Connect(F3, this.pins.F3_O);
		Connect(F2, this.pins.F2_O);
		Connect(F1, this.pins.F1_O);
		Connect(F0, this.pins.F0_O);
		Connect(PBAR, this.pins.PBAR_O);
		Connect(GBAR, this.pins.GBAR_O);
	}
}
/**
 * ALU _ FUNCTION GENERATOR
 */
class SN74LS382 extends Component {
	constructor() {
		super();
		this.pins = {
			S2_I: new Pin(),
			S1_I: new Pin(),
			S0_I: new Pin(),
			CN_I: new Pin(),
			A3_I: new Pin(),
			A2_I: new Pin(),
			A1_I: new Pin(),
			A0_I: new Pin(),
			B3_I: new Pin(),
			B2_I: new Pin(),
			B1_I: new Pin(),
			B0_I: new Pin(),
			F3_O: new Pin(),
			F2_O: new Pin(),
			F1_O: new Pin(),
			F0_O: new Pin(),
			OVR_O: new Pin(),
			CN_4_O: new Pin(),
		}
		this.ULS382ALOG = new logicexp(['S2_I','S1_I','S0_I','CN_I','A3_I','A2_I','A1_I','A0_I','B3_I','B2_I','B1_I','B0_I'], ['S2','S1','S0','CN','A3','A2','A1','A0','B3','B2','B1','B0','F3','F2','F1','F0','OVR','CN_4'], []).Logic('   S2    =  S2_I ;   S1    =  S1_I ;   S0    =  S0_I ;   CN    =  CN_I ;   A3    =  A3_I ;   A2    =  A2_I ;   A1    =  A1_I ;   A0    =  A0_I ;   B3    =  B3_I ;   B2    =  B2_I ;   B1    =  B1_I ;   B0    =  B0_I ;let    S2BAR =  !S2 ;   S2BAR =  !S2 ;let    S1BAR =  !S1 ;   S1BAR =  !S1 ;let    S0BAR =  !S0 ;   S0BAR =  !S0 ;let    A3BAR =  !A3 ;   A3BAR =  !A3 ;let    A2BAR =  !A2 ;   A2BAR =  !A2 ;let    A1BAR =  !A1 ;   A1BAR =  !A1 ;let    A0BAR =  !A0 ;   A0BAR =  !A0 ;let    B3BAR =  !B3 ;   B3BAR =  !B3 ;let    B2BAR =  !B2 ;   B2BAR =  !B2 ;let    B1BAR =  !B1 ;   B1BAR =  !B1 ;let    B0BAR =  !B0 ;   B0BAR =  !B0 ;let    L6   =  !( (S0 & S1BAR & S2BAR) | (S0 & S1 & S2) |               (S0BAR & S1 & S2BAR) ) ;   L6   =  !( (S0 & S1BAR & S2BAR) | (S0 & S1 & S2) |               (S0BAR & S1 & S2BAR) ) ;let    L5   =  !( (S0 & S1BAR        ) | (S0      & S2) |               (S0BAR & S1        ) ) ;   L5   =  !( (S0 & S1BAR        ) | (S0      & S2) |               (S0BAR & S1        ) ) ;let    L4   =  !( (     S1BAR & S2   ) | (S0 & S1     ) ) ;   L4   =  !( (     S1BAR & S2   ) | (S0 & S1     ) ) ;let    L3   =  S0BAR | S1    | S2 ;   L3   =  S0BAR | S1    | S2 ;let    L2   =  S0BAR | S1BAR | S2 ;   L2   =  S0BAR | S1BAR | S2 ;let    L1   =  S0    | S1BAR | S2 ;   L1   =  S0    | S1BAR | S2 ;let    L0   =     (S0         & S2BAR) | (        S1 & S2BAR) ;   L0   =     (S0         & S2BAR) | (        S1 & S2BAR) ;let    TOP0 =  !( (A0BAR & B0BAR & L6) | (A0 & B0BAR & L4) |               (A0BAR & B0    & L4) | (A0 & B0    & L5) ) ;   TOP0 =  !( (A0BAR & B0BAR & L6) | (A0 & B0BAR & L4) |               (A0BAR & B0    & L4) | (A0 & B0    & L5) ) ;let    BOT0 =  !( (A0BAR & B0BAR     ) | (A0 & B0BAR & L1) |               (A0BAR & B0    & L3) | (A0 & B0    & L2) ) ;   BOT0 =  !( (A0BAR & B0BAR     ) | (A0 & B0BAR & L1) |               (A0BAR & B0    & L3) | (A0 & B0    & L2) ) ;let    TOP1 =  !( (A1BAR & B1BAR & L6) | (A1 & B1BAR & L4) |               (A1BAR & B1    & L4) | (A1 & B1    & L5) ) ;   TOP1 =  !( (A1BAR & B1BAR & L6) | (A1 & B1BAR & L4) |               (A1BAR & B1    & L4) | (A1 & B1    & L5) ) ;let    BOT1 =  !( (A1BAR & B1BAR     ) | (A1 & B1BAR & L1) |               (A1BAR & B1    & L3) | (A1 & B1    & L2) ) ;   BOT1 =  !( (A1BAR & B1BAR     ) | (A1 & B1BAR & L1) |               (A1BAR & B1    & L3) | (A1 & B1    & L2) ) ;let    TOP2 =  !( (A2BAR & B2BAR & L6) | (A2 & B2BAR & L4) |               (A2BAR & B2    & L4) | (A2 & B2    & L5) ) ;   TOP2 =  !( (A2BAR & B2BAR & L6) | (A2 & B2BAR & L4) |               (A2BAR & B2    & L4) | (A2 & B2    & L5) ) ;let    BOT2 =  !( (A2BAR & B2BAR     ) | (A2 & B2BAR & L1) |               (A2BAR & B2    & L3) | (A2 & B2    & L2) ) ;   BOT2 =  !( (A2BAR & B2BAR     ) | (A2 & B2BAR & L1) |               (A2BAR & B2    & L3) | (A2 & B2    & L2) ) ;let    TOP3 =  !( (A3BAR & B3BAR & L6) | (A3 & B3BAR & L4) |               (A3BAR & B3    & L4) | (A3 & B3    & L5) ) ;   TOP3 =  !( (A3BAR & B3BAR & L6) | (A3 & B3BAR & L4) |               (A3BAR & B3    & L4) | (A3 & B3    & L5) ) ;let    BOT3 =  !( (A3BAR & B3BAR     ) | (A3 & B3BAR & L1) |               (A3BAR & B3    & L3) | (A3 & B3    & L2) ) ;   BOT3 =  !( (A3BAR & B3BAR     ) | (A3 & B3BAR & L1) |               (A3BAR & B3    & L3) | (A3 & B3    & L2) ) ;   F0   =  !(TOP0 ^   !(  CN & L0) ) ;   F1   =  !(TOP1 ^ !( (  CN & L0 & TOP0) |                      (BOT0 & L0       ) ) ) ;   F2   =  !(TOP2 ^ !( (  CN & L0 & TOP0 & TOP1) |                      (BOT0 & L0        & TOP1) |                      (BOT1 & L0              ) ) ) ;let    PRE3 =  !( (  CN & L0 & TOP0 & TOP1 & TOP2) |               (BOT0 & L0        & TOP1 & TOP2) |               (BOT1 & L0               & TOP2) |               (BOT2 & L0                     ) ) ;   PRE3 =  !( (  CN & L0 & TOP0 & TOP1 & TOP2) |               (BOT0 & L0        & TOP1 & TOP2) |               (BOT1 & L0               & TOP2) |               (BOT2 & L0                     ) ) ;   F3   =  !(TOP3 ^ PRE3) ;   CN_4 =  (TOP0 & TOP1 & TOP2 & TOP3 &   CN) |                   (TOP1 & TOP2 & TOP3 & BOT0) |                          (TOP2 & TOP3 & BOT1) |                                 (TOP3 & BOT2) |                                        (BOT3) ;   OVR  =  !CN_4 ^ PRE3 ;');
		Connect(this.ULS382ALOG.pins.S2_I, this.pins.S2_I);
		Connect(this.ULS382ALOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS382ALOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS382ALOG.pins.CN_I, this.pins.CN_I);
		Connect(this.ULS382ALOG.pins.A3_I, this.pins.A3_I);
		Connect(this.ULS382ALOG.pins.A2_I, this.pins.A2_I);
		Connect(this.ULS382ALOG.pins.A1_I, this.pins.A1_I);
		Connect(this.ULS382ALOG.pins.A0_I, this.pins.A0_I);
		Connect(this.ULS382ALOG.pins.B3_I, this.pins.B3_I);
		Connect(this.ULS382ALOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS382ALOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS382ALOG.pins.B0_I, this.pins.B0_I);
		let S2 = new Pin();
		Connect(this.ULS382ALOG.pins.S2, S2);
		let S1 = new Pin();
		Connect(this.ULS382ALOG.pins.S1, S1);
		let S0 = new Pin();
		Connect(this.ULS382ALOG.pins.S0, S0);
		let CN = new Pin();
		Connect(this.ULS382ALOG.pins.CN, CN);
		let A3 = new Pin();
		Connect(this.ULS382ALOG.pins.A3, A3);
		let A2 = new Pin();
		Connect(this.ULS382ALOG.pins.A2, A2);
		let A1 = new Pin();
		Connect(this.ULS382ALOG.pins.A1, A1);
		let A0 = new Pin();
		Connect(this.ULS382ALOG.pins.A0, A0);
		let B3 = new Pin();
		Connect(this.ULS382ALOG.pins.B3, B3);
		let B2 = new Pin();
		Connect(this.ULS382ALOG.pins.B2, B2);
		let B1 = new Pin();
		Connect(this.ULS382ALOG.pins.B1, B1);
		let B0 = new Pin();
		Connect(this.ULS382ALOG.pins.B0, B0);
		let F3 = new Pin();
		Connect(this.ULS382ALOG.pins.F3, F3);
		let F2 = new Pin();
		Connect(this.ULS382ALOG.pins.F2, F2);
		let F1 = new Pin();
		Connect(this.ULS382ALOG.pins.F1, F1);
		let F0 = new Pin();
		Connect(this.ULS382ALOG.pins.F0, F0);
		let OVR = new Pin();
		Connect(this.ULS382ALOG.pins.OVR, OVR);
		let CN_4 = new Pin();
		Connect(this.ULS382ALOG.pins.CN_4, CN_4);
		Connect(F3, this.pins.F3_O);
		Connect(F2, this.pins.F2_O);
		Connect(F1, this.pins.F1_O);
		Connect(F0, this.pins.F0_O);
		Connect(OVR, this.pins.OVR_O);
		Connect(CN_4, this.pins.CN_4_O);
	}
}
/**
 * Quadruple 2-Input Exclusive-OR-Gates
 */
class SN74LS386A extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.UBUF = new bufa(2);
		this.UINV = new inva(2);
		this.UY = new ao(2,2);
	}
}
/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74LS390 extends Component {
	constructor() {
		super();
		this.pins = {
			CKA_I: new Pin(),
			CKB_I: new Pin(),
			CLR_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.ULS390LOG = new logicexp(['CKA_I','CKB_I','CLR_I','QBBAR','QCBAR','QDBAR'], ['CKA','CKB','CLR','CLRBAR','CLOCK2','CLOCK4'], []).Logic('   CKA    =  CKA_I ;   CKB    =  CKB_I ;   CLR    =  CLR_I ;   CLRBAR =  !CLR ;   CLOCK2 =  CKB & QDBAR ;   CLOCK4 =  !((QBBAR & QDBAR) | (QCBAR & QDBAR)) & CKB ;');
		Connect(this.ULS390LOG.pins.CKA_I, this.pins.CKA_I);
		Connect(this.ULS390LOG.pins.CKB_I, this.pins.CKB_I);
		Connect(this.ULS390LOG.pins.CLR_I, this.pins.CLR_I);
		let QBBAR = new Pin();
		Connect(this.ULS390LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS390LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS390LOG.pins.QDBAR, QDBAR);
		let CKA = new Pin();
		Connect(this.ULS390LOG.pins.CKA, CKA);
		let CKB = new Pin();
		Connect(this.ULS390LOG.pins.CKB, CKB);
		let CLR = new Pin();
		Connect(this.ULS390LOG.pins.CLR, CLR);
		let CLRBAR = new Pin();
		Connect(this.ULS390LOG.pins.CLRBAR, CLRBAR);
		let CLOCK2 = new Pin();
		Connect(this.ULS390LOG.pins.CLOCK2, CLOCK2);
		let CLOCK4 = new Pin();
		Connect(this.ULS390LOG.pins.CLOCK4, CLOCK4);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * COUNTER BINARY 4-BIT, ASYNCHRONOUS
 */
class SN74LS393 extends Component {
	constructor() {
		super();
		this.pins = {
			A_I: new Pin(),
			CLR_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new bufa(2);
		this.U6 = new inv();
		let CLR = new Pin();
		Connect(this.U6.pins.IN, CLR);
		let CLRBAR = new Pin();
		Connect(this.U6.pins.OUT, CLRBAR);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * 4-BIT CASCADABLE SHIFT REGISTERS WITH 3 STATE OUTPUTS
 */
class SN74LS395A extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			LD_SHBAR_I: new Pin(),
			CLRBAR_I: new Pin(),
			SER_I: new Pin(),
			OCBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QD_P_O: new Pin(),
		}
		this.U395ALOG = new logicexp(['CLK_I','LD_SHBAR_I','CLRBAR_I','SER_I','OCBAR_I','A_I','B_I','C_I','D_I','QA0','QB0','QC0','QABAR','QBBAR','QCBAR','QDBAR'], ['KA','KB','KC','KD','JA','JB','JC','JD','CLK','LD_SHBAR','CLRBAR','SER','OCBAR','A','B','C','D','QA','QB','QC','QD'], []).Logic('let    SHBAR =  !LD_SHBAR_I ;   SHBAR =  !LD_SHBAR_I ;   CLK =  CLK_I ;   LD_SHBAR =  LD_SHBAR_I ;   CLRBAR =  CLRBAR_I ;   SER =  SER_I ;   OCBAR =  OCBAR_I ;   A =  A_I;   B =  B_I ;   C =  C_I ;   D =  D_I ;   KA =  !((SER & SHBAR) | (LD_SHBAR & A)) ;   KB =  !((QA0 & SHBAR) | (LD_SHBAR & B)) ;   KC =  !((QB0 & SHBAR) | (LD_SHBAR & C)) ;   KD =  !((QC0 & SHBAR) | (LD_SHBAR & D)) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;   QA =  !QABAR ;   QB =  !QBBAR ;   QC =  !QCBAR ;   QD =  !QDBAR ;');
		Connect(this.U395ALOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.U395ALOG.pins.LD_SHBAR_I, this.pins.LD_SHBAR_I);
		Connect(this.U395ALOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.U395ALOG.pins.SER_I, this.pins.SER_I);
		Connect(this.U395ALOG.pins.OCBAR_I, this.pins.OCBAR_I);
		Connect(this.U395ALOG.pins.A_I, this.pins.A_I);
		Connect(this.U395ALOG.pins.B_I, this.pins.B_I);
		Connect(this.U395ALOG.pins.C_I, this.pins.C_I);
		Connect(this.U395ALOG.pins.D_I, this.pins.D_I);
		let QA0 = new Pin();
		Connect(this.U395ALOG.pins.QA0, QA0);
		let QB0 = new Pin();
		Connect(this.U395ALOG.pins.QB0, QB0);
		let QC0 = new Pin();
		Connect(this.U395ALOG.pins.QC0, QC0);
		let QABAR = new Pin();
		Connect(this.U395ALOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.U395ALOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.U395ALOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.U395ALOG.pins.QDBAR, QDBAR);
		let KA = new Pin();
		Connect(this.U395ALOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.U395ALOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.U395ALOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.U395ALOG.pins.KD, KD);
		let JA = new Pin();
		Connect(this.U395ALOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.U395ALOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.U395ALOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.U395ALOG.pins.JD, JD);
		let CLK = new Pin();
		Connect(this.U395ALOG.pins.CLK, CLK);
		let LD_SHBAR = new Pin();
		Connect(this.U395ALOG.pins.LD_SHBAR, LD_SHBAR);
		let CLRBAR = new Pin();
		Connect(this.U395ALOG.pins.CLRBAR, CLRBAR);
		let SER = new Pin();
		Connect(this.U395ALOG.pins.SER, SER);
		let OCBAR = new Pin();
		Connect(this.U395ALOG.pins.OCBAR, OCBAR);
		let A = new Pin();
		Connect(this.U395ALOG.pins.A, A);
		let B = new Pin();
		Connect(this.U395ALOG.pins.B, B);
		let C = new Pin();
		Connect(this.U395ALOG.pins.C, C);
		let D = new Pin();
		Connect(this.U395ALOG.pins.D, D);
		let QA = new Pin();
		Connect(this.U395ALOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.U395ALOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.U395ALOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.U395ALOG.pins.QD, QD);
		this.U1 = new jkff(4);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(this.pins.QD0, this.pins.QD_P_O);
	}
}
/**
 * Octal Storage Registers
 */
class SN74LS396 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR: new Pin(),
			CLK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			D3: new Pin(),
			D4: new Pin(),
			_1Q1: new Pin(),
			_2Q1: new Pin(),
			_1Q2: new Pin(),
			_2Q2: new Pin(),
			_1Q3: new Pin(),
			_2Q3: new Pin(),
			_1Q4: new Pin(),
			_2Q4: new Pin(),
		}
		this.UBUF = new buf();
		this.UGBD = new buf();
	}
}
class SNLS396DAT extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR: new Pin(),
			CLK: new Pin(),
			D: new Pin(),
			_1Q: new Pin(),
			_2Q: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.U1Q = new dff(1);
		Connect(this.U1Q.pins.PRESET, _D_HI);
		Connect(this.U1Q.pins.CLEAR, _D_HI);
		Connect(this.U1Q.pins.CLOCK, this.pins.CLK);
		Connect(this.U1Q.pins.D0, this.pins.D);
		let D2 = new Pin();
		Connect(this.U1Q.pins.Q0, D2);
		this.U2Q = new dff(1);
		Connect(this.U2Q.pins.PRESET, _D_HI);
		Connect(this.U2Q.pins.CLEAR, _D_HI);
		Connect(this.U2Q.pins.CLOCK, this.pins.CLK);
		Connect(this.U2Q.pins.D0, D2);
		let _D_NC = new Pin();
		Connect(this.U2Q.pins.Q0, _D_NC);
		this.UQOUT = new nora(2,2);
	}
}
/**
 * MULTIPLEXERS QUAD 2-INPUT WITH STORAGE
 */
class SN74LS398 extends Component {
	constructor() {
		super();
		this.pins = {
			WS_I: new Pin(),
			CLK_I: new Pin(),
			A1_I: new Pin(),
			A2_I: new Pin(),
			B1_I: new Pin(),
			B2_I: new Pin(),
			C1_I: new Pin(),
			C2_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QABAR_O: new Pin(),
			QBBAR_O: new Pin(),
			QCBAR_O: new Pin(),
			QDBAR_O: new Pin(),
		}
		this.U1 = new jkff(4);
		this.ULS398LOG = new logicexp(['WS_I','CLK_I','A1_I','A2_I','B1_I','B2_I','C1_I','C2_I','D1_I','D2_I'], ['WS','CLK','A1','A2','B1','B2','C1','C2','D1','D2','JA','JB','JC','JD','KA','KB','KC','KD','MCLK'], []).Logic('   WS =  WS_I ;   CLK =  CLK_I ;   A1 =  A1_I ;   A2 =  A2_I ;   B1 =  B1_I ;   B2 =  B2_I ;   C1 =  C1_I ;   C2 =  C2_I ;   D1 =  D1_I ;   D2 =  D2_I ;let    IWS =  !WS ;   IWS =  !WS ;   MCLK =  !CLK ;   KA =  !((A1 & IWS) | (WS & A2)) ;   KB =  !((B1 & IWS) | (WS & B2)) ;   KC =  !((C1 & IWS) | (WS & C2)) ;   KD =  !((D1 & IWS) | (WS & D2)) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;');
		Connect(this.ULS398LOG.pins.WS_I, this.pins.WS_I);
		Connect(this.ULS398LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS398LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.ULS398LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.ULS398LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS398LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS398LOG.pins.C1_I, this.pins.C1_I);
		Connect(this.ULS398LOG.pins.C2_I, this.pins.C2_I);
		Connect(this.ULS398LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS398LOG.pins.D2_I, this.pins.D2_I);
		let WS = new Pin();
		Connect(this.ULS398LOG.pins.WS, WS);
		let CLK = new Pin();
		Connect(this.ULS398LOG.pins.CLK, CLK);
		let A1 = new Pin();
		Connect(this.ULS398LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS398LOG.pins.A2, A2);
		let B1 = new Pin();
		Connect(this.ULS398LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS398LOG.pins.B2, B2);
		let C1 = new Pin();
		Connect(this.ULS398LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS398LOG.pins.C2, C2);
		let D1 = new Pin();
		Connect(this.ULS398LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS398LOG.pins.D2, D2);
		let JA = new Pin();
		Connect(this.ULS398LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.ULS398LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.ULS398LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.ULS398LOG.pins.JD, JD);
		let KA = new Pin();
		Connect(this.ULS398LOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.ULS398LOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.ULS398LOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.ULS398LOG.pins.KD, KD);
		let MCLK = new Pin();
		Connect(this.ULS398LOG.pins.MCLK, MCLK);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
		Connect(this.pins.QABAR, this.pins.QABAR_O);
		Connect(this.pins.QBBAR, this.pins.QBBAR_O);
		Connect(this.pins.QCBAR, this.pins.QCBAR_O);
		Connect(this.pins.QDBAR, this.pins.QDBAR_O);
	}
}
/**
 * MULTIPLEXERS QUAD 2-INPUT WITH STORAGE
 */
class SN74LS399 extends Component {
	constructor() {
		super();
		this.pins = {
			WS_I: new Pin(),
			CLK_I: new Pin(),
			A1_I: new Pin(),
			A2_I: new Pin(),
			B1_I: new Pin(),
			B2_I: new Pin(),
			C1_I: new Pin(),
			C2_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(4);
		this.ULS399LOG = new logicexp(['WS_I','CLK_I','A1_I','A2_I','B1_I','B2_I','C1_I','C2_I','D1_I','D2_I'], ['WS','CLK','A1','A2','B1','B2','C1','C2','D1','D2','JA','JB','JC','JD','KA','KB','KC','KD','MCLK'], []).Logic('   WS =  WS_I ;   CLK =  CLK_I ;   A1 =  A1_I ;   A2 =  A2_I ;   B1 =  B1_I ;   B2 =  B2_I ;   C1 =  C1_I ;   C2 =  C2_I ;   D1 =  D1_I ;   D2 =  D2_I ;let    IWS =  !WS ;   IWS =  !WS ;   MCLK =  !CLK ;   KA =  !((A1 & IWS) | (WS & A2)) ;   KB =  !((B1 & IWS) | (WS & B2)) ;   KC =  !((C1 & IWS) | (WS & C2)) ;   KD =  !((D1 & IWS) | (WS & D2)) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;');
		Connect(this.ULS399LOG.pins.WS_I, this.pins.WS_I);
		Connect(this.ULS399LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS399LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.ULS399LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.ULS399LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.ULS399LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.ULS399LOG.pins.C1_I, this.pins.C1_I);
		Connect(this.ULS399LOG.pins.C2_I, this.pins.C2_I);
		Connect(this.ULS399LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS399LOG.pins.D2_I, this.pins.D2_I);
		let WS = new Pin();
		Connect(this.ULS399LOG.pins.WS, WS);
		let CLK = new Pin();
		Connect(this.ULS399LOG.pins.CLK, CLK);
		let A1 = new Pin();
		Connect(this.ULS399LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS399LOG.pins.A2, A2);
		let B1 = new Pin();
		Connect(this.ULS399LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS399LOG.pins.B2, B2);
		let C1 = new Pin();
		Connect(this.ULS399LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS399LOG.pins.C2, C2);
		let D1 = new Pin();
		Connect(this.ULS399LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS399LOG.pins.D2, D2);
		let JA = new Pin();
		Connect(this.ULS399LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.ULS399LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.ULS399LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.ULS399LOG.pins.JD, JD);
		let KA = new Pin();
		Connect(this.ULS399LOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.ULS399LOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.ULS399LOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.ULS399LOG.pins.KD, KD);
		let MCLK = new Pin();
		Connect(this.ULS399LOG.pins.MCLK, MCLK);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * QUADRUPLE TRIDIRECTIONAL BUS TRANSCEIVERS WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS440 extends Component {
	constructor() {
		super();
		this.pins = {
			CSBAR_I: new Pin(),
			GBARA_I: new Pin(),
			GBARB_I: new Pin(),
			GBARC_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			A1_T: new Pin(),
			A2_T: new Pin(),
			A3_T: new Pin(),
			A4_T: new Pin(),
			B1_T: new Pin(),
			B2_T: new Pin(),
			B3_T: new Pin(),
			B4_T: new Pin(),
			C1_T: new Pin(),
			C2_T: new Pin(),
			C3_T: new Pin(),
			C4_T: new Pin(),
		}
		this.ULS440BUF = new bufa(12);
		this.ULS440LOG = new logicexp(['CSBAR_I','GBARA_I','GBARB_I','GBARC_I','S0_I','S1_I','A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4'], ['CSBAR','GBARA','GBARB','GBARC','S0','S1','A1O','A2O','A3O','A4O','B1O','B2O','B3O','B4O','C1O','C2O','C3O','C4O','ENA','ENB','ENC'], []).Logic('   CSBAR =  CSBAR_I ;   GBARA =  GBARA_I ;   GBARB =  GBARB_I ;   GBARC =  GBARC_I ;   S0 =  S0_I ;   S1 =  S1_I ;let    CS =  !CSBAR ;   CS =  !CSBAR ;let    S0BAR =  !S0 ;   S0BAR =  !S0 ;let    S1BAR =  !S1 ;   S1BAR =  !S1 ;let    _S1_S0 =  S0BAR & S1BAR ;   _S1_S0 =  S0BAR & S1BAR ;let    _S1S0 =  S1BAR & S0 ;   _S1S0 =  S1BAR & S0 ;let    S1_S0 =  S1 & S0BAR ;   S1_S0 =  S1 & S0BAR ;   ENA =  ((S0 ^ S1) & !GBARA & CS) ;   ENB =  (S0BAR & !GBARB & CS) ;   ENC =  (S1BAR & !GBARC & CS) ;   A1O =  !((_S1S0  & !B1 & ENA) | (S1_S0 & !C1 & ENA )) ;   A2O =  !((_S1S0  & !B2 & ENA) | (S1_S0 & !C2 & ENA )) ;   A3O =  !((_S1S0  & !B3 & ENA) | (S1_S0 & !C3 & ENA )) ;   A4O =  !((_S1S0  & !B4 & ENA) | (S1_S0 & !C4 & ENA )) ;   B1O =  !((_S1_S0 & !A1 & ENB) | (S1_S0 & !C1 & ENB )) ;   B2O =  !((_S1_S0 & !A2 & ENB) | (S1_S0 & !C2 & ENB )) ;   B3O =  !((_S1_S0 & !A3 & ENB) | (S1_S0 & !C3 & ENB )) ;   B4O =  !((_S1_S0 & !A4 & ENB) | (S1_S0 & !C4 & ENB )) ;   C1O =  !((_S1_S0 & !A1 & ENC) | (_S1S0 & !B1 & ENC )) ;   C2O =  !((_S1_S0 & !A2 & ENC) | (_S1S0 & !B2 & ENC )) ;   C3O =  !((_S1_S0 & !A3 & ENC) | (_S1S0 & !B3 & ENC )) ;   C4O =  !((_S1_S0 & !A4 & ENC) | (_S1S0 & !B4 & ENC )) ;');
		Connect(this.ULS440LOG.pins.CSBAR_I, this.pins.CSBAR_I);
		Connect(this.ULS440LOG.pins.GBARA_I, this.pins.GBARA_I);
		Connect(this.ULS440LOG.pins.GBARB_I, this.pins.GBARB_I);
		Connect(this.ULS440LOG.pins.GBARC_I, this.pins.GBARC_I);
		Connect(this.ULS440LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS440LOG.pins.S1_I, this.pins.S1_I);
		let A1 = new Pin();
		Connect(this.ULS440LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS440LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS440LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS440LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS440LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS440LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS440LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS440LOG.pins.B4, B4);
		let C1 = new Pin();
		Connect(this.ULS440LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS440LOG.pins.C2, C2);
		let C3 = new Pin();
		Connect(this.ULS440LOG.pins.C3, C3);
		let C4 = new Pin();
		Connect(this.ULS440LOG.pins.C4, C4);
		let CSBAR = new Pin();
		Connect(this.ULS440LOG.pins.CSBAR, CSBAR);
		let GBARA = new Pin();
		Connect(this.ULS440LOG.pins.GBARA, GBARA);
		let GBARB = new Pin();
		Connect(this.ULS440LOG.pins.GBARB, GBARB);
		let GBARC = new Pin();
		Connect(this.ULS440LOG.pins.GBARC, GBARC);
		let S0 = new Pin();
		Connect(this.ULS440LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS440LOG.pins.S1, S1);
		let A1O = new Pin();
		Connect(this.ULS440LOG.pins.A1O, A1O);
		let A2O = new Pin();
		Connect(this.ULS440LOG.pins.A2O, A2O);
		let A3O = new Pin();
		Connect(this.ULS440LOG.pins.A3O, A3O);
		let A4O = new Pin();
		Connect(this.ULS440LOG.pins.A4O, A4O);
		let B1O = new Pin();
		Connect(this.ULS440LOG.pins.B1O, B1O);
		let B2O = new Pin();
		Connect(this.ULS440LOG.pins.B2O, B2O);
		let B3O = new Pin();
		Connect(this.ULS440LOG.pins.B3O, B3O);
		let B4O = new Pin();
		Connect(this.ULS440LOG.pins.B4O, B4O);
		let C1O = new Pin();
		Connect(this.ULS440LOG.pins.C1O, C1O);
		let C2O = new Pin();
		Connect(this.ULS440LOG.pins.C2O, C2O);
		let C3O = new Pin();
		Connect(this.ULS440LOG.pins.C3O, C3O);
		let C4O = new Pin();
		Connect(this.ULS440LOG.pins.C4O, C4O);
		let ENA = new Pin();
		Connect(this.ULS440LOG.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.ULS440LOG.pins.ENB, ENB);
		let ENC = new Pin();
		Connect(this.ULS440LOG.pins.ENC, ENC);
		Connect(A1O, this.pins.A1_T);
		Connect(A2O, this.pins.A2_T);
		Connect(A3O, this.pins.A3_T);
		Connect(A4O, this.pins.A4_T);
		Connect(B1O, this.pins.B1_T);
		Connect(B2O, this.pins.B2_T);
		Connect(B3O, this.pins.B3_T);
		Connect(B4O, this.pins.B4_T);
		Connect(C1O, this.pins.C1_T);
		Connect(C2O, this.pins.C2_T);
		Connect(C3O, this.pins.C3_T);
		Connect(C4O, this.pins.C4_T);
	}
}
/**
 * QUADRUPLE TRIDIRECTIONAL BUS TRANSCEIVERS WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS441 extends Component {
	constructor() {
		super();
		this.pins = {
			CSBAR_I: new Pin(),
			GBARA_I: new Pin(),
			GBARB_I: new Pin(),
			GBARC_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			A1_T: new Pin(),
			A2_T: new Pin(),
			A3_T: new Pin(),
			A4_T: new Pin(),
			B1_T: new Pin(),
			B2_T: new Pin(),
			B3_T: new Pin(),
			B4_T: new Pin(),
			C1_T: new Pin(),
			C2_T: new Pin(),
			C3_T: new Pin(),
			C4_T: new Pin(),
		}
		this.ULS441BUF = new bufa(12);
		this.ULS441LOG = new logicexp(['CSBAR_I','GBARA_I','GBARB_I','GBARC_I','S0_I','S1_I','A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4'], ['CSBAR','GBARA','GBARB','GBARC','S0','S1','A1O','A2O','A3O','A4O','B1O','B2O','B3O','B4O','C1O','C2O','C3O','C4O','ENA','ENB','ENC'], []).Logic('   CSBAR =  CSBAR_I ;   GBARA =  GBARA_I ;   GBARB =  GBARB_I ;   GBARC =  GBARC_I ;   S0 =  S0_I ;   S1 =  S1_I ;let    CS =  !CSBAR ;   CS =  !CSBAR ;let    S0BAR =  !S0 ;   S0BAR =  !S0 ;let    S1BAR =  !S1 ;   S1BAR =  !S1 ;let    _S1_S0 =  S0BAR & S1BAR ;   _S1_S0 =  S0BAR & S1BAR ;let    _S1S0 =  S1BAR & S0 ;   _S1S0 =  S1BAR & S0 ;let    S1_S0 =  S1 & S0BAR ;   S1_S0 =  S1 & S0BAR ;   ENA =  ((S0 ^ S1) & !GBARA & CS) ;   ENB =  (S0BAR & !GBARB & CS) ;   ENC =  (S1BAR & !GBARC & CS) ;   A1O =  !((_S1S0 & B1  & ENA) | (S1_S0 & C1 & ENA )) ;   A2O =  !((_S1S0 & B2  & ENA) | (S1_S0 & C2 & ENA )) ;   A3O =  !((_S1S0 & B3  & ENA) | (S1_S0 & C3 & ENA )) ;   A4O =  !((_S1S0 & B4  & ENA) | (S1_S0 & C4 & ENA )) ;   B1O =  !((_S1_S0 & A1 & ENB) | (S1_S0 & C1 & ENB )) ;   B2O =  !((_S1_S0 & A2 & ENB) | (S1_S0 & C2 & ENB )) ;   B3O =  !((_S1_S0 & A3 & ENB) | (S1_S0 & C3 & ENB )) ;   B4O =  !((_S1_S0 & A4 & ENB) | (S1_S0 & C4 & ENB )) ;   C1O =  !((_S1_S0 & A1 & ENC) | (_S1S0 & B1 & ENC )) ;   C2O =  !((_S1_S0 & A2 & ENC) | (_S1S0 & B2 & ENC )) ;   C3O =  !((_S1_S0 & A3 & ENC) | (_S1S0 & B3 & ENC )) ;   C4O =  !((_S1_S0 & A4 & ENC) | (_S1S0 & B4 & ENC )) ;');
		Connect(this.ULS441LOG.pins.CSBAR_I, this.pins.CSBAR_I);
		Connect(this.ULS441LOG.pins.GBARA_I, this.pins.GBARA_I);
		Connect(this.ULS441LOG.pins.GBARB_I, this.pins.GBARB_I);
		Connect(this.ULS441LOG.pins.GBARC_I, this.pins.GBARC_I);
		Connect(this.ULS441LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS441LOG.pins.S1_I, this.pins.S1_I);
		let A1 = new Pin();
		Connect(this.ULS441LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS441LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS441LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS441LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS441LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS441LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS441LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS441LOG.pins.B4, B4);
		let C1 = new Pin();
		Connect(this.ULS441LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS441LOG.pins.C2, C2);
		let C3 = new Pin();
		Connect(this.ULS441LOG.pins.C3, C3);
		let C4 = new Pin();
		Connect(this.ULS441LOG.pins.C4, C4);
		let CSBAR = new Pin();
		Connect(this.ULS441LOG.pins.CSBAR, CSBAR);
		let GBARA = new Pin();
		Connect(this.ULS441LOG.pins.GBARA, GBARA);
		let GBARB = new Pin();
		Connect(this.ULS441LOG.pins.GBARB, GBARB);
		let GBARC = new Pin();
		Connect(this.ULS441LOG.pins.GBARC, GBARC);
		let S0 = new Pin();
		Connect(this.ULS441LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS441LOG.pins.S1, S1);
		let A1O = new Pin();
		Connect(this.ULS441LOG.pins.A1O, A1O);
		let A2O = new Pin();
		Connect(this.ULS441LOG.pins.A2O, A2O);
		let A3O = new Pin();
		Connect(this.ULS441LOG.pins.A3O, A3O);
		let A4O = new Pin();
		Connect(this.ULS441LOG.pins.A4O, A4O);
		let B1O = new Pin();
		Connect(this.ULS441LOG.pins.B1O, B1O);
		let B2O = new Pin();
		Connect(this.ULS441LOG.pins.B2O, B2O);
		let B3O = new Pin();
		Connect(this.ULS441LOG.pins.B3O, B3O);
		let B4O = new Pin();
		Connect(this.ULS441LOG.pins.B4O, B4O);
		let C1O = new Pin();
		Connect(this.ULS441LOG.pins.C1O, C1O);
		let C2O = new Pin();
		Connect(this.ULS441LOG.pins.C2O, C2O);
		let C3O = new Pin();
		Connect(this.ULS441LOG.pins.C3O, C3O);
		let C4O = new Pin();
		Connect(this.ULS441LOG.pins.C4O, C4O);
		let ENA = new Pin();
		Connect(this.ULS441LOG.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.ULS441LOG.pins.ENB, ENB);
		let ENC = new Pin();
		Connect(this.ULS441LOG.pins.ENC, ENC);
		Connect(A1O, this.pins.A1_T);
		Connect(A2O, this.pins.A2_T);
		Connect(A3O, this.pins.A3_T);
		Connect(A4O, this.pins.A4_T);
		Connect(B1O, this.pins.B1_T);
		Connect(B2O, this.pins.B2_T);
		Connect(B3O, this.pins.B3_T);
		Connect(B4O, this.pins.B4_T);
		Connect(C1O, this.pins.C1_T);
		Connect(C2O, this.pins.C2_T);
		Connect(C3O, this.pins.C3_T);
		Connect(C4O, this.pins.C4_T);
	}
}
/**
 * QUADRUPLE TRIDIRECTIONAL BUS TRANSCEIVERS WITH TRI-STATE OUTPUTS
 */
class SN74LS442 extends Component {
	constructor() {
		super();
		this.pins = {
			CSBAR_I: new Pin(),
			GBARA_I: new Pin(),
			GBARB_I: new Pin(),
			GBARC_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			A1_T: new Pin(),
			A2_T: new Pin(),
			A3_T: new Pin(),
			A4_T: new Pin(),
			B1_T: new Pin(),
			B2_T: new Pin(),
			B3_T: new Pin(),
			B4_T: new Pin(),
			C1_T: new Pin(),
			C2_T: new Pin(),
			C3_T: new Pin(),
			C4_T: new Pin(),
		}
		this.ULS442BUF = new bufa(12);
		this.ULS442LOG = new logicexp(['CSBAR_I','GBARA_I','GBARB_I','GBARC_I','S0_I','S1_I','A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4'], ['CSBAR','GBARA','GBARB','GBARC','S0','S1','A1O','A2O','A3O','A4O','B1O','B2O','B3O','B4O','C1O','C2O','C3O','C4O','ENA','ENB','ENC'], []).Logic('   CSBAR =  CSBAR_I ;   GBARA =  GBARA_I ;   GBARB =  GBARB_I ;   GBARC =  GBARC_I ;   S0 =  S0_I ;   S1 =  S1_I ;let    CS =  !CSBAR ;   CS =  !CSBAR ;let    S0BAR =  !S0 ;   S0BAR =  !S0 ;let    S1BAR =  !S1 ;   S1BAR =  !S1 ;let    _S1_S0 =  S0BAR & S1BAR ;   _S1_S0 =  S0BAR & S1BAR ;let    _S1S0 =  S1BAR & S0 ;   _S1S0 =  S1BAR & S0 ;let    S1_S0 =  S1 & S0BAR ;   S1_S0 =  S1 & S0BAR ;   ENA =  ((S0 ^ S1) & !GBARA & CS) ;   ENB =  (S0BAR & !GBARB & CS) ;   ENC =  (S1BAR & !GBARC & CS) ;   A1O =  !( (_S1S0  & !B1) | (S1_S0 & !C1) ) ;   A2O =  !( (_S1S0  & !B2) | (S1_S0 & !C2) ) ;   A3O =  !( (_S1S0  & !B3) | (S1_S0 & !C3) ) ;   A4O =  !( (_S1S0  & !B4) | (S1_S0 & !C4) ) ;   B1O =  !( (_S1_S0 & !A1) | (S1_S0 & !C1) ) ;   B2O =  !( (_S1_S0 & !A2) | (S1_S0 & !C2) ) ;   B3O =  !( (_S1_S0 & !A3) | (S1_S0 & !C3) ) ;   B4O =  !( (_S1_S0 & !A4) | (S1_S0 & !C4) ) ;   C1O =  !( (_S1_S0 & !A1) | (_S1S0 & !B1) ) ;   C2O =  !( (_S1_S0 & !A2) | (_S1S0 & !B2) ) ;   C3O =  !( (_S1_S0 & !A3) | (_S1S0 & !B3) ) ;   C4O =  !( (_S1_S0 & !A4) | (_S1S0 & !B4) ) ;');
		Connect(this.ULS442LOG.pins.CSBAR_I, this.pins.CSBAR_I);
		Connect(this.ULS442LOG.pins.GBARA_I, this.pins.GBARA_I);
		Connect(this.ULS442LOG.pins.GBARB_I, this.pins.GBARB_I);
		Connect(this.ULS442LOG.pins.GBARC_I, this.pins.GBARC_I);
		Connect(this.ULS442LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS442LOG.pins.S1_I, this.pins.S1_I);
		let A1 = new Pin();
		Connect(this.ULS442LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS442LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS442LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS442LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS442LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS442LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS442LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS442LOG.pins.B4, B4);
		let C1 = new Pin();
		Connect(this.ULS442LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS442LOG.pins.C2, C2);
		let C3 = new Pin();
		Connect(this.ULS442LOG.pins.C3, C3);
		let C4 = new Pin();
		Connect(this.ULS442LOG.pins.C4, C4);
		let CSBAR = new Pin();
		Connect(this.ULS442LOG.pins.CSBAR, CSBAR);
		let GBARA = new Pin();
		Connect(this.ULS442LOG.pins.GBARA, GBARA);
		let GBARB = new Pin();
		Connect(this.ULS442LOG.pins.GBARB, GBARB);
		let GBARC = new Pin();
		Connect(this.ULS442LOG.pins.GBARC, GBARC);
		let S0 = new Pin();
		Connect(this.ULS442LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS442LOG.pins.S1, S1);
		let A1O = new Pin();
		Connect(this.ULS442LOG.pins.A1O, A1O);
		let A2O = new Pin();
		Connect(this.ULS442LOG.pins.A2O, A2O);
		let A3O = new Pin();
		Connect(this.ULS442LOG.pins.A3O, A3O);
		let A4O = new Pin();
		Connect(this.ULS442LOG.pins.A4O, A4O);
		let B1O = new Pin();
		Connect(this.ULS442LOG.pins.B1O, B1O);
		let B2O = new Pin();
		Connect(this.ULS442LOG.pins.B2O, B2O);
		let B3O = new Pin();
		Connect(this.ULS442LOG.pins.B3O, B3O);
		let B4O = new Pin();
		Connect(this.ULS442LOG.pins.B4O, B4O);
		let C1O = new Pin();
		Connect(this.ULS442LOG.pins.C1O, C1O);
		let C2O = new Pin();
		Connect(this.ULS442LOG.pins.C2O, C2O);
		let C3O = new Pin();
		Connect(this.ULS442LOG.pins.C3O, C3O);
		let C4O = new Pin();
		Connect(this.ULS442LOG.pins.C4O, C4O);
		let ENA = new Pin();
		Connect(this.ULS442LOG.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.ULS442LOG.pins.ENB, ENB);
		let ENC = new Pin();
		Connect(this.ULS442LOG.pins.ENC, ENC);
		Connect(A1O, this.pins.A1_T);
		Connect(A2O, this.pins.A2_T);
		Connect(A3O, this.pins.A3_T);
		Connect(A4O, this.pins.A4_T);
		Connect(B1O, this.pins.B1_T);
		Connect(B2O, this.pins.B2_T);
		Connect(B3O, this.pins.B3_T);
		Connect(B4O, this.pins.B4_T);
		Connect(C1O, this.pins.C1_T);
		Connect(C2O, this.pins.C2_T);
		Connect(C3O, this.pins.C3_T);
		Connect(C4O, this.pins.C4_T);
	}
}
/**
 * QUADRUPLE TRIDIRECTIONAL BUS TRANSCEIVERS WITH TRI-STATE OUTPUTS
 */
class SN74LS443 extends Component {
	constructor() {
		super();
		this.pins = {
			CSBAR_I: new Pin(),
			GBARA_I: new Pin(),
			GBARB_I: new Pin(),
			GBARC_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			A1_T: new Pin(),
			A2_T: new Pin(),
			A3_T: new Pin(),
			A4_T: new Pin(),
			B1_T: new Pin(),
			B2_T: new Pin(),
			B3_T: new Pin(),
			B4_T: new Pin(),
			C1_T: new Pin(),
			C2_T: new Pin(),
			C3_T: new Pin(),
			C4_T: new Pin(),
		}
		this.ULS443BUF = new bufa(12);
		this.ULS443LOG = new logicexp(['CSBAR_I','GBARA_I','GBARB_I','GBARC_I','S0_I','S1_I','A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4'], ['CSBAR','GBARA','GBARB','GBARC','S0','S1','A1O','A2O','A3O','A4O','B1O','B2O','B3O','B4O','C1O','C2O','C3O','C4O','ENA','ENB','ENC'], []).Logic('   CSBAR =  CSBAR_I ;   GBARA =  GBARA_I ;   GBARB =  GBARB_I ;   GBARC =  GBARC_I ;   S0 =  S0_I ;   S1 =  S1_I ;let    CS =  !CSBAR ;   CS =  !CSBAR ;let    S0BAR =  !S0 ;   S0BAR =  !S0 ;let    S1BAR =  !S1 ;   S1BAR =  !S1 ;let    _S1_S0 =  S0BAR & S1BAR ;   _S1_S0 =  S0BAR & S1BAR ;let    _S1S0 =  S1BAR & S0 ;   _S1S0 =  S1BAR & S0 ;let    S1_S0 =  S1 & S0BAR ;   S1_S0 =  S1 & S0BAR ;   ENA =  ((S0 ^ S1) & !GBARA & CS) ;   ENB =  (S0BAR & !GBARB & CS) ;   ENC =  (S1BAR & !GBARC & CS) ;   A1O =  !( (_S1S0  & B1) | (S1_S0 & C1) ) ;   A2O =  !( (_S1S0  & B2) | (S1_S0 & C2) ) ;   A3O =  !( (_S1S0  & B3) | (S1_S0 & C3) ) ;   A4O =  !( (_S1S0  & B4) | (S1_S0 & C4) ) ;   B1O =  !( (_S1_S0 & A1) | (S1_S0 & C1) ) ;   B2O =  !( (_S1_S0 & A2) | (S1_S0 & C2) ) ;   B3O =  !( (_S1_S0 & A3) | (S1_S0 & C3) ) ;   B4O =  !( (_S1_S0 & A4) | (S1_S0 & C4) ) ;   C1O =  !( (_S1_S0 & A1) | (_S1S0 & B1) ) ;   C2O =  !( (_S1_S0 & A2) | (_S1S0 & B2) ) ;   C3O =  !( (_S1_S0 & A3) | (_S1S0 & B3) ) ;   C4O =  !( (_S1_S0 & A4) | (_S1S0 & B4) ) ;');
		Connect(this.ULS443LOG.pins.CSBAR_I, this.pins.CSBAR_I);
		Connect(this.ULS443LOG.pins.GBARA_I, this.pins.GBARA_I);
		Connect(this.ULS443LOG.pins.GBARB_I, this.pins.GBARB_I);
		Connect(this.ULS443LOG.pins.GBARC_I, this.pins.GBARC_I);
		Connect(this.ULS443LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS443LOG.pins.S1_I, this.pins.S1_I);
		let A1 = new Pin();
		Connect(this.ULS443LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS443LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS443LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS443LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS443LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS443LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS443LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS443LOG.pins.B4, B4);
		let C1 = new Pin();
		Connect(this.ULS443LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS443LOG.pins.C2, C2);
		let C3 = new Pin();
		Connect(this.ULS443LOG.pins.C3, C3);
		let C4 = new Pin();
		Connect(this.ULS443LOG.pins.C4, C4);
		let CSBAR = new Pin();
		Connect(this.ULS443LOG.pins.CSBAR, CSBAR);
		let GBARA = new Pin();
		Connect(this.ULS443LOG.pins.GBARA, GBARA);
		let GBARB = new Pin();
		Connect(this.ULS443LOG.pins.GBARB, GBARB);
		let GBARC = new Pin();
		Connect(this.ULS443LOG.pins.GBARC, GBARC);
		let S0 = new Pin();
		Connect(this.ULS443LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS443LOG.pins.S1, S1);
		let A1O = new Pin();
		Connect(this.ULS443LOG.pins.A1O, A1O);
		let A2O = new Pin();
		Connect(this.ULS443LOG.pins.A2O, A2O);
		let A3O = new Pin();
		Connect(this.ULS443LOG.pins.A3O, A3O);
		let A4O = new Pin();
		Connect(this.ULS443LOG.pins.A4O, A4O);
		let B1O = new Pin();
		Connect(this.ULS443LOG.pins.B1O, B1O);
		let B2O = new Pin();
		Connect(this.ULS443LOG.pins.B2O, B2O);
		let B3O = new Pin();
		Connect(this.ULS443LOG.pins.B3O, B3O);
		let B4O = new Pin();
		Connect(this.ULS443LOG.pins.B4O, B4O);
		let C1O = new Pin();
		Connect(this.ULS443LOG.pins.C1O, C1O);
		let C2O = new Pin();
		Connect(this.ULS443LOG.pins.C2O, C2O);
		let C3O = new Pin();
		Connect(this.ULS443LOG.pins.C3O, C3O);
		let C4O = new Pin();
		Connect(this.ULS443LOG.pins.C4O, C4O);
		let ENA = new Pin();
		Connect(this.ULS443LOG.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.ULS443LOG.pins.ENB, ENB);
		let ENC = new Pin();
		Connect(this.ULS443LOG.pins.ENC, ENC);
		Connect(A1O, this.pins.A1_T);
		Connect(A2O, this.pins.A2_T);
		Connect(A3O, this.pins.A3_T);
		Connect(A4O, this.pins.A4_T);
		Connect(B1O, this.pins.B1_T);
		Connect(B2O, this.pins.B2_T);
		Connect(B3O, this.pins.B3_T);
		Connect(B4O, this.pins.B4_T);
		Connect(C1O, this.pins.C1_T);
		Connect(C2O, this.pins.C2_T);
		Connect(C3O, this.pins.C3_T);
		Connect(C4O, this.pins.C4_T);
	}
}
/**
 * QUADRUPLE TRIDIRECTIONAL BUS TRANSCEIVERS WITH TRI-STATE OUTPUTS
 */
class SN74LS444 extends Component {
	constructor() {
		super();
		this.pins = {
			CSBAR_I: new Pin(),
			GBARA_I: new Pin(),
			GBARB_I: new Pin(),
			GBARC_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			A1_T: new Pin(),
			A2_T: new Pin(),
			A3_T: new Pin(),
			A4_T: new Pin(),
			B1_T: new Pin(),
			B2_T: new Pin(),
			B3_T: new Pin(),
			B4_T: new Pin(),
			C1_T: new Pin(),
			C2_T: new Pin(),
			C3_T: new Pin(),
			C4_T: new Pin(),
		}
		this.ULS444BUF = new bufa(12);
		this.ULS444LOG = new logicexp(['CSBAR_I','GBARA_I','GBARB_I','GBARC_I','S0_I','S1_I','A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4'], ['CSBAR','GBARA','GBARB','GBARC','S0','S1','A1O','A2O','A3O','A4O','B1O','B2O','B3O','B4O','C1O','C2O','C3O','C4O','ENA','ENB','ENC'], []).Logic('   CSBAR =  CSBAR_I ;   GBARA =  GBARA_I ;   GBARB =  GBARB_I ;   GBARC =  GBARC_I ;   S0 =  S0_I ;   S1 =  S1_I ;let    CS =  !CSBAR ;   CS =  !CSBAR ;let    S0BAR =  !S0 ;   S0BAR =  !S0 ;let    S1BAR =  !S1 ;   S1BAR =  !S1 ;let    _S1_S0 =  S0BAR & S1BAR ;   _S1_S0 =  S0BAR & S1BAR ;let    _S1S0 =  S1BAR & S0 ;   _S1S0 =  S1BAR & S0 ;let    S1_S0 =  S1 & S0BAR ;   S1_S0 =  S1 & S0BAR ;   ENA =  ((S0 ^ S1) & !GBARA & CS) ;   ENB =  (S0BAR & !GBARB & CS) ;   ENC =  (S1BAR & !GBARC & CS) ;   A1O =  !( (_S1S0  & B1) | (S1_S0 & C1) ) ;   A2O =  !( (_S1S0  & B2) | (S1_S0 & C2) ) ;   A3O =  !( (_S1S0  & B3) | (S1_S0 & C3) ) ;   A4O =  !( (_S1S0  & B4) | (S1_S0 & C4) ) ;   B1O =  !( (_S1_S0 & A1) | (S1_S0 & !C1) ) ;   B2O =  !( (_S1_S0 & A2) | (S1_S0 & !C2) ) ;   B3O =  !( (_S1_S0 & A3) | (S1_S0 & !C3) ) ;   B4O =  !( (_S1_S0 & A4) | (S1_S0 & !C4) ) ;   C1O =  !( (_S1_S0 & A1) | (_S1S0 & !B1) ) ;   C2O =  !( (_S1_S0 & A2) | (_S1S0 & !B2) ) ;   C3O =  !( (_S1_S0 & A3) | (_S1S0 & !B3) ) ;   C4O =  !( (_S1_S0 & A4) | (_S1S0 & !B4) ) ;');
		Connect(this.ULS444LOG.pins.CSBAR_I, this.pins.CSBAR_I);
		Connect(this.ULS444LOG.pins.GBARA_I, this.pins.GBARA_I);
		Connect(this.ULS444LOG.pins.GBARB_I, this.pins.GBARB_I);
		Connect(this.ULS444LOG.pins.GBARC_I, this.pins.GBARC_I);
		Connect(this.ULS444LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS444LOG.pins.S1_I, this.pins.S1_I);
		let A1 = new Pin();
		Connect(this.ULS444LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS444LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS444LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS444LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS444LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS444LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS444LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS444LOG.pins.B4, B4);
		let C1 = new Pin();
		Connect(this.ULS444LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS444LOG.pins.C2, C2);
		let C3 = new Pin();
		Connect(this.ULS444LOG.pins.C3, C3);
		let C4 = new Pin();
		Connect(this.ULS444LOG.pins.C4, C4);
		let CSBAR = new Pin();
		Connect(this.ULS444LOG.pins.CSBAR, CSBAR);
		let GBARA = new Pin();
		Connect(this.ULS444LOG.pins.GBARA, GBARA);
		let GBARB = new Pin();
		Connect(this.ULS444LOG.pins.GBARB, GBARB);
		let GBARC = new Pin();
		Connect(this.ULS444LOG.pins.GBARC, GBARC);
		let S0 = new Pin();
		Connect(this.ULS444LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS444LOG.pins.S1, S1);
		let A1O = new Pin();
		Connect(this.ULS444LOG.pins.A1O, A1O);
		let A2O = new Pin();
		Connect(this.ULS444LOG.pins.A2O, A2O);
		let A3O = new Pin();
		Connect(this.ULS444LOG.pins.A3O, A3O);
		let A4O = new Pin();
		Connect(this.ULS444LOG.pins.A4O, A4O);
		let B1O = new Pin();
		Connect(this.ULS444LOG.pins.B1O, B1O);
		let B2O = new Pin();
		Connect(this.ULS444LOG.pins.B2O, B2O);
		let B3O = new Pin();
		Connect(this.ULS444LOG.pins.B3O, B3O);
		let B4O = new Pin();
		Connect(this.ULS444LOG.pins.B4O, B4O);
		let C1O = new Pin();
		Connect(this.ULS444LOG.pins.C1O, C1O);
		let C2O = new Pin();
		Connect(this.ULS444LOG.pins.C2O, C2O);
		let C3O = new Pin();
		Connect(this.ULS444LOG.pins.C3O, C3O);
		let C4O = new Pin();
		Connect(this.ULS444LOG.pins.C4O, C4O);
		let ENA = new Pin();
		Connect(this.ULS444LOG.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.ULS444LOG.pins.ENB, ENB);
		let ENC = new Pin();
		Connect(this.ULS444LOG.pins.ENC, ENC);
		Connect(A1O, this.pins.A1_T);
		Connect(A2O, this.pins.A2_T);
		Connect(A3O, this.pins.A3_T);
		Connect(A4O, this.pins.A4_T);
		Connect(B1O, this.pins.B1_T);
		Connect(B2O, this.pins.B2_T);
		Connect(B3O, this.pins.B3_T);
		Connect(B4O, this.pins.B4_T);
		Connect(C1O, this.pins.C1_T);
		Connect(C2O, this.pins.C2_T);
		Connect(C3O, this.pins.C3_T);
		Connect(C4O, this.pins.C4_T);
	}
}
/**
 * DECODER_DRIVER BCD-DECIMAL WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS445 extends Component {
	constructor() {
		super();
		this.pins = {
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			Y0_O: new Pin(),
			Y1_O: new Pin(),
			Y2_O: new Pin(),
			Y3_O: new Pin(),
			Y4_O: new Pin(),
			Y5_O: new Pin(),
			Y6_O: new Pin(),
			Y7_O: new Pin(),
			Y8_O: new Pin(),
			Y9_O: new Pin(),
		}
	}
}
/**
 * QUADRUPLE BUS TRANSCEIVERS WITH INDIVIDUAL DIRECTION CONTROLS,
 */
class SN74LS446 extends Component {
	constructor() {
		super();
		this.pins = {
			GABBAR_I: new Pin(),
			GBABAR_I: new Pin(),
			DIR1_I: new Pin(),
			DIR2_I: new Pin(),
			DIR3_I: new Pin(),
			DIR4_I: new Pin(),
			A1_B: new Pin(),
			A2_B: new Pin(),
			A3_B: new Pin(),
			A4_B: new Pin(),
			B1_B: new Pin(),
			B2_B: new Pin(),
			B3_B: new Pin(),
			B4_B: new Pin(),
		}
		this.U1 = new bufa(8);
		this.ULS446LOG = new logicexp(['A1','A2','A3','A4','B1','B2','B3','B4','GABBAR_I','GBABAR_I','DIR1_I','DIR2_I','DIR3_I','DIR4_I'], ['ATOB_1','ATOB_2','ATOB_3','ATOB_4','BTOA_1','BTOA_2','BTOA_3','BTOA_4','A1O','A2O','A3O','A4O','B1O','B2O','B3O','B4O'], []).Logic('let    GABBAR =  GABBAR_I ;   GABBAR =  GABBAR_I ;let    GBABAR =  GBABAR_I ;   GBABAR =  GBABAR_I ;let    GAB    =  !GABBAR ;   GAB    =  !GABBAR ;let    GBA    =  !GBABAR ;   GBA    =  !GBABAR ;   ATOB_1 =   DIR1_I & GAB ;   BTOA_1 =  !DIR1_I & GBA ;   ATOB_2 =   DIR2_I & GAB ;   BTOA_2 =  !DIR2_I & GBA ;   ATOB_3 =   DIR3_I & GAB ;   BTOA_3 =  !DIR3_I & GBA ;   ATOB_4 =   DIR4_I & GAB ;   BTOA_4 =  !DIR4_I & GBA ;   A1O =  !B1 ;   A2O =  !B2 ;   A3O =  !B3 ;   A4O =  !B4 ;   B1O =  !A1 ;   B2O =  !A2 ;   B3O =  !A3 ;   B4O =  !A4 ;');
		let A1 = new Pin();
		Connect(this.ULS446LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS446LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS446LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS446LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS446LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS446LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS446LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS446LOG.pins.B4, B4);
		Connect(this.ULS446LOG.pins.GABBAR_I, this.pins.GABBAR_I);
		Connect(this.ULS446LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.ULS446LOG.pins.DIR1_I, this.pins.DIR1_I);
		Connect(this.ULS446LOG.pins.DIR2_I, this.pins.DIR2_I);
		Connect(this.ULS446LOG.pins.DIR3_I, this.pins.DIR3_I);
		Connect(this.ULS446LOG.pins.DIR4_I, this.pins.DIR4_I);
		let ATOB_1 = new Pin();
		Connect(this.ULS446LOG.pins.ATOB_1, ATOB_1);
		let ATOB_2 = new Pin();
		Connect(this.ULS446LOG.pins.ATOB_2, ATOB_2);
		let ATOB_3 = new Pin();
		Connect(this.ULS446LOG.pins.ATOB_3, ATOB_3);
		let ATOB_4 = new Pin();
		Connect(this.ULS446LOG.pins.ATOB_4, ATOB_4);
		let BTOA_1 = new Pin();
		Connect(this.ULS446LOG.pins.BTOA_1, BTOA_1);
		let BTOA_2 = new Pin();
		Connect(this.ULS446LOG.pins.BTOA_2, BTOA_2);
		let BTOA_3 = new Pin();
		Connect(this.ULS446LOG.pins.BTOA_3, BTOA_3);
		let BTOA_4 = new Pin();
		Connect(this.ULS446LOG.pins.BTOA_4, BTOA_4);
		let A1O = new Pin();
		Connect(this.ULS446LOG.pins.A1O, A1O);
		let A2O = new Pin();
		Connect(this.ULS446LOG.pins.A2O, A2O);
		let A3O = new Pin();
		Connect(this.ULS446LOG.pins.A3O, A3O);
		let A4O = new Pin();
		Connect(this.ULS446LOG.pins.A4O, A4O);
		let B1O = new Pin();
		Connect(this.ULS446LOG.pins.B1O, B1O);
		let B2O = new Pin();
		Connect(this.ULS446LOG.pins.B2O, B2O);
		let B3O = new Pin();
		Connect(this.ULS446LOG.pins.B3O, B3O);
		let B4O = new Pin();
		Connect(this.ULS446LOG.pins.B4O, B4O);
		Connect(A1O, this.pins.A1_B);
		Connect(A2O, this.pins.A2_B);
		Connect(A3O, this.pins.A3_B);
		Connect(A4O, this.pins.A4_B);
		Connect(B1O, this.pins.B1_B);
		Connect(B2O, this.pins.B2_B);
		Connect(B3O, this.pins.B3_B);
		Connect(B4O, this.pins.B4_B);
	}
}
/**
 * DECODER_DRIVER BCD-7 SEGMENT WITH OPEN COLLECTOR OUTPUTS
 */
class SN74LS447 extends Component {
	constructor() {
		super();
		this.pins = {
			INA_I: new Pin(),
			INB_I: new Pin(),
			INC_I: new Pin(),
			IND_I: new Pin(),
			RBIBAR_I: new Pin(),
			LTBAR_I: new Pin(),
			BIBAR_RBOBAR_B: new Pin(),
			OUTA_O: new Pin(),
			OUTB_O: new Pin(),
			OUTC_O: new Pin(),
			OUTD_O: new Pin(),
			OUTE_O: new Pin(),
			OUTF_O: new Pin(),
			OUTG_O: new Pin(),
		}
	}
}
/**
 * QUADRUPLE TRIDIRECTIONAL BUS TRANSCEIVERS WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS448 extends Component {
	constructor() {
		super();
		this.pins = {
			CSBAR_I: new Pin(),
			GBARA_I: new Pin(),
			GBARB_I: new Pin(),
			GBARC_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			A1_T: new Pin(),
			A2_T: new Pin(),
			A3_T: new Pin(),
			A4_T: new Pin(),
			B1_T: new Pin(),
			B2_T: new Pin(),
			B3_T: new Pin(),
			B4_T: new Pin(),
			C1_T: new Pin(),
			C2_T: new Pin(),
			C3_T: new Pin(),
			C4_T: new Pin(),
		}
		this.ULS448BUF = new bufa(12);
		this.ULS448LOG = new logicexp(['CSBAR_I','GBARA_I','GBARB_I','GBARC_I','S0_I','S1_I','A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4'], ['CSBAR','GBARA','GBARB','GBARC','S0','S1','A1O','A2O','A3O','A4O','B1O','B2O','B3O','B4O','C1O','C2O','C3O','C4O','ENA','ENB','ENC'], []).Logic('   CSBAR =  CSBAR_I ;   GBARA =  GBARA_I ;   GBARB =  GBARB_I ;   GBARC =  GBARC_I ;   S0 =  S0_I ;   S1 =  S1_I ;let    CS =  !CSBAR ;   CS =  !CSBAR ;let    S0BAR =  !S0 ;   S0BAR =  !S0 ;let    S1BAR =  !S1 ;   S1BAR =  !S1 ;let    _S1_S0 =  S0BAR & S1BAR ;   _S1_S0 =  S0BAR & S1BAR ;let    _S1S0 =  S1BAR & S0 ;   _S1S0 =  S1BAR & S0 ;let    S1_S0 =  S1 & S0BAR ;   S1_S0 =  S1 & S0BAR ;   ENA =  ((S0 ^ S1) & !GBARA & CS) ;   ENB =  (S0BAR & !GBARB & CS) ;   ENC =  (S1BAR & !GBARC & CS) ;   A1O =  !((_S1S0  & B1 & ENA) | (S1_S0 & C1 & ENA )) ;   A2O =  !((_S1S0  & B2 & ENA) | (S1_S0 & C2 & ENA )) ;   A3O =  !((_S1S0  & B3 & ENA) | (S1_S0 & C3 & ENA )) ;   A4O =  !((_S1S0  & B4 & ENA) | (S1_S0 & C4 & ENA )) ;   B1O =  !((_S1_S0 & A1 & ENB) | (S1_S0 & !C1 & ENB )) ;   B2O =  !((_S1_S0 & A2 & ENB) | (S1_S0 & !C2 & ENB )) ;   B3O =  !((_S1_S0 & A3 & ENB) | (S1_S0 & !C3 & ENB )) ;   B4O =  !((_S1_S0 & A4 & ENB) | (S1_S0 & !C4 & ENB )) ;   C1O =  !((_S1_S0 & A1 & ENC) | (_S1S0 & !B1 & ENC )) ;   C2O =  !((_S1_S0 & A2 & ENC) | (_S1S0 & !B2 & ENC )) ;   C3O =  !((_S1_S0 & A3 & ENC) | (_S1S0 & !B3 & ENC )) ;   C4O =  !((_S1_S0 & A4 & ENC) | (_S1S0 & !B4 & ENC )) ;');
		Connect(this.ULS448LOG.pins.CSBAR_I, this.pins.CSBAR_I);
		Connect(this.ULS448LOG.pins.GBARA_I, this.pins.GBARA_I);
		Connect(this.ULS448LOG.pins.GBARB_I, this.pins.GBARB_I);
		Connect(this.ULS448LOG.pins.GBARC_I, this.pins.GBARC_I);
		Connect(this.ULS448LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS448LOG.pins.S1_I, this.pins.S1_I);
		let A1 = new Pin();
		Connect(this.ULS448LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS448LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS448LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS448LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS448LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS448LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS448LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS448LOG.pins.B4, B4);
		let C1 = new Pin();
		Connect(this.ULS448LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.ULS448LOG.pins.C2, C2);
		let C3 = new Pin();
		Connect(this.ULS448LOG.pins.C3, C3);
		let C4 = new Pin();
		Connect(this.ULS448LOG.pins.C4, C4);
		let CSBAR = new Pin();
		Connect(this.ULS448LOG.pins.CSBAR, CSBAR);
		let GBARA = new Pin();
		Connect(this.ULS448LOG.pins.GBARA, GBARA);
		let GBARB = new Pin();
		Connect(this.ULS448LOG.pins.GBARB, GBARB);
		let GBARC = new Pin();
		Connect(this.ULS448LOG.pins.GBARC, GBARC);
		let S0 = new Pin();
		Connect(this.ULS448LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS448LOG.pins.S1, S1);
		let A1O = new Pin();
		Connect(this.ULS448LOG.pins.A1O, A1O);
		let A2O = new Pin();
		Connect(this.ULS448LOG.pins.A2O, A2O);
		let A3O = new Pin();
		Connect(this.ULS448LOG.pins.A3O, A3O);
		let A4O = new Pin();
		Connect(this.ULS448LOG.pins.A4O, A4O);
		let B1O = new Pin();
		Connect(this.ULS448LOG.pins.B1O, B1O);
		let B2O = new Pin();
		Connect(this.ULS448LOG.pins.B2O, B2O);
		let B3O = new Pin();
		Connect(this.ULS448LOG.pins.B3O, B3O);
		let B4O = new Pin();
		Connect(this.ULS448LOG.pins.B4O, B4O);
		let C1O = new Pin();
		Connect(this.ULS448LOG.pins.C1O, C1O);
		let C2O = new Pin();
		Connect(this.ULS448LOG.pins.C2O, C2O);
		let C3O = new Pin();
		Connect(this.ULS448LOG.pins.C3O, C3O);
		let C4O = new Pin();
		Connect(this.ULS448LOG.pins.C4O, C4O);
		let ENA = new Pin();
		Connect(this.ULS448LOG.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.ULS448LOG.pins.ENB, ENB);
		let ENC = new Pin();
		Connect(this.ULS448LOG.pins.ENC, ENC);
		Connect(A1O, this.pins.A1_T);
		Connect(A2O, this.pins.A2_T);
		Connect(A3O, this.pins.A3_T);
		Connect(A4O, this.pins.A4_T);
		Connect(B1O, this.pins.B1_T);
		Connect(B2O, this.pins.B2_T);
		Connect(B3O, this.pins.B3_T);
		Connect(B4O, this.pins.B4_T);
		Connect(C1O, this.pins.C1_T);
		Connect(C2O, this.pins.C2_T);
		Connect(C3O, this.pins.C3_T);
		Connect(C4O, this.pins.C4_T);
	}
}
/**
 * QUADRUPLE BUS TRANSCEIVERS WITH INDIVIDUAL DIRECTION CONTROLS,
 */
class SN74LS449 extends Component {
	constructor() {
		super();
		this.pins = {
			GABBAR_I: new Pin(),
			GBABAR_I: new Pin(),
			DIR1_I: new Pin(),
			DIR2_I: new Pin(),
			DIR3_I: new Pin(),
			DIR4_I: new Pin(),
			A1_B: new Pin(),
			A2_B: new Pin(),
			A3_B: new Pin(),
			A4_B: new Pin(),
			B1_B: new Pin(),
			B2_B: new Pin(),
			B3_B: new Pin(),
			B4_B: new Pin(),
		}
		this.U1 = new bufa(8);
		this.ULS449LOG = new logicexp(['A1','A2','A3','A4','B1','B2','B3','B4','GABBAR_I','GBABAR_I','DIR1_I','DIR2_I','DIR3_I','DIR4_I'], ['ATOB_1','ATOB_2','ATOB_3','ATOB_4','BTOA_1','BTOA_2','BTOA_3','BTOA_4','A1O','A2O','A3O','A4O','B1O','B2O','B3O','B4O'], []).Logic('let    GABBAR =  GABBAR_I ;   GABBAR =  GABBAR_I ;let    GBABAR =  GBABAR_I ;   GBABAR =  GBABAR_I ;let    GAB    =  !GABBAR ;   GAB    =  !GABBAR ;let    GBA    =  !GBABAR ;   GBA    =  !GBABAR ;   ATOB_1 =   DIR1_I & GAB ;   BTOA_1 =  !DIR1_I & GBA ;   ATOB_2 =   DIR2_I & GAB ;   BTOA_2 =  !DIR2_I & GBA ;   ATOB_3 =   DIR3_I & GAB ;   BTOA_3 =  !DIR3_I & GBA ;   ATOB_4 =   DIR4_I & GAB ;   BTOA_4 =  !DIR4_I & GBA ;   A1O =  B1 ;   A2O =  B2 ;   A3O =  B3 ;   A4O =  B4 ;   B1O =  A1 ;   B2O =  A2 ;   B3O =  A3 ;   B4O =  A4 ;');
		let A1 = new Pin();
		Connect(this.ULS449LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS449LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS449LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS449LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.ULS449LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS449LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS449LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS449LOG.pins.B4, B4);
		Connect(this.ULS449LOG.pins.GABBAR_I, this.pins.GABBAR_I);
		Connect(this.ULS449LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.ULS449LOG.pins.DIR1_I, this.pins.DIR1_I);
		Connect(this.ULS449LOG.pins.DIR2_I, this.pins.DIR2_I);
		Connect(this.ULS449LOG.pins.DIR3_I, this.pins.DIR3_I);
		Connect(this.ULS449LOG.pins.DIR4_I, this.pins.DIR4_I);
		let ATOB_1 = new Pin();
		Connect(this.ULS449LOG.pins.ATOB_1, ATOB_1);
		let ATOB_2 = new Pin();
		Connect(this.ULS449LOG.pins.ATOB_2, ATOB_2);
		let ATOB_3 = new Pin();
		Connect(this.ULS449LOG.pins.ATOB_3, ATOB_3);
		let ATOB_4 = new Pin();
		Connect(this.ULS449LOG.pins.ATOB_4, ATOB_4);
		let BTOA_1 = new Pin();
		Connect(this.ULS449LOG.pins.BTOA_1, BTOA_1);
		let BTOA_2 = new Pin();
		Connect(this.ULS449LOG.pins.BTOA_2, BTOA_2);
		let BTOA_3 = new Pin();
		Connect(this.ULS449LOG.pins.BTOA_3, BTOA_3);
		let BTOA_4 = new Pin();
		Connect(this.ULS449LOG.pins.BTOA_4, BTOA_4);
		let A1O = new Pin();
		Connect(this.ULS449LOG.pins.A1O, A1O);
		let A2O = new Pin();
		Connect(this.ULS449LOG.pins.A2O, A2O);
		let A3O = new Pin();
		Connect(this.ULS449LOG.pins.A3O, A3O);
		let A4O = new Pin();
		Connect(this.ULS449LOG.pins.A4O, A4O);
		let B1O = new Pin();
		Connect(this.ULS449LOG.pins.B1O, B1O);
		let B2O = new Pin();
		Connect(this.ULS449LOG.pins.B2O, B2O);
		let B3O = new Pin();
		Connect(this.ULS449LOG.pins.B3O, B3O);
		let B4O = new Pin();
		Connect(this.ULS449LOG.pins.B4O, B4O);
		Connect(A1O, this.pins.A1_B);
		Connect(A2O, this.pins.A2_B);
		Connect(A3O, this.pins.A3_B);
		Connect(A4O, this.pins.A4_B);
		Connect(B1O, this.pins.B1_B);
		Connect(B2O, this.pins.B2_B);
		Connect(B3O, this.pins.B3_B);
		Connect(B4O, this.pins.B4_B);
	}
}
/**
 * Octal Buffers with 3-STATE Outputs
 */
class SN74LS465 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			A5: new Pin(),
			A6: new Pin(),
			A7: new Pin(),
			A8: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
			Y7: new Pin(),
			Y8: new Pin(),
		}
		this.UA = new nor(2);
		this.UB = new buf3a(8);
		Connect(this.UB.pins.D0, this.pins.A1);
		Connect(this.UB.pins.D1, this.pins.A2);
		Connect(this.UB.pins.D2, this.pins.A3);
		Connect(this.UB.pins.D3, this.pins.A4);
		Connect(this.UB.pins.D4, this.pins.A5);
		Connect(this.UB.pins.D5, this.pins.A6);
		Connect(this.UB.pins.D6, this.pins.A7);
		Connect(this.UB.pins.D7, this.pins.A8);
		let E = new Pin();
		Connect(this.UB.pins.EN, E);
		Connect(this.UB.pins.Q0, this.pins.Y1);
		Connect(this.UB.pins.Q1, this.pins.Y2);
		Connect(this.UB.pins.Q2, this.pins.Y3);
		Connect(this.UB.pins.Q3, this.pins.Y4);
		Connect(this.UB.pins.Q4, this.pins.Y5);
		Connect(this.UB.pins.Q5, this.pins.Y6);
		Connect(this.UB.pins.Q6, this.pins.Y7);
		Connect(this.UB.pins.Q7, this.pins.Y8);
	}
}
/**
 * Octal Buffers with 3-STATE Outputs
 */
class SN74LS466 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			A5: new Pin(),
			A6: new Pin(),
			A7: new Pin(),
			A8: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
			Y7: new Pin(),
			Y8: new Pin(),
		}
		this.UA = new nor(2);
		this.UB = new inv3a(8);
	}
}
/**
 * Octal Buffers with 3-STATE Outputs
 */
class SN74LS467 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A1: new Pin(),
			_1A2: new Pin(),
			_1A3: new Pin(),
			_1A4: new Pin(),
			_2A1: new Pin(),
			_2A2: new Pin(),
			_2A3: new Pin(),
			_2A4: new Pin(),
			G1BAR: new Pin(),
			G2: new Pin(),
			_1Y1: new Pin(),
			_1Y2: new Pin(),
			_1Y3: new Pin(),
			_1Y4: new Pin(),
			_2Y1: new Pin(),
			_2Y2: new Pin(),
			_2Y3: new Pin(),
			_2Y4: new Pin(),
		}
		this.UA = new inv();
		Connect(this.UA.pins.IN, this.pins.G1BAR);
		let G1 = new Pin();
		Connect(this.UA.pins.OUT, G1);
		this.UB = new buf3a(4);
		Connect(this.UB.pins.D0, this.pins._1A1);
		Connect(this.UB.pins.D1, this.pins._1A2);
		Connect(this.UB.pins.D2, this.pins._1A3);
		Connect(this.UB.pins.D3, this.pins._1A4);
		Connect(this.UB.pins.EN, G1);
		Connect(this.UB.pins.Q0, this.pins._1Y1);
		Connect(this.UB.pins.Q1, this.pins._1Y2);
		Connect(this.UB.pins.Q2, this.pins._1Y3);
		Connect(this.UB.pins.Q3, this.pins._1Y4);
		this.UC = new buf3a(4);
		Connect(this.UC.pins.D0, this.pins._2A1);
		Connect(this.UC.pins.D1, this.pins._2A2);
		Connect(this.UC.pins.D2, this.pins._2A3);
		Connect(this.UC.pins.D3, this.pins._2A4);
		Connect(this.UC.pins.EN, this.pins.G2);
		Connect(this.UC.pins.Q0, this.pins._2Y1);
		Connect(this.UC.pins.Q1, this.pins._2Y2);
		Connect(this.UC.pins.Q2, this.pins._2Y3);
		Connect(this.UC.pins.Q3, this.pins._2Y4);
	}
}
/**
 * Octal Buffers with 3-STATE Outputs
 */
class SN74LS468 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A1: new Pin(),
			_1A2: new Pin(),
			_1A3: new Pin(),
			_1A4: new Pin(),
			_2A1: new Pin(),
			_2A2: new Pin(),
			_2A3: new Pin(),
			_2A4: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			_1Y1: new Pin(),
			_1Y2: new Pin(),
			_1Y3: new Pin(),
			_1Y4: new Pin(),
			_2Y1: new Pin(),
			_2Y2: new Pin(),
			_2Y3: new Pin(),
			_2Y4: new Pin(),
		}
		this.UINV = new inva(2);
		this.U1 = new inv3a(4);
		this.U2 = new inv3a(4);
	}
}
/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74LS490 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR_I: new Pin(),
			SET9_I: new Pin(),
			CLK_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.ULS490LOG = new logicexp(['CLR_I','SET9_I','CLK_I','QA','QBBAR','QCBAR','QDBAR'], ['CLR','SET9','CLK','CLRBAR23','CLOCK2','CLOCK4','CLRBAR','SET9BAR'], []).Logic('   CLR      =  CLR_I ;   CLRBAR   =  !CLR ;   SET9     =  SET9_I ;   SET9BAR  =  !SET9 ;   CLK      =  CLK_I ;   CLRBAR23 =  CLRBAR & SET9BAR ;   CLOCK2   =  QA & QDBAR ;   CLOCK4   =  !( (QBBAR & QDBAR) | (QCBAR & QDBAR) ) & QA ;');
		Connect(this.ULS490LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.ULS490LOG.pins.SET9_I, this.pins.SET9_I);
		Connect(this.ULS490LOG.pins.CLK_I, this.pins.CLK_I);
		let QA = new Pin();
		Connect(this.ULS490LOG.pins.QA, QA);
		let QBBAR = new Pin();
		Connect(this.ULS490LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS490LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS490LOG.pins.QDBAR, QDBAR);
		let CLR = new Pin();
		Connect(this.ULS490LOG.pins.CLR, CLR);
		let SET9 = new Pin();
		Connect(this.ULS490LOG.pins.SET9, SET9);
		let CLK = new Pin();
		Connect(this.ULS490LOG.pins.CLK, CLK);
		let CLRBAR23 = new Pin();
		Connect(this.ULS490LOG.pins.CLRBAR23, CLRBAR23);
		let CLOCK2 = new Pin();
		Connect(this.ULS490LOG.pins.CLOCK2, CLOCK2);
		let CLOCK4 = new Pin();
		Connect(this.ULS490LOG.pins.CLOCK4, CLOCK4);
		let CLRBAR = new Pin();
		Connect(this.ULS490LOG.pins.CLRBAR, CLRBAR);
		let SET9BAR = new Pin();
		Connect(this.ULS490LOG.pins.SET9BAR, SET9BAR);
		Connect(QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
	}
}
/**
 * Octal Buffers and Line Drivers with 3-STATE Outputs
 */
class SN74LS540 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			A5: new Pin(),
			A6: new Pin(),
			A7: new Pin(),
			A8: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
			Y7: new Pin(),
			Y8: new Pin(),
		}
		this.UA = new nor(2);
		this.U1 = new inv3a(8);
	}
}
/**
 * Octal Buffers and Line Driver with 3-STATE Outputs
 */
class SN74LS541 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			A5: new Pin(),
			A6: new Pin(),
			A7: new Pin(),
			A8: new Pin(),
			G1BAR: new Pin(),
			G2BAR: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
			Y7: new Pin(),
			Y8: new Pin(),
		}
		this.UA = new nor(2);
		this.U1 = new buf3a(8);
		Connect(this.U1.pins.D0, this.pins.A1);
		Connect(this.U1.pins.D1, this.pins.A2);
		Connect(this.U1.pins.D2, this.pins.A3);
		Connect(this.U1.pins.D3, this.pins.A4);
		Connect(this.U1.pins.D4, this.pins.A5);
		Connect(this.U1.pins.D5, this.pins.A6);
		Connect(this.U1.pins.D6, this.pins.A7);
		Connect(this.U1.pins.D7, this.pins.A8);
		let E = new Pin();
		Connect(this.U1.pins.EN, E);
		Connect(this.U1.pins.Q0, this.pins.Y1);
		Connect(this.U1.pins.Q1, this.pins.Y2);
		Connect(this.U1.pins.Q2, this.pins.Y3);
		Connect(this.U1.pins.Q3, this.pins.Y4);
		Connect(this.U1.pins.Q4, this.pins.Y5);
		Connect(this.U1.pins.Q5, this.pins.Y6);
		Connect(this.U1.pins.Q6, this.pins.Y7);
		Connect(this.U1.pins.Q7, this.pins.Y8);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH INPUT LATCHES AND 3-STATE OUTPUT
 */
class SN74LS589 extends Component {
	constructor() {
		super();
		this.pins = {
			OCBAR_I: new Pin(),
			SRCK_I: new Pin(),
			SRLOADBAR_I: new Pin(),
			RCK_I: new Pin(),
			SER_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			E_I: new Pin(),
			F_I: new Pin(),
			G_I: new Pin(),
			H_I: new Pin(),
			QHP_O: new Pin(),
		}
		this.USTIM1 = new stim(1,1);
		this.U589LOG = new logicexp(['OCBAR_I','PWR_CLRBAR','SRCK_I','SRLOADBAR_I','RCK_I','SER_I','A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I','QA','QB','QC','QD','QE','QF','QG','QH','QABAR','QBBAR','QCBAR','QDBAR','QEBAR','QFBAR','QGBAR','QHBAR'], ['OCBAR','SRCK','SRLOADBAR','RCK','SER','A','B','C','D','E','F','G','H','SA','SB','SC','SD','SE','SF','SG','SH','RA','RB','RC','RD','RE','RF','RG','RH'], []).Logic('   OCBAR     =  OCBAR_I ;   SRCK      =  SRCK_I ;   SRLOADBAR =  SRLOADBAR_I ;   RCK       =  RCK_I ;   SER       =  SER_I ;   A         =  A_I ;   B         =  B_I ;   C         =  C_I ;   D         =  D_I ;   E         =  E_I ;   F         =  F_I ;   G         =  G_I ;   H         =  H_I ;let    SRLOAD =  !SRLOADBAR ;   SRLOAD =  !SRLOADBAR ;let    PWR_CLR =  !PWR_CLRBAR ;   PWR_CLR =  !PWR_CLRBAR ;   SA =  !(SRLOAD & QA) ;   SB =  !(SRLOAD & QB) ;   SC =  !(SRLOAD & QC) ;   SD =  !(SRLOAD & QD) ;   SE =  !(SRLOAD & QE) ;   SF =  !(SRLOAD & QF) ;   SG =  !(SRLOAD & QG) ;   SH =  !(SRLOAD & QH) ;   RA =  !(PWR_CLR  | (SRLOAD & QABAR)) ;   RB =  !(PWR_CLR  | (SRLOAD & QBBAR)) ;   RC =  !(PWR_CLR  | (SRLOAD & QCBAR)) ;   RD =  !(PWR_CLR  | (SRLOAD & QDBAR)) ;   RE =  !(PWR_CLR  | (SRLOAD & QEBAR)) ;   RF =  !(PWR_CLR  | (SRLOAD & QFBAR)) ;   RG =  !(PWR_CLR  | (SRLOAD & QGBAR)) ;   RH =  !(PWR_CLR  | (SRLOAD & QHBAR)) ;');
		Connect(this.U589LOG.pins.OCBAR_I, this.pins.OCBAR_I);
		let PWR_CLRBAR = new Pin();
		Connect(this.U589LOG.pins.PWR_CLRBAR, PWR_CLRBAR);
		Connect(this.U589LOG.pins.SRCK_I, this.pins.SRCK_I);
		Connect(this.U589LOG.pins.SRLOADBAR_I, this.pins.SRLOADBAR_I);
		Connect(this.U589LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.U589LOG.pins.SER_I, this.pins.SER_I);
		Connect(this.U589LOG.pins.A_I, this.pins.A_I);
		Connect(this.U589LOG.pins.B_I, this.pins.B_I);
		Connect(this.U589LOG.pins.C_I, this.pins.C_I);
		Connect(this.U589LOG.pins.D_I, this.pins.D_I);
		Connect(this.U589LOG.pins.E_I, this.pins.E_I);
		Connect(this.U589LOG.pins.F_I, this.pins.F_I);
		Connect(this.U589LOG.pins.G_I, this.pins.G_I);
		Connect(this.U589LOG.pins.H_I, this.pins.H_I);
		let QA = new Pin();
		Connect(this.U589LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.U589LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.U589LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.U589LOG.pins.QD, QD);
		let QE = new Pin();
		Connect(this.U589LOG.pins.QE, QE);
		let QF = new Pin();
		Connect(this.U589LOG.pins.QF, QF);
		let QG = new Pin();
		Connect(this.U589LOG.pins.QG, QG);
		let QH = new Pin();
		Connect(this.U589LOG.pins.QH, QH);
		let QABAR = new Pin();
		Connect(this.U589LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.U589LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.U589LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.U589LOG.pins.QDBAR, QDBAR);
		let QEBAR = new Pin();
		Connect(this.U589LOG.pins.QEBAR, QEBAR);
		let QFBAR = new Pin();
		Connect(this.U589LOG.pins.QFBAR, QFBAR);
		let QGBAR = new Pin();
		Connect(this.U589LOG.pins.QGBAR, QGBAR);
		let QHBAR = new Pin();
		Connect(this.U589LOG.pins.QHBAR, QHBAR);
		let OCBAR = new Pin();
		Connect(this.U589LOG.pins.OCBAR, OCBAR);
		let SRCK = new Pin();
		Connect(this.U589LOG.pins.SRCK, SRCK);
		let SRLOADBAR = new Pin();
		Connect(this.U589LOG.pins.SRLOADBAR, SRLOADBAR);
		let RCK = new Pin();
		Connect(this.U589LOG.pins.RCK, RCK);
		let SER = new Pin();
		Connect(this.U589LOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.U589LOG.pins.A, A);
		let B = new Pin();
		Connect(this.U589LOG.pins.B, B);
		let C = new Pin();
		Connect(this.U589LOG.pins.C, C);
		let D = new Pin();
		Connect(this.U589LOG.pins.D, D);
		let E = new Pin();
		Connect(this.U589LOG.pins.E, E);
		let F = new Pin();
		Connect(this.U589LOG.pins.F, F);
		let G = new Pin();
		Connect(this.U589LOG.pins.G, G);
		let H = new Pin();
		Connect(this.U589LOG.pins.H, H);
		let SA = new Pin();
		Connect(this.U589LOG.pins.SA, SA);
		let SB = new Pin();
		Connect(this.U589LOG.pins.SB, SB);
		let SC = new Pin();
		Connect(this.U589LOG.pins.SC, SC);
		let SD = new Pin();
		Connect(this.U589LOG.pins.SD, SD);
		let SE = new Pin();
		Connect(this.U589LOG.pins.SE, SE);
		let SF = new Pin();
		Connect(this.U589LOG.pins.SF, SF);
		let SG = new Pin();
		Connect(this.U589LOG.pins.SG, SG);
		let SH = new Pin();
		Connect(this.U589LOG.pins.SH, SH);
		let RA = new Pin();
		Connect(this.U589LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.U589LOG.pins.RB, RB);
		let RC = new Pin();
		Connect(this.U589LOG.pins.RC, RC);
		let RD = new Pin();
		Connect(this.U589LOG.pins.RD, RD);
		let RE = new Pin();
		Connect(this.U589LOG.pins.RE, RE);
		let RF = new Pin();
		Connect(this.U589LOG.pins.RF, RF);
		let RG = new Pin();
		Connect(this.U589LOG.pins.RG, RG);
		let RH = new Pin();
		Connect(this.U589LOG.pins.RH, RH);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, RCK);
		Connect(this.U1.pins.D0, A);
		Connect(this.U1.pins.D1, B);
		Connect(this.U1.pins.D2, C);
		Connect(this.U1.pins.D3, D);
		Connect(this.U1.pins.D4, E);
		Connect(this.U1.pins.D5, F);
		Connect(this.U1.pins.D6, G);
		Connect(this.U1.pins.D7, H);
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.Q1, QB);
		Connect(this.U1.pins.Q2, QC);
		Connect(this.U1.pins.Q3, QD);
		Connect(this.U1.pins.Q4, QE);
		Connect(this.U1.pins.Q5, QF);
		Connect(this.U1.pins.Q6, QG);
		Connect(this.U1.pins.Q7, QH);
		this.U2 = new dff(1);
		Connect(this.U2.pins.PRESET, SA);
		Connect(this.U2.pins.CLEAR, RA);
		Connect(this.U2.pins.CLOCK, SRCK);
		Connect(this.U2.pins.D0, SER);
		let Q2A = new Pin();
		Connect(this.U2.pins.Q0, Q2A);
		this.U3 = new dff(1);
		Connect(this.U3.pins.PRESET, SB);
		Connect(this.U3.pins.CLEAR, RB);
		Connect(this.U3.pins.CLOCK, SRCK);
		Connect(this.U3.pins.D0, Q2A);
		let Q2B = new Pin();
		Connect(this.U3.pins.Q0, Q2B);
		this.U4 = new dff(1);
		Connect(this.U4.pins.PRESET, SC);
		Connect(this.U4.pins.CLEAR, RC);
		Connect(this.U4.pins.CLOCK, SRCK);
		Connect(this.U4.pins.D0, Q2B);
		let Q2C = new Pin();
		Connect(this.U4.pins.Q0, Q2C);
		this.U5 = new dff(1);
		Connect(this.U5.pins.PRESET, SD);
		Connect(this.U5.pins.CLEAR, RD);
		Connect(this.U5.pins.CLOCK, SRCK);
		Connect(this.U5.pins.D0, Q2C);
		let Q2D = new Pin();
		Connect(this.U5.pins.Q0, Q2D);
		this.U6 = new dff(1);
		Connect(this.U6.pins.PRESET, SE);
		Connect(this.U6.pins.CLEAR, RE);
		Connect(this.U6.pins.CLOCK, SRCK);
		Connect(this.U6.pins.D0, Q2D);
		let Q2E = new Pin();
		Connect(this.U6.pins.Q0, Q2E);
		this.U7 = new dff(1);
		Connect(this.U7.pins.PRESET, SF);
		Connect(this.U7.pins.CLEAR, RF);
		Connect(this.U7.pins.CLOCK, SRCK);
		Connect(this.U7.pins.D0, Q2E);
		let Q2F = new Pin();
		Connect(this.U7.pins.Q0, Q2F);
		this.U8 = new dff(1);
		Connect(this.U8.pins.PRESET, SG);
		Connect(this.U8.pins.CLEAR, RG);
		Connect(this.U8.pins.CLOCK, SRCK);
		Connect(this.U8.pins.D0, Q2F);
		let Q2G = new Pin();
		Connect(this.U8.pins.Q0, Q2G);
		this.U9 = new dff(1);
		Connect(this.U9.pins.PRESET, SH);
		Connect(this.U9.pins.CLEAR, RH);
		Connect(this.U9.pins.CLOCK, SRCK);
		Connect(this.U9.pins.D0, Q2G);
		let QHP = new Pin();
		Connect(this.U9.pins.Q0, QHP);
		Connect(QHP, this.pins.QHP_O);
	}
}
class SN74LS590 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			CCK_I: new Pin(),
			RCK_I: new Pin(),
			CCKENBAR_I: new Pin(),
			CCLRBAR_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new jkff(1);
		this.U6 = new jkff(1);
		this.U7 = new jkff(1);
		this.U8 = new jkff(1);
		this.U9 = new jkff(8);
		this.ULS590LOG = new logicexp(['GBAR_I','RCK_I','CCKENBAR_I','CCK_I','CCLRBAR_I','JA','JB','JC','JD','JE','JF','JG','JH','CNTA'], ['GBAR','RCK','CCKENBAR','CCK','CCLRBAR','CNTA','CNTB','CNTC','CNTD','CNTE','CNTF','CNTG','CNTH','MCLK','RCOBAR'], []).Logic('   GBAR =  GBAR_I ;   RCK =  RCK_I ;   CCKENBAR =  CCKENBAR_I ;   CCK =  CCK_I ;   CCLRBAR =  CCLRBAR_I ;   CNTA =  !((!(CNTA & CCKENBAR) & CCK) & CCK) ;   CNTB =  JA & CNTA ;   CNTC =  JB & CNTB ;   CNTD =  JC & CNTC ;   CNTE =  JD & CNTD ;   CNTF =  JE & CNTE ;   CNTG =  JF & CNTF ;   CNTH =  JG & CNTG ;   MCLK =  !RCK ;   RCOBAR =  !(JH & JG & JF & JE & JD & JC & JB & JA) ;');
		Connect(this.ULS590LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS590LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS590LOG.pins.CCKENBAR_I, this.pins.CCKENBAR_I);
		Connect(this.ULS590LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS590LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		let JA = new Pin();
		Connect(this.ULS590LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.ULS590LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.ULS590LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.ULS590LOG.pins.JD, JD);
		let JE = new Pin();
		Connect(this.ULS590LOG.pins.JE, JE);
		let JF = new Pin();
		Connect(this.ULS590LOG.pins.JF, JF);
		let JG = new Pin();
		Connect(this.ULS590LOG.pins.JG, JG);
		let JH = new Pin();
		Connect(this.ULS590LOG.pins.JH, JH);
		let CNTA = new Pin();
		Connect(this.ULS590LOG.pins.CNTA, CNTA);
		let GBAR = new Pin();
		Connect(this.ULS590LOG.pins.GBAR, GBAR);
		let RCK = new Pin();
		Connect(this.ULS590LOG.pins.RCK, RCK);
		let CCKENBAR = new Pin();
		Connect(this.ULS590LOG.pins.CCKENBAR, CCKENBAR);
		let CCK = new Pin();
		Connect(this.ULS590LOG.pins.CCK, CCK);
		let CCLRBAR = new Pin();
		Connect(this.ULS590LOG.pins.CCLRBAR, CCLRBAR);
		let CNTB = new Pin();
		Connect(this.ULS590LOG.pins.CNTB, CNTB);
		let CNTC = new Pin();
		Connect(this.ULS590LOG.pins.CNTC, CNTC);
		let CNTD = new Pin();
		Connect(this.ULS590LOG.pins.CNTD, CNTD);
		let CNTE = new Pin();
		Connect(this.ULS590LOG.pins.CNTE, CNTE);
		let CNTF = new Pin();
		Connect(this.ULS590LOG.pins.CNTF, CNTF);
		let CNTG = new Pin();
		Connect(this.ULS590LOG.pins.CNTG, CNTG);
		let CNTH = new Pin();
		Connect(this.ULS590LOG.pins.CNTH, CNTH);
		let MCLK = new Pin();
		Connect(this.ULS590LOG.pins.MCLK, MCLK);
		let RCOBAR = new Pin();
		Connect(this.ULS590LOG.pins.RCOBAR, RCOBAR);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
		Connect(this.pins.QE, this.pins.QE_O);
		Connect(this.pins.QF, this.pins.QF_O);
		Connect(this.pins.QG, this.pins.QG_O);
		Connect(this.pins.QH, this.pins.QH_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
	}
}
class SN74LS591 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			CCK_I: new Pin(),
			RCK_I: new Pin(),
			CCKENBAR_I: new Pin(),
			CCLRBAR_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new jkff(1);
		this.U6 = new jkff(1);
		this.U7 = new jkff(1);
		this.U8 = new jkff(1);
		this.U9 = new jkff(8);
		this.ULS591LOG = new logicexp(['GBAR_I','RCK_I','CCKENBAR_I','CCK_I','CCLRBAR_I','JA','JB','JC','JD','JE','JF','JG','JH','CNTA','QA','QB','QC','QD','QE','QF','QG','QH'], ['GBAR','RCK','CCKENBAR','CCK','CCLRBAR','CNTA','CNTB','CNTC','CNTD','CNTE','CNTF','CNTG','CNTH','MCLK','RCOBAR','LQA','LQB','LQC','LQD','LQE','LQF','LQG','LQH'], []).Logic('   GBAR =  GBAR_I ;   RCK =  RCK_I ;   CCKENBAR =  CCKENBAR_I ;   CCK =  CCK_I ;   CCLRBAR =  CCLRBAR_I ;let    IG =  !GBAR ;   IG =  !GBAR ;   CNTA =  !((!(CNTA & CCKENBAR) & CCK) & CCK) ;   CNTB =  JA & CNTA ;   CNTC =  JB & CNTB ;   CNTD =  JC & CNTC ;   CNTE =  JD & CNTD ;   CNTF =  JE & CNTE ;   CNTG =  JF & CNTF ;   CNTH =  JG & CNTG ;   MCLK =  !RCK ;   RCOBAR =  !(JH & JG & JF & JE & JD & JC & JB & JA) ;   LQA =  IG & QA ;   LQB =  IG & QB ;   LQC =  IG & QC ;   LQD =  IG & QD ;   LQE =  IG & QE ;   LQF =  IG & QF ;   LQG =  IG & QG ;   LQH =  IG & QH ;');
		Connect(this.ULS591LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS591LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS591LOG.pins.CCKENBAR_I, this.pins.CCKENBAR_I);
		Connect(this.ULS591LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS591LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		let JA = new Pin();
		Connect(this.ULS591LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.ULS591LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.ULS591LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.ULS591LOG.pins.JD, JD);
		let JE = new Pin();
		Connect(this.ULS591LOG.pins.JE, JE);
		let JF = new Pin();
		Connect(this.ULS591LOG.pins.JF, JF);
		let JG = new Pin();
		Connect(this.ULS591LOG.pins.JG, JG);
		let JH = new Pin();
		Connect(this.ULS591LOG.pins.JH, JH);
		let CNTA = new Pin();
		Connect(this.ULS591LOG.pins.CNTA, CNTA);
		let QA = new Pin();
		Connect(this.ULS591LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS591LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS591LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS591LOG.pins.QD, QD);
		let QE = new Pin();
		Connect(this.ULS591LOG.pins.QE, QE);
		let QF = new Pin();
		Connect(this.ULS591LOG.pins.QF, QF);
		let QG = new Pin();
		Connect(this.ULS591LOG.pins.QG, QG);
		let QH = new Pin();
		Connect(this.ULS591LOG.pins.QH, QH);
		let GBAR = new Pin();
		Connect(this.ULS591LOG.pins.GBAR, GBAR);
		let RCK = new Pin();
		Connect(this.ULS591LOG.pins.RCK, RCK);
		let CCKENBAR = new Pin();
		Connect(this.ULS591LOG.pins.CCKENBAR, CCKENBAR);
		let CCK = new Pin();
		Connect(this.ULS591LOG.pins.CCK, CCK);
		let CCLRBAR = new Pin();
		Connect(this.ULS591LOG.pins.CCLRBAR, CCLRBAR);
		let CNTB = new Pin();
		Connect(this.ULS591LOG.pins.CNTB, CNTB);
		let CNTC = new Pin();
		Connect(this.ULS591LOG.pins.CNTC, CNTC);
		let CNTD = new Pin();
		Connect(this.ULS591LOG.pins.CNTD, CNTD);
		let CNTE = new Pin();
		Connect(this.ULS591LOG.pins.CNTE, CNTE);
		let CNTF = new Pin();
		Connect(this.ULS591LOG.pins.CNTF, CNTF);
		let CNTG = new Pin();
		Connect(this.ULS591LOG.pins.CNTG, CNTG);
		let CNTH = new Pin();
		Connect(this.ULS591LOG.pins.CNTH, CNTH);
		let MCLK = new Pin();
		Connect(this.ULS591LOG.pins.MCLK, MCLK);
		let RCOBAR = new Pin();
		Connect(this.ULS591LOG.pins.RCOBAR, RCOBAR);
		let LQA = new Pin();
		Connect(this.ULS591LOG.pins.LQA, LQA);
		let LQB = new Pin();
		Connect(this.ULS591LOG.pins.LQB, LQB);
		let LQC = new Pin();
		Connect(this.ULS591LOG.pins.LQC, LQC);
		let LQD = new Pin();
		Connect(this.ULS591LOG.pins.LQD, LQD);
		let LQE = new Pin();
		Connect(this.ULS591LOG.pins.LQE, LQE);
		let LQF = new Pin();
		Connect(this.ULS591LOG.pins.LQF, LQF);
		let LQG = new Pin();
		Connect(this.ULS591LOG.pins.LQG, LQG);
		let LQH = new Pin();
		Connect(this.ULS591LOG.pins.LQH, LQH);
		Connect(LQA, this.pins.QA_O);
		Connect(LQB, this.pins.QB_O);
		Connect(LQC, this.pins.QC_O);
		Connect(LQD, this.pins.QD_O);
		Connect(LQE, this.pins.QE_O);
		Connect(LQF, this.pins.QF_O);
		Connect(LQG, this.pins.QG_O);
		Connect(LQH, this.pins.QH_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
		this.ULS591CON = new constraint(12);
	}
}
class SN74LS592 extends Component {
	constructor() {
		super();
		this.pins = {
			CCK_I: new Pin(),
			RCK_I: new Pin(),
			CCKENBAR_I: new Pin(),
			CLOADBAR_I: new Pin(),
			CCLRBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			E_I: new Pin(),
			F_I: new Pin(),
			G_I: new Pin(),
			H_I: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new jkff(1);
		this.U6 = new jkff(1);
		this.U7 = new jkff(1);
		this.U8 = new jkff(1);
		this.U9 = new dff(8);
		Connect(this.U9.pins.PRESET, _D_HI);
		Connect(this.U9.pins.CLEAR, _D_HI);
		let RCK = new Pin();
		Connect(this.U9.pins.CLOCK, RCK);
		let A = new Pin();
		Connect(this.U9.pins.D0, A);
		let B = new Pin();
		Connect(this.U9.pins.D1, B);
		let C = new Pin();
		Connect(this.U9.pins.D2, C);
		let D = new Pin();
		Connect(this.U9.pins.D3, D);
		let E = new Pin();
		Connect(this.U9.pins.D4, E);
		let F = new Pin();
		Connect(this.U9.pins.D5, F);
		let G = new Pin();
		Connect(this.U9.pins.D6, G);
		let H = new Pin();
		Connect(this.U9.pins.D7, H);
		let RQA = new Pin();
		Connect(this.U9.pins.Q0, RQA);
		let RQB = new Pin();
		Connect(this.U9.pins.Q1, RQB);
		let RQC = new Pin();
		Connect(this.U9.pins.Q2, RQC);
		let RQD = new Pin();
		Connect(this.U9.pins.Q3, RQD);
		let RQE = new Pin();
		Connect(this.U9.pins.Q4, RQE);
		let RQF = new Pin();
		Connect(this.U9.pins.Q5, RQF);
		let RQG = new Pin();
		Connect(this.U9.pins.Q6, RQG);
		let RQH = new Pin();
		Connect(this.U9.pins.Q7, RQH);
		this.ULS592LOG = new logicexp(['CCLRBAR_I','CCKENBAR_I','CCK_I','CLOADBAR_I','RCK_I','A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I','RQA','RQB','RQC','RQD','RQE','RQF','RQG','RQH','RQABAR','RQBBAR','RQCBAR','RQDBAR','RQEBAR','RQFBAR','RQGBAR','RQHBAR','CQA','CQB','CQC','CQD','CQE','CQF','CQG','CQH','CNTA'], ['CCLRBAR','CCKENBAR','CCK','CLOADBAR','RCK','A','B','C','D','E','F','G','H','SA','RA','SB','RB','SC','RC','SD','RD','SE','RE','SF','RF','SG','RG','SH','RH','CNTA','CNTB','CNTC','CNTD','CNTE','CNTF','CNTG','CNTH','RCOBAR'], []).Logic('   CCLRBAR =  CCLRBAR_I ;   CCKENBAR =  CCKENBAR_I ;   CCK =  CCK_I ;   CLOADBAR =  CLOADBAR_I ;   RCK =  RCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   E =  E_I ;   F =  F_I ;   G =  G_I ;   H =  H_I ;let    ILD =  !CLOADBAR ;   ILD =  !CLOADBAR ;   SA =  !(RQA & ILD) ;   SB =  !(RQB & ILD) ;   SC =  !(RQC & ILD) ;   SD =  !(RQD & ILD) ;   SE =  !(RQE & ILD) ;   SF =  !(RQF & ILD) ;   SG =  !(RQG & ILD) ;   SH =  !(RQH & ILD) ;   RA =  !(ILD & RQABAR) & CCLRBAR ;   RB =  !(ILD & RQBBAR) & CCLRBAR ;   RC =  !(ILD & RQCBAR) & CCLRBAR ;   RD =  !(ILD & RQDBAR) & CCLRBAR ;   RE =  !(ILD & RQEBAR) & CCLRBAR ;   RF =  !(ILD & RQFBAR) & CCLRBAR ;   RG =  !(ILD & RQGBAR) & CCLRBAR ;   RH =  !(ILD & RQHBAR) & CCLRBAR ;   CNTA =  !((!(CNTA & CCKENBAR) & CCK) & CCK) ;   CNTB =  CQA & CNTA ;   CNTC =  CQB & CNTB ;   CNTD =  CQC & CNTC ;   CNTE =  CQD & CNTD ;   CNTF =  CQE & CNTE ;   CNTG =  CQF & CNTF ;   CNTH =  CQG & CNTG ;   RCOBAR =  !(CQH & CQG & CQF & CQE & CQD & CQC & CQB & CQA) ;');
		Connect(this.ULS592LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS592LOG.pins.CCKENBAR_I, this.pins.CCKENBAR_I);
		Connect(this.ULS592LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS592LOG.pins.CLOADBAR_I, this.pins.CLOADBAR_I);
		Connect(this.ULS592LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS592LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS592LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS592LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS592LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS592LOG.pins.E_I, this.pins.E_I);
		Connect(this.ULS592LOG.pins.F_I, this.pins.F_I);
		Connect(this.ULS592LOG.pins.G_I, this.pins.G_I);
		Connect(this.ULS592LOG.pins.H_I, this.pins.H_I);
		Connect(this.ULS592LOG.pins.RQA, RQA);
		Connect(this.ULS592LOG.pins.RQB, RQB);
		Connect(this.ULS592LOG.pins.RQC, RQC);
		Connect(this.ULS592LOG.pins.RQD, RQD);
		Connect(this.ULS592LOG.pins.RQE, RQE);
		Connect(this.ULS592LOG.pins.RQF, RQF);
		Connect(this.ULS592LOG.pins.RQG, RQG);
		Connect(this.ULS592LOG.pins.RQH, RQH);
		let RQABAR = new Pin();
		Connect(this.ULS592LOG.pins.RQABAR, RQABAR);
		let RQBBAR = new Pin();
		Connect(this.ULS592LOG.pins.RQBBAR, RQBBAR);
		let RQCBAR = new Pin();
		Connect(this.ULS592LOG.pins.RQCBAR, RQCBAR);
		let RQDBAR = new Pin();
		Connect(this.ULS592LOG.pins.RQDBAR, RQDBAR);
		let RQEBAR = new Pin();
		Connect(this.ULS592LOG.pins.RQEBAR, RQEBAR);
		let RQFBAR = new Pin();
		Connect(this.ULS592LOG.pins.RQFBAR, RQFBAR);
		let RQGBAR = new Pin();
		Connect(this.ULS592LOG.pins.RQGBAR, RQGBAR);
		let RQHBAR = new Pin();
		Connect(this.ULS592LOG.pins.RQHBAR, RQHBAR);
		let CQA = new Pin();
		Connect(this.ULS592LOG.pins.CQA, CQA);
		let CQB = new Pin();
		Connect(this.ULS592LOG.pins.CQB, CQB);
		let CQC = new Pin();
		Connect(this.ULS592LOG.pins.CQC, CQC);
		let CQD = new Pin();
		Connect(this.ULS592LOG.pins.CQD, CQD);
		let CQE = new Pin();
		Connect(this.ULS592LOG.pins.CQE, CQE);
		let CQF = new Pin();
		Connect(this.ULS592LOG.pins.CQF, CQF);
		let CQG = new Pin();
		Connect(this.ULS592LOG.pins.CQG, CQG);
		let CQH = new Pin();
		Connect(this.ULS592LOG.pins.CQH, CQH);
		let CNTA = new Pin();
		Connect(this.ULS592LOG.pins.CNTA, CNTA);
		let CCLRBAR = new Pin();
		Connect(this.ULS592LOG.pins.CCLRBAR, CCLRBAR);
		let CCKENBAR = new Pin();
		Connect(this.ULS592LOG.pins.CCKENBAR, CCKENBAR);
		let CCK = new Pin();
		Connect(this.ULS592LOG.pins.CCK, CCK);
		let CLOADBAR = new Pin();
		Connect(this.ULS592LOG.pins.CLOADBAR, CLOADBAR);
		Connect(this.ULS592LOG.pins.RCK, RCK);
		Connect(this.ULS592LOG.pins.A, A);
		Connect(this.ULS592LOG.pins.B, B);
		Connect(this.ULS592LOG.pins.C, C);
		Connect(this.ULS592LOG.pins.D, D);
		Connect(this.ULS592LOG.pins.E, E);
		Connect(this.ULS592LOG.pins.F, F);
		Connect(this.ULS592LOG.pins.G, G);
		Connect(this.ULS592LOG.pins.H, H);
		let SA = new Pin();
		Connect(this.ULS592LOG.pins.SA, SA);
		let RA = new Pin();
		Connect(this.ULS592LOG.pins.RA, RA);
		let SB = new Pin();
		Connect(this.ULS592LOG.pins.SB, SB);
		let RB = new Pin();
		Connect(this.ULS592LOG.pins.RB, RB);
		let SC = new Pin();
		Connect(this.ULS592LOG.pins.SC, SC);
		let RC = new Pin();
		Connect(this.ULS592LOG.pins.RC, RC);
		let SD = new Pin();
		Connect(this.ULS592LOG.pins.SD, SD);
		let RD = new Pin();
		Connect(this.ULS592LOG.pins.RD, RD);
		let SE = new Pin();
		Connect(this.ULS592LOG.pins.SE, SE);
		let RE = new Pin();
		Connect(this.ULS592LOG.pins.RE, RE);
		let SF = new Pin();
		Connect(this.ULS592LOG.pins.SF, SF);
		let RF = new Pin();
		Connect(this.ULS592LOG.pins.RF, RF);
		let SG = new Pin();
		Connect(this.ULS592LOG.pins.SG, SG);
		let RG = new Pin();
		Connect(this.ULS592LOG.pins.RG, RG);
		let SH = new Pin();
		Connect(this.ULS592LOG.pins.SH, SH);
		let RH = new Pin();
		Connect(this.ULS592LOG.pins.RH, RH);
		let CNTB = new Pin();
		Connect(this.ULS592LOG.pins.CNTB, CNTB);
		let CNTC = new Pin();
		Connect(this.ULS592LOG.pins.CNTC, CNTC);
		let CNTD = new Pin();
		Connect(this.ULS592LOG.pins.CNTD, CNTD);
		let CNTE = new Pin();
		Connect(this.ULS592LOG.pins.CNTE, CNTE);
		let CNTF = new Pin();
		Connect(this.ULS592LOG.pins.CNTF, CNTF);
		let CNTG = new Pin();
		Connect(this.ULS592LOG.pins.CNTG, CNTG);
		let CNTH = new Pin();
		Connect(this.ULS592LOG.pins.CNTH, CNTH);
		let RCOBAR = new Pin();
		Connect(this.ULS592LOG.pins.RCOBAR, RCOBAR);
		Connect(RCOBAR, this.pins.RCOBAR_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH INPUT LATCHES
 */
class SN74LS594 extends Component {
	constructor() {
		super();
		this.pins = {
			SRCK_I: new Pin(),
			RCK_I: new Pin(),
			SRCLRBAR_I: new Pin(),
			RCLRBAR_I: new Pin(),
			SER_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
			QHP_O: new Pin(),
		}
		this.U1 = new bufa(5);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		let SRCLRBAR = new Pin();
		Connect(this.U2.pins.CLEAR, SRCLRBAR);
		let SRCK = new Pin();
		Connect(this.U2.pins.CLOCK, SRCK);
		let SER = new Pin();
		Connect(this.U2.pins.D0, SER);
		let Q1A = new Pin();
		Connect(this.U2.pins.D1, Q1A);
		let Q1B = new Pin();
		Connect(this.U2.pins.D2, Q1B);
		let Q1C = new Pin();
		Connect(this.U2.pins.D3, Q1C);
		let Q1D = new Pin();
		Connect(this.U2.pins.D4, Q1D);
		let Q1E = new Pin();
		Connect(this.U2.pins.D5, Q1E);
		let Q1F = new Pin();
		Connect(this.U2.pins.D6, Q1F);
		let Q1G = new Pin();
		Connect(this.U2.pins.D7, Q1G);
		Connect(this.U2.pins.Q0, Q1A);
		Connect(this.U2.pins.Q1, Q1B);
		Connect(this.U2.pins.Q2, Q1C);
		Connect(this.U2.pins.Q3, Q1D);
		Connect(this.U2.pins.Q4, Q1E);
		Connect(this.U2.pins.Q5, Q1F);
		Connect(this.U2.pins.Q6, Q1G);
		let QHP = new Pin();
		Connect(this.U2.pins.Q7, QHP);
		this.U3 = new dff(8);
		Connect(this.U3.pins.PRESET, _D_HI);
		let RCLRBAR = new Pin();
		Connect(this.U3.pins.CLEAR, RCLRBAR);
		let RCK = new Pin();
		Connect(this.U3.pins.CLOCK, RCK);
		Connect(this.U3.pins.D0, Q1A);
		Connect(this.U3.pins.D1, Q1B);
		Connect(this.U3.pins.D2, Q1C);
		Connect(this.U3.pins.D3, Q1D);
		Connect(this.U3.pins.D4, Q1E);
		Connect(this.U3.pins.D5, Q1F);
		Connect(this.U3.pins.D6, Q1G);
		Connect(this.U3.pins.D7, QHP);
		let QA = new Pin();
		Connect(this.U3.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U3.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U3.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U3.pins.Q3, QD);
		let QE = new Pin();
		Connect(this.U3.pins.Q4, QE);
		let QF = new Pin();
		Connect(this.U3.pins.Q5, QF);
		let QG = new Pin();
		Connect(this.U3.pins.Q6, QG);
		let QH = new Pin();
		Connect(this.U3.pins.Q7, QH);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
		Connect(QF, this.pins.QF_O);
		Connect(QG, this.pins.QG_O);
		Connect(QH, this.pins.QH_O);
		Connect(QHP, this.pins.QHP_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH 3-STATE OUTPUT REGISTERS
 */
class SN74LS595 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			SRCK_I: new Pin(),
			RCK_I: new Pin(),
			SRCLRBAR_I: new Pin(),
			SER_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
			QHP_O: new Pin(),
		}
		this.U1 = new bufa(5);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		let SRCLRBAR = new Pin();
		Connect(this.U2.pins.CLEAR, SRCLRBAR);
		let SRCK = new Pin();
		Connect(this.U2.pins.CLOCK, SRCK);
		let SER = new Pin();
		Connect(this.U2.pins.D0, SER);
		let Q1A = new Pin();
		Connect(this.U2.pins.D1, Q1A);
		let Q1B = new Pin();
		Connect(this.U2.pins.D2, Q1B);
		let Q1C = new Pin();
		Connect(this.U2.pins.D3, Q1C);
		let Q1D = new Pin();
		Connect(this.U2.pins.D4, Q1D);
		let Q1E = new Pin();
		Connect(this.U2.pins.D5, Q1E);
		let Q1F = new Pin();
		Connect(this.U2.pins.D6, Q1F);
		let Q1G = new Pin();
		Connect(this.U2.pins.D7, Q1G);
		Connect(this.U2.pins.Q0, Q1A);
		Connect(this.U2.pins.Q1, Q1B);
		Connect(this.U2.pins.Q2, Q1C);
		Connect(this.U2.pins.Q3, Q1D);
		Connect(this.U2.pins.Q4, Q1E);
		Connect(this.U2.pins.Q5, Q1F);
		Connect(this.U2.pins.Q6, Q1G);
		let QHP = new Pin();
		Connect(this.U2.pins.Q7, QHP);
		this.U3 = new dff(8);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, _D_HI);
		let RCK = new Pin();
		Connect(this.U3.pins.CLOCK, RCK);
		Connect(this.U3.pins.D0, Q1A);
		Connect(this.U3.pins.D1, Q1B);
		Connect(this.U3.pins.D2, Q1C);
		Connect(this.U3.pins.D3, Q1D);
		Connect(this.U3.pins.D4, Q1E);
		Connect(this.U3.pins.D5, Q1F);
		Connect(this.U3.pins.D6, Q1G);
		Connect(this.U3.pins.D7, QHP);
		let QA = new Pin();
		Connect(this.U3.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U3.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U3.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U3.pins.Q3, QD);
		let QE = new Pin();
		Connect(this.U3.pins.Q4, QE);
		let QF = new Pin();
		Connect(this.U3.pins.Q5, QF);
		let QG = new Pin();
		Connect(this.U3.pins.Q6, QG);
		let QH = new Pin();
		Connect(this.U3.pins.Q7, QH);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
		Connect(QF, this.pins.QF_O);
		Connect(QG, this.pins.QG_O);
		Connect(QH, this.pins.QH_O);
		Connect(QHP, this.pins.QHP_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH OPEN-COLLECTOR OUTPUT REGISTERS
 */
class SN74LS596 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			SRCK_I: new Pin(),
			RCK_I: new Pin(),
			SRCLRBAR_I: new Pin(),
			SER_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
			QHP_O: new Pin(),
		}
		this.U1 = new bufa(5);
		this.U3 = new dff(8);
		Connect(this.U3.pins.PRESET, _D_HI);
		let SRCLRBAR = new Pin();
		Connect(this.U3.pins.CLEAR, SRCLRBAR);
		let SRCK = new Pin();
		Connect(this.U3.pins.CLOCK, SRCK);
		let SER = new Pin();
		Connect(this.U3.pins.D0, SER);
		let Q1A = new Pin();
		Connect(this.U3.pins.D1, Q1A);
		let Q1B = new Pin();
		Connect(this.U3.pins.D2, Q1B);
		let Q1C = new Pin();
		Connect(this.U3.pins.D3, Q1C);
		let Q1D = new Pin();
		Connect(this.U3.pins.D4, Q1D);
		let Q1E = new Pin();
		Connect(this.U3.pins.D5, Q1E);
		let Q1F = new Pin();
		Connect(this.U3.pins.D6, Q1F);
		let Q1G = new Pin();
		Connect(this.U3.pins.D7, Q1G);
		Connect(this.U3.pins.Q0, Q1A);
		Connect(this.U3.pins.Q1, Q1B);
		Connect(this.U3.pins.Q2, Q1C);
		Connect(this.U3.pins.Q3, Q1D);
		Connect(this.U3.pins.Q4, Q1E);
		Connect(this.U3.pins.Q5, Q1F);
		Connect(this.U3.pins.Q6, Q1G);
		let QHP = new Pin();
		Connect(this.U3.pins.Q7, QHP);
		this.U4 = new dff(8);
		Connect(this.U4.pins.PRESET, _D_HI);
		Connect(this.U4.pins.CLEAR, _D_HI);
		let RCK = new Pin();
		Connect(this.U4.pins.CLOCK, RCK);
		Connect(this.U4.pins.D0, Q1A);
		Connect(this.U4.pins.D1, Q1B);
		Connect(this.U4.pins.D2, Q1C);
		Connect(this.U4.pins.D3, Q1D);
		Connect(this.U4.pins.D4, Q1E);
		Connect(this.U4.pins.D5, Q1F);
		Connect(this.U4.pins.D6, Q1G);
		Connect(this.U4.pins.D7, QHP);
		let LQA = new Pin();
		Connect(this.U4.pins.Q0, LQA);
		let LQB = new Pin();
		Connect(this.U4.pins.Q1, LQB);
		let LQC = new Pin();
		Connect(this.U4.pins.Q2, LQC);
		let LQD = new Pin();
		Connect(this.U4.pins.Q3, LQD);
		let LQE = new Pin();
		Connect(this.U4.pins.Q4, LQE);
		let LQF = new Pin();
		Connect(this.U4.pins.Q5, LQF);
		let LQG = new Pin();
		Connect(this.U4.pins.Q6, LQG);
		let LQH = new Pin();
		Connect(this.U4.pins.Q7, LQH);
		this.U5 = new ora(2,8);
		Connect(this.pins.QA, this.pins.QA_O);
		Connect(this.pins.QB, this.pins.QB_O);
		Connect(this.pins.QC, this.pins.QC_O);
		Connect(this.pins.QD, this.pins.QD_O);
		Connect(this.pins.QE, this.pins.QE_O);
		Connect(this.pins.QF, this.pins.QF_O);
		Connect(this.pins.QG, this.pins.QG_O);
		Connect(this.pins.QH, this.pins.QH_O);
		Connect(QHP, this.pins.QHP_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH INPUT LATCHES
 */
class SN74LS597 extends Component {
	constructor() {
		super();
		this.pins = {
			SRCLRBAR_I: new Pin(),
			SRCK_I: new Pin(),
			SRLOADBAR_I: new Pin(),
			RCK_I: new Pin(),
			SER_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			E_I: new Pin(),
			F_I: new Pin(),
			G_I: new Pin(),
			H_I: new Pin(),
			QH_O: new Pin(),
		}
		this.ULS597LOG = new logicexp(['SRCLRBAR_I','SRCK_I','SRLOADBAR_I','RCK_I','SER_I','A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I','QA','QB','QC','QD','QE','QF','QG','QHH','QABAR','QBBAR','QCBAR','QDBAR','QEBAR','QFBAR','QGBAR','QHHBAR'], ['SRCLRBAR','SRCK','SRLOADBAR','RCK','SER','A','B','C','D','E','F','G','H','SA','SB','SC','SD','SE','SF','SG','SH','RA','RB','RC','RD','RE','RF','RG','RH'], []).Logic('   SRCLRBAR  =  SRCLRBAR_I ;   SRCK      =  SRCK_I ;   SRLOADBAR =  SRLOADBAR_I ;   RCK       =  RCK_I ;   SER       =  SER_I ;   A         =  A_I ;   B         =  B_I ;   C         =  C_I ;   D         =  D_I ;   E         =  E_I ;   F         =  F_I ;   G         =  G_I ;   H         =  H_I ;   SA =  !(!SRLOADBAR & QA) ;   SB =  !(!SRLOADBAR & QB) ;   SC =  !(!SRLOADBAR & QC) ;   SD =  !(!SRLOADBAR & QD) ;   SE =  !(!SRLOADBAR & QE) ;   SF =  !(!SRLOADBAR & QF) ;   SG =  !(!SRLOADBAR & QG) ;   SH =  !(!SRLOADBAR & QHH) ;   RA =  !(!SRCLRBAR | (!SRLOADBAR & QABAR)) ;   RB =  !(!SRCLRBAR | (!SRLOADBAR & QBBAR)) ;   RC =  !(!SRCLRBAR | (!SRLOADBAR & QCBAR)) ;   RD =  !(!SRCLRBAR | (!SRLOADBAR & QDBAR)) ;   RE =  !(!SRCLRBAR | (!SRLOADBAR & QEBAR)) ;   RF =  !(!SRCLRBAR | (!SRLOADBAR & QFBAR)) ;   RG =  !(!SRCLRBAR | (!SRLOADBAR & QGBAR)) ;   RH =  !(!SRCLRBAR | (!SRLOADBAR & QHHBAR)) ;');
		Connect(this.ULS597LOG.pins.SRCLRBAR_I, this.pins.SRCLRBAR_I);
		Connect(this.ULS597LOG.pins.SRCK_I, this.pins.SRCK_I);
		Connect(this.ULS597LOG.pins.SRLOADBAR_I, this.pins.SRLOADBAR_I);
		Connect(this.ULS597LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS597LOG.pins.SER_I, this.pins.SER_I);
		Connect(this.ULS597LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS597LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS597LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS597LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS597LOG.pins.E_I, this.pins.E_I);
		Connect(this.ULS597LOG.pins.F_I, this.pins.F_I);
		Connect(this.ULS597LOG.pins.G_I, this.pins.G_I);
		Connect(this.ULS597LOG.pins.H_I, this.pins.H_I);
		let QA = new Pin();
		Connect(this.ULS597LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS597LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS597LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS597LOG.pins.QD, QD);
		let QE = new Pin();
		Connect(this.ULS597LOG.pins.QE, QE);
		let QF = new Pin();
		Connect(this.ULS597LOG.pins.QF, QF);
		let QG = new Pin();
		Connect(this.ULS597LOG.pins.QG, QG);
		let QHH = new Pin();
		Connect(this.ULS597LOG.pins.QHH, QHH);
		let QABAR = new Pin();
		Connect(this.ULS597LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS597LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS597LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS597LOG.pins.QDBAR, QDBAR);
		let QEBAR = new Pin();
		Connect(this.ULS597LOG.pins.QEBAR, QEBAR);
		let QFBAR = new Pin();
		Connect(this.ULS597LOG.pins.QFBAR, QFBAR);
		let QGBAR = new Pin();
		Connect(this.ULS597LOG.pins.QGBAR, QGBAR);
		let QHHBAR = new Pin();
		Connect(this.ULS597LOG.pins.QHHBAR, QHHBAR);
		let SRCLRBAR = new Pin();
		Connect(this.ULS597LOG.pins.SRCLRBAR, SRCLRBAR);
		let SRCK = new Pin();
		Connect(this.ULS597LOG.pins.SRCK, SRCK);
		let SRLOADBAR = new Pin();
		Connect(this.ULS597LOG.pins.SRLOADBAR, SRLOADBAR);
		let RCK = new Pin();
		Connect(this.ULS597LOG.pins.RCK, RCK);
		let SER = new Pin();
		Connect(this.ULS597LOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.ULS597LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS597LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS597LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS597LOG.pins.D, D);
		let E = new Pin();
		Connect(this.ULS597LOG.pins.E, E);
		let F = new Pin();
		Connect(this.ULS597LOG.pins.F, F);
		let G = new Pin();
		Connect(this.ULS597LOG.pins.G, G);
		let H = new Pin();
		Connect(this.ULS597LOG.pins.H, H);
		let SA = new Pin();
		Connect(this.ULS597LOG.pins.SA, SA);
		let SB = new Pin();
		Connect(this.ULS597LOG.pins.SB, SB);
		let SC = new Pin();
		Connect(this.ULS597LOG.pins.SC, SC);
		let SD = new Pin();
		Connect(this.ULS597LOG.pins.SD, SD);
		let SE = new Pin();
		Connect(this.ULS597LOG.pins.SE, SE);
		let SF = new Pin();
		Connect(this.ULS597LOG.pins.SF, SF);
		let SG = new Pin();
		Connect(this.ULS597LOG.pins.SG, SG);
		let SH = new Pin();
		Connect(this.ULS597LOG.pins.SH, SH);
		let RA = new Pin();
		Connect(this.ULS597LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.ULS597LOG.pins.RB, RB);
		let RC = new Pin();
		Connect(this.ULS597LOG.pins.RC, RC);
		let RD = new Pin();
		Connect(this.ULS597LOG.pins.RD, RD);
		let RE = new Pin();
		Connect(this.ULS597LOG.pins.RE, RE);
		let RF = new Pin();
		Connect(this.ULS597LOG.pins.RF, RF);
		let RG = new Pin();
		Connect(this.ULS597LOG.pins.RG, RG);
		let RH = new Pin();
		Connect(this.ULS597LOG.pins.RH, RH);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, RCK);
		Connect(this.U1.pins.D0, A);
		Connect(this.U1.pins.D1, B);
		Connect(this.U1.pins.D2, C);
		Connect(this.U1.pins.D3, D);
		Connect(this.U1.pins.D4, E);
		Connect(this.U1.pins.D5, F);
		Connect(this.U1.pins.D6, G);
		Connect(this.U1.pins.D7, H);
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.Q1, QB);
		Connect(this.U1.pins.Q2, QC);
		Connect(this.U1.pins.Q3, QD);
		Connect(this.U1.pins.Q4, QE);
		Connect(this.U1.pins.Q5, QF);
		Connect(this.U1.pins.Q6, QG);
		Connect(this.U1.pins.Q7, QHH);
		this.U2 = new dff(1);
		Connect(this.U2.pins.PRESET, SA);
		Connect(this.U2.pins.CLEAR, RA);
		Connect(this.U2.pins.CLOCK, SRCK);
		Connect(this.U2.pins.D0, SER);
		let Q2A = new Pin();
		Connect(this.U2.pins.Q0, Q2A);
		this.U3 = new dff(1);
		Connect(this.U3.pins.PRESET, SB);
		Connect(this.U3.pins.CLEAR, RB);
		Connect(this.U3.pins.CLOCK, SRCK);
		Connect(this.U3.pins.D0, Q2A);
		let Q2B = new Pin();
		Connect(this.U3.pins.Q0, Q2B);
		this.U4 = new dff(1);
		Connect(this.U4.pins.PRESET, SC);
		Connect(this.U4.pins.CLEAR, RC);
		Connect(this.U4.pins.CLOCK, SRCK);
		Connect(this.U4.pins.D0, Q2B);
		let Q2C = new Pin();
		Connect(this.U4.pins.Q0, Q2C);
		this.U5 = new dff(1);
		Connect(this.U5.pins.PRESET, SD);
		Connect(this.U5.pins.CLEAR, RD);
		Connect(this.U5.pins.CLOCK, SRCK);
		Connect(this.U5.pins.D0, Q2C);
		let Q2D = new Pin();
		Connect(this.U5.pins.Q0, Q2D);
		this.U6 = new dff(1);
		Connect(this.U6.pins.PRESET, SE);
		Connect(this.U6.pins.CLEAR, RE);
		Connect(this.U6.pins.CLOCK, SRCK);
		Connect(this.U6.pins.D0, Q2D);
		let Q2E = new Pin();
		Connect(this.U6.pins.Q0, Q2E);
		this.U7 = new dff(1);
		Connect(this.U7.pins.PRESET, SF);
		Connect(this.U7.pins.CLEAR, RF);
		Connect(this.U7.pins.CLOCK, SRCK);
		Connect(this.U7.pins.D0, Q2E);
		let Q2F = new Pin();
		Connect(this.U7.pins.Q0, Q2F);
		this.U8 = new dff(1);
		Connect(this.U8.pins.PRESET, SG);
		Connect(this.U8.pins.CLEAR, RG);
		Connect(this.U8.pins.CLOCK, SRCK);
		Connect(this.U8.pins.D0, Q2F);
		let Q2G = new Pin();
		Connect(this.U8.pins.Q0, Q2G);
		this.U9 = new dff(1);
		Connect(this.U9.pins.PRESET, SH);
		Connect(this.U9.pins.CLEAR, RH);
		Connect(this.U9.pins.CLOCK, SRCK);
		Connect(this.U9.pins.D0, Q2G);
		let QH = new Pin();
		Connect(this.U9.pins.Q0, QH);
		Connect(QH, this.pins.QH_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH INPUT LATCHES
 */
class SN74LS598 extends Component {
	constructor() {
		super();
		this.pins = {
			SRCLRBAR_I: new Pin(),
			SRLOADBAR_I: new Pin(),
			SRCKENBAR_I: new Pin(),
			SRCK_I: new Pin(),
			RCK_I: new Pin(),
			GBAR_I: new Pin(),
			DS_I: new Pin(),
			SER1_I: new Pin(),
			SER0_I: new Pin(),
			AQA_B: new Pin(),
			BQB_B: new Pin(),
			CQC_B: new Pin(),
			DQD_B: new Pin(),
			EQE_B: new Pin(),
			FQF_B: new Pin(),
			GQG_B: new Pin(),
			HQH_B: new Pin(),
			QH_O: new Pin(),
		}
		this.ULS598LOG = new logicexp(['SRCLRBAR_I','SRLOADBAR_I','SRCKENBAR_I','SRCK_I','RCK_I','GBAR_I','DS_I','SER1_I','SER0_I','AQA_B','BQB_B','CQC_B','DQD_B','EQE_B','FQF_B','GQG_B','HQH_B','Q1A','Q1B','Q1C','Q1D','Q1E','Q1F','Q1G','Q1H','Q1ABAR','Q1BBAR','Q1CBAR','Q1DBAR','Q1EBAR','Q1FBAR','Q1GBAR','Q1HBAR','SRCK2'], ['SRCLRBAR','SRLOADBAR','SRCKENBAR','SRCK','RCK','GBAR','DS','SER1','SER0','AQA','BQB','CQC','DQD','EQE','FQF','GQG','HQH','SA','SB','SC','SD','SE','SF','SG','SH','RA','RB','RC','RD','RE','RF','RG','RH','SRCK2','SER'], []).Logic('   SRCLRBAR  =  SRCLRBAR_I ;   SRLOADBAR =  SRLOADBAR_I ;   SRCKENBAR =  SRCKENBAR_I ;   SRCK      =  SRCK_I ;   RCK       =  RCK_I ;   GBAR      =  GBAR_I ;   DS        =  DS_I ;   SER1      =  SER1_I ;   SER0      =  SER0_I ;   AQA       =  AQA_B ;   BQB       =  BQB_B ;   CQC       =  CQC_B ;   DQD       =  DQD_B ;   EQE       =  EQE_B ;   FQF       =  FQF_B ;   GQG       =  GQG_B ;   HQH       =  HQH_B ;   SRCK2 =  SRCK & ((SRCK2 | (!SRCKENBAR)) & (SRCK)) ;   SER = (DS & SER1) | (!DS & SER0) ;   SA =  !(!SRLOADBAR & Q1A) ;   SB =  !(!SRLOADBAR & Q1B) ;   SC =  !(!SRLOADBAR & Q1C) ;   SD =  !(!SRLOADBAR & Q1D) ;   SE =  !(!SRLOADBAR & Q1E) ;   SF =  !(!SRLOADBAR & Q1F) ;   SG =  !(!SRLOADBAR & Q1G) ;   SH =  !(!SRLOADBAR & Q1H) ;   RA =  !(!SRCLRBAR | (!SRLOADBAR & Q1ABAR)) ;   RB =  !(!SRCLRBAR | (!SRLOADBAR & Q1BBAR)) ;   RC =  !(!SRCLRBAR | (!SRLOADBAR & Q1CBAR)) ;   RD =  !(!SRCLRBAR | (!SRLOADBAR & Q1DBAR)) ;   RE =  !(!SRCLRBAR | (!SRLOADBAR & Q1EBAR)) ;   RF =  !(!SRCLRBAR | (!SRLOADBAR & Q1FBAR)) ;   RG =  !(!SRCLRBAR | (!SRLOADBAR & Q1GBAR)) ;   RH =  !(!SRCLRBAR | (!SRLOADBAR & Q1HBAR)) ;');
		Connect(this.ULS598LOG.pins.SRCLRBAR_I, this.pins.SRCLRBAR_I);
		Connect(this.ULS598LOG.pins.SRLOADBAR_I, this.pins.SRLOADBAR_I);
		Connect(this.ULS598LOG.pins.SRCKENBAR_I, this.pins.SRCKENBAR_I);
		Connect(this.ULS598LOG.pins.SRCK_I, this.pins.SRCK_I);
		Connect(this.ULS598LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS598LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS598LOG.pins.DS_I, this.pins.DS_I);
		Connect(this.ULS598LOG.pins.SER1_I, this.pins.SER1_I);
		Connect(this.ULS598LOG.pins.SER0_I, this.pins.SER0_I);
		Connect(this.ULS598LOG.pins.AQA_B, this.pins.AQA_B);
		Connect(this.ULS598LOG.pins.BQB_B, this.pins.BQB_B);
		Connect(this.ULS598LOG.pins.CQC_B, this.pins.CQC_B);
		Connect(this.ULS598LOG.pins.DQD_B, this.pins.DQD_B);
		Connect(this.ULS598LOG.pins.EQE_B, this.pins.EQE_B);
		Connect(this.ULS598LOG.pins.FQF_B, this.pins.FQF_B);
		Connect(this.ULS598LOG.pins.GQG_B, this.pins.GQG_B);
		Connect(this.ULS598LOG.pins.HQH_B, this.pins.HQH_B);
		let Q1A = new Pin();
		Connect(this.ULS598LOG.pins.Q1A, Q1A);
		let Q1B = new Pin();
		Connect(this.ULS598LOG.pins.Q1B, Q1B);
		let Q1C = new Pin();
		Connect(this.ULS598LOG.pins.Q1C, Q1C);
		let Q1D = new Pin();
		Connect(this.ULS598LOG.pins.Q1D, Q1D);
		let Q1E = new Pin();
		Connect(this.ULS598LOG.pins.Q1E, Q1E);
		let Q1F = new Pin();
		Connect(this.ULS598LOG.pins.Q1F, Q1F);
		let Q1G = new Pin();
		Connect(this.ULS598LOG.pins.Q1G, Q1G);
		let Q1H = new Pin();
		Connect(this.ULS598LOG.pins.Q1H, Q1H);
		let Q1ABAR = new Pin();
		Connect(this.ULS598LOG.pins.Q1ABAR, Q1ABAR);
		let Q1BBAR = new Pin();
		Connect(this.ULS598LOG.pins.Q1BBAR, Q1BBAR);
		let Q1CBAR = new Pin();
		Connect(this.ULS598LOG.pins.Q1CBAR, Q1CBAR);
		let Q1DBAR = new Pin();
		Connect(this.ULS598LOG.pins.Q1DBAR, Q1DBAR);
		let Q1EBAR = new Pin();
		Connect(this.ULS598LOG.pins.Q1EBAR, Q1EBAR);
		let Q1FBAR = new Pin();
		Connect(this.ULS598LOG.pins.Q1FBAR, Q1FBAR);
		let Q1GBAR = new Pin();
		Connect(this.ULS598LOG.pins.Q1GBAR, Q1GBAR);
		let Q1HBAR = new Pin();
		Connect(this.ULS598LOG.pins.Q1HBAR, Q1HBAR);
		let SRCK2 = new Pin();
		Connect(this.ULS598LOG.pins.SRCK2, SRCK2);
		let SRCLRBAR = new Pin();
		Connect(this.ULS598LOG.pins.SRCLRBAR, SRCLRBAR);
		let SRLOADBAR = new Pin();
		Connect(this.ULS598LOG.pins.SRLOADBAR, SRLOADBAR);
		let SRCKENBAR = new Pin();
		Connect(this.ULS598LOG.pins.SRCKENBAR, SRCKENBAR);
		let SRCK = new Pin();
		Connect(this.ULS598LOG.pins.SRCK, SRCK);
		let RCK = new Pin();
		Connect(this.ULS598LOG.pins.RCK, RCK);
		let GBAR = new Pin();
		Connect(this.ULS598LOG.pins.GBAR, GBAR);
		let DS = new Pin();
		Connect(this.ULS598LOG.pins.DS, DS);
		let SER1 = new Pin();
		Connect(this.ULS598LOG.pins.SER1, SER1);
		let SER0 = new Pin();
		Connect(this.ULS598LOG.pins.SER0, SER0);
		let AQA = new Pin();
		Connect(this.ULS598LOG.pins.AQA, AQA);
		let BQB = new Pin();
		Connect(this.ULS598LOG.pins.BQB, BQB);
		let CQC = new Pin();
		Connect(this.ULS598LOG.pins.CQC, CQC);
		let DQD = new Pin();
		Connect(this.ULS598LOG.pins.DQD, DQD);
		let EQE = new Pin();
		Connect(this.ULS598LOG.pins.EQE, EQE);
		let FQF = new Pin();
		Connect(this.ULS598LOG.pins.FQF, FQF);
		let GQG = new Pin();
		Connect(this.ULS598LOG.pins.GQG, GQG);
		let HQH = new Pin();
		Connect(this.ULS598LOG.pins.HQH, HQH);
		let SA = new Pin();
		Connect(this.ULS598LOG.pins.SA, SA);
		let SB = new Pin();
		Connect(this.ULS598LOG.pins.SB, SB);
		let SC = new Pin();
		Connect(this.ULS598LOG.pins.SC, SC);
		let SD = new Pin();
		Connect(this.ULS598LOG.pins.SD, SD);
		let SE = new Pin();
		Connect(this.ULS598LOG.pins.SE, SE);
		let SF = new Pin();
		Connect(this.ULS598LOG.pins.SF, SF);
		let SG = new Pin();
		Connect(this.ULS598LOG.pins.SG, SG);
		let SH = new Pin();
		Connect(this.ULS598LOG.pins.SH, SH);
		let RA = new Pin();
		Connect(this.ULS598LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.ULS598LOG.pins.RB, RB);
		let RC = new Pin();
		Connect(this.ULS598LOG.pins.RC, RC);
		let RD = new Pin();
		Connect(this.ULS598LOG.pins.RD, RD);
		let RE = new Pin();
		Connect(this.ULS598LOG.pins.RE, RE);
		let RF = new Pin();
		Connect(this.ULS598LOG.pins.RF, RF);
		let RG = new Pin();
		Connect(this.ULS598LOG.pins.RG, RG);
		let RH = new Pin();
		Connect(this.ULS598LOG.pins.RH, RH);
		let SER = new Pin();
		Connect(this.ULS598LOG.pins.SER, SER);
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, RCK);
		Connect(this.U1.pins.D0, AQA);
		Connect(this.U1.pins.D1, BQB);
		Connect(this.U1.pins.D2, CQC);
		Connect(this.U1.pins.D3, DQD);
		Connect(this.U1.pins.D4, EQE);
		Connect(this.U1.pins.D5, FQF);
		Connect(this.U1.pins.D6, GQG);
		Connect(this.U1.pins.D7, HQH);
		Connect(this.U1.pins.Q0, Q1A);
		Connect(this.U1.pins.Q1, Q1B);
		Connect(this.U1.pins.Q2, Q1C);
		Connect(this.U1.pins.Q3, Q1D);
		Connect(this.U1.pins.Q4, Q1E);
		Connect(this.U1.pins.Q5, Q1F);
		Connect(this.U1.pins.Q6, Q1G);
		Connect(this.U1.pins.Q7, Q1H);
		this.U2 = new dff(1);
		Connect(this.U2.pins.PRESET, SA);
		Connect(this.U2.pins.CLEAR, RA);
		Connect(this.U2.pins.CLOCK, SRCK2);
		Connect(this.U2.pins.D0, SER);
		let LAQA = new Pin();
		Connect(this.U2.pins.Q0, LAQA);
		this.U3 = new dff(1);
		Connect(this.U3.pins.PRESET, SB);
		Connect(this.U3.pins.CLEAR, RB);
		Connect(this.U3.pins.CLOCK, SRCK2);
		Connect(this.U3.pins.D0, LAQA);
		let LBQB = new Pin();
		Connect(this.U3.pins.Q0, LBQB);
		this.U4 = new dff(1);
		Connect(this.U4.pins.PRESET, SC);
		Connect(this.U4.pins.CLEAR, RC);
		Connect(this.U4.pins.CLOCK, SRCK2);
		Connect(this.U4.pins.D0, LBQB);
		let LCQC = new Pin();
		Connect(this.U4.pins.Q0, LCQC);
		this.U5 = new dff(1);
		Connect(this.U5.pins.PRESET, SD);
		Connect(this.U5.pins.CLEAR, RD);
		Connect(this.U5.pins.CLOCK, SRCK2);
		Connect(this.U5.pins.D0, LCQC);
		let LDQD = new Pin();
		Connect(this.U5.pins.Q0, LDQD);
		this.U6 = new dff(1);
		Connect(this.U6.pins.PRESET, SE);
		Connect(this.U6.pins.CLEAR, RE);
		Connect(this.U6.pins.CLOCK, SRCK2);
		Connect(this.U6.pins.D0, LDQD);
		let LEQE = new Pin();
		Connect(this.U6.pins.Q0, LEQE);
		this.U7 = new dff(1);
		Connect(this.U7.pins.PRESET, SF);
		Connect(this.U7.pins.CLEAR, RF);
		Connect(this.U7.pins.CLOCK, SRCK2);
		Connect(this.U7.pins.D0, LEQE);
		let LFQF = new Pin();
		Connect(this.U7.pins.Q0, LFQF);
		this.U8 = new dff(1);
		Connect(this.U8.pins.PRESET, SG);
		Connect(this.U8.pins.CLEAR, RG);
		Connect(this.U8.pins.CLOCK, SRCK2);
		Connect(this.U8.pins.D0, LFQF);
		let LGQG = new Pin();
		Connect(this.U8.pins.Q0, LGQG);
		this.U9 = new dff(1);
		Connect(this.U9.pins.PRESET, SH);
		Connect(this.U9.pins.CLEAR, RH);
		Connect(this.U9.pins.CLOCK, SRCK2);
		Connect(this.U9.pins.D0, LGQG);
		let LHQH = new Pin();
		Connect(this.U9.pins.Q0, LHQH);
		Connect(LAQA, this.pins.AQA_B);
		Connect(LBQB, this.pins.BQB_B);
		Connect(LCQC, this.pins.CQC_B);
		Connect(LDQD, this.pins.DQD_B);
		Connect(LEQE, this.pins.EQE_B);
		Connect(LFQF, this.pins.FQF_B);
		Connect(LGQG, this.pins.GQG_B);
		Connect(LHQH, this.pins.HQH_B);
		Connect(LHQH, this.pins.QH_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH INPUT LATCHES
 */
class SN74LS599 extends Component {
	constructor() {
		super();
		this.pins = {
			SRCK_I: new Pin(),
			RCK_I: new Pin(),
			SRCLRBAR_I: new Pin(),
			RCLRBAR_I: new Pin(),
			SER_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
			QHP_O: new Pin(),
		}
		this.U1 = new bufa(5);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		let SRCLRBAR = new Pin();
		Connect(this.U2.pins.CLEAR, SRCLRBAR);
		let SRCK = new Pin();
		Connect(this.U2.pins.CLOCK, SRCK);
		let SER = new Pin();
		Connect(this.U2.pins.D0, SER);
		let Q1A = new Pin();
		Connect(this.U2.pins.D1, Q1A);
		let Q1B = new Pin();
		Connect(this.U2.pins.D2, Q1B);
		let Q1C = new Pin();
		Connect(this.U2.pins.D3, Q1C);
		let Q1D = new Pin();
		Connect(this.U2.pins.D4, Q1D);
		let Q1E = new Pin();
		Connect(this.U2.pins.D5, Q1E);
		let Q1F = new Pin();
		Connect(this.U2.pins.D6, Q1F);
		let Q1G = new Pin();
		Connect(this.U2.pins.D7, Q1G);
		Connect(this.U2.pins.Q0, Q1A);
		Connect(this.U2.pins.Q1, Q1B);
		Connect(this.U2.pins.Q2, Q1C);
		Connect(this.U2.pins.Q3, Q1D);
		Connect(this.U2.pins.Q4, Q1E);
		Connect(this.U2.pins.Q5, Q1F);
		Connect(this.U2.pins.Q6, Q1G);
		let QHP = new Pin();
		Connect(this.U2.pins.Q7, QHP);
		this.U3 = new dff(8);
		Connect(this.U3.pins.PRESET, _D_HI);
		let RCLRBAR = new Pin();
		Connect(this.U3.pins.CLEAR, RCLRBAR);
		let RCK = new Pin();
		Connect(this.U3.pins.CLOCK, RCK);
		Connect(this.U3.pins.D0, Q1A);
		Connect(this.U3.pins.D1, Q1B);
		Connect(this.U3.pins.D2, Q1C);
		Connect(this.U3.pins.D3, Q1D);
		Connect(this.U3.pins.D4, Q1E);
		Connect(this.U3.pins.D5, Q1F);
		Connect(this.U3.pins.D6, Q1G);
		Connect(this.U3.pins.D7, QHP);
		let QA = new Pin();
		Connect(this.U3.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U3.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U3.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U3.pins.Q3, QD);
		let QE = new Pin();
		Connect(this.U3.pins.Q4, QE);
		let QF = new Pin();
		Connect(this.U3.pins.Q5, QF);
		let QG = new Pin();
		Connect(this.U3.pins.Q6, QG);
		let QH = new Pin();
		Connect(this.U3.pins.Q7, QH);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
		Connect(QF, this.pins.QF_O);
		Connect(QG, this.pins.QG_O);
		Connect(QH, this.pins.QH_O);
		Connect(QHP, this.pins.QHP_O);
	}
}
/**
 * Octal 2-Input Multiplexed Latches with 3-STATE Outputs
 */
class SN74LS604 extends Component {
	constructor() {
		super();
		this.pins = {
			A_BBAR: new Pin(),
			CLK: new Pin(),
			A1: new Pin(),
			B1: new Pin(),
			A2: new Pin(),
			B2: new Pin(),
			A3: new Pin(),
			B3: new Pin(),
			A4: new Pin(),
			B4: new Pin(),
			A5: new Pin(),
			B5: new Pin(),
			A6: new Pin(),
			B6: new Pin(),
			A7: new Pin(),
			B7: new Pin(),
			A8: new Pin(),
			B8: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
			Y7: new Pin(),
			Y8: new Pin(),
		}
		this.UBUF = new bufa(2);
		this.UAB_B = new inv();
		let A_BB = new Pin();
		Connect(this.UAB_B.pins.IN, A_BB);
		let AB_B = new Pin();
		Connect(this.UAB_B.pins.OUT, AB_B);
	}
}
class SNLS604DAT extends Component {
	constructor() {
		super();
		this.pins = {
			A_BB: new Pin(),
			AB_B: new Pin(),
			CK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			Y: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UAB = new dff(2);
		Connect(this.UAB.pins.PRESET, _D_HI);
		Connect(this.UAB.pins.CLEAR, _D_HI);
		Connect(this.UAB.pins.CLOCK, this.pins.CK);
		Connect(this.UAB.pins.D0, this.pins.D1);
		Connect(this.UAB.pins.D1, this.pins.D2);
		let A = new Pin();
		Connect(this.UAB.pins.Q0, A);
		let B = new Pin();
		Connect(this.UAB.pins.Q1, B);
		this.UAB_BD = new buf();
		this.UYI = new ao(2,2);
		this.UY = new buf3();
	}
}
/**
 * Octal 2-Input Multiplexed Latches with Open-Collector Outputs
 */
class SN74LS605 extends Component {
	constructor() {
		super();
		this.pins = {
			A_BBAR: new Pin(),
			CLK: new Pin(),
			A1: new Pin(),
			B1: new Pin(),
			A2: new Pin(),
			B2: new Pin(),
			A3: new Pin(),
			B3: new Pin(),
			A4: new Pin(),
			B4: new Pin(),
			A5: new Pin(),
			B5: new Pin(),
			A6: new Pin(),
			B6: new Pin(),
			A7: new Pin(),
			B7: new Pin(),
			A8: new Pin(),
			B8: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
			Y7: new Pin(),
			Y8: new Pin(),
		}
		this.UBUF = new bufa(2);
		this.UAB_B = new inv();
		let A_BB = new Pin();
		Connect(this.UAB_B.pins.IN, A_BB);
		let AB_B = new Pin();
		Connect(this.UAB_B.pins.OUT, AB_B);
	}
}
class SNLS605DAT extends Component {
	constructor() {
		super();
		this.pins = {
			A_BB: new Pin(),
			AB_B: new Pin(),
			CK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			Y: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UAB = new dff(2);
		Connect(this.UAB.pins.PRESET, _D_HI);
		Connect(this.UAB.pins.CLEAR, _D_HI);
		Connect(this.UAB.pins.CLOCK, this.pins.CK);
		Connect(this.UAB.pins.D0, this.pins.D1);
		Connect(this.UAB.pins.D1, this.pins.D2);
		let A = new Pin();
		Connect(this.UAB.pins.Q0, A);
		let B = new Pin();
		Connect(this.UAB.pins.Q1, B);
		this.UCKB = new inv();
		Connect(this.UCKB.pins.IN, this.pins.CK);
		let CKB = new Pin();
		Connect(this.UCKB.pins.OUT, CKB);
		this.UA_BBD = new buf();
		this.UAB_BD = new buf();
		this.UYI = new ao(2,2);
		this.UY = new or(2);
	}
}
/**
 * Octal 2-Input Multiplexed Latches with 3-STATE Outputs
 */
class SN74LS606 extends Component {
	constructor() {
		super();
		this.pins = {
			A_BBAR: new Pin(),
			CLK: new Pin(),
			A1: new Pin(),
			B1: new Pin(),
			A2: new Pin(),
			B2: new Pin(),
			A3: new Pin(),
			B3: new Pin(),
			A4: new Pin(),
			B4: new Pin(),
			A5: new Pin(),
			B5: new Pin(),
			A6: new Pin(),
			B6: new Pin(),
			A7: new Pin(),
			B7: new Pin(),
			A8: new Pin(),
			B8: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
			Y7: new Pin(),
			Y8: new Pin(),
		}
		this.UBUF = new bufa(2);
		this.UAB_B = new inv();
		let A_BB = new Pin();
		Connect(this.UAB_B.pins.IN, A_BB);
		let AB_B = new Pin();
		Connect(this.UAB_B.pins.OUT, AB_B);
	}
}
class SNLS606DAT extends Component {
	constructor() {
		super();
		this.pins = {
			A_BB: new Pin(),
			AB_B: new Pin(),
			CK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			Y: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UAB = new dff(2);
		Connect(this.UAB.pins.PRESET, _D_HI);
		Connect(this.UAB.pins.CLEAR, _D_HI);
		Connect(this.UAB.pins.CLOCK, this.pins.CK);
		Connect(this.UAB.pins.D0, this.pins.D1);
		Connect(this.UAB.pins.D1, this.pins.D2);
		let A = new Pin();
		Connect(this.UAB.pins.Q0, A);
		let B = new Pin();
		Connect(this.UAB.pins.Q1, B);
		this.UA_BBD = new buf();
		this.UYI = new ao(2,2);
		this.UY = new buf3();
	}
}
/**
 * Octal 2-Input Multiplexed Latches with Open-Collector Outputs
 */
class SN74LS607 extends Component {
	constructor() {
		super();
		this.pins = {
			A_BBAR: new Pin(),
			CLK: new Pin(),
			A1: new Pin(),
			B1: new Pin(),
			A2: new Pin(),
			B2: new Pin(),
			A3: new Pin(),
			B3: new Pin(),
			A4: new Pin(),
			B4: new Pin(),
			A5: new Pin(),
			B5: new Pin(),
			A6: new Pin(),
			B6: new Pin(),
			A7: new Pin(),
			B7: new Pin(),
			A8: new Pin(),
			B8: new Pin(),
			Y1: new Pin(),
			Y2: new Pin(),
			Y3: new Pin(),
			Y4: new Pin(),
			Y5: new Pin(),
			Y6: new Pin(),
			Y7: new Pin(),
			Y8: new Pin(),
		}
		this.UBUF = new bufa(2);
		this.UAB_B = new inv();
		let A_BB = new Pin();
		Connect(this.UAB_B.pins.IN, A_BB);
		let AB_B = new Pin();
		Connect(this.UAB_B.pins.OUT, AB_B);
	}
}
class SNLS607DAT extends Component {
	constructor() {
		super();
		this.pins = {
			A_BB: new Pin(),
			AB_B: new Pin(),
			CK: new Pin(),
			D1: new Pin(),
			D2: new Pin(),
			Y: new Pin(),
			DPWR: new Pin(),
			DGND: new Pin(),
		}
		this.UAB = new dff(2);
		Connect(this.UAB.pins.PRESET, _D_HI);
		Connect(this.UAB.pins.CLEAR, _D_HI);
		Connect(this.UAB.pins.CLOCK, this.pins.CK);
		Connect(this.UAB.pins.D0, this.pins.D1);
		Connect(this.UAB.pins.D1, this.pins.D2);
		let A = new Pin();
		Connect(this.UAB.pins.Q0, A);
		let B = new Pin();
		Connect(this.UAB.pins.Q1, B);
		this.UCKB = new inv();
		Connect(this.UCKB.pins.IN, this.pins.CK);
		let CKB = new Pin();
		Connect(this.UCKB.pins.OUT, CKB);
		this.UA_BBD = new buf();
		this.UYI = new ao(2,2);
		this.UY = new or(2);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS620 extends Component {
	constructor() {
		super();
		this.pins = {
			GBABAR_I: new Pin(),
			GAB_I: new Pin(),
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
		this.U1 = new buf();
		this.U2 = new inv();
		Connect(this.U2.pins.IN, this.pins.GBABAR_I);
		let GBA = new Pin();
		Connect(this.U2.pins.OUT, GBA);
		this.U3 = new inv3a(8);
		this.U4 = new inv3a(8);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH  OPEN-COLLECTOR OUTPUTS
 */
class SN74LS621 extends Component {
	constructor() {
		super();
		this.pins = {
			GBABAR_I: new Pin(),
			GAB_I: new Pin(),
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
		this.UBUF = new bufa(16);
		this.ULS621LOG = new logicexp(['GBABAR_I','GAB_I','A1_ST','A2_ST','A3_ST','A4_ST','A5_ST','A6_ST','A7_ST','A8_ST','B1_ST','B2_ST','B3_ST','B4_ST','B5_ST','B6_ST','B7_ST','B8_ST'], ['GBABAR','GAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8'], []).Logic('   GBABAR =  GBABAR_I ;   GAB  =  GAB_I ;let    GABBAR  =  !GAB_I ;   GABBAR  =  !GAB_I ;   A1 =  B1_ST | GBABAR ;   A2 =  B2_ST | GBABAR ;   A3 =  B3_ST | GBABAR ;   A4 =  B4_ST | GBABAR ;   A5 =  B5_ST | GBABAR ;   A6 =  B6_ST | GBABAR ;   A7 =  B7_ST | GBABAR ;   A8 =  B8_ST | GBABAR ;   B1 =  A1_ST | GABBAR ;   B2 =  A2_ST | GABBAR ;   B3 =  A3_ST | GABBAR ;   B4 =  A4_ST | GABBAR ;   B5 =  A5_ST | GABBAR ;   B6 =  A6_ST | GABBAR ;   B7 =  A7_ST | GABBAR ;   B8 =  A8_ST | GABBAR ;');
		Connect(this.ULS621LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.ULS621LOG.pins.GAB_I, this.pins.GAB_I);
		let A1_ST = new Pin();
		Connect(this.ULS621LOG.pins.A1_ST, A1_ST);
		let A2_ST = new Pin();
		Connect(this.ULS621LOG.pins.A2_ST, A2_ST);
		let A3_ST = new Pin();
		Connect(this.ULS621LOG.pins.A3_ST, A3_ST);
		let A4_ST = new Pin();
		Connect(this.ULS621LOG.pins.A4_ST, A4_ST);
		let A5_ST = new Pin();
		Connect(this.ULS621LOG.pins.A5_ST, A5_ST);
		let A6_ST = new Pin();
		Connect(this.ULS621LOG.pins.A6_ST, A6_ST);
		let A7_ST = new Pin();
		Connect(this.ULS621LOG.pins.A7_ST, A7_ST);
		let A8_ST = new Pin();
		Connect(this.ULS621LOG.pins.A8_ST, A8_ST);
		let B1_ST = new Pin();
		Connect(this.ULS621LOG.pins.B1_ST, B1_ST);
		let B2_ST = new Pin();
		Connect(this.ULS621LOG.pins.B2_ST, B2_ST);
		let B3_ST = new Pin();
		Connect(this.ULS621LOG.pins.B3_ST, B3_ST);
		let B4_ST = new Pin();
		Connect(this.ULS621LOG.pins.B4_ST, B4_ST);
		let B5_ST = new Pin();
		Connect(this.ULS621LOG.pins.B5_ST, B5_ST);
		let B6_ST = new Pin();
		Connect(this.ULS621LOG.pins.B6_ST, B6_ST);
		let B7_ST = new Pin();
		Connect(this.ULS621LOG.pins.B7_ST, B7_ST);
		let B8_ST = new Pin();
		Connect(this.ULS621LOG.pins.B8_ST, B8_ST);
		let GBABAR = new Pin();
		Connect(this.ULS621LOG.pins.GBABAR, GBABAR);
		let GAB = new Pin();
		Connect(this.ULS621LOG.pins.GAB, GAB);
		let A1 = new Pin();
		Connect(this.ULS621LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS621LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS621LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS621LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS621LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS621LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS621LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS621LOG.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS621LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS621LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS621LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS621LOG.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS621LOG.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS621LOG.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS621LOG.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS621LOG.pins.B8, B8);
		Connect(A1, this.pins.A1_B);
		Connect(A2, this.pins.A2_B);
		Connect(A3, this.pins.A3_B);
		Connect(A4, this.pins.A4_B);
		Connect(A5, this.pins.A5_B);
		Connect(A6, this.pins.A6_B);
		Connect(A7, this.pins.A7_B);
		Connect(A8, this.pins.A8_B);
		Connect(B1, this.pins.B1_B);
		Connect(B2, this.pins.B2_B);
		Connect(B3, this.pins.B3_B);
		Connect(B4, this.pins.B4_B);
		Connect(B5, this.pins.B5_B);
		Connect(B6, this.pins.B6_B);
		Connect(B7, this.pins.B7_B);
		Connect(B8, this.pins.B8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH  OPEN-COLLECTOR OUTPUTS
 */
class SN74LS622 extends Component {
	constructor() {
		super();
		this.pins = {
			GBABAR_I: new Pin(),
			GAB_I: new Pin(),
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
		this.UBUF = new bufa(16);
		this.ULS622LOG = new logicexp(['GBABAR_I','GAB_I','A1_ST','A2_ST','A3_ST','A4_ST','A5_ST','A6_ST','A7_ST','A8_ST','B1_ST','B2_ST','B3_ST','B4_ST','B5_ST','B6_ST','B7_ST','B8_ST'], ['GBABAR','GAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8'], []).Logic('   GBABAR =  GBABAR_I ;let    GBA    =  !GBABAR ;   GBA    =  !GBABAR ;   GAB    =  GAB_I ;   A1 =  !(B1_ST & GBA) ;   A2 =  !(B2_ST & GBA) ;   A3 =  !(B3_ST & GBA) ;   A4 =  !(B4_ST & GBA) ;   A5 =  !(B5_ST & GBA) ;   A6 =  !(B6_ST & GBA) ;   A7 =  !(B7_ST & GBA) ;   A8 =  !(B8_ST & GBA) ;   B1 =  !(A1_ST & GAB) ;   B2 =  !(A2_ST & GAB) ;   B3 =  !(A3_ST & GAB) ;   B4 =  !(A4_ST & GAB) ;   B5 =  !(A5_ST & GAB) ;   B6 =  !(A6_ST & GAB) ;   B7 =  !(A7_ST & GAB) ;   B8 =  !(A8_ST & GAB) ;');
		Connect(this.ULS622LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.ULS622LOG.pins.GAB_I, this.pins.GAB_I);
		let A1_ST = new Pin();
		Connect(this.ULS622LOG.pins.A1_ST, A1_ST);
		let A2_ST = new Pin();
		Connect(this.ULS622LOG.pins.A2_ST, A2_ST);
		let A3_ST = new Pin();
		Connect(this.ULS622LOG.pins.A3_ST, A3_ST);
		let A4_ST = new Pin();
		Connect(this.ULS622LOG.pins.A4_ST, A4_ST);
		let A5_ST = new Pin();
		Connect(this.ULS622LOG.pins.A5_ST, A5_ST);
		let A6_ST = new Pin();
		Connect(this.ULS622LOG.pins.A6_ST, A6_ST);
		let A7_ST = new Pin();
		Connect(this.ULS622LOG.pins.A7_ST, A7_ST);
		let A8_ST = new Pin();
		Connect(this.ULS622LOG.pins.A8_ST, A8_ST);
		let B1_ST = new Pin();
		Connect(this.ULS622LOG.pins.B1_ST, B1_ST);
		let B2_ST = new Pin();
		Connect(this.ULS622LOG.pins.B2_ST, B2_ST);
		let B3_ST = new Pin();
		Connect(this.ULS622LOG.pins.B3_ST, B3_ST);
		let B4_ST = new Pin();
		Connect(this.ULS622LOG.pins.B4_ST, B4_ST);
		let B5_ST = new Pin();
		Connect(this.ULS622LOG.pins.B5_ST, B5_ST);
		let B6_ST = new Pin();
		Connect(this.ULS622LOG.pins.B6_ST, B6_ST);
		let B7_ST = new Pin();
		Connect(this.ULS622LOG.pins.B7_ST, B7_ST);
		let B8_ST = new Pin();
		Connect(this.ULS622LOG.pins.B8_ST, B8_ST);
		let GBABAR = new Pin();
		Connect(this.ULS622LOG.pins.GBABAR, GBABAR);
		let GAB = new Pin();
		Connect(this.ULS622LOG.pins.GAB, GAB);
		let A1 = new Pin();
		Connect(this.ULS622LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS622LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS622LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS622LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS622LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS622LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS622LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS622LOG.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS622LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS622LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS622LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS622LOG.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS622LOG.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS622LOG.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS622LOG.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS622LOG.pins.B8, B8);
		Connect(A1, this.pins.A1_B);
		Connect(A2, this.pins.A2_B);
		Connect(A3, this.pins.A3_B);
		Connect(A4, this.pins.A4_B);
		Connect(A5, this.pins.A5_B);
		Connect(A6, this.pins.A6_B);
		Connect(A7, this.pins.A7_B);
		Connect(A8, this.pins.A8_B);
		Connect(B1, this.pins.B1_B);
		Connect(B2, this.pins.B2_B);
		Connect(B3, this.pins.B3_B);
		Connect(B4, this.pins.B4_B);
		Connect(B5, this.pins.B5_B);
		Connect(B6, this.pins.B6_B);
		Connect(B7, this.pins.B7_B);
		Connect(B8, this.pins.B8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS623 extends Component {
	constructor() {
		super();
		this.pins = {
			GBABAR_I: new Pin(),
			GAB_I: new Pin(),
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
		this.U1 = new buf();
		this.U2 = new inv();
		Connect(this.U2.pins.IN, this.pins.GBABAR_I);
		let GBA = new Pin();
		Connect(this.U2.pins.OUT, GBA);
		this.U3 = new buf3a(8);
		Connect(this.U3.pins.D0, this.pins.A1_B);
		Connect(this.U3.pins.D1, this.pins.A2_B);
		Connect(this.U3.pins.D2, this.pins.A3_B);
		Connect(this.U3.pins.D3, this.pins.A4_B);
		Connect(this.U3.pins.D4, this.pins.A5_B);
		Connect(this.U3.pins.D5, this.pins.A6_B);
		Connect(this.U3.pins.D6, this.pins.A7_B);
		Connect(this.U3.pins.D7, this.pins.A8_B);
		let GAB = new Pin();
		Connect(this.U3.pins.EN, GAB);
		Connect(this.U3.pins.Q0, this.pins.B1_B);
		Connect(this.U3.pins.Q1, this.pins.B2_B);
		Connect(this.U3.pins.Q2, this.pins.B3_B);
		Connect(this.U3.pins.Q3, this.pins.B4_B);
		Connect(this.U3.pins.Q4, this.pins.B5_B);
		Connect(this.U3.pins.Q5, this.pins.B6_B);
		Connect(this.U3.pins.Q6, this.pins.B7_B);
		Connect(this.U3.pins.Q7, this.pins.B8_B);
		this.U4 = new buf3a(8);
		Connect(this.U4.pins.D0, this.pins.B1_B);
		Connect(this.U4.pins.D1, this.pins.B2_B);
		Connect(this.U4.pins.D2, this.pins.B3_B);
		Connect(this.U4.pins.D3, this.pins.B4_B);
		Connect(this.U4.pins.D4, this.pins.B5_B);
		Connect(this.U4.pins.D5, this.pins.B6_B);
		Connect(this.U4.pins.D6, this.pins.B7_B);
		Connect(this.U4.pins.D7, this.pins.B8_B);
		Connect(this.U4.pins.EN, GBA);
		Connect(this.U4.pins.Q0, this.pins.A1_B);
		Connect(this.U4.pins.Q1, this.pins.A2_B);
		Connect(this.U4.pins.Q2, this.pins.A3_B);
		Connect(this.U4.pins.Q3, this.pins.A4_B);
		Connect(this.U4.pins.Q4, this.pins.A5_B);
		Connect(this.U4.pins.Q5, this.pins.A6_B);
		Connect(this.U4.pins.Q6, this.pins.A7_B);
		Connect(this.U4.pins.Q7, this.pins.A8_B);
	}
}
/**
 * BUS TRANSCEIVERS OCTAL WITH 3-STATE AND OPEN-COLLECTOR OUTPUTS
 */
class SN74LS638 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			DIR_I: new Pin(),
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
		this.ULS638LOG = new logicexp(['GBAR_I','DIR_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B'], ['GBAR','DIR','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_O','A2_O','A3_O','A4_O','A5_O','A6_O','A7_O','A8_O','B1_O','B2_O','B3_O','B4_O','B5_O','B6_O','B7_O','B8_O','ENB'], []).Logic('   GBAR =  GBAR_I ;   DIR =  DIR_I ;   A1 =  A1_B ;   A2 =  A2_B ;   A3 =  A3_B ;   A4 =  A4_B ;   A5 =  A5_B ;   A6 =  A6_B ;   A7 =  A7_B ;   A8 =  A8_B ;   B1 =  B1_B ;   B2 =  B2_B ;   B3 =  B3_B ;   B4 =  B4_B ;   B5 =  B5_B ;   B6 =  B6_B ;   B7 =  B7_B ;   B8 =  B8_B ;let    ENA =  !(GBAR | DIR) ;   ENA =  !(GBAR | DIR) ;   ENB =  !GBAR & DIR ;   A1_O =  !(ENA & B1) ;   A2_O =  !(ENA & B2) ;   A3_O =  !(ENA & B3) ;   A4_O =  !(ENA & B4) ;   A5_O =  !(ENA & B5) ;   A6_O =  !(ENA & B6) ;   A7_O =  !(ENA & B7) ;   A8_O =  !(ENA & B8) ;   B1_O =  !A1 ;   B2_O =  !A2 ;   B3_O =  !A3 ;   B4_O =  !A4 ;   B5_O =  !A5 ;   B6_O =  !A6 ;   B7_O =  !A7 ;   B8_O =  !A8 ;');
		Connect(this.ULS638LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS638LOG.pins.DIR_I, this.pins.DIR_I);
		Connect(this.ULS638LOG.pins.A1_B, this.pins.A1_B);
		Connect(this.ULS638LOG.pins.A2_B, this.pins.A2_B);
		Connect(this.ULS638LOG.pins.A3_B, this.pins.A3_B);
		Connect(this.ULS638LOG.pins.A4_B, this.pins.A4_B);
		Connect(this.ULS638LOG.pins.A5_B, this.pins.A5_B);
		Connect(this.ULS638LOG.pins.A6_B, this.pins.A6_B);
		Connect(this.ULS638LOG.pins.A7_B, this.pins.A7_B);
		Connect(this.ULS638LOG.pins.A8_B, this.pins.A8_B);
		Connect(this.ULS638LOG.pins.B1_B, this.pins.B1_B);
		Connect(this.ULS638LOG.pins.B2_B, this.pins.B2_B);
		Connect(this.ULS638LOG.pins.B3_B, this.pins.B3_B);
		Connect(this.ULS638LOG.pins.B4_B, this.pins.B4_B);
		Connect(this.ULS638LOG.pins.B5_B, this.pins.B5_B);
		Connect(this.ULS638LOG.pins.B6_B, this.pins.B6_B);
		Connect(this.ULS638LOG.pins.B7_B, this.pins.B7_B);
		Connect(this.ULS638LOG.pins.B8_B, this.pins.B8_B);
		let GBAR = new Pin();
		Connect(this.ULS638LOG.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.ULS638LOG.pins.DIR, DIR);
		let A1 = new Pin();
		Connect(this.ULS638LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS638LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS638LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS638LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS638LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS638LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS638LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS638LOG.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS638LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS638LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS638LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS638LOG.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS638LOG.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS638LOG.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS638LOG.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS638LOG.pins.B8, B8);
		let A1_O = new Pin();
		Connect(this.ULS638LOG.pins.A1_O, A1_O);
		let A2_O = new Pin();
		Connect(this.ULS638LOG.pins.A2_O, A2_O);
		let A3_O = new Pin();
		Connect(this.ULS638LOG.pins.A3_O, A3_O);
		let A4_O = new Pin();
		Connect(this.ULS638LOG.pins.A4_O, A4_O);
		let A5_O = new Pin();
		Connect(this.ULS638LOG.pins.A5_O, A5_O);
		let A6_O = new Pin();
		Connect(this.ULS638LOG.pins.A6_O, A6_O);
		let A7_O = new Pin();
		Connect(this.ULS638LOG.pins.A7_O, A7_O);
		let A8_O = new Pin();
		Connect(this.ULS638LOG.pins.A8_O, A8_O);
		let B1_O = new Pin();
		Connect(this.ULS638LOG.pins.B1_O, B1_O);
		let B2_O = new Pin();
		Connect(this.ULS638LOG.pins.B2_O, B2_O);
		let B3_O = new Pin();
		Connect(this.ULS638LOG.pins.B3_O, B3_O);
		let B4_O = new Pin();
		Connect(this.ULS638LOG.pins.B4_O, B4_O);
		let B5_O = new Pin();
		Connect(this.ULS638LOG.pins.B5_O, B5_O);
		let B6_O = new Pin();
		Connect(this.ULS638LOG.pins.B6_O, B6_O);
		let B7_O = new Pin();
		Connect(this.ULS638LOG.pins.B7_O, B7_O);
		let B8_O = new Pin();
		Connect(this.ULS638LOG.pins.B8_O, B8_O);
		let ENB = new Pin();
		Connect(this.ULS638LOG.pins.ENB, ENB);
		Connect(A1_O, this.pins.A1_B);
		Connect(A2_O, this.pins.A2_B);
		Connect(A3_O, this.pins.A3_B);
		Connect(A4_O, this.pins.A4_B);
		Connect(A5_O, this.pins.A5_B);
		Connect(A6_O, this.pins.A6_B);
		Connect(A7_O, this.pins.A7_B);
		Connect(A8_O, this.pins.A8_B);
		Connect(B1_O, this.pins.B1_B);
		Connect(B2_O, this.pins.B2_B);
		Connect(B3_O, this.pins.B3_B);
		Connect(B4_O, this.pins.B4_B);
		Connect(B5_O, this.pins.B5_B);
		Connect(B6_O, this.pins.B6_B);
		Connect(B7_O, this.pins.B7_B);
		Connect(B8_O, this.pins.B8_B);
	}
}
/**
 * BUS TRANSCEIVERS OCTAL WITH 3-STATE AND OPEN-COLLECTOR OUTPUTS
 */
class SN74LS639 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			DIR_I: new Pin(),
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
		this.ULS639LOG = new logicexp(['GBAR_I','DIR_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B'], ['GBAR','DIR','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_O','A2_O','A3_O','A4_O','A5_O','A6_O','A7_O','A8_O','B1_O','B2_O','B3_O','B4_O','B5_O','B6_O','B7_O','B8_O','ENB'], []).Logic('   GBAR =  GBAR_I ;   DIR =  DIR_I ;   A1 =  A1_B ;   A2 =  A2_B ;   A3 =  A3_B ;   A4 =  A4_B ;   A5 =  A5_B ;   A6 =  A6_B ;   A7 =  A7_B ;   A8 =  A8_B ;   B1 =  B1_B ;   B2 =  B2_B ;   B3 =  B3_B ;   B4 =  B4_B ;   B5 =  B5_B ;   B6 =  B6_B ;   B7 =  B7_B ;   B8 =  B8_B ;let    ENA =  !(GBAR | DIR) ;   ENA =  !(GBAR | DIR) ;   ENB =  !GBAR & DIR ;   A1_O =  !(ENA & !B1) ;   A2_O =  !(ENA & !B2) ;   A3_O =  !(ENA & !B3) ;   A4_O =  !(ENA & !B4) ;   A5_O =  !(ENA & !B5) ;   A6_O =  !(ENA & !B6) ;   A7_O =  !(ENA & !B7) ;   A8_O =  !(ENA & !B8) ;   B1_O =  A1 ;   B2_O =  A2 ;   B3_O =  A3 ;   B4_O =  A4 ;   B5_O =  A5 ;   B6_O =  A6 ;   B7_O =  A7 ;   B8_O =  A8 ;');
		Connect(this.ULS639LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS639LOG.pins.DIR_I, this.pins.DIR_I);
		Connect(this.ULS639LOG.pins.A1_B, this.pins.A1_B);
		Connect(this.ULS639LOG.pins.A2_B, this.pins.A2_B);
		Connect(this.ULS639LOG.pins.A3_B, this.pins.A3_B);
		Connect(this.ULS639LOG.pins.A4_B, this.pins.A4_B);
		Connect(this.ULS639LOG.pins.A5_B, this.pins.A5_B);
		Connect(this.ULS639LOG.pins.A6_B, this.pins.A6_B);
		Connect(this.ULS639LOG.pins.A7_B, this.pins.A7_B);
		Connect(this.ULS639LOG.pins.A8_B, this.pins.A8_B);
		Connect(this.ULS639LOG.pins.B1_B, this.pins.B1_B);
		Connect(this.ULS639LOG.pins.B2_B, this.pins.B2_B);
		Connect(this.ULS639LOG.pins.B3_B, this.pins.B3_B);
		Connect(this.ULS639LOG.pins.B4_B, this.pins.B4_B);
		Connect(this.ULS639LOG.pins.B5_B, this.pins.B5_B);
		Connect(this.ULS639LOG.pins.B6_B, this.pins.B6_B);
		Connect(this.ULS639LOG.pins.B7_B, this.pins.B7_B);
		Connect(this.ULS639LOG.pins.B8_B, this.pins.B8_B);
		let GBAR = new Pin();
		Connect(this.ULS639LOG.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.ULS639LOG.pins.DIR, DIR);
		let A1 = new Pin();
		Connect(this.ULS639LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS639LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS639LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS639LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS639LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS639LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS639LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS639LOG.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS639LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS639LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS639LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS639LOG.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS639LOG.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS639LOG.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS639LOG.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS639LOG.pins.B8, B8);
		let A1_O = new Pin();
		Connect(this.ULS639LOG.pins.A1_O, A1_O);
		let A2_O = new Pin();
		Connect(this.ULS639LOG.pins.A2_O, A2_O);
		let A3_O = new Pin();
		Connect(this.ULS639LOG.pins.A3_O, A3_O);
		let A4_O = new Pin();
		Connect(this.ULS639LOG.pins.A4_O, A4_O);
		let A5_O = new Pin();
		Connect(this.ULS639LOG.pins.A5_O, A5_O);
		let A6_O = new Pin();
		Connect(this.ULS639LOG.pins.A6_O, A6_O);
		let A7_O = new Pin();
		Connect(this.ULS639LOG.pins.A7_O, A7_O);
		let A8_O = new Pin();
		Connect(this.ULS639LOG.pins.A8_O, A8_O);
		let B1_O = new Pin();
		Connect(this.ULS639LOG.pins.B1_O, B1_O);
		let B2_O = new Pin();
		Connect(this.ULS639LOG.pins.B2_O, B2_O);
		let B3_O = new Pin();
		Connect(this.ULS639LOG.pins.B3_O, B3_O);
		let B4_O = new Pin();
		Connect(this.ULS639LOG.pins.B4_O, B4_O);
		let B5_O = new Pin();
		Connect(this.ULS639LOG.pins.B5_O, B5_O);
		let B6_O = new Pin();
		Connect(this.ULS639LOG.pins.B6_O, B6_O);
		let B7_O = new Pin();
		Connect(this.ULS639LOG.pins.B7_O, B7_O);
		let B8_O = new Pin();
		Connect(this.ULS639LOG.pins.B8_O, B8_O);
		let ENB = new Pin();
		Connect(this.ULS639LOG.pins.ENB, ENB);
		Connect(A1_O, this.pins.A1_B);
		Connect(A2_O, this.pins.A2_B);
		Connect(A3_O, this.pins.A3_B);
		Connect(A4_O, this.pins.A4_B);
		Connect(A5_O, this.pins.A5_B);
		Connect(A6_O, this.pins.A6_B);
		Connect(A7_O, this.pins.A7_B);
		Connect(A8_O, this.pins.A8_B);
		Connect(B1_O, this.pins.B1_B);
		Connect(B2_O, this.pins.B2_B);
		Connect(B3_O, this.pins.B3_B);
		Connect(B4_O, this.pins.B4_B);
		Connect(B5_O, this.pins.B5_B);
		Connect(B6_O, this.pins.B6_B);
		Connect(B7_O, this.pins.B7_B);
		Connect(B8_O, this.pins.B8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS640 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			DIR_I: new Pin(),
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
		let DIR = new Pin();
		Connect(this.U2.pins.IN, DIR);
		let DIRBAR = new Pin();
		Connect(this.U2.pins.OUT, DIRBAR);
		this.U3 = new nora(2,2);
		this.U4 = new inv3a(8);
		this.U5 = new inv3a(8);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS641 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			DIR_I: new Pin(),
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
		this.U1 = new bufa(16);
		this.ULS641LOG = new logicexp(['GBAR_I','DIR_I','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8'], ['GBAR','DIR','IA1','IA2','IA3','IA4','IA5','IA6','IA7','IA8','IB1','IB2','IB3','IB4','IB5','IB6','IB7','IB8','ATOB','BTOA'], []).Logic('   GBAR =  GBAR_I ;   DIR  =  DIR_I ;   ATOB =  !GBAR & DIR ;   BTOA =  !GBAR & !DIR ;   IA1 =  !(!B1 & BTOA) ;   IA2 =  !(!B2 & BTOA) ;   IA3 =  !(!B3 & BTOA) ;   IA4 =  !(!B4 & BTOA) ;   IA5 =  !(!B5 & BTOA) ;   IA6 =  !(!B6 & BTOA) ;   IA7 =  !(!B7 & BTOA) ;   IA8 =  !(!B8 & BTOA) ;   IB1 =  !(!A1 & ATOB) ;   IB2 =  !(!A2 & ATOB) ;   IB3 =  !(!A3 & ATOB) ;   IB4 =  !(!A4 & ATOB) ;   IB5 =  !(!A5 & ATOB) ;   IB6 =  !(!A6 & ATOB) ;   IB7 =  !(!A7 & ATOB) ;   IB8 =  !(!A8 & ATOB) ;');
		Connect(this.ULS641LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS641LOG.pins.DIR_I, this.pins.DIR_I);
		let A1 = new Pin();
		Connect(this.ULS641LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS641LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS641LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS641LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS641LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS641LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS641LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS641LOG.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS641LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS641LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS641LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS641LOG.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS641LOG.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS641LOG.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS641LOG.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS641LOG.pins.B8, B8);
		let GBAR = new Pin();
		Connect(this.ULS641LOG.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.ULS641LOG.pins.DIR, DIR);
		let IA1 = new Pin();
		Connect(this.ULS641LOG.pins.IA1, IA1);
		let IA2 = new Pin();
		Connect(this.ULS641LOG.pins.IA2, IA2);
		let IA3 = new Pin();
		Connect(this.ULS641LOG.pins.IA3, IA3);
		let IA4 = new Pin();
		Connect(this.ULS641LOG.pins.IA4, IA4);
		let IA5 = new Pin();
		Connect(this.ULS641LOG.pins.IA5, IA5);
		let IA6 = new Pin();
		Connect(this.ULS641LOG.pins.IA6, IA6);
		let IA7 = new Pin();
		Connect(this.ULS641LOG.pins.IA7, IA7);
		let IA8 = new Pin();
		Connect(this.ULS641LOG.pins.IA8, IA8);
		let IB1 = new Pin();
		Connect(this.ULS641LOG.pins.IB1, IB1);
		let IB2 = new Pin();
		Connect(this.ULS641LOG.pins.IB2, IB2);
		let IB3 = new Pin();
		Connect(this.ULS641LOG.pins.IB3, IB3);
		let IB4 = new Pin();
		Connect(this.ULS641LOG.pins.IB4, IB4);
		let IB5 = new Pin();
		Connect(this.ULS641LOG.pins.IB5, IB5);
		let IB6 = new Pin();
		Connect(this.ULS641LOG.pins.IB6, IB6);
		let IB7 = new Pin();
		Connect(this.ULS641LOG.pins.IB7, IB7);
		let IB8 = new Pin();
		Connect(this.ULS641LOG.pins.IB8, IB8);
		let ATOB = new Pin();
		Connect(this.ULS641LOG.pins.ATOB, ATOB);
		let BTOA = new Pin();
		Connect(this.ULS641LOG.pins.BTOA, BTOA);
		Connect(IA1, this.pins.A1_B);
		Connect(IA2, this.pins.A2_B);
		Connect(IA3, this.pins.A3_B);
		Connect(IA4, this.pins.A4_B);
		Connect(IA5, this.pins.A5_B);
		Connect(IA6, this.pins.A6_B);
		Connect(IA7, this.pins.A7_B);
		Connect(IA8, this.pins.A8_B);
		Connect(IB1, this.pins.B1_B);
		Connect(IB2, this.pins.B2_B);
		Connect(IB3, this.pins.B3_B);
		Connect(IB4, this.pins.B4_B);
		Connect(IB5, this.pins.B5_B);
		Connect(IB6, this.pins.B6_B);
		Connect(IB7, this.pins.B7_B);
		Connect(IB8, this.pins.B8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS642 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			DIR_I: new Pin(),
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
		this.U1 = new bufa(16);
		this.ULS642LOG = new logicexp(['GBAR_I','DIR_I','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8'], ['GBAR','DIR','IA1','IA2','IA3','IA4','IA5','IA6','IA7','IA8','IB1','IB2','IB3','IB4','IB5','IB6','IB7','IB8','ATOB','BTOA'], []).Logic('   GBAR =  GBAR_I ;   DIR  =  DIR_I ;   ATOB =  !GBAR & DIR ;   BTOA =  !GBAR & !DIR ;   IA1 =  !(B1 & BTOA) ;   IA2 =  !(B2 & BTOA) ;   IA3 =  !(B3 & BTOA) ;   IA4 =  !(B4 & BTOA) ;   IA5 =  !(B5 & BTOA) ;   IA6 =  !(B6 & BTOA) ;   IA7 =  !(B7 & BTOA) ;   IA8 =  !(B8 & BTOA) ;   IB1 =  !(A1 & ATOB) ;   IB2 =  !(A2 & ATOB) ;   IB3 =  !(A3 & ATOB) ;   IB4 =  !(A4 & ATOB) ;   IB5 =  !(A5 & ATOB) ;   IB6 =  !(A6 & ATOB) ;   IB7 =  !(A7 & ATOB) ;   IB8 =  !(A8 & ATOB) ;');
		Connect(this.ULS642LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS642LOG.pins.DIR_I, this.pins.DIR_I);
		let A1 = new Pin();
		Connect(this.ULS642LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS642LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS642LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS642LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS642LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS642LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS642LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS642LOG.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS642LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS642LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS642LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS642LOG.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS642LOG.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS642LOG.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS642LOG.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS642LOG.pins.B8, B8);
		let GBAR = new Pin();
		Connect(this.ULS642LOG.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.ULS642LOG.pins.DIR, DIR);
		let IA1 = new Pin();
		Connect(this.ULS642LOG.pins.IA1, IA1);
		let IA2 = new Pin();
		Connect(this.ULS642LOG.pins.IA2, IA2);
		let IA3 = new Pin();
		Connect(this.ULS642LOG.pins.IA3, IA3);
		let IA4 = new Pin();
		Connect(this.ULS642LOG.pins.IA4, IA4);
		let IA5 = new Pin();
		Connect(this.ULS642LOG.pins.IA5, IA5);
		let IA6 = new Pin();
		Connect(this.ULS642LOG.pins.IA6, IA6);
		let IA7 = new Pin();
		Connect(this.ULS642LOG.pins.IA7, IA7);
		let IA8 = new Pin();
		Connect(this.ULS642LOG.pins.IA8, IA8);
		let IB1 = new Pin();
		Connect(this.ULS642LOG.pins.IB1, IB1);
		let IB2 = new Pin();
		Connect(this.ULS642LOG.pins.IB2, IB2);
		let IB3 = new Pin();
		Connect(this.ULS642LOG.pins.IB3, IB3);
		let IB4 = new Pin();
		Connect(this.ULS642LOG.pins.IB4, IB4);
		let IB5 = new Pin();
		Connect(this.ULS642LOG.pins.IB5, IB5);
		let IB6 = new Pin();
		Connect(this.ULS642LOG.pins.IB6, IB6);
		let IB7 = new Pin();
		Connect(this.ULS642LOG.pins.IB7, IB7);
		let IB8 = new Pin();
		Connect(this.ULS642LOG.pins.IB8, IB8);
		let ATOB = new Pin();
		Connect(this.ULS642LOG.pins.ATOB, ATOB);
		let BTOA = new Pin();
		Connect(this.ULS642LOG.pins.BTOA, BTOA);
		Connect(IA1, this.pins.A1_B);
		Connect(IA2, this.pins.A2_B);
		Connect(IA3, this.pins.A3_B);
		Connect(IA4, this.pins.A4_B);
		Connect(IA5, this.pins.A5_B);
		Connect(IA6, this.pins.A6_B);
		Connect(IA7, this.pins.A7_B);
		Connect(IA8, this.pins.A8_B);
		Connect(IB1, this.pins.B1_B);
		Connect(IB2, this.pins.B2_B);
		Connect(IB3, this.pins.B3_B);
		Connect(IB4, this.pins.B4_B);
		Connect(IB5, this.pins.B5_B);
		Connect(IB6, this.pins.B6_B);
		Connect(IB7, this.pins.B7_B);
		Connect(IB8, this.pins.B8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74LS643 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR: new Pin(),
			DIR: new Pin(),
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			A5: new Pin(),
			A6: new Pin(),
			A7: new Pin(),
			A8: new Pin(),
			B1: new Pin(),
			B2: new Pin(),
			B3: new Pin(),
			B4: new Pin(),
			B5: new Pin(),
			B6: new Pin(),
			B7: new Pin(),
			B8: new Pin(),
		}
		this.UBUF = new buf();
		this.UINV = new inva(2);
		this.UEN = new anda(2,2);
		this.UA = new buf3a(8);
		Connect(this.UA.pins.D0, this.pins.B1);
		Connect(this.UA.pins.D1, this.pins.B2);
		Connect(this.UA.pins.D2, this.pins.B3);
		Connect(this.UA.pins.D3, this.pins.B4);
		Connect(this.UA.pins.D4, this.pins.B5);
		Connect(this.UA.pins.D5, this.pins.B6);
		Connect(this.UA.pins.D6, this.pins.B7);
		Connect(this.UA.pins.D7, this.pins.B8);
		let EBA = new Pin();
		Connect(this.UA.pins.EN, EBA);
		Connect(this.UA.pins.Q0, this.pins.A1);
		Connect(this.UA.pins.Q1, this.pins.A2);
		Connect(this.UA.pins.Q2, this.pins.A3);
		Connect(this.UA.pins.Q3, this.pins.A4);
		Connect(this.UA.pins.Q4, this.pins.A5);
		Connect(this.UA.pins.Q5, this.pins.A6);
		Connect(this.UA.pins.Q6, this.pins.A7);
		Connect(this.UA.pins.Q7, this.pins.A8);
		this.UB = new inv3a(8);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS644 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			DIR_I: new Pin(),
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
		this.U1 = new bufa(16);
		this.ULS644LOG = new logicexp(['GBAR_I','DIR_I','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8'], ['GBAR','DIR','IA1','IA2','IA3','IA4','IA5','IA6','IA7','IA8','IB1','IB2','IB3','IB4','IB5','IB6','IB7','IB8','ATOB','BTOA'], []).Logic('   GBAR =  GBAR_I ;   DIR  =  DIR_I ;   ATOB =  !GBAR & DIR ;   BTOA =  !GBAR & !DIR ;   IA1 =  !(!B1 & BTOA) ;   IA2 =  !(!B2 & BTOA) ;   IA3 =  !(!B3 & BTOA) ;   IA4 =  !(!B4 & BTOA) ;   IA5 =  !(!B5 & BTOA) ;   IA6 =  !(!B6 & BTOA) ;   IA7 =  !(!B7 & BTOA) ;   IA8 =  !(!B8 & BTOA) ;   IB1 =  !(A1 & ATOB) ;   IB2 =  !(A2 & ATOB) ;   IB3 =  !(A3 & ATOB) ;   IB4 =  !(A4 & ATOB) ;   IB5 =  !(A5 & ATOB) ;   IB6 =  !(A6 & ATOB) ;   IB7 =  !(A7 & ATOB) ;   IB8 =  !(A8 & ATOB) ;');
		Connect(this.ULS644LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS644LOG.pins.DIR_I, this.pins.DIR_I);
		let A1 = new Pin();
		Connect(this.ULS644LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS644LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS644LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS644LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS644LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS644LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS644LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS644LOG.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS644LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS644LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS644LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS644LOG.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS644LOG.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS644LOG.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS644LOG.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS644LOG.pins.B8, B8);
		let GBAR = new Pin();
		Connect(this.ULS644LOG.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.ULS644LOG.pins.DIR, DIR);
		let IA1 = new Pin();
		Connect(this.ULS644LOG.pins.IA1, IA1);
		let IA2 = new Pin();
		Connect(this.ULS644LOG.pins.IA2, IA2);
		let IA3 = new Pin();
		Connect(this.ULS644LOG.pins.IA3, IA3);
		let IA4 = new Pin();
		Connect(this.ULS644LOG.pins.IA4, IA4);
		let IA5 = new Pin();
		Connect(this.ULS644LOG.pins.IA5, IA5);
		let IA6 = new Pin();
		Connect(this.ULS644LOG.pins.IA6, IA6);
		let IA7 = new Pin();
		Connect(this.ULS644LOG.pins.IA7, IA7);
		let IA8 = new Pin();
		Connect(this.ULS644LOG.pins.IA8, IA8);
		let IB1 = new Pin();
		Connect(this.ULS644LOG.pins.IB1, IB1);
		let IB2 = new Pin();
		Connect(this.ULS644LOG.pins.IB2, IB2);
		let IB3 = new Pin();
		Connect(this.ULS644LOG.pins.IB3, IB3);
		let IB4 = new Pin();
		Connect(this.ULS644LOG.pins.IB4, IB4);
		let IB5 = new Pin();
		Connect(this.ULS644LOG.pins.IB5, IB5);
		let IB6 = new Pin();
		Connect(this.ULS644LOG.pins.IB6, IB6);
		let IB7 = new Pin();
		Connect(this.ULS644LOG.pins.IB7, IB7);
		let IB8 = new Pin();
		Connect(this.ULS644LOG.pins.IB8, IB8);
		let ATOB = new Pin();
		Connect(this.ULS644LOG.pins.ATOB, ATOB);
		let BTOA = new Pin();
		Connect(this.ULS644LOG.pins.BTOA, BTOA);
		Connect(IA1, this.pins.A1_B);
		Connect(IA2, this.pins.A2_B);
		Connect(IA3, this.pins.A3_B);
		Connect(IA4, this.pins.A4_B);
		Connect(IA5, this.pins.A5_B);
		Connect(IA6, this.pins.A6_B);
		Connect(IA7, this.pins.A7_B);
		Connect(IA8, this.pins.A8_B);
		Connect(IB1, this.pins.B1_B);
		Connect(IB2, this.pins.B2_B);
		Connect(IB3, this.pins.B3_B);
		Connect(IB4, this.pins.B4_B);
		Connect(IB5, this.pins.B5_B);
		Connect(IB6, this.pins.B6_B);
		Connect(IB7, this.pins.B7_B);
		Connect(IB8, this.pins.B8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS
 */
class SN74LS645 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR: new Pin(),
			DIR: new Pin(),
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			A5: new Pin(),
			A6: new Pin(),
			A7: new Pin(),
			A8: new Pin(),
			B1: new Pin(),
			B2: new Pin(),
			B3: new Pin(),
			B4: new Pin(),
			B5: new Pin(),
			B6: new Pin(),
			B7: new Pin(),
			B8: new Pin(),
		}
		this.UBUFF = new bufa(2);
		this.UA = new nor(2);
		this.UB = new inv();
		let GBAR_BUF = new Pin();
		Connect(this.UB.pins.IN, GBAR_BUF);
		let RE1 = new Pin();
		Connect(this.UB.pins.OUT, RE1);
		this.UC = new and(2);
		this.U1 = new buf3a(8);
		Connect(this.U1.pins.D0, this.pins.A1);
		Connect(this.U1.pins.D1, this.pins.A2);
		Connect(this.U1.pins.D2, this.pins.A3);
		Connect(this.U1.pins.D3, this.pins.A4);
		Connect(this.U1.pins.D4, this.pins.A5);
		Connect(this.U1.pins.D5, this.pins.A6);
		Connect(this.U1.pins.D6, this.pins.A7);
		Connect(this.U1.pins.D7, this.pins.A8);
		let T2 = new Pin();
		Connect(this.U1.pins.EN, T2);
		Connect(this.U1.pins.Q0, this.pins.B1);
		Connect(this.U1.pins.Q1, this.pins.B2);
		Connect(this.U1.pins.Q2, this.pins.B3);
		Connect(this.U1.pins.Q3, this.pins.B4);
		Connect(this.U1.pins.Q4, this.pins.B5);
		Connect(this.U1.pins.Q5, this.pins.B6);
		Connect(this.U1.pins.Q6, this.pins.B7);
		Connect(this.U1.pins.Q7, this.pins.B8);
		this.U2 = new buf3a(8);
		Connect(this.U2.pins.D0, this.pins.B1);
		Connect(this.U2.pins.D1, this.pins.B2);
		Connect(this.U2.pins.D2, this.pins.B3);
		Connect(this.U2.pins.D3, this.pins.B4);
		Connect(this.U2.pins.D4, this.pins.B5);
		Connect(this.U2.pins.D5, this.pins.B6);
		Connect(this.U2.pins.D6, this.pins.B7);
		Connect(this.U2.pins.D7, this.pins.B8);
		let T1 = new Pin();
		Connect(this.U2.pins.EN, T1);
		Connect(this.U2.pins.Q0, this.pins.A1);
		Connect(this.U2.pins.Q1, this.pins.A2);
		Connect(this.U2.pins.Q2, this.pins.A3);
		Connect(this.U2.pins.Q3, this.pins.A4);
		Connect(this.U2.pins.Q4, this.pins.A5);
		Connect(this.U2.pins.Q5, this.pins.A6);
		Connect(this.U2.pins.Q6, this.pins.A7);
		Connect(this.U2.pins.Q7, this.pins.A8);
	}
}
/**
 * OCTAL BUS TRANSCEIVER_REGISTER WITH 3-STATE OUTPUTS
 */
class SN74LS646 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			DIR_I: new Pin(),
			CBA_I: new Pin(),
			SBA_I: new Pin(),
			CAB_I: new Pin(),
			SAB_I: new Pin(),
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
		this.U_NO_HYST = new bufa(2);
		this.ULS646LOG1 = new logicexp(['GBAR','DIR','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1','QA2','QA3','QA4','QA5','QA6','QA7','QA8','QB1','QB2','QB3','QB4','QB5','QB6','QB7','QB8'], ['CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_OUT','A2_OUT','A3_OUT','A4_OUT','A5_OUT','A6_OUT','A7_OUT','A8_OUT','B1_OUT','B2_OUT','B3_OUT','B4_OUT','B5_OUT','B6_OUT','B7_OUT','B8_OUT','ENA','ENB'], []).Logic('   CBA =  CBA_I ;   SBA =  SBA_I ;let    SBABAR =  !SBA ;   SBABAR =  !SBA ;   CAB =  CAB_I ;   SAB =  SAB_I ;let    SABBAR =  !SAB ;   SABBAR =  !SAB ;   ENA =  !DIR & !GBAR ;   ENB =   DIR & !GBAR ;   A1 =  A1_B ;   B1 =  B1_B ;   A2 =  A2_B ;   B2 =  B2_B ;   A3 =  A3_B ;   B3 =  B3_B ;   A4 =  A4_B ;   B4 =  B4_B ;   A5 =  A5_B ;   B5 =  B5_B ;   A6 =  A6_B ;   B6 =  B6_B ;   A7 =  A7_B ;   B7 =  B7_B ;   A8 =  A8_B ;   B8 =  B8_B ;   A1_OUT =  !((!B1 & SBABAR) | (SBA & QB1)) ;   B1_OUT =  !((!A1 & SABBAR) | (SAB & QA1)) ;   A2_OUT =  !((!B2 & SBABAR) | (SBA & QB2)) ;   B2_OUT =  !((!A2 & SABBAR) | (SAB & QA2)) ;   A3_OUT =  !((!B3 & SBABAR) | (SBA & QB3)) ;   B3_OUT =  !((!A3 & SABBAR) | (SAB & QA3)) ;   A4_OUT =  !((!B4 & SBABAR) | (SBA & QB4)) ;   B4_OUT =  !((!A4 & SABBAR) | (SAB & QA4)) ;   A5_OUT =  !((!B5 & SBABAR) | (SBA & QB5)) ;   B5_OUT =  !((!A5 & SABBAR) | (SAB & QA5)) ;   A6_OUT =  !((!B6 & SBABAR) | (SBA & QB6)) ;   B6_OUT =  !((!A6 & SABBAR) | (SAB & QA6)) ;   A7_OUT =  !((!B7 & SBABAR) | (SBA & QB7)) ;   B7_OUT =  !((!A7 & SABBAR) | (SAB & QA7)) ;   A8_OUT =  !((!B8 & SBABAR) | (SBA & QB8)) ;   B8_OUT =  !((!A8 & SABBAR) | (SAB & QA8)) ;');
		let GBAR = new Pin();
		Connect(this.ULS646LOG1.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.ULS646LOG1.pins.DIR, DIR);
		Connect(this.ULS646LOG1.pins.CBA_I, this.pins.CBA_I);
		Connect(this.ULS646LOG1.pins.SBA_I, this.pins.SBA_I);
		Connect(this.ULS646LOG1.pins.CAB_I, this.pins.CAB_I);
		Connect(this.ULS646LOG1.pins.SAB_I, this.pins.SAB_I);
		Connect(this.ULS646LOG1.pins.A1_B, this.pins.A1_B);
		Connect(this.ULS646LOG1.pins.A2_B, this.pins.A2_B);
		Connect(this.ULS646LOG1.pins.A3_B, this.pins.A3_B);
		Connect(this.ULS646LOG1.pins.A4_B, this.pins.A4_B);
		Connect(this.ULS646LOG1.pins.A5_B, this.pins.A5_B);
		Connect(this.ULS646LOG1.pins.A6_B, this.pins.A6_B);
		Connect(this.ULS646LOG1.pins.A7_B, this.pins.A7_B);
		Connect(this.ULS646LOG1.pins.A8_B, this.pins.A8_B);
		Connect(this.ULS646LOG1.pins.B1_B, this.pins.B1_B);
		Connect(this.ULS646LOG1.pins.B2_B, this.pins.B2_B);
		Connect(this.ULS646LOG1.pins.B3_B, this.pins.B3_B);
		Connect(this.ULS646LOG1.pins.B4_B, this.pins.B4_B);
		Connect(this.ULS646LOG1.pins.B5_B, this.pins.B5_B);
		Connect(this.ULS646LOG1.pins.B6_B, this.pins.B6_B);
		Connect(this.ULS646LOG1.pins.B7_B, this.pins.B7_B);
		Connect(this.ULS646LOG1.pins.B8_B, this.pins.B8_B);
		let QA1 = new Pin();
		Connect(this.ULS646LOG1.pins.QA1, QA1);
		let QA2 = new Pin();
		Connect(this.ULS646LOG1.pins.QA2, QA2);
		let QA3 = new Pin();
		Connect(this.ULS646LOG1.pins.QA3, QA3);
		let QA4 = new Pin();
		Connect(this.ULS646LOG1.pins.QA4, QA4);
		let QA5 = new Pin();
		Connect(this.ULS646LOG1.pins.QA5, QA5);
		let QA6 = new Pin();
		Connect(this.ULS646LOG1.pins.QA6, QA6);
		let QA7 = new Pin();
		Connect(this.ULS646LOG1.pins.QA7, QA7);
		let QA8 = new Pin();
		Connect(this.ULS646LOG1.pins.QA8, QA8);
		let QB1 = new Pin();
		Connect(this.ULS646LOG1.pins.QB1, QB1);
		let QB2 = new Pin();
		Connect(this.ULS646LOG1.pins.QB2, QB2);
		let QB3 = new Pin();
		Connect(this.ULS646LOG1.pins.QB3, QB3);
		let QB4 = new Pin();
		Connect(this.ULS646LOG1.pins.QB4, QB4);
		let QB5 = new Pin();
		Connect(this.ULS646LOG1.pins.QB5, QB5);
		let QB6 = new Pin();
		Connect(this.ULS646LOG1.pins.QB6, QB6);
		let QB7 = new Pin();
		Connect(this.ULS646LOG1.pins.QB7, QB7);
		let QB8 = new Pin();
		Connect(this.ULS646LOG1.pins.QB8, QB8);
		let CBA = new Pin();
		Connect(this.ULS646LOG1.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.ULS646LOG1.pins.SBA, SBA);
		let CAB = new Pin();
		Connect(this.ULS646LOG1.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.ULS646LOG1.pins.SAB, SAB);
		let A1 = new Pin();
		Connect(this.ULS646LOG1.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS646LOG1.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS646LOG1.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS646LOG1.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS646LOG1.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS646LOG1.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS646LOG1.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS646LOG1.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS646LOG1.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS646LOG1.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS646LOG1.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS646LOG1.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS646LOG1.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS646LOG1.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS646LOG1.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS646LOG1.pins.B8, B8);
		let A1_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.A1_OUT, A1_OUT);
		let A2_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.A2_OUT, A2_OUT);
		let A3_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.A3_OUT, A3_OUT);
		let A4_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.A4_OUT, A4_OUT);
		let A5_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.A5_OUT, A5_OUT);
		let A6_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.A6_OUT, A6_OUT);
		let A7_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.A7_OUT, A7_OUT);
		let A8_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.A8_OUT, A8_OUT);
		let B1_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.B1_OUT, B1_OUT);
		let B2_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.B2_OUT, B2_OUT);
		let B3_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.B3_OUT, B3_OUT);
		let B4_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.B4_OUT, B4_OUT);
		let B5_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.B5_OUT, B5_OUT);
		let B6_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.B6_OUT, B6_OUT);
		let B7_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.B7_OUT, B7_OUT);
		let B8_OUT = new Pin();
		Connect(this.ULS646LOG1.pins.B8_OUT, B8_OUT);
		let ENA = new Pin();
		Connect(this.ULS646LOG1.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.ULS646LOG1.pins.ENB, ENB);
		this.UAREG = new dff(8);
		Connect(this.UAREG.pins.PRESET, _D_HI);
		Connect(this.UAREG.pins.CLEAR, _D_HI);
		Connect(this.UAREG.pins.CLOCK, CAB);
		Connect(this.UAREG.pins.D0, A1);
		Connect(this.UAREG.pins.D1, A2);
		Connect(this.UAREG.pins.D2, A3);
		Connect(this.UAREG.pins.D3, A4);
		Connect(this.UAREG.pins.D4, A5);
		Connect(this.UAREG.pins.D5, A6);
		Connect(this.UAREG.pins.D6, A7);
		Connect(this.UAREG.pins.D7, A8);
		let _D_NC = new Pin();
		Connect(this.UAREG.pins.Q0, _D_NC);
		Connect(this.UAREG.pins.Q1, _D_NC);
		Connect(this.UAREG.pins.Q2, _D_NC);
		Connect(this.UAREG.pins.Q3, _D_NC);
		Connect(this.UAREG.pins.Q4, _D_NC);
		Connect(this.UAREG.pins.Q5, _D_NC);
		Connect(this.UAREG.pins.Q6, _D_NC);
		Connect(this.UAREG.pins.Q7, _D_NC);
		this.UBREG = new dff(8);
		Connect(this.UBREG.pins.PRESET, _D_HI);
		Connect(this.UBREG.pins.CLEAR, _D_HI);
		Connect(this.UBREG.pins.CLOCK, CBA);
		Connect(this.UBREG.pins.D0, B1);
		Connect(this.UBREG.pins.D1, B2);
		Connect(this.UBREG.pins.D2, B3);
		Connect(this.UBREG.pins.D3, B4);
		Connect(this.UBREG.pins.D4, B5);
		Connect(this.UBREG.pins.D5, B6);
		Connect(this.UBREG.pins.D6, B7);
		Connect(this.UBREG.pins.D7, B8);
		Connect(this.UBREG.pins.Q0, _D_NC);
		Connect(this.UBREG.pins.Q1, _D_NC);
		Connect(this.UBREG.pins.Q2, _D_NC);
		Connect(this.UBREG.pins.Q3, _D_NC);
		Connect(this.UBREG.pins.Q4, _D_NC);
		Connect(this.UBREG.pins.Q5, _D_NC);
		Connect(this.UBREG.pins.Q6, _D_NC);
		Connect(this.UBREG.pins.Q7, _D_NC);
		Connect(A1_OUT, this.pins.A1_B);
		Connect(A2_OUT, this.pins.A2_B);
		Connect(A3_OUT, this.pins.A3_B);
		Connect(A4_OUT, this.pins.A4_B);
		Connect(A5_OUT, this.pins.A5_B);
		Connect(A6_OUT, this.pins.A6_B);
		Connect(A7_OUT, this.pins.A7_B);
		Connect(A8_OUT, this.pins.A8_B);
		Connect(B1_OUT, this.pins.B1_B);
		Connect(B2_OUT, this.pins.B2_B);
		Connect(B3_OUT, this.pins.B3_B);
		Connect(B4_OUT, this.pins.B4_B);
		Connect(B5_OUT, this.pins.B5_B);
		Connect(B6_OUT, this.pins.B6_B);
		Connect(B7_OUT, this.pins.B7_B);
		Connect(B8_OUT, this.pins.B8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVER_REGISTER WITH 3-STATE OUTPUTS
 */
class SN74LS648 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			DIR_I: new Pin(),
			CBA_I: new Pin(),
			SBA_I: new Pin(),
			CAB_I: new Pin(),
			SAB_I: new Pin(),
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
		this.U_NO_HYST = new bufa(2);
		this.ULS648LOG1 = new logicexp(['GBAR','DIR','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1','QA2','QA3','QA4','QA5','QA6','QA7','QA8','QB1','QB2','QB3','QB4','QB5','QB6','QB7','QB8'], ['CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_OUT','A2_OUT','A3_OUT','A4_OUT','A5_OUT','A6_OUT','A7_OUT','A8_OUT','B1_OUT','B2_OUT','B3_OUT','B4_OUT','B5_OUT','B6_OUT','B7_OUT','B8_OUT','ENA','ENB'], []).Logic('   CBA =  CBA_I ;   SBA =  SBA_I ;let    SBABAR =  !SBA ;   SBABAR =  !SBA ;   CAB =  CAB_I ;   SAB =  SAB_I ;let    SABBAR =  !SAB ;   SABBAR =  !SAB ;   ENA =  !DIR & !GBAR ;   ENB =   DIR & !GBAR ;   A1 =  A1_B ;   B1 =  B1_B ;   A2 =  A2_B ;   B2 =  B2_B ;   A3 =  A3_B ;   B3 =  B3_B ;   A4 =  A4_B ;   B4 =  B4_B ;   A5 =  A5_B ;   B5 =  B5_B ;   A6 =  A6_B ;   B6 =  B6_B ;   A7 =  A7_B ;   B7 =  B7_B ;   A8 =  A8_B ;   B8 =  B8_B ;   A1_OUT =  !((B1 & SBABAR) | (SBA & QB1)) ;   B1_OUT =  !((A1 & SABBAR) | (SAB & QA1)) ;   A2_OUT =  !((B2 & SBABAR) | (SBA & QB2)) ;   B2_OUT =  !((A2 & SABBAR) | (SAB & QA2)) ;   A3_OUT =  !((B3 & SBABAR) | (SBA & QB3)) ;   B3_OUT =  !((A3 & SABBAR) | (SAB & QA3)) ;   A4_OUT =  !((B4 & SBABAR) | (SBA & QB4)) ;   B4_OUT =  !((A4 & SABBAR) | (SAB & QA4)) ;   A5_OUT =  !((B5 & SBABAR) | (SBA & QB5)) ;   B5_OUT =  !((A5 & SABBAR) | (SAB & QA5)) ;   A6_OUT =  !((B6 & SBABAR) | (SBA & QB6)) ;   B6_OUT =  !((A6 & SABBAR) | (SAB & QA6)) ;   A7_OUT =  !((B7 & SBABAR) | (SBA & QB7)) ;   B7_OUT =  !((A7 & SABBAR) | (SAB & QA7)) ;   A8_OUT =  !((B8 & SBABAR) | (SBA & QB8)) ;   B8_OUT =  !((A8 & SABBAR) | (SAB & QA8)) ;');
		let GBAR = new Pin();
		Connect(this.ULS648LOG1.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.ULS648LOG1.pins.DIR, DIR);
		Connect(this.ULS648LOG1.pins.CBA_I, this.pins.CBA_I);
		Connect(this.ULS648LOG1.pins.SBA_I, this.pins.SBA_I);
		Connect(this.ULS648LOG1.pins.CAB_I, this.pins.CAB_I);
		Connect(this.ULS648LOG1.pins.SAB_I, this.pins.SAB_I);
		Connect(this.ULS648LOG1.pins.A1_B, this.pins.A1_B);
		Connect(this.ULS648LOG1.pins.A2_B, this.pins.A2_B);
		Connect(this.ULS648LOG1.pins.A3_B, this.pins.A3_B);
		Connect(this.ULS648LOG1.pins.A4_B, this.pins.A4_B);
		Connect(this.ULS648LOG1.pins.A5_B, this.pins.A5_B);
		Connect(this.ULS648LOG1.pins.A6_B, this.pins.A6_B);
		Connect(this.ULS648LOG1.pins.A7_B, this.pins.A7_B);
		Connect(this.ULS648LOG1.pins.A8_B, this.pins.A8_B);
		Connect(this.ULS648LOG1.pins.B1_B, this.pins.B1_B);
		Connect(this.ULS648LOG1.pins.B2_B, this.pins.B2_B);
		Connect(this.ULS648LOG1.pins.B3_B, this.pins.B3_B);
		Connect(this.ULS648LOG1.pins.B4_B, this.pins.B4_B);
		Connect(this.ULS648LOG1.pins.B5_B, this.pins.B5_B);
		Connect(this.ULS648LOG1.pins.B6_B, this.pins.B6_B);
		Connect(this.ULS648LOG1.pins.B7_B, this.pins.B7_B);
		Connect(this.ULS648LOG1.pins.B8_B, this.pins.B8_B);
		let QA1 = new Pin();
		Connect(this.ULS648LOG1.pins.QA1, QA1);
		let QA2 = new Pin();
		Connect(this.ULS648LOG1.pins.QA2, QA2);
		let QA3 = new Pin();
		Connect(this.ULS648LOG1.pins.QA3, QA3);
		let QA4 = new Pin();
		Connect(this.ULS648LOG1.pins.QA4, QA4);
		let QA5 = new Pin();
		Connect(this.ULS648LOG1.pins.QA5, QA5);
		let QA6 = new Pin();
		Connect(this.ULS648LOG1.pins.QA6, QA6);
		let QA7 = new Pin();
		Connect(this.ULS648LOG1.pins.QA7, QA7);
		let QA8 = new Pin();
		Connect(this.ULS648LOG1.pins.QA8, QA8);
		let QB1 = new Pin();
		Connect(this.ULS648LOG1.pins.QB1, QB1);
		let QB2 = new Pin();
		Connect(this.ULS648LOG1.pins.QB2, QB2);
		let QB3 = new Pin();
		Connect(this.ULS648LOG1.pins.QB3, QB3);
		let QB4 = new Pin();
		Connect(this.ULS648LOG1.pins.QB4, QB4);
		let QB5 = new Pin();
		Connect(this.ULS648LOG1.pins.QB5, QB5);
		let QB6 = new Pin();
		Connect(this.ULS648LOG1.pins.QB6, QB6);
		let QB7 = new Pin();
		Connect(this.ULS648LOG1.pins.QB7, QB7);
		let QB8 = new Pin();
		Connect(this.ULS648LOG1.pins.QB8, QB8);
		let CBA = new Pin();
		Connect(this.ULS648LOG1.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.ULS648LOG1.pins.SBA, SBA);
		let CAB = new Pin();
		Connect(this.ULS648LOG1.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.ULS648LOG1.pins.SAB, SAB);
		let A1 = new Pin();
		Connect(this.ULS648LOG1.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.ULS648LOG1.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.ULS648LOG1.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.ULS648LOG1.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.ULS648LOG1.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.ULS648LOG1.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.ULS648LOG1.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.ULS648LOG1.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.ULS648LOG1.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.ULS648LOG1.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.ULS648LOG1.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.ULS648LOG1.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.ULS648LOG1.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.ULS648LOG1.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.ULS648LOG1.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.ULS648LOG1.pins.B8, B8);
		let A1_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.A1_OUT, A1_OUT);
		let A2_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.A2_OUT, A2_OUT);
		let A3_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.A3_OUT, A3_OUT);
		let A4_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.A4_OUT, A4_OUT);
		let A5_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.A5_OUT, A5_OUT);
		let A6_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.A6_OUT, A6_OUT);
		let A7_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.A7_OUT, A7_OUT);
		let A8_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.A8_OUT, A8_OUT);
		let B1_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.B1_OUT, B1_OUT);
		let B2_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.B2_OUT, B2_OUT);
		let B3_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.B3_OUT, B3_OUT);
		let B4_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.B4_OUT, B4_OUT);
		let B5_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.B5_OUT, B5_OUT);
		let B6_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.B6_OUT, B6_OUT);
		let B7_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.B7_OUT, B7_OUT);
		let B8_OUT = new Pin();
		Connect(this.ULS648LOG1.pins.B8_OUT, B8_OUT);
		let ENA = new Pin();
		Connect(this.ULS648LOG1.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.ULS648LOG1.pins.ENB, ENB);
		this.UAREG = new dff(8);
		Connect(this.UAREG.pins.PRESET, _D_HI);
		Connect(this.UAREG.pins.CLEAR, _D_HI);
		Connect(this.UAREG.pins.CLOCK, CAB);
		Connect(this.UAREG.pins.D0, A1);
		Connect(this.UAREG.pins.D1, A2);
		Connect(this.UAREG.pins.D2, A3);
		Connect(this.UAREG.pins.D3, A4);
		Connect(this.UAREG.pins.D4, A5);
		Connect(this.UAREG.pins.D5, A6);
		Connect(this.UAREG.pins.D6, A7);
		Connect(this.UAREG.pins.D7, A8);
		Connect(this.UAREG.pins.Q0, QA1);
		Connect(this.UAREG.pins.Q1, QA2);
		Connect(this.UAREG.pins.Q2, QA3);
		Connect(this.UAREG.pins.Q3, QA4);
		Connect(this.UAREG.pins.Q4, QA5);
		Connect(this.UAREG.pins.Q5, QA6);
		Connect(this.UAREG.pins.Q6, QA7);
		Connect(this.UAREG.pins.Q7, QA8);
		this.UBREG = new dff(8);
		Connect(this.UBREG.pins.PRESET, _D_HI);
		Connect(this.UBREG.pins.CLEAR, _D_HI);
		Connect(this.UBREG.pins.CLOCK, CBA);
		Connect(this.UBREG.pins.D0, B1);
		Connect(this.UBREG.pins.D1, B2);
		Connect(this.UBREG.pins.D2, B3);
		Connect(this.UBREG.pins.D3, B4);
		Connect(this.UBREG.pins.D4, B5);
		Connect(this.UBREG.pins.D5, B6);
		Connect(this.UBREG.pins.D6, B7);
		Connect(this.UBREG.pins.D7, B8);
		Connect(this.UBREG.pins.Q0, QB1);
		Connect(this.UBREG.pins.Q1, QB2);
		Connect(this.UBREG.pins.Q2, QB3);
		Connect(this.UBREG.pins.Q3, QB4);
		Connect(this.UBREG.pins.Q4, QB5);
		Connect(this.UBREG.pins.Q5, QB6);
		Connect(this.UBREG.pins.Q6, QB7);
		Connect(this.UBREG.pins.Q7, QB8);
		Connect(A1_OUT, this.pins.A1_B);
		Connect(A2_OUT, this.pins.A2_B);
		Connect(A3_OUT, this.pins.A3_B);
		Connect(A4_OUT, this.pins.A4_B);
		Connect(A5_OUT, this.pins.A5_B);
		Connect(A6_OUT, this.pins.A6_B);
		Connect(A7_OUT, this.pins.A7_B);
		Connect(A8_OUT, this.pins.A8_B);
		Connect(B1_OUT, this.pins.B1_B);
		Connect(B2_OUT, this.pins.B2_B);
		Connect(B3_OUT, this.pins.B3_B);
		Connect(B4_OUT, this.pins.B4_B);
		Connect(B5_OUT, this.pins.B5_B);
		Connect(B6_OUT, this.pins.B6_B);
		Connect(B7_OUT, this.pins.B7_B);
		Connect(B8_OUT, this.pins.B8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS AND REGISTERS WITH INVERTED 3-STATE OUTPUTS
 */
class SN74LS651 extends Component {
	constructor() {
		super();
		this.pins = {
			GBABAR_I: new Pin(),
			GAB_I: new Pin(),
			CBA_I: new Pin(),
			SBA_I: new Pin(),
			CAB_I: new Pin(),
			SAB_I: new Pin(),
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
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CAB = new Pin();
		Connect(this.U1.pins.CLOCK, CAB);
		let A1_IO = new Pin();
		Connect(this.U1.pins.D0, A1_IO);
		let A2_IO = new Pin();
		Connect(this.U1.pins.D1, A2_IO);
		let A3_IO = new Pin();
		Connect(this.U1.pins.D2, A3_IO);
		let A4_IO = new Pin();
		Connect(this.U1.pins.D3, A4_IO);
		let A5_IO = new Pin();
		Connect(this.U1.pins.D4, A5_IO);
		let A6_IO = new Pin();
		Connect(this.U1.pins.D5, A6_IO);
		let A7_IO = new Pin();
		Connect(this.U1.pins.D6, A7_IO);
		let A8_IO = new Pin();
		Connect(this.U1.pins.D7, A8_IO);
		let QB1 = new Pin();
		Connect(this.U1.pins.Q0, QB1);
		let QB2 = new Pin();
		Connect(this.U1.pins.Q1, QB2);
		let QB3 = new Pin();
		Connect(this.U1.pins.Q2, QB3);
		let QB4 = new Pin();
		Connect(this.U1.pins.Q3, QB4);
		let QB5 = new Pin();
		Connect(this.U1.pins.Q4, QB5);
		let QB6 = new Pin();
		Connect(this.U1.pins.Q5, QB6);
		let QB7 = new Pin();
		Connect(this.U1.pins.Q6, QB7);
		let QB8 = new Pin();
		Connect(this.U1.pins.Q7, QB8);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		let CBA = new Pin();
		Connect(this.U2.pins.CLOCK, CBA);
		let B1_IO = new Pin();
		Connect(this.U2.pins.D0, B1_IO);
		let B2_IO = new Pin();
		Connect(this.U2.pins.D1, B2_IO);
		let B3_IO = new Pin();
		Connect(this.U2.pins.D2, B3_IO);
		let B4_IO = new Pin();
		Connect(this.U2.pins.D3, B4_IO);
		let B5_IO = new Pin();
		Connect(this.U2.pins.D4, B5_IO);
		let B6_IO = new Pin();
		Connect(this.U2.pins.D5, B6_IO);
		let B7_IO = new Pin();
		Connect(this.U2.pins.D6, B7_IO);
		let B8_IO = new Pin();
		Connect(this.U2.pins.D7, B8_IO);
		let QA1 = new Pin();
		Connect(this.U2.pins.Q0, QA1);
		let QA2 = new Pin();
		Connect(this.U2.pins.Q1, QA2);
		let QA3 = new Pin();
		Connect(this.U2.pins.Q2, QA3);
		let QA4 = new Pin();
		Connect(this.U2.pins.Q3, QA4);
		let QA5 = new Pin();
		Connect(this.U2.pins.Q4, QA5);
		let QA6 = new Pin();
		Connect(this.U2.pins.Q5, QA6);
		let QA7 = new Pin();
		Connect(this.U2.pins.Q6, QA7);
		let QA8 = new Pin();
		Connect(this.U2.pins.Q7, QA8);
		this.U3 = new buf3a(8);
		let A1_O = new Pin();
		Connect(this.U3.pins.D0, A1_O);
		let A2_O = new Pin();
		Connect(this.U3.pins.D1, A2_O);
		let A3_O = new Pin();
		Connect(this.U3.pins.D2, A3_O);
		let A4_O = new Pin();
		Connect(this.U3.pins.D3, A4_O);
		let A5_O = new Pin();
		Connect(this.U3.pins.D4, A5_O);
		let A6_O = new Pin();
		Connect(this.U3.pins.D5, A6_O);
		let A7_O = new Pin();
		Connect(this.U3.pins.D6, A7_O);
		let A8_O = new Pin();
		Connect(this.U3.pins.D7, A8_O);
		let IGBABAR = new Pin();
		Connect(this.U3.pins.EN, IGBABAR);
		Connect(this.U3.pins.Q0, A1_IO);
		Connect(this.U3.pins.Q1, A2_IO);
		Connect(this.U3.pins.Q2, A3_IO);
		Connect(this.U3.pins.Q3, A4_IO);
		Connect(this.U3.pins.Q4, A5_IO);
		Connect(this.U3.pins.Q5, A6_IO);
		Connect(this.U3.pins.Q6, A7_IO);
		Connect(this.U3.pins.Q7, A8_IO);
		this.U4 = new buf3a(8);
		let B1_O = new Pin();
		Connect(this.U4.pins.D0, B1_O);
		let B2_O = new Pin();
		Connect(this.U4.pins.D1, B2_O);
		let B3_O = new Pin();
		Connect(this.U4.pins.D2, B3_O);
		let B4_O = new Pin();
		Connect(this.U4.pins.D3, B4_O);
		let B5_O = new Pin();
		Connect(this.U4.pins.D4, B5_O);
		let B6_O = new Pin();
		Connect(this.U4.pins.D5, B6_O);
		let B7_O = new Pin();
		Connect(this.U4.pins.D6, B7_O);
		let B8_O = new Pin();
		Connect(this.U4.pins.D7, B8_O);
		let GAB = new Pin();
		Connect(this.U4.pins.EN, GAB);
		Connect(this.U4.pins.Q0, B1_IO);
		Connect(this.U4.pins.Q1, B2_IO);
		Connect(this.U4.pins.Q2, B3_IO);
		Connect(this.U4.pins.Q3, B4_IO);
		Connect(this.U4.pins.Q4, B5_IO);
		Connect(this.U4.pins.Q5, B6_IO);
		Connect(this.U4.pins.Q6, B7_IO);
		Connect(this.U4.pins.Q7, B8_IO);
		this.U5 = new buf3a(8);
		let A1 = new Pin();
		Connect(this.U5.pins.D0, A1);
		let A2 = new Pin();
		Connect(this.U5.pins.D1, A2);
		let A3 = new Pin();
		Connect(this.U5.pins.D2, A3);
		let A4 = new Pin();
		Connect(this.U5.pins.D3, A4);
		let A5 = new Pin();
		Connect(this.U5.pins.D4, A5);
		let A6 = new Pin();
		Connect(this.U5.pins.D5, A6);
		let A7 = new Pin();
		Connect(this.U5.pins.D6, A7);
		let A8 = new Pin();
		Connect(this.U5.pins.D7, A8);
		let GBABAR = new Pin();
		Connect(this.U5.pins.EN, GBABAR);
		Connect(this.U5.pins.Q0, A1_IO);
		Connect(this.U5.pins.Q1, A2_IO);
		Connect(this.U5.pins.Q2, A3_IO);
		Connect(this.U5.pins.Q3, A4_IO);
		Connect(this.U5.pins.Q4, A5_IO);
		Connect(this.U5.pins.Q5, A6_IO);
		Connect(this.U5.pins.Q6, A7_IO);
		Connect(this.U5.pins.Q7, A8_IO);
		this.U6 = new buf3a(8);
		let B1 = new Pin();
		Connect(this.U6.pins.D0, B1);
		let B2 = new Pin();
		Connect(this.U6.pins.D1, B2);
		let B3 = new Pin();
		Connect(this.U6.pins.D2, B3);
		let B4 = new Pin();
		Connect(this.U6.pins.D3, B4);
		let B5 = new Pin();
		Connect(this.U6.pins.D4, B5);
		let B6 = new Pin();
		Connect(this.U6.pins.D5, B6);
		let B7 = new Pin();
		Connect(this.U6.pins.D6, B7);
		let B8 = new Pin();
		Connect(this.U6.pins.D7, B8);
		let IGAB = new Pin();
		Connect(this.U6.pins.EN, IGAB);
		Connect(this.U6.pins.Q0, B1_IO);
		Connect(this.U6.pins.Q1, B2_IO);
		Connect(this.U6.pins.Q2, B3_IO);
		Connect(this.U6.pins.Q3, B4_IO);
		Connect(this.U6.pins.Q4, B5_IO);
		Connect(this.U6.pins.Q5, B6_IO);
		Connect(this.U6.pins.Q6, B7_IO);
		Connect(this.U6.pins.Q7, B8_IO);
		this.ULS651LOG = new logicexp(['GBABAR_I','GAB_I','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1','QA2','QA3','QA4','QA5','QA6','QA7','QA8','QB1','QB2','QB3','QB4','QB5','QB6','QB7','QB8'], ['GBABAR','GAB','CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_O','A2_O','A3_O','A4_O','A5_O','A6_O','A7_O','A8_O','B1_O','B2_O','B3_O','B4_O','B5_O','B6_O','B7_O','B8_O','IGAB','IGBABAR'], []).Logic('   GBABAR =  GBABAR_I ;   GAB =  GAB_I ;   CBA =  CBA_I ;   SBA =  SBA_I ;   CAB =  CAB_I ;   SAB =  SAB_I ;   A1 =  A1_B ;   A2 =  A2_B ;   A3 =  A3_B ;   A4 =  A4_B ;   A5 =  A5_B ;   A6 =  A6_B ;   A7 =  A7_B ;   A8 =  A8_B ;   B1 =  B1_B ;   B2 =  B2_B ;   B3 =  B3_B ;   B4 =  B4_B ;   B5 =  B5_B ;   B6 =  B6_B ;   B7 =  B7_B ;   B8 =  B8_B ;let    ISAB =  !SAB ;   ISAB =  !SAB ;let    ISBA =  !SBA ;   ISBA =  !SBA ;   IGAB =  !GAB ;   IGBABAR =  !GBABAR ;   A1_O =  !((SBA & QA1) | (ISBA & B1)) ;   A2_O =  !((SBA & QA2) | (ISBA & B2)) ;   A3_O =  !((SBA & QA3) | (ISBA & B3)) ;   A4_O =  !((SBA & QA4) | (ISBA & B4)) ;   A5_O =  !((SBA & QA5) | (ISBA & B5)) ;   A6_O =  !((SBA & QA6) | (ISBA & B6)) ;   A7_O =  !((SBA & QA7) | (ISBA & B7)) ;   A8_O =  !((SBA & QA8) | (ISBA & B8)) ;   B1_O =  !((SAB & QB1) | (ISAB & A1)) ;   B2_O =  !((SAB & QB2) | (ISAB & A2)) ;   B3_O =  !((SAB & QB3) | (ISAB & A3)) ;   B4_O =  !((SAB & QB4) | (ISAB & A4)) ;   B5_O =  !((SAB & QB5) | (ISAB & A5)) ;   B6_O =  !((SAB & QB6) | (ISAB & A6)) ;   B7_O =  !((SAB & QB7) | (ISAB & A7)) ;   B8_O =  !((SAB & QB8) | (ISAB & A8)) ;');
		Connect(this.ULS651LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.ULS651LOG.pins.GAB_I, this.pins.GAB_I);
		Connect(this.ULS651LOG.pins.CBA_I, this.pins.CBA_I);
		Connect(this.ULS651LOG.pins.SBA_I, this.pins.SBA_I);
		Connect(this.ULS651LOG.pins.CAB_I, this.pins.CAB_I);
		Connect(this.ULS651LOG.pins.SAB_I, this.pins.SAB_I);
		Connect(this.ULS651LOG.pins.A1_B, this.pins.A1_B);
		Connect(this.ULS651LOG.pins.A2_B, this.pins.A2_B);
		Connect(this.ULS651LOG.pins.A3_B, this.pins.A3_B);
		Connect(this.ULS651LOG.pins.A4_B, this.pins.A4_B);
		Connect(this.ULS651LOG.pins.A5_B, this.pins.A5_B);
		Connect(this.ULS651LOG.pins.A6_B, this.pins.A6_B);
		Connect(this.ULS651LOG.pins.A7_B, this.pins.A7_B);
		Connect(this.ULS651LOG.pins.A8_B, this.pins.A8_B);
		Connect(this.ULS651LOG.pins.B1_B, this.pins.B1_B);
		Connect(this.ULS651LOG.pins.B2_B, this.pins.B2_B);
		Connect(this.ULS651LOG.pins.B3_B, this.pins.B3_B);
		Connect(this.ULS651LOG.pins.B4_B, this.pins.B4_B);
		Connect(this.ULS651LOG.pins.B5_B, this.pins.B5_B);
		Connect(this.ULS651LOG.pins.B6_B, this.pins.B6_B);
		Connect(this.ULS651LOG.pins.B7_B, this.pins.B7_B);
		Connect(this.ULS651LOG.pins.B8_B, this.pins.B8_B);
		Connect(this.ULS651LOG.pins.QA1, QA1);
		Connect(this.ULS651LOG.pins.QA2, QA2);
		Connect(this.ULS651LOG.pins.QA3, QA3);
		Connect(this.ULS651LOG.pins.QA4, QA4);
		Connect(this.ULS651LOG.pins.QA5, QA5);
		Connect(this.ULS651LOG.pins.QA6, QA6);
		Connect(this.ULS651LOG.pins.QA7, QA7);
		Connect(this.ULS651LOG.pins.QA8, QA8);
		Connect(this.ULS651LOG.pins.QB1, QB1);
		Connect(this.ULS651LOG.pins.QB2, QB2);
		Connect(this.ULS651LOG.pins.QB3, QB3);
		Connect(this.ULS651LOG.pins.QB4, QB4);
		Connect(this.ULS651LOG.pins.QB5, QB5);
		Connect(this.ULS651LOG.pins.QB6, QB6);
		Connect(this.ULS651LOG.pins.QB7, QB7);
		Connect(this.ULS651LOG.pins.QB8, QB8);
		Connect(this.ULS651LOG.pins.GBABAR, GBABAR);
		Connect(this.ULS651LOG.pins.GAB, GAB);
		Connect(this.ULS651LOG.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.ULS651LOG.pins.SBA, SBA);
		Connect(this.ULS651LOG.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.ULS651LOG.pins.SAB, SAB);
		Connect(this.ULS651LOG.pins.A1, A1);
		Connect(this.ULS651LOG.pins.A2, A2);
		Connect(this.ULS651LOG.pins.A3, A3);
		Connect(this.ULS651LOG.pins.A4, A4);
		Connect(this.ULS651LOG.pins.A5, A5);
		Connect(this.ULS651LOG.pins.A6, A6);
		Connect(this.ULS651LOG.pins.A7, A7);
		Connect(this.ULS651LOG.pins.A8, A8);
		Connect(this.ULS651LOG.pins.B1, B1);
		Connect(this.ULS651LOG.pins.B2, B2);
		Connect(this.ULS651LOG.pins.B3, B3);
		Connect(this.ULS651LOG.pins.B4, B4);
		Connect(this.ULS651LOG.pins.B5, B5);
		Connect(this.ULS651LOG.pins.B6, B6);
		Connect(this.ULS651LOG.pins.B7, B7);
		Connect(this.ULS651LOG.pins.B8, B8);
		Connect(this.ULS651LOG.pins.A1_O, A1_O);
		Connect(this.ULS651LOG.pins.A2_O, A2_O);
		Connect(this.ULS651LOG.pins.A3_O, A3_O);
		Connect(this.ULS651LOG.pins.A4_O, A4_O);
		Connect(this.ULS651LOG.pins.A5_O, A5_O);
		Connect(this.ULS651LOG.pins.A6_O, A6_O);
		Connect(this.ULS651LOG.pins.A7_O, A7_O);
		Connect(this.ULS651LOG.pins.A8_O, A8_O);
		Connect(this.ULS651LOG.pins.B1_O, B1_O);
		Connect(this.ULS651LOG.pins.B2_O, B2_O);
		Connect(this.ULS651LOG.pins.B3_O, B3_O);
		Connect(this.ULS651LOG.pins.B4_O, B4_O);
		Connect(this.ULS651LOG.pins.B5_O, B5_O);
		Connect(this.ULS651LOG.pins.B6_O, B6_O);
		Connect(this.ULS651LOG.pins.B7_O, B7_O);
		Connect(this.ULS651LOG.pins.B8_O, B8_O);
		Connect(this.ULS651LOG.pins.IGAB, IGAB);
		Connect(this.ULS651LOG.pins.IGBABAR, IGBABAR);
		Connect(A1_IO, this.pins.A1_B);
		Connect(A2_IO, this.pins.A2_B);
		Connect(A3_IO, this.pins.A3_B);
		Connect(A4_IO, this.pins.A4_B);
		Connect(A5_IO, this.pins.A5_B);
		Connect(A6_IO, this.pins.A6_B);
		Connect(A7_IO, this.pins.A7_B);
		Connect(A8_IO, this.pins.A8_B);
		Connect(B1_IO, this.pins.B1_B);
		Connect(B2_IO, this.pins.B2_B);
		Connect(B3_IO, this.pins.B3_B);
		Connect(B4_IO, this.pins.B4_B);
		Connect(B5_IO, this.pins.B5_B);
		Connect(B6_IO, this.pins.B6_B);
		Connect(B7_IO, this.pins.B7_B);
		Connect(B8_IO, this.pins.B8_B);
	}
}
/**
 * BUS TRANSCEIVERS AND REGISTERS OCTAL WITH 3-STATE OUTPUTS
 */
class SN74LS652 extends Component {
	constructor() {
		super();
		this.pins = {
			GBABAR_I: new Pin(),
			GAB_I: new Pin(),
			CBA_I: new Pin(),
			SBA_I: new Pin(),
			CAB_I: new Pin(),
			SAB_I: new Pin(),
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
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CAB = new Pin();
		Connect(this.U1.pins.CLOCK, CAB);
		let A1_IO = new Pin();
		Connect(this.U1.pins.D0, A1_IO);
		let A2_IO = new Pin();
		Connect(this.U1.pins.D1, A2_IO);
		let A3_IO = new Pin();
		Connect(this.U1.pins.D2, A3_IO);
		let A4_IO = new Pin();
		Connect(this.U1.pins.D3, A4_IO);
		let A5_IO = new Pin();
		Connect(this.U1.pins.D4, A5_IO);
		let A6_IO = new Pin();
		Connect(this.U1.pins.D5, A6_IO);
		let A7_IO = new Pin();
		Connect(this.U1.pins.D6, A7_IO);
		let A8_IO = new Pin();
		Connect(this.U1.pins.D7, A8_IO);
		let _D_NC = new Pin();
		Connect(this.U1.pins.Q0, _D_NC);
		Connect(this.U1.pins.Q1, _D_NC);
		Connect(this.U1.pins.Q2, _D_NC);
		Connect(this.U1.pins.Q3, _D_NC);
		Connect(this.U1.pins.Q4, _D_NC);
		Connect(this.U1.pins.Q5, _D_NC);
		Connect(this.U1.pins.Q6, _D_NC);
		Connect(this.U1.pins.Q7, _D_NC);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		let CBA = new Pin();
		Connect(this.U2.pins.CLOCK, CBA);
		let B1_IO = new Pin();
		Connect(this.U2.pins.D0, B1_IO);
		let B2_IO = new Pin();
		Connect(this.U2.pins.D1, B2_IO);
		let B3_IO = new Pin();
		Connect(this.U2.pins.D2, B3_IO);
		let B4_IO = new Pin();
		Connect(this.U2.pins.D3, B4_IO);
		let B5_IO = new Pin();
		Connect(this.U2.pins.D4, B5_IO);
		let B6_IO = new Pin();
		Connect(this.U2.pins.D5, B6_IO);
		let B7_IO = new Pin();
		Connect(this.U2.pins.D6, B7_IO);
		let B8_IO = new Pin();
		Connect(this.U2.pins.D7, B8_IO);
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		Connect(this.U2.pins.Q4, _D_NC);
		Connect(this.U2.pins.Q5, _D_NC);
		Connect(this.U2.pins.Q6, _D_NC);
		Connect(this.U2.pins.Q7, _D_NC);
		this.U3 = new buf3a(8);
		let A1_O = new Pin();
		Connect(this.U3.pins.D0, A1_O);
		let A2_O = new Pin();
		Connect(this.U3.pins.D1, A2_O);
		let A3_O = new Pin();
		Connect(this.U3.pins.D2, A3_O);
		let A4_O = new Pin();
		Connect(this.U3.pins.D3, A4_O);
		let A5_O = new Pin();
		Connect(this.U3.pins.D4, A5_O);
		let A6_O = new Pin();
		Connect(this.U3.pins.D5, A6_O);
		let A7_O = new Pin();
		Connect(this.U3.pins.D6, A7_O);
		let A8_O = new Pin();
		Connect(this.U3.pins.D7, A8_O);
		let IGBABAR = new Pin();
		Connect(this.U3.pins.EN, IGBABAR);
		Connect(this.U3.pins.Q0, A1_IO);
		Connect(this.U3.pins.Q1, A2_IO);
		Connect(this.U3.pins.Q2, A3_IO);
		Connect(this.U3.pins.Q3, A4_IO);
		Connect(this.U3.pins.Q4, A5_IO);
		Connect(this.U3.pins.Q5, A6_IO);
		Connect(this.U3.pins.Q6, A7_IO);
		Connect(this.U3.pins.Q7, A8_IO);
		this.U4 = new buf3a(8);
		let B1_O = new Pin();
		Connect(this.U4.pins.D0, B1_O);
		let B2_O = new Pin();
		Connect(this.U4.pins.D1, B2_O);
		let B3_O = new Pin();
		Connect(this.U4.pins.D2, B3_O);
		let B4_O = new Pin();
		Connect(this.U4.pins.D3, B4_O);
		let B5_O = new Pin();
		Connect(this.U4.pins.D4, B5_O);
		let B6_O = new Pin();
		Connect(this.U4.pins.D5, B6_O);
		let B7_O = new Pin();
		Connect(this.U4.pins.D6, B7_O);
		let B8_O = new Pin();
		Connect(this.U4.pins.D7, B8_O);
		let GAB = new Pin();
		Connect(this.U4.pins.EN, GAB);
		Connect(this.U4.pins.Q0, B1_IO);
		Connect(this.U4.pins.Q1, B2_IO);
		Connect(this.U4.pins.Q2, B3_IO);
		Connect(this.U4.pins.Q3, B4_IO);
		Connect(this.U4.pins.Q4, B5_IO);
		Connect(this.U4.pins.Q5, B6_IO);
		Connect(this.U4.pins.Q6, B7_IO);
		Connect(this.U4.pins.Q7, B8_IO);
		this.U5 = new buf3a(8);
		let A1 = new Pin();
		Connect(this.U5.pins.D0, A1);
		let A2 = new Pin();
		Connect(this.U5.pins.D1, A2);
		let A3 = new Pin();
		Connect(this.U5.pins.D2, A3);
		let A4 = new Pin();
		Connect(this.U5.pins.D3, A4);
		let A5 = new Pin();
		Connect(this.U5.pins.D4, A5);
		let A6 = new Pin();
		Connect(this.U5.pins.D5, A6);
		let A7 = new Pin();
		Connect(this.U5.pins.D6, A7);
		let A8 = new Pin();
		Connect(this.U5.pins.D7, A8);
		let GBABAR = new Pin();
		Connect(this.U5.pins.EN, GBABAR);
		Connect(this.U5.pins.Q0, A1_IO);
		Connect(this.U5.pins.Q1, A2_IO);
		Connect(this.U5.pins.Q2, A3_IO);
		Connect(this.U5.pins.Q3, A4_IO);
		Connect(this.U5.pins.Q4, A5_IO);
		Connect(this.U5.pins.Q5, A6_IO);
		Connect(this.U5.pins.Q6, A7_IO);
		Connect(this.U5.pins.Q7, A8_IO);
		this.U6 = new buf3a(8);
		let B1 = new Pin();
		Connect(this.U6.pins.D0, B1);
		let B2 = new Pin();
		Connect(this.U6.pins.D1, B2);
		let B3 = new Pin();
		Connect(this.U6.pins.D2, B3);
		let B4 = new Pin();
		Connect(this.U6.pins.D3, B4);
		let B5 = new Pin();
		Connect(this.U6.pins.D4, B5);
		let B6 = new Pin();
		Connect(this.U6.pins.D5, B6);
		let B7 = new Pin();
		Connect(this.U6.pins.D6, B7);
		let B8 = new Pin();
		Connect(this.U6.pins.D7, B8);
		let IGAB = new Pin();
		Connect(this.U6.pins.EN, IGAB);
		Connect(this.U6.pins.Q0, B1_IO);
		Connect(this.U6.pins.Q1, B2_IO);
		Connect(this.U6.pins.Q2, B3_IO);
		Connect(this.U6.pins.Q3, B4_IO);
		Connect(this.U6.pins.Q4, B5_IO);
		Connect(this.U6.pins.Q5, B6_IO);
		Connect(this.U6.pins.Q6, B7_IO);
		Connect(this.U6.pins.Q7, B8_IO);
		this.ULS652LOG = new logicexp(['GBABAR_I','GAB_I','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1BAR','QA2BAR','QA3BAR','QA4BAR','QA5BAR','QA6BAR','QA7BAR','QA8BAR','QB1BAR','QB2BAR','QB3BAR','QB4BAR','QB5BAR','QB6BAR','QB7BAR','QB8BAR'], ['GBABAR','GAB','CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_O','A2_O','A3_O','A4_O','A5_O','A6_O','A7_O','A8_O','B1_O','B2_O','B3_O','B4_O','B5_O','B6_O','B7_O','B8_O','IGAB','IGBABAR'], []).Logic('   GBABAR =  GBABAR_I ;   GAB =  GAB_I ;   CBA =  CBA_I ;   SBA =  SBA_I ;   CAB =  CAB_I ;   SAB =  SAB_I ;   A1 =  A1_B ;   A2 =  A2_B ;   A3 =  A3_B ;   A4 =  A4_B ;   A5 =  A5_B ;   A6 =  A6_B ;   A7 =  A7_B ;   A8 =  A8_B ;   B1 =  B1_B ;   B2 =  B2_B ;   B3 =  B3_B ;   B4 =  B4_B ;   B5 =  B5_B ;   B6 =  B6_B ;   B7 =  B7_B ;   B8 =  B8_B ;let    ISAB =  !SAB ;   ISAB =  !SAB ;let    ISBA =  !SBA ;   ISBA =  !SBA ;   IGAB =  !GAB ;   IGBABAR =  !GBABAR ;   A1_O =  !((SBA & QA1BAR) | (ISBA & !B1)) ;   A2_O =  !((SBA & QA2BAR) | (ISBA & !B2)) ;   A3_O =  !((SBA & QA3BAR) | (ISBA & !B3)) ;   A4_O =  !((SBA & QA4BAR) | (ISBA & !B4)) ;   A5_O =  !((SBA & QA5BAR) | (ISBA & !B5)) ;   A6_O =  !((SBA & QA6BAR) | (ISBA & !B6)) ;   A7_O =  !((SBA & QA7BAR) | (ISBA & !B7)) ;   A8_O =  !((SBA & QA8BAR) | (ISBA & !B8)) ;   B1_O =  !((SAB & QB1BAR) | (ISAB & !A1)) ;   B2_O =  !((SAB & QB2BAR) | (ISAB & !A2)) ;   B3_O =  !((SAB & QB3BAR) | (ISAB & !A3)) ;   B4_O =  !((SAB & QB4BAR) | (ISAB & !A4)) ;   B5_O =  !((SAB & QB5BAR) | (ISAB & !A5)) ;   B6_O =  !((SAB & QB6BAR) | (ISAB & !A6)) ;   B7_O =  !((SAB & QB7BAR) | (ISAB & !A7)) ;   B8_O =  !((SAB & QB8BAR) | (ISAB & !A8)) ;');
		Connect(this.ULS652LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.ULS652LOG.pins.GAB_I, this.pins.GAB_I);
		Connect(this.ULS652LOG.pins.CBA_I, this.pins.CBA_I);
		Connect(this.ULS652LOG.pins.SBA_I, this.pins.SBA_I);
		Connect(this.ULS652LOG.pins.CAB_I, this.pins.CAB_I);
		Connect(this.ULS652LOG.pins.SAB_I, this.pins.SAB_I);
		Connect(this.ULS652LOG.pins.A1_B, this.pins.A1_B);
		Connect(this.ULS652LOG.pins.A2_B, this.pins.A2_B);
		Connect(this.ULS652LOG.pins.A3_B, this.pins.A3_B);
		Connect(this.ULS652LOG.pins.A4_B, this.pins.A4_B);
		Connect(this.ULS652LOG.pins.A5_B, this.pins.A5_B);
		Connect(this.ULS652LOG.pins.A6_B, this.pins.A6_B);
		Connect(this.ULS652LOG.pins.A7_B, this.pins.A7_B);
		Connect(this.ULS652LOG.pins.A8_B, this.pins.A8_B);
		Connect(this.ULS652LOG.pins.B1_B, this.pins.B1_B);
		Connect(this.ULS652LOG.pins.B2_B, this.pins.B2_B);
		Connect(this.ULS652LOG.pins.B3_B, this.pins.B3_B);
		Connect(this.ULS652LOG.pins.B4_B, this.pins.B4_B);
		Connect(this.ULS652LOG.pins.B5_B, this.pins.B5_B);
		Connect(this.ULS652LOG.pins.B6_B, this.pins.B6_B);
		Connect(this.ULS652LOG.pins.B7_B, this.pins.B7_B);
		Connect(this.ULS652LOG.pins.B8_B, this.pins.B8_B);
		let QA1BAR = new Pin();
		Connect(this.ULS652LOG.pins.QA1BAR, QA1BAR);
		let QA2BAR = new Pin();
		Connect(this.ULS652LOG.pins.QA2BAR, QA2BAR);
		let QA3BAR = new Pin();
		Connect(this.ULS652LOG.pins.QA3BAR, QA3BAR);
		let QA4BAR = new Pin();
		Connect(this.ULS652LOG.pins.QA4BAR, QA4BAR);
		let QA5BAR = new Pin();
		Connect(this.ULS652LOG.pins.QA5BAR, QA5BAR);
		let QA6BAR = new Pin();
		Connect(this.ULS652LOG.pins.QA6BAR, QA6BAR);
		let QA7BAR = new Pin();
		Connect(this.ULS652LOG.pins.QA7BAR, QA7BAR);
		let QA8BAR = new Pin();
		Connect(this.ULS652LOG.pins.QA8BAR, QA8BAR);
		let QB1BAR = new Pin();
		Connect(this.ULS652LOG.pins.QB1BAR, QB1BAR);
		let QB2BAR = new Pin();
		Connect(this.ULS652LOG.pins.QB2BAR, QB2BAR);
		let QB3BAR = new Pin();
		Connect(this.ULS652LOG.pins.QB3BAR, QB3BAR);
		let QB4BAR = new Pin();
		Connect(this.ULS652LOG.pins.QB4BAR, QB4BAR);
		let QB5BAR = new Pin();
		Connect(this.ULS652LOG.pins.QB5BAR, QB5BAR);
		let QB6BAR = new Pin();
		Connect(this.ULS652LOG.pins.QB6BAR, QB6BAR);
		let QB7BAR = new Pin();
		Connect(this.ULS652LOG.pins.QB7BAR, QB7BAR);
		let QB8BAR = new Pin();
		Connect(this.ULS652LOG.pins.QB8BAR, QB8BAR);
		Connect(this.ULS652LOG.pins.GBABAR, GBABAR);
		Connect(this.ULS652LOG.pins.GAB, GAB);
		Connect(this.ULS652LOG.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.ULS652LOG.pins.SBA, SBA);
		Connect(this.ULS652LOG.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.ULS652LOG.pins.SAB, SAB);
		Connect(this.ULS652LOG.pins.A1, A1);
		Connect(this.ULS652LOG.pins.A2, A2);
		Connect(this.ULS652LOG.pins.A3, A3);
		Connect(this.ULS652LOG.pins.A4, A4);
		Connect(this.ULS652LOG.pins.A5, A5);
		Connect(this.ULS652LOG.pins.A6, A6);
		Connect(this.ULS652LOG.pins.A7, A7);
		Connect(this.ULS652LOG.pins.A8, A8);
		Connect(this.ULS652LOG.pins.B1, B1);
		Connect(this.ULS652LOG.pins.B2, B2);
		Connect(this.ULS652LOG.pins.B3, B3);
		Connect(this.ULS652LOG.pins.B4, B4);
		Connect(this.ULS652LOG.pins.B5, B5);
		Connect(this.ULS652LOG.pins.B6, B6);
		Connect(this.ULS652LOG.pins.B7, B7);
		Connect(this.ULS652LOG.pins.B8, B8);
		Connect(this.ULS652LOG.pins.A1_O, A1_O);
		Connect(this.ULS652LOG.pins.A2_O, A2_O);
		Connect(this.ULS652LOG.pins.A3_O, A3_O);
		Connect(this.ULS652LOG.pins.A4_O, A4_O);
		Connect(this.ULS652LOG.pins.A5_O, A5_O);
		Connect(this.ULS652LOG.pins.A6_O, A6_O);
		Connect(this.ULS652LOG.pins.A7_O, A7_O);
		Connect(this.ULS652LOG.pins.A8_O, A8_O);
		Connect(this.ULS652LOG.pins.B1_O, B1_O);
		Connect(this.ULS652LOG.pins.B2_O, B2_O);
		Connect(this.ULS652LOG.pins.B3_O, B3_O);
		Connect(this.ULS652LOG.pins.B4_O, B4_O);
		Connect(this.ULS652LOG.pins.B5_O, B5_O);
		Connect(this.ULS652LOG.pins.B6_O, B6_O);
		Connect(this.ULS652LOG.pins.B7_O, B7_O);
		Connect(this.ULS652LOG.pins.B8_O, B8_O);
		Connect(this.ULS652LOG.pins.IGAB, IGAB);
		Connect(this.ULS652LOG.pins.IGBABAR, IGBABAR);
		Connect(A1_IO, this.pins.A1_B);
		Connect(A2_IO, this.pins.A2_B);
		Connect(A3_IO, this.pins.A3_B);
		Connect(A4_IO, this.pins.A4_B);
		Connect(A5_IO, this.pins.A5_B);
		Connect(A6_IO, this.pins.A6_B);
		Connect(A7_IO, this.pins.A7_B);
		Connect(A8_IO, this.pins.A8_B);
		Connect(B1_IO, this.pins.B1_B);
		Connect(B2_IO, this.pins.B2_B);
		Connect(B3_IO, this.pins.B3_B);
		Connect(B4_IO, this.pins.B4_B);
		Connect(B5_IO, this.pins.B5_B);
		Connect(B6_IO, this.pins.B6_B);
		Connect(B7_IO, this.pins.B7_B);
		Connect(B8_IO, this.pins.B8_B);
	}
}
/**
 * BUS TRANSCEIVERS AND REGISTERS OCTAL WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS653 extends Component {
	constructor() {
		super();
		this.pins = {
			GBABAR_I: new Pin(),
			GAB_I: new Pin(),
			CBA_I: new Pin(),
			SBA_I: new Pin(),
			CAB_I: new Pin(),
			SAB_I: new Pin(),
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
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CAB = new Pin();
		Connect(this.U1.pins.CLOCK, CAB);
		let A1_IO = new Pin();
		Connect(this.U1.pins.D0, A1_IO);
		let A2_IO = new Pin();
		Connect(this.U1.pins.D1, A2_IO);
		let A3_IO = new Pin();
		Connect(this.U1.pins.D2, A3_IO);
		let A4_IO = new Pin();
		Connect(this.U1.pins.D3, A4_IO);
		let A5_IO = new Pin();
		Connect(this.U1.pins.D4, A5_IO);
		let A6_IO = new Pin();
		Connect(this.U1.pins.D5, A6_IO);
		let A7_IO = new Pin();
		Connect(this.U1.pins.D6, A7_IO);
		let A8_IO = new Pin();
		Connect(this.U1.pins.D7, A8_IO);
		let QB1 = new Pin();
		Connect(this.U1.pins.Q0, QB1);
		let QB2 = new Pin();
		Connect(this.U1.pins.Q1, QB2);
		let QB3 = new Pin();
		Connect(this.U1.pins.Q2, QB3);
		let QB4 = new Pin();
		Connect(this.U1.pins.Q3, QB4);
		let QB5 = new Pin();
		Connect(this.U1.pins.Q4, QB5);
		let QB6 = new Pin();
		Connect(this.U1.pins.Q5, QB6);
		let QB7 = new Pin();
		Connect(this.U1.pins.Q6, QB7);
		let QB8 = new Pin();
		Connect(this.U1.pins.Q7, QB8);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		let CBA = new Pin();
		Connect(this.U2.pins.CLOCK, CBA);
		let B1_IO = new Pin();
		Connect(this.U2.pins.D0, B1_IO);
		let B2_IO = new Pin();
		Connect(this.U2.pins.D1, B2_IO);
		let B3_IO = new Pin();
		Connect(this.U2.pins.D2, B3_IO);
		let B4_IO = new Pin();
		Connect(this.U2.pins.D3, B4_IO);
		let B5_IO = new Pin();
		Connect(this.U2.pins.D4, B5_IO);
		let B6_IO = new Pin();
		Connect(this.U2.pins.D5, B6_IO);
		let B7_IO = new Pin();
		Connect(this.U2.pins.D6, B7_IO);
		let B8_IO = new Pin();
		Connect(this.U2.pins.D7, B8_IO);
		let QA1 = new Pin();
		Connect(this.U2.pins.Q0, QA1);
		let QA2 = new Pin();
		Connect(this.U2.pins.Q1, QA2);
		let QA3 = new Pin();
		Connect(this.U2.pins.Q2, QA3);
		let QA4 = new Pin();
		Connect(this.U2.pins.Q3, QA4);
		let QA5 = new Pin();
		Connect(this.U2.pins.Q4, QA5);
		let QA6 = new Pin();
		Connect(this.U2.pins.Q5, QA6);
		let QA7 = new Pin();
		Connect(this.U2.pins.Q6, QA7);
		let QA8 = new Pin();
		Connect(this.U2.pins.Q7, QA8);
		this.U3 = new buf3a(8);
		let A1 = new Pin();
		Connect(this.U3.pins.D0, A1);
		let A2 = new Pin();
		Connect(this.U3.pins.D1, A2);
		let A3 = new Pin();
		Connect(this.U3.pins.D2, A3);
		let A4 = new Pin();
		Connect(this.U3.pins.D3, A4);
		let A5 = new Pin();
		Connect(this.U3.pins.D4, A5);
		let A6 = new Pin();
		Connect(this.U3.pins.D5, A6);
		let A7 = new Pin();
		Connect(this.U3.pins.D6, A7);
		let A8 = new Pin();
		Connect(this.U3.pins.D7, A8);
		let GBABAR = new Pin();
		Connect(this.U3.pins.EN, GBABAR);
		Connect(this.U3.pins.Q0, A1_IO);
		Connect(this.U3.pins.Q1, A2_IO);
		Connect(this.U3.pins.Q2, A3_IO);
		Connect(this.U3.pins.Q3, A4_IO);
		Connect(this.U3.pins.Q4, A5_IO);
		Connect(this.U3.pins.Q5, A6_IO);
		Connect(this.U3.pins.Q6, A7_IO);
		Connect(this.U3.pins.Q7, A8_IO);
		this.U4 = new buf3a(8);
		let A1_O = new Pin();
		Connect(this.U4.pins.D0, A1_O);
		let A2_O = new Pin();
		Connect(this.U4.pins.D1, A2_O);
		let A3_O = new Pin();
		Connect(this.U4.pins.D2, A3_O);
		let A4_O = new Pin();
		Connect(this.U4.pins.D3, A4_O);
		let A5_O = new Pin();
		Connect(this.U4.pins.D4, A5_O);
		let A6_O = new Pin();
		Connect(this.U4.pins.D5, A6_O);
		let A7_O = new Pin();
		Connect(this.U4.pins.D6, A7_O);
		let A8_O = new Pin();
		Connect(this.U4.pins.D7, A8_O);
		let IGBABAR = new Pin();
		Connect(this.U4.pins.EN, IGBABAR);
		Connect(this.U4.pins.Q0, A1_IO);
		Connect(this.U4.pins.Q1, A2_IO);
		Connect(this.U4.pins.Q2, A3_IO);
		Connect(this.U4.pins.Q3, A4_IO);
		Connect(this.U4.pins.Q4, A5_IO);
		Connect(this.U4.pins.Q5, A6_IO);
		Connect(this.U4.pins.Q6, A7_IO);
		Connect(this.U4.pins.Q7, A8_IO);
		this.U5 = new buf3a(8);
		let B1_O = new Pin();
		Connect(this.U5.pins.D0, B1_O);
		let B2_O = new Pin();
		Connect(this.U5.pins.D1, B2_O);
		let B3_O = new Pin();
		Connect(this.U5.pins.D2, B3_O);
		let B4_O = new Pin();
		Connect(this.U5.pins.D3, B4_O);
		let B5_O = new Pin();
		Connect(this.U5.pins.D4, B5_O);
		let B6_O = new Pin();
		Connect(this.U5.pins.D5, B6_O);
		let B7_O = new Pin();
		Connect(this.U5.pins.D6, B7_O);
		let B8_O = new Pin();
		Connect(this.U5.pins.D7, B8_O);
		let GAB = new Pin();
		Connect(this.U5.pins.EN, GAB);
		Connect(this.U5.pins.Q0, B1_IO);
		Connect(this.U5.pins.Q1, B2_IO);
		Connect(this.U5.pins.Q2, B3_IO);
		Connect(this.U5.pins.Q3, B4_IO);
		Connect(this.U5.pins.Q4, B5_IO);
		Connect(this.U5.pins.Q5, B6_IO);
		Connect(this.U5.pins.Q6, B7_IO);
		Connect(this.U5.pins.Q7, B8_IO);
		this.U6 = new buf3a(8);
		let B1 = new Pin();
		Connect(this.U6.pins.D0, B1);
		let B2 = new Pin();
		Connect(this.U6.pins.D1, B2);
		let B3 = new Pin();
		Connect(this.U6.pins.D2, B3);
		let B4 = new Pin();
		Connect(this.U6.pins.D3, B4);
		let B5 = new Pin();
		Connect(this.U6.pins.D4, B5);
		let B6 = new Pin();
		Connect(this.U6.pins.D5, B6);
		let B7 = new Pin();
		Connect(this.U6.pins.D6, B7);
		let B8 = new Pin();
		Connect(this.U6.pins.D7, B8);
		let IGAB = new Pin();
		Connect(this.U6.pins.EN, IGAB);
		Connect(this.U6.pins.Q0, B1_IO);
		Connect(this.U6.pins.Q1, B2_IO);
		Connect(this.U6.pins.Q2, B3_IO);
		Connect(this.U6.pins.Q3, B4_IO);
		Connect(this.U6.pins.Q4, B5_IO);
		Connect(this.U6.pins.Q5, B6_IO);
		Connect(this.U6.pins.Q6, B7_IO);
		Connect(this.U6.pins.Q7, B8_IO);
		this.ULS653LOG = new logicexp(['GBABAR_I','GAB_I','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1','QA2','QA3','QA4','QA5','QA6','QA7','QA8','QB1','QB2','QB3','QB4','QB5','QB6','QB7','QB8'], ['GBABAR','GAB','CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_O','A2_O','A3_O','A4_O','A5_O','A6_O','A7_O','A8_O','B1_O','B2_O','B3_O','B4_O','B5_O','B6_O','B7_O','B8_O','IGAB','IGBABAR'], []).Logic('   GBABAR =  GBABAR_I ;   GAB =  GAB_I ;   CBA =  CBA_I ;   SBA =  SBA_I ;   CAB =  CAB_I ;   SAB =  SAB_I ;   A1 =  A1_B ;   A2 =  A2_B ;   A3 =  A3_B ;   A4 =  A4_B ;   A5 =  A5_B ;   A6 =  A6_B ;   A7 =  A7_B ;   A8 =  A8_B ;   B1 =  B1_B ;   B2 =  B2_B ;   B3 =  B3_B ;   B4 =  B4_B ;   B5 =  B5_B ;   B6 =  B6_B ;   B7 =  B7_B ;   B8 =  B8_B ;let    ISAB =  !SAB ;   ISAB =  !SAB ;let    ISBA =  !SBA ;   ISBA =  !SBA ;   IGAB =  !GAB ;   IGBABAR =  !GBABAR ;   A1_O =  !((SBA & QA1) | (ISBA & B1)) | GBABAR ;   A2_O =  !((SBA & QA2) | (ISBA & B2)) | GBABAR ;   A3_O =  !((SBA & QA3) | (ISBA & B3)) | GBABAR ;   A4_O =  !((SBA & QA4) | (ISBA & B4)) | GBABAR ;   A5_O =  !((SBA & QA5) | (ISBA & B5)) | GBABAR ;   A6_O =  !((SBA & QA6) | (ISBA & B6)) | GBABAR ;   A7_O =  !((SBA & QA7) | (ISBA & B7)) | GBABAR ;   A8_O =  !((SBA & QA8) | (ISBA & B8)) | GBABAR ;   B1_O =  !((SAB & QB1) | (ISAB & A1)) ;   B2_O =  !((SAB & QB2) | (ISAB & A2)) ;   B3_O =  !((SAB & QB3) | (ISAB & A3)) ;   B4_O =  !((SAB & QB4) | (ISAB & A4)) ;   B5_O =  !((SAB & QB5) | (ISAB & A5)) ;   B6_O =  !((SAB & QB6) | (ISAB & A6)) ;   B7_O =  !((SAB & QB7) | (ISAB & A7)) ;   B8_O =  !((SAB & QB8) | (ISAB & A8)) ;');
		Connect(this.ULS653LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.ULS653LOG.pins.GAB_I, this.pins.GAB_I);
		Connect(this.ULS653LOG.pins.CBA_I, this.pins.CBA_I);
		Connect(this.ULS653LOG.pins.SBA_I, this.pins.SBA_I);
		Connect(this.ULS653LOG.pins.CAB_I, this.pins.CAB_I);
		Connect(this.ULS653LOG.pins.SAB_I, this.pins.SAB_I);
		Connect(this.ULS653LOG.pins.A1_B, this.pins.A1_B);
		Connect(this.ULS653LOG.pins.A2_B, this.pins.A2_B);
		Connect(this.ULS653LOG.pins.A3_B, this.pins.A3_B);
		Connect(this.ULS653LOG.pins.A4_B, this.pins.A4_B);
		Connect(this.ULS653LOG.pins.A5_B, this.pins.A5_B);
		Connect(this.ULS653LOG.pins.A6_B, this.pins.A6_B);
		Connect(this.ULS653LOG.pins.A7_B, this.pins.A7_B);
		Connect(this.ULS653LOG.pins.A8_B, this.pins.A8_B);
		Connect(this.ULS653LOG.pins.B1_B, this.pins.B1_B);
		Connect(this.ULS653LOG.pins.B2_B, this.pins.B2_B);
		Connect(this.ULS653LOG.pins.B3_B, this.pins.B3_B);
		Connect(this.ULS653LOG.pins.B4_B, this.pins.B4_B);
		Connect(this.ULS653LOG.pins.B5_B, this.pins.B5_B);
		Connect(this.ULS653LOG.pins.B6_B, this.pins.B6_B);
		Connect(this.ULS653LOG.pins.B7_B, this.pins.B7_B);
		Connect(this.ULS653LOG.pins.B8_B, this.pins.B8_B);
		Connect(this.ULS653LOG.pins.QA1, QA1);
		Connect(this.ULS653LOG.pins.QA2, QA2);
		Connect(this.ULS653LOG.pins.QA3, QA3);
		Connect(this.ULS653LOG.pins.QA4, QA4);
		Connect(this.ULS653LOG.pins.QA5, QA5);
		Connect(this.ULS653LOG.pins.QA6, QA6);
		Connect(this.ULS653LOG.pins.QA7, QA7);
		Connect(this.ULS653LOG.pins.QA8, QA8);
		Connect(this.ULS653LOG.pins.QB1, QB1);
		Connect(this.ULS653LOG.pins.QB2, QB2);
		Connect(this.ULS653LOG.pins.QB3, QB3);
		Connect(this.ULS653LOG.pins.QB4, QB4);
		Connect(this.ULS653LOG.pins.QB5, QB5);
		Connect(this.ULS653LOG.pins.QB6, QB6);
		Connect(this.ULS653LOG.pins.QB7, QB7);
		Connect(this.ULS653LOG.pins.QB8, QB8);
		Connect(this.ULS653LOG.pins.GBABAR, GBABAR);
		Connect(this.ULS653LOG.pins.GAB, GAB);
		Connect(this.ULS653LOG.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.ULS653LOG.pins.SBA, SBA);
		Connect(this.ULS653LOG.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.ULS653LOG.pins.SAB, SAB);
		Connect(this.ULS653LOG.pins.A1, A1);
		Connect(this.ULS653LOG.pins.A2, A2);
		Connect(this.ULS653LOG.pins.A3, A3);
		Connect(this.ULS653LOG.pins.A4, A4);
		Connect(this.ULS653LOG.pins.A5, A5);
		Connect(this.ULS653LOG.pins.A6, A6);
		Connect(this.ULS653LOG.pins.A7, A7);
		Connect(this.ULS653LOG.pins.A8, A8);
		Connect(this.ULS653LOG.pins.B1, B1);
		Connect(this.ULS653LOG.pins.B2, B2);
		Connect(this.ULS653LOG.pins.B3, B3);
		Connect(this.ULS653LOG.pins.B4, B4);
		Connect(this.ULS653LOG.pins.B5, B5);
		Connect(this.ULS653LOG.pins.B6, B6);
		Connect(this.ULS653LOG.pins.B7, B7);
		Connect(this.ULS653LOG.pins.B8, B8);
		Connect(this.ULS653LOG.pins.A1_O, A1_O);
		Connect(this.ULS653LOG.pins.A2_O, A2_O);
		Connect(this.ULS653LOG.pins.A3_O, A3_O);
		Connect(this.ULS653LOG.pins.A4_O, A4_O);
		Connect(this.ULS653LOG.pins.A5_O, A5_O);
		Connect(this.ULS653LOG.pins.A6_O, A6_O);
		Connect(this.ULS653LOG.pins.A7_O, A7_O);
		Connect(this.ULS653LOG.pins.A8_O, A8_O);
		Connect(this.ULS653LOG.pins.B1_O, B1_O);
		Connect(this.ULS653LOG.pins.B2_O, B2_O);
		Connect(this.ULS653LOG.pins.B3_O, B3_O);
		Connect(this.ULS653LOG.pins.B4_O, B4_O);
		Connect(this.ULS653LOG.pins.B5_O, B5_O);
		Connect(this.ULS653LOG.pins.B6_O, B6_O);
		Connect(this.ULS653LOG.pins.B7_O, B7_O);
		Connect(this.ULS653LOG.pins.B8_O, B8_O);
		Connect(this.ULS653LOG.pins.IGAB, IGAB);
		Connect(this.ULS653LOG.pins.IGBABAR, IGBABAR);
		Connect(A1_O, this.pins.A1_B);
		Connect(A2_O, this.pins.A2_B);
		Connect(A3_O, this.pins.A3_B);
		Connect(A4_O, this.pins.A4_B);
		Connect(A5_O, this.pins.A5_B);
		Connect(A6_O, this.pins.A6_B);
		Connect(A7_O, this.pins.A7_B);
		Connect(A8_O, this.pins.A8_B);
		Connect(B1_IO, this.pins.B1_B);
		Connect(B2_IO, this.pins.B2_B);
		Connect(B3_IO, this.pins.B3_B);
		Connect(B4_IO, this.pins.B4_B);
		Connect(B5_IO, this.pins.B5_B);
		Connect(B6_IO, this.pins.B6_B);
		Connect(B7_IO, this.pins.B7_B);
		Connect(B8_IO, this.pins.B8_B);
		this.ULS653CON = new constraint(18);
	}
}
/**
 * BUS TRANSCEIVERS AND REGISTERS OCTAL WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS654 extends Component {
	constructor() {
		super();
		this.pins = {
			GBABAR_I: new Pin(),
			GAB_I: new Pin(),
			CBA_I: new Pin(),
			SBA_I: new Pin(),
			CAB_I: new Pin(),
			SAB_I: new Pin(),
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
		this.U1 = new dff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CAB = new Pin();
		Connect(this.U1.pins.CLOCK, CAB);
		let A1_IO = new Pin();
		Connect(this.U1.pins.D0, A1_IO);
		let A2_IO = new Pin();
		Connect(this.U1.pins.D1, A2_IO);
		let A3_IO = new Pin();
		Connect(this.U1.pins.D2, A3_IO);
		let A4_IO = new Pin();
		Connect(this.U1.pins.D3, A4_IO);
		let A5_IO = new Pin();
		Connect(this.U1.pins.D4, A5_IO);
		let A6_IO = new Pin();
		Connect(this.U1.pins.D5, A6_IO);
		let A7_IO = new Pin();
		Connect(this.U1.pins.D6, A7_IO);
		let A8_IO = new Pin();
		Connect(this.U1.pins.D7, A8_IO);
		let _D_NC = new Pin();
		Connect(this.U1.pins.Q0, _D_NC);
		Connect(this.U1.pins.Q1, _D_NC);
		Connect(this.U1.pins.Q2, _D_NC);
		Connect(this.U1.pins.Q3, _D_NC);
		Connect(this.U1.pins.Q4, _D_NC);
		Connect(this.U1.pins.Q5, _D_NC);
		Connect(this.U1.pins.Q6, _D_NC);
		Connect(this.U1.pins.Q7, _D_NC);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		let CBA = new Pin();
		Connect(this.U2.pins.CLOCK, CBA);
		let B1_IO = new Pin();
		Connect(this.U2.pins.D0, B1_IO);
		let B2_IO = new Pin();
		Connect(this.U2.pins.D1, B2_IO);
		let B3_IO = new Pin();
		Connect(this.U2.pins.D2, B3_IO);
		let B4_IO = new Pin();
		Connect(this.U2.pins.D3, B4_IO);
		let B5_IO = new Pin();
		Connect(this.U2.pins.D4, B5_IO);
		let B6_IO = new Pin();
		Connect(this.U2.pins.D5, B6_IO);
		let B7_IO = new Pin();
		Connect(this.U2.pins.D6, B7_IO);
		let B8_IO = new Pin();
		Connect(this.U2.pins.D7, B8_IO);
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		Connect(this.U2.pins.Q4, _D_NC);
		Connect(this.U2.pins.Q5, _D_NC);
		Connect(this.U2.pins.Q6, _D_NC);
		Connect(this.U2.pins.Q7, _D_NC);
		this.U3 = new buf3a(8);
		let A1 = new Pin();
		Connect(this.U3.pins.D0, A1);
		let A2 = new Pin();
		Connect(this.U3.pins.D1, A2);
		let A3 = new Pin();
		Connect(this.U3.pins.D2, A3);
		let A4 = new Pin();
		Connect(this.U3.pins.D3, A4);
		let A5 = new Pin();
		Connect(this.U3.pins.D4, A5);
		let A6 = new Pin();
		Connect(this.U3.pins.D5, A6);
		let A7 = new Pin();
		Connect(this.U3.pins.D6, A7);
		let A8 = new Pin();
		Connect(this.U3.pins.D7, A8);
		let GBABAR = new Pin();
		Connect(this.U3.pins.EN, GBABAR);
		Connect(this.U3.pins.Q0, A1_IO);
		Connect(this.U3.pins.Q1, A2_IO);
		Connect(this.U3.pins.Q2, A3_IO);
		Connect(this.U3.pins.Q3, A4_IO);
		Connect(this.U3.pins.Q4, A5_IO);
		Connect(this.U3.pins.Q5, A6_IO);
		Connect(this.U3.pins.Q6, A7_IO);
		Connect(this.U3.pins.Q7, A8_IO);
		this.U4 = new buf3a(8);
		let A1_O = new Pin();
		Connect(this.U4.pins.D0, A1_O);
		let A2_O = new Pin();
		Connect(this.U4.pins.D1, A2_O);
		let A3_O = new Pin();
		Connect(this.U4.pins.D2, A3_O);
		let A4_O = new Pin();
		Connect(this.U4.pins.D3, A4_O);
		let A5_O = new Pin();
		Connect(this.U4.pins.D4, A5_O);
		let A6_O = new Pin();
		Connect(this.U4.pins.D5, A6_O);
		let A7_O = new Pin();
		Connect(this.U4.pins.D6, A7_O);
		let A8_O = new Pin();
		Connect(this.U4.pins.D7, A8_O);
		let IGBABAR = new Pin();
		Connect(this.U4.pins.EN, IGBABAR);
		Connect(this.U4.pins.Q0, A1_IO);
		Connect(this.U4.pins.Q1, A2_IO);
		Connect(this.U4.pins.Q2, A3_IO);
		Connect(this.U4.pins.Q3, A4_IO);
		Connect(this.U4.pins.Q4, A5_IO);
		Connect(this.U4.pins.Q5, A6_IO);
		Connect(this.U4.pins.Q6, A7_IO);
		Connect(this.U4.pins.Q7, A8_IO);
		this.U5 = new buf3a(8);
		let B1_O = new Pin();
		Connect(this.U5.pins.D0, B1_O);
		let B2_O = new Pin();
		Connect(this.U5.pins.D1, B2_O);
		let B3_O = new Pin();
		Connect(this.U5.pins.D2, B3_O);
		let B4_O = new Pin();
		Connect(this.U5.pins.D3, B4_O);
		let B5_O = new Pin();
		Connect(this.U5.pins.D4, B5_O);
		let B6_O = new Pin();
		Connect(this.U5.pins.D5, B6_O);
		let B7_O = new Pin();
		Connect(this.U5.pins.D6, B7_O);
		let B8_O = new Pin();
		Connect(this.U5.pins.D7, B8_O);
		let GAB = new Pin();
		Connect(this.U5.pins.EN, GAB);
		Connect(this.U5.pins.Q0, B1_IO);
		Connect(this.U5.pins.Q1, B2_IO);
		Connect(this.U5.pins.Q2, B3_IO);
		Connect(this.U5.pins.Q3, B4_IO);
		Connect(this.U5.pins.Q4, B5_IO);
		Connect(this.U5.pins.Q5, B6_IO);
		Connect(this.U5.pins.Q6, B7_IO);
		Connect(this.U5.pins.Q7, B8_IO);
		this.U6 = new buf3a(8);
		let B1 = new Pin();
		Connect(this.U6.pins.D0, B1);
		let B2 = new Pin();
		Connect(this.U6.pins.D1, B2);
		let B3 = new Pin();
		Connect(this.U6.pins.D2, B3);
		let B4 = new Pin();
		Connect(this.U6.pins.D3, B4);
		let B5 = new Pin();
		Connect(this.U6.pins.D4, B5);
		let B6 = new Pin();
		Connect(this.U6.pins.D5, B6);
		let B7 = new Pin();
		Connect(this.U6.pins.D6, B7);
		let B8 = new Pin();
		Connect(this.U6.pins.D7, B8);
		let IGAB = new Pin();
		Connect(this.U6.pins.EN, IGAB);
		Connect(this.U6.pins.Q0, B1_IO);
		Connect(this.U6.pins.Q1, B2_IO);
		Connect(this.U6.pins.Q2, B3_IO);
		Connect(this.U6.pins.Q3, B4_IO);
		Connect(this.U6.pins.Q4, B5_IO);
		Connect(this.U6.pins.Q5, B6_IO);
		Connect(this.U6.pins.Q6, B7_IO);
		Connect(this.U6.pins.Q7, B8_IO);
		this.ULS654LOG = new logicexp(['GBABAR_I','GAB_I','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1BAR','QA2BAR','QA3BAR','QA4BAR','QA5BAR','QA6BAR','QA7BAR','QA8BAR','QB1BAR','QB2BAR','QB3BAR','QB4BAR','QB5BAR','QB6BAR','QB7BAR','QB8BAR'], ['GBABAR','GAB','CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_O','A2_O','A3_O','A4_O','A5_O','A6_O','A7_O','A8_O','B1_O','B2_O','B3_O','B4_O','B5_O','B6_O','B7_O','B8_O','IGAB','IGBABAR'], []).Logic('   GBABAR =  GBABAR_I ;   GAB =  GAB_I ;   CBA =  CBA_I ;   SBA =  SBA_I ;   CAB =  CAB_I ;   SAB =  SAB_I ;   A1 =  A1_B ;   A2 =  A2_B ;   A3 =  A3_B ;   A4 =  A4_B ;   A5 =  A5_B ;   A6 =  A6_B ;   A7 =  A7_B ;   A8 =  A8_B ;   B1 =  B1_B ;   B2 =  B2_B ;   B3 =  B3_B ;   B4 =  B4_B ;   B5 =  B5_B ;   B6 =  B6_B ;   B7 =  B7_B ;   B8 =  B8_B ;let    ISAB =  !SAB ;   ISAB =  !SAB ;let    ISBA =  !SBA ;   ISBA =  !SBA ;   IGAB =  !GAB ;   IGBABAR =  !GBABAR ;   A1_O =  !((SBA & QA1BAR) | (ISBA & !B1)) | GBABAR ;   A2_O =  !((SBA & QA2BAR) | (ISBA & !B2)) | GBABAR ;   A3_O =  !((SBA & QA3BAR) | (ISBA & !B3)) | GBABAR ;   A4_O =  !((SBA & QA4BAR) | (ISBA & !B4)) | GBABAR ;   A5_O =  !((SBA & QA5BAR) | (ISBA & !B5)) | GBABAR ;   A6_O =  !((SBA & QA6BAR) | (ISBA & !B6)) | GBABAR ;   A7_O =  !((SBA & QA7BAR) | (ISBA & !B7)) | GBABAR ;   A8_O =  !((SBA & QA8BAR) | (ISBA & !B8)) | GBABAR ;   B1_O =  !((SAB & QB1BAR) | (ISAB & !A1)) ;   B2_O =  !((SAB & QB2BAR) | (ISAB & !A2)) ;   B3_O =  !((SAB & QB3BAR) | (ISAB & !A3)) ;   B4_O =  !((SAB & QB4BAR) | (ISAB & !A4)) ;   B5_O =  !((SAB & QB5BAR) | (ISAB & !A5)) ;   B6_O =  !((SAB & QB6BAR) | (ISAB & !A6)) ;   B7_O =  !((SAB & QB7BAR) | (ISAB & !A7)) ;   B8_O =  !((SAB & QB8BAR) | (ISAB & !A8)) ;');
		Connect(this.ULS654LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.ULS654LOG.pins.GAB_I, this.pins.GAB_I);
		Connect(this.ULS654LOG.pins.CBA_I, this.pins.CBA_I);
		Connect(this.ULS654LOG.pins.SBA_I, this.pins.SBA_I);
		Connect(this.ULS654LOG.pins.CAB_I, this.pins.CAB_I);
		Connect(this.ULS654LOG.pins.SAB_I, this.pins.SAB_I);
		Connect(this.ULS654LOG.pins.A1_B, this.pins.A1_B);
		Connect(this.ULS654LOG.pins.A2_B, this.pins.A2_B);
		Connect(this.ULS654LOG.pins.A3_B, this.pins.A3_B);
		Connect(this.ULS654LOG.pins.A4_B, this.pins.A4_B);
		Connect(this.ULS654LOG.pins.A5_B, this.pins.A5_B);
		Connect(this.ULS654LOG.pins.A6_B, this.pins.A6_B);
		Connect(this.ULS654LOG.pins.A7_B, this.pins.A7_B);
		Connect(this.ULS654LOG.pins.A8_B, this.pins.A8_B);
		Connect(this.ULS654LOG.pins.B1_B, this.pins.B1_B);
		Connect(this.ULS654LOG.pins.B2_B, this.pins.B2_B);
		Connect(this.ULS654LOG.pins.B3_B, this.pins.B3_B);
		Connect(this.ULS654LOG.pins.B4_B, this.pins.B4_B);
		Connect(this.ULS654LOG.pins.B5_B, this.pins.B5_B);
		Connect(this.ULS654LOG.pins.B6_B, this.pins.B6_B);
		Connect(this.ULS654LOG.pins.B7_B, this.pins.B7_B);
		Connect(this.ULS654LOG.pins.B8_B, this.pins.B8_B);
		let QA1BAR = new Pin();
		Connect(this.ULS654LOG.pins.QA1BAR, QA1BAR);
		let QA2BAR = new Pin();
		Connect(this.ULS654LOG.pins.QA2BAR, QA2BAR);
		let QA3BAR = new Pin();
		Connect(this.ULS654LOG.pins.QA3BAR, QA3BAR);
		let QA4BAR = new Pin();
		Connect(this.ULS654LOG.pins.QA4BAR, QA4BAR);
		let QA5BAR = new Pin();
		Connect(this.ULS654LOG.pins.QA5BAR, QA5BAR);
		let QA6BAR = new Pin();
		Connect(this.ULS654LOG.pins.QA6BAR, QA6BAR);
		let QA7BAR = new Pin();
		Connect(this.ULS654LOG.pins.QA7BAR, QA7BAR);
		let QA8BAR = new Pin();
		Connect(this.ULS654LOG.pins.QA8BAR, QA8BAR);
		let QB1BAR = new Pin();
		Connect(this.ULS654LOG.pins.QB1BAR, QB1BAR);
		let QB2BAR = new Pin();
		Connect(this.ULS654LOG.pins.QB2BAR, QB2BAR);
		let QB3BAR = new Pin();
		Connect(this.ULS654LOG.pins.QB3BAR, QB3BAR);
		let QB4BAR = new Pin();
		Connect(this.ULS654LOG.pins.QB4BAR, QB4BAR);
		let QB5BAR = new Pin();
		Connect(this.ULS654LOG.pins.QB5BAR, QB5BAR);
		let QB6BAR = new Pin();
		Connect(this.ULS654LOG.pins.QB6BAR, QB6BAR);
		let QB7BAR = new Pin();
		Connect(this.ULS654LOG.pins.QB7BAR, QB7BAR);
		let QB8BAR = new Pin();
		Connect(this.ULS654LOG.pins.QB8BAR, QB8BAR);
		Connect(this.ULS654LOG.pins.GBABAR, GBABAR);
		Connect(this.ULS654LOG.pins.GAB, GAB);
		Connect(this.ULS654LOG.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.ULS654LOG.pins.SBA, SBA);
		Connect(this.ULS654LOG.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.ULS654LOG.pins.SAB, SAB);
		Connect(this.ULS654LOG.pins.A1, A1);
		Connect(this.ULS654LOG.pins.A2, A2);
		Connect(this.ULS654LOG.pins.A3, A3);
		Connect(this.ULS654LOG.pins.A4, A4);
		Connect(this.ULS654LOG.pins.A5, A5);
		Connect(this.ULS654LOG.pins.A6, A6);
		Connect(this.ULS654LOG.pins.A7, A7);
		Connect(this.ULS654LOG.pins.A8, A8);
		Connect(this.ULS654LOG.pins.B1, B1);
		Connect(this.ULS654LOG.pins.B2, B2);
		Connect(this.ULS654LOG.pins.B3, B3);
		Connect(this.ULS654LOG.pins.B4, B4);
		Connect(this.ULS654LOG.pins.B5, B5);
		Connect(this.ULS654LOG.pins.B6, B6);
		Connect(this.ULS654LOG.pins.B7, B7);
		Connect(this.ULS654LOG.pins.B8, B8);
		Connect(this.ULS654LOG.pins.A1_O, A1_O);
		Connect(this.ULS654LOG.pins.A2_O, A2_O);
		Connect(this.ULS654LOG.pins.A3_O, A3_O);
		Connect(this.ULS654LOG.pins.A4_O, A4_O);
		Connect(this.ULS654LOG.pins.A5_O, A5_O);
		Connect(this.ULS654LOG.pins.A6_O, A6_O);
		Connect(this.ULS654LOG.pins.A7_O, A7_O);
		Connect(this.ULS654LOG.pins.A8_O, A8_O);
		Connect(this.ULS654LOG.pins.B1_O, B1_O);
		Connect(this.ULS654LOG.pins.B2_O, B2_O);
		Connect(this.ULS654LOG.pins.B3_O, B3_O);
		Connect(this.ULS654LOG.pins.B4_O, B4_O);
		Connect(this.ULS654LOG.pins.B5_O, B5_O);
		Connect(this.ULS654LOG.pins.B6_O, B6_O);
		Connect(this.ULS654LOG.pins.B7_O, B7_O);
		Connect(this.ULS654LOG.pins.B8_O, B8_O);
		Connect(this.ULS654LOG.pins.IGAB, IGAB);
		Connect(this.ULS654LOG.pins.IGBABAR, IGBABAR);
		Connect(A1_O, this.pins.A1_B);
		Connect(A2_O, this.pins.A2_B);
		Connect(A3_O, this.pins.A3_B);
		Connect(A4_O, this.pins.A4_B);
		Connect(A5_O, this.pins.A5_B);
		Connect(A6_O, this.pins.A6_B);
		Connect(A7_O, this.pins.A7_B);
		Connect(A8_O, this.pins.A8_B);
		Connect(B1_IO, this.pins.B1_B);
		Connect(B2_IO, this.pins.B2_B);
		Connect(B3_IO, this.pins.B3_B);
		Connect(B4_IO, this.pins.B4_B);
		Connect(B5_IO, this.pins.B5_B);
		Connect(B6_IO, this.pins.B6_B);
		Connect(B7_IO, this.pins.B7_B);
		Connect(B8_IO, this.pins.B8_B);
		this.ULS654CON = new constraint(18);
	}
}
/**
 * Synchronous 4-bit Decade Counters
 */
class SN74LS668 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			U_DBAR_I: new Pin(),
			ENPBAR_I: new Pin(),
			ENTBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.ULS668LOG = new logicexp(['CLK_I','U_DBAR_I','ENPBAR_I','ENTBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','U_DBAR','ENPBAR','ENTBAR','LOADBAR','A','B','C','D','RCOBAR','DA','DB','DC','DD','IEN'], []).Logic('   CLK =  CLK_I ;                        U_DBAR =  U_DBAR_I ;   ENPBAR =  ENPBAR_I ;   ENTBAR =  ENTBAR_I ;let    ENP =  !ENPBAR ;   ENP =  !ENPBAR ;let    ENT =  !ENTBAR ;   ENT =  !ENTBAR ;   LOADBAR =  LOADBAR_I ;let    UD =  !U_DBAR ;   UD =  !U_DBAR ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !LOADBAR ;   LOAD =  !LOADBAR ;                  IEN =  ENP & ENT & LOADBAR ;let    IA1 =  !((UD & QA) | (U_DBAR & QABAR)) ;   IA1 =  !((UD & QA) | (U_DBAR & QABAR)) ;let    IB1 =  !((UD & QB) | (U_DBAR & QBBAR)) ;   IB1 =  !((UD & QB) | (U_DBAR & QBBAR)) ;let    IC1 =  !((UD & QC) | (U_DBAR & QCBAR)) ;   IC1 =  !((UD & QC) | (U_DBAR & QCBAR)) ;let    ID1 =  !((UD & QD) | (U_DBAR & QDBAR)) ;   ID1 =  !((UD & QD) | (U_DBAR & QDBAR)) ;let    IB2 =  !(ID1 & U_DBAR) ;   IB2 =  !(ID1 & U_DBAR) ;let    IB3 =  !(UD & IA1 & IB1 & IC1 & ID1) ;   IB3 =  !(UD & IA1 & IB1 & IC1 & ID1) ;   DA =  (QA & !IEN & LOADBAR) | (IEN & QABAR) | (A & LOAD) ;   DB =  (!(IEN & IA1) & LOADBAR & QB) |     (IA1 & IEN & IB2 & IB3 & QBBAR) | (B & LOAD) ;   DC =  (!(IEN & IA1 & IB1) & LOADBAR & QC) |     (IEN & IB3 & IA1 & IB1 & QCBAR) | (C & LOAD) ;   DD =  (!(IEN & IA1) & LOADBAR & QD) |     (IEN & IA1 & IB1 & IC1 & QDBAR) | (D & LOAD) ;   RCOBAR =  !((ID1 & IA1 & U_DBAR & ENT) | ( ID1 & IC1 & IB1 & IA1 &     UD & ENT)) ;');
		Connect(this.ULS668LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS668LOG.pins.U_DBAR_I, this.pins.U_DBAR_I);
		Connect(this.ULS668LOG.pins.ENPBAR_I, this.pins.ENPBAR_I);
		Connect(this.ULS668LOG.pins.ENTBAR_I, this.pins.ENTBAR_I);
		Connect(this.ULS668LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS668LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS668LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS668LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS668LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.ULS668LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS668LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS668LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS668LOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS668LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS668LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS668LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS668LOG.pins.QDBAR, QDBAR);
		let CLK = new Pin();
		Connect(this.ULS668LOG.pins.CLK, CLK);
		let U_DBAR = new Pin();
		Connect(this.ULS668LOG.pins.U_DBAR, U_DBAR);
		let ENPBAR = new Pin();
		Connect(this.ULS668LOG.pins.ENPBAR, ENPBAR);
		let ENTBAR = new Pin();
		Connect(this.ULS668LOG.pins.ENTBAR, ENTBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS668LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS668LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS668LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS668LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS668LOG.pins.D, D);
		let RCOBAR = new Pin();
		Connect(this.ULS668LOG.pins.RCOBAR, RCOBAR);
		let DA = new Pin();
		Connect(this.ULS668LOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.ULS668LOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.ULS668LOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.ULS668LOG.pins.DD, DD);
		let IEN = new Pin();
		Connect(this.ULS668LOG.pins.IEN, IEN);
		this.UDFF = new dff(4);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, CLK);
		Connect(this.UDFF.pins.D0, DA);
		Connect(this.UDFF.pins.D1, DB);
		Connect(this.UDFF.pins.D2, DC);
		Connect(this.UDFF.pins.D3, DD);
		Connect(this.UDFF.pins.Q0, QA);
		Connect(this.UDFF.pins.Q1, QB);
		Connect(this.UDFF.pins.Q2, QC);
		Connect(this.UDFF.pins.Q3, QD);
		Connect(RCOBAR, this.pins.RCOBAR_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
class SN74LS669 extends Component {
	constructor() {
		super();
		this.pins = {
			CLK_I: new Pin(),
			U_DBAR_I: new Pin(),
			ENPBAR_I: new Pin(),
			ENTBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		this.ULS699LOG = new logicexp(['CLK_I','U_DBAR_I','ENPBAR_I','ENTBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','U_DBAR','ENPBAR','ENTBAR','LOADBAR','A','B','C','D','DA','DB','DC','DD','RCOBAR','IEN'], []).Logic('   CLK =  CLK_I ;   U_DBAR =  U_DBAR_I ;   ENPBAR =  ENPBAR_I ;   ENTBAR =  ENTBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;   IEN =  LOADBAR & !ENPBAR & !ENTBAR ;let    IUD1 =  !U_DBAR ;   IUD1 =  !U_DBAR ;let    IUD2 =  !((QA & IUD1) | (U_DBAR & QABAR)) ;   IUD2 =  !((QA & IUD1) | (U_DBAR & QABAR)) ;let    IUD3 =  !((QB & IUD1) | (U_DBAR & QBBAR)) ;   IUD3 =  !((QB & IUD1) | (U_DBAR & QBBAR)) ;let    IUD4 =  !((QC & IUD1) | (U_DBAR & QCBAR)) ;   IUD4 =  !((QC & IUD1) | (U_DBAR & QCBAR)) ;let    IUD5 =  !((QD & IUD1) | (U_DBAR & QDBAR)) ;   IUD5 =  !((QD & IUD1) | (U_DBAR & QDBAR)) ;let    IA1 =  QA & !IEN & LOADBAR ;   IA1 =  QA & !IEN & LOADBAR ;let    IA2 =  IEN & QABAR ;   IA2 =  IEN & QABAR ;let    IB1 =  QB & LOADBAR & !(IEN & IUD2) ;   IB1 =  QB & LOADBAR & !(IEN & IUD2) ;let    IB2 =  IUD2 & IEN & QBBAR ;   IB2 =  IUD2 & IEN & QBBAR ;let    IC1 =  QC & LOADBAR & !(IEN & IUD2 & IUD3) ;   IC1 =  QC & LOADBAR & !(IEN & IUD2 & IUD3) ;let    IC2 =  IEN & IUD3 & IUD2 & QCBAR ;   IC2 =  IEN & IUD3 & IUD2 & QCBAR ;let    ID1 =  QD & LOADBAR & !(IEN & IUD2 & IUD3 & IUD4) ;   ID1 =  QD & LOADBAR & !(IEN & IUD2 & IUD3 & IUD4) ;let    ID2 =  IEN & IUD4 & IUD3 & IUD2 & QDBAR ;   ID2 =  IEN & IUD4 & IUD3 & IUD2 & QDBAR ;   DA =  IA1 | IA2 | (ILD & A) ;   DB =  IB1 | IB2 | (ILD & B) ;   DC =  IC1 | IC2 | (ILD & C) ;   DD =  ID1 | ID2 | (ILD & D) ;   RCOBAR =  !(IUD5 & IUD4 & IUD3 & IUD2 & !ENTBAR) ;');
		Connect(this.ULS699LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.ULS699LOG.pins.U_DBAR_I, this.pins.U_DBAR_I);
		Connect(this.ULS699LOG.pins.ENPBAR_I, this.pins.ENPBAR_I);
		Connect(this.ULS699LOG.pins.ENTBAR_I, this.pins.ENTBAR_I);
		Connect(this.ULS699LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS699LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS699LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS699LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS699LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS699LOG.pins.QA, QA);
		Connect(this.ULS699LOG.pins.QB, QB);
		Connect(this.ULS699LOG.pins.QC, QC);
		Connect(this.ULS699LOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.ULS699LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.ULS699LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.ULS699LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.ULS699LOG.pins.QDBAR, QDBAR);
		Connect(this.ULS699LOG.pins.CLK, CLK);
		let U_DBAR = new Pin();
		Connect(this.ULS699LOG.pins.U_DBAR, U_DBAR);
		let ENPBAR = new Pin();
		Connect(this.ULS699LOG.pins.ENPBAR, ENPBAR);
		let ENTBAR = new Pin();
		Connect(this.ULS699LOG.pins.ENTBAR, ENTBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS699LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.ULS699LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS699LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS699LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS699LOG.pins.D, D);
		Connect(this.ULS699LOG.pins.DA, DA);
		Connect(this.ULS699LOG.pins.DB, DB);
		Connect(this.ULS699LOG.pins.DC, DC);
		Connect(this.ULS699LOG.pins.DD, DD);
		let RCOBAR = new Pin();
		Connect(this.ULS699LOG.pins.RCOBAR, RCOBAR);
		let IEN = new Pin();
		Connect(this.ULS699LOG.pins.IEN, IEN);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
	}
}
/**
 * REGISTER FILES 4X4 WITH 3-STATE OUTPUTS
 */
class SN74LS670 extends Component {
	constructor() {
		super();
		this.pins = {
			GWBAR_I: new Pin(),
			GRBAR_I: new Pin(),
			WA_I: new Pin(),
			WB_I: new Pin(),
			RA_I: new Pin(),
			RB_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			D4_I: new Pin(),
			Q1_O: new Pin(),
			Q2_O: new Pin(),
			Q3_O: new Pin(),
			Q4_O: new Pin(),
		}
		this.UA = new dltch(4);
		this.UB = new dltch(4);
		this.UC = new dltch(4);
		this.UD = new dltch(4);
		this.ULS670LOG = new logicexp(['GWBAR_I','GRBAR_I','WA_I','WB_I','RA_I','RB_I','D1_I','D2_I','D3_I','D4_I','AQ1','AQ2','AQ3','AQ4','BQ1','BQ2','BQ3','BQ4','CQ1','CQ2','CQ3','CQ4','DQ1','DQ2','DQ3','DQ4'], ['GWBAR','GRBAR','WA','WB','RA','RB','D1','D2','D3','D4','GATEA','GATEB','GATEC','GATED','Q1','Q2','Q3','Q4'], []).Logic('   GWBAR   =  GWBAR_I ;   GRBAR   =  GRBAR_I ;   WA      =  WA_I ;   WB      =  WB_I ;   RA      =  RA_I ;   RB      =  RB_I ;   D1      =  D1_I ;   D2      =  D2_I ;   D3      =  D3_I ;   D4      =  D4_I ;let    ENABLE2 =  !(GWBAR | WB) ;   ENABLE2 =  !(GWBAR | WB) ;let    ENABLE1 =  !(GWBAR | ENABLE2) ;   ENABLE1 =  !(GWBAR | ENABLE2) ;   GATEA   =  ENABLE2 & !WA ;   GATEB   =  ENABLE2 &  WA ;   GATEC   =  ENABLE1 & !WA ;   GATED   =  ENABLE1 &  WA ;   Q1      =  (AQ1 & !RA & !RB) |               (BQ1 &  RA & !RB) |               (CQ1 & !RA &  RB) |               (DQ1 &  RA &  RB)             ;   Q2      =  (AQ2 & !RA & !RB) |               (BQ2 &  RA & !RB) |               (CQ2 & !RA &  RB) |               (DQ2 &  RA &  RB)             ;   Q3      =  (AQ3 & !RA & !RB) |               (BQ3 &  RA & !RB) |               (CQ3 & !RA &  RB) |               (DQ3 &  RA &  RB)             ;   Q4      =  (AQ4 & !RA & !RB) |               (BQ4 &  RA & !RB) |               (CQ4 & !RA &  RB) |               (DQ4 &  RA &  RB)             ;');
		Connect(this.ULS670LOG.pins.GWBAR_I, this.pins.GWBAR_I);
		Connect(this.ULS670LOG.pins.GRBAR_I, this.pins.GRBAR_I);
		Connect(this.ULS670LOG.pins.WA_I, this.pins.WA_I);
		Connect(this.ULS670LOG.pins.WB_I, this.pins.WB_I);
		Connect(this.ULS670LOG.pins.RA_I, this.pins.RA_I);
		Connect(this.ULS670LOG.pins.RB_I, this.pins.RB_I);
		Connect(this.ULS670LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.ULS670LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.ULS670LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.ULS670LOG.pins.D4_I, this.pins.D4_I);
		let AQ1 = new Pin();
		Connect(this.ULS670LOG.pins.AQ1, AQ1);
		let AQ2 = new Pin();
		Connect(this.ULS670LOG.pins.AQ2, AQ2);
		let AQ3 = new Pin();
		Connect(this.ULS670LOG.pins.AQ3, AQ3);
		let AQ4 = new Pin();
		Connect(this.ULS670LOG.pins.AQ4, AQ4);
		let BQ1 = new Pin();
		Connect(this.ULS670LOG.pins.BQ1, BQ1);
		let BQ2 = new Pin();
		Connect(this.ULS670LOG.pins.BQ2, BQ2);
		let BQ3 = new Pin();
		Connect(this.ULS670LOG.pins.BQ3, BQ3);
		let BQ4 = new Pin();
		Connect(this.ULS670LOG.pins.BQ4, BQ4);
		let CQ1 = new Pin();
		Connect(this.ULS670LOG.pins.CQ1, CQ1);
		let CQ2 = new Pin();
		Connect(this.ULS670LOG.pins.CQ2, CQ2);
		let CQ3 = new Pin();
		Connect(this.ULS670LOG.pins.CQ3, CQ3);
		let CQ4 = new Pin();
		Connect(this.ULS670LOG.pins.CQ4, CQ4);
		let DQ1 = new Pin();
		Connect(this.ULS670LOG.pins.DQ1, DQ1);
		let DQ2 = new Pin();
		Connect(this.ULS670LOG.pins.DQ2, DQ2);
		let DQ3 = new Pin();
		Connect(this.ULS670LOG.pins.DQ3, DQ3);
		let DQ4 = new Pin();
		Connect(this.ULS670LOG.pins.DQ4, DQ4);
		let GWBAR = new Pin();
		Connect(this.ULS670LOG.pins.GWBAR, GWBAR);
		let GRBAR = new Pin();
		Connect(this.ULS670LOG.pins.GRBAR, GRBAR);
		let WA = new Pin();
		Connect(this.ULS670LOG.pins.WA, WA);
		let WB = new Pin();
		Connect(this.ULS670LOG.pins.WB, WB);
		let RA = new Pin();
		Connect(this.ULS670LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.ULS670LOG.pins.RB, RB);
		let D1 = new Pin();
		Connect(this.ULS670LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.ULS670LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.ULS670LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.ULS670LOG.pins.D4, D4);
		let GATEA = new Pin();
		Connect(this.ULS670LOG.pins.GATEA, GATEA);
		let GATEB = new Pin();
		Connect(this.ULS670LOG.pins.GATEB, GATEB);
		let GATEC = new Pin();
		Connect(this.ULS670LOG.pins.GATEC, GATEC);
		let GATED = new Pin();
		Connect(this.ULS670LOG.pins.GATED, GATED);
		let Q1 = new Pin();
		Connect(this.ULS670LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.ULS670LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.ULS670LOG.pins.Q3, Q3);
		let Q4 = new Pin();
		Connect(this.ULS670LOG.pins.Q4, Q4);
		Connect(Q1, this.pins.Q1_O);
		Connect(Q2, this.pins.Q2_O);
		Connect(Q3, this.pins.Q3_O);
		Connect(Q4, this.pins.Q4_O);
	}
}
/**
 * 4-BIT SHIFT REGISTERS_LATCHES WITH 3-STATE OUTPUTS
 */
class SN74LS671 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_SBAR_I: new Pin(),
			SRCK_I: new Pin(),
			SRCLRBAR_I: new Pin(),
			RCK_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			SERR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			SERL_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			CASC_O: new Pin(),
		}
		this.ULS671LOG = new logicexp(['GBAR_I','R_SBAR_I','SRCK_I','SRCLRBAR_I','RCK_I','S0_I','S1_I','SERR_I','A_I','B_I','C_I','D_I','SERL_I','Q1A','Q1B','Q1C','Q1D','Q1ABAR','Q1BBAR','Q1CBAR','Q1DBAR','Q2ABAR','Q2BBAR','Q2CBAR','Q2DBAR'], ['GBAR','R_SBAR','SRCK','SRCLRBAR','RCK','SERR','S0','S1','SERL','A','B','C','D','D1A','D1B','D1C','D1D','QA','QB','QC','QD','CASC'], []).Logic('   R_SBAR    =  R_SBAR_I ;   S0        =  S0_I ;   S1        =  S1_I ;   SERR      =  SERR_I ;   SERL      =  SERL_I ;   SRCLRBAR  =  SRCLRBAR_I ;   SRCK      =  SRCK_I ;   RCK       =  RCK_I ;   GBAR      =  GBAR_I ;   A         =  A_I ;   B         =  B_I ;   C         =  C_I ;   D         =  D_I ;let    _S1_S0      =  !S1 & !S0 ;   _S1_S0      =  !S1 & !S0 ;let    _S1S0       =  !S1 & S0  ;   _S1S0       =  !S1 & S0  ;let    S1_S0       =  S1  & !S0 ;   S1_S0       =  S1  & !S0 ;let    S1S0        =  S1  & S0  ;   S1S0        =  S1  & S0  ;   D1A =  (S1S0 & A) | (S1_S0 & Q1B   ) | (_S1S0 & SERR)   | (_S1_S0 & Q1A) ;   D1B =  (S1S0 & B) | (S1_S0 & Q1C   ) | (_S1S0 & Q1A   ) | (_S1_S0 & Q1B) ;   D1C =  (S1S0 & C) | (S1_S0 & Q1D   ) | (_S1S0 & Q1B   ) | (_S1_S0 & Q1C) ;   D1D =  (S1S0 & D) | (S1_S0 & SERL)   | (_S1S0 & Q1C   ) | (_S1_S0 & Q1D) ;   QA =  !((Q2ABAR & R_SBAR) | (Q1ABAR & !R_SBAR)) ;   QB =  !((Q2BBAR & R_SBAR) | (Q1BBAR & !R_SBAR)) ;   QC =  !((Q2CBAR & R_SBAR) | (Q1CBAR & !R_SBAR)) ;   QD =  !((Q2DBAR & R_SBAR) | (Q1DBAR & !R_SBAR)) ;   CASC =  !((Q1DBAR & _S1S0   ) | (Q1ABAR & S1_S0   )) ;');
		Connect(this.ULS671LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS671LOG.pins.R_SBAR_I, this.pins.R_SBAR_I);
		Connect(this.ULS671LOG.pins.SRCK_I, this.pins.SRCK_I);
		Connect(this.ULS671LOG.pins.SRCLRBAR_I, this.pins.SRCLRBAR_I);
		Connect(this.ULS671LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS671LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS671LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS671LOG.pins.SERR_I, this.pins.SERR_I);
		Connect(this.ULS671LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS671LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS671LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS671LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS671LOG.pins.SERL_I, this.pins.SERL_I);
		let Q1A = new Pin();
		Connect(this.ULS671LOG.pins.Q1A, Q1A);
		let Q1B = new Pin();
		Connect(this.ULS671LOG.pins.Q1B, Q1B);
		let Q1C = new Pin();
		Connect(this.ULS671LOG.pins.Q1C, Q1C);
		let Q1D = new Pin();
		Connect(this.ULS671LOG.pins.Q1D, Q1D);
		let Q1ABAR = new Pin();
		Connect(this.ULS671LOG.pins.Q1ABAR, Q1ABAR);
		let Q1BBAR = new Pin();
		Connect(this.ULS671LOG.pins.Q1BBAR, Q1BBAR);
		let Q1CBAR = new Pin();
		Connect(this.ULS671LOG.pins.Q1CBAR, Q1CBAR);
		let Q1DBAR = new Pin();
		Connect(this.ULS671LOG.pins.Q1DBAR, Q1DBAR);
		let Q2ABAR = new Pin();
		Connect(this.ULS671LOG.pins.Q2ABAR, Q2ABAR);
		let Q2BBAR = new Pin();
		Connect(this.ULS671LOG.pins.Q2BBAR, Q2BBAR);
		let Q2CBAR = new Pin();
		Connect(this.ULS671LOG.pins.Q2CBAR, Q2CBAR);
		let Q2DBAR = new Pin();
		Connect(this.ULS671LOG.pins.Q2DBAR, Q2DBAR);
		let GBAR = new Pin();
		Connect(this.ULS671LOG.pins.GBAR, GBAR);
		let R_SBAR = new Pin();
		Connect(this.ULS671LOG.pins.R_SBAR, R_SBAR);
		let SRCK = new Pin();
		Connect(this.ULS671LOG.pins.SRCK, SRCK);
		let SRCLRBAR = new Pin();
		Connect(this.ULS671LOG.pins.SRCLRBAR, SRCLRBAR);
		let RCK = new Pin();
		Connect(this.ULS671LOG.pins.RCK, RCK);
		let SERR = new Pin();
		Connect(this.ULS671LOG.pins.SERR, SERR);
		let S0 = new Pin();
		Connect(this.ULS671LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS671LOG.pins.S1, S1);
		let SERL = new Pin();
		Connect(this.ULS671LOG.pins.SERL, SERL);
		let A = new Pin();
		Connect(this.ULS671LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS671LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS671LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS671LOG.pins.D, D);
		let D1A = new Pin();
		Connect(this.ULS671LOG.pins.D1A, D1A);
		let D1B = new Pin();
		Connect(this.ULS671LOG.pins.D1B, D1B);
		let D1C = new Pin();
		Connect(this.ULS671LOG.pins.D1C, D1C);
		let D1D = new Pin();
		Connect(this.ULS671LOG.pins.D1D, D1D);
		let QA = new Pin();
		Connect(this.ULS671LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS671LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS671LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS671LOG.pins.QD, QD);
		let CASC = new Pin();
		Connect(this.ULS671LOG.pins.CASC, CASC);
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, SRCLRBAR);
		Connect(this.U1.pins.CLOCK, SRCK);
		Connect(this.U1.pins.D0, D1A);
		Connect(this.U1.pins.D1, D1B);
		Connect(this.U1.pins.D2, D1C);
		Connect(this.U1.pins.D3, D1D);
		Connect(this.U1.pins.Q0, Q1A);
		Connect(this.U1.pins.Q1, Q1B);
		Connect(this.U1.pins.Q2, Q1C);
		Connect(this.U1.pins.Q3, Q1D);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		Connect(this.U2.pins.CLOCK, RCK);
		Connect(this.U2.pins.D0, Q1A);
		Connect(this.U2.pins.D1, Q1B);
		Connect(this.U2.pins.D2, Q1C);
		Connect(this.U2.pins.D3, Q1D);
		let Q2A = new Pin();
		Connect(this.U2.pins.Q0, Q2A);
		let Q2B = new Pin();
		Connect(this.U2.pins.Q1, Q2B);
		let Q2C = new Pin();
		Connect(this.U2.pins.Q2, Q2C);
		let Q2D = new Pin();
		Connect(this.U2.pins.Q3, Q2D);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(CASC, this.pins.CASC_O);
	}
}
/**
 * 4-BIT SHIFT REGISTERS_LATCHES WITH 3-STATE OUTPUTS
 */
class SN74LS672 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_SBAR_I: new Pin(),
			SRCK_I: new Pin(),
			SRCLRBAR_I: new Pin(),
			RCK_I: new Pin(),
			S0_I: new Pin(),
			S1_I: new Pin(),
			SERR_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			SERL_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			CASC_O: new Pin(),
		}
		this.ULS672LOG = new logicexp(['GBAR_I','R_SBAR_I','SRCK_I','SRCLRBAR_I','RCK_I','S0_I','S1_I','SERR_I','A_I','B_I','C_I','D_I','SERL_I','Q1A','Q1B','Q1C','Q1D','Q1ABAR','Q1BBAR','Q1CBAR','Q1DBAR','Q2ABAR','Q2BBAR','Q2CBAR','Q2DBAR'], ['GBAR','R_SBAR','SRCK','SRCLRBAR','RCK','SERR','S0','S1','SERL','A','B','C','D','D1A','D1B','D1C','D1D','QA','QB','QC','QD','CASC'], []).Logic('   R_SBAR    =  R_SBAR_I ;   S0        =  S0_I ;   S1        =  S1_I ;   SERR      =  SERR_I ;   SERL      =  SERL_I ;   SRCLRBAR  =  SRCLRBAR_I ;   SRCK      =  SRCK_I ;   RCK       =  RCK_I ;   GBAR      =  GBAR_I ;   A         =  A_I ;   B         =  B_I ;   C         =  C_I ;   D         =  D_I ;let    _S1_S0      =  !S1 & !S0 ;   _S1_S0      =  !S1 & !S0 ;let    _S1S0       =  !S1 & S0  ;   _S1S0       =  !S1 & S0  ;let    S1_S0       =  S1  & !S0 ;   S1_S0       =  S1  & !S0 ;let    S1S0        =  S1  & S0  ;   S1S0        =  S1  & S0  ;   D1A =  (S1S0 & A & SRCLRBAR)     | (S1_S0 & Q1B & SRCLRBAR)    |          (_S1S0 & SERR & SRCLRBAR) | (_S1_S0 & Q1A & SRCLRBAR) ;   D1B =  (S1S0 & B & SRCLRBAR)     | (S1_S0 & Q1C & SRCLRBAR)    |          (_S1S0 & Q1A & SRCLRBAR)    | (_S1_S0 & Q1B & SRCLRBAR) ;   D1C =  (S1S0 & C & SRCLRBAR)     | (S1_S0 & Q1D & SRCLRBAR)    |          (_S1S0 & Q1B & SRCLRBAR)    | (_S1_S0 & Q1C & SRCLRBAR) ;   D1D =  (S1S0 & D & SRCLRBAR)     | (S1_S0 & SERL & SRCLRBAR) |          (_S1S0 & Q1C & SRCLRBAR)    | (_S1_S0 & Q1D & SRCLRBAR) ;   QA =  !((Q2ABAR & R_SBAR) | (Q1ABAR & !R_SBAR)) ;   QB =  !((Q2BBAR & R_SBAR) | (Q1BBAR & !R_SBAR)) ;   QC =  !((Q2CBAR & R_SBAR) | (Q1CBAR & !R_SBAR)) ;   QD =  !((Q2DBAR & R_SBAR) | (Q1DBAR & !R_SBAR)) ;   CASC =  !((Q1DBAR & _S1S0   ) | (Q1ABAR & S1_S0   )) ;');
		Connect(this.ULS672LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS672LOG.pins.R_SBAR_I, this.pins.R_SBAR_I);
		Connect(this.ULS672LOG.pins.SRCK_I, this.pins.SRCK_I);
		Connect(this.ULS672LOG.pins.SRCLRBAR_I, this.pins.SRCLRBAR_I);
		Connect(this.ULS672LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS672LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.ULS672LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.ULS672LOG.pins.SERR_I, this.pins.SERR_I);
		Connect(this.ULS672LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS672LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS672LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS672LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS672LOG.pins.SERL_I, this.pins.SERL_I);
		let Q1A = new Pin();
		Connect(this.ULS672LOG.pins.Q1A, Q1A);
		let Q1B = new Pin();
		Connect(this.ULS672LOG.pins.Q1B, Q1B);
		let Q1C = new Pin();
		Connect(this.ULS672LOG.pins.Q1C, Q1C);
		let Q1D = new Pin();
		Connect(this.ULS672LOG.pins.Q1D, Q1D);
		let Q1ABAR = new Pin();
		Connect(this.ULS672LOG.pins.Q1ABAR, Q1ABAR);
		let Q1BBAR = new Pin();
		Connect(this.ULS672LOG.pins.Q1BBAR, Q1BBAR);
		let Q1CBAR = new Pin();
		Connect(this.ULS672LOG.pins.Q1CBAR, Q1CBAR);
		let Q1DBAR = new Pin();
		Connect(this.ULS672LOG.pins.Q1DBAR, Q1DBAR);
		let Q2ABAR = new Pin();
		Connect(this.ULS672LOG.pins.Q2ABAR, Q2ABAR);
		let Q2BBAR = new Pin();
		Connect(this.ULS672LOG.pins.Q2BBAR, Q2BBAR);
		let Q2CBAR = new Pin();
		Connect(this.ULS672LOG.pins.Q2CBAR, Q2CBAR);
		let Q2DBAR = new Pin();
		Connect(this.ULS672LOG.pins.Q2DBAR, Q2DBAR);
		let GBAR = new Pin();
		Connect(this.ULS672LOG.pins.GBAR, GBAR);
		let R_SBAR = new Pin();
		Connect(this.ULS672LOG.pins.R_SBAR, R_SBAR);
		let SRCK = new Pin();
		Connect(this.ULS672LOG.pins.SRCK, SRCK);
		let SRCLRBAR = new Pin();
		Connect(this.ULS672LOG.pins.SRCLRBAR, SRCLRBAR);
		let RCK = new Pin();
		Connect(this.ULS672LOG.pins.RCK, RCK);
		let SERR = new Pin();
		Connect(this.ULS672LOG.pins.SERR, SERR);
		let S0 = new Pin();
		Connect(this.ULS672LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.ULS672LOG.pins.S1, S1);
		let SERL = new Pin();
		Connect(this.ULS672LOG.pins.SERL, SERL);
		let A = new Pin();
		Connect(this.ULS672LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS672LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS672LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS672LOG.pins.D, D);
		let D1A = new Pin();
		Connect(this.ULS672LOG.pins.D1A, D1A);
		let D1B = new Pin();
		Connect(this.ULS672LOG.pins.D1B, D1B);
		let D1C = new Pin();
		Connect(this.ULS672LOG.pins.D1C, D1C);
		let D1D = new Pin();
		Connect(this.ULS672LOG.pins.D1D, D1D);
		let QA = new Pin();
		Connect(this.ULS672LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS672LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS672LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS672LOG.pins.QD, QD);
		let CASC = new Pin();
		Connect(this.ULS672LOG.pins.CASC, CASC);
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, SRCK);
		Connect(this.U1.pins.D0, D1A);
		Connect(this.U1.pins.D1, D1B);
		Connect(this.U1.pins.D2, D1C);
		Connect(this.U1.pins.D3, D1D);
		Connect(this.U1.pins.Q0, Q1A);
		Connect(this.U1.pins.Q1, Q1B);
		Connect(this.U1.pins.Q2, Q1C);
		Connect(this.U1.pins.Q3, Q1D);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		Connect(this.U2.pins.CLOCK, RCK);
		Connect(this.U2.pins.D0, Q1A);
		Connect(this.U2.pins.D1, Q1B);
		Connect(this.U2.pins.D2, Q1C);
		Connect(this.U2.pins.D3, Q1D);
		let Q2A = new Pin();
		Connect(this.U2.pins.Q0, Q2A);
		let Q2B = new Pin();
		Connect(this.U2.pins.Q1, Q2B);
		let Q2C = new Pin();
		Connect(this.U2.pins.Q2, Q2C);
		let Q2D = new Pin();
		Connect(this.U2.pins.Q3, Q2D);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(CASC, this.pins.CASC_O);
	}
}
/**
 * 8-BIT MAGNITUDE COMPARATORS
 */
class SN74LS684 extends Component {
	constructor() {
		super();
		this.pins = {
			P7_I: new Pin(),
			P6_I: new Pin(),
			P5_I: new Pin(),
			P4_I: new Pin(),
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Q7_I: new Pin(),
			Q6_I: new Pin(),
			Q5_I: new Pin(),
			Q4_I: new Pin(),
			Q3_I: new Pin(),
			Q2_I: new Pin(),
			Q1_I: new Pin(),
			Q0_I: new Pin(),
			PEQBAR_O: new Pin(),
			PGQBAR_O: new Pin(),
		}
		this.ULS684LOG = new logicexp(['P7_I','P6_I','P5_I','P4_I','P3_I','P2_I','P1_I','P0_I','Q7_I','Q6_I','Q5_I','Q4_I','Q3_I','Q2_I','Q1_I','Q0_I'], ['P7','P6','P5','P4','P3','P2','P1','P0','Q7','Q6','Q5','Q4','Q3','Q2','Q1','Q0','PEQBAR','PGQBAR'], []).Logic('   P7 =  P7_I ;   P6 =  P6_I ;   P5 =  P5_I ;   P4 =  P4_I ;   P3 =  P3_I ;   P2 =  P2_I ;   P1 =  P1_I ;   P0 =  P0_I ;   Q7 =  Q7_I ;   Q6 =  Q6_I ;   Q5 =  Q5_I ;   Q4 =  Q4_I ;   Q3 =  Q3_I ;   Q2 =  Q2_I ;   Q1 =  Q1_I ;   Q0 =  Q0_I ;let    PQ7    =  !(P7 ^ Q7) ;   PQ7    =  !(P7 ^ Q7) ;let    PQ6    =  !(P6 ^ Q6) ;   PQ6    =  !(P6 ^ Q6) ;let    PQ5    =  !(P5 ^ Q5) ;   PQ5    =  !(P5 ^ Q5) ;let    PQ4    =  !(P4 ^ Q4) ;   PQ4    =  !(P4 ^ Q4) ;let    PQ3    =  !(P3 ^ Q3) ;   PQ3    =  !(P3 ^ Q3) ;let    PQ2    =  !(P2 ^ Q2) ;   PQ2    =  !(P2 ^ Q2) ;let    PQ1    =  !(P1 ^ Q1) ;   PQ1    =  !(P1 ^ Q1) ;let    PQ0    =  !(P0 ^ Q0) ;   PQ0    =  !(P0 ^ Q0) ;let    PQ67   =  PQ6 & PQ7  ;   PQ67   =  PQ6 & PQ7  ;let    PQ57   =  PQ5 & PQ67 ;   PQ57   =  PQ5 & PQ67 ;let    PQ47   =  PQ4 & PQ57 ;   PQ47   =  PQ4 & PQ57 ;let    PQ37   =  PQ3 & PQ47 ;   PQ37   =  PQ3 & PQ47 ;let    PQ27   =  PQ2 & PQ37 ;   PQ27   =  PQ2 & PQ37 ;let    PQ17   =  PQ1 & PQ27 ;   PQ17   =  PQ1 & PQ27 ;   PEQBAR =  !(PQ7 & PQ6 & PQ5 & PQ4 & PQ3 & PQ2 & PQ1 & PQ0) ;   PGQBAR =  !((PQ17 & !Q0 & P0) | (PQ27 & !Q1 & P1) | (PQ37 & !Q2 & P2) |                (PQ47 & !Q3 & P3) | (PQ57 & !Q4 & P4) | (PQ67 & !Q5 & P5) |                (PQ7 & !Q6 & P6)  | (!Q7 & P7)) ;');
		Connect(this.ULS684LOG.pins.P7_I, this.pins.P7_I);
		Connect(this.ULS684LOG.pins.P6_I, this.pins.P6_I);
		Connect(this.ULS684LOG.pins.P5_I, this.pins.P5_I);
		Connect(this.ULS684LOG.pins.P4_I, this.pins.P4_I);
		Connect(this.ULS684LOG.pins.P3_I, this.pins.P3_I);
		Connect(this.ULS684LOG.pins.P2_I, this.pins.P2_I);
		Connect(this.ULS684LOG.pins.P1_I, this.pins.P1_I);
		Connect(this.ULS684LOG.pins.P0_I, this.pins.P0_I);
		Connect(this.ULS684LOG.pins.Q7_I, this.pins.Q7_I);
		Connect(this.ULS684LOG.pins.Q6_I, this.pins.Q6_I);
		Connect(this.ULS684LOG.pins.Q5_I, this.pins.Q5_I);
		Connect(this.ULS684LOG.pins.Q4_I, this.pins.Q4_I);
		Connect(this.ULS684LOG.pins.Q3_I, this.pins.Q3_I);
		Connect(this.ULS684LOG.pins.Q2_I, this.pins.Q2_I);
		Connect(this.ULS684LOG.pins.Q1_I, this.pins.Q1_I);
		Connect(this.ULS684LOG.pins.Q0_I, this.pins.Q0_I);
		let P7 = new Pin();
		Connect(this.ULS684LOG.pins.P7, P7);
		let P6 = new Pin();
		Connect(this.ULS684LOG.pins.P6, P6);
		let P5 = new Pin();
		Connect(this.ULS684LOG.pins.P5, P5);
		let P4 = new Pin();
		Connect(this.ULS684LOG.pins.P4, P4);
		let P3 = new Pin();
		Connect(this.ULS684LOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.ULS684LOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.ULS684LOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.ULS684LOG.pins.P0, P0);
		let Q7 = new Pin();
		Connect(this.ULS684LOG.pins.Q7, Q7);
		let Q6 = new Pin();
		Connect(this.ULS684LOG.pins.Q6, Q6);
		let Q5 = new Pin();
		Connect(this.ULS684LOG.pins.Q5, Q5);
		let Q4 = new Pin();
		Connect(this.ULS684LOG.pins.Q4, Q4);
		let Q3 = new Pin();
		Connect(this.ULS684LOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.ULS684LOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.ULS684LOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.ULS684LOG.pins.Q0, Q0);
		let PEQBAR = new Pin();
		Connect(this.ULS684LOG.pins.PEQBAR, PEQBAR);
		let PGQBAR = new Pin();
		Connect(this.ULS684LOG.pins.PGQBAR, PGQBAR);
		Connect(PEQBAR, this.pins.PEQBAR_O);
		Connect(PGQBAR, this.pins.PGQBAR_O);
	}
}
/**
 * 8-BIT MAGNITUDE_IDENTITY COMPARATOR WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS685 extends Component {
	constructor() {
		super();
		this.pins = {
			P7_I: new Pin(),
			P6_I: new Pin(),
			P5_I: new Pin(),
			P4_I: new Pin(),
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Q7_I: new Pin(),
			Q6_I: new Pin(),
			Q5_I: new Pin(),
			Q4_I: new Pin(),
			Q3_I: new Pin(),
			Q2_I: new Pin(),
			Q1_I: new Pin(),
			Q0_I: new Pin(),
			PEQBAR_O: new Pin(),
			PGQBAR_O: new Pin(),
		}
		this.ULS685LOG = new logicexp(['P7_I','P6_I','P5_I','P4_I','P3_I','P2_I','P1_I','P0_I','Q7_I','Q6_I','Q5_I','Q4_I','Q3_I','Q2_I','Q1_I','Q0_I'], ['P7','P6','P5','P4','P3','P2','P1','P0','Q7','Q6','Q5','Q4','Q3','Q2','Q1','Q0','PEQBAR','PGQBAR'], []).Logic('   P7 =  P7_I ;   P6 =  P6_I ;   P5 =  P5_I ;   P4 =  P4_I ;   P3 =  P3_I ;   P2 =  P2_I ;   P1 =  P1_I ;   P0 =  P0_I ;   Q7 =  Q7_I ;   Q6 =  Q6_I ;   Q5 =  Q5_I ;   Q4 =  Q4_I ;   Q3 =  Q3_I ;   Q2 =  Q2_I ;   Q1 =  Q1_I ;   Q0 =  Q0_I ;let    PQ7    =  !(P7 ^ Q7) ;   PQ7    =  !(P7 ^ Q7) ;let    PQ6    =  !(P6 ^ Q6) ;   PQ6    =  !(P6 ^ Q6) ;let    PQ5    =  !(P5 ^ Q5) ;   PQ5    =  !(P5 ^ Q5) ;let    PQ4    =  !(P4 ^ Q4) ;   PQ4    =  !(P4 ^ Q4) ;let    PQ3    =  !(P3 ^ Q3) ;   PQ3    =  !(P3 ^ Q3) ;let    PQ2    =  !(P2 ^ Q2) ;   PQ2    =  !(P2 ^ Q2) ;let    PQ1    =  !(P1 ^ Q1) ;   PQ1    =  !(P1 ^ Q1) ;let    PQ0    =  !(P0 ^ Q0) ;   PQ0    =  !(P0 ^ Q0) ;let    PQ67   =  PQ6 & PQ7  ;   PQ67   =  PQ6 & PQ7  ;let    PQ57   =  PQ5 & PQ67 ;   PQ57   =  PQ5 & PQ67 ;let    PQ47   =  PQ4 & PQ57 ;   PQ47   =  PQ4 & PQ57 ;let    PQ37   =  PQ3 & PQ47 ;   PQ37   =  PQ3 & PQ47 ;let    PQ27   =  PQ2 & PQ37 ;   PQ27   =  PQ2 & PQ37 ;let    PQ17   =  PQ1 & PQ27 ;   PQ17   =  PQ1 & PQ27 ;   PEQBAR =  !PQ17 ;   PGQBAR =  !((PQ17 & !Q0 & P0) | (PQ27 & !Q1 & P1) | (PQ37 & !Q2 & P2) |                (PQ47 & !Q3 & P3) | (PQ57 & !Q4 & P4) | (PQ67 & !Q5 & P5) |                (PQ7 & !Q6 & P6)  | (!Q7 & P7)) ;');
		Connect(this.ULS685LOG.pins.P7_I, this.pins.P7_I);
		Connect(this.ULS685LOG.pins.P6_I, this.pins.P6_I);
		Connect(this.ULS685LOG.pins.P5_I, this.pins.P5_I);
		Connect(this.ULS685LOG.pins.P4_I, this.pins.P4_I);
		Connect(this.ULS685LOG.pins.P3_I, this.pins.P3_I);
		Connect(this.ULS685LOG.pins.P2_I, this.pins.P2_I);
		Connect(this.ULS685LOG.pins.P1_I, this.pins.P1_I);
		Connect(this.ULS685LOG.pins.P0_I, this.pins.P0_I);
		Connect(this.ULS685LOG.pins.Q7_I, this.pins.Q7_I);
		Connect(this.ULS685LOG.pins.Q6_I, this.pins.Q6_I);
		Connect(this.ULS685LOG.pins.Q5_I, this.pins.Q5_I);
		Connect(this.ULS685LOG.pins.Q4_I, this.pins.Q4_I);
		Connect(this.ULS685LOG.pins.Q3_I, this.pins.Q3_I);
		Connect(this.ULS685LOG.pins.Q2_I, this.pins.Q2_I);
		Connect(this.ULS685LOG.pins.Q1_I, this.pins.Q1_I);
		Connect(this.ULS685LOG.pins.Q0_I, this.pins.Q0_I);
		let P7 = new Pin();
		Connect(this.ULS685LOG.pins.P7, P7);
		let P6 = new Pin();
		Connect(this.ULS685LOG.pins.P6, P6);
		let P5 = new Pin();
		Connect(this.ULS685LOG.pins.P5, P5);
		let P4 = new Pin();
		Connect(this.ULS685LOG.pins.P4, P4);
		let P3 = new Pin();
		Connect(this.ULS685LOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.ULS685LOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.ULS685LOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.ULS685LOG.pins.P0, P0);
		let Q7 = new Pin();
		Connect(this.ULS685LOG.pins.Q7, Q7);
		let Q6 = new Pin();
		Connect(this.ULS685LOG.pins.Q6, Q6);
		let Q5 = new Pin();
		Connect(this.ULS685LOG.pins.Q5, Q5);
		let Q4 = new Pin();
		Connect(this.ULS685LOG.pins.Q4, Q4);
		let Q3 = new Pin();
		Connect(this.ULS685LOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.ULS685LOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.ULS685LOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.ULS685LOG.pins.Q0, Q0);
		let PEQBAR = new Pin();
		Connect(this.ULS685LOG.pins.PEQBAR, PEQBAR);
		let PGQBAR = new Pin();
		Connect(this.ULS685LOG.pins.PGQBAR, PGQBAR);
		Connect(PEQBAR, this.pins.PEQBAR_O);
		Connect(PGQBAR, this.pins.PGQBAR_O);
	}
}
/**
 * 8-BIT MAGNITUDE COMPARATORS
 */
class SN74LS686 extends Component {
	constructor() {
		super();
		this.pins = {
			P7_I: new Pin(),
			P6_I: new Pin(),
			P5_I: new Pin(),
			P4_I: new Pin(),
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Q7_I: new Pin(),
			Q6_I: new Pin(),
			Q5_I: new Pin(),
			Q4_I: new Pin(),
			Q3_I: new Pin(),
			Q2_I: new Pin(),
			Q1_I: new Pin(),
			Q0_I: new Pin(),
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			PEQBAR_O: new Pin(),
			PGQBAR_O: new Pin(),
		}
		this.U1 = new bufa(16);
		this.ULS686LOG = new logicexp(['P7','P6','P5','P4','P3','P2','P1','P0','Q7','Q6','Q5','Q4','Q3','Q2','Q1','Q0','G1BAR_I','G2BAR_I'], ['G1BAR','G2BAR','PEQBAR','PGQBAR'], []).Logic('   G1BAR  =  G1BAR_I ;   G2BAR  =  G2BAR_I ;let    PQ7 =  !(P7 ^ Q7) ;   PQ7 =  !(P7 ^ Q7) ;let    PQ6 =  !(P6 ^ Q6) ;   PQ6 =  !(P6 ^ Q6) ;let    PQ5 =  !(P5 ^ Q5) ;   PQ5 =  !(P5 ^ Q5) ;let    PQ4 =  !(P4 ^ Q4) ;   PQ4 =  !(P4 ^ Q4) ;let    PQ3 =  !(P3 ^ Q3) ;   PQ3 =  !(P3 ^ Q3) ;let    PQ2 =  !(P2 ^ Q2) ;   PQ2 =  !(P2 ^ Q2) ;let    PQ1 =  !(P1 ^ Q1) ;   PQ1 =  !(P1 ^ Q1) ;let    PQ0 =  !(P0 ^ Q0) ;   PQ0 =  !(P0 ^ Q0) ;let    PQG76 =  PQ7 & PQ6 & !G2BAR ;   PQG76 =  PQ7 & PQ6 & !G2BAR ;let    PQG75 =  PQG76 & PQ5 ;   PQG75 =  PQG76 & PQ5 ;let    PQG74 =  PQG75 & PQ4 ;   PQG74 =  PQG75 & PQ4 ;let    PQG73 =  PQG74 & PQ3 ;   PQG73 =  PQG74 & PQ3 ;let    PQG72 =  PQG73 & PQ2 ;   PQG72 =  PQG73 & PQ2 ;let    PQG71 =  PQG72 & PQ1 ;   PQG71 =  PQG72 & PQ1 ;   PEQBAR =  !(PQ7 & PQ6 & PQ5 & PQ4 & PQ3 & PQ2 & PQ1 & PQ0 & !G1BAR) ;   PGQBAR =  !((PQG71 & !Q0 & P0) | (PQG72 & !Q1 & P1) |                (PQG73 & !Q2 & P2) | (PQG74 & !Q3 & P3) |                (PQG75 & !Q4 & P4) | (PQG76 & !Q5 & P5) |                (PQ7 & !G2BAR & !Q6 & P6) | (!G2BAR & !Q7 & P7)) ;');
		let P7 = new Pin();
		Connect(this.ULS686LOG.pins.P7, P7);
		let P6 = new Pin();
		Connect(this.ULS686LOG.pins.P6, P6);
		let P5 = new Pin();
		Connect(this.ULS686LOG.pins.P5, P5);
		let P4 = new Pin();
		Connect(this.ULS686LOG.pins.P4, P4);
		let P3 = new Pin();
		Connect(this.ULS686LOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.ULS686LOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.ULS686LOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.ULS686LOG.pins.P0, P0);
		let Q7 = new Pin();
		Connect(this.ULS686LOG.pins.Q7, Q7);
		let Q6 = new Pin();
		Connect(this.ULS686LOG.pins.Q6, Q6);
		let Q5 = new Pin();
		Connect(this.ULS686LOG.pins.Q5, Q5);
		let Q4 = new Pin();
		Connect(this.ULS686LOG.pins.Q4, Q4);
		let Q3 = new Pin();
		Connect(this.ULS686LOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.ULS686LOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.ULS686LOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.ULS686LOG.pins.Q0, Q0);
		Connect(this.ULS686LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS686LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		let G1BAR = new Pin();
		Connect(this.ULS686LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS686LOG.pins.G2BAR, G2BAR);
		let PEQBAR = new Pin();
		Connect(this.ULS686LOG.pins.PEQBAR, PEQBAR);
		let PGQBAR = new Pin();
		Connect(this.ULS686LOG.pins.PGQBAR, PGQBAR);
		Connect(PEQBAR, this.pins.PEQBAR_O);
		Connect(PGQBAR, this.pins.PGQBAR_O);
	}
}
/**
 * 8-BIT MAGNITUDE_IDENTITY COMPARATORS WITH OPEN-COLLECTOR OUTPUTS
 */
class SN74LS687 extends Component {
	constructor() {
		super();
		this.pins = {
			P7_I: new Pin(),
			P6_I: new Pin(),
			P5_I: new Pin(),
			P4_I: new Pin(),
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Q7_I: new Pin(),
			Q6_I: new Pin(),
			Q5_I: new Pin(),
			Q4_I: new Pin(),
			Q3_I: new Pin(),
			Q2_I: new Pin(),
			Q1_I: new Pin(),
			Q0_I: new Pin(),
			G1BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			PEQBAR_O: new Pin(),
			PGQBAR_O: new Pin(),
		}
		this.U1 = new bufa(16);
		this.ULS687LOG = new logicexp(['P7','P6','P5','P4','P3','P2','P1','P0','Q7','Q6','Q5','Q4','Q3','Q2','Q1','Q0','G1BAR_I','G2BAR_I'], ['G1BAR','G2BAR','PEQBAR','PGQBAR'], []).Logic('   G1BAR  =  G1BAR_I ;   G2BAR  =  G2BAR_I ;let    PQ7 =  !(!P7 ^ !Q7) ;   PQ7 =  !(!P7 ^ !Q7) ;let    PQ6 =  !(!P6 ^ !Q6) ;   PQ6 =  !(!P6 ^ !Q6) ;let    PQ5 =  !(!P5 ^ !Q5) ;   PQ5 =  !(!P5 ^ !Q5) ;let    PQ4 =  !(!P4 ^ !Q4) ;   PQ4 =  !(!P4 ^ !Q4) ;let    PQ3 =  !(!P3 ^ !Q3) ;   PQ3 =  !(!P3 ^ !Q3) ;let    PQ2 =  !(!P2 ^ !Q2) ;   PQ2 =  !(!P2 ^ !Q2) ;let    PQ1 =  !(!P1 ^ !Q1) ;   PQ1 =  !(!P1 ^ !Q1) ;let    PQ0 =  !(!P0 ^ !Q0) ;   PQ0 =  !(!P0 ^ !Q0) ;let    PQG76 =  PQ7 & PQ6 & !G2BAR ;   PQG76 =  PQ7 & PQ6 & !G2BAR ;let    PQG75 =  PQG76 & PQ5 ;   PQG75 =  PQG76 & PQ5 ;let    PQG74 =  PQG75 & PQ4 ;   PQG74 =  PQG75 & PQ4 ;let    PQG73 =  PQG74 & PQ3 ;   PQG73 =  PQG74 & PQ3 ;let    PQG72 =  PQG73 & PQ2 ;   PQG72 =  PQG73 & PQ2 ;let    PQG71 =  PQG72 & PQ1 ;   PQG71 =  PQG72 & PQ1 ;   PEQBAR =  !(PQ7 & PQ6 & PQ5 & PQ4 & PQ3 & PQ2 & PQ1 & PQ0 & !G1BAR) ;   PGQBAR =  !((PQG71 & !Q0 & P0) | (PQG72 & !Q1 & P1) |                (PQG73 & !Q2 & P2) | (PQG74 & !Q3 & P3) |                (PQG75 & !Q4 & P4) | (PQG76 & !Q5 & P5) |                (PQ7 & !G2BAR & !Q6 & P6) | (!G2BAR & !Q7 & P7)) ;');
		let P7 = new Pin();
		Connect(this.ULS687LOG.pins.P7, P7);
		let P6 = new Pin();
		Connect(this.ULS687LOG.pins.P6, P6);
		let P5 = new Pin();
		Connect(this.ULS687LOG.pins.P5, P5);
		let P4 = new Pin();
		Connect(this.ULS687LOG.pins.P4, P4);
		let P3 = new Pin();
		Connect(this.ULS687LOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.ULS687LOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.ULS687LOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.ULS687LOG.pins.P0, P0);
		let Q7 = new Pin();
		Connect(this.ULS687LOG.pins.Q7, Q7);
		let Q6 = new Pin();
		Connect(this.ULS687LOG.pins.Q6, Q6);
		let Q5 = new Pin();
		Connect(this.ULS687LOG.pins.Q5, Q5);
		let Q4 = new Pin();
		Connect(this.ULS687LOG.pins.Q4, Q4);
		let Q3 = new Pin();
		Connect(this.ULS687LOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.ULS687LOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.ULS687LOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.ULS687LOG.pins.Q0, Q0);
		Connect(this.ULS687LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.ULS687LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		let G1BAR = new Pin();
		Connect(this.ULS687LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.ULS687LOG.pins.G2BAR, G2BAR);
		let PEQBAR = new Pin();
		Connect(this.ULS687LOG.pins.PEQBAR, PEQBAR);
		let PGQBAR = new Pin();
		Connect(this.ULS687LOG.pins.PGQBAR, PGQBAR);
		Connect(PEQBAR, this.pins.PEQBAR_O);
		Connect(PGQBAR, this.pins.PGQBAR_O);
	}
}
/**
 * 8-BIT IDENTITY COMPARATORS
 */
class SN74LS688 extends Component {
	constructor() {
		super();
		this.pins = {
			P7_I: new Pin(),
			P6_I: new Pin(),
			P5_I: new Pin(),
			P4_I: new Pin(),
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Q7_I: new Pin(),
			Q6_I: new Pin(),
			Q5_I: new Pin(),
			Q4_I: new Pin(),
			Q3_I: new Pin(),
			Q2_I: new Pin(),
			Q1_I: new Pin(),
			Q0_I: new Pin(),
			GBAR_I: new Pin(),
			PEQBAR_O: new Pin(),
		}
		this.U1 = new bufa(16);
		this.ULS688LOG = new logicexp(['GBAR_I','P7','P6','P5','P4','P3','P2','P1','P0','Q7','Q6','Q5','Q4','Q3','Q2','Q1','Q0'], ['GBAR','PEQBAR'], []).Logic('   GBAR =  GBAR_I ;let    PEQ7 =  !(!P7 ^ !Q7) ;   PEQ7 =  !(!P7 ^ !Q7) ;let    PEQ6 =  !(!P6 ^ !Q6) ;   PEQ6 =  !(!P6 ^ !Q6) ;let    PEQ5 =  !(!P5 ^ !Q5) ;   PEQ5 =  !(!P5 ^ !Q5) ;let    PEQ4 =  !(!P4 ^ !Q4) ;   PEQ4 =  !(!P4 ^ !Q4) ;let    PEQ3 =  !(!P3 ^ !Q3) ;   PEQ3 =  !(!P3 ^ !Q3) ;let    PEQ2 =  !(!P2 ^ !Q2) ;   PEQ2 =  !(!P2 ^ !Q2) ;let    PEQ1 =  !(!P1 ^ !Q1) ;   PEQ1 =  !(!P1 ^ !Q1) ;let    PEQ0 =  !(!P0 ^ !Q0) ;   PEQ0 =  !(!P0 ^ !Q0) ;   PEQBAR =  !(PEQ7 & PEQ6 & PEQ5 & PEQ4 & PEQ3 & PEQ2 & PEQ1 & PEQ0 & !GBAR) ;');
		Connect(this.ULS688LOG.pins.GBAR_I, this.pins.GBAR_I);
		let P7 = new Pin();
		Connect(this.ULS688LOG.pins.P7, P7);
		let P6 = new Pin();
		Connect(this.ULS688LOG.pins.P6, P6);
		let P5 = new Pin();
		Connect(this.ULS688LOG.pins.P5, P5);
		let P4 = new Pin();
		Connect(this.ULS688LOG.pins.P4, P4);
		let P3 = new Pin();
		Connect(this.ULS688LOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.ULS688LOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.ULS688LOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.ULS688LOG.pins.P0, P0);
		let Q7 = new Pin();
		Connect(this.ULS688LOG.pins.Q7, Q7);
		let Q6 = new Pin();
		Connect(this.ULS688LOG.pins.Q6, Q6);
		let Q5 = new Pin();
		Connect(this.ULS688LOG.pins.Q5, Q5);
		let Q4 = new Pin();
		Connect(this.ULS688LOG.pins.Q4, Q4);
		let Q3 = new Pin();
		Connect(this.ULS688LOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.ULS688LOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.ULS688LOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.ULS688LOG.pins.Q0, Q0);
		let GBAR = new Pin();
		Connect(this.ULS688LOG.pins.GBAR, GBAR);
		let PEQBAR = new Pin();
		Connect(this.ULS688LOG.pins.PEQBAR, PEQBAR);
		Connect(PEQBAR, this.pins.PEQBAR_O);
	}
}
/**
 * 8-BIT IDENTITY COMPARATORS
 */
class SN74LS689 extends Component {
	constructor() {
		super();
		this.pins = {
			P7_I: new Pin(),
			P6_I: new Pin(),
			P5_I: new Pin(),
			P4_I: new Pin(),
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Q7_I: new Pin(),
			Q6_I: new Pin(),
			Q5_I: new Pin(),
			Q4_I: new Pin(),
			Q3_I: new Pin(),
			Q2_I: new Pin(),
			Q1_I: new Pin(),
			Q0_I: new Pin(),
			GBAR_I: new Pin(),
			PEQBAR_O: new Pin(),
		}
		this.U1 = new bufa(16);
		this.ULS689LOG = new logicexp(['GBAR_I','P7','P6','P5','P4','P3','P2','P1','P0','Q7','Q6','Q5','Q4','Q3','Q2','Q1','Q0'], ['GBAR','PEQBAR'], []).Logic('   GBAR =  GBAR_I ;let    PEQ7 =  !(!P7 ^ !Q7) ;   PEQ7 =  !(!P7 ^ !Q7) ;let    PEQ6 =  !(!P6 ^ !Q6) ;   PEQ6 =  !(!P6 ^ !Q6) ;let    PEQ5 =  !(!P5 ^ !Q5) ;   PEQ5 =  !(!P5 ^ !Q5) ;let    PEQ4 =  !(!P4 ^ !Q4) ;   PEQ4 =  !(!P4 ^ !Q4) ;let    PEQ3 =  !(!P3 ^ !Q3) ;   PEQ3 =  !(!P3 ^ !Q3) ;let    PEQ2 =  !(!P2 ^ !Q2) ;   PEQ2 =  !(!P2 ^ !Q2) ;let    PEQ1 =  !(!P1 ^ !Q1) ;   PEQ1 =  !(!P1 ^ !Q1) ;let    PEQ0 =  !(!P0 ^ !Q0) ;   PEQ0 =  !(!P0 ^ !Q0) ;   PEQBAR =  !(PEQ7 & PEQ6 & PEQ5 & PEQ4 & PEQ3 & PEQ2 & PEQ1 & PEQ0 & !GBAR) ;');
		Connect(this.ULS689LOG.pins.GBAR_I, this.pins.GBAR_I);
		let P7 = new Pin();
		Connect(this.ULS689LOG.pins.P7, P7);
		let P6 = new Pin();
		Connect(this.ULS689LOG.pins.P6, P6);
		let P5 = new Pin();
		Connect(this.ULS689LOG.pins.P5, P5);
		let P4 = new Pin();
		Connect(this.ULS689LOG.pins.P4, P4);
		let P3 = new Pin();
		Connect(this.ULS689LOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.ULS689LOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.ULS689LOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.ULS689LOG.pins.P0, P0);
		let Q7 = new Pin();
		Connect(this.ULS689LOG.pins.Q7, Q7);
		let Q6 = new Pin();
		Connect(this.ULS689LOG.pins.Q6, Q6);
		let Q5 = new Pin();
		Connect(this.ULS689LOG.pins.Q5, Q5);
		let Q4 = new Pin();
		Connect(this.ULS689LOG.pins.Q4, Q4);
		let Q3 = new Pin();
		Connect(this.ULS689LOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.ULS689LOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.ULS689LOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.ULS689LOG.pins.Q0, Q0);
		let GBAR = new Pin();
		Connect(this.ULS689LOG.pins.GBAR, GBAR);
		let PEQBAR = new Pin();
		Connect(this.ULS689LOG.pins.PEQBAR, PEQBAR);
		Connect(PEQBAR, this.pins.PEQBAR_O);
	}
}
class SN74LS690 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_CBAR_I: new Pin(),
			RCLRBAR_I: new Pin(),
			RCK_I: new Pin(),
			CCLRBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			ENP_I: new Pin(),
			ENT_I: new Pin(),
			CCK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCO_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		let CCLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CCLRBAR);
		let CCK = new Pin();
		Connect(this.U1.pins.CLOCK, CCK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let CA = new Pin();
		Connect(this.U1.pins.Q0, CA);
		let CB = new Pin();
		Connect(this.U1.pins.Q1, CB);
		let CC = new Pin();
		Connect(this.U1.pins.Q2, CC);
		let CD = new Pin();
		Connect(this.U1.pins.Q3, CD);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		let RCLRBAR = new Pin();
		Connect(this.U2.pins.CLEAR, RCLRBAR);
		let RCK = new Pin();
		Connect(this.U2.pins.CLOCK, RCK);
		Connect(this.U2.pins.D0, CA);
		Connect(this.U2.pins.D1, CB);
		Connect(this.U2.pins.D2, CC);
		Connect(this.U2.pins.D3, CD);
		let _D_NC = new Pin();
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		this.ULS690LOG = new logicexp(['GBAR_I','R_CBAR_I','RCLRBAR_I','RCK_I','CCLRBAR_I','LOADBAR_I','ENP_I','ENT_I','CCK_I','A_I','B_I','C_I','D_I','CA','CB','CC','CD','CABAR','CBBAR','CCBAR','CDBAR','RABAR','RBBAR','RCBAR','RDBAR'], ['GBAR','R_CBAR','RCLRBAR','RCK','CCLRBAR','LOADBAR','ENP','ENT','CCK','A','B','C','D','DA','DB','DC','DD','QA','QB','QC','QD','RCO','IEN'], []).Logic('   GBAR =  GBAR_I ;   R_CBAR =  R_CBAR_I ;   RCLRBAR =  RCLRBAR_I ;   RCK =  RCK_I ;   CCLRBAR =  CCLRBAR_I ;   LOADBAR =  LOADBAR_I ;   ENP =  ENP_I ;   ENT =  ENT_I ;   CCK =  CCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  LOADBAR & ENP & ENT ;let    IA1 =  CA & IEN ;   IA1 =  CA & IEN ;let    IA2 =  !IEN & LOADBAR & CABAR ;   IA2 =  !IEN & LOADBAR & CABAR ;let    IB1 =  CB & IEN & !CABAR ;   IB1 =  CB & IEN & !CABAR ;let    IB2 =  (!IEN | CABAR) & LOADBAR & CBBAR ;   IB2 =  (!IEN | CABAR) & LOADBAR & CBBAR ;let    IB3 =  IEN & !CABAR & CCBAR & !CDBAR ;   IB3 =  IEN & !CABAR & CCBAR & !CDBAR ;let    IC1 =  CC & IEN & !CABAR & !CBBAR ;   IC1 =  CC & IEN & !CABAR & !CBBAR ;let    IC2 =  (!IEN | CABAR | CBBAR) & LOADBAR & CCBAR ;   IC2 =  (!IEN | CABAR | CBBAR) & LOADBAR & CCBAR ;let    IC3 =  IEN & !CABAR & !CBBAR & !CDBAR ;   IC3 =  IEN & !CABAR & !CBBAR & !CDBAR ;let    ID1 =  CD & IEN & !CABAR ;   ID1 =  CD & IEN & !CABAR ;let    ID2 =  (!IEN | CABAR | CBBAR | CCBAR) & LOADBAR & CDBAR ;   ID2 =  (!IEN | CABAR | CBBAR | CCBAR) & LOADBAR & CDBAR ;   DA =  !(IA1 | IA2 | !(LOADBAR | A)) ;   DB =  !(IB1 | IB2 | IB3 | !(LOADBAR | B)) ;   DC =  !(IC1 | IC2 | IC3 | !(LOADBAR | C)) ;   DD =  !(ID1 | ID2 | !(LOADBAR | D)) ;   QA =  !((R_CBAR & RABAR) | (!R_CBAR & CABAR)) ;   QB =  !((R_CBAR & RBBAR)   | (!R_CBAR & CBBAR)) ;   QC =  !((R_CBAR & RCBAR)   | (!R_CBAR & CCBAR)) ;   QD =  !((R_CBAR & RDBAR)   | (!R_CBAR & CDBAR)) ;   RCO =  !(!ENT | CABAR | CDBAR) ;');
		Connect(this.ULS690LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS690LOG.pins.R_CBAR_I, this.pins.R_CBAR_I);
		Connect(this.ULS690LOG.pins.RCLRBAR_I, this.pins.RCLRBAR_I);
		Connect(this.ULS690LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS690LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS690LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS690LOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.ULS690LOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.ULS690LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS690LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS690LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS690LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS690LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS690LOG.pins.CA, CA);
		Connect(this.ULS690LOG.pins.CB, CB);
		Connect(this.ULS690LOG.pins.CC, CC);
		Connect(this.ULS690LOG.pins.CD, CD);
		let CABAR = new Pin();
		Connect(this.ULS690LOG.pins.CABAR, CABAR);
		let CBBAR = new Pin();
		Connect(this.ULS690LOG.pins.CBBAR, CBBAR);
		let CCBAR = new Pin();
		Connect(this.ULS690LOG.pins.CCBAR, CCBAR);
		let CDBAR = new Pin();
		Connect(this.ULS690LOG.pins.CDBAR, CDBAR);
		let RABAR = new Pin();
		Connect(this.ULS690LOG.pins.RABAR, RABAR);
		let RBBAR = new Pin();
		Connect(this.ULS690LOG.pins.RBBAR, RBBAR);
		let RCBAR = new Pin();
		Connect(this.ULS690LOG.pins.RCBAR, RCBAR);
		let RDBAR = new Pin();
		Connect(this.ULS690LOG.pins.RDBAR, RDBAR);
		let GBAR = new Pin();
		Connect(this.ULS690LOG.pins.GBAR, GBAR);
		let R_CBAR = new Pin();
		Connect(this.ULS690LOG.pins.R_CBAR, R_CBAR);
		Connect(this.ULS690LOG.pins.RCLRBAR, RCLRBAR);
		Connect(this.ULS690LOG.pins.RCK, RCK);
		Connect(this.ULS690LOG.pins.CCLRBAR, CCLRBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS690LOG.pins.LOADBAR, LOADBAR);
		let ENP = new Pin();
		Connect(this.ULS690LOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.ULS690LOG.pins.ENT, ENT);
		Connect(this.ULS690LOG.pins.CCK, CCK);
		let A = new Pin();
		Connect(this.ULS690LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS690LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS690LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS690LOG.pins.D, D);
		Connect(this.ULS690LOG.pins.DA, DA);
		Connect(this.ULS690LOG.pins.DB, DB);
		Connect(this.ULS690LOG.pins.DC, DC);
		Connect(this.ULS690LOG.pins.DD, DD);
		let QA = new Pin();
		Connect(this.ULS690LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS690LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS690LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS690LOG.pins.QD, QD);
		let RCO = new Pin();
		Connect(this.ULS690LOG.pins.RCO, RCO);
		let IEN = new Pin();
		Connect(this.ULS690LOG.pins.IEN, IEN);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCO, this.pins.RCO_O);
	}
}
class SN74LS691 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_CBAR_I: new Pin(),
			RCLRBAR_I: new Pin(),
			RCK_I: new Pin(),
			CCLRBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			ENP_I: new Pin(),
			ENT_I: new Pin(),
			CCK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCO_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		let CCLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CCLRBAR);
		let CCK = new Pin();
		Connect(this.U1.pins.CLOCK, CCK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let CA = new Pin();
		Connect(this.U1.pins.Q0, CA);
		let CB = new Pin();
		Connect(this.U1.pins.Q1, CB);
		let CC = new Pin();
		Connect(this.U1.pins.Q2, CC);
		let CD = new Pin();
		Connect(this.U1.pins.Q3, CD);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		let RCLRBAR = new Pin();
		Connect(this.U2.pins.CLEAR, RCLRBAR);
		let RCK = new Pin();
		Connect(this.U2.pins.CLOCK, RCK);
		Connect(this.U2.pins.D0, CA);
		Connect(this.U2.pins.D1, CB);
		Connect(this.U2.pins.D2, CC);
		Connect(this.U2.pins.D3, CD);
		let _D_NC = new Pin();
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		this.ULS691LOG = new logicexp(['GBAR_I','R_CBAR_I','RCLRBAR_I','RCK_I','CCLRBAR_I','LOADBAR_I','ENP_I','ENT_I','CCK_I','A_I','B_I','C_I','D_I','CA','CB','CC','CD','CABAR','CBBAR','CCBAR','CDBAR','RABAR','RBBAR','RCBAR','RDBAR'], ['GBAR','R_CBAR','RCLRBAR','RCK','CCLRBAR','LOADBAR','ENP','ENT','CCK','A','B','C','D','DA','DB','DC','DD','QA','QB','QC','QD','RCO','IEN'], []).Logic('   GBAR =  GBAR_I ;   R_CBAR =  R_CBAR_I ;   RCLRBAR =  RCLRBAR_I ;   RCK =  RCK_I ;   CCLRBAR =  CCLRBAR_I ;   LOADBAR =  LOADBAR_I ;   ENP =  ENP_I ;   ENT =  ENT_I ;   CCK =  CCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  LOADBAR & ENP & ENT ;let    IA1 =  CA & IEN ;   IA1 =  CA & IEN ;let    IA2 =  !IEN & LOADBAR & CABAR ;   IA2 =  !IEN & LOADBAR & CABAR ;let    IB1 =  CB & IEN & !CABAR ;   IB1 =  CB & IEN & !CABAR ;let    IB2 =  (!IEN | CABAR) & LOADBAR & CBBAR ;   IB2 =  (!IEN | CABAR) & LOADBAR & CBBAR ;let    IC1 =  CC & IEN & !CABAR & !CBBAR ;   IC1 =  CC & IEN & !CABAR & !CBBAR ;let    IC2 =  (!IEN | CABAR | CBBAR) & LOADBAR & CCBAR ;   IC2 =  (!IEN | CABAR | CBBAR) & LOADBAR & CCBAR ;let    ID1 =  CD & IEN & !CABAR & !CBBAR & !CCBAR ;   ID1 =  CD & IEN & !CABAR & !CBBAR & !CCBAR ;let    ID2 =  (!IEN | CABAR | CBBAR | CCBAR) & LOADBAR & CDBAR ;   ID2 =  (!IEN | CABAR | CBBAR | CCBAR) & LOADBAR & CDBAR ;   DA =  !(IA1 | IA2 | !(LOADBAR | A)) ;   DB =  !(IB1 | IB2 | !(LOADBAR | B)) ;   DC =  !(IC1 | IC2 | !(LOADBAR | C)) ;   DD =  !(ID1 | ID2 | !(LOADBAR | D)) ;   QA =  !((R_CBAR & RABAR) | (!R_CBAR & CABAR)) ;   QB =  !((R_CBAR & RBBAR)  | (!R_CBAR & CBBAR)) ;   QC =  !((R_CBAR & RCBAR)  | (!R_CBAR & CCBAR)) ;   QD =  !((R_CBAR & RDBAR)  | (!R_CBAR & CDBAR)) ;   RCO =  !(!ENT | CABAR | CBBAR | CCBAR | CDBAR) ;');
		Connect(this.ULS691LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS691LOG.pins.R_CBAR_I, this.pins.R_CBAR_I);
		Connect(this.ULS691LOG.pins.RCLRBAR_I, this.pins.RCLRBAR_I);
		Connect(this.ULS691LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS691LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS691LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS691LOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.ULS691LOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.ULS691LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS691LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS691LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS691LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS691LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS691LOG.pins.CA, CA);
		Connect(this.ULS691LOG.pins.CB, CB);
		Connect(this.ULS691LOG.pins.CC, CC);
		Connect(this.ULS691LOG.pins.CD, CD);
		let CABAR = new Pin();
		Connect(this.ULS691LOG.pins.CABAR, CABAR);
		let CBBAR = new Pin();
		Connect(this.ULS691LOG.pins.CBBAR, CBBAR);
		let CCBAR = new Pin();
		Connect(this.ULS691LOG.pins.CCBAR, CCBAR);
		let CDBAR = new Pin();
		Connect(this.ULS691LOG.pins.CDBAR, CDBAR);
		let RABAR = new Pin();
		Connect(this.ULS691LOG.pins.RABAR, RABAR);
		let RBBAR = new Pin();
		Connect(this.ULS691LOG.pins.RBBAR, RBBAR);
		let RCBAR = new Pin();
		Connect(this.ULS691LOG.pins.RCBAR, RCBAR);
		let RDBAR = new Pin();
		Connect(this.ULS691LOG.pins.RDBAR, RDBAR);
		let GBAR = new Pin();
		Connect(this.ULS691LOG.pins.GBAR, GBAR);
		let R_CBAR = new Pin();
		Connect(this.ULS691LOG.pins.R_CBAR, R_CBAR);
		Connect(this.ULS691LOG.pins.RCLRBAR, RCLRBAR);
		Connect(this.ULS691LOG.pins.RCK, RCK);
		Connect(this.ULS691LOG.pins.CCLRBAR, CCLRBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS691LOG.pins.LOADBAR, LOADBAR);
		let ENP = new Pin();
		Connect(this.ULS691LOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.ULS691LOG.pins.ENT, ENT);
		Connect(this.ULS691LOG.pins.CCK, CCK);
		let A = new Pin();
		Connect(this.ULS691LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS691LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS691LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS691LOG.pins.D, D);
		Connect(this.ULS691LOG.pins.DA, DA);
		Connect(this.ULS691LOG.pins.DB, DB);
		Connect(this.ULS691LOG.pins.DC, DC);
		Connect(this.ULS691LOG.pins.DD, DD);
		let QA = new Pin();
		Connect(this.ULS691LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS691LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS691LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS691LOG.pins.QD, QD);
		let RCO = new Pin();
		Connect(this.ULS691LOG.pins.RCO, RCO);
		let IEN = new Pin();
		Connect(this.ULS691LOG.pins.IEN, IEN);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCO, this.pins.RCO_O);
	}
}
class SN74LS692 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_CBAR_I: new Pin(),
			RCLRBAR_I: new Pin(),
			RCK_I: new Pin(),
			CCLRBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			ENP_I: new Pin(),
			ENT_I: new Pin(),
			CCK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCO_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CCK = new Pin();
		Connect(this.U1.pins.CLOCK, CCK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let IQA = new Pin();
		Connect(this.U1.pins.Q0, IQA);
		let IQB = new Pin();
		Connect(this.U1.pins.Q1, IQB);
		let IQC = new Pin();
		Connect(this.U1.pins.Q2, IQC);
		let IQD = new Pin();
		Connect(this.U1.pins.Q3, IQD);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		let RCK = new Pin();
		Connect(this.U2.pins.CLOCK, RCK);
		let CA = new Pin();
		Connect(this.U2.pins.D0, CA);
		let CB = new Pin();
		Connect(this.U2.pins.D1, CB);
		let CC = new Pin();
		Connect(this.U2.pins.D2, CC);
		let CD = new Pin();
		Connect(this.U2.pins.D3, CD);
		let _D_NC = new Pin();
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		this.ULS692LOG = new logicexp(['GBAR_I','R_CBAR_I','RCLRBAR_I','RCK_I','CCLRBAR_I','LOADBAR_I','ENP_I','ENT_I','CCK_I','A_I','B_I','C_I','D_I','IQA','IQB','IQC','IQD','IQABAR','IQBBAR','IQCBAR','IQDBAR','RABAR','RBBAR','RCBAR','RDBAR'], ['GBAR','R_CBAR','RCLRBAR','RCK','CCLRBAR','LOADBAR','ENP','ENT','CCK','A','B','C','D','DA','DB','DC','DD','CA','CB','CC','CD','QA','QB','QC','QD','RCO','IEN'], []).Logic('   GBAR =  GBAR_I ;   R_CBAR =  R_CBAR_I ;   RCLRBAR =  RCLRBAR_I ;   RCK =  RCK_I ;   CCLRBAR =  CCLRBAR_I ;   LOADBAR =  LOADBAR_I ;   ENP =  ENP_I ;   ENT =  ENT_I ;   CCK =  CCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  LOADBAR & ENP & ENT ;let    ICL =  !CCLRBAR ;   ICL =  !CCLRBAR ;let    IA1 =  IQA & IEN ;   IA1 =  IQA & IEN ;let    IA2 =  !IEN & LOADBAR & IQABAR ;   IA2 =  !IEN & LOADBAR & IQABAR ;let    IA3 =  ICL | !(LOADBAR | A) ;   IA3 =  ICL | !(LOADBAR | A) ;let    IB1 =  IQB & IEN & !IQABAR ;   IB1 =  IQB & IEN & !IQABAR ;let    IB2 =  (!IEN | IQABAR) & LOADBAR & IQBBAR ;   IB2 =  (!IEN | IQABAR) & LOADBAR & IQBBAR ;let    IB3 =  ICL | !(LOADBAR | B) ;   IB3 =  ICL | !(LOADBAR | B) ;let    IB4 =  IEN & !IQABAR & IQCBAR & !IQDBAR ;   IB4 =  IEN & !IQABAR & IQCBAR & !IQDBAR ;let    IC1 =  IQC & IEN & !IQABAR & !IQBBAR ;   IC1 =  IQC & IEN & !IQABAR & !IQBBAR ;let    IC2 =  (!IEN | IQABAR | IQBBAR) & LOADBAR & IQCBAR ;   IC2 =  (!IEN | IQABAR | IQBBAR) & LOADBAR & IQCBAR ;let    IC3 =  ICL | !(LOADBAR | C) ;   IC3 =  ICL | !(LOADBAR | C) ;let    IC4 =  IEN & !IQABAR & !IQBBAR & !IQDBAR ;   IC4 =  IEN & !IQABAR & !IQBBAR & !IQDBAR ;let    ID1 =  IQD & IEN & !IQABAR ;   ID1 =  IQD & IEN & !IQABAR ;let    ID2 =  (!IEN | IQABAR | IQBBAR | IQCBAR) & LOADBAR & IQDBAR ;   ID2 =  (!IEN | IQABAR | IQBBAR | IQCBAR) & LOADBAR & IQDBAR ;let    ID3 =  ICL | !(LOADBAR | D) ;   ID3 =  ICL | !(LOADBAR | D) ;   DA =  !(IA1 | IA2 | IA3) ;   DB =  !(IB1 | IB2 | IB3 | IB4) ;   DC =  !(IC1 | IC2 | IC3 | IC4) ;   DD =  !(ID1 | ID2 | ID3) ;   CA =  IQA & RCLRBAR ;   CB =  IQB & RCLRBAR ;   CC =  IQC & RCLRBAR ;   CD =  IQD & RCLRBAR ;   QA =  !((R_CBAR & RABAR) | (!R_CBAR & IQABAR)) ;   QB =  !((R_CBAR & RBBAR)   | (!R_CBAR & IQBBAR)) ;   QC =  !((R_CBAR & RCBAR)   | (!R_CBAR & IQCBAR)) ;   QD =  !((R_CBAR & RDBAR)   | (!R_CBAR & IQDBAR)) ;   RCO =  !(!ENT | IQABAR | IQDBAR) ;');
		Connect(this.ULS692LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS692LOG.pins.R_CBAR_I, this.pins.R_CBAR_I);
		Connect(this.ULS692LOG.pins.RCLRBAR_I, this.pins.RCLRBAR_I);
		Connect(this.ULS692LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS692LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS692LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS692LOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.ULS692LOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.ULS692LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS692LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS692LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS692LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS692LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS692LOG.pins.IQA, IQA);
		Connect(this.ULS692LOG.pins.IQB, IQB);
		Connect(this.ULS692LOG.pins.IQC, IQC);
		Connect(this.ULS692LOG.pins.IQD, IQD);
		let IQABAR = new Pin();
		Connect(this.ULS692LOG.pins.IQABAR, IQABAR);
		let IQBBAR = new Pin();
		Connect(this.ULS692LOG.pins.IQBBAR, IQBBAR);
		let IQCBAR = new Pin();
		Connect(this.ULS692LOG.pins.IQCBAR, IQCBAR);
		let IQDBAR = new Pin();
		Connect(this.ULS692LOG.pins.IQDBAR, IQDBAR);
		let RABAR = new Pin();
		Connect(this.ULS692LOG.pins.RABAR, RABAR);
		let RBBAR = new Pin();
		Connect(this.ULS692LOG.pins.RBBAR, RBBAR);
		let RCBAR = new Pin();
		Connect(this.ULS692LOG.pins.RCBAR, RCBAR);
		let RDBAR = new Pin();
		Connect(this.ULS692LOG.pins.RDBAR, RDBAR);
		let GBAR = new Pin();
		Connect(this.ULS692LOG.pins.GBAR, GBAR);
		let R_CBAR = new Pin();
		Connect(this.ULS692LOG.pins.R_CBAR, R_CBAR);
		let RCLRBAR = new Pin();
		Connect(this.ULS692LOG.pins.RCLRBAR, RCLRBAR);
		Connect(this.ULS692LOG.pins.RCK, RCK);
		let CCLRBAR = new Pin();
		Connect(this.ULS692LOG.pins.CCLRBAR, CCLRBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS692LOG.pins.LOADBAR, LOADBAR);
		let ENP = new Pin();
		Connect(this.ULS692LOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.ULS692LOG.pins.ENT, ENT);
		Connect(this.ULS692LOG.pins.CCK, CCK);
		let A = new Pin();
		Connect(this.ULS692LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS692LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS692LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS692LOG.pins.D, D);
		Connect(this.ULS692LOG.pins.DA, DA);
		Connect(this.ULS692LOG.pins.DB, DB);
		Connect(this.ULS692LOG.pins.DC, DC);
		Connect(this.ULS692LOG.pins.DD, DD);
		Connect(this.ULS692LOG.pins.CA, CA);
		Connect(this.ULS692LOG.pins.CB, CB);
		Connect(this.ULS692LOG.pins.CC, CC);
		Connect(this.ULS692LOG.pins.CD, CD);
		let QA = new Pin();
		Connect(this.ULS692LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS692LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS692LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS692LOG.pins.QD, QD);
		let RCO = new Pin();
		Connect(this.ULS692LOG.pins.RCO, RCO);
		let IEN = new Pin();
		Connect(this.ULS692LOG.pins.IEN, IEN);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCO, this.pins.RCO_O);
	}
}
class SN74LS693 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_CBAR_I: new Pin(),
			RCLRBAR_I: new Pin(),
			RCK_I: new Pin(),
			CCLRBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			ENP_I: new Pin(),
			ENT_I: new Pin(),
			CCK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCO_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CCK = new Pin();
		Connect(this.U1.pins.CLOCK, CCK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let IQA = new Pin();
		Connect(this.U1.pins.Q0, IQA);
		let IQB = new Pin();
		Connect(this.U1.pins.Q1, IQB);
		let IQC = new Pin();
		Connect(this.U1.pins.Q2, IQC);
		let IQD = new Pin();
		Connect(this.U1.pins.Q3, IQD);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		let RCK = new Pin();
		Connect(this.U2.pins.CLOCK, RCK);
		let CA = new Pin();
		Connect(this.U2.pins.D0, CA);
		let CB = new Pin();
		Connect(this.U2.pins.D1, CB);
		let CC = new Pin();
		Connect(this.U2.pins.D2, CC);
		let CD = new Pin();
		Connect(this.U2.pins.D3, CD);
		let _D_NC = new Pin();
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		this.ULS693LOG = new logicexp(['GBAR_I','R_CBAR_I','RCLRBAR_I','RCK_I','CCLRBAR_I','LOADBAR_I','ENP_I','ENT_I','CCK_I','A_I','B_I','C_I','D_I','IQA','IQB','IQC','IQD','IQABAR','IQBBAR','IQCBAR','IQDBAR','RABAR','RBBAR','RCBAR','RDBAR'], ['GBAR','R_CBAR','RCLRBAR','RCK','CCLRBAR','LOADBAR','ENP','ENT','CCK','A','B','C','D','DA','DB','DC','DD','CA','CB','CC','CD','QA','QB','QC','QD','RCO','IEN'], []).Logic('   GBAR =  GBAR_I ;   R_CBAR =  R_CBAR_I ;   RCLRBAR =  RCLRBAR_I ;   RCK =  RCK_I ;   CCLRBAR =  CCLRBAR_I ;   LOADBAR =  LOADBAR_I ;   ENP =  ENP_I ;   ENT =  ENT_I ;   CCK =  CCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  LOADBAR & ENP & ENT ;let    ICL =  !CCLRBAR ;   ICL =  !CCLRBAR ;let    IA1 =  IQA & IEN ;   IA1 =  IQA & IEN ;let    IA2 =  !IEN & LOADBAR & IQABAR ;   IA2 =  !IEN & LOADBAR & IQABAR ;let    IA3 =  ICL | !(LOADBAR | A) ;   IA3 =  ICL | !(LOADBAR | A) ;let    IB1 =  IQB & IEN & !IQABAR ;   IB1 =  IQB & IEN & !IQABAR ;let    IB2 =  (!IEN | IQABAR) & LOADBAR & IQBBAR ;   IB2 =  (!IEN | IQABAR) & LOADBAR & IQBBAR ;let    IB3 =  ICL | !(LOADBAR | B) ;   IB3 =  ICL | !(LOADBAR | B) ;let    IC1 =  IQC & IEN & !IQABAR & !IQBBAR ;   IC1 =  IQC & IEN & !IQABAR & !IQBBAR ;let    IC2 =  (!IEN | IQABAR | IQBBAR) & LOADBAR & IQCBAR ;   IC2 =  (!IEN | IQABAR | IQBBAR) & LOADBAR & IQCBAR ;let    IC3 =  ICL | !(LOADBAR | C) ;   IC3 =  ICL | !(LOADBAR | C) ;let    ID1 =  IQD & IEN & !IQABAR & !IQBBAR & !IQCBAR ;   ID1 =  IQD & IEN & !IQABAR & !IQBBAR & !IQCBAR ;let    ID2 =  (!IEN | IQABAR | IQBBAR | IQCBAR) & LOADBAR & IQDBAR ;   ID2 =  (!IEN | IQABAR | IQBBAR | IQCBAR) & LOADBAR & IQDBAR ;let    ID3 =  ICL | !(LOADBAR | D) ;   ID3 =  ICL | !(LOADBAR | D) ;   DA =  !(IA1 | IA2 | IA3) ;   DB =  !(IB1 | IB2 | IB3) ;   DC =  !(IC1 | IC2 | IC3) ;   DD =  !(ID1 | ID2 | ID3) ;   CA =  IQA & RCLRBAR ;   CB =  IQB & RCLRBAR ;   CC =  IQC & RCLRBAR ;   CD =  IQD & RCLRBAR ;   QA =  !((R_CBAR & RABAR) | (!R_CBAR & IQABAR)) ;   QB =  !((R_CBAR & RBBAR)  | (!R_CBAR & IQBBAR)) ;   QC =  !((R_CBAR & RCBAR)  | (!R_CBAR & IQCBAR)) ;   QD =  !((R_CBAR & RDBAR)  | (!R_CBAR & IQDBAR)) ;   RCO =  !(!ENT | IQABAR | IQBBAR | IQCBAR | IQDBAR) ;');
		Connect(this.ULS693LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS693LOG.pins.R_CBAR_I, this.pins.R_CBAR_I);
		Connect(this.ULS693LOG.pins.RCLRBAR_I, this.pins.RCLRBAR_I);
		Connect(this.ULS693LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS693LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS693LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS693LOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.ULS693LOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.ULS693LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS693LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS693LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS693LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS693LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS693LOG.pins.IQA, IQA);
		Connect(this.ULS693LOG.pins.IQB, IQB);
		Connect(this.ULS693LOG.pins.IQC, IQC);
		Connect(this.ULS693LOG.pins.IQD, IQD);
		let IQABAR = new Pin();
		Connect(this.ULS693LOG.pins.IQABAR, IQABAR);
		let IQBBAR = new Pin();
		Connect(this.ULS693LOG.pins.IQBBAR, IQBBAR);
		let IQCBAR = new Pin();
		Connect(this.ULS693LOG.pins.IQCBAR, IQCBAR);
		let IQDBAR = new Pin();
		Connect(this.ULS693LOG.pins.IQDBAR, IQDBAR);
		let RABAR = new Pin();
		Connect(this.ULS693LOG.pins.RABAR, RABAR);
		let RBBAR = new Pin();
		Connect(this.ULS693LOG.pins.RBBAR, RBBAR);
		let RCBAR = new Pin();
		Connect(this.ULS693LOG.pins.RCBAR, RCBAR);
		let RDBAR = new Pin();
		Connect(this.ULS693LOG.pins.RDBAR, RDBAR);
		let GBAR = new Pin();
		Connect(this.ULS693LOG.pins.GBAR, GBAR);
		let R_CBAR = new Pin();
		Connect(this.ULS693LOG.pins.R_CBAR, R_CBAR);
		let RCLRBAR = new Pin();
		Connect(this.ULS693LOG.pins.RCLRBAR, RCLRBAR);
		Connect(this.ULS693LOG.pins.RCK, RCK);
		let CCLRBAR = new Pin();
		Connect(this.ULS693LOG.pins.CCLRBAR, CCLRBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS693LOG.pins.LOADBAR, LOADBAR);
		let ENP = new Pin();
		Connect(this.ULS693LOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.ULS693LOG.pins.ENT, ENT);
		Connect(this.ULS693LOG.pins.CCK, CCK);
		let A = new Pin();
		Connect(this.ULS693LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS693LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS693LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS693LOG.pins.D, D);
		Connect(this.ULS693LOG.pins.DA, DA);
		Connect(this.ULS693LOG.pins.DB, DB);
		Connect(this.ULS693LOG.pins.DC, DC);
		Connect(this.ULS693LOG.pins.DD, DD);
		Connect(this.ULS693LOG.pins.CA, CA);
		Connect(this.ULS693LOG.pins.CB, CB);
		Connect(this.ULS693LOG.pins.CC, CC);
		Connect(this.ULS693LOG.pins.CD, CD);
		let QA = new Pin();
		Connect(this.ULS693LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS693LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS693LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS693LOG.pins.QD, QD);
		let RCO = new Pin();
		Connect(this.ULS693LOG.pins.RCO, RCO);
		let IEN = new Pin();
		Connect(this.ULS693LOG.pins.IEN, IEN);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCO, this.pins.RCO_O);
	}
}
/**
 * SYNCHRONOUS UP_DOWN COUNTER WITH OUTPUT REGISTERS AND MULTILEXED
 */
class SN74LS696 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_CBAR_I: new Pin(),
			RCK_I: new Pin(),
			CCLRBAR_I: new Pin(),
			U_DBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			ENPBAR_I: new Pin(),
			ENTBAR_I: new Pin(),
			CCK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.ULS696LOG = new logicexp(['GBAR_I','R_CBAR_I','RCK_I','CCLRBAR_I','U_DBAR_I','LOADBAR_I','ENPBAR_I','ENTBAR_I','CCK_I','A_I','B_I','C_I','D_I','LA','LB','LC','LD','LABAR','LBBAR','LCBAR','LDBAR','OUTA','OUTB','OUTC','OUTD'], ['GBAR','R_CBAR','RCK','CCLRBAR','U_DBAR','LOADBAR','ENPBAR','ENTBAR','CCK','A','B','C','D','DA','DB','DC','DD','RCOBAR','QA','QB','QC','QD','EN'], []).Logic('   GBAR =  GBAR_I ;   R_CBAR =  R_CBAR_I ;   RCK =  RCK_I ;   CCLRBAR =  CCLRBAR_I ;   U_DBAR =  U_DBAR_I ;   LOADBAR =  LOADBAR_I ;   ENPBAR =  ENPBAR_I ;   ENTBAR =  ENTBAR_I ;   CCK =  CCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOADA =  !(LOADBAR | A) ;   LOADA =  !(LOADBAR | A) ;let    LOADB =  !(LOADBAR | B) ;   LOADB =  !(LOADBAR | B) ;let    LOADC =  !(LOADBAR | C) ;   LOADC =  !(LOADBAR | C) ;let    LOADD =  !(LOADBAR | D) ;   LOADD =  !(LOADBAR | D) ;let    U_DA =  !((LA & !U_DBAR) | (U_DBAR & LABAR)) ;   U_DA =  !((LA & !U_DBAR) | (U_DBAR & LABAR)) ;let    U_DB =  !((LB & !U_DBAR) | (U_DBAR & LBBAR)) ;   U_DB =  !((LB & !U_DBAR) | (U_DBAR & LBBAR)) ;let    U_DC =  !((LC & !U_DBAR) | (U_DBAR & LCBAR)) ;   U_DC =  !((LC & !U_DBAR) | (U_DBAR & LCBAR)) ;let    U_DD =  !((LD & !U_DBAR) | (U_DBAR & LDBAR)) ;   U_DD =  !((LD & !U_DBAR) | (U_DBAR & LDBAR)) ;   EN =  (LOADBAR & !ENPBAR & !ENTBAR) ;   DA =  !((LA & EN) | (!EN & LOADBAR & LABAR) | LOADA) ;   DB =  !((LB & EN & U_DA) | (LCBAR & EN & U_DA & U_DD) |            ((!EN | !U_DA) & LOADBAR & LBBAR) | LOADB) ;   DC =  !((LC & EN & U_DA & U_DB) | (EN & U_DA & U_DB & U_DD) |            ((!EN | !U_DA | !U_DB) & LOADBAR & LCBAR) | LOADC) ;   DD =  !((LD & EN & U_DA) | ((!EN | !U_DA | !U_DB | !U_DC) & LOADBAR & LDBAR)            | LOADD) ;   RCOBAR =  !((U_DBAR & U_DA & U_DD & !ENTBAR) |                (!ENTBAR & U_DA & U_DB & U_DC & U_DD & !U_DBAR));   QA =  !((R_CBAR & OUTA) | (!R_CBAR & LABAR)) ;   QB =  !((R_CBAR & OUTB) | (!R_CBAR & LBBAR)) ;   QC =  !((R_CBAR & OUTC) | (!R_CBAR & LCBAR)) ;   QD =  !((R_CBAR & OUTD) | (!R_CBAR & LDBAR)) ;');
		Connect(this.ULS696LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS696LOG.pins.R_CBAR_I, this.pins.R_CBAR_I);
		Connect(this.ULS696LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS696LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS696LOG.pins.U_DBAR_I, this.pins.U_DBAR_I);
		Connect(this.ULS696LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS696LOG.pins.ENPBAR_I, this.pins.ENPBAR_I);
		Connect(this.ULS696LOG.pins.ENTBAR_I, this.pins.ENTBAR_I);
		Connect(this.ULS696LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS696LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS696LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS696LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS696LOG.pins.D_I, this.pins.D_I);
		let LA = new Pin();
		Connect(this.ULS696LOG.pins.LA, LA);
		let LB = new Pin();
		Connect(this.ULS696LOG.pins.LB, LB);
		let LC = new Pin();
		Connect(this.ULS696LOG.pins.LC, LC);
		let LD = new Pin();
		Connect(this.ULS696LOG.pins.LD, LD);
		let LABAR = new Pin();
		Connect(this.ULS696LOG.pins.LABAR, LABAR);
		let LBBAR = new Pin();
		Connect(this.ULS696LOG.pins.LBBAR, LBBAR);
		let LCBAR = new Pin();
		Connect(this.ULS696LOG.pins.LCBAR, LCBAR);
		let LDBAR = new Pin();
		Connect(this.ULS696LOG.pins.LDBAR, LDBAR);
		let OUTA = new Pin();
		Connect(this.ULS696LOG.pins.OUTA, OUTA);
		let OUTB = new Pin();
		Connect(this.ULS696LOG.pins.OUTB, OUTB);
		let OUTC = new Pin();
		Connect(this.ULS696LOG.pins.OUTC, OUTC);
		let OUTD = new Pin();
		Connect(this.ULS696LOG.pins.OUTD, OUTD);
		let GBAR = new Pin();
		Connect(this.ULS696LOG.pins.GBAR, GBAR);
		let R_CBAR = new Pin();
		Connect(this.ULS696LOG.pins.R_CBAR, R_CBAR);
		let RCK = new Pin();
		Connect(this.ULS696LOG.pins.RCK, RCK);
		let CCLRBAR = new Pin();
		Connect(this.ULS696LOG.pins.CCLRBAR, CCLRBAR);
		let U_DBAR = new Pin();
		Connect(this.ULS696LOG.pins.U_DBAR, U_DBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS696LOG.pins.LOADBAR, LOADBAR);
		let ENPBAR = new Pin();
		Connect(this.ULS696LOG.pins.ENPBAR, ENPBAR);
		let ENTBAR = new Pin();
		Connect(this.ULS696LOG.pins.ENTBAR, ENTBAR);
		let CCK = new Pin();
		Connect(this.ULS696LOG.pins.CCK, CCK);
		let A = new Pin();
		Connect(this.ULS696LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS696LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS696LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS696LOG.pins.D, D);
		let DA = new Pin();
		Connect(this.ULS696LOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.ULS696LOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.ULS696LOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.ULS696LOG.pins.DD, DD);
		let RCOBAR = new Pin();
		Connect(this.ULS696LOG.pins.RCOBAR, RCOBAR);
		let QA = new Pin();
		Connect(this.ULS696LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS696LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS696LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS696LOG.pins.QD, QD);
		let EN = new Pin();
		Connect(this.ULS696LOG.pins.EN, EN);
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, CCLRBAR);
		Connect(this.U1.pins.CLOCK, CCK);
		Connect(this.U1.pins.D0, DA);
		Connect(this.U1.pins.D1, DB);
		Connect(this.U1.pins.D2, DC);
		Connect(this.U1.pins.D3, DD);
		Connect(this.U1.pins.Q0, LA);
		Connect(this.U1.pins.Q1, LB);
		Connect(this.U1.pins.Q2, LC);
		Connect(this.U1.pins.Q3, LD);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		Connect(this.U2.pins.CLOCK, RCK);
		Connect(this.U2.pins.D0, LA);
		Connect(this.U2.pins.D1, LB);
		Connect(this.U2.pins.D2, LC);
		Connect(this.U2.pins.D3, LD);
		let _D_NC = new Pin();
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		Connect(RCOBAR, this.pins.RCOBAR_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
class SN74LS697 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_CBAR_I: new Pin(),
			RCK_I: new Pin(),
			CCLRBAR_I: new Pin(),
			U_DBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			ENPBAR_I: new Pin(),
			ENTBAR_I: new Pin(),
			CCK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		let CCLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CCLRBAR);
		let CCK = new Pin();
		Connect(this.U1.pins.CLOCK, CCK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let CA = new Pin();
		Connect(this.U1.pins.Q0, CA);
		let CB = new Pin();
		Connect(this.U1.pins.Q1, CB);
		let CC = new Pin();
		Connect(this.U1.pins.Q2, CC);
		let CD = new Pin();
		Connect(this.U1.pins.Q3, CD);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		let RCK = new Pin();
		Connect(this.U2.pins.CLOCK, RCK);
		Connect(this.U2.pins.D0, CA);
		Connect(this.U2.pins.D1, CB);
		Connect(this.U2.pins.D2, CC);
		Connect(this.U2.pins.D3, CD);
		let _D_NC = new Pin();
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		this.ULS697LOG = new logicexp(['GBAR_I','R_CBAR_I','RCK_I','CCLRBAR_I','U_DBAR_I','LOADBAR_I','ENPBAR_I','ENTBAR_I','CCK_I','A_I','B_I','C_I','D_I','CA','CB','CC','CD','CABAR','CBBAR','CCBAR','CDBAR','RABAR','RBBAR','RCBAR','RDBAR'], ['GBAR','R_CBAR','RCK','CCLRBAR','U_DBAR','LOADBAR','ENPBAR','ENTBAR','CCK','A','B','C','D','DA','DB','DC','DD','QA','QB','QC','QD','RCOBAR','IEN'], []).Logic('   GBAR =  GBAR_I ;   R_CBAR =  R_CBAR_I ;   RCK =  RCK_I ;   CCLRBAR =  CCLRBAR_I ;   U_DBAR =  U_DBAR_I ;   LOADBAR =  LOADBAR_I ;   ENPBAR =  ENPBAR_I ;   ENTBAR =  ENTBAR_I ;   CCK =  CCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    UP =  U_DBAR ;   UP =  U_DBAR ;let    DN =  !U_DBAR ;   DN =  !U_DBAR ;   IEN =  !(!LOADBAR | ENPBAR | ENTBAR) ;let    IRC =  !R_CBAR ;   IRC =  !R_CBAR ;let    IA1 =  CA & IEN ;   IA1 =  CA & IEN ;let    IA2 =  !IEN & LOADBAR & CABAR ;   IA2 =  !IEN & LOADBAR & CABAR ;let    IA3 =  !((CA & DN) | (UP & CABAR)) ;   IA3 =  !((CA & DN) | (UP & CABAR)) ;let    IB1 =  CB & IEN & IA3 ;   IB1 =  CB & IEN & IA3 ;let    IB2 =  !(IEN & IA3) & LOADBAR & CBBAR ;   IB2 =  !(IEN & IA3) & LOADBAR & CBBAR ;let    IB3 =  !((CB & DN) | (UP & CBBAR)) ;   IB3 =  !((CB & DN) | (UP & CBBAR)) ;let    IC1 =  CC & IEN & IA3 & IB3 ;   IC1 =  CC & IEN & IA3 & IB3 ;let    IC2 =  !(IEN & IA3 & IB3) & LOADBAR & CCBAR ;   IC2 =  !(IEN & IA3 & IB3) & LOADBAR & CCBAR ;let    IC3 =  !((CC & DN) | (UP & CCBAR)) ;   IC3 =  !((CC & DN) | (UP & CCBAR)) ;let    ID1 =  CD & IEN & IA3 & IB3 & IC3 ;   ID1 =  CD & IEN & IA3 & IB3 & IC3 ;let    ID2 =  !(IEN & IA3 & IB3 & IC3 ) & LOADBAR & CDBAR ;   ID2 =  !(IEN & IA3 & IB3 & IC3 ) & LOADBAR & CDBAR ;let    ID3 =  !((CD & DN) | (UP & CDBAR)) ;   ID3 =  !((CD & DN) | (UP & CDBAR)) ;   DA =  !(IA1 | IA2 | !(LOADBAR | A)) ;   DB =  !(IB1 | IB2 | !(LOADBAR | B)) ;   DC =  !(IC1 | IC2 | !(LOADBAR | C)) ;   DD =  !(ID1 | ID2 | !(LOADBAR | D)) ;   QA =  !((R_CBAR & RABAR) | (IRC & CABAR)) ;   QB =  !((R_CBAR & RBBAR) | (IRC & CBBAR)) ;   QC =  !((R_CBAR & RCBAR) | (IRC & CCBAR)) ;   QD =  !((R_CBAR & RDBAR) | (IRC & CDBAR)) ;   RCOBAR =  !(!ENTBAR & IA3 & IB3 & IC3 & ID3) ;');
		Connect(this.ULS697LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS697LOG.pins.R_CBAR_I, this.pins.R_CBAR_I);
		Connect(this.ULS697LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS697LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS697LOG.pins.U_DBAR_I, this.pins.U_DBAR_I);
		Connect(this.ULS697LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS697LOG.pins.ENPBAR_I, this.pins.ENPBAR_I);
		Connect(this.ULS697LOG.pins.ENTBAR_I, this.pins.ENTBAR_I);
		Connect(this.ULS697LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS697LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS697LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS697LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS697LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS697LOG.pins.CA, CA);
		Connect(this.ULS697LOG.pins.CB, CB);
		Connect(this.ULS697LOG.pins.CC, CC);
		Connect(this.ULS697LOG.pins.CD, CD);
		let CABAR = new Pin();
		Connect(this.ULS697LOG.pins.CABAR, CABAR);
		let CBBAR = new Pin();
		Connect(this.ULS697LOG.pins.CBBAR, CBBAR);
		let CCBAR = new Pin();
		Connect(this.ULS697LOG.pins.CCBAR, CCBAR);
		let CDBAR = new Pin();
		Connect(this.ULS697LOG.pins.CDBAR, CDBAR);
		let RABAR = new Pin();
		Connect(this.ULS697LOG.pins.RABAR, RABAR);
		let RBBAR = new Pin();
		Connect(this.ULS697LOG.pins.RBBAR, RBBAR);
		let RCBAR = new Pin();
		Connect(this.ULS697LOG.pins.RCBAR, RCBAR);
		let RDBAR = new Pin();
		Connect(this.ULS697LOG.pins.RDBAR, RDBAR);
		let GBAR = new Pin();
		Connect(this.ULS697LOG.pins.GBAR, GBAR);
		let R_CBAR = new Pin();
		Connect(this.ULS697LOG.pins.R_CBAR, R_CBAR);
		Connect(this.ULS697LOG.pins.RCK, RCK);
		Connect(this.ULS697LOG.pins.CCLRBAR, CCLRBAR);
		let U_DBAR = new Pin();
		Connect(this.ULS697LOG.pins.U_DBAR, U_DBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS697LOG.pins.LOADBAR, LOADBAR);
		let ENPBAR = new Pin();
		Connect(this.ULS697LOG.pins.ENPBAR, ENPBAR);
		let ENTBAR = new Pin();
		Connect(this.ULS697LOG.pins.ENTBAR, ENTBAR);
		Connect(this.ULS697LOG.pins.CCK, CCK);
		let A = new Pin();
		Connect(this.ULS697LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS697LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS697LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS697LOG.pins.D, D);
		Connect(this.ULS697LOG.pins.DA, DA);
		Connect(this.ULS697LOG.pins.DB, DB);
		Connect(this.ULS697LOG.pins.DC, DC);
		Connect(this.ULS697LOG.pins.DD, DD);
		let QA = new Pin();
		Connect(this.ULS697LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS697LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS697LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS697LOG.pins.QD, QD);
		let RCOBAR = new Pin();
		Connect(this.ULS697LOG.pins.RCOBAR, RCOBAR);
		let IEN = new Pin();
		Connect(this.ULS697LOG.pins.IEN, IEN);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
	}
}
/**
 * SYNCHRONOUS UP_DOWN COUNTER WITH OUTPUT REGISTERS AND MULTILEXED
 */
class SN74LS698 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_CBAR_I: new Pin(),
			RCK_I: new Pin(),
			CCLRBAR_I: new Pin(),
			U_DBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			ENPBAR_I: new Pin(),
			ENTBAR_I: new Pin(),
			CCK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.ULS698LOG = new logicexp(['GBAR_I','R_CBAR_I','RCK_I','CCLRBAR_I','U_DBAR_I','LOADBAR_I','ENPBAR_I','ENTBAR_I','CCK_I','A_I','B_I','C_I','D_I','LA','LB','LC','LD','LABAR','LBBAR','LCBAR','LDBAR','OUTA','OUTB','OUTC','OUTD'], ['GBAR','R_CBAR','RCK','CCLRBAR','U_DBAR','LOADBAR','ENPBAR','ENTBAR','CCK','A','B','C','D','DA','DB','DC','DD','RCOBAR','QA','QB','QC','QD','EN'], []).Logic('   GBAR =  GBAR_I ;   R_CBAR =  R_CBAR_I ;   RCK =  RCK_I ;   CCLRBAR =  CCLRBAR_I ;   U_DBAR =  U_DBAR_I ;   LOADBAR =  LOADBAR_I ;   ENPBAR =  ENPBAR_I ;   ENTBAR =  ENTBAR_I ;   CCK =  CCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOADA =  !(LOADBAR | A) | !CCLRBAR ;   LOADA =  !(LOADBAR | A) | !CCLRBAR ;let    LOADB =  !(LOADBAR | B) | !CCLRBAR ;   LOADB =  !(LOADBAR | B) | !CCLRBAR ;let    LOADC =  !(LOADBAR | C) | !CCLRBAR ;   LOADC =  !(LOADBAR | C) | !CCLRBAR ;let    LOADD =  !(LOADBAR | D) | !CCLRBAR ;   LOADD =  !(LOADBAR | D) | !CCLRBAR ;let    U_DA =  !((LA & !U_DBAR) | (U_DBAR & LABAR)) ;   U_DA =  !((LA & !U_DBAR) | (U_DBAR & LABAR)) ;let    U_DB =  !((LB & !U_DBAR) | (U_DBAR & LBBAR)) ;   U_DB =  !((LB & !U_DBAR) | (U_DBAR & LBBAR)) ;let    U_DC =  !((LC & !U_DBAR) | (U_DBAR & LCBAR)) ;   U_DC =  !((LC & !U_DBAR) | (U_DBAR & LCBAR)) ;let    U_DD =  !((LD & !U_DBAR) | (U_DBAR & LDBAR)) ;   U_DD =  !((LD & !U_DBAR) | (U_DBAR & LDBAR)) ;   EN =  LOADBAR & !ENPBAR & !ENTBAR ;   DA =  !((LA & EN) | (!EN & LOADBAR & LABAR) | LOADA) ;   DB =  !((LB & EN & U_DA) | (LCBAR & EN & U_DA & U_DD) |            ((!EN | !U_DA) & LOADBAR & LBBAR) | LOADB) ;   DC =  !((LC & EN & U_DA & U_DB) | (EN & U_DA & U_DB & U_DD) |            ((!EN | !U_DA | !U_DB) & LOADBAR & LCBAR) | LOADC) ;   DD =  !((LD & EN & U_DA) | ((!EN | !U_DA | !U_DB | !U_DC) & LOADBAR & LDBAR)            | LOADD) ;   RCOBAR =  !((U_DBAR & U_DA & U_DD & !ENTBAR) |                (!ENTBAR & U_DA & U_DB & U_DC & U_DD & !U_DBAR)) ;   QA =  !((R_CBAR & OUTA) | (!R_CBAR & LABAR)) ;   QB =  !((R_CBAR & OUTB) | (!R_CBAR & LBBAR)) ;   QC =  !((R_CBAR & OUTC) | (!R_CBAR & LCBAR)) ;   QD =  !((R_CBAR & OUTD) | (!R_CBAR & LDBAR)) ;');
		Connect(this.ULS698LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS698LOG.pins.R_CBAR_I, this.pins.R_CBAR_I);
		Connect(this.ULS698LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS698LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS698LOG.pins.U_DBAR_I, this.pins.U_DBAR_I);
		Connect(this.ULS698LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS698LOG.pins.ENPBAR_I, this.pins.ENPBAR_I);
		Connect(this.ULS698LOG.pins.ENTBAR_I, this.pins.ENTBAR_I);
		Connect(this.ULS698LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS698LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS698LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS698LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS698LOG.pins.D_I, this.pins.D_I);
		let LA = new Pin();
		Connect(this.ULS698LOG.pins.LA, LA);
		let LB = new Pin();
		Connect(this.ULS698LOG.pins.LB, LB);
		let LC = new Pin();
		Connect(this.ULS698LOG.pins.LC, LC);
		let LD = new Pin();
		Connect(this.ULS698LOG.pins.LD, LD);
		let LABAR = new Pin();
		Connect(this.ULS698LOG.pins.LABAR, LABAR);
		let LBBAR = new Pin();
		Connect(this.ULS698LOG.pins.LBBAR, LBBAR);
		let LCBAR = new Pin();
		Connect(this.ULS698LOG.pins.LCBAR, LCBAR);
		let LDBAR = new Pin();
		Connect(this.ULS698LOG.pins.LDBAR, LDBAR);
		let OUTA = new Pin();
		Connect(this.ULS698LOG.pins.OUTA, OUTA);
		let OUTB = new Pin();
		Connect(this.ULS698LOG.pins.OUTB, OUTB);
		let OUTC = new Pin();
		Connect(this.ULS698LOG.pins.OUTC, OUTC);
		let OUTD = new Pin();
		Connect(this.ULS698LOG.pins.OUTD, OUTD);
		let GBAR = new Pin();
		Connect(this.ULS698LOG.pins.GBAR, GBAR);
		let R_CBAR = new Pin();
		Connect(this.ULS698LOG.pins.R_CBAR, R_CBAR);
		let RCK = new Pin();
		Connect(this.ULS698LOG.pins.RCK, RCK);
		let CCLRBAR = new Pin();
		Connect(this.ULS698LOG.pins.CCLRBAR, CCLRBAR);
		let U_DBAR = new Pin();
		Connect(this.ULS698LOG.pins.U_DBAR, U_DBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS698LOG.pins.LOADBAR, LOADBAR);
		let ENPBAR = new Pin();
		Connect(this.ULS698LOG.pins.ENPBAR, ENPBAR);
		let ENTBAR = new Pin();
		Connect(this.ULS698LOG.pins.ENTBAR, ENTBAR);
		let CCK = new Pin();
		Connect(this.ULS698LOG.pins.CCK, CCK);
		let A = new Pin();
		Connect(this.ULS698LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS698LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS698LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS698LOG.pins.D, D);
		let DA = new Pin();
		Connect(this.ULS698LOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.ULS698LOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.ULS698LOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.ULS698LOG.pins.DD, DD);
		let RCOBAR = new Pin();
		Connect(this.ULS698LOG.pins.RCOBAR, RCOBAR);
		let QA = new Pin();
		Connect(this.ULS698LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS698LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS698LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS698LOG.pins.QD, QD);
		let EN = new Pin();
		Connect(this.ULS698LOG.pins.EN, EN);
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, CCK);
		Connect(this.U1.pins.D0, DA);
		Connect(this.U1.pins.D1, DB);
		Connect(this.U1.pins.D2, DC);
		Connect(this.U1.pins.D3, DD);
		Connect(this.U1.pins.Q0, LA);
		Connect(this.U1.pins.Q1, LB);
		Connect(this.U1.pins.Q2, LC);
		Connect(this.U1.pins.Q3, LD);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		Connect(this.U2.pins.CLOCK, RCK);
		Connect(this.U2.pins.D0, LA);
		Connect(this.U2.pins.D1, LB);
		Connect(this.U2.pins.D2, LC);
		Connect(this.U2.pins.D3, LD);
		let _D_NC = new Pin();
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		Connect(RCOBAR, this.pins.RCOBAR_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
class SN74LS699 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR_I: new Pin(),
			R_CBAR_I: new Pin(),
			RCK_I: new Pin(),
			CCLRBAR_I: new Pin(),
			U_DBAR_I: new Pin(),
			LOADBAR_I: new Pin(),
			ENPBAR_I: new Pin(),
			ENTBAR_I: new Pin(),
			CCK_I: new Pin(),
			A_I: new Pin(),
			B_I: new Pin(),
			C_I: new Pin(),
			D_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			RCOBAR_O: new Pin(),
		}
		this.U1 = new dff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CCK = new Pin();
		Connect(this.U1.pins.CLOCK, CCK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let DB = new Pin();
		Connect(this.U1.pins.D1, DB);
		let DC = new Pin();
		Connect(this.U1.pins.D2, DC);
		let DD = new Pin();
		Connect(this.U1.pins.D3, DD);
		let CA = new Pin();
		Connect(this.U1.pins.Q0, CA);
		let CB = new Pin();
		Connect(this.U1.pins.Q1, CB);
		let CC = new Pin();
		Connect(this.U1.pins.Q2, CC);
		let CD = new Pin();
		Connect(this.U1.pins.Q3, CD);
		this.U2 = new dff(4);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		let RCK = new Pin();
		Connect(this.U2.pins.CLOCK, RCK);
		Connect(this.U2.pins.D0, CA);
		Connect(this.U2.pins.D1, CB);
		Connect(this.U2.pins.D2, CC);
		Connect(this.U2.pins.D3, CD);
		let _D_NC = new Pin();
		Connect(this.U2.pins.Q0, _D_NC);
		Connect(this.U2.pins.Q1, _D_NC);
		Connect(this.U2.pins.Q2, _D_NC);
		Connect(this.U2.pins.Q3, _D_NC);
		this.ULS699LOG = new logicexp(['GBAR_I','R_CBAR_I','RCK_I','CCLRBAR_I','U_DBAR_I','LOADBAR_I','ENPBAR_I','ENTBAR_I','CCK_I','A_I','B_I','C_I','D_I','CA','CB','CC','CD','CABAR','CBBAR','CCBAR','CDBAR','RABAR','RBBAR','RCBAR','RDBAR'], ['GBAR','R_CBAR','RCK','CCLRBAR','U_DBAR','LOADBAR','ENPBAR','ENTBAR','CCK','A','B','C','D','DA','DB','DC','DD','QA','QB','QC','QD','RCOBAR','IEN'], []).Logic('   GBAR =  GBAR_I ;   R_CBAR =  R_CBAR_I ;   RCK =  RCK_I ;   CCLRBAR =  CCLRBAR_I ;   U_DBAR =  U_DBAR_I ;   LOADBAR =  LOADBAR_I ;   ENPBAR =  ENPBAR_I ;   ENTBAR =  ENTBAR_I ;   CCK =  CCK_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    UP =  U_DBAR ;   UP =  U_DBAR ;let    DN =  !U_DBAR ;   DN =  !U_DBAR ;   IEN =  !(!LOADBAR | ENPBAR | ENTBAR) ;let    ICL =  !CCLRBAR ;   ICL =  !CCLRBAR ;let    IRC =  !R_CBAR ;   IRC =  !R_CBAR ;let    IA1 =  CA & IEN ;   IA1 =  CA & IEN ;let    IA2 =  !IEN & LOADBAR & CABAR ;   IA2 =  !IEN & LOADBAR & CABAR ;let    IA3 =  !((CA & DN) | (UP & CABAR)) ;   IA3 =  !((CA & DN) | (UP & CABAR)) ;let    IB1 =  CB & IEN & IA3 ;   IB1 =  CB & IEN & IA3 ;let    IB2 =  !(IEN & IA3) & LOADBAR & CBBAR ;   IB2 =  !(IEN & IA3) & LOADBAR & CBBAR ;let    IB3 =  !((CB & DN) | (UP & CBBAR)) ;   IB3 =  !((CB & DN) | (UP & CBBAR)) ;let    IC1 =  CC & IEN & IA3 & IB3 ;   IC1 =  CC & IEN & IA3 & IB3 ;let    IC2 =  !(IEN & IA3 & IB3) & LOADBAR & CCBAR ;   IC2 =  !(IEN & IA3 & IB3) & LOADBAR & CCBAR ;let    IC3 =  !((CC & DN) | (UP & CCBAR)) ;   IC3 =  !((CC & DN) | (UP & CCBAR)) ;let    ID1 =  CD & IEN & IA3 & IB3 & IC3 ;   ID1 =  CD & IEN & IA3 & IB3 & IC3 ;let    ID2 =  !(IEN & IA3 & IB3 & IC3 ) & LOADBAR & CDBAR ;   ID2 =  !(IEN & IA3 & IB3 & IC3 ) & LOADBAR & CDBAR ;let    ID3 =  !((CD & DN) | (UP & CDBAR)) ;   ID3 =  !((CD & DN) | (UP & CDBAR)) ;   DA =  !(IA1 | IA2 | !(LOADBAR | A) | ICL) ;   DB =  !(IB1 | IB2 | !(LOADBAR | B) | ICL) ;   DC =  !(IC1 | IC2 | !(LOADBAR | C) | ICL) ;   DD =  !(ID1 | ID2 | !(LOADBAR | D) | ICL) ;   QA =  !((R_CBAR & RABAR) | (IRC & CABAR)) ;   QB =  !((R_CBAR & RBBAR)	| (IRC & CBBAR)) ;   QC =  !((R_CBAR & RCBAR)	| (IRC & CCBAR)) ;   QD =  !((R_CBAR & RDBAR)	| (IRC & CDBAR)) ;   RCOBAR =  !(!ENTBAR & IA3 & IB3 & IC3 & ID3) ;');
		Connect(this.ULS699LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.ULS699LOG.pins.R_CBAR_I, this.pins.R_CBAR_I);
		Connect(this.ULS699LOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.ULS699LOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.ULS699LOG.pins.U_DBAR_I, this.pins.U_DBAR_I);
		Connect(this.ULS699LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.ULS699LOG.pins.ENPBAR_I, this.pins.ENPBAR_I);
		Connect(this.ULS699LOG.pins.ENTBAR_I, this.pins.ENTBAR_I);
		Connect(this.ULS699LOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.ULS699LOG.pins.A_I, this.pins.A_I);
		Connect(this.ULS699LOG.pins.B_I, this.pins.B_I);
		Connect(this.ULS699LOG.pins.C_I, this.pins.C_I);
		Connect(this.ULS699LOG.pins.D_I, this.pins.D_I);
		Connect(this.ULS699LOG.pins.CA, CA);
		Connect(this.ULS699LOG.pins.CB, CB);
		Connect(this.ULS699LOG.pins.CC, CC);
		Connect(this.ULS699LOG.pins.CD, CD);
		let CABAR = new Pin();
		Connect(this.ULS699LOG.pins.CABAR, CABAR);
		let CBBAR = new Pin();
		Connect(this.ULS699LOG.pins.CBBAR, CBBAR);
		let CCBAR = new Pin();
		Connect(this.ULS699LOG.pins.CCBAR, CCBAR);
		let CDBAR = new Pin();
		Connect(this.ULS699LOG.pins.CDBAR, CDBAR);
		let RABAR = new Pin();
		Connect(this.ULS699LOG.pins.RABAR, RABAR);
		let RBBAR = new Pin();
		Connect(this.ULS699LOG.pins.RBBAR, RBBAR);
		let RCBAR = new Pin();
		Connect(this.ULS699LOG.pins.RCBAR, RCBAR);
		let RDBAR = new Pin();
		Connect(this.ULS699LOG.pins.RDBAR, RDBAR);
		let GBAR = new Pin();
		Connect(this.ULS699LOG.pins.GBAR, GBAR);
		let R_CBAR = new Pin();
		Connect(this.ULS699LOG.pins.R_CBAR, R_CBAR);
		Connect(this.ULS699LOG.pins.RCK, RCK);
		let CCLRBAR = new Pin();
		Connect(this.ULS699LOG.pins.CCLRBAR, CCLRBAR);
		let U_DBAR = new Pin();
		Connect(this.ULS699LOG.pins.U_DBAR, U_DBAR);
		let LOADBAR = new Pin();
		Connect(this.ULS699LOG.pins.LOADBAR, LOADBAR);
		let ENPBAR = new Pin();
		Connect(this.ULS699LOG.pins.ENPBAR, ENPBAR);
		let ENTBAR = new Pin();
		Connect(this.ULS699LOG.pins.ENTBAR, ENTBAR);
		Connect(this.ULS699LOG.pins.CCK, CCK);
		let A = new Pin();
		Connect(this.ULS699LOG.pins.A, A);
		let B = new Pin();
		Connect(this.ULS699LOG.pins.B, B);
		let C = new Pin();
		Connect(this.ULS699LOG.pins.C, C);
		let D = new Pin();
		Connect(this.ULS699LOG.pins.D, D);
		Connect(this.ULS699LOG.pins.DA, DA);
		Connect(this.ULS699LOG.pins.DB, DB);
		Connect(this.ULS699LOG.pins.DC, DC);
		Connect(this.ULS699LOG.pins.DD, DD);
		let QA = new Pin();
		Connect(this.ULS699LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.ULS699LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.ULS699LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.ULS699LOG.pins.QD, QD);
		let RCOBAR = new Pin();
		Connect(this.ULS699LOG.pins.RCOBAR, RCOBAR);
		let IEN = new Pin();
		Connect(this.ULS699LOG.pins.IEN, IEN);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
	}
}
global.SN74LS00 = SN74LS00;
global.SN74LS01 = SN74LS01;
global.SN74LS02 = SN74LS02;
global.SN74LS03 = SN74LS03;
global.SN74LS04 = SN74LS04;
global.SN74LS05 = SN74LS05;
global.SN74LS08 = SN74LS08;
global.SN74LS09 = SN74LS09;
global.SN74LS10 = SN74LS10;
global.SN74LS11 = SN74LS11;
global.SN74LS12 = SN74LS12;
global.SN74LS13 = SN74LS13;
global.SN74LS14 = SN74LS14;
global.SN74LS15 = SN74LS15;
global.SN74LS18 = SN74LS18;
global.SN74LS19 = SN74LS19;
global.SN74LS20 = SN74LS20;
global.SN74LS21 = SN74LS21;
global.SN74LS22 = SN74LS22;
global.SN74LS24 = SN74LS24;
global.SN74LS26 = SN74LS26;
global.SN74LS27 = SN74LS27;
global.SN74LS28 = SN74LS28;
global.SN74LS30 = SN74LS30;
global.SN74LS31 = SN74LS31;
global.SN74LS32 = SN74LS32;
global.SN74LS33 = SN74LS33;
global.SN74LS37 = SN74LS37;
global.SN74LS38 = SN74LS38;
global.SN74LS40 = SN74LS40;
global.SN74LS42 = SN74LS42;
global.SN74LS47 = SN74LS47;
global.SN74LS48 = SN74LS48;
global.SN74LS49 = SN74LS49;
global.SN74LS51 = SN74LS51;
global.SN74LS54 = SN74LS54;
global.SN74LS55 = SN74LS55;
global.SN74LS56 = SN74LS56;
global.SN56DIV5 = SN56DIV5;
global.SN56DIV2 = SN56DIV2;
global.SN74LS57 = SN74LS57;
global.SN57DIV5 = SN57DIV5;
global.SN57DIV2 = SN57DIV2;
global.SN57DIV6 = SN57DIV6;
global.SN74LS68 = SN74LS68;
global.SN74LS69 = SN74LS69;
global.SN74LS73A = SN74LS73A;
global.SN74LS74A = SN74LS74A;
global.SN74LS75 = SN74LS75;
global.SN74LS76A = SN74LS76A;
global.SN74LS77 = SN74LS77;
global.SN74LS78A = SN74LS78A;
global.SN74LS83A = SN74LS83A;
global.SN74LS85 = SN74LS85;
global.SN74LS86A = SN74LS86A;
global.SN74LS90 = SN74LS90;
global.SN74LS91 = SN74LS91;
global.SN74LS92 = SN74LS92;
global.SN74LS93 = SN74LS93;
global.SN74LS95B = SN74LS95B;
global.SN74LS96 = SN74LS96;
global.SN74LS107A = SN74LS107A;
global.SN74LS109A = SN74LS109A;
global.SN74LS112A = SN74LS112A;
global.SN74LS113A = SN74LS113A;
global.SN74LS114A = SN74LS114A;
global.SN74LS125A = SN74LS125A;
global.SN74LS126A = SN74LS126A;
global.SN74LS132 = SN74LS132;
global.SN74LS136 = SN74LS136;
global.SN74LS137 = SN74LS137;
global.SN74LS138 = SN74LS138;
global.SN74LS139A = SN74LS139A;
global.SN74LS145 = SN74LS145;
global.SN74LS147 = SN74LS147;
global.SN74LS148 = SN74LS148;
global.SN74LS151 = SN74LS151;
global.SN54LS152 = SN54LS152;
global.SN74LS153 = SN74LS153;
global.SN74LS154 = SN74LS154;
global.SN74LS155A = SN74LS155A;
global.SN74LS156 = SN74LS156;
global.SN74LS157 = SN74LS157;
global.SN74LS158 = SN74LS158;
global.SN74LS160A = SN74LS160A;
global.SN74LS161A = SN74LS161A;
global.SN74LS162A = SN74LS162A;
global.SN74LS163A = SN74LS163A;
global.SN74LS164 = SN74LS164;
global.SN74LS165A = SN74LS165A;
global.SN74LS166A = SN74LS166A;
global.SN74LS169B = SN74LS169B;
global.SN74LS170 = SN74LS170;
global.SN74LS171 = SN74LS171;
global.SN74LS173A = SN74LS173A;
global.SN74LS174 = SN74LS174;
global.SN74LS175 = SN74LS175;
global.SN74LS181 = SN74LS181;
global.SN74LS183 = SN74LS183;
global.SN74LS190 = SN74LS190;
global.SN74LS191 = SN74LS191;
global.SN74LS192 = SN74LS192;
global.SN74LS193 = SN74LS193;
global.SN74LS194A = SN74LS194A;
global.SN74LS195A = SN74LS195A;
global.SN74LS196 = SN74LS196;
global.SN74LS197 = SN74LS197;
global.SN74LS240 = SN74LS240;
global.SN74LS241 = SN74LS241;
global.SN74LS242 = SN74LS242;
global.SN74LS243 = SN74LS243;
global.SN74LS244 = SN74LS244;
global.SN74LS245 = SN74LS245;
global.SN74LS247 = SN74LS247;
global.SN74LS248 = SN74LS248;
global.SN74LS249 = SN74LS249;
global.SN74LS251 = SN74LS251;
global.SN74LS253 = SN74LS253;
global.SN74LS257B = SN74LS257B;
global.SN74LS258B = SN74LS258B;
global.SN74LS259B = SN74LS259B;
global.SN74LS261 = SN74LS261;
global.SN74LS266 = SN74LS266;
global.SN74LS273 = SN74LS273;
global.SN74LS279A = SN74LS279A;
global.SN74LS280 = SN74LS280;
global.SN74LS283 = SN74LS283;
global.SN74LS290 = SN74LS290;
global.SN74LS293 = SN74LS293;
global.SN74LS295B = SN74LS295B;
global.SN74LS298 = SN74LS298;
global.SN74LS299 = SN74LS299;
global.SN74LS322A = SN74LS322A;
global.SN74LS323 = SN74LS323;
global.SN74LS347 = SN74LS347;
global.SN74LS348 = SN74LS348;
global.SN74LS352 = SN74LS352;
global.SN74LS353 = SN74LS353;
global.SN74LS354 = SN74LS354;
global.SN74LS355 = SN74LS355;
global.SN74LS356 = SN74LS356;
global.SN74LS357 = SN74LS357;
global.SN74LS365A = SN74LS365A;
global.SN74LS366A = SN74LS366A;
global.SN74LS367A = SN74LS367A;
global.SN74LS368A = SN74LS368A;
global.SN74LS373 = SN74LS373;
global.SN74LS374 = SN74LS374;
global.SN74LS375 = SN74LS375;
global.SN74LS377 = SN74LS377;
global.SNLS377DAT = SNLS377DAT;
global.SN74LS378 = SN74LS378;
global.SNLS378DAT = SNLS378DAT;
global.SN74LS379 = SN74LS379;
global.SNLS379DAT = SNLS379DAT;
global.SN74LS381A = SN74LS381A;
global.SN74LS382 = SN74LS382;
global.SN74LS386A = SN74LS386A;
global.SN74LS390 = SN74LS390;
global.SN74LS393 = SN74LS393;
global.SN74LS395A = SN74LS395A;
global.SN74LS396 = SN74LS396;
global.SNLS396DAT = SNLS396DAT;
global.SN74LS398 = SN74LS398;
global.SN74LS399 = SN74LS399;
global.SN74LS440 = SN74LS440;
global.SN74LS441 = SN74LS441;
global.SN74LS442 = SN74LS442;
global.SN74LS443 = SN74LS443;
global.SN74LS444 = SN74LS444;
global.SN74LS445 = SN74LS445;
global.SN74LS446 = SN74LS446;
global.SN74LS447 = SN74LS447;
global.SN74LS448 = SN74LS448;
global.SN74LS449 = SN74LS449;
global.SN74LS465 = SN74LS465;
global.SN74LS466 = SN74LS466;
global.SN74LS467 = SN74LS467;
global.SN74LS468 = SN74LS468;
global.SN74LS490 = SN74LS490;
global.SN74LS540 = SN74LS540;
global.SN74LS541 = SN74LS541;
global.SN74LS589 = SN74LS589;
global.SN74LS590 = SN74LS590;
global.SN74LS591 = SN74LS591;
global.SN74LS592 = SN74LS592;
global.SN74LS594 = SN74LS594;
global.SN74LS595 = SN74LS595;
global.SN74LS596 = SN74LS596;
global.SN74LS597 = SN74LS597;
global.SN74LS598 = SN74LS598;
global.SN74LS599 = SN74LS599;
global.SN74LS604 = SN74LS604;
global.SNLS604DAT = SNLS604DAT;
global.SN74LS605 = SN74LS605;
global.SNLS605DAT = SNLS605DAT;
global.SN74LS606 = SN74LS606;
global.SNLS606DAT = SNLS606DAT;
global.SN74LS607 = SN74LS607;
global.SNLS607DAT = SNLS607DAT;
global.SN74LS620 = SN74LS620;
global.SN74LS621 = SN74LS621;
global.SN74LS622 = SN74LS622;
global.SN74LS623 = SN74LS623;
global.SN74LS638 = SN74LS638;
global.SN74LS639 = SN74LS639;
global.SN74LS640 = SN74LS640;
global.SN74LS641 = SN74LS641;
global.SN74LS642 = SN74LS642;
global.SN74LS643 = SN74LS643;
global.SN74LS644 = SN74LS644;
global.SN74LS645 = SN74LS645;
global.SN74LS646 = SN74LS646;
global.SN74LS648 = SN74LS648;
global.SN74LS651 = SN74LS651;
global.SN74LS652 = SN74LS652;
global.SN74LS653 = SN74LS653;
global.SN74LS654 = SN74LS654;
global.SN74LS668 = SN74LS668;
global.SN74LS669 = SN74LS669;
global.SN74LS670 = SN74LS670;
global.SN74LS671 = SN74LS671;
global.SN74LS672 = SN74LS672;
global.SN74LS684 = SN74LS684;
global.SN74LS685 = SN74LS685;
global.SN74LS686 = SN74LS686;
global.SN74LS687 = SN74LS687;
global.SN74LS688 = SN74LS688;
global.SN74LS689 = SN74LS689;
global.SN74LS690 = SN74LS690;
global.SN74LS691 = SN74LS691;
global.SN74LS692 = SN74LS692;
global.SN74LS693 = SN74LS693;
global.SN74LS696 = SN74LS696;
global.SN74LS697 = SN74LS697;
global.SN74LS698 = SN74LS698;
global.SN74LS699 = SN74LS699;