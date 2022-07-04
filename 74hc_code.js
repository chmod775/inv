const { Connect, _D_HI, _D_LO, Logger, Wire, Pin, Footprint, Plug, Circuit, Component, Board, Bus, inv, inva, and, or, bufa, nora, dff, dltch, buf3a, logicexp } = require('./core.js');
/**
 * Quadruple 2-input Positive-Nand Gates
 */
class SN74HC00 extends Component {
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
class SN74HC01 extends Component {
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
class SN74HC02 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Positive-Nand Gates with Open-Collector Outputs
 */
class SN74HC03 extends Component {
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
class SN74HC04 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new inv();
		Connect(this.U1.pins.IN0, this.pins.A);
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
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
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
			Y: new Pin(),
		}
		this.U1 = new and(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Positive-And Gates with Open-Collector Outputs
 */
class SN74HC09 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new and(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Triple 3-input Positive-Nand Gates
 */
class SN74HC10 extends Component {
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
class SN74HC11 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new and(3);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Hex Schmitt-Trigger Inverters
 */
class SN74HC14 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new inv();
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Dual 4-input Positive-Nand Gates
 */
class SN74HC20 extends Component {
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
class SN74HC21 extends Component {
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
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Triple 3-input Positive-Nor Gates
 */
class SN74HC27 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(3);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * 8-input Positive-Nand Gates
 */
class SN74HC30 extends Component {
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
 * Quadruple 2-input Positive-Or Gates
 */
class SN74HC32 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new or(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Hex Noninverters with Open-Collector Outputs
 */
class SN74HC35 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new buf();
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Positive-Nor Gate
 */
class SN74HC36 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * DECODER BCD-DECIMAL 4-10 LINE
 */
class SN74HC42 extends Component {
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
		this.UHC42LOG = new logicexp(['A_I','B_I','C_I','D_I'], ['A','B','C','D','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9'], []).Logic('   A    =  A_I ;   B    =  B_I ;   C    =  C_I ;   D    =  D_I ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    CBAR =  !C ;   CBAR =  !C ;let    DBAR =  !D ;   DBAR =  !D ;   Y0   =  !(DBAR & CBAR & BBAR & ABAR ) ;   Y1   =  !(DBAR & CBAR & BBAR & A    ) ;   Y2   =  !(DBAR & CBAR & B    & ABAR ) ;   Y3   =  !(DBAR & CBAR & B    & A    ) ;   Y4   =  !(DBAR & C    & BBAR & ABAR ) ;   Y5   =  !(DBAR & C    & BBAR & A    ) ;   Y6   =  !(DBAR & C    & B    & ABAR ) ;   Y7   =  !(DBAR & C    & B    & A    ) ;   Y8   =  !(D    & CBAR & BBAR & ABAR ) ;   Y9   =  !(D    & CBAR & BBAR & A    ) ;');
		Connect(this.UHC42LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC42LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC42LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC42LOG.pins.D_I, this.pins.D_I);
		let A = new Pin();
		Connect(this.UHC42LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC42LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC42LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC42LOG.pins.D, D);
		let Y0 = new Pin();
		Connect(this.UHC42LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC42LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC42LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC42LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC42LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.UHC42LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.UHC42LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.UHC42LOG.pins.Y7, Y7);
		let Y8 = new Pin();
		Connect(this.UHC42LOG.pins.Y8, Y8);
		let Y9 = new Pin();
		Connect(this.UHC42LOG.pins.Y9, Y9);
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
class SN74HC51 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			B1: new Pin(),
			C1: new Pin(),
			D1: new Pin(),
			E1: new Pin(),
			F1: new Pin(),
			Y1: new Pin(),
			A2: new Pin(),
			B2: new Pin(),
			C2: new Pin(),
			D2: new Pin(),
			Y2: new Pin(),
		}
		this.U1 = new aoi(3,2);
		Connect(this.U1.pins.IN0_0, this.pins.A1);
		Connect(this.U1.pins.IN0_1, this.pins.B1);
		Connect(this.U1.pins.IN0_2, this.pins.C1);
		Connect(this.U1.pins.IN1_0, this.pins.D1);
		Connect(this.U1.pins.IN1_1, this.pins.E1);
		Connect(this.U1.pins.IN1_2, this.pins.F1);
		Connect(this.U1.pins.OUT, this.pins.Y1);
		this.U2 = new aoi(2,2);
		Connect(this.U2.pins.IN0_0, this.pins.A2);
		Connect(this.U2.pins.IN0_1, this.pins.B2);
		Connect(this.U2.pins.IN1_0, this.pins.C2);
		Connect(this.U2.pins.IN1_1, this.pins.D2);
		Connect(this.U2.pins.OUT, this.pins.Y2);
	}
}
/**
 * Dual J-K Flip-Flops with Clear
 */
class SN74HC73 extends Component {
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
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, this.pins.CLRBAR);
		Connect(this.U1.pins.CLOCK, this.pins.CLK);
		Connect(this.U1.pins.J0, this.pins.J);
		Connect(this.U1.pins.K0, this.pins.K);
		Connect(this.U1.pins.Q0, this.pins.Q);
		Connect(this.U1.pins.QBAR0, this.pins.QBAR);
	}
}
/**
 * Dual D-Type Positive-Edge-Triggered Flip-Flops w_ Preset & Clear
 */
class SN74HC74 extends Component {
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
		Connect(this.UFF1.pins.QBAR0, this.pins._1QBAR);
	}
}
/**
 * 4-bit bistable latches (dual 2-bit common clock)
 */
class SN74HC75 extends Component {
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
		Connect(this.UIBUF.pins.IN0_0, this.pins._1D);
		Connect(this.UIBUF.pins.IN1_0, this.pins._2D);
		Connect(this.UIBUF.pins.IN2_0, this.pins.C);
		let _1D_BUF = new Pin();
		Connect(this.UIBUF.pins.OUT0, _1D_BUF);
		let _2D_BUF = new Pin();
		Connect(this.UIBUF.pins.OUT1, _2D_BUF);
		let C_BUF = new Pin();
		Connect(this.UIBUF.pins.OUT2, C_BUF);
		this.U12 = new dltch(2);
		Connect(this.U12.pins.PRESET, _D_HI);
		Connect(this.U12.pins.CLEAR, _D_HI);
		Connect(this.U12.pins.GATE, C_BUF);
		Connect(this.U12.pins.D0, _1D_BUF);
		Connect(this.U12.pins.D1, _2D_BUF);
		Connect(this.U12.pins.Q0, this.pins._1Q);
		Connect(this.U12.pins.Q1, this.pins._2Q);
		Connect(this.U12.pins.QBAR0, this.pins._1QBAR);
		Connect(this.U12.pins.QBAR1, this.pins._2QBAR);
	}
}
/**
 * Dual J-K Flip-Flops with Preset and Clear
 */
class SN74HC76 extends Component {
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
		Connect(this.U1.pins.PRESET, this.pins.PREBAR);
		Connect(this.U1.pins.CLEAR, this.pins.CLRBAR);
		Connect(this.U1.pins.CLOCK, this.pins.CLK);
		Connect(this.U1.pins.J0, this.pins.J);
		Connect(this.U1.pins.K0, this.pins.K);
		Connect(this.U1.pins.Q0, this.pins.Q);
		Connect(this.U1.pins.QBAR0, this.pins.QBAR);
	}
}
/**
 * Dual J-K Flip-Flops with Preset, Common Clear, and Common Clock
 */
class SN74HC78 extends Component {
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
		Connect(this.UIBUF.pins.IN0_0, this.pins.CLK);
		Connect(this.UIBUF.pins.IN1_0, this.pins.CLRBAR);
		Connect(this.UIBUF.pins.IN2_0, this.pins._1PREBAR);
		Connect(this.UIBUF.pins.IN3_0, this.pins._2PREBAR);
		let CLK_BUF = new Pin();
		Connect(this.UIBUF.pins.OUT0, CLK_BUF);
		let CLRBAR_BUF = new Pin();
		Connect(this.UIBUF.pins.OUT1, CLRBAR_BUF);
		let _1PREB = new Pin();
		Connect(this.UIBUF.pins.OUT2, _1PREB);
		let _2PREB = new Pin();
		Connect(this.UIBUF.pins.OUT3, _2PREB);
		this.U1 = new jkff(1);
		Connect(this.U1.pins.PRESET, _1PREB);
		Connect(this.U1.pins.CLEAR, CLRBAR_BUF);
		Connect(this.U1.pins.CLOCK, CLK_BUF);
		Connect(this.U1.pins.J0, this.pins._1J);
		Connect(this.U1.pins.K0, this.pins._1K);
		Connect(this.U1.pins.Q0, this.pins._1Q);
		Connect(this.U1.pins.QBAR0, this.pins._1QBAR);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _2PREB);
		Connect(this.U2.pins.CLEAR, CLRBAR_BUF);
		Connect(this.U2.pins.CLOCK, CLK_BUF);
		Connect(this.U2.pins.J0, this.pins._2J);
		Connect(this.U2.pins.K0, this.pins._2K);
		Connect(this.U2.pins.Q0, this.pins._2Q);
		Connect(this.U2.pins.QBAR0, this.pins._2QBAR);
	}
}
/**
 * 4-BIT MAGNITUDE COMPARATOR
 */
class SN74HC85A extends Component {
	constructor() {
		super();
		this.pins = {
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Q3_I: new Pin(),
			Q2_I: new Pin(),
			Q1_I: new Pin(),
			Q0_I: new Pin(),
			PGQ_I: new Pin(),
			PEQ_I: new Pin(),
			PLQ_I: new Pin(),
			YPGQ_O: new Pin(),
			YPEQ_O: new Pin(),
			YPLQ_O: new Pin(),
		}
		this.UHC85ALOG = new logicexp(['P3_I','P2_I','P1_I','P0_I','Q3_I','Q2_I','Q1_I','Q0_I','PGQ_I','PEQ_I','PLQ_I'], ['P3','P2','P1','P0','Q3','Q2','Q1','Q0','PGQ','PEQ','PLQ','YPGQ','YPEQ','YPLQ'], []).Logic('   P3     =  P3_I ;   P2     =  P2_I ;   P1     =  P1_I ;   P0     =  P0_I ;   Q3     =  Q3_I ;   Q2     =  Q2_I ;   Q1     =  Q1_I ;   Q0     =  Q0_I ;   PGQ    =  PGQ_I ;   PEQ    =  PEQ_I ;   PLQ    =  PLQ_I ;let    C3     =  !(P3 & Q3) ;   C3     =  !(P3 & Q3) ;let    C2     =  !(P2 & Q2) ;   C2     =  !(P2 & Q2) ;let    C1     =  !(P1 & Q1) ;   C1     =  !(P1 & Q1) ;let    C0     =  !(P0 & Q0) ;   C0     =  !(P0 & Q0) ;let    P3C3    =  P3 & C3 ;   P3C3    =  P3 & C3 ;let    P2C2    =  P2 & C2 ;   P2C2    =  P2 & C2 ;let    P1C1    =  P1 & C1 ;   P1C1    =  P1 & C1 ;let    P0C0    =  P0 & C0 ;   P0C0    =  P0 & C0 ;let    Q3C3    =  Q3 & C3 ;   Q3C3    =  Q3 & C3 ;let    Q2C2    =  Q2 & C2 ;   Q2C2    =  Q2 & C2 ;let    Q1C1    =  Q1 & C1 ;   Q1C1    =  Q1 & C1 ;let    Q0C0    =  Q0 & C0 ;   Q0C0    =  Q0 & C0 ;let    D3      =  !(P3C3 | Q3C3) ;   D3      =  !(P3C3 | Q3C3) ;let    D2      =  !(P2C2 | Q2C2) ;   D2      =  !(P2C2 | Q2C2) ;let    D1      =  !(P1C1 | Q1C1) ;   D1      =  !(P1C1 | Q1C1) ;let    D0      =  !(P0C0 | Q0C0) ;   D0      =  !(P0C0 | Q0C0) ;let    D32     =  D3 & D2 ;   D32     =  D3 & D2 ;let    D31     =  D32 & D1 ;   D31     =  D32 & D1 ;let    D30     =  D31 & D0 ;   D30     =  D31 & D0 ;   YPGQ  =  !Q3C3 & !(Q2C2 & D3) & !(Q1C1 & D32) & !(Q0C0 & D31) &             !(PLQ & D30) & !(PEQ & D30) ;   YPEQ  =  D30 & PEQ ;   YPLQ  =  !(PEQ & D30) & !(PGQ & D30) & !(P0C0 & D31) & !(P1C1 & D32) &             !(P2C2 & D3) & !P3C3 ;');
		Connect(this.UHC85ALOG.pins.P3_I, this.pins.P3_I);
		Connect(this.UHC85ALOG.pins.P2_I, this.pins.P2_I);
		Connect(this.UHC85ALOG.pins.P1_I, this.pins.P1_I);
		Connect(this.UHC85ALOG.pins.P0_I, this.pins.P0_I);
		Connect(this.UHC85ALOG.pins.Q3_I, this.pins.Q3_I);
		Connect(this.UHC85ALOG.pins.Q2_I, this.pins.Q2_I);
		Connect(this.UHC85ALOG.pins.Q1_I, this.pins.Q1_I);
		Connect(this.UHC85ALOG.pins.Q0_I, this.pins.Q0_I);
		Connect(this.UHC85ALOG.pins.PGQ_I, this.pins.PGQ_I);
		Connect(this.UHC85ALOG.pins.PEQ_I, this.pins.PEQ_I);
		Connect(this.UHC85ALOG.pins.PLQ_I, this.pins.PLQ_I);
		let P3 = new Pin();
		Connect(this.UHC85ALOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.UHC85ALOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.UHC85ALOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.UHC85ALOG.pins.P0, P0);
		let Q3 = new Pin();
		Connect(this.UHC85ALOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.UHC85ALOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.UHC85ALOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.UHC85ALOG.pins.Q0, Q0);
		let PGQ = new Pin();
		Connect(this.UHC85ALOG.pins.PGQ, PGQ);
		let PEQ = new Pin();
		Connect(this.UHC85ALOG.pins.PEQ, PEQ);
		let PLQ = new Pin();
		Connect(this.UHC85ALOG.pins.PLQ, PLQ);
		let YPGQ = new Pin();
		Connect(this.UHC85ALOG.pins.YPGQ, YPGQ);
		let YPEQ = new Pin();
		Connect(this.UHC85ALOG.pins.YPEQ, YPEQ);
		let YPLQ = new Pin();
		Connect(this.UHC85ALOG.pins.YPLQ, YPLQ);
		Connect(YPGQ, this.pins.YPGQ_O);
		Connect(YPEQ, this.pins.YPEQ_O);
		Connect(YPLQ, this.pins.YPLQ_O);
	}
}
/**
 * Quadruple 2-input Exclusive-Or Gates
 */
class SN74HC86 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new xor();
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * COUNTER BINARY 4-BIT, ASYNCHRONOUS
 */
class SN74HC93 extends Component {
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
		Connect(this.U1.pins.PRESET, _D_HI);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CLRBAR);
		let CKA = new Pin();
		Connect(this.U1.pins.CLOCK, CKA);
		Connect(this.U1.pins.J0, _D_HI);
		Connect(this.U1.pins.K0, _D_HI);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, CLRBAR);
		let CKB = new Pin();
		Connect(this.U2.pins.CLOCK, CKB);
		Connect(this.U2.pins.J0, _D_HI);
		Connect(this.U2.pins.K0, _D_HI);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		Connect(this.U2.pins.QBAR0, _D_NC);
		this.U3 = new jkff(1);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, CLRBAR);
		Connect(this.U3.pins.CLOCK, QB);
		Connect(this.U3.pins.J0, _D_HI);
		Connect(this.U3.pins.K0, _D_HI);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		Connect(this.U3.pins.QBAR0, _D_NC);
		this.U4 = new jkff(1);
		Connect(this.U4.pins.PRESET, _D_HI);
		Connect(this.U4.pins.CLEAR, CLRBAR);
		Connect(this.U4.pins.CLOCK, QC);
		Connect(this.U4.pins.J0, _D_HI);
		Connect(this.U4.pins.K0, _D_HI);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		Connect(this.U4.pins.QBAR0, _D_NC);
		this.U5 = new bufa(4);
		Connect(this.U5.pins.IN0_0, this.pins.CKA_I);
		Connect(this.U5.pins.IN1_0, this.pins.CKB_I);
		Connect(this.U5.pins.IN2_0, this.pins.R01_I);
		Connect(this.U5.pins.IN3_0, this.pins.R02_I);
		Connect(this.U5.pins.OUT0, CKA);
		Connect(this.U5.pins.OUT1, CKB);
		let R01 = new Pin();
		Connect(this.U5.pins.OUT2, R01);
		let R02 = new Pin();
		Connect(this.U5.pins.OUT3, R02);
		this.U6 = new nand(2);
		Connect(this.U6.pins.IN0, R01);
		Connect(this.U6.pins.IN1, R02);
		Connect(this.U6.pins.OUT, CLRBAR);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * 4-BIT PARALLEL SHIFT REGISTERS
 */
class SN74HC95 extends Component {
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
		this.UHC95LOG = new logicexp(['MODE_I','CLK1_I','CLK2_I','SER_I','A_I','B_I','C_I','D_I','QA','QB','QC'], ['MODE','CLK1','CLK2','SER','A','B','C','D','CLK','DA','DB','DC','DD'], []).Logic('   MODE =  MODE_I ;   CLK1 =  CLK1_I ;   CLK2 =  CLK2_I ;   SER =  SER_I ;   A   =  A_I ;   B   =  B_I ;   C   =  C_I ;   D   =  D_I ;let    MODEBAR =  !MODE ;   MODEBAR =  !MODE ;   CLK =  !((MODEBAR  & CLK1) | (MODE  & CLK2)) ;   DA  =  (MODEBAR  & SER)    | (MODE  & A) ;   DB  =  (MODEBAR  & QA) | (MODE  & B) ;   DC  =  (MODEBAR  & QB) | (MODE  & C) ;   DD  =  (MODEBAR  & QC) | (MODE  & D) ;');
		Connect(this.UHC95LOG.pins.MODE_I, this.pins.MODE_I);
		Connect(this.UHC95LOG.pins.CLK1_I, this.pins.CLK1_I);
		Connect(this.UHC95LOG.pins.CLK2_I, this.pins.CLK2_I);
		Connect(this.UHC95LOG.pins.SER_I, this.pins.SER_I);
		Connect(this.UHC95LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC95LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC95LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC95LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.UHC95LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.UHC95LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.UHC95LOG.pins.QC, QC);
		let MODE = new Pin();
		Connect(this.UHC95LOG.pins.MODE, MODE);
		let CLK1 = new Pin();
		Connect(this.UHC95LOG.pins.CLK1, CLK1);
		let CLK2 = new Pin();
		Connect(this.UHC95LOG.pins.CLK2, CLK2);
		let SER = new Pin();
		Connect(this.UHC95LOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.UHC95LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC95LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC95LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC95LOG.pins.D, D);
		let CLK = new Pin();
		Connect(this.UHC95LOG.pins.CLK, CLK);
		let DA = new Pin();
		Connect(this.UHC95LOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.UHC95LOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.UHC95LOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.UHC95LOG.pins.DD, DD);
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
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * Dual J-K Flip-Flops with Clear
 */
class SN74HC107 extends Component {
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
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, this.pins.CLRBAR);
		Connect(this.U1.pins.CLOCK, this.pins.CLK);
		Connect(this.U1.pins.J0, this.pins.J);
		Connect(this.U1.pins.K0, this.pins.K);
		Connect(this.U1.pins.Q0, this.pins.Q);
		Connect(this.U1.pins.QBAR0, this.pins.QBAR);
	}
}
/**
 * Dual J-Kbar Positive-Edge-Triggered Flip-Flops w_ Preset & Clear
 */
class SN74HC109 extends Component {
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
		this.U1 = new jkff(1);
		Connect(this.U1.pins.PRESET, this.pins.PREBAR);
		Connect(this.U1.pins.CLEAR, this.pins.CLRBAR);
		let CLKBAR = new Pin();
		Connect(this.U1.pins.CLOCK, CLKBAR);
		Connect(this.U1.pins.J0, this.pins.J);
		let K = new Pin();
		Connect(this.U1.pins.K0, K);
		Connect(this.U1.pins.Q0, this.pins.Q);
		Connect(this.U1.pins.QBAR0, this.pins.QBAR);
		this.U2 = new inva(2);
		Connect(this.U2.pins.IN0_0, this.pins.KBAR);
		Connect(this.U2.pins.IN1_0, this.pins.CLK);
		Connect(this.U2.pins.OUT0, K);
		Connect(this.U2.pins.OUT1, CLKBAR);
	}
}
/**
 * Dual J-K Negative-Edge-Triggered Flip-Flops with Preset & Clear
 */
class SN74HC112 extends Component {
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
		Connect(this.U1.pins.PRESET, this.pins.PREBAR);
		Connect(this.U1.pins.CLEAR, this.pins.CLRBAR);
		Connect(this.U1.pins.CLOCK, this.pins.CLK);
		Connect(this.U1.pins.J0, this.pins.J);
		Connect(this.U1.pins.K0, this.pins.K);
		Connect(this.U1.pins.Q0, this.pins.Q);
		Connect(this.U1.pins.QBAR0, this.pins.QBAR);
	}
}
/**
 * Dual J-K Negative-Edge-Triggered Flip-Flops with Preset
 */
class SN74HC113 extends Component {
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
		Connect(this.U1.pins.PRESET, this.pins.PREBAR);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.CLOCK, this.pins.CLK);
		Connect(this.U1.pins.J0, this.pins.J);
		Connect(this.U1.pins.K0, this.pins.K);
		Connect(this.U1.pins.Q0, this.pins.Q);
		Connect(this.U1.pins.QBAR0, this.pins.QBAR);
	}
}
/**
 * Dual J-K Negative-Edge-Triggered Flip-Flops with Preset & Common Clear, & Common Clock
 */
class SN74HC114 extends Component {
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
		Connect(this.UIBUF.pins.IN0_0, this.pins.CLK);
		Connect(this.UIBUF.pins.IN1_0, this.pins.CLRBAR);
		Connect(this.UIBUF.pins.IN2_0, this.pins._1PREBAR);
		Connect(this.UIBUF.pins.IN3_0, this.pins._2PREBAR);
		let CLK_BUF = new Pin();
		Connect(this.UIBUF.pins.OUT0, CLK_BUF);
		let CLRBAR_BUF = new Pin();
		Connect(this.UIBUF.pins.OUT1, CLRBAR_BUF);
		let _1PREB = new Pin();
		Connect(this.UIBUF.pins.OUT2, _1PREB);
		let _2PREB = new Pin();
		Connect(this.UIBUF.pins.OUT3, _2PREB);
		this.U1 = new jkff(1);
		Connect(this.U1.pins.PRESET, _1PREB);
		Connect(this.U1.pins.CLEAR, CLRBAR_BUF);
		Connect(this.U1.pins.CLOCK, CLK_BUF);
		Connect(this.U1.pins.J0, this.pins._1J);
		Connect(this.U1.pins.K0, this.pins._1K);
		Connect(this.U1.pins.Q0, this.pins._1Q);
		Connect(this.U1.pins.QBAR0, this.pins._1QBAR);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _2PREB);
		Connect(this.U2.pins.CLEAR, CLRBAR_BUF);
		Connect(this.U2.pins.CLOCK, CLK_BUF);
		Connect(this.U2.pins.J0, this.pins._2J);
		Connect(this.U2.pins.K0, this.pins._2K);
		Connect(this.U2.pins.Q0, this.pins._2Q);
		Connect(this.U2.pins.QBAR0, this.pins._2QBAR);
	}
}
/**
 * Quadruple Bus Buffer with 3-state Outputs
 */
class SN74HC125 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			GBAR: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new buf3();
		Connect(this.U1.pins.IN0, this.pins.A);
		let G = new Pin();
		Connect(this.U1.pins.EN, G);
		Connect(this.U1.pins.OUT, this.pins.Y);
		this.U2 = new inv();
		Connect(this.U2.pins.IN0, this.pins.GBAR);
		Connect(this.U2.pins.OUT, G);
	}
}
/**
 * Quadruple Bus Buffer with 3-state Outputs
 */
class SN74HC126 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			G: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new buf3();
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.EN, this.pins.G);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Quadruple 2-input Positive-Nand Schmitt Triggers
 */
class SN74HC132 extends Component {
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
 * 13-input Positive-Nand Gates
 */
class SN74HC133 extends Component {
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
			K: new Pin(),
			L: new Pin(),
			M: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nand(13);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.IN4, this.pins.E);
		Connect(this.U1.pins.IN5, this.pins.F);
		Connect(this.U1.pins.IN6, this.pins.G);
		Connect(this.U1.pins.IN7, this.pins.H);
		Connect(this.U1.pins.IN8, this.pins.I);
		Connect(this.U1.pins.IN9, this.pins.J);
		Connect(this.U1.pins.IN10, this.pins.K);
		Connect(this.U1.pins.IN11, this.pins.L);
		Connect(this.U1.pins.IN12, this.pins.M);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * DECODER_DEMULTIPLEXER 3-8 LINE WITH ADDRESS LATCHES
 */
class SN74HC137 extends Component {
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
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let LATCHEN = new Pin();
		Connect(this.U1.pins.GATE, LATCHEN);
		let A = new Pin();
		Connect(this.U1.pins.D0, A);
		let B = new Pin();
		Connect(this.U1.pins.D1, B);
		let C = new Pin();
		Connect(this.U1.pins.D2, C);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QABAR = new Pin();
		Connect(this.U1.pins.QBAR0, QABAR);
		let QBBAR = new Pin();
		Connect(this.U1.pins.QBAR1, QBBAR);
		let QCBAR = new Pin();
		Connect(this.U1.pins.QBAR2, QCBAR);
		this.UHC137LOG = new logicexp(['G1_I','G2BAR_I','GLBAR_I','A_I','B_I','C_I','QA','QB','QC','QABAR','QBBAR','QCBAR'], ['GLBAR','A','B','C','LATCHEN','ENABLE','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7'], []).Logic('let    G1      =  G1_I ;   G1      =  G1_I ;let    G2BAR   =  G2BAR_I ;   G2BAR   =  G2BAR_I ;   GLBAR   =  GLBAR_I ;   A       =  A_I ;   B       =  B_I ;   C       =  C_I ;   LATCHEN =  !GLBAR ;   ENABLE  =  G1 & !G2BAR ;   Y0      =  !(ENABLE & QCBAR & QBBAR & QABAR) ;   Y1      =  !(ENABLE & QCBAR & QBBAR & QA   ) ;   Y2      =  !(ENABLE & QCBAR & QB    & QABAR) ;   Y3      =  !(ENABLE & QCBAR & QB    & QA   ) ;   Y4      =  !(ENABLE & QC    & QBBAR & QABAR) ;   Y5      =  !(ENABLE & QC    & QBBAR & QA   ) ;   Y6      =  !(ENABLE & QC    & QB    & QABAR) ;   Y7      =  !(ENABLE & QC    & QB    & QA   ) ;');
		Connect(this.UHC137LOG.pins.G1_I, this.pins.G1_I);
		Connect(this.UHC137LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC137LOG.pins.GLBAR_I, this.pins.GLBAR_I);
		Connect(this.UHC137LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC137LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC137LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC137LOG.pins.QA, QA);
		Connect(this.UHC137LOG.pins.QB, QB);
		Connect(this.UHC137LOG.pins.QC, QC);
		Connect(this.UHC137LOG.pins.QABAR, QABAR);
		Connect(this.UHC137LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC137LOG.pins.QCBAR, QCBAR);
		let GLBAR = new Pin();
		Connect(this.UHC137LOG.pins.GLBAR, GLBAR);
		Connect(this.UHC137LOG.pins.A, A);
		Connect(this.UHC137LOG.pins.B, B);
		Connect(this.UHC137LOG.pins.C, C);
		Connect(this.UHC137LOG.pins.LATCHEN, LATCHEN);
		let ENABLE = new Pin();
		Connect(this.UHC137LOG.pins.ENABLE, ENABLE);
		let Y0 = new Pin();
		Connect(this.UHC137LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC137LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC137LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC137LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC137LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.UHC137LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.UHC137LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.UHC137LOG.pins.Y7, Y7);
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
class SN74HC138 extends Component {
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
		this.UHC138LOG = new logicexp(['G1_I','G2ABAR_I','G2BBAR_I','A_I','B_I','C_I'], ['ENABLE','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7'], []).Logic('let    G1     =  G1_I ;   G1     =  G1_I ;let    G2ABAR =  G2ABAR_I ;   G2ABAR =  G2ABAR_I ;let    G2BBAR =  G2BBAR_I ;   G2BBAR =  G2BBAR_I ;let    A      =  A_I ;   A      =  A_I ;let    B      =  B_I ;   B      =  B_I ;let    C      =  C_I ;   C      =  C_I ;let    ABAR   =  !A ;   ABAR   =  !A ;let    BBAR   =  !B ;   BBAR   =  !B ;let    CBAR   =  !C ;   CBAR   =  !C ;   ENABLE =  !G2ABAR & !G2BBAR & G1 ;   Y0     =  !(ENABLE & CBAR & BBAR & ABAR) ;   Y1     =  !(ENABLE & CBAR & BBAR & A   ) ;   Y2     =  !(ENABLE & CBAR & B    & ABAR) ;   Y3     =  !(ENABLE & CBAR & B    & A   ) ;   Y4     =  !(ENABLE & C    & BBAR & ABAR) ;   Y5     =  !(ENABLE & C    & BBAR & A   ) ;   Y6     =  !(ENABLE & C    & B    & ABAR) ;   Y7     =  !(ENABLE & C    & B    & A   ) ;');
		Connect(this.UHC138LOG.pins.G1_I, this.pins.G1_I);
		Connect(this.UHC138LOG.pins.G2ABAR_I, this.pins.G2ABAR_I);
		Connect(this.UHC138LOG.pins.G2BBAR_I, this.pins.G2BBAR_I);
		Connect(this.UHC138LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC138LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC138LOG.pins.C_I, this.pins.C_I);
		let ENABLE = new Pin();
		Connect(this.UHC138LOG.pins.ENABLE, ENABLE);
		let Y0 = new Pin();
		Connect(this.UHC138LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC138LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC138LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC138LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC138LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.UHC138LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.UHC138LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.UHC138LOG.pins.Y7, Y7);
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
class SN74HC139 extends Component {
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
		this.UHC139LOG = new logicexp(['GBAR_I','A_I','B_I'], ['GBAR','A','B','Y0','Y1','Y2','Y3'], []).Logic('   GBAR   =  GBAR_I ;   A      =  A_I ;   B      =  B_I ;let    ABAR   =  !A ;   ABAR   =  !A ;let    BBAR   =  !B ;   BBAR   =  !B ;let    ENABLE =  !GBAR ;   ENABLE =  !GBAR ;   Y0     =  !(ENABLE & BBAR & ABAR ) ;   Y1     =  !(ENABLE & BBAR & A    ) ;   Y2     =  !(ENABLE & B    & ABAR ) ;   Y3     =  !(ENABLE & B    & A    ) ;');
		Connect(this.UHC139LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC139LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC139LOG.pins.B_I, this.pins.B_I);
		let GBAR = new Pin();
		Connect(this.UHC139LOG.pins.GBAR, GBAR);
		let A = new Pin();
		Connect(this.UHC139LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC139LOG.pins.B, B);
		let Y0 = new Pin();
		Connect(this.UHC139LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC139LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC139LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC139LOG.pins.Y3, Y3);
		Connect(Y0, this.pins.Y0_O);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
	}
}
/**
 * PRIORITY ENCODER 10-4 LINE
 */
class SN74HC147 extends Component {
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
		this.UHC147LOG = new logicexp(['IN1_I','IN2_I','IN3_I','IN4_I','IN5_I','IN6_I','IN7_I','IN8_I','IN9_I'], ['IN1','IN2','IN3','IN4','IN5','IN6','IN7','IN8','IN9','A','B','C','D'], []).Logic(' IN1    =  IN1_I ; IN2    =  IN2_I ; IN3    =  IN3_I ; IN4    =  IN4_I ; IN5    =  IN5_I ; IN6    =  IN6_I ; IN7    =  IN7_I ; IN8    =  IN8_I ; IN9    =  IN9_I ;let  IN1BAR =  !IN1 ; IN1BAR =  !IN1 ;let  IN2BAR =  !IN2 ; IN2BAR =  !IN2 ;let  IN3BAR =  !IN3 ; IN3BAR =  !IN3 ;let  IN4BAR =  !IN4 ; IN4BAR =  !IN4 ;let  IN5BAR =  !IN5 ; IN5BAR =  !IN5 ;let  IN6BAR =  !IN6 ; IN6BAR =  !IN6 ;let  IN7BAR =  !IN7 ; IN7BAR =  !IN7 ;let  IN8BAR =  !IN8 ; IN8BAR =  !IN8 ;let  IN9BAR =  !IN9 ; IN9BAR =  !IN9 ; D      =  IN8 & IN9 ; C      =  !(D & (IN4BAR | IN5BAR | IN6BAR | IN7BAR)) ; B      =  !(D & ((IN2BAR & IN4 & IN5) |                       (IN3BAR & IN4 & IN5) | IN6BAR | IN7BAR)) ; A      =  !(IN9BAR | D & ((IN1BAR & IN2 & IN4 & IN6) |                       (IN3BAR & IN4 & IN6) | (IN5BAR & IN6) | IN7BAR)) ;');
		Connect(this.UHC147LOG.pins.IN1_I, this.pins.IN1_I);
		Connect(this.UHC147LOG.pins.IN2_I, this.pins.IN2_I);
		Connect(this.UHC147LOG.pins.IN3_I, this.pins.IN3_I);
		Connect(this.UHC147LOG.pins.IN4_I, this.pins.IN4_I);
		Connect(this.UHC147LOG.pins.IN5_I, this.pins.IN5_I);
		Connect(this.UHC147LOG.pins.IN6_I, this.pins.IN6_I);
		Connect(this.UHC147LOG.pins.IN7_I, this.pins.IN7_I);
		Connect(this.UHC147LOG.pins.IN8_I, this.pins.IN8_I);
		Connect(this.UHC147LOG.pins.IN9_I, this.pins.IN9_I);
		let IN1 = new Pin();
		Connect(this.UHC147LOG.pins.IN1, IN1);
		let IN2 = new Pin();
		Connect(this.UHC147LOG.pins.IN2, IN2);
		let IN3 = new Pin();
		Connect(this.UHC147LOG.pins.IN3, IN3);
		let IN4 = new Pin();
		Connect(this.UHC147LOG.pins.IN4, IN4);
		let IN5 = new Pin();
		Connect(this.UHC147LOG.pins.IN5, IN5);
		let IN6 = new Pin();
		Connect(this.UHC147LOG.pins.IN6, IN6);
		let IN7 = new Pin();
		Connect(this.UHC147LOG.pins.IN7, IN7);
		let IN8 = new Pin();
		Connect(this.UHC147LOG.pins.IN8, IN8);
		let IN9 = new Pin();
		Connect(this.UHC147LOG.pins.IN9, IN9);
		let A = new Pin();
		Connect(this.UHC147LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC147LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC147LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC147LOG.pins.D, D);
		Connect(A, this.pins.A_O);
		Connect(B, this.pins.B_O);
		Connect(C, this.pins.C_O);
		Connect(D, this.pins.D_O);
	}
}
/**
 * PRIORITY ENCODER 8-3 LINE
 */
class SN74HC148 extends Component {
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
		this.UHC148LOG = new logicexp(['IN0_I','IN1_I','IN2_I','IN3_I','IN4_I','IN5_I','IN6_I','IN7_I','EI_I'], ['IN0','IN1','IN2','IN3','IN4','IN5','IN6','IN7','EI','A0','A1','A2','GS','EO'], []).Logic(' IN0    =  IN0_I ; IN1    =  IN1_I ; IN2    =  IN2_I ; IN3    =  IN3_I ; IN4    =  IN4_I ; IN5    =  IN5_I ; IN6    =  IN6_I ; IN7    =  IN7_I ; EI     =  EI_I ;let  IN0BAR =  !IN0 ; IN0BAR =  !IN0 ;let  IN1BAR =  !IN1 ; IN1BAR =  !IN1 ;let  IN2BAR =  !IN2 ; IN2BAR =  !IN2 ;let  IN3BAR =  !IN3 ; IN3BAR =  !IN3 ;let  IN4BAR =  !IN4 ; IN4BAR =  !IN4 ;let  IN5BAR =  !IN5 ; IN5BAR =  !IN5 ;let  IN6BAR =  !IN6 ; IN6BAR =  !IN6 ;let  IN7BAR =  !IN7 ; IN7BAR =  !IN7 ;let  EIBAR  =  !EI ; EIBAR  =  !EI ; A0     =  !(EIBAR & ((IN1BAR & IN2 & IN4 & IN6) |                       (IN3BAR & IN4 & IN6) | (IN5BAR & IN6) | IN7BAR)) ; A1     =  !(EIBAR & ((IN2BAR & IN4 & IN5) |                       (IN3BAR & IN4 & IN5) | IN6BAR | IN7BAR)) ; A2     =  !(EIBAR & (IN4BAR | IN5BAR | IN6BAR | IN7BAR)) ; EO     =  !(IN0 & IN1 & IN2 & IN3 & IN4 & IN5 & IN6 & IN7 & EIBAR) ; GS     =  !(EO & EIBAR) ;');
		Connect(this.UHC148LOG.pins.IN0_I, this.pins.IN0_I);
		Connect(this.UHC148LOG.pins.IN1_I, this.pins.IN1_I);
		Connect(this.UHC148LOG.pins.IN2_I, this.pins.IN2_I);
		Connect(this.UHC148LOG.pins.IN3_I, this.pins.IN3_I);
		Connect(this.UHC148LOG.pins.IN4_I, this.pins.IN4_I);
		Connect(this.UHC148LOG.pins.IN5_I, this.pins.IN5_I);
		Connect(this.UHC148LOG.pins.IN6_I, this.pins.IN6_I);
		Connect(this.UHC148LOG.pins.IN7_I, this.pins.IN7_I);
		Connect(this.UHC148LOG.pins.EI_I, this.pins.EI_I);
		let IN0 = new Pin();
		Connect(this.UHC148LOG.pins.IN0, IN0);
		let IN1 = new Pin();
		Connect(this.UHC148LOG.pins.IN1, IN1);
		let IN2 = new Pin();
		Connect(this.UHC148LOG.pins.IN2, IN2);
		let IN3 = new Pin();
		Connect(this.UHC148LOG.pins.IN3, IN3);
		let IN4 = new Pin();
		Connect(this.UHC148LOG.pins.IN4, IN4);
		let IN5 = new Pin();
		Connect(this.UHC148LOG.pins.IN5, IN5);
		let IN6 = new Pin();
		Connect(this.UHC148LOG.pins.IN6, IN6);
		let IN7 = new Pin();
		Connect(this.UHC148LOG.pins.IN7, IN7);
		let EI = new Pin();
		Connect(this.UHC148LOG.pins.EI, EI);
		let A0 = new Pin();
		Connect(this.UHC148LOG.pins.A0, A0);
		let A1 = new Pin();
		Connect(this.UHC148LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC148LOG.pins.A2, A2);
		let GS = new Pin();
		Connect(this.UHC148LOG.pins.GS, GS);
		let EO = new Pin();
		Connect(this.UHC148LOG.pins.EO, EO);
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
class SN74HC151 extends Component {
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
		this.UHC151LOG = new logicexp(['GBAR_I','A_I','B_I','C_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I'], ['GBAR','A','B','C','D0','D1','D2','D3','D4','D5','D6','D7','W','Y'], []).Logic('   GBAR =  GBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D0 =  D0_I ;   D1 =  D1_I ;   D2 =  D2_I ;   D3 =  D3_I ;   D4 =  D4_I ;   D5 =  D5_I ;   D6 =  D6_I ;   D7 =  D7_I ;let    IA =  !A ;   IA =  !A ;let    IB =  !B ;   IB =  !B ;let    IC =  !C ;   IC =  !C ;let    IG =  !GBAR ;   IG =  !GBAR ;let    ID0 =  D0 & IA & IB & IC & IG ;   ID0 =  D0 & IA & IB & IC & IG ;let    ID1 =  D1 & A & IB & IC & IG ;   ID1 =  D1 & A & IB & IC & IG ;let    ID2 =  D2 & IA & B & IC & IG ;   ID2 =  D2 & IA & B & IC & IG ;let    ID3 =  D3 & A & B & IC & IG ;   ID3 =  D3 & A & B & IC & IG ;let    ID4 =  D4 & IA & IB & C & IG ;   ID4 =  D4 & IA & IB & C & IG ;let    ID5 =  D5 & A & IB & C & IG ;   ID5 =  D5 & A & IB & C & IG ;let    ID6 =  D6 & IA & B & C & IG ;   ID6 =  D6 & IA & B & C & IG ;let    ID7 =  D7 & A & B & C & IG ;   ID7 =  D7 & A & B & C & IG ;   W =  !(ID0 | ID1 | ID2 | ID3 | ID4 | ID5 | ID6 | ID7) ;   Y =  !W ;');
		Connect(this.UHC151LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC151LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC151LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC151LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC151LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.UHC151LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.UHC151LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.UHC151LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.UHC151LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.UHC151LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.UHC151LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.UHC151LOG.pins.D7_I, this.pins.D7_I);
		let GBAR = new Pin();
		Connect(this.UHC151LOG.pins.GBAR, GBAR);
		let A = new Pin();
		Connect(this.UHC151LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC151LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC151LOG.pins.C, C);
		let D0 = new Pin();
		Connect(this.UHC151LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.UHC151LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.UHC151LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.UHC151LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.UHC151LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.UHC151LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.UHC151LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.UHC151LOG.pins.D7, D7);
		let W = new Pin();
		Connect(this.UHC151LOG.pins.W, W);
		let Y = new Pin();
		Connect(this.UHC151LOG.pins.Y, Y);
		Connect(W, this.pins.W_O);
		Connect(Y, this.pins.Y_O);
	}
}
/**
 * MULTIPLEXER_DATA SELECTOR 8-1 LINE
 */
class SN74HC152 extends Component {
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
		this.UHC152LOG = new logicexp(['A_I','B_I','C_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I'], ['A','B','C','D0','D1','D2','D3','D4','D5','D6','D7','W'], []).Logic('   A =  A_I ;   B =  B_I ;   C =  C_I ;   D0 =  D0_I ;   D1 =  D1_I ;   D2 =  D2_I ;   D3 =  D3_I ;   D4 =  D4_I ;   D5 =  D5_I ;   D6 =  D6_I ;   D7 =  D7_I ;let    IA =  !A ;   IA =  !A ;let    IB =  !B ;   IB =  !B ;let    IC =  !C ;   IC =  !C ;let    ID0 =  D0 & IA & IB & IC ;   ID0 =  D0 & IA & IB & IC ;let    ID1 =  D1 & A & IB & IC ;   ID1 =  D1 & A & IB & IC ;let    ID2 =  D2 & IA & B & IC ;   ID2 =  D2 & IA & B & IC ;let    ID3 =  D3 & A & B & IC ;   ID3 =  D3 & A & B & IC ;let    ID4 =  D4 & IA & IB & C ;   ID4 =  D4 & IA & IB & C ;let    ID5 =  D5 & A & IB & C ;   ID5 =  D5 & A & IB & C ;let    ID6 =  D6 & IA & B & C ;   ID6 =  D6 & IA & B & C ;let    ID7 =  D7 & A & B & C ;   ID7 =  D7 & A & B & C ;   W =  !(ID0 | ID1 | ID2 | ID3 | ID4 | ID5 | ID6 | ID7) ;');
		Connect(this.UHC152LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC152LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC152LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC152LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.UHC152LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.UHC152LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.UHC152LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.UHC152LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.UHC152LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.UHC152LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.UHC152LOG.pins.D7_I, this.pins.D7_I);
		let A = new Pin();
		Connect(this.UHC152LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC152LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC152LOG.pins.C, C);
		let D0 = new Pin();
		Connect(this.UHC152LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.UHC152LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.UHC152LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.UHC152LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.UHC152LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.UHC152LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.UHC152LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.UHC152LOG.pins.D7, D7);
		let W = new Pin();
		Connect(this.UHC152LOG.pins.W, W);
		Connect(W, this.pins.W_O);
	}
}
/**
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC153 extends Component {
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
		this.UHC153LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','_1C0_I','_1C1_I','_1C2_I','_1C3_I','_2C0_I','_2C1_I','_2C2_I','_2C3_I'], ['G1BAR','G2BAR','A','B','_1C0','_1C1','_1C2','_1C3','_2C0','_2C1','_2C2','_2C3','Y1','Y2'], []).Logic('   G1BAR =  G1BAR_I ;   G2BAR =  G2BAR_I ;   A =  A_I ;   B =  B_I ;   _1C0 =  _1C0_I ;   _1C1 =  _1C1_I ;   _1C2 =  _1C2_I ;   _1C3 =  _1C3_I ;   _2C0 =  _2C0_I ;   _2C1 =  _2C1_I ;   _2C2 =  _2C2_I ;   _2C3 =  _2C3_I ;let    G1 =  !G1BAR ;   G1 =  !G1BAR ;let    G2 =  !G2BAR ;   G2 =  !G2BAR ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    I0 =  G1 & BBAR & ABAR & _1C0 ;   I0 =  G1 & BBAR & ABAR & _1C0 ;let    I1 =  G1 & BBAR & A    & _1C1 ;   I1 =  G1 & BBAR & A    & _1C1 ;let    I2 =  G1 & B    & ABAR & _1C2 ;   I2 =  G1 & B    & ABAR & _1C2 ;let    I3 =  G1 & B    & A    & _1C3 ;   I3 =  G1 & B    & A    & _1C3 ;let    I4 =  G2 & BBAR & ABAR & _2C0 ;   I4 =  G2 & BBAR & ABAR & _2C0 ;let    I5 =  G2 & BBAR & A    & _2C1 ;   I5 =  G2 & BBAR & A    & _2C1 ;let    I6 =  G2 & B    & ABAR & _2C2 ;   I6 =  G2 & B    & ABAR & _2C2 ;let    I7 =  G2 & B    & A    & _2C3 ;   I7 =  G2 & B    & A    & _2C3 ;   Y1 =  I0 | I1 | I2 | I3 ;   Y2 =  I4 | I5 | I6 | I7 ;');
		Connect(this.UHC153LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC153LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC153LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC153LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC153LOG.pins._1C0_I, this.pins._1C0_I);
		Connect(this.UHC153LOG.pins._1C1_I, this.pins._1C1_I);
		Connect(this.UHC153LOG.pins._1C2_I, this.pins._1C2_I);
		Connect(this.UHC153LOG.pins._1C3_I, this.pins._1C3_I);
		Connect(this.UHC153LOG.pins._2C0_I, this.pins._2C0_I);
		Connect(this.UHC153LOG.pins._2C1_I, this.pins._2C1_I);
		Connect(this.UHC153LOG.pins._2C2_I, this.pins._2C2_I);
		Connect(this.UHC153LOG.pins._2C3_I, this.pins._2C3_I);
		let G1BAR = new Pin();
		Connect(this.UHC153LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.UHC153LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.UHC153LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC153LOG.pins.B, B);
		let _1C0 = new Pin();
		Connect(this.UHC153LOG.pins._1C0, _1C0);
		let _1C1 = new Pin();
		Connect(this.UHC153LOG.pins._1C1, _1C1);
		let _1C2 = new Pin();
		Connect(this.UHC153LOG.pins._1C2, _1C2);
		let _1C3 = new Pin();
		Connect(this.UHC153LOG.pins._1C3, _1C3);
		let _2C0 = new Pin();
		Connect(this.UHC153LOG.pins._2C0, _2C0);
		let _2C1 = new Pin();
		Connect(this.UHC153LOG.pins._2C1, _2C1);
		let _2C2 = new Pin();
		Connect(this.UHC153LOG.pins._2C2, _2C2);
		let _2C3 = new Pin();
		Connect(this.UHC153LOG.pins._2C3, _2C3);
		let Y1 = new Pin();
		Connect(this.UHC153LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC153LOG.pins.Y2, Y2);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
	}
}
/**
 * DECODER_DEMULTIPLEXER 4-16 LINE
 */
class SN74HC154 extends Component {
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
		this.UHC154LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','C_I','D_I'], ['ENABLE','A','B','C','D','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9','Y10','Y11','Y12','Y13','Y14','Y15'], []).Logic('let    G1BAR  =  G1BAR_I ;   G1BAR  =  G1BAR_I ;let    G2BAR  =  G2BAR_I ;   G2BAR  =  G2BAR_I ;   ENABLE =  !(G1BAR | G2BAR) ;   A      =  A_I ;   B      =  B_I ;   C      =  C_I ;   D      =  D_I ;let    ABAR   =  !A ;   ABAR   =  !A ;let    BBAR   =  !B ;   BBAR   =  !B ;let    CBAR   =  !C ;   CBAR   =  !C ;let    DBAR   =  !D ;   DBAR   =  !D ;   Y0     =  !(ENABLE & DBAR & CBAR & BBAR & ABAR) ;   Y1     =  !(ENABLE & DBAR & CBAR & BBAR & A   ) ;   Y2     =  !(ENABLE & DBAR & CBAR & B    & ABAR) ;   Y3     =  !(ENABLE & DBAR & CBAR & B    & A   ) ;   Y4     =  !(ENABLE & DBAR & C    & BBAR & ABAR) ;   Y5     =  !(ENABLE & DBAR & C    & BBAR & A   ) ;   Y6     =  !(ENABLE & DBAR & C    & B    & ABAR) ;   Y7     =  !(ENABLE & DBAR & C    & B    & A   ) ;   Y8     =  !(ENABLE & D    & CBAR & BBAR & ABAR) ;   Y9     =  !(ENABLE & D    & CBAR & BBAR & A   ) ;   Y10    =  !(ENABLE & D    & CBAR & B    & ABAR) ;   Y11    =  !(ENABLE & D    & CBAR & B    & A   ) ;   Y12    =  !(ENABLE & D    & C    & BBAR & ABAR) ;   Y13    =  !(ENABLE & D    & C    & BBAR & A   ) ;   Y14    =  !(ENABLE & D    & C    & B    & ABAR) ;   Y15    =  !(ENABLE & D    & C    & B    & A   ) ;');
		Connect(this.UHC154LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC154LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC154LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC154LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC154LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC154LOG.pins.D_I, this.pins.D_I);
		let ENABLE = new Pin();
		Connect(this.UHC154LOG.pins.ENABLE, ENABLE);
		let A = new Pin();
		Connect(this.UHC154LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC154LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC154LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC154LOG.pins.D, D);
		let Y0 = new Pin();
		Connect(this.UHC154LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC154LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC154LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC154LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC154LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.UHC154LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.UHC154LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.UHC154LOG.pins.Y7, Y7);
		let Y8 = new Pin();
		Connect(this.UHC154LOG.pins.Y8, Y8);
		let Y9 = new Pin();
		Connect(this.UHC154LOG.pins.Y9, Y9);
		let Y10 = new Pin();
		Connect(this.UHC154LOG.pins.Y10, Y10);
		let Y11 = new Pin();
		Connect(this.UHC154LOG.pins.Y11, Y11);
		let Y12 = new Pin();
		Connect(this.UHC154LOG.pins.Y12, Y12);
		let Y13 = new Pin();
		Connect(this.UHC154LOG.pins.Y13, Y13);
		let Y14 = new Pin();
		Connect(this.UHC154LOG.pins.Y14, Y14);
		let Y15 = new Pin();
		Connect(this.UHC154LOG.pins.Y15, Y15);
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
class SN74HC155 extends Component {
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
		this.UHC155LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','C1_I','C2BAR_I'], ['G2BAR','A','B','C2BAR','ENABLE1','ENABLE2','_1Y0','_1Y1','_1Y2','_1Y3','_2Y0','_2Y1','_2Y2','_2Y3'], []).Logic('let    G1BAR   =  G1BAR_I ;   G1BAR   =  G1BAR_I ;   G2BAR   =  G2BAR_I ;   A       =  A_I ;   B       =  B_I ;let    C1      =  C1_I ;   C1      =  C1_I ;   C2BAR   =  C2BAR_I ;let    ABAR    =  !A ;   ABAR    =  !A ;let    BBAR    =  !B ;   BBAR    =  !B ;   ENABLE1 =  !G1BAR &  C1 ;   ENABLE2 =  !G2BAR & !C2BAR ;   _1Y0     =  !(ENABLE1 & BBAR & ABAR) ;   _1Y1     =  !(ENABLE1 & BBAR & A   ) ;   _1Y2     =  !(ENABLE1 & B    & ABAR) ;   _1Y3     =  !(ENABLE1 & B    & A   ) ;   _2Y0     =  !(ENABLE2 & BBAR & ABAR) ;   _2Y1     =  !(ENABLE2 & BBAR & A   ) ;   _2Y2     =  !(ENABLE2 & B    & ABAR) ;   _2Y3     =  !(ENABLE2 & B    & A   ) ;');
		Connect(this.UHC155LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC155LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC155LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC155LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC155LOG.pins.C1_I, this.pins.C1_I);
		Connect(this.UHC155LOG.pins.C2BAR_I, this.pins.C2BAR_I);
		let G2BAR = new Pin();
		Connect(this.UHC155LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.UHC155LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC155LOG.pins.B, B);
		let C2BAR = new Pin();
		Connect(this.UHC155LOG.pins.C2BAR, C2BAR);
		let ENABLE1 = new Pin();
		Connect(this.UHC155LOG.pins.ENABLE1, ENABLE1);
		let ENABLE2 = new Pin();
		Connect(this.UHC155LOG.pins.ENABLE2, ENABLE2);
		let _1Y0 = new Pin();
		Connect(this.UHC155LOG.pins._1Y0, _1Y0);
		let _1Y1 = new Pin();
		Connect(this.UHC155LOG.pins._1Y1, _1Y1);
		let _1Y2 = new Pin();
		Connect(this.UHC155LOG.pins._1Y2, _1Y2);
		let _1Y3 = new Pin();
		Connect(this.UHC155LOG.pins._1Y3, _1Y3);
		let _2Y0 = new Pin();
		Connect(this.UHC155LOG.pins._2Y0, _2Y0);
		let _2Y1 = new Pin();
		Connect(this.UHC155LOG.pins._2Y1, _2Y1);
		let _2Y2 = new Pin();
		Connect(this.UHC155LOG.pins._2Y2, _2Y2);
		let _2Y3 = new Pin();
		Connect(this.UHC155LOG.pins._2Y3, _2Y3);
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
class SN74HC157 extends Component {
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
		this.UHC157LOG = new logicexp(['GBAR_I','_1A_I','_1B_I','_2A_I','_2B_I','_3A_I','_3B_I','_4A_I','_4B_I','SEL_I'], ['GBAR','_1A','_1B','_2A','_2B','_3A','_3B','_4A','_4B','SEL','Y1','Y2','Y3','Y4'], []).Logic('   GBAR =  GBAR_I ;   _1A =  _1A_I ;   _1B =  _1B_I ;   _2A =  _2A_I ;   _2B =  _2B_I ;   _3A =  _3A_I ;   _3B =  _3B_I ;   _4A =  _4A_I ;   _4B =  _4B_I ;   SEL =  SEL_I ;let    SEL1 =  !GBAR & !SEL ;   SEL1 =  !GBAR & !SEL ;let    SEL2 =  !GBAR &  SEL ;   SEL2 =  !GBAR &  SEL ;   Y1 =  (_1A & SEL1) | (_1B & SEL2) ;   Y2 =  (_2A & SEL1) | (_2B & SEL2) ;   Y3 =  (_3A & SEL1) | (_3B & SEL2) ;   Y4 =  (_4A & SEL1) | (_4B & SEL2) ;');
		Connect(this.UHC157LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC157LOG.pins._1A_I, this.pins._1A_I);
		Connect(this.UHC157LOG.pins._1B_I, this.pins._1B_I);
		Connect(this.UHC157LOG.pins._2A_I, this.pins._2A_I);
		Connect(this.UHC157LOG.pins._2B_I, this.pins._2B_I);
		Connect(this.UHC157LOG.pins._3A_I, this.pins._3A_I);
		Connect(this.UHC157LOG.pins._3B_I, this.pins._3B_I);
		Connect(this.UHC157LOG.pins._4A_I, this.pins._4A_I);
		Connect(this.UHC157LOG.pins._4B_I, this.pins._4B_I);
		Connect(this.UHC157LOG.pins.SEL_I, this.pins.SEL_I);
		let GBAR = new Pin();
		Connect(this.UHC157LOG.pins.GBAR, GBAR);
		let _1A = new Pin();
		Connect(this.UHC157LOG.pins._1A, _1A);
		let _1B = new Pin();
		Connect(this.UHC157LOG.pins._1B, _1B);
		let _2A = new Pin();
		Connect(this.UHC157LOG.pins._2A, _2A);
		let _2B = new Pin();
		Connect(this.UHC157LOG.pins._2B, _2B);
		let _3A = new Pin();
		Connect(this.UHC157LOG.pins._3A, _3A);
		let _3B = new Pin();
		Connect(this.UHC157LOG.pins._3B, _3B);
		let _4A = new Pin();
		Connect(this.UHC157LOG.pins._4A, _4A);
		let _4B = new Pin();
		Connect(this.UHC157LOG.pins._4B, _4B);
		let SEL = new Pin();
		Connect(this.UHC157LOG.pins.SEL, SEL);
		let Y1 = new Pin();
		Connect(this.UHC157LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC157LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC157LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC157LOG.pins.Y4, Y4);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
	}
}
/**
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC158 extends Component {
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
		this.UHC158LOG = new logicexp(['GBAR_I','_1A_I','_1B_I','_2A_I','_2B_I','_3A_I','_3B_I','_4A_I','_4B_I','SEL_I'], ['GBAR','_1A','_1B','_2A','_2B','_3A','_3B','_4A','_4B','SEL','Y1','Y2','Y3','Y4'], []).Logic('   GBAR =  GBAR_I ;   _1A =  _1A_I ;   _1B =  _1B_I ;   _2A =  _2A_I ;   _2B =  _2B_I ;   _3A =  _3A_I ;   _3B =  _3B_I ;   _4A =  _4A_I ;   _4B =  _4B_I ;   SEL =  SEL_I ;let    SEL1 =  !GBAR & !SEL ;   SEL1 =  !GBAR & !SEL ;let    SEL2 =  !GBAR &  SEL ;   SEL2 =  !GBAR &  SEL ;   Y1 =  !((_1A & SEL1) | (_1B & SEL2)) ;   Y2 =  !((_2A & SEL1) | (_2B & SEL2)) ;   Y3 =  !((_3A & SEL1) | (_3B & SEL2)) ;   Y4 =  !((_4A & SEL1) | (_4B & SEL2)) ;');
		Connect(this.UHC158LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC158LOG.pins._1A_I, this.pins._1A_I);
		Connect(this.UHC158LOG.pins._1B_I, this.pins._1B_I);
		Connect(this.UHC158LOG.pins._2A_I, this.pins._2A_I);
		Connect(this.UHC158LOG.pins._2B_I, this.pins._2B_I);
		Connect(this.UHC158LOG.pins._3A_I, this.pins._3A_I);
		Connect(this.UHC158LOG.pins._3B_I, this.pins._3B_I);
		Connect(this.UHC158LOG.pins._4A_I, this.pins._4A_I);
		Connect(this.UHC158LOG.pins._4B_I, this.pins._4B_I);
		Connect(this.UHC158LOG.pins.SEL_I, this.pins.SEL_I);
		let GBAR = new Pin();
		Connect(this.UHC158LOG.pins.GBAR, GBAR);
		let _1A = new Pin();
		Connect(this.UHC158LOG.pins._1A, _1A);
		let _1B = new Pin();
		Connect(this.UHC158LOG.pins._1B, _1B);
		let _2A = new Pin();
		Connect(this.UHC158LOG.pins._2A, _2A);
		let _2B = new Pin();
		Connect(this.UHC158LOG.pins._2B, _2B);
		let _3A = new Pin();
		Connect(this.UHC158LOG.pins._3A, _3A);
		let _3B = new Pin();
		Connect(this.UHC158LOG.pins._3B, _3B);
		let _4A = new Pin();
		Connect(this.UHC158LOG.pins._4A, _4A);
		let _4B = new Pin();
		Connect(this.UHC158LOG.pins._4B, _4B);
		let SEL = new Pin();
		Connect(this.UHC158LOG.pins.SEL, SEL);
		let Y1 = new Pin();
		Connect(this.UHC158LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC158LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC158LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC158LOG.pins.Y4, Y4);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
	}
}
/**
 * Synchronous 4-bit Decade Counters with asynchronous clear
 */
class SN74HC160 extends Component {
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
		this.UHC160LOG = new logicexp(['CLK_I','ENP_I','ENT_I','CLRBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','ENP','ENT','CLRBAR','LOADBAR','A','B','C','D','RCO','DA','DB','DC','DD','EN'], []).Logic('   CLK =  CLK_I ;                        ENP =  ENP_I ;   ENT =  ENT_I ;   CLRBAR =  CLRBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !LOADBAR ;   LOAD =  !LOADBAR ;                  EN =  !(ENP & ENT) ;   DA =  (A & LOAD) | (LOADBAR & !(QABAR ^ !EN)) ;let    IB1 =  !(EN | QABAR | QD) ;   IB1 =  !(EN | QABAR | QD) ;   DB =  (B & LOAD) | (LOADBAR & !(IB1 ^ QBBAR)) ;let    IC1 =  !(EN | QABAR | QBBAR) ;   IC1 =  !(EN | QABAR | QBBAR) ;   DC =  (C & LOAD) | (LOADBAR & !(IC1 ^ QCBAR)) ;let    ID1 =  !(EN | QABAR | QBBAR | QCBAR) ;   ID1 =  !(EN | QABAR | QBBAR | QCBAR) ;let    ID2 =  !(EN | !(QDBAR | QA)) ;   ID2 =  !(EN | !(QDBAR | QA)) ;   DD =  (D & LOAD ) | ( LOADBAR & ((QDBAR & ID1) | !(QDBAR | ID2))) ;   RCO =  ENT & QA & QBBAR & QCBAR & QD ;');
		Connect(this.UHC160LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC160LOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.UHC160LOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.UHC160LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.UHC160LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.UHC160LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC160LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC160LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC160LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.UHC160LOG.pins.QA, QA);
		let QD = new Pin();
		Connect(this.UHC160LOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.UHC160LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.UHC160LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.UHC160LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.UHC160LOG.pins.QDBAR, QDBAR);
		let CLK = new Pin();
		Connect(this.UHC160LOG.pins.CLK, CLK);
		let ENP = new Pin();
		Connect(this.UHC160LOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.UHC160LOG.pins.ENT, ENT);
		let CLRBAR = new Pin();
		Connect(this.UHC160LOG.pins.CLRBAR, CLRBAR);
		let LOADBAR = new Pin();
		Connect(this.UHC160LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.UHC160LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC160LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC160LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC160LOG.pins.D, D);
		let RCO = new Pin();
		Connect(this.UHC160LOG.pins.RCO, RCO);
		let DA = new Pin();
		Connect(this.UHC160LOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.UHC160LOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.UHC160LOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.UHC160LOG.pins.DD, DD);
		let EN = new Pin();
		Connect(this.UHC160LOG.pins.EN, EN);
		this.UDFF = new dff(4);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, CLRBAR);
		Connect(this.UDFF.pins.CLOCK, CLK);
		Connect(this.UDFF.pins.D0, DA);
		Connect(this.UDFF.pins.D1, DB);
		Connect(this.UDFF.pins.D2, DC);
		Connect(this.UDFF.pins.D3, DD);
		Connect(this.UDFF.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.UDFF.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.UDFF.pins.Q2, QC);
		Connect(this.UDFF.pins.Q3, QD);
		Connect(this.UDFF.pins.QBAR0, QABAR);
		Connect(this.UDFF.pins.QBAR1, QBBAR);
		Connect(this.UDFF.pins.QBAR2, QCBAR);
		Connect(this.UDFF.pins.QBAR3, QDBAR);
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
class SN74HC161 extends Component {
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
		let QABAR = new Pin();
		Connect(this.U1.pins.QBAR0, QABAR);
		let QBBAR = new Pin();
		Connect(this.U1.pins.QBAR1, QBBAR);
		let QCBAR = new Pin();
		Connect(this.U1.pins.QBAR2, QCBAR);
		let QDBAR = new Pin();
		Connect(this.U1.pins.QBAR3, QDBAR);
		this.UHC161LOG = new logicexp(['CLK_I','ENP_I','ENT_I','CLRBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','ENP','ENT','CLRBAR','LOADBAR','A','B','C','D','RCO','DA','DB','DC','DD','IEN'], []).Logic('   CLK =  CLK_I ;   ENP =  ENP_I ;   ENT =  ENT_I ;   CLRBAR =  CLRBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  !(ENT & ENP) ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;let    IA1 =  A & ILD ;   IA1 =  A & ILD ;let    IA2 =  !(!IEN ^ QABAR) & LOADBAR ;   IA2 =  !(!IEN ^ QABAR) & LOADBAR ;let    IB1 =  B & ILD ;   IB1 =  B & ILD ;let    IB2 =  !(!(IEN | QABAR) ^ QBBAR) & LOADBAR ;   IB2 =  !(!(IEN | QABAR) ^ QBBAR) & LOADBAR ;let    IC1 =  C & ILD ;   IC1 =  C & ILD ;let    IC2 =  (!((!(IEN | QBBAR | QABAR)) ^ QCBAR)) & LOADBAR ;   IC2 =  (!((!(IEN | QBBAR | QABAR)) ^ QCBAR)) & LOADBAR ;let    ID1 =  D & ILD ;   ID1 =  D & ILD ;let    ID2 =  !(IEN | QCBAR | QBBAR | QABAR) ;   ID2 =  !(IEN | QCBAR | QBBAR | QABAR) ;let    ID3 =  LOADBAR & ((ID2 & QDBAR) | !(ID2 | QDBAR)) ;   ID3 =  LOADBAR & ((ID2 & QDBAR) | !(ID2 | QDBAR)) ;   RCO =  QD & QC & QB & QA & ENT ;   DA =  IA1 | IA2 ;   DB =  IB1 | IB2 ;   DC =  IC1 | IC2 ;   DD =  ID1 | ID3 ;');
		Connect(this.UHC161LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC161LOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.UHC161LOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.UHC161LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.UHC161LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.UHC161LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC161LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC161LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC161LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC161LOG.pins.QA, QA);
		Connect(this.UHC161LOG.pins.QB, QB);
		Connect(this.UHC161LOG.pins.QC, QC);
		Connect(this.UHC161LOG.pins.QD, QD);
		Connect(this.UHC161LOG.pins.QABAR, QABAR);
		Connect(this.UHC161LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC161LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC161LOG.pins.QDBAR, QDBAR);
		Connect(this.UHC161LOG.pins.CLK, CLK);
		let ENP = new Pin();
		Connect(this.UHC161LOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.UHC161LOG.pins.ENT, ENT);
		Connect(this.UHC161LOG.pins.CLRBAR, CLRBAR);
		let LOADBAR = new Pin();
		Connect(this.UHC161LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.UHC161LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC161LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC161LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC161LOG.pins.D, D);
		let RCO = new Pin();
		Connect(this.UHC161LOG.pins.RCO, RCO);
		Connect(this.UHC161LOG.pins.DA, DA);
		Connect(this.UHC161LOG.pins.DB, DB);
		Connect(this.UHC161LOG.pins.DC, DC);
		Connect(this.UHC161LOG.pins.DD, DD);
		let IEN = new Pin();
		Connect(this.UHC161LOG.pins.IEN, IEN);
		Connect(RCO, this.pins.RCO_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * Synchronous 4-bit Decade Counters with asynchronous clear
 */
class SN74HC162 extends Component {
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
		this.UHC162LOG = new logicexp(['CLK_I','ENP_I','ENT_I','CLRBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','ENP','ENT','CLRBAR','LOADBAR','A','B','C','D','RCO','DA','DB','DC','DD','EN'], []).Logic('   CLK =  CLK_I ;                        ENP =  ENP_I ;   ENT =  ENT_I ;   CLRBAR =  CLRBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !(LOADBAR | !CLRBAR) ;   LOAD =  !(LOADBAR | !CLRBAR) ;let       LOADB =  !(LOAD | !CLRBAR) ;      LOADB =  !(LOAD | !CLRBAR) ;   EN =  !(ENP & ENT) ;   DA =  (A & LOAD) | (LOADB & !(QABAR ^ !EN)) ;let    IB1 =  !(EN | QABAR | QD) ;   IB1 =  !(EN | QABAR | QD) ;   DB =  (B & LOAD) | (LOADB & !(IB1 ^ QBBAR)) ;let    IC1 =  !(EN | QABAR | QBBAR) ;   IC1 =  !(EN | QABAR | QBBAR) ;   DC =  (C & LOAD) | (LOADB & !(IC1 ^ QCBAR)) ;let    ID1 =  !(EN | QABAR | QBBAR | QCBAR) ;   ID1 =  !(EN | QABAR | QBBAR | QCBAR) ;let    ID2 =  !(EN | !(QDBAR | QA)) ;   ID2 =  !(EN | !(QDBAR | QA)) ;   DD =  (D & LOAD ) | ( LOADB & ((QDBAR & ID1) | !(QDBAR | ID2))) ;   RCO =  ENT & QA & QBBAR & QCBAR & QD ;');
		Connect(this.UHC162LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC162LOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.UHC162LOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.UHC162LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.UHC162LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.UHC162LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC162LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC162LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC162LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.UHC162LOG.pins.QA, QA);
		let QD = new Pin();
		Connect(this.UHC162LOG.pins.QD, QD);
		let QABAR = new Pin();
		Connect(this.UHC162LOG.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.UHC162LOG.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.UHC162LOG.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.UHC162LOG.pins.QDBAR, QDBAR);
		let CLK = new Pin();
		Connect(this.UHC162LOG.pins.CLK, CLK);
		let ENP = new Pin();
		Connect(this.UHC162LOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.UHC162LOG.pins.ENT, ENT);
		let CLRBAR = new Pin();
		Connect(this.UHC162LOG.pins.CLRBAR, CLRBAR);
		let LOADBAR = new Pin();
		Connect(this.UHC162LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.UHC162LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC162LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC162LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC162LOG.pins.D, D);
		let RCO = new Pin();
		Connect(this.UHC162LOG.pins.RCO, RCO);
		let DA = new Pin();
		Connect(this.UHC162LOG.pins.DA, DA);
		let DB = new Pin();
		Connect(this.UHC162LOG.pins.DB, DB);
		let DC = new Pin();
		Connect(this.UHC162LOG.pins.DC, DC);
		let DD = new Pin();
		Connect(this.UHC162LOG.pins.DD, DD);
		let EN = new Pin();
		Connect(this.UHC162LOG.pins.EN, EN);
		this.UDFF = new dff(4);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, CLK);
		Connect(this.UDFF.pins.D0, DA);
		Connect(this.UDFF.pins.D1, DB);
		Connect(this.UDFF.pins.D2, DC);
		Connect(this.UDFF.pins.D3, DD);
		Connect(this.UDFF.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.UDFF.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.UDFF.pins.Q2, QC);
		Connect(this.UDFF.pins.Q3, QD);
		Connect(this.UDFF.pins.QBAR0, QABAR);
		Connect(this.UDFF.pins.QBAR1, QBBAR);
		Connect(this.UDFF.pins.QBAR2, QCBAR);
		Connect(this.UDFF.pins.QBAR3, QDBAR);
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
class SN74HC163 extends Component {
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
		let QABAR = new Pin();
		Connect(this.U1.pins.QBAR0, QABAR);
		let QBBAR = new Pin();
		Connect(this.U1.pins.QBAR1, QBBAR);
		let QCBAR = new Pin();
		Connect(this.U1.pins.QBAR2, QCBAR);
		let QDBAR = new Pin();
		Connect(this.U1.pins.QBAR3, QDBAR);
		this.UHC163LOG = new logicexp(['CLK_I','ENP_I','ENT_I','CLRBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','ENP','ENT','CLRBAR','LOADBAR','A','B','C','D','RCO','DA','DB','DC','DD','IEN'], []).Logic('   CLK =  CLK_I ;   ENP =  ENP_I ;   ENT =  ENT_I ;   CLRBAR =  CLRBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   IEN =  !(ENT & ENP) ;let    ILD =  !(LOADBAR | !CLRBAR) ;   ILD =  !(LOADBAR | !CLRBAR) ;let    ILC =  !(ILD | !CLRBAR) ;   ILC =  !(ILD | !CLRBAR) ;let    IA1 =  A & ILD ;   IA1 =  A & ILD ;let    IA2 =  !(!IEN ^ QABAR) & ILC ;   IA2 =  !(!IEN ^ QABAR) & ILC ;let    IB1 =  B & ILD ;   IB1 =  B & ILD ;let    IB2 =  !(!(IEN | QABAR) ^ QBBAR) & ILC ;   IB2 =  !(!(IEN | QABAR) ^ QBBAR) & ILC ;let    IC1 =  C & ILD ;   IC1 =  C & ILD ;let    IC2 =  (!((!(IEN | QBBAR | QABAR)) ^ QCBAR)) & ILC ;   IC2 =  (!((!(IEN | QBBAR | QABAR)) ^ QCBAR)) & ILC ;let    IDB =  D & ILD ;   IDB =  D & ILD ;let    IDC =  !(IEN | QCBAR | QBBAR | QABAR) ;   IDC =  !(IEN | QCBAR | QBBAR | QABAR) ;let    IDD =  ILC & ((IDC & QDBAR) | !(IDC | QDBAR)) ;   IDD =  ILC & ((IDC & QDBAR) | !(IDC | QDBAR)) ;   RCO =  QD & QC & QB & QA & ENT ;   DA =  IA1 | IA2 ;   DB =  IB1 | IB2 ;   DC =  IC1 | IC2 ;   DD =  IDB | IDD ;');
		Connect(this.UHC163LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC163LOG.pins.ENP_I, this.pins.ENP_I);
		Connect(this.UHC163LOG.pins.ENT_I, this.pins.ENT_I);
		Connect(this.UHC163LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.UHC163LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.UHC163LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC163LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC163LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC163LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC163LOG.pins.QA, QA);
		Connect(this.UHC163LOG.pins.QB, QB);
		Connect(this.UHC163LOG.pins.QC, QC);
		Connect(this.UHC163LOG.pins.QD, QD);
		Connect(this.UHC163LOG.pins.QABAR, QABAR);
		Connect(this.UHC163LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC163LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC163LOG.pins.QDBAR, QDBAR);
		Connect(this.UHC163LOG.pins.CLK, CLK);
		let ENP = new Pin();
		Connect(this.UHC163LOG.pins.ENP, ENP);
		let ENT = new Pin();
		Connect(this.UHC163LOG.pins.ENT, ENT);
		let CLRBAR = new Pin();
		Connect(this.UHC163LOG.pins.CLRBAR, CLRBAR);
		let LOADBAR = new Pin();
		Connect(this.UHC163LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.UHC163LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC163LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC163LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC163LOG.pins.D, D);
		let RCO = new Pin();
		Connect(this.UHC163LOG.pins.RCO, RCO);
		Connect(this.UHC163LOG.pins.DA, DA);
		Connect(this.UHC163LOG.pins.DB, DB);
		Connect(this.UHC163LOG.pins.DC, DC);
		Connect(this.UHC163LOG.pins.DD, DD);
		let IEN = new Pin();
		Connect(this.UHC163LOG.pins.IEN, IEN);
		Connect(RCO, this.pins.RCO_O);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
class SN74HC164 extends Component {
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
		Connect(this.U1.pins.IN0_0, this.pins.CLRBAR_I);
		Connect(this.U1.pins.IN1_0, this.pins.CLK_I);
		Connect(this.U1.pins.IN2_0, this.pins.A_I);
		Connect(this.U1.pins.IN3_0, this.pins.B_I);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.OUT0, CLRBAR);
		let CLK = new Pin();
		Connect(this.U1.pins.OUT1, CLK);
		let A = new Pin();
		Connect(this.U1.pins.OUT2, A);
		let B = new Pin();
		Connect(this.U1.pins.OUT3, B);
		this.U2 = new and(2);
		Connect(this.U2.pins.IN0, A);
		Connect(this.U2.pins.IN1, B);
		let IN = new Pin();
		Connect(this.U2.pins.OUT, IN);
		this.U3 = new dff(8);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, CLRBAR);
		Connect(this.U3.pins.CLOCK, CLK);
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
		let _D_NC = new Pin();
		Connect(this.U3.pins.QBAR0, _D_NC);
		Connect(this.U3.pins.QBAR1, _D_NC);
		Connect(this.U3.pins.QBAR2, _D_NC);
		Connect(this.U3.pins.QBAR3, _D_NC);
		Connect(this.U3.pins.QBAR4, _D_NC);
		Connect(this.U3.pins.QBAR5, _D_NC);
		Connect(this.U3.pins.QBAR6, _D_NC);
		Connect(this.U3.pins.QBAR7, _D_NC);
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
class SN74HC165 extends Component {
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
		this.UHC165LOG = new logicexp(['SH_LDBAR_I','CLK_INH_I','CLK_I','SER_I','A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I'], ['SH_LDBAR','CLK_INH','CLK','SER','A','B','C','D','E','F','G','H','SA','SB','SC','SD','SE','SF','SG','SH','RA','RB','RC','RD','RE','RF','RG','RH','CK'], []).Logic('   SH_LDBAR =  SH_LDBAR_I ;   CLK_INH =  CLK_INH_I ;   CLK =  CLK_I ;   SER =  SER_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   E =  E_I ;   F =  F_I ;   G =  G_I ;   H =  H_I ;let    LOAD =  !SH_LDBAR ;   LOAD =  !SH_LDBAR ;   SA =  !(LOAD & A) ;   SB =  !(LOAD & B) ;   SC =  !(LOAD & C) ;   SD =  !(LOAD & D) ;   SE =  !(LOAD & E) ;   SF =  !(LOAD & F) ;   SG =  !(LOAD & G) ;   SH =  !(LOAD & H) ;   RA =  !(LOAD & SA) ;   RB =  !(LOAD & SB) ;   RC =  !(LOAD & SC) ;   RD =  !(LOAD & SD) ;   RE =  !(LOAD & SE) ;   RF =  !(LOAD & SF) ;   RG =  !(LOAD & SG) ;   RH =  !(LOAD & SH) ;   CK =  CLK_INH | CLK ;');
		Connect(this.UHC165LOG.pins.SH_LDBAR_I, this.pins.SH_LDBAR_I);
		Connect(this.UHC165LOG.pins.CLK_INH_I, this.pins.CLK_INH_I);
		Connect(this.UHC165LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC165LOG.pins.SER_I, this.pins.SER_I);
		Connect(this.UHC165LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC165LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC165LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC165LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC165LOG.pins.E_I, this.pins.E_I);
		Connect(this.UHC165LOG.pins.F_I, this.pins.F_I);
		Connect(this.UHC165LOG.pins.G_I, this.pins.G_I);
		Connect(this.UHC165LOG.pins.H_I, this.pins.H_I);
		let SH_LDBAR = new Pin();
		Connect(this.UHC165LOG.pins.SH_LDBAR, SH_LDBAR);
		let CLK_INH = new Pin();
		Connect(this.UHC165LOG.pins.CLK_INH, CLK_INH);
		let CLK = new Pin();
		Connect(this.UHC165LOG.pins.CLK, CLK);
		let SER = new Pin();
		Connect(this.UHC165LOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.UHC165LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC165LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC165LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC165LOG.pins.D, D);
		let E = new Pin();
		Connect(this.UHC165LOG.pins.E, E);
		let F = new Pin();
		Connect(this.UHC165LOG.pins.F, F);
		let G = new Pin();
		Connect(this.UHC165LOG.pins.G, G);
		let H = new Pin();
		Connect(this.UHC165LOG.pins.H, H);
		let SA = new Pin();
		Connect(this.UHC165LOG.pins.SA, SA);
		let SB = new Pin();
		Connect(this.UHC165LOG.pins.SB, SB);
		let SC = new Pin();
		Connect(this.UHC165LOG.pins.SC, SC);
		let SD = new Pin();
		Connect(this.UHC165LOG.pins.SD, SD);
		let SE = new Pin();
		Connect(this.UHC165LOG.pins.SE, SE);
		let SF = new Pin();
		Connect(this.UHC165LOG.pins.SF, SF);
		let SG = new Pin();
		Connect(this.UHC165LOG.pins.SG, SG);
		let SH = new Pin();
		Connect(this.UHC165LOG.pins.SH, SH);
		let RA = new Pin();
		Connect(this.UHC165LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.UHC165LOG.pins.RB, RB);
		let RC = new Pin();
		Connect(this.UHC165LOG.pins.RC, RC);
		let RD = new Pin();
		Connect(this.UHC165LOG.pins.RD, RD);
		let RE = new Pin();
		Connect(this.UHC165LOG.pins.RE, RE);
		let RF = new Pin();
		Connect(this.UHC165LOG.pins.RF, RF);
		let RG = new Pin();
		Connect(this.UHC165LOG.pins.RG, RG);
		let RH = new Pin();
		Connect(this.UHC165LOG.pins.RH, RH);
		let CK = new Pin();
		Connect(this.UHC165LOG.pins.CK, CK);
		this.U1 = new dff(1);
		Connect(this.U1.pins.PRESET, SA);
		Connect(this.U1.pins.CLEAR, RA);
		Connect(this.U1.pins.CLOCK, CK);
		Connect(this.U1.pins.D0, SER);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		this.U2 = new dff(1);
		Connect(this.U2.pins.PRESET, SB);
		Connect(this.U2.pins.CLEAR, RB);
		Connect(this.U2.pins.CLOCK, CK);
		Connect(this.U2.pins.D0, QA);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		Connect(this.U2.pins.QBAR0, _D_NC);
		this.U3 = new dff(1);
		Connect(this.U3.pins.PRESET, SC);
		Connect(this.U3.pins.CLEAR, RC);
		Connect(this.U3.pins.CLOCK, CK);
		Connect(this.U3.pins.D0, QB);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		Connect(this.U3.pins.QBAR0, _D_NC);
		this.U4 = new dff(1);
		Connect(this.U4.pins.PRESET, SD);
		Connect(this.U4.pins.CLEAR, RD);
		Connect(this.U4.pins.CLOCK, CK);
		Connect(this.U4.pins.D0, QC);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		Connect(this.U4.pins.QBAR0, _D_NC);
		this.U5 = new dff(1);
		Connect(this.U5.pins.PRESET, SE);
		Connect(this.U5.pins.CLEAR, RE);
		Connect(this.U5.pins.CLOCK, CK);
		Connect(this.U5.pins.D0, QD);
		let QE = new Pin();
		Connect(this.U5.pins.Q0, QE);
		Connect(this.U5.pins.QBAR0, _D_NC);
		this.U6 = new dff(1);
		Connect(this.U6.pins.PRESET, SF);
		Connect(this.U6.pins.CLEAR, RF);
		Connect(this.U6.pins.CLOCK, CK);
		Connect(this.U6.pins.D0, QE);
		let QF = new Pin();
		Connect(this.U6.pins.Q0, QF);
		Connect(this.U6.pins.QBAR0, _D_NC);
		this.U7 = new dff(1);
		Connect(this.U7.pins.PRESET, SG);
		Connect(this.U7.pins.CLEAR, RG);
		Connect(this.U7.pins.CLOCK, CK);
		Connect(this.U7.pins.D0, QF);
		let QG = new Pin();
		Connect(this.U7.pins.Q0, QG);
		Connect(this.U7.pins.QBAR0, _D_NC);
		this.U8 = new dff(1);
		Connect(this.U8.pins.PRESET, SH);
		Connect(this.U8.pins.CLEAR, RH);
		Connect(this.U8.pins.CLOCK, CK);
		Connect(this.U8.pins.D0, QG);
		let QH = new Pin();
		Connect(this.U8.pins.Q0, QH);
		let QHBAR = new Pin();
		Connect(this.U8.pins.QBAR0, QHBAR);
		Connect(QH, this.pins.QH_O);
		Connect(QHBAR, this.pins.QHBAR_O);
	}
}
/**
 * PARALLEL LOAD 8-BIT SHIFT REGISTERS
 */
class SN74HC166 extends Component {
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
		this.UHC166LOG = new logicexp(['CLRBAR_I','SH_LDBAR_I','CLK_INH_I','CLK_I','SER_I','A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I','QA','QB','QC','QD','QE','QF','QG'], ['CLRBAR','SH_LDBAR','CLK_INH','CLK','SER','A','B','C','D','E','F','G','H','JA','JB','JC','JD','JE','JF','JG','JH','KA','KB','KC','KD','KE','KF','KG','KH','CK'], []).Logic('   CLRBAR    =  CLRBAR_I ;   SH_LDBAR  =  SH_LDBAR_I ;   CLK_INH   =  CLK_INH_I ;   CLK       =  CLK_I ;   SER       =  SER_I ;   A         =  A_I ;   B         =  B_I ;   C         =  C_I ;   D         =  D_I ;   E         =  E_I ;   F         =  F_I ;   G         =  G_I ;   H         =  H_I ;let    LOAD =  !SH_LDBAR ;   LOAD =  !SH_LDBAR ;   KA =  !((SH_LDBAR & SER) | (LOAD & A)) ;   KB =  !((SH_LDBAR & QA)  | (LOAD & B)) ;   KC =  !((SH_LDBAR & QB)  | (LOAD & C)) ;   KD =  !((SH_LDBAR & QC)  | (LOAD & D)) ;   KE =  !((SH_LDBAR & QD)  | (LOAD & E)) ;   KF =  !((SH_LDBAR & QE)  | (LOAD & F)) ;   KG =  !((SH_LDBAR & QF)  | (LOAD & G)) ;   KH =  !((SH_LDBAR & QG)  | (LOAD & H)) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;   JE =  !KE ;   JF =  !KF ;   JG =  !KG ;   JH =  !KH ;   CK =  !(CLK | CLK_INH) ;');
		Connect(this.UHC166LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.UHC166LOG.pins.SH_LDBAR_I, this.pins.SH_LDBAR_I);
		Connect(this.UHC166LOG.pins.CLK_INH_I, this.pins.CLK_INH_I);
		Connect(this.UHC166LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC166LOG.pins.SER_I, this.pins.SER_I);
		Connect(this.UHC166LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC166LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC166LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC166LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC166LOG.pins.E_I, this.pins.E_I);
		Connect(this.UHC166LOG.pins.F_I, this.pins.F_I);
		Connect(this.UHC166LOG.pins.G_I, this.pins.G_I);
		Connect(this.UHC166LOG.pins.H_I, this.pins.H_I);
		let QA = new Pin();
		Connect(this.UHC166LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.UHC166LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.UHC166LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.UHC166LOG.pins.QD, QD);
		let QE = new Pin();
		Connect(this.UHC166LOG.pins.QE, QE);
		let QF = new Pin();
		Connect(this.UHC166LOG.pins.QF, QF);
		let QG = new Pin();
		Connect(this.UHC166LOG.pins.QG, QG);
		let CLRBAR = new Pin();
		Connect(this.UHC166LOG.pins.CLRBAR, CLRBAR);
		let SH_LDBAR = new Pin();
		Connect(this.UHC166LOG.pins.SH_LDBAR, SH_LDBAR);
		let CLK_INH = new Pin();
		Connect(this.UHC166LOG.pins.CLK_INH, CLK_INH);
		let CLK = new Pin();
		Connect(this.UHC166LOG.pins.CLK, CLK);
		let SER = new Pin();
		Connect(this.UHC166LOG.pins.SER, SER);
		let A = new Pin();
		Connect(this.UHC166LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC166LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC166LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC166LOG.pins.D, D);
		let E = new Pin();
		Connect(this.UHC166LOG.pins.E, E);
		let F = new Pin();
		Connect(this.UHC166LOG.pins.F, F);
		let G = new Pin();
		Connect(this.UHC166LOG.pins.G, G);
		let H = new Pin();
		Connect(this.UHC166LOG.pins.H, H);
		let JA = new Pin();
		Connect(this.UHC166LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.UHC166LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.UHC166LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.UHC166LOG.pins.JD, JD);
		let JE = new Pin();
		Connect(this.UHC166LOG.pins.JE, JE);
		let JF = new Pin();
		Connect(this.UHC166LOG.pins.JF, JF);
		let JG = new Pin();
		Connect(this.UHC166LOG.pins.JG, JG);
		let JH = new Pin();
		Connect(this.UHC166LOG.pins.JH, JH);
		let KA = new Pin();
		Connect(this.UHC166LOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.UHC166LOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.UHC166LOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.UHC166LOG.pins.KD, KD);
		let KE = new Pin();
		Connect(this.UHC166LOG.pins.KE, KE);
		let KF = new Pin();
		Connect(this.UHC166LOG.pins.KF, KF);
		let KG = new Pin();
		Connect(this.UHC166LOG.pins.KG, KG);
		let KH = new Pin();
		Connect(this.UHC166LOG.pins.KH, KH);
		let CK = new Pin();
		Connect(this.UHC166LOG.pins.CK, CK);
		this.U1 = new jkff(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, CLRBAR);
		Connect(this.U1.pins.CLOCK, CK);
		Connect(this.U1.pins.J0, JA);
		Connect(this.U1.pins.J1, JB);
		Connect(this.U1.pins.J2, JC);
		Connect(this.U1.pins.J3, JD);
		Connect(this.U1.pins.J4, JE);
		Connect(this.U1.pins.J5, JF);
		Connect(this.U1.pins.J6, JG);
		Connect(this.U1.pins.J7, JH);
		Connect(this.U1.pins.K0, KA);
		Connect(this.U1.pins.K1, KB);
		Connect(this.U1.pins.K2, KC);
		Connect(this.U1.pins.K3, KD);
		Connect(this.U1.pins.K4, KE);
		Connect(this.U1.pins.K5, KF);
		Connect(this.U1.pins.K6, KG);
		Connect(this.U1.pins.K7, KH);
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.Q1, QB);
		Connect(this.U1.pins.Q2, QC);
		Connect(this.U1.pins.Q3, QD);
		Connect(this.U1.pins.Q4, QE);
		Connect(this.U1.pins.Q5, QF);
		Connect(this.U1.pins.Q6, QG);
		let QH = new Pin();
		Connect(this.U1.pins.Q7, QH);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(this.U1.pins.QBAR4, _D_NC);
		Connect(this.U1.pins.QBAR5, _D_NC);
		Connect(this.U1.pins.QBAR6, _D_NC);
		Connect(this.U1.pins.QBAR7, _D_NC);
		Connect(QH, this.pins.QH_O);
	}
}
/**
 * REGISTERS D-TYPE 4-BIT WITH 3-STATE OUTPUTS
 */
class SN74HC173 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR_I: new Pin(),
			CLK_I: new Pin(),
			E0BAR_I: new Pin(),
			E1BAR_I: new Pin(),
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
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		this.UHC173LOG = new logicexp(['CLR_I','CLK_I','E0BAR_I','E1BAR_I','M_I','N_I','_1D_I','_2D_I','_3D_I','_4D_I','_1Q','_2Q','_3Q','_4Q'], ['CLR','CLRBAR','CLK','DATEN','OE','_1D','_2D','_3D','_4D','DFF1','DFF2','DFF3','DFF4'], []).Logic('   CLR      =  CLR_I ;   CLRBAR   =  !CLR ;   CLK      =  CLK_I ;let    E0BAR    =  E0BAR_I ;   E0BAR    =  E0BAR_I ;let    E1BAR    =  E1BAR_I ;   E1BAR    =  E1BAR_I ;let    M        =  M_I ;   M        =  M_I ;let    N        =  N_I ;   N        =  N_I ;   _1D       =  _1D_I ;   _2D       =  _2D_I ;   _3D       =  _3D_I ;   _4D       =  _4D_I ;let    DATENBAR =  E0BAR | E1BAR ;   DATENBAR =  E0BAR | E1BAR ;   DATEN    =  !DATENBAR ;   OE       =  !(M | N) ;   DFF1     =  (_1D & DATEN) | (1Q & DATENBAR) ;   DFF2     =  (_2D & DATEN) | (2Q & DATENBAR) ;   DFF3     =  (_3D & DATEN) | (3Q & DATENBAR) ;   DFF4     =  (_4D & DATEN) | (4Q & DATENBAR) ;');
		Connect(this.UHC173LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.UHC173LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC173LOG.pins.E0BAR_I, this.pins.E0BAR_I);
		Connect(this.UHC173LOG.pins.E1BAR_I, this.pins.E1BAR_I);
		Connect(this.UHC173LOG.pins.M_I, this.pins.M_I);
		Connect(this.UHC173LOG.pins.N_I, this.pins.N_I);
		Connect(this.UHC173LOG.pins._1D_I, this.pins._1D_I);
		Connect(this.UHC173LOG.pins._2D_I, this.pins._2D_I);
		Connect(this.UHC173LOG.pins._3D_I, this.pins._3D_I);
		Connect(this.UHC173LOG.pins._4D_I, this.pins._4D_I);
		Connect(this.UHC173LOG.pins._1Q, _1Q);
		Connect(this.UHC173LOG.pins._2Q, _2Q);
		Connect(this.UHC173LOG.pins._3Q, _3Q);
		Connect(this.UHC173LOG.pins._4Q, _4Q);
		let CLR = new Pin();
		Connect(this.UHC173LOG.pins.CLR, CLR);
		Connect(this.UHC173LOG.pins.CLRBAR, CLRBAR);
		Connect(this.UHC173LOG.pins.CLK, CLK);
		let DATEN = new Pin();
		Connect(this.UHC173LOG.pins.DATEN, DATEN);
		let OE = new Pin();
		Connect(this.UHC173LOG.pins.OE, OE);
		let _1D = new Pin();
		Connect(this.UHC173LOG.pins._1D, _1D);
		let _2D = new Pin();
		Connect(this.UHC173LOG.pins._2D, _2D);
		let _3D = new Pin();
		Connect(this.UHC173LOG.pins._3D, _3D);
		let _4D = new Pin();
		Connect(this.UHC173LOG.pins._4D, _4D);
		Connect(this.UHC173LOG.pins.DFF1, DFF1);
		Connect(this.UHC173LOG.pins.DFF2, DFF2);
		Connect(this.UHC173LOG.pins.DFF3, DFF3);
		Connect(this.UHC173LOG.pins.DFF4, DFF4);
		Connect(_1Q, this.pins._1Q_O);
		Connect(_2Q, this.pins._2Q_O);
		Connect(_3Q, this.pins._3Q_O);
		Connect(_4Q, this.pins._4Q_O);
	}
}
/**
 * HEX D-TYPE FLIP-FLOPS WITH CLEAR
 */
class SN74HC174 extends Component {
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
		let _D_NC = new Pin();
		Connect(this.UD.pins.QBAR0, _D_NC);
		Connect(this.UD.pins.QBAR1, _D_NC);
		Connect(this.UD.pins.QBAR2, _D_NC);
		Connect(this.UD.pins.QBAR3, _D_NC);
		Connect(this.UD.pins.QBAR4, _D_NC);
		Connect(this.UD.pins.QBAR5, _D_NC);
	}
}
/**
 * QUADRUPLE D-TYPE FLIP-FLOPS WITH CLEAR
 */
class SN74HC175 extends Component {
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
		Connect(this.UD.pins.QBAR0, this.pins.Q1BAR);
		Connect(this.UD.pins.QBAR1, this.pins.Q2BAR);
		Connect(this.UD.pins.QBAR2, this.pins.Q3BAR);
		Connect(this.UD.pins.QBAR3, this.pins.Q4BAR);
	}
}
/**
 * PARITY GENERATOR_CHECKER ODD_EVEN 9-BIT
 */
class SN74HC180 extends Component {
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
			EIN_I: new Pin(),
			OIN_I: new Pin(),
			EOUT_O: new Pin(),
			OOUT_O: new Pin(),
		}
		this.UHC180LOG = new logicexp(['A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I','EIN_I','OIN_I'], ['EIN','OIN','EOUT','OOUT'], []).Logic('let    A      =  A_I ;   A      =  A_I ;let    B      =  B_I ;   B      =  B_I ;let    C      =  C_I ;   C      =  C_I ;let    D      =  D_I ;   D      =  D_I ;let    E      =  E_I ;   E      =  E_I ;let    F      =  F_I ;   F      =  F_I ;let    G      =  G_I ;   G      =  G_I ;let    H      =  H_I ;   H      =  H_I ;   EIN    =  EIN_I ;   OIN    =  OIN_I ;let    PARITY =  A ^ B ^ C ^ D ^ E ^ F ^ G ^ H ;   PARITY =  A ^ B ^ C ^ D ^ E ^ F ^ G ^ H ;   EOUT   =  !((!PARITY & OIN) | (PARITY & EIN)) ;   OOUT   =  !((!PARITY & EIN) | (PARITY & OIN)) ;');
		Connect(this.UHC180LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC180LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC180LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC180LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC180LOG.pins.E_I, this.pins.E_I);
		Connect(this.UHC180LOG.pins.F_I, this.pins.F_I);
		Connect(this.UHC180LOG.pins.G_I, this.pins.G_I);
		Connect(this.UHC180LOG.pins.H_I, this.pins.H_I);
		Connect(this.UHC180LOG.pins.EIN_I, this.pins.EIN_I);
		Connect(this.UHC180LOG.pins.OIN_I, this.pins.OIN_I);
		let EIN = new Pin();
		Connect(this.UHC180LOG.pins.EIN, EIN);
		let OIN = new Pin();
		Connect(this.UHC180LOG.pins.OIN, OIN);
		let EOUT = new Pin();
		Connect(this.UHC180LOG.pins.EOUT, EOUT);
		let OOUT = new Pin();
		Connect(this.UHC180LOG.pins.OOUT, OOUT);
		Connect(EOUT, this.pins.EOUT_O);
		Connect(OOUT, this.pins.OOUT_O);
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
		this.UHC181LOG = new logicexp(['A0BAR_I','A1BAR_I','A2BAR_I','A3BAR_I','B0BAR_I','B1BAR_I','B2BAR_I','B3BAR_I','S0_I','S1_I','S2_I','S3_I','M_I','CN_I'], ['A0BAR','A1BAR','A2BAR','A3BAR','B0BAR','B1BAR','B2BAR','B3BAR','S0','S1','S2','S3','M','CN','F0BAR','F1BAR','F2BAR','F3BAR','AEQUALB','PBAR','GBAR','CN_4'], []).Logic('   A0BAR   =  A0BAR_I ;   A1BAR   =  A1BAR_I ;   A2BAR   =  A2BAR_I ;   A3BAR   =  A3BAR_I ;   B0BAR   =  B0BAR_I ;   B1BAR   =  B1BAR_I ;   B2BAR   =  B2BAR_I ;   B3BAR   =  B3BAR_I ;   S0      =  S0_I ;   S1      =  S1_I ;   S2      =  S2_I ;   S3      =  S3_I ;   M       =  M_I ;   CN      =  CN_I ;let    TOP3    =  !( (A3BAR & B3BAR & S3) | (A3BAR & !B3BAR & S2) ) ;   TOP3    =  !( (A3BAR & B3BAR & S3) | (A3BAR & !B3BAR & S2) ) ;let    BOT3    =  !(        (!B3BAR & S1) |  A3BAR | (B3BAR & S0) ) ;   BOT3    =  !(        (!B3BAR & S1) |  A3BAR | (B3BAR & S0) ) ;let    TOP2    =  !( (A2BAR & B2BAR & S3) | (A2BAR & !B2BAR & S2) ) ;   TOP2    =  !( (A2BAR & B2BAR & S3) | (A2BAR & !B2BAR & S2) ) ;let    BOT2    =  !(        (!B2BAR & S1) |  A2BAR | (B2BAR & S0) ) ;   BOT2    =  !(        (!B2BAR & S1) |  A2BAR | (B2BAR & S0) ) ;let    TOP1    =  !( (A1BAR & B1BAR & S3) | (A1BAR & !B1BAR & S2) ) ;   TOP1    =  !( (A1BAR & B1BAR & S3) | (A1BAR & !B1BAR & S2) ) ;let    BOT1    =  !(        (!B1BAR & S1) |  A1BAR | (B1BAR & S0) ) ;   BOT1    =  !(        (!B1BAR & S1) |  A1BAR | (B1BAR & S0) ) ;let    TOP0    =  !( (A0BAR & B0BAR & S3) | (A0BAR & !B0BAR & S2) ) ;   TOP0    =  !( (A0BAR & B0BAR & S3) | (A0BAR & !B0BAR & S2) ) ;let    BOT0    =  !(        (!B0BAR & S1) |  A0BAR | (B0BAR & S0) ) ;   BOT0    =  !(        (!B0BAR & S1) |  A0BAR | (B0BAR & S0) ) ;let    MBAR    =  !M ;   MBAR    =  !M ;   F3BAR   =  (TOP3 ^ BOT3) ^ !( (  CN & MBAR & TOP2 & TOP1 & TOP0) |                                  (BOT0 & MBAR & TOP2 & TOP1) |                                  (BOT1 & MBAR & TOP2) |                                  (BOT2 & MBAR) ) ;   F2BAR   =  (TOP2 ^ BOT2) ^ !( (  CN & MBAR & TOP1 & TOP0) |                                  (BOT0 & MBAR & TOP1) |                                  (BOT1 & MBAR) ) ;   F1BAR   =  (TOP1 ^ BOT1) ^ !( (  CN & MBAR & TOP0) |                                  (BOT0 & MBAR) ) ;   F0BAR   =  (TOP0 ^ BOT0) ^ !(    CN & MBAR) ;   AEQUALB =  F3BAR & F2BAR & F1BAR & F0BAR ;   PBAR    =  !(         TOP3 & TOP2 & TOP1 & TOP0) ;   GBAR    =  !( (BOT0 & TOP3 & TOP2 & TOP1) |                  (BOT1 & TOP3 & TOP2) |                  (BOT2 & TOP3) |                    BOT3 ) ;   CN_4    =  !GBAR | (!PBAR & CN) ;');
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
		let CN_4 = new Pin();
		Connect(this.UHC181LOG.pins.CN_4, CN_4);
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
 * LOOK-AHEAD CARRY GENERATOR
 */
class SN74HC182 extends Component {
	constructor() {
		super();
		this.pins = {
			G3BAR_I: new Pin(),
			G2BAR_I: new Pin(),
			G1BAR_I: new Pin(),
			G0BAR_I: new Pin(),
			P3BAR_I: new Pin(),
			P2BAR_I: new Pin(),
			P1BAR_I: new Pin(),
			P0BAR_I: new Pin(),
			CN_I: new Pin(),
			GBAR_O: new Pin(),
			PBAR_O: new Pin(),
			CN_X_O: new Pin(),
			CN_Y_O: new Pin(),
			CN_Z_O: new Pin(),
		}
		this.UHC182LOG = new logicexp(['G3BAR_I','G2BAR_I','G1BAR_I','G0BAR_I','P3BAR_I','P2BAR_I','P1BAR_I','P0BAR_I','CN_I'], ['G3BAR','G2BAR','G1BAR','G0BAR','P3BAR','P2BAR','P1BAR','P0BAR','CN','GBAR','PBAR','CN_X','CN_Y','CN_Z'], []).Logic('   G3BAR =  G3BAR_I ;   G2BAR =  G2BAR_I ;   G1BAR =  G1BAR_I ;   G0BAR =  G0BAR_I ;   P3BAR =  P3BAR_I ;   P2BAR =  P2BAR_I ;   P1BAR =  P1BAR_I ;   P0BAR =  P0BAR_I ;   CN    =  CN_I ;let    CNBAR =  !CN ;   CNBAR =  !CN ;   PBAR  =  P0BAR | P1BAR | P2BAR | P3BAR ;   GBAR  =     (        G0BAR & G1BAR & G2BAR & G3BAR) |                (P1BAR         & G1BAR & G2BAR & G3BAR) |                (P2BAR                 & G2BAR & G3BAR) |                (P3BAR                         & G3BAR) ;   CN_Z  =  !( (CNBAR & G0BAR & G1BAR & G2BAR) |                (P0BAR & G0BAR & G1BAR & G2BAR) |                (P1BAR         & G1BAR & G2BAR) |                (P2BAR                 & G2BAR) ) ;   CN_Y  =  !( (CNBAR & G0BAR & G1BAR) |                (P0BAR & G0BAR & G1BAR) |                (P1BAR         & G1BAR) ) ;   CN_X  =  !( (CNBAR & G0BAR) |                (P0BAR & G0BAR) ) ;');
		Connect(this.UHC182LOG.pins.G3BAR_I, this.pins.G3BAR_I);
		Connect(this.UHC182LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC182LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC182LOG.pins.G0BAR_I, this.pins.G0BAR_I);
		Connect(this.UHC182LOG.pins.P3BAR_I, this.pins.P3BAR_I);
		Connect(this.UHC182LOG.pins.P2BAR_I, this.pins.P2BAR_I);
		Connect(this.UHC182LOG.pins.P1BAR_I, this.pins.P1BAR_I);
		Connect(this.UHC182LOG.pins.P0BAR_I, this.pins.P0BAR_I);
		Connect(this.UHC182LOG.pins.CN_I, this.pins.CN_I);
		let G3BAR = new Pin();
		Connect(this.UHC182LOG.pins.G3BAR, G3BAR);
		let G2BAR = new Pin();
		Connect(this.UHC182LOG.pins.G2BAR, G2BAR);
		let G1BAR = new Pin();
		Connect(this.UHC182LOG.pins.G1BAR, G1BAR);
		let G0BAR = new Pin();
		Connect(this.UHC182LOG.pins.G0BAR, G0BAR);
		let P3BAR = new Pin();
		Connect(this.UHC182LOG.pins.P3BAR, P3BAR);
		let P2BAR = new Pin();
		Connect(this.UHC182LOG.pins.P2BAR, P2BAR);
		let P1BAR = new Pin();
		Connect(this.UHC182LOG.pins.P1BAR, P1BAR);
		let P0BAR = new Pin();
		Connect(this.UHC182LOG.pins.P0BAR, P0BAR);
		let CN = new Pin();
		Connect(this.UHC182LOG.pins.CN, CN);
		let GBAR = new Pin();
		Connect(this.UHC182LOG.pins.GBAR, GBAR);
		let PBAR = new Pin();
		Connect(this.UHC182LOG.pins.PBAR, PBAR);
		let CN_X = new Pin();
		Connect(this.UHC182LOG.pins.CN_X, CN_X);
		let CN_Y = new Pin();
		Connect(this.UHC182LOG.pins.CN_Y, CN_Y);
		let CN_Z = new Pin();
		Connect(this.UHC182LOG.pins.CN_Z, CN_Z);
		Connect(GBAR, this.pins.GBAR_O);
		Connect(PBAR, this.pins.PBAR_O);
		Connect(CN_X, this.pins.CN_X_O);
		Connect(CN_Y, this.pins.CN_Y_O);
		Connect(CN_Z, this.pins.CN_Z_O);
	}
}
/**
 * Synchronous 4-bit Up_Down Decade Counters
 */
class SN74HC190 extends Component {
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
		this.UHC190 = new logicexp(['CLK_I','DUBAR_I','CTENBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','DUBAR','CTENBAR','LOADBAR','A','B','C','D','MXMNOUT','RCOBAR','SA','RA','DA','SB','RB','DB','SC','RC','DC','SD','RD','DD'], []).Logic('   CLK =  CLK_I ;   DUBAR =  DUBAR_I ;   CTENBAR =  CTENBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    DU =  !DUBAR ;   DU =  !DUBAR ;let    LOAD =  !LOADBAR ;   LOAD =  !LOADBAR ;let    CTEN =  !CTENBAR ;   CTEN =  !CTENBAR ;let    CTD =  DUBAR & CTEN ;   CTD =  DUBAR & CTEN ;let    CTU =  DU & CTEN ;   CTU =  DU & CTEN ;   MXMNOUT =  (!QABAR & !QDBAR & DU) | (QABAR & QBBAR & QCBAR &      QDBAR & DUBAR) ;   RCOBAR =  !(MXMNOUT & CTEN & !CLK) ;   SA =  !(A & LOAD) ;   RA =  !(!A & LOAD) ;   DA =  !QABAR ^ CTEN ;   SB =  !(B & LOAD) ;   RB =  !(!B & LOAD) ;let    I1DB =  !QABAR & QDBAR ;   I1DB =  !QABAR & QDBAR ;let    I2DB =  QABAR & !(QBBAR & QCBAR & QDBAR) ;   I2DB =  QABAR & !(QBBAR & QCBAR & QDBAR) ;let    I3DB =  I1DB ^ !QBBAR ;   I3DB =  I1DB ^ !QBBAR ;let    I4DB =  I2DB ^ !QBBAR ;   I4DB =  I2DB ^ !QBBAR ;let    I5DB =  I3DB & CTU ;   I5DB =  I3DB & CTU ;let    I6DB =  CTENBAR & !QBBAR ;   I6DB =  CTENBAR & !QBBAR ;let    I7DB =  I4DB & CTD ;   I7DB =  I4DB & CTD ;   DB =  I5DB | I6DB | I7DB ;   SC =  !(C & LOAD) ;   RC =  !(!C & LOAD) ;let    I1DC =  !QABAR & !QBBAR ;   I1DC =  !QABAR & !QBBAR ;let    I2DC =  QABAR & QBBAR & !(QBBAR & QCBAR & QDBAR) ;   I2DC =  QABAR & QBBAR & !(QBBAR & QCBAR & QDBAR) ;let    I3DC =  I1DC ^ !QCBAR ;   I3DC =  I1DC ^ !QCBAR ;let    I4DC =  I2DC ^ !QCBAR ;   I4DC =  I2DC ^ !QCBAR ;let    I5DC =  I3DC & CTU ;   I5DC =  I3DC & CTU ;let    I6DC =  CTENBAR & !QCBAR ;   I6DC =  CTENBAR & !QCBAR ;let    I7DC =  I4DC & CTD ;   I7DC =  I4DC & CTD ;   DC =  I5DC | I6DC | I7DC ;   SD =  !(D & LOAD) ;   RD =  !(!D & LOAD) ;let    I1DD =  QABAR & !QDBAR ;   I1DD =  QABAR & !QDBAR ;let    I2DD =  !QABAR & !QBBAR & !QCBAR & QDBAR ;   I2DD =  !QABAR & !QBBAR & !QCBAR & QDBAR ;let    I3DD =  QABAR & QBBAR & QCBAR ;   I3DD =  QABAR & QBBAR & QCBAR ;let    I4DD =  I1DD | I2DD ;   I4DD =  I1DD | I2DD ;let    I5DD =  I3DD ^ !QDBAR ;   I5DD =  I3DD ^ !QDBAR ;let    I6DD =  I4DD & CTU ;   I6DD =  I4DD & CTU ;let    I7DD =  !QDBAR & CTENBAR ;   I7DD =  !QDBAR & CTENBAR ;let    I8DD =  I5DD & CTD ;   I8DD =  I5DD & CTD ;   DD =  I6DD | I7DD | I8DD ;');
		Connect(this.UHC190.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC190.pins.DUBAR_I, this.pins.DUBAR_I);
		Connect(this.UHC190.pins.CTENBAR_I, this.pins.CTENBAR_I);
		Connect(this.UHC190.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.UHC190.pins.A_I, this.pins.A_I);
		Connect(this.UHC190.pins.B_I, this.pins.B_I);
		Connect(this.UHC190.pins.C_I, this.pins.C_I);
		Connect(this.UHC190.pins.D_I, this.pins.D_I);
		let QABAR = new Pin();
		Connect(this.UHC190.pins.QABAR, QABAR);
		let QBBAR = new Pin();
		Connect(this.UHC190.pins.QBBAR, QBBAR);
		let QCBAR = new Pin();
		Connect(this.UHC190.pins.QCBAR, QCBAR);
		let QDBAR = new Pin();
		Connect(this.UHC190.pins.QDBAR, QDBAR);
		let CLK = new Pin();
		Connect(this.UHC190.pins.CLK, CLK);
		let DUBAR = new Pin();
		Connect(this.UHC190.pins.DUBAR, DUBAR);
		let CTENBAR = new Pin();
		Connect(this.UHC190.pins.CTENBAR, CTENBAR);
		let LOADBAR = new Pin();
		Connect(this.UHC190.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.UHC190.pins.A, A);
		let B = new Pin();
		Connect(this.UHC190.pins.B, B);
		let C = new Pin();
		Connect(this.UHC190.pins.C, C);
		let D = new Pin();
		Connect(this.UHC190.pins.D, D);
		let MXMNOUT = new Pin();
		Connect(this.UHC190.pins.MXMNOUT, MXMNOUT);
		let RCOBAR = new Pin();
		Connect(this.UHC190.pins.RCOBAR, RCOBAR);
		let SA = new Pin();
		Connect(this.UHC190.pins.SA, SA);
		let RA = new Pin();
		Connect(this.UHC190.pins.RA, RA);
		let DA = new Pin();
		Connect(this.UHC190.pins.DA, DA);
		let SB = new Pin();
		Connect(this.UHC190.pins.SB, SB);
		let RB = new Pin();
		Connect(this.UHC190.pins.RB, RB);
		let DB = new Pin();
		Connect(this.UHC190.pins.DB, DB);
		let SC = new Pin();
		Connect(this.UHC190.pins.SC, SC);
		let RC = new Pin();
		Connect(this.UHC190.pins.RC, RC);
		let DC = new Pin();
		Connect(this.UHC190.pins.DC, DC);
		let SD = new Pin();
		Connect(this.UHC190.pins.SD, SD);
		let RD = new Pin();
		Connect(this.UHC190.pins.RD, RD);
		let DD = new Pin();
		Connect(this.UHC190.pins.DD, DD);
		this.UDA = new dff(1);
		Connect(this.UDA.pins.PRESET, SA);
		Connect(this.UDA.pins.CLEAR, RA);
		Connect(this.UDA.pins.CLOCK, CLK);
		Connect(this.UDA.pins.D0, DA);
		let QA = new Pin();
		Connect(this.UDA.pins.Q0, QA);
		Connect(this.UDA.pins.QBAR0, QABAR);
		this.UDB = new dff(1);
		Connect(this.UDB.pins.PRESET, SB);
		Connect(this.UDB.pins.CLEAR, RB);
		Connect(this.UDB.pins.CLOCK, CLK);
		Connect(this.UDB.pins.D0, DB);
		let QB = new Pin();
		Connect(this.UDB.pins.Q0, QB);
		Connect(this.UDB.pins.QBAR0, QBBAR);
		this.UDC = new dff(1);
		Connect(this.UDC.pins.PRESET, SC);
		Connect(this.UDC.pins.CLEAR, RC);
		Connect(this.UDC.pins.CLOCK, CLK);
		Connect(this.UDC.pins.D0, DC);
		let QC = new Pin();
		Connect(this.UDC.pins.Q0, QC);
		Connect(this.UDC.pins.QBAR0, QCBAR);
		this.UDD = new dff(1);
		Connect(this.UDD.pins.PRESET, SD);
		Connect(this.UDD.pins.CLEAR, RD);
		Connect(this.UDD.pins.CLOCK, CLK);
		Connect(this.UDD.pins.D0, DD);
		let QD = new Pin();
		Connect(this.UDD.pins.Q0, QD);
		Connect(this.UDD.pins.QBAR0, QDBAR);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
		Connect(MXMNOUT, this.pins.MXMNOUT_O);
	}
}
class SN74HC191 extends Component {
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
		this.U1 = new dff(1);
		let SA = new Pin();
		Connect(this.U1.pins.PRESET, SA);
		let RA = new Pin();
		Connect(this.U1.pins.CLEAR, RA);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		let DA = new Pin();
		Connect(this.U1.pins.D0, DA);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QABAR = new Pin();
		Connect(this.U1.pins.QBAR0, QABAR);
		this.U2 = new dff(1);
		let SB = new Pin();
		Connect(this.U2.pins.PRESET, SB);
		let RB = new Pin();
		Connect(this.U2.pins.CLEAR, RB);
		Connect(this.U2.pins.CLOCK, CLK);
		let DB = new Pin();
		Connect(this.U2.pins.D0, DB);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		let QBBAR = new Pin();
		Connect(this.U2.pins.QBAR0, QBBAR);
		this.U3 = new dff(1);
		let SC = new Pin();
		Connect(this.U3.pins.PRESET, SC);
		let RC = new Pin();
		Connect(this.U3.pins.CLEAR, RC);
		Connect(this.U3.pins.CLOCK, CLK);
		let DC = new Pin();
		Connect(this.U3.pins.D0, DC);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		let QCBAR = new Pin();
		Connect(this.U3.pins.QBAR0, QCBAR);
		this.U4 = new dff(1);
		let SD = new Pin();
		Connect(this.U4.pins.PRESET, SD);
		let RD = new Pin();
		Connect(this.U4.pins.CLEAR, RD);
		Connect(this.U4.pins.CLOCK, CLK);
		let DD = new Pin();
		Connect(this.U4.pins.D0, DD);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		let QDBAR = new Pin();
		Connect(this.U4.pins.QBAR0, QDBAR);
		this.UHC191LOG = new logicexp(['CLK_I','DUBAR_I','CTENBAR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QABAR','QBBAR','QCBAR','QDBAR'], ['CLK','DUBAR','CTENBAR','LOADBAR','A','B','C','D','MXMNOUT','RCOBAR','SA','RA','DA','SB','RB','DB','SC','RC','DC','SD','RD','DD'], []).Logic('   CLK =  CLK_I ;   DUBAR =  DUBAR_I ;   CTENBAR =  CTENBAR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    IEN1 =  !(!DUBAR | CTENBAR) ;   IEN1 =  !(!DUBAR | CTENBAR) ;let    IEN2 =  !(DUBAR | CTENBAR) ;   IEN2 =  !(DUBAR | CTENBAR) ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;let    IQA =  !QABAR ;   IQA =  !QABAR ;let    IQB =  !QBBAR ;   IQB =  !QBBAR ;let    IQC =  !QCBAR ;   IQC =  !QCBAR ;let    IQD =  !QDBAR ;   IQD =  !QDBAR ;let    IM1 =  !(IQA & IQB & IQC & IQD & !DUBAR) ;   IM1 =  !(IQA & IQB & IQC & IQD & !DUBAR) ;let    IM2 =  !(QABAR & QBBAR & QCBAR & QDBAR & DUBAR) ;   IM2 =  !(QABAR & QBBAR & QCBAR & QDBAR & DUBAR) ;let    IB1 =  !(IEN2 & (IQA ^ IQB)) ;   IB1 =  !(IEN2 & (IQA ^ IQB)) ;let    IB2 =  !((IQB ^ QABAR) & IEN1) ;   IB2 =  !((IQB ^ QABAR) & IEN1) ;let    IC1 =  !(IEN2 & ((IQA & IQB) ^ IQC)) ;   IC1 =  !(IEN2 & ((IQA & IQB) ^ IQC)) ;let    IC2 =  !((IQC ^ (QABAR & QBBAR)) & IEN1) ;   IC2 =  !((IQC ^ (QABAR & QBBAR)) & IEN1) ;let    ID1 =  !(IEN2 & ((IQA & IQB & IQC) ^ IQD)) ;   ID1 =  !(IEN2 & ((IQA & IQB & IQC) ^ IQD)) ;let    ID2 =  !((IQD ^ (QABAR & QBBAR & QCBAR)) & IEN1) ;   ID2 =  !((IQD ^ (QABAR & QBBAR & QCBAR)) & IEN1) ;   SA =  !(A & ILD) ;   RA =  !(!A & ILD) ;   SB =  !(B & ILD) ;   RB =  !(!B & ILD) ;   SC =  !(C & ILD) ;   RC =  !(!C & ILD) ;   SD =  !(D & ILD) ;   RD =  !(!D & ILD) ;   DA =  !CTENBAR ^ IQA ;   DB =  !(IB1 & IB2 & !(CTENBAR & IQB)) ;   DC =  !(IC1 & IC2 & !(CTENBAR & IQC)) ;   DD =  !(ID1 & ID2 & !(CTENBAR & IQD)) ;   MXMNOUT =  !(IM1 & IM2) ;   RCOBAR =  !(MXMNOUT & !CTENBAR & !CLK) ;');
		Connect(this.UHC191LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC191LOG.pins.DUBAR_I, this.pins.DUBAR_I);
		Connect(this.UHC191LOG.pins.CTENBAR_I, this.pins.CTENBAR_I);
		Connect(this.UHC191LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.UHC191LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC191LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC191LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC191LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC191LOG.pins.QABAR, QABAR);
		Connect(this.UHC191LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC191LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC191LOG.pins.QDBAR, QDBAR);
		Connect(this.UHC191LOG.pins.CLK, CLK);
		let DUBAR = new Pin();
		Connect(this.UHC191LOG.pins.DUBAR, DUBAR);
		let CTENBAR = new Pin();
		Connect(this.UHC191LOG.pins.CTENBAR, CTENBAR);
		let LOADBAR = new Pin();
		Connect(this.UHC191LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.UHC191LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC191LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC191LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC191LOG.pins.D, D);
		let MXMNOUT = new Pin();
		Connect(this.UHC191LOG.pins.MXMNOUT, MXMNOUT);
		let RCOBAR = new Pin();
		Connect(this.UHC191LOG.pins.RCOBAR, RCOBAR);
		Connect(this.UHC191LOG.pins.SA, SA);
		Connect(this.UHC191LOG.pins.RA, RA);
		Connect(this.UHC191LOG.pins.DA, DA);
		Connect(this.UHC191LOG.pins.SB, SB);
		Connect(this.UHC191LOG.pins.RB, RB);
		Connect(this.UHC191LOG.pins.DB, DB);
		Connect(this.UHC191LOG.pins.SC, SC);
		Connect(this.UHC191LOG.pins.RC, RC);
		Connect(this.UHC191LOG.pins.DC, DC);
		Connect(this.UHC191LOG.pins.SD, SD);
		Connect(this.UHC191LOG.pins.RD, RD);
		Connect(this.UHC191LOG.pins.DD, DD);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
		Connect(MXMNOUT, this.pins.MXMNOUT_O);
	}
}
class SN74HC192 extends Component {
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
		this.U1 = new dff(1);
		let SA = new Pin();
		Connect(this.U1.pins.PRESET, SA);
		let RA = new Pin();
		Connect(this.U1.pins.CLEAR, RA);
		let MCLK = new Pin();
		Connect(this.U1.pins.CLOCK, MCLK);
		let QABAR = new Pin();
		Connect(this.U1.pins.D0, QABAR);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.QBAR0, QABAR);
		this.U2 = new dff(1);
		let SB = new Pin();
		Connect(this.U2.pins.PRESET, SB);
		let RB = new Pin();
		Connect(this.U2.pins.CLEAR, RB);
		Connect(this.U2.pins.CLOCK, MCLK);
		let DB = new Pin();
		Connect(this.U2.pins.D0, DB);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		let QBBAR = new Pin();
		Connect(this.U2.pins.QBAR0, QBBAR);
		this.U3 = new dff(1);
		let SC = new Pin();
		Connect(this.U3.pins.PRESET, SC);
		let RC = new Pin();
		Connect(this.U3.pins.CLEAR, RC);
		Connect(this.U3.pins.CLOCK, MCLK);
		let DC = new Pin();
		Connect(this.U3.pins.D0, DC);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		let QCBAR = new Pin();
		Connect(this.U3.pins.QBAR0, QCBAR);
		this.U4 = new dff(1);
		let SD = new Pin();
		Connect(this.U4.pins.PRESET, SD);
		let RD = new Pin();
		Connect(this.U4.pins.CLEAR, RD);
		Connect(this.U4.pins.CLOCK, MCLK);
		let DD = new Pin();
		Connect(this.U4.pins.D0, DD);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		let QDBAR = new Pin();
		Connect(this.U4.pins.QBAR0, QDBAR);
		this.U5 = new srff(1);
		let UP = new Pin();
		Connect(this.U5.pins.PRESET, UP);
		let DOWN = new Pin();
		Connect(this.U5.pins.CLEAR, DOWN);
		Connect(this.U5.pins.GATE, _D_HI);
		let _D_LO = new Pin();
		Connect(this.U5.pins.S0, _D_LO);
		Connect(this.U5.pins.R0, _D_LO);
		let IU = new Pin();
		Connect(this.U5.pins.Q0, IU);
		let ID = new Pin();
		Connect(this.U5.pins.QBAR0, ID);
		this.UHC192LOG = new logicexp(['UP_I','DOWN_I','CLR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QABAR','QBBAR','QCBAR','QDBAR','IU','ID'], ['UP','DOWN','CLR','LOADBAR','A','B','C','D','BOBAR','COBAR','MCLK','SA','RA','SB','RB','SC','RC','SD','RD','DB','DC','DD'], []).Logic('   UP =  UP_I ;   DOWN =  DOWN_I ;   CLR =  CLR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    ICL =  !CLR ;   ICL =  !CLR ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;   MCLK =  UP & DOWN ;let    IN1 =  !(QBBAR & QCBAR & QDBAR) ;   IN1 =  !(QBBAR & QCBAR & QDBAR) ;let    IQA =  !QABAR ;   IQA =  !QABAR ;let    IQB =  !QBBAR ;   IQB =  !QBBAR ;let    IQC =  !QCBAR ;   IQC =  !QCBAR ;let    IQD =  !QDBAR ;   IQD =  !QDBAR ;let    IB1 =  IU & ((IQA & QDBAR) ^ IQB) ;   IB1 =  IU & ((IQA & QDBAR) ^ IQB) ;let    IB2 =  (IQB ^ (QABAR & IN1)) & ID ;   IB2 =  (IQB ^ (QABAR & IN1)) & ID ;let    IC1 =  IU & ((IQA & IQB) ^ IQC) ;   IC1 =  IU & ((IQA & IQB) ^ IQC) ;let    IC2 =  (IQC ^ (QABAR & QBBAR & IN1)) & ID ;   IC2 =  (IQC ^ (QABAR & QBBAR & IN1)) & ID ;let    ID1 =  IU & ((QDBAR & IQC & IQB & IQA) | (QABAR & IQD)) ;   ID1 =  IU & ((QDBAR & IQC & IQB & IQA) | (QABAR & IQD)) ;let    ID2 =  (IQD ^ (QABAR & QBBAR & QCBAR)) & ID ;   ID2 =  (IQD ^ (QABAR & QBBAR & QCBAR)) & ID ;   DB =  IB1 | IB2 ;   DC =  IC1 | IC2 ;   DD =  ID1 | ID2 ;   SA =  !(A & ICL & ILD) ;   RA =  !(!A & ILD) & ICL ;   SB =  !(B & ICL & ILD) ;   RB =  !(!B & ILD) & ICL ;   SC =  !(C & ICL & ILD) ;   RC =  !(!C & ILD) & ICL ;   SD =  !(D & ICL & ILD) ;   RD =  !(!D & ILD) & ICL ;   COBAR =  !(IQA & IQD & !UP) ;   BOBAR =  !(QABAR & QBBAR & QCBAR & QDBAR & !DOWN) ;');
		Connect(this.UHC192LOG.pins.UP_I, this.pins.UP_I);
		Connect(this.UHC192LOG.pins.DOWN_I, this.pins.DOWN_I);
		Connect(this.UHC192LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.UHC192LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.UHC192LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC192LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC192LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC192LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC192LOG.pins.QABAR, QABAR);
		Connect(this.UHC192LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC192LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC192LOG.pins.QDBAR, QDBAR);
		Connect(this.UHC192LOG.pins.IU, IU);
		Connect(this.UHC192LOG.pins.ID, ID);
		Connect(this.UHC192LOG.pins.UP, UP);
		Connect(this.UHC192LOG.pins.DOWN, DOWN);
		let CLR = new Pin();
		Connect(this.UHC192LOG.pins.CLR, CLR);
		let LOADBAR = new Pin();
		Connect(this.UHC192LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.UHC192LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC192LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC192LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC192LOG.pins.D, D);
		let BOBAR = new Pin();
		Connect(this.UHC192LOG.pins.BOBAR, BOBAR);
		let COBAR = new Pin();
		Connect(this.UHC192LOG.pins.COBAR, COBAR);
		Connect(this.UHC192LOG.pins.MCLK, MCLK);
		Connect(this.UHC192LOG.pins.SA, SA);
		Connect(this.UHC192LOG.pins.RA, RA);
		Connect(this.UHC192LOG.pins.SB, SB);
		Connect(this.UHC192LOG.pins.RB, RB);
		Connect(this.UHC192LOG.pins.SC, SC);
		Connect(this.UHC192LOG.pins.RC, RC);
		Connect(this.UHC192LOG.pins.SD, SD);
		Connect(this.UHC192LOG.pins.RD, RD);
		Connect(this.UHC192LOG.pins.DB, DB);
		Connect(this.UHC192LOG.pins.DC, DC);
		Connect(this.UHC192LOG.pins.DD, DD);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(BOBAR, this.pins.BOBAR_O);
		Connect(COBAR, this.pins.COBAR_O);
	}
}
class SN74HC193 extends Component {
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
		this.U1 = new dff(1);
		let SA = new Pin();
		Connect(this.U1.pins.PRESET, SA);
		let RA = new Pin();
		Connect(this.U1.pins.CLEAR, RA);
		let MCLK = new Pin();
		Connect(this.U1.pins.CLOCK, MCLK);
		let QABAR = new Pin();
		Connect(this.U1.pins.D0, QABAR);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.QBAR0, QABAR);
		this.U2 = new dff(1);
		let SB = new Pin();
		Connect(this.U2.pins.PRESET, SB);
		let RB = new Pin();
		Connect(this.U2.pins.CLEAR, RB);
		Connect(this.U2.pins.CLOCK, MCLK);
		let DB = new Pin();
		Connect(this.U2.pins.D0, DB);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		let QBBAR = new Pin();
		Connect(this.U2.pins.QBAR0, QBBAR);
		this.U3 = new dff(1);
		let SC = new Pin();
		Connect(this.U3.pins.PRESET, SC);
		let RC = new Pin();
		Connect(this.U3.pins.CLEAR, RC);
		Connect(this.U3.pins.CLOCK, MCLK);
		let DC = new Pin();
		Connect(this.U3.pins.D0, DC);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		let QCBAR = new Pin();
		Connect(this.U3.pins.QBAR0, QCBAR);
		this.U4 = new dff(1);
		let SD = new Pin();
		Connect(this.U4.pins.PRESET, SD);
		let RD = new Pin();
		Connect(this.U4.pins.CLEAR, RD);
		Connect(this.U4.pins.CLOCK, MCLK);
		let DD = new Pin();
		Connect(this.U4.pins.D0, DD);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		let QDBAR = new Pin();
		Connect(this.U4.pins.QBAR0, QDBAR);
		this.U5 = new srff(1);
		let UP = new Pin();
		Connect(this.U5.pins.PRESET, UP);
		let DOWN = new Pin();
		Connect(this.U5.pins.CLEAR, DOWN);
		Connect(this.U5.pins.GATE, _D_HI);
		let _D_LO = new Pin();
		Connect(this.U5.pins.S0, _D_LO);
		Connect(this.U5.pins.R0, _D_LO);
		let IU = new Pin();
		Connect(this.U5.pins.Q0, IU);
		let ID = new Pin();
		Connect(this.U5.pins.QBAR0, ID);
		this.UHC193LOG = new logicexp(['UP_I','DOWN_I','CLR_I','LOADBAR_I','A_I','B_I','C_I','D_I','QABAR','QBBAR','QCBAR','QDBAR','IU','ID'], ['UP','DOWN','CLR','LOADBAR','A','B','C','D','BOBAR','COBAR','MCLK','SA','RA','SB','RB','SC','RC','SD','RD','DB','DC','DD'], []).Logic('   UP =  UP_I ;   DOWN =  DOWN_I ;   CLR =  CLR_I ;   LOADBAR =  LOADBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    ICL =  !CLR ;   ICL =  !CLR ;let    ILD =  !LOADBAR ;   ILD =  !LOADBAR ;   MCLK =  UP & DOWN ;let    IQA =  !QABAR ;   IQA =  !QABAR ;let    IQB =  !QBBAR ;   IQB =  !QBBAR ;let    IQC =  !QCBAR ;   IQC =  !QCBAR ;let    IQD =  !QDBAR ;   IQD =  !QDBAR ;let    IB1 =  IU & (IQA ^ IQB) ;   IB1 =  IU & (IQA ^ IQB) ;let    IB2 =  (IQB ^ QABAR) & ID ;   IB2 =  (IQB ^ QABAR) & ID ;let    IC1 =  IU & ((IQA & IQB) ^ IQC) ;   IC1 =  IU & ((IQA & IQB) ^ IQC) ;let    IC2 =  (IQC ^ (QABAR & QBBAR)) & ID ;   IC2 =  (IQC ^ (QABAR & QBBAR)) & ID ;let    ID1 =  IU & ((IQA & IQB & IQC) ^ IQD) ;   ID1 =  IU & ((IQA & IQB & IQC) ^ IQD) ;let    ID2 =  (IQD ^ (QABAR & QBBAR & QCBAR)) & ID ;   ID2 =  (IQD ^ (QABAR & QBBAR & QCBAR)) & ID ;   DB =  IB1 | IB2 ;   DC =  IC1 | IC2 ;   DD =  ID1 | ID2 ;   SA =  !(A & ICL & ILD) ;   RA =  !(!A & ILD) & ICL ;   SB =  !(B & ICL & ILD) ;   RB =  !(!B & ILD) & ICL ;   SC =  !(C & ICL & ILD) ;   RC =  !(!C & ILD) & ICL ;   SD =  !(D & ICL & ILD) ;   RD =  !(!D & ILD) & ICL ;   COBAR =  !(IQA & IQB & IQC & IQD & !UP) ;   BOBAR =  !(QABAR & QBBAR & QCBAR & QDBAR & !DOWN) ;');
		Connect(this.UHC193LOG.pins.UP_I, this.pins.UP_I);
		Connect(this.UHC193LOG.pins.DOWN_I, this.pins.DOWN_I);
		Connect(this.UHC193LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.UHC193LOG.pins.LOADBAR_I, this.pins.LOADBAR_I);
		Connect(this.UHC193LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC193LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC193LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC193LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC193LOG.pins.QABAR, QABAR);
		Connect(this.UHC193LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC193LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC193LOG.pins.QDBAR, QDBAR);
		Connect(this.UHC193LOG.pins.IU, IU);
		Connect(this.UHC193LOG.pins.ID, ID);
		Connect(this.UHC193LOG.pins.UP, UP);
		Connect(this.UHC193LOG.pins.DOWN, DOWN);
		let CLR = new Pin();
		Connect(this.UHC193LOG.pins.CLR, CLR);
		let LOADBAR = new Pin();
		Connect(this.UHC193LOG.pins.LOADBAR, LOADBAR);
		let A = new Pin();
		Connect(this.UHC193LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC193LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC193LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC193LOG.pins.D, D);
		let BOBAR = new Pin();
		Connect(this.UHC193LOG.pins.BOBAR, BOBAR);
		let COBAR = new Pin();
		Connect(this.UHC193LOG.pins.COBAR, COBAR);
		Connect(this.UHC193LOG.pins.MCLK, MCLK);
		Connect(this.UHC193LOG.pins.SA, SA);
		Connect(this.UHC193LOG.pins.RA, RA);
		Connect(this.UHC193LOG.pins.SB, SB);
		Connect(this.UHC193LOG.pins.RB, RB);
		Connect(this.UHC193LOG.pins.SC, SC);
		Connect(this.UHC193LOG.pins.RC, RC);
		Connect(this.UHC193LOG.pins.SD, SD);
		Connect(this.UHC193LOG.pins.RD, RD);
		Connect(this.UHC193LOG.pins.DB, DB);
		Connect(this.UHC193LOG.pins.DC, DC);
		Connect(this.UHC193LOG.pins.DD, DD);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(BOBAR, this.pins.BOBAR_O);
		Connect(COBAR, this.pins.COBAR_O);
	}
}
/**
 * WAS REMODELED USING THE LOGIC DIAGRAM OF 74AS194
 */
class SN74HC194 extends Component {
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
		this.UHC194LOG = new logicexp(['CLK_I','CLRBAR_I','S1_I','S0_I','SL_I','SR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD'], ['CLK','CLRBAR','S1','S0','SL','SR','A','B','C','D','KA','KB','KC','KD','JA','JB','JC','JD','CLOCK'], []).Logic('let    LOAD   =  S1_I & S0_I ;   LOAD   =  S1_I & S0_I ;let    SRIGHT =  !S1_I & S0_I ;   SRIGHT =  !S1_I & S0_I ;let    SLEFT  =  S1_I & !S0_I ;   SLEFT  =  S1_I & !S0_I ;let    HOLD   =  !S1_I & !S0_I ;   HOLD   =  !S1_I & !S0_I ;   CLK =  CLK_I ;   CLRBAR =  CLRBAR_I ;   S1 =  S1_I ;   S0 =  S0_I ;   SL =  SL_I ;   SR =  SR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;   KA =  !( (SR & SRIGHT) | (LOAD & A) | (SLEFT & QB) | (HOLD & QA) ) ;   KB =  !( (QA & SRIGHT) | (LOAD & B) | (SLEFT & QC) | (HOLD & QB) ) ;   KC =  !( (QB & SRIGHT) | (LOAD & C) | (SLEFT & QD) | (HOLD & QC) ) ;   KD =  !( (QC & SRIGHT) | (LOAD & D) | (SLEFT & SL) | (HOLD & QD) ) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;   CLOCK =  !CLK ;');
		Connect(this.UHC194LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC194LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.UHC194LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.UHC194LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.UHC194LOG.pins.SL_I, this.pins.SL_I);
		Connect(this.UHC194LOG.pins.SR_I, this.pins.SR_I);
		Connect(this.UHC194LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC194LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC194LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC194LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.UHC194LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.UHC194LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.UHC194LOG.pins.QC, QC);
		let QD = new Pin();
		Connect(this.UHC194LOG.pins.QD, QD);
		let CLK = new Pin();
		Connect(this.UHC194LOG.pins.CLK, CLK);
		let CLRBAR = new Pin();
		Connect(this.UHC194LOG.pins.CLRBAR, CLRBAR);
		let S1 = new Pin();
		Connect(this.UHC194LOG.pins.S1, S1);
		let S0 = new Pin();
		Connect(this.UHC194LOG.pins.S0, S0);
		let SL = new Pin();
		Connect(this.UHC194LOG.pins.SL, SL);
		let SR = new Pin();
		Connect(this.UHC194LOG.pins.SR, SR);
		let A = new Pin();
		Connect(this.UHC194LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC194LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC194LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC194LOG.pins.D, D);
		let KA = new Pin();
		Connect(this.UHC194LOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.UHC194LOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.UHC194LOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.UHC194LOG.pins.KD, KD);
		let JA = new Pin();
		Connect(this.UHC194LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.UHC194LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.UHC194LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.UHC194LOG.pins.JD, JD);
		let CLOCK = new Pin();
		Connect(this.UHC194LOG.pins.CLOCK, CLOCK);
		this.U1 = new jkff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, CLRBAR);
		Connect(this.U1.pins.CLOCK, CLOCK);
		Connect(this.U1.pins.J0, JA);
		Connect(this.U1.pins.J1, JB);
		Connect(this.U1.pins.J2, JC);
		Connect(this.U1.pins.J3, JD);
		Connect(this.U1.pins.K0, KA);
		Connect(this.U1.pins.K1, KB);
		Connect(this.U1.pins.K2, KC);
		Connect(this.U1.pins.K3, KD);
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.Q1, QB);
		Connect(this.U1.pins.Q2, QC);
		Connect(this.U1.pins.Q3, QD);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * WAS REMODELED USING THE LOGIC DIAGRAM OF 74LS915A
 */
class SN74HC195 extends Component {
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
		this.UHC195LOG = new logicexp(['CLK_I','SH_LDBAR_I','CLRBAR_I','J_I','KBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QABAR'], ['CLK','SH_LDBAR','CLRBAR','J','KBAR','A','B','C','D','KA','KB','KC','KD','JA','JB','JC','JD','CLKBAR'], []).Logic('   CLK =  CLK_I ;   SH_LDBAR =  SH_LDBAR_I ;   CLRBAR =  CLRBAR_I ;   J =  J_I ;   KBAR =  KBAR_I ;   A =  A_I ;   B =  B_I ;   C =  C_I ;   D =  D_I ;let    LOAD =  !SH_LDBAR ;   LOAD =  !SH_LDBAR ;   KA =  !((QABAR & J & SH_LDBAR) | (SH_LDBAR & KBAR & QA) | (LOAD & A)) ;   KB =  !( (QA & SH_LDBAR) | (LOAD & B) ) ;   KC =  !( (QB & SH_LDBAR) | (LOAD & C) ) ;   KD =  !( (QC & SH_LDBAR) | (LOAD & D) ) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;   CLKBAR =  !CLK ;');
		Connect(this.UHC195LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC195LOG.pins.SH_LDBAR_I, this.pins.SH_LDBAR_I);
		Connect(this.UHC195LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.UHC195LOG.pins.J_I, this.pins.J_I);
		Connect(this.UHC195LOG.pins.KBAR_I, this.pins.KBAR_I);
		Connect(this.UHC195LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC195LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC195LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC195LOG.pins.D_I, this.pins.D_I);
		let QA = new Pin();
		Connect(this.UHC195LOG.pins.QA, QA);
		let QB = new Pin();
		Connect(this.UHC195LOG.pins.QB, QB);
		let QC = new Pin();
		Connect(this.UHC195LOG.pins.QC, QC);
		let QABAR = new Pin();
		Connect(this.UHC195LOG.pins.QABAR, QABAR);
		let CLK = new Pin();
		Connect(this.UHC195LOG.pins.CLK, CLK);
		let SH_LDBAR = new Pin();
		Connect(this.UHC195LOG.pins.SH_LDBAR, SH_LDBAR);
		let CLRBAR = new Pin();
		Connect(this.UHC195LOG.pins.CLRBAR, CLRBAR);
		let J = new Pin();
		Connect(this.UHC195LOG.pins.J, J);
		let KBAR = new Pin();
		Connect(this.UHC195LOG.pins.KBAR, KBAR);
		let A = new Pin();
		Connect(this.UHC195LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC195LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC195LOG.pins.C, C);
		let D = new Pin();
		Connect(this.UHC195LOG.pins.D, D);
		let KA = new Pin();
		Connect(this.UHC195LOG.pins.KA, KA);
		let KB = new Pin();
		Connect(this.UHC195LOG.pins.KB, KB);
		let KC = new Pin();
		Connect(this.UHC195LOG.pins.KC, KC);
		let KD = new Pin();
		Connect(this.UHC195LOG.pins.KD, KD);
		let JA = new Pin();
		Connect(this.UHC195LOG.pins.JA, JA);
		let JB = new Pin();
		Connect(this.UHC195LOG.pins.JB, JB);
		let JC = new Pin();
		Connect(this.UHC195LOG.pins.JC, JC);
		let JD = new Pin();
		Connect(this.UHC195LOG.pins.JD, JD);
		let CLKBAR = new Pin();
		Connect(this.UHC195LOG.pins.CLKBAR, CLKBAR);
		this.U1 = new jkff(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, CLRBAR);
		Connect(this.U1.pins.CLOCK, CLKBAR);
		Connect(this.U1.pins.J0, JA);
		Connect(this.U1.pins.J1, JB);
		Connect(this.U1.pins.J2, JC);
		Connect(this.U1.pins.J3, JD);
		Connect(this.U1.pins.K0, KA);
		Connect(this.U1.pins.K1, KB);
		Connect(this.U1.pins.K2, KC);
		Connect(this.U1.pins.K3, KD);
		Connect(this.U1.pins.Q0, QA);
		Connect(this.U1.pins.Q1, QB);
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		Connect(this.U1.pins.QBAR0, QABAR);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		let QDBAR = new Pin();
		Connect(this.U1.pins.QBAR3, QDBAR);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QDBAR, this.pins.QDBAR_O);
	}
}
/**
 * DECODER_DEMULTIPLEXER 3-8 LINE WITH ADDRESS LATCHES
 */
class SN74HC237 extends Component {
	constructor() {
		super();
		this.pins = {
			GLBAR_I: new Pin(),
			G1_I: new Pin(),
			G2BAR_I: new Pin(),
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
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let LATCHEN = new Pin();
		Connect(this.U1.pins.GATE, LATCHEN);
		let A = new Pin();
		Connect(this.U1.pins.D0, A);
		let B = new Pin();
		Connect(this.U1.pins.D1, B);
		let C = new Pin();
		Connect(this.U1.pins.D2, C);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QABAR = new Pin();
		Connect(this.U1.pins.QBAR0, QABAR);
		let QBBAR = new Pin();
		Connect(this.U1.pins.QBAR1, QBBAR);
		let QCBAR = new Pin();
		Connect(this.U1.pins.QBAR2, QCBAR);
		this.UHC237LOG = new logicexp(['GLBAR_I','G1_I','G2BAR_I','A_I','B_I','C_I','QA','QB','QC','QABAR','QBBAR','QCBAR'], ['GLBAR','A','B','C','LATCHEN','ENABLE','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7'], []).Logic('   GLBAR   =  GLBAR_I ;let    G1      =  G1_I ;   G1      =  G1_I ;let    G2BAR   =  G2BAR_I ;   G2BAR   =  G2BAR_I ;   A       =  A_I ;   B       =  B_I ;   C       =  C_I ;   LATCHEN =  !GLBAR ;   ENABLE  =  G1 & !G2BAR ;   Y0      =  ENABLE & QCBAR & QBBAR & QABAR ;   Y1      =  ENABLE & QCBAR & QBBAR & QA    ;   Y2      =  ENABLE & QCBAR & QB    & QABAR ;   Y3      =  ENABLE & QCBAR & QB    & QA    ;   Y4      =  ENABLE & QC    & QBBAR & QABAR ;   Y5      =  ENABLE & QC    & QBBAR & QA    ;   Y6      =  ENABLE & QC    & QB    & QABAR ;   Y7      =  ENABLE & QC    & QB    & QA    ;');
		Connect(this.UHC237LOG.pins.GLBAR_I, this.pins.GLBAR_I);
		Connect(this.UHC237LOG.pins.G1_I, this.pins.G1_I);
		Connect(this.UHC237LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC237LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC237LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC237LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC237LOG.pins.QA, QA);
		Connect(this.UHC237LOG.pins.QB, QB);
		Connect(this.UHC237LOG.pins.QC, QC);
		Connect(this.UHC237LOG.pins.QABAR, QABAR);
		Connect(this.UHC237LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC237LOG.pins.QCBAR, QCBAR);
		let GLBAR = new Pin();
		Connect(this.UHC237LOG.pins.GLBAR, GLBAR);
		Connect(this.UHC237LOG.pins.A, A);
		Connect(this.UHC237LOG.pins.B, B);
		Connect(this.UHC237LOG.pins.C, C);
		Connect(this.UHC237LOG.pins.LATCHEN, LATCHEN);
		let ENABLE = new Pin();
		Connect(this.UHC237LOG.pins.ENABLE, ENABLE);
		let Y0 = new Pin();
		Connect(this.UHC237LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC237LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC237LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC237LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC237LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.UHC237LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.UHC237LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.UHC237LOG.pins.Y7, Y7);
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
class SN74HC238 extends Component {
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
		this.UHC238LOG = new logicexp(['G1_I','G2ABAR_I','G2BBAR_I','A_I','B_I','C_I'], ['G1','G2ABAR','G2BBAR','ENABLE','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7'], []).Logic('   G1     =  G1_I ;   G2ABAR =  G2ABAR_I ;   G2BBAR =  G2BBAR_I ;let    A      =  A_I ;   A      =  A_I ;let    B      =  B_I ;   B      =  B_I ;let    C      =  C_I ;   C      =  C_I ;let    ABAR   =  !A ;   ABAR   =  !A ;let    BBAR   =  !B ;   BBAR   =  !B ;let    CBAR   =  !C ;   CBAR   =  !C ;   ENABLE =  !G2ABAR & !G2BBAR & G1 ;   Y0     =  ENABLE & CBAR & BBAR & ABAR ;   Y1     =  ENABLE & CBAR & BBAR & A    ;   Y2     =  ENABLE & CBAR & B    & ABAR ;   Y3     =  ENABLE & CBAR & B    & A    ;   Y4     =  ENABLE & C    & BBAR & ABAR ;   Y5     =  ENABLE & C    & BBAR & A    ;   Y6     =  ENABLE & C    & B    & ABAR ;   Y7     =  ENABLE & C    & B    & A    ;');
		Connect(this.UHC238LOG.pins.G1_I, this.pins.G1_I);
		Connect(this.UHC238LOG.pins.G2ABAR_I, this.pins.G2ABAR_I);
		Connect(this.UHC238LOG.pins.G2BBAR_I, this.pins.G2BBAR_I);
		Connect(this.UHC238LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC238LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC238LOG.pins.C_I, this.pins.C_I);
		let G1 = new Pin();
		Connect(this.UHC238LOG.pins.G1, G1);
		let G2ABAR = new Pin();
		Connect(this.UHC238LOG.pins.G2ABAR, G2ABAR);
		let G2BBAR = new Pin();
		Connect(this.UHC238LOG.pins.G2BBAR, G2BBAR);
		let ENABLE = new Pin();
		Connect(this.UHC238LOG.pins.ENABLE, ENABLE);
		let Y0 = new Pin();
		Connect(this.UHC238LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC238LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC238LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC238LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC238LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.UHC238LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.UHC238LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.UHC238LOG.pins.Y7, Y7);
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
class SN74HC239 extends Component {
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
		this.UHC239LOG = new logicexp(['GBAR_I','A_I','B_I'], ['GBAR','A','B','Y0','Y1','Y2','Y3'], []).Logic('   GBAR   =  GBAR_I ;   A      =  A_I ;   B      =  B_I ;let    ABAR   =  !A ;   ABAR   =  !A ;let    BBAR   =  !B ;   BBAR   =  !B ;let    ENABLE =  !GBAR ;   ENABLE =  !GBAR ;   Y0     =  ENABLE & BBAR & ABAR ;   Y1     =  ENABLE & BBAR & A    ;   Y2     =  ENABLE & B    & ABAR ;   Y3     =  ENABLE & B    & A    ;');
		Connect(this.UHC239LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC239LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC239LOG.pins.B_I, this.pins.B_I);
		let GBAR = new Pin();
		Connect(this.UHC239LOG.pins.GBAR, GBAR);
		let A = new Pin();
		Connect(this.UHC239LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC239LOG.pins.B, B);
		let Y0 = new Pin();
		Connect(this.UHC239LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC239LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC239LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC239LOG.pins.Y3, Y3);
		Connect(Y0, this.pins.Y0_O);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
	}
}
/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC240 extends Component {
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
		Connect(this.UAB.pins.IN0_0, this.pins.G1BAR);
		Connect(this.UAB.pins.IN1_0, this.pins.G2BAR);
		let G1 = new Pin();
		Connect(this.UAB.pins.OUT0, G1);
		let G2 = new Pin();
		Connect(this.UAB.pins.OUT1, G2);
		this.U1 = new inv3a(4);
		Connect(this.U1.pins.IN0_0, this.pins._1A1);
		Connect(this.U1.pins.IN1_0, this.pins._1A2);
		Connect(this.U1.pins.IN2_0, this.pins._1A3);
		Connect(this.U1.pins.IN3_0, this.pins._1A4);
		Connect(this.U1.pins.EN, G1);
		Connect(this.U1.pins.OUT0, this.pins._1Y1);
		Connect(this.U1.pins.OUT1, this.pins._1Y2);
		Connect(this.U1.pins.OUT2, this.pins._1Y3);
		Connect(this.U1.pins.OUT3, this.pins._1Y4);
		this.U2 = new inv3a(4);
		Connect(this.U2.pins.IN0_0, this.pins._2A1);
		Connect(this.U2.pins.IN1_0, this.pins._2A2);
		Connect(this.U2.pins.IN2_0, this.pins._2A3);
		Connect(this.U2.pins.IN3_0, this.pins._2A4);
		Connect(this.U2.pins.EN, G2);
		Connect(this.U2.pins.OUT0, this.pins._2Y1);
		Connect(this.U2.pins.OUT1, this.pins._2Y2);
		Connect(this.U2.pins.OUT2, this.pins._2Y3);
		Connect(this.U2.pins.OUT3, this.pins._2Y4);
	}
}
/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC241 extends Component {
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
		Connect(this.UA.pins.IN0, this.pins.G1BAR);
		let G1 = new Pin();
		Connect(this.UA.pins.OUT, G1);
		this.U1 = new buf3a(4);
		Connect(this.U1.pins.IN0_0, this.pins._1A1);
		Connect(this.U1.pins.IN1_0, this.pins._1A2);
		Connect(this.U1.pins.IN2_0, this.pins._1A3);
		Connect(this.U1.pins.IN3_0, this.pins._1A4);
		Connect(this.U1.pins.EN, G1);
		Connect(this.U1.pins.OUT0, this.pins._1Y1);
		Connect(this.U1.pins.OUT1, this.pins._1Y2);
		Connect(this.U1.pins.OUT2, this.pins._1Y3);
		Connect(this.U1.pins.OUT3, this.pins._1Y4);
		this.U2 = new buf3a(4);
		Connect(this.U2.pins.IN0_0, this.pins._2A1);
		Connect(this.U2.pins.IN1_0, this.pins._2A2);
		Connect(this.U2.pins.IN2_0, this.pins._2A3);
		Connect(this.U2.pins.IN3_0, this.pins._2A4);
		Connect(this.U2.pins.EN, this.pins.G2);
		Connect(this.U2.pins.OUT0, this.pins._2Y1);
		Connect(this.U2.pins.OUT1, this.pins._2Y2);
		Connect(this.U2.pins.OUT2, this.pins._2Y3);
		Connect(this.U2.pins.OUT3, this.pins._2Y4);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC242 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			G1: new Pin(),
			G2: new Pin(),
			B1: new Pin(),
			B2: new Pin(),
			B3: new Pin(),
			B4: new Pin(),
		}
		this.UAB = new inva(2);
		Connect(this.UAB.pins.IN0_0, this.pins.G1);
		Connect(this.UAB.pins.IN1_0, this.pins.G2);
		let G1A = new Pin();
		Connect(this.UAB.pins.OUT0, G1A);
		let G2A = new Pin();
		Connect(this.UAB.pins.OUT1, G2A);
		this.UC = new or(2);
		Connect(this.UC.pins.IN0, G1A);
		Connect(this.UC.pins.IN1, G2A);
		let G1B = new Pin();
		Connect(this.UC.pins.OUT, G1B);
		this.UD = new nand(2);
		Connect(this.UD.pins.IN0, G1A);
		Connect(this.UD.pins.IN1, G2A);
		let G2B = new Pin();
		Connect(this.UD.pins.OUT, G2B);
		this.UEF = new nora(2,2);
		Connect(this.UEF.pins.IN0_0, G1B);
		let GAB = new Pin();
		Connect(this.UEF.pins.IN0_1, GAB);
		Connect(this.UEF.pins.IN1_0, G2B);
		let GBA = new Pin();
		Connect(this.UEF.pins.IN1_1, GBA);
		Connect(this.UEF.pins.OUT0, GBA);
		Connect(this.UEF.pins.OUT1, GAB);
		this.U1 = new inv3a(4);
		Connect(this.U1.pins.IN0_0, this.pins.A1);
		Connect(this.U1.pins.IN1_0, this.pins.A2);
		Connect(this.U1.pins.IN2_0, this.pins.A3);
		Connect(this.U1.pins.IN3_0, this.pins.A4);
		Connect(this.U1.pins.EN, GAB);
		Connect(this.U1.pins.OUT0, this.pins.B1);
		Connect(this.U1.pins.OUT1, this.pins.B2);
		Connect(this.U1.pins.OUT2, this.pins.B3);
		Connect(this.U1.pins.OUT3, this.pins.B4);
		this.U2 = new inv3a(4);
		Connect(this.U2.pins.IN0_0, this.pins.B1);
		Connect(this.U2.pins.IN1_0, this.pins.B2);
		Connect(this.U2.pins.IN2_0, this.pins.B3);
		Connect(this.U2.pins.IN3_0, this.pins.B4);
		Connect(this.U2.pins.EN, GBA);
		Connect(this.U2.pins.OUT0, this.pins.A1);
		Connect(this.U2.pins.OUT1, this.pins.A2);
		Connect(this.U2.pins.OUT2, this.pins.A3);
		Connect(this.U2.pins.OUT3, this.pins.A4);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC243 extends Component {
	constructor() {
		super();
		this.pins = {
			A1: new Pin(),
			A2: new Pin(),
			A3: new Pin(),
			A4: new Pin(),
			G1: new Pin(),
			G2: new Pin(),
			B1: new Pin(),
			B2: new Pin(),
			B3: new Pin(),
			B4: new Pin(),
		}
		this.UAB = new inva(2);
		Connect(this.UAB.pins.IN0_0, this.pins.G1);
		Connect(this.UAB.pins.IN1_0, this.pins.G2);
		let G1A = new Pin();
		Connect(this.UAB.pins.OUT0, G1A);
		let G2A = new Pin();
		Connect(this.UAB.pins.OUT1, G2A);
		this.UC = new or(2);
		Connect(this.UC.pins.IN0, G1A);
		Connect(this.UC.pins.IN1, G2A);
		let G1B = new Pin();
		Connect(this.UC.pins.OUT, G1B);
		this.UD = new nand(2);
		Connect(this.UD.pins.IN0, G1A);
		Connect(this.UD.pins.IN1, G2A);
		let G2B = new Pin();
		Connect(this.UD.pins.OUT, G2B);
		this.UEF = new nora(2,2);
		Connect(this.UEF.pins.IN0_0, G1B);
		let GAB = new Pin();
		Connect(this.UEF.pins.IN0_1, GAB);
		Connect(this.UEF.pins.IN1_0, G2B);
		let GBA = new Pin();
		Connect(this.UEF.pins.IN1_1, GBA);
		Connect(this.UEF.pins.OUT0, GBA);
		Connect(this.UEF.pins.OUT1, GAB);
		this.U1 = new buf3a(4);
		Connect(this.U1.pins.IN0_0, this.pins.A1);
		Connect(this.U1.pins.IN1_0, this.pins.A2);
		Connect(this.U1.pins.IN2_0, this.pins.A3);
		Connect(this.U1.pins.IN3_0, this.pins.A4);
		Connect(this.U1.pins.EN, GAB);
		Connect(this.U1.pins.OUT0, this.pins.B1);
		Connect(this.U1.pins.OUT1, this.pins.B2);
		Connect(this.U1.pins.OUT2, this.pins.B3);
		Connect(this.U1.pins.OUT3, this.pins.B4);
		this.U2 = new buf3a(4);
		Connect(this.U2.pins.IN0_0, this.pins.B1);
		Connect(this.U2.pins.IN1_0, this.pins.B2);
		Connect(this.U2.pins.IN2_0, this.pins.B3);
		Connect(this.U2.pins.IN3_0, this.pins.B4);
		Connect(this.U2.pins.EN, GBA);
		Connect(this.U2.pins.OUT0, this.pins.A1);
		Connect(this.U2.pins.OUT1, this.pins.A2);
		Connect(this.U2.pins.OUT2, this.pins.A3);
		Connect(this.U2.pins.OUT3, this.pins.A4);
	}
}
/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC244 extends Component {
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
		Connect(this.UAB.pins.IN0_0, this.pins.G1BAR);
		Connect(this.UAB.pins.IN1_0, this.pins.G2BAR);
		let G1 = new Pin();
		Connect(this.UAB.pins.OUT0, G1);
		let G2 = new Pin();
		Connect(this.UAB.pins.OUT1, G2);
		this.U1 = new buf3a(4);
		Connect(this.U1.pins.IN0_0, this.pins._1A1);
		Connect(this.U1.pins.IN1_0, this.pins._1A2);
		Connect(this.U1.pins.IN2_0, this.pins._1A3);
		Connect(this.U1.pins.IN3_0, this.pins._1A4);
		Connect(this.U1.pins.EN, G1);
		Connect(this.U1.pins.OUT0, this.pins._1Y1);
		Connect(this.U1.pins.OUT1, this.pins._1Y2);
		Connect(this.U1.pins.OUT2, this.pins._1Y3);
		Connect(this.U1.pins.OUT3, this.pins._1Y4);
		this.U2 = new buf3a(4);
		Connect(this.U2.pins.IN0_0, this.pins._2A1);
		Connect(this.U2.pins.IN1_0, this.pins._2A2);
		Connect(this.U2.pins.IN2_0, this.pins._2A3);
		Connect(this.U2.pins.IN3_0, this.pins._2A4);
		Connect(this.U2.pins.EN, G2);
		Connect(this.U2.pins.OUT0, this.pins._2Y1);
		Connect(this.U2.pins.OUT1, this.pins._2Y2);
		Connect(this.U2.pins.OUT2, this.pins._2Y3);
		Connect(this.U2.pins.OUT3, this.pins._2Y4);
	}
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
		Connect(this.U1.pins.IN0_0, this.pins.DIR_I);
		Connect(this.U1.pins.IN1_0, this.pins.GBAR_I);
		let DIR = new Pin();
		Connect(this.U1.pins.OUT0, DIR);
		let GBAR = new Pin();
		Connect(this.U1.pins.OUT1, GBAR);
		this.U2 = new inv();
		Connect(this.U2.pins.IN0, DIR);
		let DIRBAR = new Pin();
		Connect(this.U2.pins.OUT, DIRBAR);
		this.U3 = new nora(2,2);
		Connect(this.U3.pins.IN0_0, DIRBAR);
		Connect(this.U3.pins.IN0_1, GBAR);
		Connect(this.U3.pins.IN1_0, DIR);
		Connect(this.U3.pins.IN1_1, GBAR);
		let ENABLEAB = new Pin();
		Connect(this.U3.pins.OUT0, ENABLEAB);
		let ENABLEBA = new Pin();
		Connect(this.U3.pins.OUT1, ENABLEBA);
		this.U4 = new buf3a(8);
		Connect(this.U4.pins.IN0_0, this.pins.A1_B);
		Connect(this.U4.pins.IN1_0, this.pins.A2_B);
		Connect(this.U4.pins.IN2_0, this.pins.A3_B);
		Connect(this.U4.pins.IN3_0, this.pins.A4_B);
		Connect(this.U4.pins.IN4_0, this.pins.A5_B);
		Connect(this.U4.pins.IN5_0, this.pins.A6_B);
		Connect(this.U4.pins.IN6_0, this.pins.A7_B);
		Connect(this.U4.pins.IN7_0, this.pins.A8_B);
		Connect(this.U4.pins.EN, ENABLEAB);
		Connect(this.U4.pins.OUT0, this.pins.B1_B);
		Connect(this.U4.pins.OUT1, this.pins.B2_B);
		Connect(this.U4.pins.OUT2, this.pins.B3_B);
		Connect(this.U4.pins.OUT3, this.pins.B4_B);
		Connect(this.U4.pins.OUT4, this.pins.B5_B);
		Connect(this.U4.pins.OUT5, this.pins.B6_B);
		Connect(this.U4.pins.OUT6, this.pins.B7_B);
		Connect(this.U4.pins.OUT7, this.pins.B8_B);
		this.U5 = new buf3a(8);
		Connect(this.U5.pins.IN0_0, this.pins.B1_B);
		Connect(this.U5.pins.IN1_0, this.pins.B2_B);
		Connect(this.U5.pins.IN2_0, this.pins.B3_B);
		Connect(this.U5.pins.IN3_0, this.pins.B4_B);
		Connect(this.U5.pins.IN4_0, this.pins.B5_B);
		Connect(this.U5.pins.IN5_0, this.pins.B6_B);
		Connect(this.U5.pins.IN6_0, this.pins.B7_B);
		Connect(this.U5.pins.IN7_0, this.pins.B8_B);
		Connect(this.U5.pins.EN, ENABLEBA);
		Connect(this.U5.pins.OUT0, this.pins.A1_B);
		Connect(this.U5.pins.OUT1, this.pins.A2_B);
		Connect(this.U5.pins.OUT2, this.pins.A3_B);
		Connect(this.U5.pins.OUT3, this.pins.A4_B);
		Connect(this.U5.pins.OUT4, this.pins.A5_B);
		Connect(this.U5.pins.OUT5, this.pins.A6_B);
		Connect(this.U5.pins.OUT6, this.pins.A7_B);
		Connect(this.U5.pins.OUT7, this.pins.A8_B);
	}
}
/**
 * MULTIPLEXER_DATA SELECTOR 8-1 LINE WITH 3-STATE OUTPUTS
 */
class SN74HC251 extends Component {
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
		this.UHC251LOG = new logicexp(['GBAR_I','A_I','B_I','C_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I'], ['GBAR','A','B','C','D0','D1','D2','D3','D4','D5','D6','D7','W','Y'], []).Logic('   GBAR =  GBAR_I ;   A =  A_I ;     B =  B_I ;     C =  C_I ;     D0 =  D0_I ;   D1 =  D1_I ;   D2 =  D2_I ;   D3 =  D3_I ;   D4 =  D4_I ;   D5 =  D5_I ;   D6 =  D6_I ;   D7 =  D7_I ;let    IA =  !A ;   IA =  !A ;let    IB =  !B ;   IB =  !B ;let    IC =  !C ;   IC =  !C ;let    ID0 =  D0 & IA & IB & IC ;   ID0 =  D0 & IA & IB & IC ;let    ID1 =  D1 & A & IB & IC ;   ID1 =  D1 & A & IB & IC ;let    ID2 =  D2 & IA & B & IC ;   ID2 =  D2 & IA & B & IC ;let    ID3 =  D3 & A & B & IC ;   ID3 =  D3 & A & B & IC ;let    ID4 =  D4 & IA & IB & C ;   ID4 =  D4 & IA & IB & C ;let    ID5 =  D5 & A & IB & C ;   ID5 =  D5 & A & IB & C ;let    ID6 =  D6 & IA & B & C ;   ID6 =  D6 & IA & B & C ;let    ID7 =  D7 & A & B & C ;   ID7 =  D7 & A & B & C ;   W =  !(ID0 | ID1 | ID2 | ID3 | ID4 | ID5 | ID6 | ID7) ;   Y =  !W ;');
		Connect(this.UHC251LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC251LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC251LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC251LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC251LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.UHC251LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.UHC251LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.UHC251LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.UHC251LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.UHC251LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.UHC251LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.UHC251LOG.pins.D7_I, this.pins.D7_I);
		let GBAR = new Pin();
		Connect(this.UHC251LOG.pins.GBAR, GBAR);
		let A = new Pin();
		Connect(this.UHC251LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC251LOG.pins.B, B);
		let C = new Pin();
		Connect(this.UHC251LOG.pins.C, C);
		let D0 = new Pin();
		Connect(this.UHC251LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.UHC251LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.UHC251LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.UHC251LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.UHC251LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.UHC251LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.UHC251LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.UHC251LOG.pins.D7, D7);
		let W = new Pin();
		Connect(this.UHC251LOG.pins.W, W);
		let Y = new Pin();
		Connect(this.UHC251LOG.pins.Y, Y);
		Connect(W, this.pins.W_O);
		Connect(Y, this.pins.Y_O);
	}
}
/**
 * DUAL 1-OF-4 DATA SELECTORS_MULTIPLEXERS WITH 3-STATE OUTPUTS
 */
class SN74HC253 extends Component {
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
		this.UHC253LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','_1C0_I','_1C1_I','_1C2_I','_1C3_I','_2C0_I','_2C1_I','_2C2_I','_2C3_I'], ['G1BAR','G2BAR','A','B','_1C0','_1C1','_1C2','_1C3','_2C0','_2C1','_2C2','_2C3','Y1','Y2'], []).Logic('   G1BAR =  G1BAR_I ;   G2BAR =  G2BAR_I ;   A =  A_I ;   B =  B_I ;   _1C0 =  _1C0_I ;   _1C1 =  _1C1_I ;   _1C2 =  _1C2_I ;   _1C3 =  _1C3_I ;   _2C0 =  _2C0_I ;   _2C1 =  _2C1_I ;   _2C2 =  _2C2_I ;   _2C3 =  _2C3_I ;let    G1 =  !G1BAR ;   G1 =  !G1BAR ;let    G2 =  !G2BAR ;   G2 =  !G2BAR ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    I0 =  G1 & BBAR & ABAR & _1C0 ;   I0 =  G1 & BBAR & ABAR & _1C0 ;let    I1 =  G1 & BBAR & A    & _1C1 ;   I1 =  G1 & BBAR & A    & _1C1 ;let    I2 =  G1 & B    & ABAR & _1C2 ;   I2 =  G1 & B    & ABAR & _1C2 ;let    I3 =  G1 & B    & A    & _1C3 ;   I3 =  G1 & B    & A    & _1C3 ;let    I4 =  G2 & BBAR & ABAR & _2C0 ;   I4 =  G2 & BBAR & ABAR & _2C0 ;let    I5 =  G2 & BBAR & A    & _2C1 ;   I5 =  G2 & BBAR & A    & _2C1 ;let    I6 =  G2 & B    & ABAR & _2C2 ;   I6 =  G2 & B    & ABAR & _2C2 ;let    I7 =  G2 & B    & A    & _2C3 ;   I7 =  G2 & B    & A    & _2C3 ;   Y1 =  I0 | I1 | I2 | I3 ;   Y2 =  I4 | I5 | I6 | I7 ;');
		Connect(this.UHC253LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC253LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC253LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC253LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC253LOG.pins._1C0_I, this.pins._1C0_I);
		Connect(this.UHC253LOG.pins._1C1_I, this.pins._1C1_I);
		Connect(this.UHC253LOG.pins._1C2_I, this.pins._1C2_I);
		Connect(this.UHC253LOG.pins._1C3_I, this.pins._1C3_I);
		Connect(this.UHC253LOG.pins._2C0_I, this.pins._2C0_I);
		Connect(this.UHC253LOG.pins._2C1_I, this.pins._2C1_I);
		Connect(this.UHC253LOG.pins._2C2_I, this.pins._2C2_I);
		Connect(this.UHC253LOG.pins._2C3_I, this.pins._2C3_I);
		let G1BAR = new Pin();
		Connect(this.UHC253LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.UHC253LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.UHC253LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC253LOG.pins.B, B);
		let _1C0 = new Pin();
		Connect(this.UHC253LOG.pins._1C0, _1C0);
		let _1C1 = new Pin();
		Connect(this.UHC253LOG.pins._1C1, _1C1);
		let _1C2 = new Pin();
		Connect(this.UHC253LOG.pins._1C2, _1C2);
		let _1C3 = new Pin();
		Connect(this.UHC253LOG.pins._1C3, _1C3);
		let _2C0 = new Pin();
		Connect(this.UHC253LOG.pins._2C0, _2C0);
		let _2C1 = new Pin();
		Connect(this.UHC253LOG.pins._2C1, _2C1);
		let _2C2 = new Pin();
		Connect(this.UHC253LOG.pins._2C2, _2C2);
		let _2C3 = new Pin();
		Connect(this.UHC253LOG.pins._2C3, _2C3);
		let Y1 = new Pin();
		Connect(this.UHC253LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC253LOG.pins.Y2, Y2);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
	}
}
/**
 * QUADRUPLE 2-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC257 extends Component {
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
		this.UHC257LOG = new logicexp(['GBAR_I','_1A_I','_1B_I','_2A_I','_2B_I','_3A_I','_3B_I','_4A_I','_4B_I','SEL_I'], ['GBAR','_1A','_1B','_2A','_2B','_3A','_3B','_4A','_4B','SEL','Y1','Y2','Y3','Y4'], []).Logic('   GBAR =  GBAR_I ;   _1A =  _1A_I ;   _1B =  _1B_I ;   _2A =  _2A_I ;   _2B =  _2B_I ;   _3A =  _3A_I ;   _3B =  _3B_I ;   _4A =  _4A_I ;   _4B =  _4B_I ;   SEL =  SEL_I ;let    SELBAR =  !SEL ;   SELBAR =  !SEL ;   Y1 =  (_1A & SELBAR) | (_1B & SEL) ;   Y2 =  (_2A & SELBAR) | (_2B & SEL) ;   Y3 =  (_3A & SELBAR) | (_3B & SEL) ;   Y4 =  (_4A & SELBAR) | (_4B & SEL) ;');
		Connect(this.UHC257LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC257LOG.pins._1A_I, this.pins._1A_I);
		Connect(this.UHC257LOG.pins._1B_I, this.pins._1B_I);
		Connect(this.UHC257LOG.pins._2A_I, this.pins._2A_I);
		Connect(this.UHC257LOG.pins._2B_I, this.pins._2B_I);
		Connect(this.UHC257LOG.pins._3A_I, this.pins._3A_I);
		Connect(this.UHC257LOG.pins._3B_I, this.pins._3B_I);
		Connect(this.UHC257LOG.pins._4A_I, this.pins._4A_I);
		Connect(this.UHC257LOG.pins._4B_I, this.pins._4B_I);
		Connect(this.UHC257LOG.pins.SEL_I, this.pins.SEL_I);
		let GBAR = new Pin();
		Connect(this.UHC257LOG.pins.GBAR, GBAR);
		let _1A = new Pin();
		Connect(this.UHC257LOG.pins._1A, _1A);
		let _1B = new Pin();
		Connect(this.UHC257LOG.pins._1B, _1B);
		let _2A = new Pin();
		Connect(this.UHC257LOG.pins._2A, _2A);
		let _2B = new Pin();
		Connect(this.UHC257LOG.pins._2B, _2B);
		let _3A = new Pin();
		Connect(this.UHC257LOG.pins._3A, _3A);
		let _3B = new Pin();
		Connect(this.UHC257LOG.pins._3B, _3B);
		let _4A = new Pin();
		Connect(this.UHC257LOG.pins._4A, _4A);
		let _4B = new Pin();
		Connect(this.UHC257LOG.pins._4B, _4B);
		let SEL = new Pin();
		Connect(this.UHC257LOG.pins.SEL, SEL);
		let Y1 = new Pin();
		Connect(this.UHC257LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC257LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC257LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC257LOG.pins.Y4, Y4);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
	}
}
/**
 * QUADRUPLE 2-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC258 extends Component {
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
		this.UHC258LOG = new logicexp(['GBAR_I','_1A_I','_1B_I','_2A_I','_2B_I','_3A_I','_3B_I','_4A_I','_4B_I','SEL_I'], ['GBAR','_1A','_1B','_2A','_2B','_3A','_3B','_4A','_4B','SEL','Y1','Y2','Y3','Y4'], []).Logic('   GBAR =  GBAR_I ;   _1A =  _1A_I ;   _1B =  _1B_I ;   _2A =  _2A_I ;   _2B =  _2B_I ;   _3A =  _3A_I ;   _3B =  _3B_I ;   _4A =  _4A_I ;   _4B =  _4B_I ;   SEL =  SEL_I ;let    SELBAR =  !SEL ;   SELBAR =  !SEL ;   Y1 =  !((_1A & SELBAR) | (_1B & SEL)) ;   Y2 =  !((_2A & SELBAR) | (_2B & SEL)) ;   Y3 =  !((_3A & SELBAR) | (_3B & SEL)) ;   Y4 =  !((_4A & SELBAR) | (_4B & SEL)) ;');
		Connect(this.UHC258LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC258LOG.pins._1A_I, this.pins._1A_I);
		Connect(this.UHC258LOG.pins._1B_I, this.pins._1B_I);
		Connect(this.UHC258LOG.pins._2A_I, this.pins._2A_I);
		Connect(this.UHC258LOG.pins._2B_I, this.pins._2B_I);
		Connect(this.UHC258LOG.pins._3A_I, this.pins._3A_I);
		Connect(this.UHC258LOG.pins._3B_I, this.pins._3B_I);
		Connect(this.UHC258LOG.pins._4A_I, this.pins._4A_I);
		Connect(this.UHC258LOG.pins._4B_I, this.pins._4B_I);
		Connect(this.UHC258LOG.pins.SEL_I, this.pins.SEL_I);
		let GBAR = new Pin();
		Connect(this.UHC258LOG.pins.GBAR, GBAR);
		let _1A = new Pin();
		Connect(this.UHC258LOG.pins._1A, _1A);
		let _1B = new Pin();
		Connect(this.UHC258LOG.pins._1B, _1B);
		let _2A = new Pin();
		Connect(this.UHC258LOG.pins._2A, _2A);
		let _2B = new Pin();
		Connect(this.UHC258LOG.pins._2B, _2B);
		let _3A = new Pin();
		Connect(this.UHC258LOG.pins._3A, _3A);
		let _3B = new Pin();
		Connect(this.UHC258LOG.pins._3B, _3B);
		let _4A = new Pin();
		Connect(this.UHC258LOG.pins._4A, _4A);
		let _4B = new Pin();
		Connect(this.UHC258LOG.pins._4B, _4B);
		let SEL = new Pin();
		Connect(this.UHC258LOG.pins.SEL, SEL);
		let Y1 = new Pin();
		Connect(this.UHC258LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC258LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC258LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC258LOG.pins.Y4, Y4);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
		Connect(Y3, this.pins.Y3_O);
		Connect(Y4, this.pins.Y4_O);
	}
}
/**
 * 8-BIT ADDRESSABLE LATCHES
 */
class SN74HC259 extends Component {
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
		Connect(this.U1.pins.IN0_0, this.pins.CLRBAR);
		Connect(this.U1.pins.IN1_0, this.pins.GBAR);
		Connect(this.U1.pins.IN2_0, this.pins.D);
		let RB = new Pin();
		Connect(this.U1.pins.OUT0, RB);
		let GB = new Pin();
		Connect(this.U1.pins.OUT1, GB);
		let DATA = new Pin();
		Connect(this.U1.pins.OUT2, DATA);
		this.U2 = new bufa(3);
		Connect(this.U2.pins.IN0_0, this.pins.S0);
		Connect(this.U2.pins.IN1_0, this.pins.S1);
		Connect(this.U2.pins.IN2_0, this.pins.S2);
		let SA = new Pin();
		Connect(this.U2.pins.OUT0, SA);
		let SB = new Pin();
		Connect(this.U2.pins.OUT1, SB);
		let SC = new Pin();
		Connect(this.U2.pins.OUT2, SC);
		this.U3 = new inva(3);
		Connect(this.U3.pins.IN0_0, SA);
		Connect(this.U3.pins.IN1_0, SB);
		Connect(this.U3.pins.IN2_0, SC);
		let AB = new Pin();
		Connect(this.U3.pins.OUT0, AB);
		let BB = new Pin();
		Connect(this.U3.pins.OUT1, BB);
		let CB = new Pin();
		Connect(this.U3.pins.OUT2, CB);
		this.U4 = new nanda(3,8);
		Connect(this.U4.pins.IN0_0, AB);
		Connect(this.U4.pins.IN0_1, BB);
		Connect(this.U4.pins.IN0_2, CB);
		Connect(this.U4.pins.IN1_0, SA);
		Connect(this.U4.pins.IN1_1, BB);
		Connect(this.U4.pins.IN1_2, CB);
		Connect(this.U4.pins.IN2_0, AB);
		Connect(this.U4.pins.IN2_1, SB);
		Connect(this.U4.pins.IN2_2, CB);
		Connect(this.U4.pins.IN3_0, SA);
		Connect(this.U4.pins.IN3_1, SB);
		Connect(this.U4.pins.IN3_2, CB);
		Connect(this.U4.pins.IN4_0, AB);
		Connect(this.U4.pins.IN4_1, BB);
		Connect(this.U4.pins.IN4_2, SC);
		Connect(this.U4.pins.IN5_0, SA);
		Connect(this.U4.pins.IN5_1, BB);
		Connect(this.U4.pins.IN5_2, SC);
		Connect(this.U4.pins.IN6_0, AB);
		Connect(this.U4.pins.IN6_1, SB);
		Connect(this.U4.pins.IN6_2, SC);
		Connect(this.U4.pins.IN7_0, SA);
		Connect(this.U4.pins.IN7_1, SB);
		Connect(this.U4.pins.IN7_2, SC);
		let T0 = new Pin();
		Connect(this.U4.pins.OUT0, T0);
		let T1 = new Pin();
		Connect(this.U4.pins.OUT1, T1);
		let T2 = new Pin();
		Connect(this.U4.pins.OUT2, T2);
		let T3 = new Pin();
		Connect(this.U4.pins.OUT3, T3);
		let T4 = new Pin();
		Connect(this.U4.pins.OUT4, T4);
		let T5 = new Pin();
		Connect(this.U4.pins.OUT5, T5);
		let T6 = new Pin();
		Connect(this.U4.pins.OUT6, T6);
		let T7 = new Pin();
		Connect(this.U4.pins.OUT7, T7);
		this.U5 = new nora(2,8);
		Connect(this.U5.pins.IN0_0, GB);
		Connect(this.U5.pins.IN0_1, T0);
		Connect(this.U5.pins.IN1_0, GB);
		Connect(this.U5.pins.IN1_1, T1);
		Connect(this.U5.pins.IN2_0, GB);
		Connect(this.U5.pins.IN2_1, T2);
		Connect(this.U5.pins.IN3_0, GB);
		Connect(this.U5.pins.IN3_1, T3);
		Connect(this.U5.pins.IN4_0, GB);
		Connect(this.U5.pins.IN4_1, T4);
		Connect(this.U5.pins.IN5_0, GB);
		Connect(this.U5.pins.IN5_1, T5);
		Connect(this.U5.pins.IN6_0, GB);
		Connect(this.U5.pins.IN6_1, T6);
		Connect(this.U5.pins.IN7_0, GB);
		Connect(this.U5.pins.IN7_1, T7);
		let G0 = new Pin();
		Connect(this.U5.pins.OUT0, G0);
		let G1 = new Pin();
		Connect(this.U5.pins.OUT1, G1);
		let G2 = new Pin();
		Connect(this.U5.pins.OUT2, G2);
		let G3 = new Pin();
		Connect(this.U5.pins.OUT3, G3);
		let G4 = new Pin();
		Connect(this.U5.pins.OUT4, G4);
		let G5 = new Pin();
		Connect(this.U5.pins.OUT5, G5);
		let G6 = new Pin();
		Connect(this.U5.pins.OUT6, G6);
		let G7 = new Pin();
		Connect(this.U5.pins.OUT7, G7);
		this.U6 = new ora(2,8);
		Connect(this.U6.pins.IN0_0, G0);
		Connect(this.U6.pins.IN0_1, RB);
		Connect(this.U6.pins.IN1_0, G1);
		Connect(this.U6.pins.IN1_1, RB);
		Connect(this.U6.pins.IN2_0, G2);
		Connect(this.U6.pins.IN2_1, RB);
		Connect(this.U6.pins.IN3_0, G3);
		Connect(this.U6.pins.IN3_1, RB);
		Connect(this.U6.pins.IN4_0, G4);
		Connect(this.U6.pins.IN4_1, RB);
		Connect(this.U6.pins.IN5_0, G5);
		Connect(this.U6.pins.IN5_1, RB);
		Connect(this.U6.pins.IN6_0, G6);
		Connect(this.U6.pins.IN6_1, RB);
		Connect(this.U6.pins.IN7_0, G7);
		Connect(this.U6.pins.IN7_1, RB);
		let R0 = new Pin();
		Connect(this.U6.pins.OUT0, R0);
		let R1 = new Pin();
		Connect(this.U6.pins.OUT1, R1);
		let R2 = new Pin();
		Connect(this.U6.pins.OUT2, R2);
		let R3 = new Pin();
		Connect(this.U6.pins.OUT3, R3);
		let R4 = new Pin();
		Connect(this.U6.pins.OUT4, R4);
		let R5 = new Pin();
		Connect(this.U6.pins.OUT5, R5);
		let R6 = new Pin();
		Connect(this.U6.pins.OUT6, R6);
		let R7 = new Pin();
		Connect(this.U6.pins.OUT7, R7);
		this.U7 = new dltch(1);
		Connect(this.U7.pins.PRESET, _D_HI);
		Connect(this.U7.pins.CLEAR, R0);
		Connect(this.U7.pins.GATE, G0);
		Connect(this.U7.pins.D0, DATA);
		Connect(this.U7.pins.Q0, this.pins.Q0);
		let _D_NC = new Pin();
		Connect(this.U7.pins.QBAR0, _D_NC);
		this.U8 = new dltch(1);
		Connect(this.U8.pins.PRESET, _D_HI);
		Connect(this.U8.pins.CLEAR, R1);
		Connect(this.U8.pins.GATE, G1);
		Connect(this.U8.pins.D0, DATA);
		Connect(this.U8.pins.Q0, this.pins.Q1);
		Connect(this.U8.pins.QBAR0, _D_NC);
		this.U9 = new dltch(1);
		Connect(this.U9.pins.PRESET, _D_HI);
		Connect(this.U9.pins.CLEAR, R2);
		Connect(this.U9.pins.GATE, G2);
		Connect(this.U9.pins.D0, DATA);
		Connect(this.U9.pins.Q0, this.pins.Q2);
		Connect(this.U9.pins.QBAR0, _D_NC);
		this.U10 = new dltch(1);
		Connect(this.U10.pins.PRESET, _D_HI);
		Connect(this.U10.pins.CLEAR, R3);
		Connect(this.U10.pins.GATE, G3);
		Connect(this.U10.pins.D0, DATA);
		Connect(this.U10.pins.Q0, this.pins.Q3);
		Connect(this.U10.pins.QBAR0, _D_NC);
		this.U11 = new dltch(1);
		Connect(this.U11.pins.PRESET, _D_HI);
		Connect(this.U11.pins.CLEAR, R4);
		Connect(this.U11.pins.GATE, G4);
		Connect(this.U11.pins.D0, DATA);
		Connect(this.U11.pins.Q0, this.pins.Q4);
		Connect(this.U11.pins.QBAR0, _D_NC);
		this.U12 = new dltch(1);
		Connect(this.U12.pins.PRESET, _D_HI);
		Connect(this.U12.pins.CLEAR, R5);
		Connect(this.U12.pins.GATE, G5);
		Connect(this.U12.pins.D0, DATA);
		Connect(this.U12.pins.Q0, this.pins.Q5);
		Connect(this.U12.pins.QBAR0, _D_NC);
		this.U13 = new dltch(1);
		Connect(this.U13.pins.PRESET, _D_HI);
		Connect(this.U13.pins.CLEAR, R6);
		Connect(this.U13.pins.GATE, G6);
		Connect(this.U13.pins.D0, DATA);
		Connect(this.U13.pins.Q0, this.pins.Q6);
		Connect(this.U13.pins.QBAR0, _D_NC);
		this.U14 = new dltch(1);
		Connect(this.U14.pins.PRESET, _D_HI);
		Connect(this.U14.pins.CLEAR, R7);
		Connect(this.U14.pins.GATE, G7);
		Connect(this.U14.pins.D0, DATA);
		Connect(this.U14.pins.Q0, this.pins.Q7);
		Connect(this.U14.pins.QBAR0, _D_NC);
	}
}
/**
 * QUADRUPLE 2-INPUT EXCLUSIVE-NOR GATES WITH OPEN-COLLECTOR OUTPUTS.
 */
class SN74HC266 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nxor();
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * OCTAL D-TYPE EDGE-TRIGGERED FLIP-FLOPS WITH CLEAR
 */
class SN74HC273 extends Component {
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
		let _D_NC = new Pin();
		Connect(this.UD.pins.QBAR0, _D_NC);
		Connect(this.UD.pins.QBAR1, _D_NC);
		Connect(this.UD.pins.QBAR2, _D_NC);
		Connect(this.UD.pins.QBAR3, _D_NC);
		Connect(this.UD.pins.QBAR4, _D_NC);
		Connect(this.UD.pins.QBAR5, _D_NC);
		Connect(this.UD.pins.QBAR6, _D_NC);
		Connect(this.UD.pins.QBAR7, _D_NC);
	}
}
/**
 * QUADRUPLE SBAR-RBAR LATCHES
 */
class SN74HC279 extends Component {
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
		Connect(this.U1.pins.IN0_0, this.pins._1RBAR);
		Connect(this.U1.pins.IN1_0, this.pins._2RBAR);
		let _1RB = new Pin();
		Connect(this.U1.pins.OUT0, _1RB);
		let _2RB = new Pin();
		Connect(this.U1.pins.OUT1, _2RB);
		this.U2 = new nanda(3,2);
		Connect(this.U2.pins.IN0_0, _1RB);
		let Q1 = new Pin();
		Connect(this.U2.pins.IN0_1, Q1);
		Connect(this.U2.pins.IN0_2, _D_HI);
		Connect(this.U2.pins.IN1_0, this.pins._1S1BAR);
		Connect(this.U2.pins.IN1_1, this.pins._1S2BAR);
		let Q1B = new Pin();
		Connect(this.U2.pins.IN1_2, Q1B);
		Connect(this.U2.pins.OUT0, Q1B);
		Connect(this.U2.pins.OUT1, Q1);
		this.U3 = new nanda(2,2);
		Connect(this.U3.pins.IN0_0, _2RB);
		let Q2 = new Pin();
		Connect(this.U3.pins.IN0_1, Q2);
		Connect(this.U3.pins.IN1_0, this.pins._2SBAR);
		let Q2B = new Pin();
		Connect(this.U3.pins.IN1_1, Q2B);
		Connect(this.U3.pins.OUT0, Q2B);
		Connect(this.U3.pins.OUT1, Q2);
		this.U4 = new wdthck(5);
		this.U5 = new ora(3,2);
		let _1RLO = new Pin();
		Connect(this.U5.pins.IN0_0, _1RLO);
		let _1S1LO = new Pin();
		Connect(this.U5.pins.IN0_1, _1S1LO);
		let _1S2LO = new Pin();
		Connect(this.U5.pins.IN0_2, _1S2LO);
		let _2RLO = new Pin();
		Connect(this.U5.pins.IN1_0, _2RLO);
		let _2SLO = new Pin();
		Connect(this.U5.pins.IN1_1, _2SLO);
		let _D_LO = new Pin();
		Connect(this.U5.pins.IN1_2, _D_LO);
		let X1 = new Pin();
		Connect(this.U5.pins.OUT0, X1);
		let X2 = new Pin();
		Connect(this.U5.pins.OUT1, X2);
		this.U6 = new inva(2);
		Connect(this.U6.pins.IN0_0, X1);
		Connect(this.U6.pins.IN1_0, X2);
		let T1 = new Pin();
		Connect(this.U6.pins.OUT0, T1);
		let T2 = new Pin();
		Connect(this.U6.pins.OUT1, T2);
		this.U7 = new buf3();
		let _D_X = new Pin();
		Connect(this.U7.pins.IN0, _D_X);
		Connect(this.U7.pins.EN, X1);
		Connect(this.U7.pins.OUT, this.pins._1Q);
		this.U8 = new buf3();
		Connect(this.U8.pins.IN0, _D_X);
		Connect(this.U8.pins.EN, X2);
		Connect(this.U8.pins.OUT, this.pins._2Q);
		this.U9 = new buf3();
		Connect(this.U9.pins.IN0, Q1);
		Connect(this.U9.pins.EN, T1);
		Connect(this.U9.pins.OUT, this.pins._1Q);
		this.U10 = new buf3();
		Connect(this.U10.pins.IN0, Q2);
		Connect(this.U10.pins.EN, T2);
		Connect(this.U10.pins.OUT, this.pins._2Q);
	}
}
/**
 * PARITY GENERATOR_CHECKER ODD_EVEN 9-BIT
 */
class SN74HC280 extends Component {
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
		this.UHC280LOG = new logicexp(['A_I','B_I','C_I','D_I','E_I','F_I','G_I','H_I','I_I'], ['EOUT','OOUT'], []).Logic('let    A    =  A_I ;   A    =  A_I ;let    B    =  B_I ;   B    =  B_I ;let    C    =  C_I ;   C    =  C_I ;let    D    =  D_I ;   D    =  D_I ;let    E    =  E_I ;   E    =  E_I ;let    F    =  F_I ;   F    =  F_I ;let    G    =  G_I ;   G    =  G_I ;let    H    =  H_I ;   H    =  H_I ;let    I    =  I_I ;   I    =  I_I ;let    ABC  =  (A & !B & !C) | (!A & B & !C) | (!A & !B & C) | (A & B & C) ;   ABC  =  (A & !B & !C) | (!A & B & !C) | (!A & !B & C) | (A & B & C) ;let    DEF  =  (D & !E & !F) | (!D & E & !F) | (!D & !E & F) | (D & E & F) ;   DEF  =  (D & !E & !F) | (!D & E & !F) | (!D & !E & F) | (D & E & F) ;let    GHI  =  (G & !H & !I) | (!G & H & !I) | (!G & !H & I) | (G & H & I) ;   GHI  =  (G & !H & !I) | (!G & H & !I) | (!G & !H & I) | (G & H & I) ;   EOUT =  (!ABC &  DEF &  GHI) | (ABC & !DEF & GHI) | (ABC & DEF & !GHI) |            (!ABC & !DEF & !GHI) ;   OOUT =  !EOUT ;');
		Connect(this.UHC280LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC280LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC280LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC280LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC280LOG.pins.E_I, this.pins.E_I);
		Connect(this.UHC280LOG.pins.F_I, this.pins.F_I);
		Connect(this.UHC280LOG.pins.G_I, this.pins.G_I);
		Connect(this.UHC280LOG.pins.H_I, this.pins.H_I);
		Connect(this.UHC280LOG.pins.I_I, this.pins.I_I);
		let EOUT = new Pin();
		Connect(this.UHC280LOG.pins.EOUT, EOUT);
		let OOUT = new Pin();
		Connect(this.UHC280LOG.pins.OOUT, OOUT);
		Connect(EOUT, this.pins.EOUT_O);
		Connect(OOUT, this.pins.OOUT_O);
	}
}
/**
 * 4-BIT BINARY FULL ADDERS WITH FAST CARRY
 */
class SN74HC283 extends Component {
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
		this.UHC283LOG = new logicexp(['C0_I','A1_I','A2_I','A3_I','A4_I','B1_I','B2_I','B3_I','B4_I'], ['C0','A1','A2','A3','A4','B1','B2','B3','B4','C4','SUM1','SUM2','SUM3','SUM4'], []).Logic('   C0 =  C0_I ;   A1 =  A1_I ;   A2 =  A2_I ;   A3 =  A3_I ;   A4 =  A4_I ;   B1 =  B1_I ;   B2 =  B2_I ;   B3 =  B3_I ;   B4 =  B4_I ;let    NAND4 =  !(A4 & B4) ;   NAND4 =  !(A4 & B4) ;let    NAND3 =  !(A3 & B3) ;   NAND3 =  !(A3 & B3) ;let    NAND2 =  !(A2 & B2) ;   NAND2 =  !(A2 & B2) ;let    NAND1 =  !(A1 & B1) ;   NAND1 =  !(A1 & B1) ;let    NOR4 =  !(A4 | B4) ;   NOR4 =  !(A4 | B4) ;let    NOR3 =  !(A3 | B3) ;   NOR3 =  !(A3 | B3) ;let    NOR2 =  !(A2 | B2) ;   NOR2 =  !(A2 | B2) ;let    NOR1 =  !(A1 | B1) ;   NOR1 =  !(A1 | B1) ;let    C0BAR =  !C0 ;   C0BAR =  !C0 ;   SUM1 =  (NAND1 & !NOR1) ^ C0 ;   SUM2 =  (NAND2 & !NOR2) ^ (!(NOR1 | (NAND1 & C0BAR))) ;   SUM3 =  (NAND3 & !NOR3) ^ (!(NOR2 | (NOR1 & NAND2) |            (NAND2 & NAND1 & C0BAR))) ;   SUM4 =  (NAND4 & !NOR4) ^ (!(NOR3 | (NOR2 & NAND3) |            (NOR1 & NAND3 & NAND2) | (NAND3 & NAND2 & NAND1 & C0BAR))) ;   C4 =  !( NOR4 | (NOR3 & NAND4) | (NOR2 & NAND4 & NAND3) |             (NOR1 & NAND4 & NAND3 & NAND2) |             (NAND4 & NAND3 & NAND2 & NAND1 & C0BAR) ) ;');
		Connect(this.UHC283LOG.pins.C0_I, this.pins.C0_I);
		Connect(this.UHC283LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.UHC283LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.UHC283LOG.pins.A3_I, this.pins.A3_I);
		Connect(this.UHC283LOG.pins.A4_I, this.pins.A4_I);
		Connect(this.UHC283LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.UHC283LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.UHC283LOG.pins.B3_I, this.pins.B3_I);
		Connect(this.UHC283LOG.pins.B4_I, this.pins.B4_I);
		let C0 = new Pin();
		Connect(this.UHC283LOG.pins.C0, C0);
		let A1 = new Pin();
		Connect(this.UHC283LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC283LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.UHC283LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.UHC283LOG.pins.A4, A4);
		let B1 = new Pin();
		Connect(this.UHC283LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.UHC283LOG.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.UHC283LOG.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.UHC283LOG.pins.B4, B4);
		let C4 = new Pin();
		Connect(this.UHC283LOG.pins.C4, C4);
		let SUM1 = new Pin();
		Connect(this.UHC283LOG.pins.SUM1, SUM1);
		let SUM2 = new Pin();
		Connect(this.UHC283LOG.pins.SUM2, SUM2);
		let SUM3 = new Pin();
		Connect(this.UHC283LOG.pins.SUM3, SUM3);
		let SUM4 = new Pin();
		Connect(this.UHC283LOG.pins.SUM4, SUM4);
		Connect(SUM1, this.pins.SUM1_O);
		Connect(SUM2, this.pins.SUM2_O);
		Connect(SUM3, this.pins.SUM3_O);
		Connect(SUM4, this.pins.SUM4_O);
		Connect(C4, this.pins.C4_O);
	}
}
/**
 * MULTIPLEXERS QUAD 2-INPUT WITH STORAGE
 */
class SN74HC298 extends Component {
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
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		let JA = new Pin();
		Connect(this.U1.pins.J0, JA);
		let JB = new Pin();
		Connect(this.U1.pins.J1, JB);
		let JC = new Pin();
		Connect(this.U1.pins.J2, JC);
		let JD = new Pin();
		Connect(this.U1.pins.J3, JD);
		let KA = new Pin();
		Connect(this.U1.pins.K0, KA);
		let KB = new Pin();
		Connect(this.U1.pins.K1, KB);
		let KC = new Pin();
		Connect(this.U1.pins.K2, KC);
		let KD = new Pin();
		Connect(this.U1.pins.K3, KD);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		this.UHC298LOG = new logicexp(['WS_I','CLK_I','A1_I','A2_I','B1_I','B2_I','C1_I','C2_I','D1_I','D2_I'], ['WS','CLK','A1','A2','B1','B2','C1','C2','D1','D2','JA','JB','JC','JD','KA','KB','KC','KD'], []).Logic('   WS =  WS_I ;   CLK =  CLK_I ;   A1 =  A1_I ;   A2 =  A2_I ;   B1 =  B1_I ;   B2 =  B2_I ;   C1 =  C1_I ;   C2 =  C2_I ;   D1 =  D1_I ;   D2 =  D2_I ;let    IWS =  !WS ;   IWS =  !WS ;   KA =  !((A1 & IWS) | (WS & A2)) ;   KB =  !((B1 & IWS) | (WS & B2)) ;   KC =  !((C1 & IWS) | (WS & C2)) ;   KD =  !((D1 & IWS) | (WS & D2)) ;   JA =  !KA ;   JB =  !KB ;   JC =  !KC ;   JD =  !KD ;');
		Connect(this.UHC298LOG.pins.WS_I, this.pins.WS_I);
		Connect(this.UHC298LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC298LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.UHC298LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.UHC298LOG.pins.B1_I, this.pins.B1_I);
		Connect(this.UHC298LOG.pins.B2_I, this.pins.B2_I);
		Connect(this.UHC298LOG.pins.C1_I, this.pins.C1_I);
		Connect(this.UHC298LOG.pins.C2_I, this.pins.C2_I);
		Connect(this.UHC298LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.UHC298LOG.pins.D2_I, this.pins.D2_I);
		let WS = new Pin();
		Connect(this.UHC298LOG.pins.WS, WS);
		Connect(this.UHC298LOG.pins.CLK, CLK);
		let A1 = new Pin();
		Connect(this.UHC298LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC298LOG.pins.A2, A2);
		let B1 = new Pin();
		Connect(this.UHC298LOG.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.UHC298LOG.pins.B2, B2);
		let C1 = new Pin();
		Connect(this.UHC298LOG.pins.C1, C1);
		let C2 = new Pin();
		Connect(this.UHC298LOG.pins.C2, C2);
		let D1 = new Pin();
		Connect(this.UHC298LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.UHC298LOG.pins.D2, D2);
		Connect(this.UHC298LOG.pins.JA, JA);
		Connect(this.UHC298LOG.pins.JB, JB);
		Connect(this.UHC298LOG.pins.JC, JC);
		Connect(this.UHC298LOG.pins.JD, JD);
		Connect(this.UHC298LOG.pins.KA, KA);
		Connect(this.UHC298LOG.pins.KB, KB);
		Connect(this.UHC298LOG.pins.KC, KC);
		Connect(this.UHC298LOG.pins.KD, KD);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * 8-BIT UNIVERSAL SHIFT_STORAGE REGISTERS
 */
class SN74HC299 extends Component {
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
		this.UHC299LOG = new logicexp(['CLK_I','CLRBAR_I','S1_I','S0_I','G1BAR_I','G2BAR_I','SL_I','SR_I','A_QA_B','B_QB_B','C_QC_B','D_QD_B','E_QE_B','F_QF_B','G_QG_B','H_QH_B','LA_QA','LB_QB','LC_QC','LD_QD','LE_QE','LF_QF','LG_QG','LH_QH','A_QA','B_QB','C_QC','D_QD','E_QE','F_QF','G_QG','H_QH'], ['CLK','CLRBAR','S1','S0','G1BAR','G2BAR','SL','SR','A_QA','B_QB','C_QC','D_QD','E_QE','F_QF','G_QG','H_QH','D1A','D1B','D1C','D1D','D1E','D1F','D1G','D1H','OE'], []).Logic('   CLK      =  CLK_I ;   CLRBAR   =  CLRBAR_I ;   S1       =  S1_I ;   S0       =  S0_I ;   G1BAR    =  G1BAR_I ;   G2BAR    =  G2BAR_I ;   SL       =  SL_I ;   SR       =  SR_I ;   A_QA     =  A_QA_B ;   B_QB     =  B_QB_B ;   C_QC     =  C_QC_B ;   D_QD     =  D_QD_B ;   E_QE     =  E_QE_B ;   F_QF     =  F_QF_B ;   G_QG     =  G_QG_B ;   H_QH     =  H_QH_B ;let    S0S1   =  S0  & S1 ;   S0S1   =  S0  & S1 ;let    S0_S1  =  S0  & !S1 ;   S0_S1  =  S0  & !S1 ;let    _S0S1  =  !S0 & S1 ;   _S0S1  =  !S0 & S1 ;let    _S0_S1 =  !S0 & !S1 ;   _S0_S1 =  !S0 & !S1 ;   D1A =  (S0_S1 & SR )   | (_S0S1 & LB_QB)  |           (S0S1 & A_QA)   | (_S0_S1 & LA_QA) ;   D1B =  (S0_S1 & LA_QA) | (_S0S1 & LC_QC)  |           (S0S1 & B_QB)   | (_S0_S1 & LB_QB) ;   D1C =  (S0_S1 & LB_QB) | (_S0S1 & LD_QD)  |           (S0S1 & C_QC)   | (_S0_S1 & LC_QC) ;   D1D =  (S0_S1 & LC_QC) | (_S0S1 & LE_QE)  |           (S0S1 & D_QD)   | (_S0_S1 & LD_QD) ;   D1E =  (S0_S1 & LD_QD) | (_S0S1 & LF_QF)  |           (S0S1 & E_QE)   | (_S0_S1 & LE_QE) ;   D1F =  (S0_S1 & LE_QE) | (_S0S1 & LG_QG)  |           (S0S1 & F_QF)   | (_S0_S1 & LF_QF) ;   D1G =  (S0_S1 & LF_QF) | (_S0S1 & LH_QH)  |           (S0S1 & G_QG)   | (_S0_S1 & LG_QG) ;   D1H =  (S0_S1 & LG_QG) | (_S0S1 & SL )    |           (S0S1 & H_QH)   | (_S0_S1 & LH_QH) ;   OE  =  G1BAR | G2BAR | (S1 & S0) ;');
		Connect(this.UHC299LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC299LOG.pins.CLRBAR_I, this.pins.CLRBAR_I);
		Connect(this.UHC299LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.UHC299LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.UHC299LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC299LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC299LOG.pins.SL_I, this.pins.SL_I);
		Connect(this.UHC299LOG.pins.SR_I, this.pins.SR_I);
		Connect(this.UHC299LOG.pins.A_QA_B, this.pins.A_QA_B);
		Connect(this.UHC299LOG.pins.B_QB_B, this.pins.B_QB_B);
		Connect(this.UHC299LOG.pins.C_QC_B, this.pins.C_QC_B);
		Connect(this.UHC299LOG.pins.D_QD_B, this.pins.D_QD_B);
		Connect(this.UHC299LOG.pins.E_QE_B, this.pins.E_QE_B);
		Connect(this.UHC299LOG.pins.F_QF_B, this.pins.F_QF_B);
		Connect(this.UHC299LOG.pins.G_QG_B, this.pins.G_QG_B);
		Connect(this.UHC299LOG.pins.H_QH_B, this.pins.H_QH_B);
		let LA_QA = new Pin();
		Connect(this.UHC299LOG.pins.LA_QA, LA_QA);
		let LB_QB = new Pin();
		Connect(this.UHC299LOG.pins.LB_QB, LB_QB);
		let LC_QC = new Pin();
		Connect(this.UHC299LOG.pins.LC_QC, LC_QC);
		let LD_QD = new Pin();
		Connect(this.UHC299LOG.pins.LD_QD, LD_QD);
		let LE_QE = new Pin();
		Connect(this.UHC299LOG.pins.LE_QE, LE_QE);
		let LF_QF = new Pin();
		Connect(this.UHC299LOG.pins.LF_QF, LF_QF);
		let LG_QG = new Pin();
		Connect(this.UHC299LOG.pins.LG_QG, LG_QG);
		let LH_QH = new Pin();
		Connect(this.UHC299LOG.pins.LH_QH, LH_QH);
		let A_QA = new Pin();
		Connect(this.UHC299LOG.pins.A_QA, A_QA);
		let B_QB = new Pin();
		Connect(this.UHC299LOG.pins.B_QB, B_QB);
		let C_QC = new Pin();
		Connect(this.UHC299LOG.pins.C_QC, C_QC);
		let D_QD = new Pin();
		Connect(this.UHC299LOG.pins.D_QD, D_QD);
		let E_QE = new Pin();
		Connect(this.UHC299LOG.pins.E_QE, E_QE);
		let F_QF = new Pin();
		Connect(this.UHC299LOG.pins.F_QF, F_QF);
		let G_QG = new Pin();
		Connect(this.UHC299LOG.pins.G_QG, G_QG);
		let H_QH = new Pin();
		Connect(this.UHC299LOG.pins.H_QH, H_QH);
		let CLK = new Pin();
		Connect(this.UHC299LOG.pins.CLK, CLK);
		let CLRBAR = new Pin();
		Connect(this.UHC299LOG.pins.CLRBAR, CLRBAR);
		let S1 = new Pin();
		Connect(this.UHC299LOG.pins.S1, S1);
		let S0 = new Pin();
		Connect(this.UHC299LOG.pins.S0, S0);
		let G1BAR = new Pin();
		Connect(this.UHC299LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.UHC299LOG.pins.G2BAR, G2BAR);
		let SL = new Pin();
		Connect(this.UHC299LOG.pins.SL, SL);
		let SR = new Pin();
		Connect(this.UHC299LOG.pins.SR, SR);
		let D1A = new Pin();
		Connect(this.UHC299LOG.pins.D1A, D1A);
		let D1B = new Pin();
		Connect(this.UHC299LOG.pins.D1B, D1B);
		let D1C = new Pin();
		Connect(this.UHC299LOG.pins.D1C, D1C);
		let D1D = new Pin();
		Connect(this.UHC299LOG.pins.D1D, D1D);
		let D1E = new Pin();
		Connect(this.UHC299LOG.pins.D1E, D1E);
		let D1F = new Pin();
		Connect(this.UHC299LOG.pins.D1F, D1F);
		let D1G = new Pin();
		Connect(this.UHC299LOG.pins.D1G, D1G);
		let D1H = new Pin();
		Connect(this.UHC299LOG.pins.D1H, D1H);
		let OE = new Pin();
		Connect(this.UHC299LOG.pins.OE, OE);
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
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(this.U1.pins.QBAR4, _D_NC);
		Connect(this.U1.pins.QBAR5, _D_NC);
		Connect(this.U1.pins.QBAR6, _D_NC);
		Connect(this.U1.pins.QBAR7, _D_NC);
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
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC352 extends Component {
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
		this.UHC352LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','_1C0_I','_1C1_I','_1C2_I','_1C3_I','_2C0_I','_2C1_I','_2C2_I','_2C3_I'], ['G1BAR','G2BAR','A','B','_1C0','_1C1','_1C2','_1C3','_2C0','_2C1','_2C2','_2C3','Y1','Y2'], []).Logic('   G1BAR =  G1BAR_I ;   G2BAR =  G2BAR_I ;   A =  A_I ;   B =  B_I ;   _1C0 =  _1C0_I ;   _1C1 =  _1C1_I ;   _1C2 =  _1C2_I ;   _1C3 =  _1C3_I ;   _2C0 =  _2C0_I ;   _2C1 =  _2C1_I ;   _2C2 =  _2C2_I ;   _2C3 =  _2C3_I ;let    G1 =  !G1BAR ;   G1 =  !G1BAR ;let    G2 =  !G2BAR ;   G2 =  !G2BAR ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    I0 =  G1 & BBAR & ABAR & _1C0 ;   I0 =  G1 & BBAR & ABAR & _1C0 ;let    I1 =  G1 & BBAR & A    & _1C1 ;   I1 =  G1 & BBAR & A    & _1C1 ;let    I2 =  G1 & B    & ABAR & _1C2 ;   I2 =  G1 & B    & ABAR & _1C2 ;let    I3 =  G1 & B    & A    & _1C3 ;   I3 =  G1 & B    & A    & _1C3 ;let    I4 =  G2 & BBAR & ABAR & _2C0 ;   I4 =  G2 & BBAR & ABAR & _2C0 ;let    I5 =  G2 & BBAR & A    & _2C1 ;   I5 =  G2 & BBAR & A    & _2C1 ;let    I6 =  G2 & B    & ABAR & _2C2 ;   I6 =  G2 & B    & ABAR & _2C2 ;let    I7 =  G2 & B    & A    & _2C3 ;   I7 =  G2 & B    & A    & _2C3 ;   Y1 =  !(I0 | I1 | I2 | I3) ;   Y2 =  !(I4 | I5 | I6 | I7) ;');
		Connect(this.UHC352LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC352LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC352LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC352LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC352LOG.pins._1C0_I, this.pins._1C0_I);
		Connect(this.UHC352LOG.pins._1C1_I, this.pins._1C1_I);
		Connect(this.UHC352LOG.pins._1C2_I, this.pins._1C2_I);
		Connect(this.UHC352LOG.pins._1C3_I, this.pins._1C3_I);
		Connect(this.UHC352LOG.pins._2C0_I, this.pins._2C0_I);
		Connect(this.UHC352LOG.pins._2C1_I, this.pins._2C1_I);
		Connect(this.UHC352LOG.pins._2C2_I, this.pins._2C2_I);
		Connect(this.UHC352LOG.pins._2C3_I, this.pins._2C3_I);
		let G1BAR = new Pin();
		Connect(this.UHC352LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.UHC352LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.UHC352LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC352LOG.pins.B, B);
		let _1C0 = new Pin();
		Connect(this.UHC352LOG.pins._1C0, _1C0);
		let _1C1 = new Pin();
		Connect(this.UHC352LOG.pins._1C1, _1C1);
		let _1C2 = new Pin();
		Connect(this.UHC352LOG.pins._1C2, _1C2);
		let _1C3 = new Pin();
		Connect(this.UHC352LOG.pins._1C3, _1C3);
		let _2C0 = new Pin();
		Connect(this.UHC352LOG.pins._2C0, _2C0);
		let _2C1 = new Pin();
		Connect(this.UHC352LOG.pins._2C1, _2C1);
		let _2C2 = new Pin();
		Connect(this.UHC352LOG.pins._2C2, _2C2);
		let _2C3 = new Pin();
		Connect(this.UHC352LOG.pins._2C3, _2C3);
		let Y1 = new Pin();
		Connect(this.UHC352LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC352LOG.pins.Y2, Y2);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
	}
}
/**
 * DUAL 1-OF-4 DATA SELECTORS_MULTIPLEXERS WITH 3-STATE OUTPUTS
 */
class SN74HC353 extends Component {
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
		this.UHC353LOG = new logicexp(['G1BAR_I','G2BAR_I','A_I','B_I','_1C0_I','_1C1_I','_1C2_I','_1C3_I','_2C0_I','_2C1_I','_2C2_I','_2C3_I'], ['G1BAR','G2BAR','A','B','_1C0','_1C1','_1C2','_1C3','_2C0','_2C1','_2C2','_2C3','Y1','Y2'], []).Logic('   G1BAR =  G1BAR_I ;   G2BAR =  G2BAR_I ;   A =  A_I ;   B =  B_I ;   _1C0 =  _1C0_I ;   _1C1 =  _1C1_I ;   _1C2 =  _1C2_I ;   _1C3 =  _1C3_I ;   _2C0 =  _2C0_I ;   _2C1 =  _2C1_I ;   _2C2 =  _2C2_I ;   _2C3 =  _2C3_I ;let    G1 =  !G1BAR ;   G1 =  !G1BAR ;let    G2 =  !G2BAR ;   G2 =  !G2BAR ;let    ABAR =  !A ;   ABAR =  !A ;let    BBAR =  !B ;   BBAR =  !B ;let    I0 =  G1 & BBAR & ABAR & _1C0 ;   I0 =  G1 & BBAR & ABAR & _1C0 ;let    I1 =  G1 & BBAR & A    & _1C1 ;   I1 =  G1 & BBAR & A    & _1C1 ;let    I2 =  G1 & B    & ABAR & _1C2 ;   I2 =  G1 & B    & ABAR & _1C2 ;let    I3 =  G1 & B    & A    & _1C3 ;   I3 =  G1 & B    & A    & _1C3 ;let    I4 =  G2 & BBAR & ABAR & _2C0 ;   I4 =  G2 & BBAR & ABAR & _2C0 ;let    I5 =  G2 & BBAR & A    & _2C1 ;   I5 =  G2 & BBAR & A    & _2C1 ;let    I6 =  G2 & B    & ABAR & _2C2 ;   I6 =  G2 & B    & ABAR & _2C2 ;let    I7 =  G2 & B    & A    & _2C3 ;   I7 =  G2 & B    & A    & _2C3 ;   Y1 =  !(I0 | I1 | I2 | I3) ;   Y2 =  !(I4 | I5 | I6 | I7) ;');
		Connect(this.UHC353LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC353LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC353LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC353LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC353LOG.pins._1C0_I, this.pins._1C0_I);
		Connect(this.UHC353LOG.pins._1C1_I, this.pins._1C1_I);
		Connect(this.UHC353LOG.pins._1C2_I, this.pins._1C2_I);
		Connect(this.UHC353LOG.pins._1C3_I, this.pins._1C3_I);
		Connect(this.UHC353LOG.pins._2C0_I, this.pins._2C0_I);
		Connect(this.UHC353LOG.pins._2C1_I, this.pins._2C1_I);
		Connect(this.UHC353LOG.pins._2C2_I, this.pins._2C2_I);
		Connect(this.UHC353LOG.pins._2C3_I, this.pins._2C3_I);
		let G1BAR = new Pin();
		Connect(this.UHC353LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.UHC353LOG.pins.G2BAR, G2BAR);
		let A = new Pin();
		Connect(this.UHC353LOG.pins.A, A);
		let B = new Pin();
		Connect(this.UHC353LOG.pins.B, B);
		let _1C0 = new Pin();
		Connect(this.UHC353LOG.pins._1C0, _1C0);
		let _1C1 = new Pin();
		Connect(this.UHC353LOG.pins._1C1, _1C1);
		let _1C2 = new Pin();
		Connect(this.UHC353LOG.pins._1C2, _1C2);
		let _1C3 = new Pin();
		Connect(this.UHC353LOG.pins._1C3, _1C3);
		let _2C0 = new Pin();
		Connect(this.UHC353LOG.pins._2C0, _2C0);
		let _2C1 = new Pin();
		Connect(this.UHC353LOG.pins._2C1, _2C1);
		let _2C2 = new Pin();
		Connect(this.UHC353LOG.pins._2C2, _2C2);
		let _2C3 = new Pin();
		Connect(this.UHC353LOG.pins._2C3, _2C3);
		let Y1 = new Pin();
		Connect(this.UHC353LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC353LOG.pins.Y2, Y2);
		Connect(Y1, this.pins.Y1_O);
		Connect(Y2, this.pins.Y2_O);
	}
}
/**
 * 4-LINE TO 1-LINE LINE DATA SELECTORS_MULTIPLEXERS_REGISTERS
 */
class SN74HC354 extends Component {
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
		this.UHC354LOG = new logicexp(['G1BAR_I','G2BAR_I','G3_I','SCBAR_I','S0_I','S1_I','S2_I','DCBAR_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I','QS2','QS2BAR','QS1','QS1BAR','QS0','QS0BAR','Q0','Q1','Q2','Q3','Q4','Q5','Q6','Q7'], ['G1BAR','G2BAR','G3','SCBAR','S0','S1','S2','DCBAR','D0','D1','D2','D3','D4','D5','D6','D7','Y','W','ENABLE13','DC','SC'], []).Logic('   D0     =  D0_I ;   D1     =  D1_I ;   D2     =  D2_I ;   D3     =  D3_I ;   D4     =  D4_I ;   D5     =  D5_I ;   D6     =  D6_I ;   D7     =  D7_I ;   G1BAR  =  G1BAR_I ;   G2BAR  =  G2BAR_I ;   G3     =  G3_I ;   SCBAR  =  SCBAR_I ;   SC     =  !SCBAR ;   S0     =  S0_I ;   S1     =  S1_I ;   S2     =  S2_I ;   DCBAR  =  DCBAR_I ;   DC     =  !DCBAR ;   ENABLE13 =  !G1BAR & !G2BAR & G3 ;   Y      =  (QS2BAR & QS1BAR & QS0BAR & Q0) |              (QS2BAR & QS1BAR & QS0    & Q1) |              (QS2BAR & QS1    & QS0BAR & Q2) |              (QS2BAR & QS1    & QS0    & Q3) |              (QS2    & QS1BAR & QS0BAR & Q4) |              (QS2    & QS1BAR & QS0    & Q5) |              (QS2    & QS1    & QS0BAR & Q6) |              (QS2    & QS1    & QS0    & Q7) ;   W      =  !Y ;');
		Connect(this.UHC354LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC354LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC354LOG.pins.G3_I, this.pins.G3_I);
		Connect(this.UHC354LOG.pins.SCBAR_I, this.pins.SCBAR_I);
		Connect(this.UHC354LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.UHC354LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.UHC354LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.UHC354LOG.pins.DCBAR_I, this.pins.DCBAR_I);
		Connect(this.UHC354LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.UHC354LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.UHC354LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.UHC354LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.UHC354LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.UHC354LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.UHC354LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.UHC354LOG.pins.D7_I, this.pins.D7_I);
		let QS2 = new Pin();
		Connect(this.UHC354LOG.pins.QS2, QS2);
		let QS2BAR = new Pin();
		Connect(this.UHC354LOG.pins.QS2BAR, QS2BAR);
		let QS1 = new Pin();
		Connect(this.UHC354LOG.pins.QS1, QS1);
		let QS1BAR = new Pin();
		Connect(this.UHC354LOG.pins.QS1BAR, QS1BAR);
		let QS0 = new Pin();
		Connect(this.UHC354LOG.pins.QS0, QS0);
		let QS0BAR = new Pin();
		Connect(this.UHC354LOG.pins.QS0BAR, QS0BAR);
		let Q0 = new Pin();
		Connect(this.UHC354LOG.pins.Q0, Q0);
		let Q1 = new Pin();
		Connect(this.UHC354LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.UHC354LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.UHC354LOG.pins.Q3, Q3);
		let Q4 = new Pin();
		Connect(this.UHC354LOG.pins.Q4, Q4);
		let Q5 = new Pin();
		Connect(this.UHC354LOG.pins.Q5, Q5);
		let Q6 = new Pin();
		Connect(this.UHC354LOG.pins.Q6, Q6);
		let Q7 = new Pin();
		Connect(this.UHC354LOG.pins.Q7, Q7);
		let G1BAR = new Pin();
		Connect(this.UHC354LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.UHC354LOG.pins.G2BAR, G2BAR);
		let G3 = new Pin();
		Connect(this.UHC354LOG.pins.G3, G3);
		let SCBAR = new Pin();
		Connect(this.UHC354LOG.pins.SCBAR, SCBAR);
		let S0 = new Pin();
		Connect(this.UHC354LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.UHC354LOG.pins.S1, S1);
		let S2 = new Pin();
		Connect(this.UHC354LOG.pins.S2, S2);
		let DCBAR = new Pin();
		Connect(this.UHC354LOG.pins.DCBAR, DCBAR);
		let D0 = new Pin();
		Connect(this.UHC354LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.UHC354LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.UHC354LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.UHC354LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.UHC354LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.UHC354LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.UHC354LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.UHC354LOG.pins.D7, D7);
		let Y = new Pin();
		Connect(this.UHC354LOG.pins.Y, Y);
		let W = new Pin();
		Connect(this.UHC354LOG.pins.W, W);
		let ENABLE13 = new Pin();
		Connect(this.UHC354LOG.pins.ENABLE13, ENABLE13);
		let DC = new Pin();
		Connect(this.UHC354LOG.pins.DC, DC);
		let SC = new Pin();
		Connect(this.UHC354LOG.pins.SC, SC);
		this.U1 = new dltch(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.GATE, DC);
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
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(this.U1.pins.QBAR4, _D_NC);
		Connect(this.U1.pins.QBAR5, _D_NC);
		Connect(this.U1.pins.QBAR6, _D_NC);
		Connect(this.U1.pins.QBAR7, _D_NC);
		this.U2 = new dltch(3);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		Connect(this.U2.pins.GATE, SC);
		Connect(this.U2.pins.D0, S0);
		Connect(this.U2.pins.D1, S1);
		Connect(this.U2.pins.D2, S2);
		Connect(this.U2.pins.Q0, QS0);
		Connect(this.U2.pins.Q1, QS1);
		Connect(this.U2.pins.Q2, QS2);
		Connect(this.U2.pins.QBAR0, QS0BAR);
		Connect(this.U2.pins.QBAR1, QS1BAR);
		Connect(this.U2.pins.QBAR2, QS2BAR);
		Connect(Y, this.pins.Y_O);
		Connect(W, this.pins.W_O);
	}
}
/**
 * 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS_REGISTERS
 */
class SN74HC356 extends Component {
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
		this.UHC356LOG = new logicexp(['G1BAR_I','G2BAR_I','G3_I','SCBAR_I','S0_I','S1_I','S2_I','CLK_I','D0_I','D1_I','D2_I','D3_I','D4_I','D5_I','D6_I','D7_I','QS2','QS2BAR','QS1','QS1BAR','QS0','QS0BAR','Q0','Q1','Q2','Q3','Q4','Q5','Q6','Q7'], ['G1BAR','G2BAR','G3','SCBAR','S0','S1','S2','CLK','D0','D1','D2','D3','D4','D5','D6','D7','Y','W','ENABLE13','SC'], []).Logic('   D0     =  D0_I ;   D1     =  D1_I ;   D2     =  D2_I ;   D3     =  D3_I ;   D4     =  D4_I ;   D5     =  D5_I ;   D6     =  D6_I ;   D7     =  D7_I ;   G1BAR  =  G1BAR_I ;   G2BAR  =  G2BAR_I ;   G3     =  G3_I ;   SCBAR  =  SCBAR_I ;   SC     =  !SCBAR ;   S0     =  S0_I ;   S1     =  S1_I ;   S2     =  S2_I ;   CLK  =  CLK_I ;   ENABLE13 =  !G1BAR & !G2BAR & G3 ;   Y      =  (QS2BAR & QS1BAR & QS0BAR & Q0) |              (QS2BAR & QS1BAR & QS0    & Q1) |              (QS2BAR & QS1    & QS0BAR & Q2) |              (QS2BAR & QS1    & QS0    & Q3) |              (QS2    & QS1BAR & QS0BAR & Q4) |              (QS2    & QS1BAR & QS0    & Q5) |              (QS2    & QS1    & QS0BAR & Q6) |              (QS2    & QS1    & QS0    & Q7) ;   W      =  !Y ;');
		Connect(this.UHC356LOG.pins.G1BAR_I, this.pins.G1BAR_I);
		Connect(this.UHC356LOG.pins.G2BAR_I, this.pins.G2BAR_I);
		Connect(this.UHC356LOG.pins.G3_I, this.pins.G3_I);
		Connect(this.UHC356LOG.pins.SCBAR_I, this.pins.SCBAR_I);
		Connect(this.UHC356LOG.pins.S0_I, this.pins.S0_I);
		Connect(this.UHC356LOG.pins.S1_I, this.pins.S1_I);
		Connect(this.UHC356LOG.pins.S2_I, this.pins.S2_I);
		Connect(this.UHC356LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC356LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.UHC356LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.UHC356LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.UHC356LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.UHC356LOG.pins.D4_I, this.pins.D4_I);
		Connect(this.UHC356LOG.pins.D5_I, this.pins.D5_I);
		Connect(this.UHC356LOG.pins.D6_I, this.pins.D6_I);
		Connect(this.UHC356LOG.pins.D7_I, this.pins.D7_I);
		let QS2 = new Pin();
		Connect(this.UHC356LOG.pins.QS2, QS2);
		let QS2BAR = new Pin();
		Connect(this.UHC356LOG.pins.QS2BAR, QS2BAR);
		let QS1 = new Pin();
		Connect(this.UHC356LOG.pins.QS1, QS1);
		let QS1BAR = new Pin();
		Connect(this.UHC356LOG.pins.QS1BAR, QS1BAR);
		let QS0 = new Pin();
		Connect(this.UHC356LOG.pins.QS0, QS0);
		let QS0BAR = new Pin();
		Connect(this.UHC356LOG.pins.QS0BAR, QS0BAR);
		let Q0 = new Pin();
		Connect(this.UHC356LOG.pins.Q0, Q0);
		let Q1 = new Pin();
		Connect(this.UHC356LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.UHC356LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.UHC356LOG.pins.Q3, Q3);
		let Q4 = new Pin();
		Connect(this.UHC356LOG.pins.Q4, Q4);
		let Q5 = new Pin();
		Connect(this.UHC356LOG.pins.Q5, Q5);
		let Q6 = new Pin();
		Connect(this.UHC356LOG.pins.Q6, Q6);
		let Q7 = new Pin();
		Connect(this.UHC356LOG.pins.Q7, Q7);
		let G1BAR = new Pin();
		Connect(this.UHC356LOG.pins.G1BAR, G1BAR);
		let G2BAR = new Pin();
		Connect(this.UHC356LOG.pins.G2BAR, G2BAR);
		let G3 = new Pin();
		Connect(this.UHC356LOG.pins.G3, G3);
		let SCBAR = new Pin();
		Connect(this.UHC356LOG.pins.SCBAR, SCBAR);
		let S0 = new Pin();
		Connect(this.UHC356LOG.pins.S0, S0);
		let S1 = new Pin();
		Connect(this.UHC356LOG.pins.S1, S1);
		let S2 = new Pin();
		Connect(this.UHC356LOG.pins.S2, S2);
		let CLK = new Pin();
		Connect(this.UHC356LOG.pins.CLK, CLK);
		let D0 = new Pin();
		Connect(this.UHC356LOG.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.UHC356LOG.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.UHC356LOG.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.UHC356LOG.pins.D3, D3);
		let D4 = new Pin();
		Connect(this.UHC356LOG.pins.D4, D4);
		let D5 = new Pin();
		Connect(this.UHC356LOG.pins.D5, D5);
		let D6 = new Pin();
		Connect(this.UHC356LOG.pins.D6, D6);
		let D7 = new Pin();
		Connect(this.UHC356LOG.pins.D7, D7);
		let Y = new Pin();
		Connect(this.UHC356LOG.pins.Y, Y);
		let W = new Pin();
		Connect(this.UHC356LOG.pins.W, W);
		let ENABLE13 = new Pin();
		Connect(this.UHC356LOG.pins.ENABLE13, ENABLE13);
		let SC = new Pin();
		Connect(this.UHC356LOG.pins.SC, SC);
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
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(this.U1.pins.QBAR4, _D_NC);
		Connect(this.U1.pins.QBAR5, _D_NC);
		Connect(this.U1.pins.QBAR6, _D_NC);
		Connect(this.U1.pins.QBAR7, _D_NC);
		this.U2 = new dltch(3);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, _D_HI);
		Connect(this.U2.pins.GATE, SC);
		Connect(this.U2.pins.D0, S0);
		Connect(this.U2.pins.D1, S1);
		Connect(this.U2.pins.D2, S2);
		Connect(this.U2.pins.Q0, QS0);
		Connect(this.U2.pins.Q1, QS1);
		Connect(this.U2.pins.Q2, QS2);
		Connect(this.U2.pins.QBAR0, QS0BAR);
		Connect(this.U2.pins.QBAR1, QS1BAR);
		Connect(this.U2.pins.QBAR2, QS2BAR);
		Connect(Y, this.pins.Y_O);
		Connect(W, this.pins.W_O);
	}
}
/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74HC365 extends Component {
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
		Connect(this.UA.pins.IN0, this.pins.G1BAR);
		Connect(this.UA.pins.IN1, this.pins.G2BAR);
		let E = new Pin();
		Connect(this.UA.pins.OUT, E);
		this.U1 = new buf3a(6);
		Connect(this.U1.pins.IN0_0, this.pins.A1);
		Connect(this.U1.pins.IN1_0, this.pins.A2);
		Connect(this.U1.pins.IN2_0, this.pins.A3);
		Connect(this.U1.pins.IN3_0, this.pins.A4);
		Connect(this.U1.pins.IN4_0, this.pins.A5);
		Connect(this.U1.pins.IN5_0, this.pins.A6);
		Connect(this.U1.pins.EN, E);
		Connect(this.U1.pins.OUT0, this.pins.Y1);
		Connect(this.U1.pins.OUT1, this.pins.Y2);
		Connect(this.U1.pins.OUT2, this.pins.Y3);
		Connect(this.U1.pins.OUT3, this.pins.Y4);
		Connect(this.U1.pins.OUT4, this.pins.Y5);
		Connect(this.U1.pins.OUT5, this.pins.Y6);
	}
}
/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74HC366 extends Component {
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
		Connect(this.UA.pins.IN0, this.pins.G1BAR);
		Connect(this.UA.pins.IN1, this.pins.G2BAR);
		let E = new Pin();
		Connect(this.UA.pins.OUT, E);
		this.U1 = new inv3a(6);
		Connect(this.U1.pins.IN0_0, this.pins.A1);
		Connect(this.U1.pins.IN1_0, this.pins.A2);
		Connect(this.U1.pins.IN2_0, this.pins.A3);
		Connect(this.U1.pins.IN3_0, this.pins.A4);
		Connect(this.U1.pins.IN4_0, this.pins.A5);
		Connect(this.U1.pins.IN5_0, this.pins.A6);
		Connect(this.U1.pins.EN, E);
		Connect(this.U1.pins.OUT0, this.pins.Y1);
		Connect(this.U1.pins.OUT1, this.pins.Y2);
		Connect(this.U1.pins.OUT2, this.pins.Y3);
		Connect(this.U1.pins.OUT3, this.pins.Y4);
		Connect(this.U1.pins.OUT4, this.pins.Y5);
		Connect(this.U1.pins.OUT5, this.pins.Y6);
	}
}
/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74HC367 extends Component {
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
		Connect(this.UINV.pins.IN0_0, this.pins.G1BAR);
		Connect(this.UINV.pins.IN1_0, this.pins.G2BAR);
		let G1 = new Pin();
		Connect(this.UINV.pins.OUT0, G1);
		let G2 = new Pin();
		Connect(this.UINV.pins.OUT1, G2);
		this.U1 = new buf3a(4);
		Connect(this.U1.pins.IN0_0, this.pins._1A1);
		Connect(this.U1.pins.IN1_0, this.pins._1A2);
		Connect(this.U1.pins.IN2_0, this.pins._1A3);
		Connect(this.U1.pins.IN3_0, this.pins._1A4);
		Connect(this.U1.pins.EN, G1);
		Connect(this.U1.pins.OUT0, this.pins._1Y1);
		Connect(this.U1.pins.OUT1, this.pins._1Y2);
		Connect(this.U1.pins.OUT2, this.pins._1Y3);
		Connect(this.U1.pins.OUT3, this.pins._1Y4);
		this.U2 = new buf3a(2);
		Connect(this.U2.pins.IN0_0, this.pins._2A1);
		Connect(this.U2.pins.IN1_0, this.pins._2A2);
		Connect(this.U2.pins.EN, G2);
		Connect(this.U2.pins.OUT0, this.pins._2Y1);
		Connect(this.U2.pins.OUT1, this.pins._2Y2);
	}
}
/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74HC368 extends Component {
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
		Connect(this.UINV.pins.IN0_0, this.pins.G1BAR);
		Connect(this.UINV.pins.IN1_0, this.pins.G2BAR);
		let G1 = new Pin();
		Connect(this.UINV.pins.OUT0, G1);
		let G2 = new Pin();
		Connect(this.UINV.pins.OUT1, G2);
		this.UA = new inv();
		Connect(this.UA.pins.IN0, this.pins.G1BAR);
		Connect(this.UA.pins.OUT, G1);
		this.UB = new inv();
		Connect(this.UB.pins.IN0, this.pins.G2BAR);
		Connect(this.UB.pins.OUT, G2);
		this.U1 = new inv3a(4);
		Connect(this.U1.pins.IN0_0, this.pins._1A1);
		Connect(this.U1.pins.IN1_0, this.pins._1A2);
		Connect(this.U1.pins.IN2_0, this.pins._1A3);
		Connect(this.U1.pins.IN3_0, this.pins._1A4);
		Connect(this.U1.pins.EN, G1);
		Connect(this.U1.pins.OUT0, this.pins._1Y1);
		Connect(this.U1.pins.OUT1, this.pins._1Y2);
		Connect(this.U1.pins.OUT2, this.pins._1Y3);
		Connect(this.U1.pins.OUT3, this.pins._1Y4);
		this.U2 = new inv3a(2);
		Connect(this.U2.pins.IN0_0, this.pins._2A1);
		Connect(this.U2.pins.IN1_0, this.pins._2A2);
		Connect(this.U2.pins.EN, G2);
		Connect(this.U2.pins.OUT0, this.pins._2Y1);
		Connect(this.U2.pins.OUT1, this.pins._2Y2);
	}
}
/**
 * Octal D-Type Transparent Latches with 3-STATE Outputs
 */
class SN74HC373 extends Component {
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
		Connect(this.UA.pins.IN0, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.UA.pins.OUT, OC);
		this.U1 = new dltch(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.GATE, this.pins.C);
		Connect(this.U1.pins.D0, this.pins._1D);
		Connect(this.U1.pins.D1, this.pins._2D);
		Connect(this.U1.pins.D2, this.pins._3D);
		Connect(this.U1.pins.D3, this.pins._4D);
		Connect(this.U1.pins.D4, this.pins._5D);
		Connect(this.U1.pins.D5, this.pins._6D);
		Connect(this.U1.pins.D6, this.pins._7D);
		Connect(this.U1.pins.D7, this.pins._8D);
		let _1QI = new Pin();
		Connect(this.U1.pins.Q0, _1QI);
		let _2QI = new Pin();
		Connect(this.U1.pins.Q1, _2QI);
		let _3QI = new Pin();
		Connect(this.U1.pins.Q2, _3QI);
		let _4QI = new Pin();
		Connect(this.U1.pins.Q3, _4QI);
		let _5QI = new Pin();
		Connect(this.U1.pins.Q4, _5QI);
		let _6QI = new Pin();
		Connect(this.U1.pins.Q5, _6QI);
		let _7QI = new Pin();
		Connect(this.U1.pins.Q6, _7QI);
		let _8QI = new Pin();
		Connect(this.U1.pins.Q7, _8QI);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(this.U1.pins.QBAR4, _D_NC);
		Connect(this.U1.pins.QBAR5, _D_NC);
		Connect(this.U1.pins.QBAR6, _D_NC);
		Connect(this.U1.pins.QBAR7, _D_NC);
		this.U2 = new buf3a(8);
		Connect(this.U2.pins.IN0_0, _1QI);
		Connect(this.U2.pins.IN1_0, _2QI);
		Connect(this.U2.pins.IN2_0, _3QI);
		Connect(this.U2.pins.IN3_0, _4QI);
		Connect(this.U2.pins.IN4_0, _5QI);
		Connect(this.U2.pins.IN5_0, _6QI);
		Connect(this.U2.pins.IN6_0, _7QI);
		Connect(this.U2.pins.IN7_0, _8QI);
		Connect(this.U2.pins.EN, OC);
		Connect(this.U2.pins.OUT0, this.pins._1Q);
		Connect(this.U2.pins.OUT1, this.pins._2Q);
		Connect(this.U2.pins.OUT2, this.pins._3Q);
		Connect(this.U2.pins.OUT3, this.pins._4Q);
		Connect(this.U2.pins.OUT4, this.pins._5Q);
		Connect(this.U2.pins.OUT5, this.pins._6Q);
		Connect(this.U2.pins.OUT6, this.pins._7Q);
		Connect(this.U2.pins.OUT7, this.pins._8Q);
	}
}
/**
 * Octal D-Type Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74HC374 extends Component {
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
		Connect(this.UOC.pins.IN0, this.pins.OCBAR);
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
		let _D_NC = new Pin();
		Connect(this.UD.pins.QBAR0, _D_NC);
		Connect(this.UD.pins.QBAR1, _D_NC);
		Connect(this.UD.pins.QBAR2, _D_NC);
		Connect(this.UD.pins.QBAR3, _D_NC);
		Connect(this.UD.pins.QBAR4, _D_NC);
		Connect(this.UD.pins.QBAR5, _D_NC);
		Connect(this.UD.pins.QBAR6, _D_NC);
		Connect(this.UD.pins.QBAR7, _D_NC);
		this.UQS = new buf3a(8);
		Connect(this.UQS.pins.IN0_0, SQ1);
		Connect(this.UQS.pins.IN1_0, SQ2);
		Connect(this.UQS.pins.IN2_0, SQ3);
		Connect(this.UQS.pins.IN3_0, SQ4);
		Connect(this.UQS.pins.IN4_0, SQ5);
		Connect(this.UQS.pins.IN5_0, SQ6);
		Connect(this.UQS.pins.IN6_0, SQ7);
		Connect(this.UQS.pins.IN7_0, SQ8);
		Connect(this.UQS.pins.EN, OC);
		Connect(this.UQS.pins.OUT0, this.pins.Q1);
		Connect(this.UQS.pins.OUT1, this.pins.Q2);
		Connect(this.UQS.pins.OUT2, this.pins.Q3);
		Connect(this.UQS.pins.OUT3, this.pins.Q4);
		Connect(this.UQS.pins.OUT4, this.pins.Q5);
		Connect(this.UQS.pins.OUT5, this.pins.Q6);
		Connect(this.UQS.pins.OUT6, this.pins.Q7);
		Connect(this.UQS.pins.OUT7, this.pins.Q8);
	}
}
/**
 * 4-bit Bistable Latches
 */
class SN74HC375 extends Component {
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
class SN74HC377 extends Component {
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
		Connect(this.UBUF.pins.IN0_0, this.pins.GBAR);
		Connect(this.UBUF.pins.IN1_0, this.pins.CLK);
		let GBBUF = new Pin();
		Connect(this.UBUF.pins.OUT0, GBBUF);
		let CLKBUF = new Pin();
		Connect(this.UBUF.pins.OUT1, CLKBUF);
	}
}
class SNHC377DAT extends Component {
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
		this.USET = new inva(2);
		Connect(this.USET.pins.IN0_0, this.pins.GB);
		Connect(this.USET.pins.IN1_0, this.pins.D);
		let G2 = new Pin();
		Connect(this.USET.pins.OUT0, G2);
		let DBAR = new Pin();
		Connect(this.USET.pins.OUT1, DBAR);
		this.UNXOR = new nxor();
		Connect(this.UNXOR.pins.IN0, this.pins.GB);
		Connect(this.UNXOR.pins.IN1, G2);
		let EN = new Pin();
		Connect(this.UNXOR.pins.OUT, EN);
		this.UIN = new buf3();
		let _D_X = new Pin();
		Connect(this.UIN.pins.IN0, _D_X);
		Connect(this.UIN.pins.EN, EN);
		let IN = new Pin();
		Connect(this.UIN.pins.OUT, IN);
		this.UINV = new inva(2);
		Connect(this.UINV.pins.IN0_0, this.pins.GB);
		Connect(this.UINV.pins.IN1_0, DBAR);
		let G = new Pin();
		Connect(this.UINV.pins.OUT0, G);
		let DD = new Pin();
		Connect(this.UINV.pins.OUT1, DD);
		this.UAO = new ao(2,2);
		Connect(this.UAO.pins.IN0_0, G);
		Connect(this.UAO.pins.IN0_1, DD);
		Connect(this.UAO.pins.IN1_0, this.pins.GB);
		let QBUF = new Pin();
		Connect(this.UAO.pins.IN1_1, QBUF);
		Connect(this.UAO.pins.OUT, IN);
		this.UDFF = new dff(1);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, this.pins.CLK);
		Connect(this.UDFF.pins.D0, IN);
		Connect(this.UDFF.pins.Q0, QBUF);
		let _D_NC = new Pin();
		Connect(this.UDFF.pins.QBAR0, _D_NC);
		this.UQOUT = new buf();
		Connect(this.UQOUT.pins.IN0, QBUF);
		Connect(this.UQOUT.pins.OUT, this.pins.Q);
	}
}
/**
 * Octal D-TYPE Flip-Flops with Clock Enable
 */
class SN74HC378 extends Component {
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
		Connect(this.UBUF.pins.IN0_0, this.pins.GBAR);
		Connect(this.UBUF.pins.IN1_0, this.pins.CLK);
		let GBBUF = new Pin();
		Connect(this.UBUF.pins.OUT0, GBBUF);
		let CLKBUF = new Pin();
		Connect(this.UBUF.pins.OUT1, CLKBUF);
	}
}
class SNHC378DAT extends Component {
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
		this.USET = new inva(2);
		Connect(this.USET.pins.IN0_0, this.pins.GB);
		Connect(this.USET.pins.IN1_0, this.pins.D);
		let G2 = new Pin();
		Connect(this.USET.pins.OUT0, G2);
		let DBAR = new Pin();
		Connect(this.USET.pins.OUT1, DBAR);
		this.UNXOR = new nxor();
		Connect(this.UNXOR.pins.IN0, this.pins.GB);
		Connect(this.UNXOR.pins.IN1, G2);
		let EN = new Pin();
		Connect(this.UNXOR.pins.OUT, EN);
		this.UIN = new buf3();
		let _D_X = new Pin();
		Connect(this.UIN.pins.IN0, _D_X);
		Connect(this.UIN.pins.EN, EN);
		let IN = new Pin();
		Connect(this.UIN.pins.OUT, IN);
		this.UINV = new inva(2);
		Connect(this.UINV.pins.IN0_0, this.pins.GB);
		Connect(this.UINV.pins.IN1_0, DBAR);
		let G = new Pin();
		Connect(this.UINV.pins.OUT0, G);
		let DD = new Pin();
		Connect(this.UINV.pins.OUT1, DD);
		this.UAO = new ao(2,2);
		Connect(this.UAO.pins.IN0_0, G);
		Connect(this.UAO.pins.IN0_1, DD);
		Connect(this.UAO.pins.IN1_0, this.pins.GB);
		let QBUF = new Pin();
		Connect(this.UAO.pins.IN1_1, QBUF);
		Connect(this.UAO.pins.OUT, IN);
		this.UDFF = new dff(1);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, this.pins.CLK);
		Connect(this.UDFF.pins.D0, IN);
		Connect(this.UDFF.pins.Q0, QBUF);
		let _D_NC = new Pin();
		Connect(this.UDFF.pins.QBAR0, _D_NC);
		this.UQOUT = new buf();
		Connect(this.UQOUT.pins.IN0, QBUF);
		Connect(this.UQOUT.pins.OUT, this.pins.Q);
	}
}
/**
 * Octal D-TYPE Flip-Flops with Clock Enable
 */
class SN74HC379 extends Component {
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
		Connect(this.UBUF.pins.IN0_0, this.pins.GBAR);
		Connect(this.UBUF.pins.IN1_0, this.pins.CLK);
		let GBBUF = new Pin();
		Connect(this.UBUF.pins.OUT0, GBBUF);
		let CLKBUF = new Pin();
		Connect(this.UBUF.pins.OUT1, CLKBUF);
	}
}
class SNHC379DAT extends Component {
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
		this.USET = new inva(2);
		Connect(this.USET.pins.IN0_0, this.pins.GB);
		Connect(this.USET.pins.IN1_0, this.pins.D);
		let G2 = new Pin();
		Connect(this.USET.pins.OUT0, G2);
		let DBAR = new Pin();
		Connect(this.USET.pins.OUT1, DBAR);
		this.UNXOR = new nxor();
		Connect(this.UNXOR.pins.IN0, this.pins.GB);
		Connect(this.UNXOR.pins.IN1, G2);
		let EN = new Pin();
		Connect(this.UNXOR.pins.OUT, EN);
		this.UIN = new buf3();
		let _D_X = new Pin();
		Connect(this.UIN.pins.IN0, _D_X);
		Connect(this.UIN.pins.EN, EN);
		let IN = new Pin();
		Connect(this.UIN.pins.OUT, IN);
		this.UINV = new inva(2);
		Connect(this.UINV.pins.IN0_0, this.pins.GB);
		Connect(this.UINV.pins.IN1_0, DBAR);
		let G = new Pin();
		Connect(this.UINV.pins.OUT0, G);
		let DD = new Pin();
		Connect(this.UINV.pins.OUT1, DD);
		this.UAO = new ao(2,2);
		Connect(this.UAO.pins.IN0_0, G);
		Connect(this.UAO.pins.IN0_1, DD);
		Connect(this.UAO.pins.IN1_0, this.pins.GB);
		let QBUF = new Pin();
		Connect(this.UAO.pins.IN1_1, QBUF);
		Connect(this.UAO.pins.OUT, IN);
		this.UDFF = new dff(1);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, this.pins.CLK);
		Connect(this.UDFF.pins.D0, IN);
		Connect(this.UDFF.pins.Q0, QBUF);
		let QBBUF = new Pin();
		Connect(this.UDFF.pins.QBAR0, QBBUF);
		this.UQOUT = new bufa(2);
		Connect(this.UQOUT.pins.IN0_0, QBUF);
		Connect(this.UQOUT.pins.IN1_0, QBBUF);
		Connect(this.UQOUT.pins.OUT0, this.pins.Q);
		Connect(this.UQOUT.pins.OUT1, this.pins.QB);
	}
}
/**
 * Quadruple 2-Input Exclusive-OR-Gates
 */
class SN74HC386 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.UY = new xor();
		Connect(this.UY.pins.IN0, this.pins.A);
		Connect(this.UY.pins.IN1, this.pins.B);
		Connect(this.UY.pins.OUT, this.pins.Y);
	}
}
/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74HC390 extends Component {
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
		Connect(this.U1.pins.PRESET, _D_HI);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CLRBAR);
		let CKA = new Pin();
		Connect(this.U1.pins.CLOCK, CKA);
		Connect(this.U1.pins.J0, _D_HI);
		Connect(this.U1.pins.K0, _D_HI);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, CLRBAR);
		let CLOCK2 = new Pin();
		Connect(this.U2.pins.CLOCK, CLOCK2);
		Connect(this.U2.pins.J0, _D_HI);
		Connect(this.U2.pins.K0, _D_HI);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		let QBBAR = new Pin();
		Connect(this.U2.pins.QBAR0, QBBAR);
		this.U3 = new jkff(1);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, CLRBAR);
		Connect(this.U3.pins.CLOCK, QB);
		Connect(this.U3.pins.J0, _D_HI);
		Connect(this.U3.pins.K0, _D_HI);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		let QCBAR = new Pin();
		Connect(this.U3.pins.QBAR0, QCBAR);
		this.U4 = new jkff(1);
		Connect(this.U4.pins.PRESET, _D_HI);
		Connect(this.U4.pins.CLEAR, CLRBAR);
		let CLOCK4 = new Pin();
		Connect(this.U4.pins.CLOCK, CLOCK4);
		Connect(this.U4.pins.J0, _D_HI);
		Connect(this.U4.pins.K0, _D_HI);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		let QDBAR = new Pin();
		Connect(this.U4.pins.QBAR0, QDBAR);
		this.UHC390LOG = new logicexp(['CKA_I','CKB_I','CLR_I','QBBAR','QCBAR','QDBAR'], ['CKA','CKB','CLR','CLRBAR','CLOCK2','CLOCK4'], []).Logic('   CKA    =  CKA_I ;   CKB    =  CKB_I ;   CLR    =  CLR_I ;   CLRBAR =  !CLR ;   CLOCK2 =  CKB & QDBAR ;   CLOCK4 =  !((QBBAR & QDBAR) | (QCBAR & QDBAR)) & CKB ;');
		Connect(this.UHC390LOG.pins.CKA_I, this.pins.CKA_I);
		Connect(this.UHC390LOG.pins.CKB_I, this.pins.CKB_I);
		Connect(this.UHC390LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.UHC390LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC390LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC390LOG.pins.QDBAR, QDBAR);
		Connect(this.UHC390LOG.pins.CKA, CKA);
		let CKB = new Pin();
		Connect(this.UHC390LOG.pins.CKB, CKB);
		let CLR = new Pin();
		Connect(this.UHC390LOG.pins.CLR, CLR);
		Connect(this.UHC390LOG.pins.CLRBAR, CLRBAR);
		Connect(this.UHC390LOG.pins.CLOCK2, CLOCK2);
		Connect(this.UHC390LOG.pins.CLOCK4, CLOCK4);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * COUNTER BINARY 4-BIT, ASYNCHRONOUS
 */
class SN74HC393 extends Component {
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
		Connect(this.U1.pins.PRESET, _D_HI);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CLRBAR);
		let A = new Pin();
		Connect(this.U1.pins.CLOCK, A);
		Connect(this.U1.pins.J0, _D_HI);
		Connect(this.U1.pins.K0, _D_HI);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, CLRBAR);
		Connect(this.U2.pins.CLOCK, QA);
		Connect(this.U2.pins.J0, _D_HI);
		Connect(this.U2.pins.K0, _D_HI);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		Connect(this.U2.pins.QBAR0, _D_NC);
		this.U3 = new jkff(1);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, CLRBAR);
		Connect(this.U3.pins.CLOCK, QB);
		Connect(this.U3.pins.J0, _D_HI);
		Connect(this.U3.pins.K0, _D_HI);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		Connect(this.U3.pins.QBAR0, _D_NC);
		this.U4 = new jkff(1);
		Connect(this.U4.pins.PRESET, _D_HI);
		Connect(this.U4.pins.CLEAR, CLRBAR);
		Connect(this.U4.pins.CLOCK, QC);
		Connect(this.U4.pins.J0, _D_HI);
		Connect(this.U4.pins.K0, _D_HI);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		Connect(this.U4.pins.QBAR0, _D_NC);
		this.U5 = new bufa(2);
		Connect(this.U5.pins.IN0_0, this.pins.A_I);
		Connect(this.U5.pins.IN1_0, this.pins.CLR_I);
		Connect(this.U5.pins.OUT0, A);
		let CLR = new Pin();
		Connect(this.U5.pins.OUT1, CLR);
		this.U6 = new inv();
		Connect(this.U6.pins.IN0, CLR);
		Connect(this.U6.pins.OUT, CLRBAR);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74HC490 extends Component {
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
		let SET9BAR = new Pin();
		Connect(this.U1.pins.PRESET, SET9BAR);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CLRBAR);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.J0, _D_HI);
		Connect(this.U1.pins.K0, _D_HI);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _D_HI);
		let CLRBAR23 = new Pin();
		Connect(this.U2.pins.CLEAR, CLRBAR23);
		let CLOCK2 = new Pin();
		Connect(this.U2.pins.CLOCK, CLOCK2);
		Connect(this.U2.pins.J0, _D_HI);
		Connect(this.U2.pins.K0, _D_HI);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		let QBBAR = new Pin();
		Connect(this.U2.pins.QBAR0, QBBAR);
		this.U3 = new jkff(1);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, CLRBAR23);
		Connect(this.U3.pins.CLOCK, QB);
		Connect(this.U3.pins.J0, _D_HI);
		Connect(this.U3.pins.K0, _D_HI);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		let QCBAR = new Pin();
		Connect(this.U3.pins.QBAR0, QCBAR);
		this.U4 = new jkff(1);
		Connect(this.U4.pins.PRESET, SET9BAR);
		Connect(this.U4.pins.CLEAR, CLRBAR);
		let CLOCK4 = new Pin();
		Connect(this.U4.pins.CLOCK, CLOCK4);
		Connect(this.U4.pins.J0, _D_HI);
		Connect(this.U4.pins.K0, _D_HI);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		let QDBAR = new Pin();
		Connect(this.U4.pins.QBAR0, QDBAR);
		this.UHC490LOG = new logicexp(['CLR_I','SET9_I','CLK_I','QA','QBBAR','QCBAR','QDBAR'], ['CLR','SET9','CLK','CLRBAR23','CLOCK2','CLOCK4','CLRBAR','SET9BAR'], []).Logic('   CLR      =  CLR_I ;   CLRBAR   =  !CLR ;   SET9     =  SET9_I ;   SET9BAR  =  !SET9 ;   CLK      =  CLK_I ;   CLRBAR23 =  CLRBAR & SET9BAR ;   CLOCK2   =  QA & QDBAR ;   CLOCK4   =  !( (QBBAR & QDBAR) | (QCBAR & QDBAR) ) & QA ;');
		Connect(this.UHC490LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.UHC490LOG.pins.SET9_I, this.pins.SET9_I);
		Connect(this.UHC490LOG.pins.CLK_I, this.pins.CLK_I);
		Connect(this.UHC490LOG.pins.QA, QA);
		Connect(this.UHC490LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC490LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC490LOG.pins.QDBAR, QDBAR);
		let CLR = new Pin();
		Connect(this.UHC490LOG.pins.CLR, CLR);
		let SET9 = new Pin();
		Connect(this.UHC490LOG.pins.SET9, SET9);
		Connect(this.UHC490LOG.pins.CLK, CLK);
		Connect(this.UHC490LOG.pins.CLRBAR23, CLRBAR23);
		Connect(this.UHC490LOG.pins.CLOCK2, CLOCK2);
		Connect(this.UHC490LOG.pins.CLOCK4, CLOCK4);
		Connect(this.UHC490LOG.pins.CLRBAR, CLRBAR);
		Connect(this.UHC490LOG.pins.SET9BAR, SET9BAR);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
	}
}
/**
 * Octal D-TYPE Transparent Latches with 3-STATE Outputs
 */
class SN74HC533 extends Component {
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
			_1QBAR: new Pin(),
			_2QBAR: new Pin(),
			_3QBAR: new Pin(),
			_4QBAR: new Pin(),
			_5QBAR: new Pin(),
			_6QBAR: new Pin(),
			_7QBAR: new Pin(),
			_8QBAR: new Pin(),
		}
		this.UOC = new inv();
		Connect(this.UOC.pins.IN0, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.UOC.pins.OUT, OC);
		this.UQI = new dltch(8);
		Connect(this.UQI.pins.PRESET, _D_HI);
		Connect(this.UQI.pins.CLEAR, _D_HI);
		Connect(this.UQI.pins.GATE, this.pins.C);
		Connect(this.UQI.pins.D0, this.pins._1D);
		Connect(this.UQI.pins.D1, this.pins._2D);
		Connect(this.UQI.pins.D2, this.pins._3D);
		Connect(this.UQI.pins.D3, this.pins._4D);
		Connect(this.UQI.pins.D4, this.pins._5D);
		Connect(this.UQI.pins.D5, this.pins._6D);
		Connect(this.UQI.pins.D6, this.pins._7D);
		Connect(this.UQI.pins.D7, this.pins._8D);
		let _D_NC = new Pin();
		Connect(this.UQI.pins.Q0, _D_NC);
		Connect(this.UQI.pins.Q1, _D_NC);
		Connect(this.UQI.pins.Q2, _D_NC);
		Connect(this.UQI.pins.Q3, _D_NC);
		Connect(this.UQI.pins.Q4, _D_NC);
		Connect(this.UQI.pins.Q5, _D_NC);
		Connect(this.UQI.pins.Q6, _D_NC);
		Connect(this.UQI.pins.Q7, _D_NC);
		let _1QI = new Pin();
		Connect(this.UQI.pins.QBAR0, _1QI);
		let _2QI = new Pin();
		Connect(this.UQI.pins.QBAR1, _2QI);
		let _3QI = new Pin();
		Connect(this.UQI.pins.QBAR2, _3QI);
		let _4QI = new Pin();
		Connect(this.UQI.pins.QBAR3, _4QI);
		let _5QI = new Pin();
		Connect(this.UQI.pins.QBAR4, _5QI);
		let _6QI = new Pin();
		Connect(this.UQI.pins.QBAR5, _6QI);
		let _7QI = new Pin();
		Connect(this.UQI.pins.QBAR6, _7QI);
		let _8QI = new Pin();
		Connect(this.UQI.pins.QBAR7, _8QI);
		this.UQBAR = new buf3a(8);
		Connect(this.UQBAR.pins.IN0_0, _1QI);
		Connect(this.UQBAR.pins.IN1_0, _2QI);
		Connect(this.UQBAR.pins.IN2_0, _3QI);
		Connect(this.UQBAR.pins.IN3_0, _4QI);
		Connect(this.UQBAR.pins.IN4_0, _5QI);
		Connect(this.UQBAR.pins.IN5_0, _6QI);
		Connect(this.UQBAR.pins.IN6_0, _7QI);
		Connect(this.UQBAR.pins.IN7_0, _8QI);
		Connect(this.UQBAR.pins.EN, OC);
		Connect(this.UQBAR.pins.OUT0, this.pins._1QBAR);
		Connect(this.UQBAR.pins.OUT1, this.pins._2QBAR);
		Connect(this.UQBAR.pins.OUT2, this.pins._3QBAR);
		Connect(this.UQBAR.pins.OUT3, this.pins._4QBAR);
		Connect(this.UQBAR.pins.OUT4, this.pins._5QBAR);
		Connect(this.UQBAR.pins.OUT5, this.pins._6QBAR);
		Connect(this.UQBAR.pins.OUT6, this.pins._7QBAR);
		Connect(this.UQBAR.pins.OUT7, this.pins._8QBAR);
	}
}
/**
 * Octal D-TYPE Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74HC534 extends Component {
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
			_1QBAR: new Pin(),
			_2QBAR: new Pin(),
			_3QBAR: new Pin(),
			_4QBAR: new Pin(),
			_5QBAR: new Pin(),
			_6QBAR: new Pin(),
			_7QBAR: new Pin(),
			_8QBAR: new Pin(),
		}
		this.UOC = new inv();
		Connect(this.UOC.pins.IN0, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.UOC.pins.OUT, OC);
		this.UDFF = new dff(8);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, this.pins.CLK);
		Connect(this.UDFF.pins.D0, this.pins._1D);
		Connect(this.UDFF.pins.D1, this.pins._2D);
		Connect(this.UDFF.pins.D2, this.pins._3D);
		Connect(this.UDFF.pins.D3, this.pins._4D);
		Connect(this.UDFF.pins.D4, this.pins._5D);
		Connect(this.UDFF.pins.D5, this.pins._6D);
		Connect(this.UDFF.pins.D6, this.pins._7D);
		Connect(this.UDFF.pins.D7, this.pins._8D);
		let _1QQ = new Pin();
		Connect(this.UDFF.pins.Q0, _1QQ);
		let _2QQ = new Pin();
		Connect(this.UDFF.pins.Q1, _2QQ);
		let _3QQ = new Pin();
		Connect(this.UDFF.pins.Q2, _3QQ);
		let _4QQ = new Pin();
		Connect(this.UDFF.pins.Q3, _4QQ);
		let _5QQ = new Pin();
		Connect(this.UDFF.pins.Q4, _5QQ);
		let _6QQ = new Pin();
		Connect(this.UDFF.pins.Q5, _6QQ);
		let _7QQ = new Pin();
		Connect(this.UDFF.pins.Q6, _7QQ);
		let _8QQ = new Pin();
		Connect(this.UDFF.pins.Q7, _8QQ);
		let _D_NC = new Pin();
		Connect(this.UDFF.pins.QBAR0, _D_NC);
		Connect(this.UDFF.pins.QBAR1, _D_NC);
		Connect(this.UDFF.pins.QBAR2, _D_NC);
		Connect(this.UDFF.pins.QBAR3, _D_NC);
		Connect(this.UDFF.pins.QBAR4, _D_NC);
		Connect(this.UDFF.pins.QBAR5, _D_NC);
		Connect(this.UDFF.pins.QBAR6, _D_NC);
		Connect(this.UDFF.pins.QBAR7, _D_NC);
		this.UOCQ = new inv3a(8);
		Connect(this.UOCQ.pins.IN0_0, _1QQ);
		Connect(this.UOCQ.pins.IN1_0, _2QQ);
		Connect(this.UOCQ.pins.IN2_0, _3QQ);
		Connect(this.UOCQ.pins.IN3_0, _4QQ);
		Connect(this.UOCQ.pins.IN4_0, _5QQ);
		Connect(this.UOCQ.pins.IN5_0, _6QQ);
		Connect(this.UOCQ.pins.IN6_0, _7QQ);
		Connect(this.UOCQ.pins.IN7_0, _8QQ);
		Connect(this.UOCQ.pins.EN, OC);
		Connect(this.UOCQ.pins.OUT0, this.pins._1QBAR);
		Connect(this.UOCQ.pins.OUT1, this.pins._2QBAR);
		Connect(this.UOCQ.pins.OUT2, this.pins._3QBAR);
		Connect(this.UOCQ.pins.OUT3, this.pins._4QBAR);
		Connect(this.UOCQ.pins.OUT4, this.pins._5QBAR);
		Connect(this.UOCQ.pins.OUT5, this.pins._6QBAR);
		Connect(this.UOCQ.pins.OUT6, this.pins._7QBAR);
		Connect(this.UOCQ.pins.OUT7, this.pins._8QBAR);
	}
}
/**
 * Octal Buffers and Line Drivers with 3-STATE Outputs
 */
class SN74HC540 extends Component {
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
		Connect(this.UA.pins.IN0, this.pins.G1BAR);
		Connect(this.UA.pins.IN1, this.pins.G2BAR);
		let E = new Pin();
		Connect(this.UA.pins.OUT, E);
		this.U1 = new inv3a(8);
		Connect(this.U1.pins.IN0_0, this.pins.A1);
		Connect(this.U1.pins.IN1_0, this.pins.A2);
		Connect(this.U1.pins.IN2_0, this.pins.A3);
		Connect(this.U1.pins.IN3_0, this.pins.A4);
		Connect(this.U1.pins.IN4_0, this.pins.A5);
		Connect(this.U1.pins.IN5_0, this.pins.A6);
		Connect(this.U1.pins.IN6_0, this.pins.A7);
		Connect(this.U1.pins.IN7_0, this.pins.A8);
		Connect(this.U1.pins.EN, E);
		Connect(this.U1.pins.OUT0, this.pins.Y1);
		Connect(this.U1.pins.OUT1, this.pins.Y2);
		Connect(this.U1.pins.OUT2, this.pins.Y3);
		Connect(this.U1.pins.OUT3, this.pins.Y4);
		Connect(this.U1.pins.OUT4, this.pins.Y5);
		Connect(this.U1.pins.OUT5, this.pins.Y6);
		Connect(this.U1.pins.OUT6, this.pins.Y7);
		Connect(this.U1.pins.OUT7, this.pins.Y8);
	}
}
/**
 * Octal Buffers and Line Driver with 3-STATE Outputs
 */
class SN74HC541 extends Component {
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
		Connect(this.UA.pins.IN0, this.pins.G1BAR);
		Connect(this.UA.pins.IN1, this.pins.G2BAR);
		let E = new Pin();
		Connect(this.UA.pins.OUT, E);
		this.U1 = new buf3a(8);
		Connect(this.U1.pins.IN0_0, this.pins.A1);
		Connect(this.U1.pins.IN1_0, this.pins.A2);
		Connect(this.U1.pins.IN2_0, this.pins.A3);
		Connect(this.U1.pins.IN3_0, this.pins.A4);
		Connect(this.U1.pins.IN4_0, this.pins.A5);
		Connect(this.U1.pins.IN5_0, this.pins.A6);
		Connect(this.U1.pins.IN6_0, this.pins.A7);
		Connect(this.U1.pins.IN7_0, this.pins.A8);
		Connect(this.U1.pins.EN, E);
		Connect(this.U1.pins.OUT0, this.pins.Y1);
		Connect(this.U1.pins.OUT1, this.pins.Y2);
		Connect(this.U1.pins.OUT2, this.pins.Y3);
		Connect(this.U1.pins.OUT3, this.pins.Y4);
		Connect(this.U1.pins.OUT4, this.pins.Y5);
		Connect(this.U1.pins.OUT5, this.pins.Y6);
		Connect(this.U1.pins.OUT6, this.pins.Y7);
		Connect(this.U1.pins.OUT7, this.pins.Y8);
	}
}
/**
 * Octal D-TYPE Transparent Latches with 3-STATE Outputs
 */
class SN74HC563 extends Component {
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
			_1QBAR: new Pin(),
			_2QBAR: new Pin(),
			_3QBAR: new Pin(),
			_4QBAR: new Pin(),
			_5QBAR: new Pin(),
			_6QBAR: new Pin(),
			_7QBAR: new Pin(),
			_8QBAR: new Pin(),
		}
		this.UINV = new inv();
		Connect(this.UINV.pins.IN0, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.UINV.pins.OUT, OC);
		this.UQBUF = new dltch(8);
		Connect(this.UQBUF.pins.PRESET, _D_HI);
		Connect(this.UQBUF.pins.CLEAR, _D_HI);
		Connect(this.UQBUF.pins.GATE, this.pins.C);
		Connect(this.UQBUF.pins.D0, this.pins._1D);
		Connect(this.UQBUF.pins.D1, this.pins._2D);
		Connect(this.UQBUF.pins.D2, this.pins._3D);
		Connect(this.UQBUF.pins.D3, this.pins._4D);
		Connect(this.UQBUF.pins.D4, this.pins._5D);
		Connect(this.UQBUF.pins.D5, this.pins._6D);
		Connect(this.UQBUF.pins.D6, this.pins._7D);
		Connect(this.UQBUF.pins.D7, this.pins._8D);
		let _D_NC = new Pin();
		Connect(this.UQBUF.pins.Q0, _D_NC);
		Connect(this.UQBUF.pins.Q1, _D_NC);
		Connect(this.UQBUF.pins.Q2, _D_NC);
		Connect(this.UQBUF.pins.Q3, _D_NC);
		Connect(this.UQBUF.pins.Q4, _D_NC);
		Connect(this.UQBUF.pins.Q5, _D_NC);
		Connect(this.UQBUF.pins.Q6, _D_NC);
		Connect(this.UQBUF.pins.Q7, _D_NC);
		let _1QB = new Pin();
		Connect(this.UQBUF.pins.QBAR0, _1QB);
		let _2QB = new Pin();
		Connect(this.UQBUF.pins.QBAR1, _2QB);
		let _3QB = new Pin();
		Connect(this.UQBUF.pins.QBAR2, _3QB);
		let _4QB = new Pin();
		Connect(this.UQBUF.pins.QBAR3, _4QB);
		let _5QB = new Pin();
		Connect(this.UQBUF.pins.QBAR4, _5QB);
		let _6QB = new Pin();
		Connect(this.UQBUF.pins.QBAR5, _6QB);
		let _7QB = new Pin();
		Connect(this.UQBUF.pins.QBAR6, _7QB);
		let _8QB = new Pin();
		Connect(this.UQBUF.pins.QBAR7, _8QB);
		this.UQOUT = new buf3a(8);
		Connect(this.UQOUT.pins.IN0_0, _1QB);
		Connect(this.UQOUT.pins.IN1_0, _2QB);
		Connect(this.UQOUT.pins.IN2_0, _3QB);
		Connect(this.UQOUT.pins.IN3_0, _4QB);
		Connect(this.UQOUT.pins.IN4_0, _5QB);
		Connect(this.UQOUT.pins.IN5_0, _6QB);
		Connect(this.UQOUT.pins.IN6_0, _7QB);
		Connect(this.UQOUT.pins.IN7_0, _8QB);
		Connect(this.UQOUT.pins.EN, OC);
		Connect(this.UQOUT.pins.OUT0, this.pins._1QBAR);
		Connect(this.UQOUT.pins.OUT1, this.pins._2QBAR);
		Connect(this.UQOUT.pins.OUT2, this.pins._3QBAR);
		Connect(this.UQOUT.pins.OUT3, this.pins._4QBAR);
		Connect(this.UQOUT.pins.OUT4, this.pins._5QBAR);
		Connect(this.UQOUT.pins.OUT5, this.pins._6QBAR);
		Connect(this.UQOUT.pins.OUT6, this.pins._7QBAR);
		Connect(this.UQOUT.pins.OUT7, this.pins._8QBAR);
	}
}
/**
 * Octal D-TYPE Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74HC564 extends Component {
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
			_1QBAR: new Pin(),
			_2QBAR: new Pin(),
			_3QBAR: new Pin(),
			_4QBAR: new Pin(),
			_5QBAR: new Pin(),
			_6QBAR: new Pin(),
			_7QBAR: new Pin(),
			_8QBAR: new Pin(),
		}
		this.UOC = new inv();
		Connect(this.UOC.pins.IN0, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.UOC.pins.OUT, OC);
		this.UDFF = new dff(8);
		Connect(this.UDFF.pins.PRESET, _D_HI);
		Connect(this.UDFF.pins.CLEAR, _D_HI);
		Connect(this.UDFF.pins.CLOCK, this.pins.CLK);
		Connect(this.UDFF.pins.D0, this.pins._1D);
		Connect(this.UDFF.pins.D1, this.pins._2D);
		Connect(this.UDFF.pins.D2, this.pins._3D);
		Connect(this.UDFF.pins.D3, this.pins._4D);
		Connect(this.UDFF.pins.D4, this.pins._5D);
		Connect(this.UDFF.pins.D5, this.pins._6D);
		Connect(this.UDFF.pins.D6, this.pins._7D);
		Connect(this.UDFF.pins.D7, this.pins._8D);
		let _1QQ = new Pin();
		Connect(this.UDFF.pins.Q0, _1QQ);
		let _2QQ = new Pin();
		Connect(this.UDFF.pins.Q1, _2QQ);
		let _3QQ = new Pin();
		Connect(this.UDFF.pins.Q2, _3QQ);
		let _4QQ = new Pin();
		Connect(this.UDFF.pins.Q3, _4QQ);
		let _5QQ = new Pin();
		Connect(this.UDFF.pins.Q4, _5QQ);
		let _6QQ = new Pin();
		Connect(this.UDFF.pins.Q5, _6QQ);
		let _7QQ = new Pin();
		Connect(this.UDFF.pins.Q6, _7QQ);
		let _8QQ = new Pin();
		Connect(this.UDFF.pins.Q7, _8QQ);
		let _D_NC = new Pin();
		Connect(this.UDFF.pins.QBAR0, _D_NC);
		Connect(this.UDFF.pins.QBAR1, _D_NC);
		Connect(this.UDFF.pins.QBAR2, _D_NC);
		Connect(this.UDFF.pins.QBAR3, _D_NC);
		Connect(this.UDFF.pins.QBAR4, _D_NC);
		Connect(this.UDFF.pins.QBAR5, _D_NC);
		Connect(this.UDFF.pins.QBAR6, _D_NC);
		Connect(this.UDFF.pins.QBAR7, _D_NC);
		this.UOCQ = new inv3a(8);
		Connect(this.UOCQ.pins.IN0_0, _1QQ);
		Connect(this.UOCQ.pins.IN1_0, _2QQ);
		Connect(this.UOCQ.pins.IN2_0, _3QQ);
		Connect(this.UOCQ.pins.IN3_0, _4QQ);
		Connect(this.UOCQ.pins.IN4_0, _5QQ);
		Connect(this.UOCQ.pins.IN5_0, _6QQ);
		Connect(this.UOCQ.pins.IN6_0, _7QQ);
		Connect(this.UOCQ.pins.IN7_0, _8QQ);
		Connect(this.UOCQ.pins.EN, OC);
		Connect(this.UOCQ.pins.OUT0, this.pins._1QBAR);
		Connect(this.UOCQ.pins.OUT1, this.pins._2QBAR);
		Connect(this.UOCQ.pins.OUT2, this.pins._3QBAR);
		Connect(this.UOCQ.pins.OUT3, this.pins._4QBAR);
		Connect(this.UOCQ.pins.OUT4, this.pins._5QBAR);
		Connect(this.UOCQ.pins.OUT5, this.pins._6QBAR);
		Connect(this.UOCQ.pins.OUT6, this.pins._7QBAR);
		Connect(this.UOCQ.pins.OUT7, this.pins._8QBAR);
	}
}
/**
 * Octal D-TYPE Transparent Latches with 3-STATE Outputs
 */
class SN74HC573 extends Component {
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
		this.U0 = new inv();
		Connect(this.U0.pins.IN0, this.pins.OCBAR);
		let OC = new Pin();
		Connect(this.U0.pins.OUT, OC);
		this.U1 = new dltch(8);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.GATE, this.pins.C);
		Connect(this.U1.pins.D0, this.pins._1D);
		Connect(this.U1.pins.D1, this.pins._2D);
		Connect(this.U1.pins.D2, this.pins._3D);
		Connect(this.U1.pins.D3, this.pins._4D);
		Connect(this.U1.pins.D4, this.pins._5D);
		Connect(this.U1.pins.D5, this.pins._6D);
		Connect(this.U1.pins.D6, this.pins._7D);
		Connect(this.U1.pins.D7, this.pins._8D);
		let _1QI = new Pin();
		Connect(this.U1.pins.Q0, _1QI);
		let _2QI = new Pin();
		Connect(this.U1.pins.Q1, _2QI);
		let _3QI = new Pin();
		Connect(this.U1.pins.Q2, _3QI);
		let _4QI = new Pin();
		Connect(this.U1.pins.Q3, _4QI);
		let _5QI = new Pin();
		Connect(this.U1.pins.Q4, _5QI);
		let _6QI = new Pin();
		Connect(this.U1.pins.Q5, _6QI);
		let _7QI = new Pin();
		Connect(this.U1.pins.Q6, _7QI);
		let _8QI = new Pin();
		Connect(this.U1.pins.Q7, _8QI);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(this.U1.pins.QBAR4, _D_NC);
		Connect(this.U1.pins.QBAR5, _D_NC);
		Connect(this.U1.pins.QBAR6, _D_NC);
		Connect(this.U1.pins.QBAR7, _D_NC);
		this.U2 = new buf3a(8);
		Connect(this.U2.pins.IN0_0, _1QI);
		Connect(this.U2.pins.IN1_0, _2QI);
		Connect(this.U2.pins.IN2_0, _3QI);
		Connect(this.U2.pins.IN3_0, _4QI);
		Connect(this.U2.pins.IN4_0, _5QI);
		Connect(this.U2.pins.IN5_0, _6QI);
		Connect(this.U2.pins.IN6_0, _7QI);
		Connect(this.U2.pins.IN7_0, _8QI);
		Connect(this.U2.pins.EN, OC);
		Connect(this.U2.pins.OUT0, this.pins._1Q);
		Connect(this.U2.pins.OUT1, this.pins._2Q);
		Connect(this.U2.pins.OUT2, this.pins._3Q);
		Connect(this.U2.pins.OUT3, this.pins._4Q);
		Connect(this.U2.pins.OUT4, this.pins._5Q);
		Connect(this.U2.pins.OUT5, this.pins._6Q);
		Connect(this.U2.pins.OUT6, this.pins._7Q);
		Connect(this.U2.pins.OUT7, this.pins._8Q);
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
		Connect(this.UOC.pins.IN0, this.pins.OCBAR);
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
		let _D_NC = new Pin();
		Connect(this.UD.pins.QBAR0, _D_NC);
		Connect(this.UD.pins.QBAR1, _D_NC);
		Connect(this.UD.pins.QBAR2, _D_NC);
		Connect(this.UD.pins.QBAR3, _D_NC);
		Connect(this.UD.pins.QBAR4, _D_NC);
		Connect(this.UD.pins.QBAR5, _D_NC);
		Connect(this.UD.pins.QBAR6, _D_NC);
		Connect(this.UD.pins.QBAR7, _D_NC);
		this.UQS = new buf3a(8);
		Connect(this.UQS.pins.IN0_0, SQ1);
		Connect(this.UQS.pins.IN1_0, SQ2);
		Connect(this.UQS.pins.IN2_0, SQ3);
		Connect(this.UQS.pins.IN3_0, SQ4);
		Connect(this.UQS.pins.IN4_0, SQ5);
		Connect(this.UQS.pins.IN5_0, SQ6);
		Connect(this.UQS.pins.IN6_0, SQ7);
		Connect(this.UQS.pins.IN7_0, SQ8);
		Connect(this.UQS.pins.EN, OC);
		Connect(this.UQS.pins.OUT0, this.pins._1Q);
		Connect(this.UQS.pins.OUT1, this.pins._2Q);
		Connect(this.UQS.pins.OUT2, this.pins._3Q);
		Connect(this.UQS.pins.OUT3, this.pins._4Q);
		Connect(this.UQS.pins.OUT4, this.pins._5Q);
		Connect(this.UQS.pins.OUT5, this.pins._6Q);
		Connect(this.UQS.pins.OUT6, this.pins._7Q);
		Connect(this.UQS.pins.OUT7, this.pins._8Q);
	}
}
class SN74HC590A extends Component {
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
		Connect(this.U1.pins.PRESET, _D_HI);
		let CCLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CCLRBAR);
		let CNTA = new Pin();
		Connect(this.U1.pins.CLOCK, CNTA);
		Connect(this.U1.pins.J0, _D_HI);
		Connect(this.U1.pins.K0, _D_HI);
		let JA = new Pin();
		Connect(this.U1.pins.Q0, JA);
		let KA = new Pin();
		Connect(this.U1.pins.QBAR0, KA);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, CCLRBAR);
		let CNTB = new Pin();
		Connect(this.U2.pins.CLOCK, CNTB);
		Connect(this.U2.pins.J0, _D_HI);
		Connect(this.U2.pins.K0, _D_HI);
		let JB = new Pin();
		Connect(this.U2.pins.Q0, JB);
		let KB = new Pin();
		Connect(this.U2.pins.QBAR0, KB);
		this.U3 = new jkff(1);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, CCLRBAR);
		let CNTC = new Pin();
		Connect(this.U3.pins.CLOCK, CNTC);
		Connect(this.U3.pins.J0, _D_HI);
		Connect(this.U3.pins.K0, _D_HI);
		let JC = new Pin();
		Connect(this.U3.pins.Q0, JC);
		let KC = new Pin();
		Connect(this.U3.pins.QBAR0, KC);
		this.U4 = new jkff(1);
		Connect(this.U4.pins.PRESET, _D_HI);
		Connect(this.U4.pins.CLEAR, CCLRBAR);
		let CNTD = new Pin();
		Connect(this.U4.pins.CLOCK, CNTD);
		Connect(this.U4.pins.J0, _D_HI);
		Connect(this.U4.pins.K0, _D_HI);
		let JD = new Pin();
		Connect(this.U4.pins.Q0, JD);
		let KD = new Pin();
		Connect(this.U4.pins.QBAR0, KD);
		this.U5 = new jkff(1);
		Connect(this.U5.pins.PRESET, _D_HI);
		Connect(this.U5.pins.CLEAR, CCLRBAR);
		let CNTE = new Pin();
		Connect(this.U5.pins.CLOCK, CNTE);
		Connect(this.U5.pins.J0, _D_HI);
		Connect(this.U5.pins.K0, _D_HI);
		let JE = new Pin();
		Connect(this.U5.pins.Q0, JE);
		let KE = new Pin();
		Connect(this.U5.pins.QBAR0, KE);
		this.U6 = new jkff(1);
		Connect(this.U6.pins.PRESET, _D_HI);
		Connect(this.U6.pins.CLEAR, CCLRBAR);
		let CNTF = new Pin();
		Connect(this.U6.pins.CLOCK, CNTF);
		Connect(this.U6.pins.J0, _D_HI);
		Connect(this.U6.pins.K0, _D_HI);
		let JF = new Pin();
		Connect(this.U6.pins.Q0, JF);
		let KF = new Pin();
		Connect(this.U6.pins.QBAR0, KF);
		this.U7 = new jkff(1);
		Connect(this.U7.pins.PRESET, _D_HI);
		Connect(this.U7.pins.CLEAR, CCLRBAR);
		let CNTG = new Pin();
		Connect(this.U7.pins.CLOCK, CNTG);
		Connect(this.U7.pins.J0, _D_HI);
		Connect(this.U7.pins.K0, _D_HI);
		let JG = new Pin();
		Connect(this.U7.pins.Q0, JG);
		let KG = new Pin();
		Connect(this.U7.pins.QBAR0, KG);
		this.U8 = new jkff(1);
		Connect(this.U8.pins.PRESET, _D_HI);
		Connect(this.U8.pins.CLEAR, CCLRBAR);
		let CNTH = new Pin();
		Connect(this.U8.pins.CLOCK, CNTH);
		Connect(this.U8.pins.J0, _D_HI);
		Connect(this.U8.pins.K0, _D_HI);
		let JH = new Pin();
		Connect(this.U8.pins.Q0, JH);
		let KH = new Pin();
		Connect(this.U8.pins.QBAR0, KH);
		this.U9 = new jkff(8);
		Connect(this.U9.pins.PRESET, _D_HI);
		Connect(this.U9.pins.CLEAR, _D_HI);
		let MCLK = new Pin();
		Connect(this.U9.pins.CLOCK, MCLK);
		Connect(this.U9.pins.J0, JA);
		Connect(this.U9.pins.J1, JB);
		Connect(this.U9.pins.J2, JC);
		Connect(this.U9.pins.J3, JD);
		Connect(this.U9.pins.J4, JE);
		Connect(this.U9.pins.J5, JF);
		Connect(this.U9.pins.J6, JG);
		Connect(this.U9.pins.J7, JH);
		Connect(this.U9.pins.K0, KA);
		Connect(this.U9.pins.K1, KB);
		Connect(this.U9.pins.K2, KC);
		Connect(this.U9.pins.K3, KD);
		Connect(this.U9.pins.K4, KE);
		Connect(this.U9.pins.K5, KF);
		Connect(this.U9.pins.K6, KG);
		Connect(this.U9.pins.K7, KH);
		let QA = new Pin();
		Connect(this.U9.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U9.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U9.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U9.pins.Q3, QD);
		let QE = new Pin();
		Connect(this.U9.pins.Q4, QE);
		let QF = new Pin();
		Connect(this.U9.pins.Q5, QF);
		let QG = new Pin();
		Connect(this.U9.pins.Q6, QG);
		let QH = new Pin();
		Connect(this.U9.pins.Q7, QH);
		let _D_NC = new Pin();
		Connect(this.U9.pins.QBAR0, _D_NC);
		Connect(this.U9.pins.QBAR1, _D_NC);
		Connect(this.U9.pins.QBAR2, _D_NC);
		Connect(this.U9.pins.QBAR3, _D_NC);
		Connect(this.U9.pins.QBAR4, _D_NC);
		Connect(this.U9.pins.QBAR5, _D_NC);
		Connect(this.U9.pins.QBAR6, _D_NC);
		Connect(this.U9.pins.QBAR7, _D_NC);
		this.UHC590ALOG = new logicexp(['GBAR_I','RCK_I','CCKENBAR_I','CCK_I','CCLRBAR_I','JA','JB','JC','JD','JE','JF','JG','JH','CNTA'], ['GBAR','RCK','CCKENBAR','CCK','CCLRBAR','CNTA','CNTB','CNTC','CNTD','CNTE','CNTF','CNTG','CNTH','MCLK','RCOBAR'], []).Logic('   GBAR =  GBAR_I ;   RCK =  RCK_I ;   CCKENBAR =  CCKENBAR_I ;   CCK =  CCK_I ;   CCLRBAR =  CCLRBAR_I ;   CNTA =  !((!(CNTA & CCKENBAR) & CCK) & CCK) ;   CNTB =  JA & CNTA ;   CNTC =  JB & CNTB ;   CNTD =  JC & CNTC ;   CNTE =  JD & CNTD ;   CNTF =  JE & CNTE ;   CNTG =  JF & CNTF ;   CNTH =  JG & CNTG ;   MCLK =  !RCK ;   RCOBAR =  !(JH & JG & JF & JE & JD & JC & JB & JA) ;');
		Connect(this.UHC590ALOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC590ALOG.pins.RCK_I, this.pins.RCK_I);
		Connect(this.UHC590ALOG.pins.CCKENBAR_I, this.pins.CCKENBAR_I);
		Connect(this.UHC590ALOG.pins.CCK_I, this.pins.CCK_I);
		Connect(this.UHC590ALOG.pins.CCLRBAR_I, this.pins.CCLRBAR_I);
		Connect(this.UHC590ALOG.pins.JA, JA);
		Connect(this.UHC590ALOG.pins.JB, JB);
		Connect(this.UHC590ALOG.pins.JC, JC);
		Connect(this.UHC590ALOG.pins.JD, JD);
		Connect(this.UHC590ALOG.pins.JE, JE);
		Connect(this.UHC590ALOG.pins.JF, JF);
		Connect(this.UHC590ALOG.pins.JG, JG);
		Connect(this.UHC590ALOG.pins.JH, JH);
		Connect(this.UHC590ALOG.pins.CNTA, CNTA);
		let GBAR = new Pin();
		Connect(this.UHC590ALOG.pins.GBAR, GBAR);
		let RCK = new Pin();
		Connect(this.UHC590ALOG.pins.RCK, RCK);
		let CCKENBAR = new Pin();
		Connect(this.UHC590ALOG.pins.CCKENBAR, CCKENBAR);
		let CCK = new Pin();
		Connect(this.UHC590ALOG.pins.CCK, CCK);
		Connect(this.UHC590ALOG.pins.CCLRBAR, CCLRBAR);
		Connect(this.UHC590ALOG.pins.CNTB, CNTB);
		Connect(this.UHC590ALOG.pins.CNTC, CNTC);
		Connect(this.UHC590ALOG.pins.CNTD, CNTD);
		Connect(this.UHC590ALOG.pins.CNTE, CNTE);
		Connect(this.UHC590ALOG.pins.CNTF, CNTF);
		Connect(this.UHC590ALOG.pins.CNTG, CNTG);
		Connect(this.UHC590ALOG.pins.CNTH, CNTH);
		Connect(this.UHC590ALOG.pins.MCLK, MCLK);
		let RCOBAR = new Pin();
		Connect(this.UHC590ALOG.pins.RCOBAR, RCOBAR);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
		Connect(QF, this.pins.QF_O);
		Connect(QG, this.pins.QG_O);
		Connect(QH, this.pins.QH_O);
		Connect(RCOBAR, this.pins.RCOBAR_O);
	}
}
/**
 * 8-BIT SHIFT REGISTERS WITH INPUT LATCHES
 */
class SN74HC594 extends Component {
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
		Connect(this.U1.pins.IN0_0, this.pins.SRCK_I);
		Connect(this.U1.pins.IN1_0, this.pins.RCK_I);
		Connect(this.U1.pins.IN2_0, this.pins.SRCLRBAR_I);
		Connect(this.U1.pins.IN3_0, this.pins.RCLRBAR_I);
		Connect(this.U1.pins.IN4_0, this.pins.SER_I);
		let SRCK = new Pin();
		Connect(this.U1.pins.OUT0, SRCK);
		let RCK = new Pin();
		Connect(this.U1.pins.OUT1, RCK);
		let SRCLRBAR = new Pin();
		Connect(this.U1.pins.OUT2, SRCLRBAR);
		let RCLRBAR = new Pin();
		Connect(this.U1.pins.OUT3, RCLRBAR);
		let SER = new Pin();
		Connect(this.U1.pins.OUT4, SER);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, SRCLRBAR);
		Connect(this.U2.pins.CLOCK, SRCK);
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
		let _D_NC = new Pin();
		Connect(this.U2.pins.QBAR0, _D_NC);
		Connect(this.U2.pins.QBAR1, _D_NC);
		Connect(this.U2.pins.QBAR2, _D_NC);
		Connect(this.U2.pins.QBAR3, _D_NC);
		Connect(this.U2.pins.QBAR4, _D_NC);
		Connect(this.U2.pins.QBAR5, _D_NC);
		Connect(this.U2.pins.QBAR6, _D_NC);
		Connect(this.U2.pins.QBAR7, _D_NC);
		this.U3 = new dff(8);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, RCLRBAR);
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
		Connect(this.U3.pins.QBAR0, _D_NC);
		Connect(this.U3.pins.QBAR1, _D_NC);
		Connect(this.U3.pins.QBAR2, _D_NC);
		Connect(this.U3.pins.QBAR3, _D_NC);
		Connect(this.U3.pins.QBAR4, _D_NC);
		Connect(this.U3.pins.QBAR5, _D_NC);
		Connect(this.U3.pins.QBAR6, _D_NC);
		Connect(this.U3.pins.QBAR7, _D_NC);
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
class SN74HC595 extends Component {
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
		Connect(this.U1.pins.IN0_0, this.pins.SRCK_I);
		Connect(this.U1.pins.IN1_0, this.pins.RCK_I);
		Connect(this.U1.pins.IN2_0, this.pins.SRCLRBAR_I);
		Connect(this.U1.pins.IN3_0, this.pins.GBAR_I);
		Connect(this.U1.pins.IN4_0, this.pins.SER_I);
		let SRCK = new Pin();
		Connect(this.U1.pins.OUT0, SRCK);
		let RCK = new Pin();
		Connect(this.U1.pins.OUT1, RCK);
		let SRCLRBAR = new Pin();
		Connect(this.U1.pins.OUT2, SRCLRBAR);
		let GBAR = new Pin();
		Connect(this.U1.pins.OUT3, GBAR);
		let SER = new Pin();
		Connect(this.U1.pins.OUT4, SER);
		this.U2 = new dff(8);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, SRCLRBAR);
		Connect(this.U2.pins.CLOCK, SRCK);
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
		let _D_NC = new Pin();
		Connect(this.U2.pins.QBAR0, _D_NC);
		Connect(this.U2.pins.QBAR1, _D_NC);
		Connect(this.U2.pins.QBAR2, _D_NC);
		Connect(this.U2.pins.QBAR3, _D_NC);
		Connect(this.U2.pins.QBAR4, _D_NC);
		Connect(this.U2.pins.QBAR5, _D_NC);
		Connect(this.U2.pins.QBAR6, _D_NC);
		Connect(this.U2.pins.QBAR7, _D_NC);
		this.U3 = new dff(8);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, _D_HI);
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
		Connect(this.U3.pins.QBAR0, _D_NC);
		Connect(this.U3.pins.QBAR1, _D_NC);
		Connect(this.U3.pins.QBAR2, _D_NC);
		Connect(this.U3.pins.QBAR3, _D_NC);
		Connect(this.U3.pins.QBAR4, _D_NC);
		Connect(this.U3.pins.QBAR5, _D_NC);
		Connect(this.U3.pins.QBAR6, _D_NC);
		Connect(this.U3.pins.QBAR7, _D_NC);
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
class SN74HC604 extends Component {
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
		Connect(this.UBUF.pins.IN0_0, this.pins.A_BBAR);
		Connect(this.UBUF.pins.IN1_0, this.pins.CLK);
		let A_BB = new Pin();
		Connect(this.UBUF.pins.OUT0, A_BB);
		let CK = new Pin();
		Connect(this.UBUF.pins.OUT1, CK);
		this.UAB_B = new inv();
		Connect(this.UAB_B.pins.IN0, A_BB);
		let AB_B = new Pin();
		Connect(this.UAB_B.pins.OUT, AB_B);
	}
}
class SNHC604DAT extends Component {
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
		let _D_NC = new Pin();
		Connect(this.UAB.pins.QBAR0, _D_NC);
		Connect(this.UAB.pins.QBAR1, _D_NC);
		this.UYI = new ao(2,2);
		Connect(this.UYI.pins.IN0_0, this.pins.A_BB);
		Connect(this.UYI.pins.IN0_1, A);
		Connect(this.UYI.pins.IN1_0, this.pins.AB_B);
		Connect(this.UYI.pins.IN1_1, B);
		let YI = new Pin();
		Connect(this.UYI.pins.OUT, YI);
		this.UY = new buf3();
		Connect(this.UY.pins.IN0, YI);
		Connect(this.UY.pins.EN, this.pins.CK);
		Connect(this.UY.pins.OUT, this.pins.Y);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC620 extends Component {
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
		Connect(this.U1.pins.IN0, this.pins.GAB_I);
		let GAB = new Pin();
		Connect(this.U1.pins.OUT, GAB);
		this.U2 = new inv();
		Connect(this.U2.pins.IN0, this.pins.GBABAR_I);
		let GBA = new Pin();
		Connect(this.U2.pins.OUT, GBA);
		this.U3 = new inv3a(8);
		Connect(this.U3.pins.IN0_0, this.pins.A1_B);
		Connect(this.U3.pins.IN1_0, this.pins.A2_B);
		Connect(this.U3.pins.IN2_0, this.pins.A3_B);
		Connect(this.U3.pins.IN3_0, this.pins.A4_B);
		Connect(this.U3.pins.IN4_0, this.pins.A5_B);
		Connect(this.U3.pins.IN5_0, this.pins.A6_B);
		Connect(this.U3.pins.IN6_0, this.pins.A7_B);
		Connect(this.U3.pins.IN7_0, this.pins.A8_B);
		Connect(this.U3.pins.EN, GAB);
		Connect(this.U3.pins.OUT0, this.pins.B1_B);
		Connect(this.U3.pins.OUT1, this.pins.B2_B);
		Connect(this.U3.pins.OUT2, this.pins.B3_B);
		Connect(this.U3.pins.OUT3, this.pins.B4_B);
		Connect(this.U3.pins.OUT4, this.pins.B5_B);
		Connect(this.U3.pins.OUT5, this.pins.B6_B);
		Connect(this.U3.pins.OUT6, this.pins.B7_B);
		Connect(this.U3.pins.OUT7, this.pins.B8_B);
		this.U4 = new inv3a(8);
		Connect(this.U4.pins.IN0_0, this.pins.B1_B);
		Connect(this.U4.pins.IN1_0, this.pins.B2_B);
		Connect(this.U4.pins.IN2_0, this.pins.B3_B);
		Connect(this.U4.pins.IN3_0, this.pins.B4_B);
		Connect(this.U4.pins.IN4_0, this.pins.B5_B);
		Connect(this.U4.pins.IN5_0, this.pins.B6_B);
		Connect(this.U4.pins.IN6_0, this.pins.B7_B);
		Connect(this.U4.pins.IN7_0, this.pins.B8_B);
		Connect(this.U4.pins.EN, GBA);
		Connect(this.U4.pins.OUT0, this.pins.A1_B);
		Connect(this.U4.pins.OUT1, this.pins.A2_B);
		Connect(this.U4.pins.OUT2, this.pins.A3_B);
		Connect(this.U4.pins.OUT3, this.pins.A4_B);
		Connect(this.U4.pins.OUT4, this.pins.A5_B);
		Connect(this.U4.pins.OUT5, this.pins.A6_B);
		Connect(this.U4.pins.OUT6, this.pins.A7_B);
		Connect(this.U4.pins.OUT7, this.pins.A8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC623 extends Component {
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
		Connect(this.U1.pins.IN0, this.pins.GAB_I);
		let GAB = new Pin();
		Connect(this.U1.pins.OUT, GAB);
		this.U2 = new inv();
		Connect(this.U2.pins.IN0, this.pins.GBABAR_I);
		let GBA = new Pin();
		Connect(this.U2.pins.OUT, GBA);
		this.U3 = new buf3a(8);
		Connect(this.U3.pins.IN0_0, this.pins.A1_B);
		Connect(this.U3.pins.IN1_0, this.pins.A2_B);
		Connect(this.U3.pins.IN2_0, this.pins.A3_B);
		Connect(this.U3.pins.IN3_0, this.pins.A4_B);
		Connect(this.U3.pins.IN4_0, this.pins.A5_B);
		Connect(this.U3.pins.IN5_0, this.pins.A6_B);
		Connect(this.U3.pins.IN6_0, this.pins.A7_B);
		Connect(this.U3.pins.IN7_0, this.pins.A8_B);
		Connect(this.U3.pins.EN, GAB);
		Connect(this.U3.pins.OUT0, this.pins.B1_B);
		Connect(this.U3.pins.OUT1, this.pins.B2_B);
		Connect(this.U3.pins.OUT2, this.pins.B3_B);
		Connect(this.U3.pins.OUT3, this.pins.B4_B);
		Connect(this.U3.pins.OUT4, this.pins.B5_B);
		Connect(this.U3.pins.OUT5, this.pins.B6_B);
		Connect(this.U3.pins.OUT6, this.pins.B7_B);
		Connect(this.U3.pins.OUT7, this.pins.B8_B);
		this.U4 = new buf3a(8);
		Connect(this.U4.pins.IN0_0, this.pins.B1_B);
		Connect(this.U4.pins.IN1_0, this.pins.B2_B);
		Connect(this.U4.pins.IN2_0, this.pins.B3_B);
		Connect(this.U4.pins.IN3_0, this.pins.B4_B);
		Connect(this.U4.pins.IN4_0, this.pins.B5_B);
		Connect(this.U4.pins.IN5_0, this.pins.B6_B);
		Connect(this.U4.pins.IN6_0, this.pins.B7_B);
		Connect(this.U4.pins.IN7_0, this.pins.B8_B);
		Connect(this.U4.pins.EN, GBA);
		Connect(this.U4.pins.OUT0, this.pins.A1_B);
		Connect(this.U4.pins.OUT1, this.pins.A2_B);
		Connect(this.U4.pins.OUT2, this.pins.A3_B);
		Connect(this.U4.pins.OUT3, this.pins.A4_B);
		Connect(this.U4.pins.OUT4, this.pins.A5_B);
		Connect(this.U4.pins.OUT5, this.pins.A6_B);
		Connect(this.U4.pins.OUT6, this.pins.A7_B);
		Connect(this.U4.pins.OUT7, this.pins.A8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC640 extends Component {
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
		Connect(this.U1.pins.IN0_0, this.pins.GBAR_I);
		Connect(this.U1.pins.IN1_0, this.pins.DIR_I);
		let GBAR = new Pin();
		Connect(this.U1.pins.OUT0, GBAR);
		let DIR = new Pin();
		Connect(this.U1.pins.OUT1, DIR);
		this.U2 = new inv();
		Connect(this.U2.pins.IN0, DIR);
		let DIRBAR = new Pin();
		Connect(this.U2.pins.OUT, DIRBAR);
		this.U3 = new nora(2,2);
		Connect(this.U3.pins.IN0_0, DIRBAR);
		Connect(this.U3.pins.IN0_1, GBAR);
		Connect(this.U3.pins.IN1_0, DIR);
		Connect(this.U3.pins.IN1_1, GBAR);
		let ENABLEAB = new Pin();
		Connect(this.U3.pins.OUT0, ENABLEAB);
		let ENABLEBA = new Pin();
		Connect(this.U3.pins.OUT1, ENABLEBA);
		this.U4 = new inv3a(8);
		Connect(this.U4.pins.IN0_0, this.pins.A1_B);
		Connect(this.U4.pins.IN1_0, this.pins.A2_B);
		Connect(this.U4.pins.IN2_0, this.pins.A3_B);
		Connect(this.U4.pins.IN3_0, this.pins.A4_B);
		Connect(this.U4.pins.IN4_0, this.pins.A5_B);
		Connect(this.U4.pins.IN5_0, this.pins.A6_B);
		Connect(this.U4.pins.IN6_0, this.pins.A7_B);
		Connect(this.U4.pins.IN7_0, this.pins.A8_B);
		Connect(this.U4.pins.EN, ENABLEAB);
		Connect(this.U4.pins.OUT0, this.pins.B1_B);
		Connect(this.U4.pins.OUT1, this.pins.B2_B);
		Connect(this.U4.pins.OUT2, this.pins.B3_B);
		Connect(this.U4.pins.OUT3, this.pins.B4_B);
		Connect(this.U4.pins.OUT4, this.pins.B5_B);
		Connect(this.U4.pins.OUT5, this.pins.B6_B);
		Connect(this.U4.pins.OUT6, this.pins.B7_B);
		Connect(this.U4.pins.OUT7, this.pins.B8_B);
		this.U5 = new inv3a(8);
		Connect(this.U5.pins.IN0_0, this.pins.B1_B);
		Connect(this.U5.pins.IN1_0, this.pins.B2_B);
		Connect(this.U5.pins.IN2_0, this.pins.B3_B);
		Connect(this.U5.pins.IN3_0, this.pins.B4_B);
		Connect(this.U5.pins.IN4_0, this.pins.B5_B);
		Connect(this.U5.pins.IN5_0, this.pins.B6_B);
		Connect(this.U5.pins.IN6_0, this.pins.B7_B);
		Connect(this.U5.pins.IN7_0, this.pins.B8_B);
		Connect(this.U5.pins.EN, ENABLEBA);
		Connect(this.U5.pins.OUT0, this.pins.A1_B);
		Connect(this.U5.pins.OUT1, this.pins.A2_B);
		Connect(this.U5.pins.OUT2, this.pins.A3_B);
		Connect(this.U5.pins.OUT3, this.pins.A4_B);
		Connect(this.U5.pins.OUT4, this.pins.A5_B);
		Connect(this.U5.pins.OUT5, this.pins.A6_B);
		Connect(this.U5.pins.OUT6, this.pins.A7_B);
		Connect(this.U5.pins.OUT7, this.pins.A8_B);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC643 extends Component {
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
		Connect(this.UBUF.pins.IN0, this.pins.DIR);
		let DR = new Pin();
		Connect(this.UBUF.pins.OUT, DR);
		this.UINV = new inva(2);
		Connect(this.UINV.pins.IN0_0, DR);
		Connect(this.UINV.pins.IN1_0, this.pins.GBAR);
		let DRB = new Pin();
		Connect(this.UINV.pins.OUT0, DRB);
		let G = new Pin();
		Connect(this.UINV.pins.OUT1, G);
		this.UEN = new anda(2,2);
		Connect(this.UEN.pins.IN0_0, DR);
		Connect(this.UEN.pins.IN0_1, G);
		Connect(this.UEN.pins.IN1_0, DRB);
		Connect(this.UEN.pins.IN1_1, G);
		let EAB = new Pin();
		Connect(this.UEN.pins.OUT0, EAB);
		let EBA = new Pin();
		Connect(this.UEN.pins.OUT1, EBA);
		this.UA = new buf3a(8);
		Connect(this.UA.pins.IN0_0, this.pins.B1);
		Connect(this.UA.pins.IN1_0, this.pins.B2);
		Connect(this.UA.pins.IN2_0, this.pins.B3);
		Connect(this.UA.pins.IN3_0, this.pins.B4);
		Connect(this.UA.pins.IN4_0, this.pins.B5);
		Connect(this.UA.pins.IN5_0, this.pins.B6);
		Connect(this.UA.pins.IN6_0, this.pins.B7);
		Connect(this.UA.pins.IN7_0, this.pins.B8);
		Connect(this.UA.pins.EN, EBA);
		Connect(this.UA.pins.OUT0, this.pins.A1);
		Connect(this.UA.pins.OUT1, this.pins.A2);
		Connect(this.UA.pins.OUT2, this.pins.A3);
		Connect(this.UA.pins.OUT3, this.pins.A4);
		Connect(this.UA.pins.OUT4, this.pins.A5);
		Connect(this.UA.pins.OUT5, this.pins.A6);
		Connect(this.UA.pins.OUT6, this.pins.A7);
		Connect(this.UA.pins.OUT7, this.pins.A8);
		this.UB = new inv3a(8);
		Connect(this.UB.pins.IN0_0, this.pins.A1);
		Connect(this.UB.pins.IN1_0, this.pins.A2);
		Connect(this.UB.pins.IN2_0, this.pins.A3);
		Connect(this.UB.pins.IN3_0, this.pins.A4);
		Connect(this.UB.pins.IN4_0, this.pins.A5);
		Connect(this.UB.pins.IN5_0, this.pins.A6);
		Connect(this.UB.pins.IN6_0, this.pins.A7);
		Connect(this.UB.pins.IN7_0, this.pins.A8);
		Connect(this.UB.pins.EN, EAB);
		Connect(this.UB.pins.OUT0, this.pins.B1);
		Connect(this.UB.pins.OUT1, this.pins.B2);
		Connect(this.UB.pins.OUT2, this.pins.B3);
		Connect(this.UB.pins.OUT3, this.pins.B4);
		Connect(this.UB.pins.OUT4, this.pins.B5);
		Connect(this.UB.pins.OUT5, this.pins.B6);
		Connect(this.UB.pins.OUT6, this.pins.B7);
		Connect(this.UB.pins.OUT7, this.pins.B8);
	}
}
/**
 * OCTAL BUS TRANSCEIVERS
 */
class SN74HC645 extends Component {
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
		Connect(this.UBUFF.pins.IN0_0, this.pins.GBAR);
		Connect(this.UBUFF.pins.IN1_0, this.pins.DIR);
		let GBAR_BUF = new Pin();
		Connect(this.UBUFF.pins.OUT0, GBAR_BUF);
		let DIR_BUF = new Pin();
		Connect(this.UBUFF.pins.OUT1, DIR_BUF);
		this.UA = new nor(2);
		Connect(this.UA.pins.IN0, GBAR_BUF);
		Connect(this.UA.pins.IN1, DIR_BUF);
		let T1 = new Pin();
		Connect(this.UA.pins.OUT, T1);
		this.UB = new inv();
		Connect(this.UB.pins.IN0, GBAR_BUF);
		let RE1 = new Pin();
		Connect(this.UB.pins.OUT, RE1);
		this.UC = new and(2);
		Connect(this.UC.pins.IN0, RE1);
		Connect(this.UC.pins.IN1, DIR_BUF);
		let T2 = new Pin();
		Connect(this.UC.pins.OUT, T2);
		this.U1 = new buf3a(8);
		Connect(this.U1.pins.IN0_0, this.pins.A1);
		Connect(this.U1.pins.IN1_0, this.pins.A2);
		Connect(this.U1.pins.IN2_0, this.pins.A3);
		Connect(this.U1.pins.IN3_0, this.pins.A4);
		Connect(this.U1.pins.IN4_0, this.pins.A5);
		Connect(this.U1.pins.IN5_0, this.pins.A6);
		Connect(this.U1.pins.IN6_0, this.pins.A7);
		Connect(this.U1.pins.IN7_0, this.pins.A8);
		Connect(this.U1.pins.EN, T2);
		Connect(this.U1.pins.OUT0, this.pins.B1);
		Connect(this.U1.pins.OUT1, this.pins.B2);
		Connect(this.U1.pins.OUT2, this.pins.B3);
		Connect(this.U1.pins.OUT3, this.pins.B4);
		Connect(this.U1.pins.OUT4, this.pins.B5);
		Connect(this.U1.pins.OUT5, this.pins.B6);
		Connect(this.U1.pins.OUT6, this.pins.B7);
		Connect(this.U1.pins.OUT7, this.pins.B8);
		this.U2 = new buf3a(8);
		Connect(this.U2.pins.IN0_0, this.pins.B1);
		Connect(this.U2.pins.IN1_0, this.pins.B2);
		Connect(this.U2.pins.IN2_0, this.pins.B3);
		Connect(this.U2.pins.IN3_0, this.pins.B4);
		Connect(this.U2.pins.IN4_0, this.pins.B5);
		Connect(this.U2.pins.IN5_0, this.pins.B6);
		Connect(this.U2.pins.IN6_0, this.pins.B7);
		Connect(this.U2.pins.IN7_0, this.pins.B8);
		Connect(this.U2.pins.EN, T1);
		Connect(this.U2.pins.OUT0, this.pins.A1);
		Connect(this.U2.pins.OUT1, this.pins.A2);
		Connect(this.U2.pins.OUT2, this.pins.A3);
		Connect(this.U2.pins.OUT3, this.pins.A4);
		Connect(this.U2.pins.OUT4, this.pins.A5);
		Connect(this.U2.pins.OUT5, this.pins.A6);
		Connect(this.U2.pins.OUT6, this.pins.A7);
		Connect(this.U2.pins.OUT7, this.pins.A8);
	}
}
/**
 * OCTAL BUS TRANSCEIVER_REGISTER WITH 3-STATE OUTPUTS
 */
class SN74HC646 extends Component {
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
		this.UHC646LOG1 = new logicexp(['GBAR_I','DIR_I','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1','QA2','QA3','QA4','QA5','QA6','QA7','QA8','QB1','QB2','QB3','QB4','QB5','QB6','QB7','QB8'], ['GBAR','DIR','CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_OUT','A2_OUT','A3_OUT','A4_OUT','A5_OUT','A6_OUT','A7_OUT','A8_OUT','B1_OUT','B2_OUT','B3_OUT','B4_OUT','B5_OUT','B6_OUT','B7_OUT','B8_OUT','ENA','ENB'], []).Logic('   GBAR =  GBAR_I ;   DIR =  DIR_I ;   CBA =  CBA_I ;   SBA =  SBA_I ;let    SBABAR =  !SBA ;   SBABAR =  !SBA ;   CAB =  CAB_I ;   SAB =  SAB_I ;let    SABBAR =  !SAB ;   SABBAR =  !SAB ;   ENA =  !DIR & !GBAR ;   ENB =   DIR & !GBAR ;   A1 =  A1_B ;   B1 =  B1_B ;   A2 =  A2_B ;   B2 =  B2_B ;   A3 =  A3_B ;   B3 =  B3_B ;   A4 =  A4_B ;   B4 =  B4_B ;   A5 =  A5_B ;   B5 =  B5_B ;   A6 =  A6_B ;   B6 =  B6_B ;   A7 =  A7_B ;   B7 =  B7_B ;   A8 =  A8_B ;   B8 =  B8_B ;   A1_OUT =  !((!B1 & SBABAR) | (SBA & QB1)) ;   B1_OUT =  !((!A1 & SABBAR) | (SAB & QA1)) ;   A2_OUT =  !((!B2 & SBABAR) | (SBA & QB2)) ;   B2_OUT =  !((!A2 & SABBAR) | (SAB & QA2)) ;   A3_OUT =  !((!B3 & SBABAR) | (SBA & QB3)) ;   B3_OUT =  !((!A3 & SABBAR) | (SAB & QA3)) ;   A4_OUT =  !((!B4 & SBABAR) | (SBA & QB4)) ;   B4_OUT =  !((!A4 & SABBAR) | (SAB & QA4)) ;   A5_OUT =  !((!B5 & SBABAR) | (SBA & QB5)) ;   B5_OUT =  !((!A5 & SABBAR) | (SAB & QA5)) ;   A6_OUT =  !((!B6 & SBABAR) | (SBA & QB6)) ;   B6_OUT =  !((!A6 & SABBAR) | (SAB & QA6)) ;   A7_OUT =  !((!B7 & SBABAR) | (SBA & QB7)) ;   B7_OUT =  !((!A7 & SABBAR) | (SAB & QA7)) ;   A8_OUT =  !((!B8 & SBABAR) | (SBA & QB8)) ;   B8_OUT =  !((!A8 & SABBAR) | (SAB & QA8)) ;');
		Connect(this.UHC646LOG1.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC646LOG1.pins.DIR_I, this.pins.DIR_I);
		Connect(this.UHC646LOG1.pins.CBA_I, this.pins.CBA_I);
		Connect(this.UHC646LOG1.pins.SBA_I, this.pins.SBA_I);
		Connect(this.UHC646LOG1.pins.CAB_I, this.pins.CAB_I);
		Connect(this.UHC646LOG1.pins.SAB_I, this.pins.SAB_I);
		Connect(this.UHC646LOG1.pins.A1_B, this.pins.A1_B);
		Connect(this.UHC646LOG1.pins.A2_B, this.pins.A2_B);
		Connect(this.UHC646LOG1.pins.A3_B, this.pins.A3_B);
		Connect(this.UHC646LOG1.pins.A4_B, this.pins.A4_B);
		Connect(this.UHC646LOG1.pins.A5_B, this.pins.A5_B);
		Connect(this.UHC646LOG1.pins.A6_B, this.pins.A6_B);
		Connect(this.UHC646LOG1.pins.A7_B, this.pins.A7_B);
		Connect(this.UHC646LOG1.pins.A8_B, this.pins.A8_B);
		Connect(this.UHC646LOG1.pins.B1_B, this.pins.B1_B);
		Connect(this.UHC646LOG1.pins.B2_B, this.pins.B2_B);
		Connect(this.UHC646LOG1.pins.B3_B, this.pins.B3_B);
		Connect(this.UHC646LOG1.pins.B4_B, this.pins.B4_B);
		Connect(this.UHC646LOG1.pins.B5_B, this.pins.B5_B);
		Connect(this.UHC646LOG1.pins.B6_B, this.pins.B6_B);
		Connect(this.UHC646LOG1.pins.B7_B, this.pins.B7_B);
		Connect(this.UHC646LOG1.pins.B8_B, this.pins.B8_B);
		let QA1 = new Pin();
		Connect(this.UHC646LOG1.pins.QA1, QA1);
		let QA2 = new Pin();
		Connect(this.UHC646LOG1.pins.QA2, QA2);
		let QA3 = new Pin();
		Connect(this.UHC646LOG1.pins.QA3, QA3);
		let QA4 = new Pin();
		Connect(this.UHC646LOG1.pins.QA4, QA4);
		let QA5 = new Pin();
		Connect(this.UHC646LOG1.pins.QA5, QA5);
		let QA6 = new Pin();
		Connect(this.UHC646LOG1.pins.QA6, QA6);
		let QA7 = new Pin();
		Connect(this.UHC646LOG1.pins.QA7, QA7);
		let QA8 = new Pin();
		Connect(this.UHC646LOG1.pins.QA8, QA8);
		let QB1 = new Pin();
		Connect(this.UHC646LOG1.pins.QB1, QB1);
		let QB2 = new Pin();
		Connect(this.UHC646LOG1.pins.QB2, QB2);
		let QB3 = new Pin();
		Connect(this.UHC646LOG1.pins.QB3, QB3);
		let QB4 = new Pin();
		Connect(this.UHC646LOG1.pins.QB4, QB4);
		let QB5 = new Pin();
		Connect(this.UHC646LOG1.pins.QB5, QB5);
		let QB6 = new Pin();
		Connect(this.UHC646LOG1.pins.QB6, QB6);
		let QB7 = new Pin();
		Connect(this.UHC646LOG1.pins.QB7, QB7);
		let QB8 = new Pin();
		Connect(this.UHC646LOG1.pins.QB8, QB8);
		let GBAR = new Pin();
		Connect(this.UHC646LOG1.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.UHC646LOG1.pins.DIR, DIR);
		let CBA = new Pin();
		Connect(this.UHC646LOG1.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.UHC646LOG1.pins.SBA, SBA);
		let CAB = new Pin();
		Connect(this.UHC646LOG1.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.UHC646LOG1.pins.SAB, SAB);
		let A1 = new Pin();
		Connect(this.UHC646LOG1.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC646LOG1.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.UHC646LOG1.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.UHC646LOG1.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.UHC646LOG1.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.UHC646LOG1.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.UHC646LOG1.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.UHC646LOG1.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.UHC646LOG1.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.UHC646LOG1.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.UHC646LOG1.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.UHC646LOG1.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.UHC646LOG1.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.UHC646LOG1.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.UHC646LOG1.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.UHC646LOG1.pins.B8, B8);
		let A1_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.A1_OUT, A1_OUT);
		let A2_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.A2_OUT, A2_OUT);
		let A3_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.A3_OUT, A3_OUT);
		let A4_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.A4_OUT, A4_OUT);
		let A5_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.A5_OUT, A5_OUT);
		let A6_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.A6_OUT, A6_OUT);
		let A7_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.A7_OUT, A7_OUT);
		let A8_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.A8_OUT, A8_OUT);
		let B1_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.B1_OUT, B1_OUT);
		let B2_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.B2_OUT, B2_OUT);
		let B3_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.B3_OUT, B3_OUT);
		let B4_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.B4_OUT, B4_OUT);
		let B5_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.B5_OUT, B5_OUT);
		let B6_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.B6_OUT, B6_OUT);
		let B7_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.B7_OUT, B7_OUT);
		let B8_OUT = new Pin();
		Connect(this.UHC646LOG1.pins.B8_OUT, B8_OUT);
		let ENA = new Pin();
		Connect(this.UHC646LOG1.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.UHC646LOG1.pins.ENB, ENB);
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
		Connect(this.UAREG.pins.QBAR0, QA1);
		Connect(this.UAREG.pins.QBAR1, QA2);
		Connect(this.UAREG.pins.QBAR2, QA3);
		Connect(this.UAREG.pins.QBAR3, QA4);
		Connect(this.UAREG.pins.QBAR4, QA5);
		Connect(this.UAREG.pins.QBAR5, QA6);
		Connect(this.UAREG.pins.QBAR6, QA7);
		Connect(this.UAREG.pins.QBAR7, QA8);
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
		Connect(this.UBREG.pins.QBAR0, QB1);
		Connect(this.UBREG.pins.QBAR1, QB2);
		Connect(this.UBREG.pins.QBAR2, QB3);
		Connect(this.UBREG.pins.QBAR3, QB4);
		Connect(this.UBREG.pins.QBAR4, QB5);
		Connect(this.UBREG.pins.QBAR5, QB6);
		Connect(this.UBREG.pins.QBAR6, QB7);
		Connect(this.UBREG.pins.QBAR7, QB8);
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
class SN74HC648 extends Component {
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
		this.UHC648LOG1 = new logicexp(['GBAR_I','DIR_I','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1','QA2','QA3','QA4','QA5','QA6','QA7','QA8','QB1','QB2','QB3','QB4','QB5','QB6','QB7','QB8'], ['GBAR','DIR','CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_OUT','A2_OUT','A3_OUT','A4_OUT','A5_OUT','A6_OUT','A7_OUT','A8_OUT','B1_OUT','B2_OUT','B3_OUT','B4_OUT','B5_OUT','B6_OUT','B7_OUT','B8_OUT','ENA','ENB'], []).Logic('   GBAR =  GBAR_I ;   DIR =  DIR_I ;   CBA =  CBA_I ;   SBA =  SBA_I ;let    SBABAR =  !SBA ;   SBABAR =  !SBA ;   CAB =  CAB_I ;   SAB =  SAB_I ;let    SABBAR =  !SAB ;   SABBAR =  !SAB ;   ENA =  !DIR & !GBAR ;   ENB =   DIR & !GBAR ;   A1 =  A1_B ;   B1 =  B1_B ;   A2 =  A2_B ;   B2 =  B2_B ;   A3 =  A3_B ;   B3 =  B3_B ;   A4 =  A4_B ;   B4 =  B4_B ;   A5 =  A5_B ;   B5 =  B5_B ;   A6 =  A6_B ;   B6 =  B6_B ;   A7 =  A7_B ;   B7 =  B7_B ;   A8 =  A8_B ;   B8 =  B8_B ;   A1_OUT =  !((B1 & SBABAR) | (SBA & QB1)) ;   B1_OUT =  !((A1 & SABBAR) | (SAB & QA1)) ;   A2_OUT =  !((B2 & SBABAR) | (SBA & QB2)) ;   B2_OUT =  !((A2 & SABBAR) | (SAB & QA2)) ;   A3_OUT =  !((B3 & SBABAR) | (SBA & QB3)) ;   B3_OUT =  !((A3 & SABBAR) | (SAB & QA3)) ;   A4_OUT =  !((B4 & SBABAR) | (SBA & QB4)) ;   B4_OUT =  !((A4 & SABBAR) | (SAB & QA4)) ;   A5_OUT =  !((B5 & SBABAR) | (SBA & QB5)) ;   B5_OUT =  !((A5 & SABBAR) | (SAB & QA5)) ;   A6_OUT =  !((B6 & SBABAR) | (SBA & QB6)) ;   B6_OUT =  !((A6 & SABBAR) | (SAB & QA6)) ;   A7_OUT =  !((B7 & SBABAR) | (SBA & QB7)) ;   B7_OUT =  !((A7 & SABBAR) | (SAB & QA7)) ;   A8_OUT =  !((B8 & SBABAR) | (SBA & QB8)) ;   B8_OUT =  !((A8 & SABBAR) | (SAB & QA8)) ;');
		Connect(this.UHC648LOG1.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC648LOG1.pins.DIR_I, this.pins.DIR_I);
		Connect(this.UHC648LOG1.pins.CBA_I, this.pins.CBA_I);
		Connect(this.UHC648LOG1.pins.SBA_I, this.pins.SBA_I);
		Connect(this.UHC648LOG1.pins.CAB_I, this.pins.CAB_I);
		Connect(this.UHC648LOG1.pins.SAB_I, this.pins.SAB_I);
		Connect(this.UHC648LOG1.pins.A1_B, this.pins.A1_B);
		Connect(this.UHC648LOG1.pins.A2_B, this.pins.A2_B);
		Connect(this.UHC648LOG1.pins.A3_B, this.pins.A3_B);
		Connect(this.UHC648LOG1.pins.A4_B, this.pins.A4_B);
		Connect(this.UHC648LOG1.pins.A5_B, this.pins.A5_B);
		Connect(this.UHC648LOG1.pins.A6_B, this.pins.A6_B);
		Connect(this.UHC648LOG1.pins.A7_B, this.pins.A7_B);
		Connect(this.UHC648LOG1.pins.A8_B, this.pins.A8_B);
		Connect(this.UHC648LOG1.pins.B1_B, this.pins.B1_B);
		Connect(this.UHC648LOG1.pins.B2_B, this.pins.B2_B);
		Connect(this.UHC648LOG1.pins.B3_B, this.pins.B3_B);
		Connect(this.UHC648LOG1.pins.B4_B, this.pins.B4_B);
		Connect(this.UHC648LOG1.pins.B5_B, this.pins.B5_B);
		Connect(this.UHC648LOG1.pins.B6_B, this.pins.B6_B);
		Connect(this.UHC648LOG1.pins.B7_B, this.pins.B7_B);
		Connect(this.UHC648LOG1.pins.B8_B, this.pins.B8_B);
		let QA1 = new Pin();
		Connect(this.UHC648LOG1.pins.QA1, QA1);
		let QA2 = new Pin();
		Connect(this.UHC648LOG1.pins.QA2, QA2);
		let QA3 = new Pin();
		Connect(this.UHC648LOG1.pins.QA3, QA3);
		let QA4 = new Pin();
		Connect(this.UHC648LOG1.pins.QA4, QA4);
		let QA5 = new Pin();
		Connect(this.UHC648LOG1.pins.QA5, QA5);
		let QA6 = new Pin();
		Connect(this.UHC648LOG1.pins.QA6, QA6);
		let QA7 = new Pin();
		Connect(this.UHC648LOG1.pins.QA7, QA7);
		let QA8 = new Pin();
		Connect(this.UHC648LOG1.pins.QA8, QA8);
		let QB1 = new Pin();
		Connect(this.UHC648LOG1.pins.QB1, QB1);
		let QB2 = new Pin();
		Connect(this.UHC648LOG1.pins.QB2, QB2);
		let QB3 = new Pin();
		Connect(this.UHC648LOG1.pins.QB3, QB3);
		let QB4 = new Pin();
		Connect(this.UHC648LOG1.pins.QB4, QB4);
		let QB5 = new Pin();
		Connect(this.UHC648LOG1.pins.QB5, QB5);
		let QB6 = new Pin();
		Connect(this.UHC648LOG1.pins.QB6, QB6);
		let QB7 = new Pin();
		Connect(this.UHC648LOG1.pins.QB7, QB7);
		let QB8 = new Pin();
		Connect(this.UHC648LOG1.pins.QB8, QB8);
		let GBAR = new Pin();
		Connect(this.UHC648LOG1.pins.GBAR, GBAR);
		let DIR = new Pin();
		Connect(this.UHC648LOG1.pins.DIR, DIR);
		let CBA = new Pin();
		Connect(this.UHC648LOG1.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.UHC648LOG1.pins.SBA, SBA);
		let CAB = new Pin();
		Connect(this.UHC648LOG1.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.UHC648LOG1.pins.SAB, SAB);
		let A1 = new Pin();
		Connect(this.UHC648LOG1.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC648LOG1.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.UHC648LOG1.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.UHC648LOG1.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.UHC648LOG1.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.UHC648LOG1.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.UHC648LOG1.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.UHC648LOG1.pins.A8, A8);
		let B1 = new Pin();
		Connect(this.UHC648LOG1.pins.B1, B1);
		let B2 = new Pin();
		Connect(this.UHC648LOG1.pins.B2, B2);
		let B3 = new Pin();
		Connect(this.UHC648LOG1.pins.B3, B3);
		let B4 = new Pin();
		Connect(this.UHC648LOG1.pins.B4, B4);
		let B5 = new Pin();
		Connect(this.UHC648LOG1.pins.B5, B5);
		let B6 = new Pin();
		Connect(this.UHC648LOG1.pins.B6, B6);
		let B7 = new Pin();
		Connect(this.UHC648LOG1.pins.B7, B7);
		let B8 = new Pin();
		Connect(this.UHC648LOG1.pins.B8, B8);
		let A1_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.A1_OUT, A1_OUT);
		let A2_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.A2_OUT, A2_OUT);
		let A3_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.A3_OUT, A3_OUT);
		let A4_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.A4_OUT, A4_OUT);
		let A5_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.A5_OUT, A5_OUT);
		let A6_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.A6_OUT, A6_OUT);
		let A7_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.A7_OUT, A7_OUT);
		let A8_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.A8_OUT, A8_OUT);
		let B1_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.B1_OUT, B1_OUT);
		let B2_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.B2_OUT, B2_OUT);
		let B3_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.B3_OUT, B3_OUT);
		let B4_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.B4_OUT, B4_OUT);
		let B5_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.B5_OUT, B5_OUT);
		let B6_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.B6_OUT, B6_OUT);
		let B7_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.B7_OUT, B7_OUT);
		let B8_OUT = new Pin();
		Connect(this.UHC648LOG1.pins.B8_OUT, B8_OUT);
		let ENA = new Pin();
		Connect(this.UHC648LOG1.pins.ENA, ENA);
		let ENB = new Pin();
		Connect(this.UHC648LOG1.pins.ENB, ENB);
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
		let _D_NC = new Pin();
		Connect(this.UAREG.pins.QBAR0, _D_NC);
		Connect(this.UAREG.pins.QBAR1, _D_NC);
		Connect(this.UAREG.pins.QBAR2, _D_NC);
		Connect(this.UAREG.pins.QBAR3, _D_NC);
		Connect(this.UAREG.pins.QBAR4, _D_NC);
		Connect(this.UAREG.pins.QBAR5, _D_NC);
		Connect(this.UAREG.pins.QBAR6, _D_NC);
		Connect(this.UAREG.pins.QBAR7, _D_NC);
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
		Connect(this.UBREG.pins.QBAR0, _D_NC);
		Connect(this.UBREG.pins.QBAR1, _D_NC);
		Connect(this.UBREG.pins.QBAR2, _D_NC);
		Connect(this.UBREG.pins.QBAR3, _D_NC);
		Connect(this.UBREG.pins.QBAR4, _D_NC);
		Connect(this.UBREG.pins.QBAR5, _D_NC);
		Connect(this.UBREG.pins.QBAR6, _D_NC);
		Connect(this.UBREG.pins.QBAR7, _D_NC);
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
class SN74HC651 extends Component {
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
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		Connect(this.U1.pins.QBAR1, _D_NC);
		Connect(this.U1.pins.QBAR2, _D_NC);
		Connect(this.U1.pins.QBAR3, _D_NC);
		Connect(this.U1.pins.QBAR4, _D_NC);
		Connect(this.U1.pins.QBAR5, _D_NC);
		Connect(this.U1.pins.QBAR6, _D_NC);
		Connect(this.U1.pins.QBAR7, _D_NC);
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
		Connect(this.U2.pins.QBAR0, _D_NC);
		Connect(this.U2.pins.QBAR1, _D_NC);
		Connect(this.U2.pins.QBAR2, _D_NC);
		Connect(this.U2.pins.QBAR3, _D_NC);
		Connect(this.U2.pins.QBAR4, _D_NC);
		Connect(this.U2.pins.QBAR5, _D_NC);
		Connect(this.U2.pins.QBAR6, _D_NC);
		Connect(this.U2.pins.QBAR7, _D_NC);
		this.U3 = new buf3a(8);
		let A1_O = new Pin();
		Connect(this.U3.pins.IN0_0, A1_O);
		let A2_O = new Pin();
		Connect(this.U3.pins.IN1_0, A2_O);
		let A3_O = new Pin();
		Connect(this.U3.pins.IN2_0, A3_O);
		let A4_O = new Pin();
		Connect(this.U3.pins.IN3_0, A4_O);
		let A5_O = new Pin();
		Connect(this.U3.pins.IN4_0, A5_O);
		let A6_O = new Pin();
		Connect(this.U3.pins.IN5_0, A6_O);
		let A7_O = new Pin();
		Connect(this.U3.pins.IN6_0, A7_O);
		let A8_O = new Pin();
		Connect(this.U3.pins.IN7_0, A8_O);
		let IGBABAR = new Pin();
		Connect(this.U3.pins.EN, IGBABAR);
		Connect(this.U3.pins.OUT0, A1_IO);
		Connect(this.U3.pins.OUT1, A2_IO);
		Connect(this.U3.pins.OUT2, A3_IO);
		Connect(this.U3.pins.OUT3, A4_IO);
		Connect(this.U3.pins.OUT4, A5_IO);
		Connect(this.U3.pins.OUT5, A6_IO);
		Connect(this.U3.pins.OUT6, A7_IO);
		Connect(this.U3.pins.OUT7, A8_IO);
		this.U4 = new buf3a(8);
		let B1_O = new Pin();
		Connect(this.U4.pins.IN0_0, B1_O);
		let B2_O = new Pin();
		Connect(this.U4.pins.IN1_0, B2_O);
		let B3_O = new Pin();
		Connect(this.U4.pins.IN2_0, B3_O);
		let B4_O = new Pin();
		Connect(this.U4.pins.IN3_0, B4_O);
		let B5_O = new Pin();
		Connect(this.U4.pins.IN4_0, B5_O);
		let B6_O = new Pin();
		Connect(this.U4.pins.IN5_0, B6_O);
		let B7_O = new Pin();
		Connect(this.U4.pins.IN6_0, B7_O);
		let B8_O = new Pin();
		Connect(this.U4.pins.IN7_0, B8_O);
		let GAB = new Pin();
		Connect(this.U4.pins.EN, GAB);
		Connect(this.U4.pins.OUT0, B1_IO);
		Connect(this.U4.pins.OUT1, B2_IO);
		Connect(this.U4.pins.OUT2, B3_IO);
		Connect(this.U4.pins.OUT3, B4_IO);
		Connect(this.U4.pins.OUT4, B5_IO);
		Connect(this.U4.pins.OUT5, B6_IO);
		Connect(this.U4.pins.OUT6, B7_IO);
		Connect(this.U4.pins.OUT7, B8_IO);
		this.U5 = new buf3a(8);
		let A1 = new Pin();
		Connect(this.U5.pins.IN0_0, A1);
		let A2 = new Pin();
		Connect(this.U5.pins.IN1_0, A2);
		let A3 = new Pin();
		Connect(this.U5.pins.IN2_0, A3);
		let A4 = new Pin();
		Connect(this.U5.pins.IN3_0, A4);
		let A5 = new Pin();
		Connect(this.U5.pins.IN4_0, A5);
		let A6 = new Pin();
		Connect(this.U5.pins.IN5_0, A6);
		let A7 = new Pin();
		Connect(this.U5.pins.IN6_0, A7);
		let A8 = new Pin();
		Connect(this.U5.pins.IN7_0, A8);
		let GBABAR = new Pin();
		Connect(this.U5.pins.EN, GBABAR);
		Connect(this.U5.pins.OUT0, A1_IO);
		Connect(this.U5.pins.OUT1, A2_IO);
		Connect(this.U5.pins.OUT2, A3_IO);
		Connect(this.U5.pins.OUT3, A4_IO);
		Connect(this.U5.pins.OUT4, A5_IO);
		Connect(this.U5.pins.OUT5, A6_IO);
		Connect(this.U5.pins.OUT6, A7_IO);
		Connect(this.U5.pins.OUT7, A8_IO);
		this.U6 = new buf3a(8);
		let B1 = new Pin();
		Connect(this.U6.pins.IN0_0, B1);
		let B2 = new Pin();
		Connect(this.U6.pins.IN1_0, B2);
		let B3 = new Pin();
		Connect(this.U6.pins.IN2_0, B3);
		let B4 = new Pin();
		Connect(this.U6.pins.IN3_0, B4);
		let B5 = new Pin();
		Connect(this.U6.pins.IN4_0, B5);
		let B6 = new Pin();
		Connect(this.U6.pins.IN5_0, B6);
		let B7 = new Pin();
		Connect(this.U6.pins.IN6_0, B7);
		let B8 = new Pin();
		Connect(this.U6.pins.IN7_0, B8);
		let IGAB = new Pin();
		Connect(this.U6.pins.EN, IGAB);
		Connect(this.U6.pins.OUT0, B1_IO);
		Connect(this.U6.pins.OUT1, B2_IO);
		Connect(this.U6.pins.OUT2, B3_IO);
		Connect(this.U6.pins.OUT3, B4_IO);
		Connect(this.U6.pins.OUT4, B5_IO);
		Connect(this.U6.pins.OUT5, B6_IO);
		Connect(this.U6.pins.OUT6, B7_IO);
		Connect(this.U6.pins.OUT7, B8_IO);
		this.UHC651LOG = new logicexp(['GBABAR_I','GAB_I','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1','QA2','QA3','QA4','QA5','QA6','QA7','QA8','QB1','QB2','QB3','QB4','QB5','QB6','QB7','QB8'], ['GBABAR','GAB','CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_O','A2_O','A3_O','A4_O','A5_O','A6_O','A7_O','A8_O','B1_O','B2_O','B3_O','B4_O','B5_O','B6_O','B7_O','B8_O','IGAB','IGBABAR'], []).Logic('   GBABAR =  GBABAR_I ;   GAB =  GAB_I ;   CBA =  CBA_I ;   SBA =  SBA_I ;   CAB =  CAB_I ;   SAB =  SAB_I ;   A1 =  A1_B ;   A2 =  A2_B ;   A3 =  A3_B ;   A4 =  A4_B ;   A5 =  A5_B ;   A6 =  A6_B ;   A7 =  A7_B ;   A8 =  A8_B ;   B1 =  B1_B ;   B2 =  B2_B ;   B3 =  B3_B ;   B4 =  B4_B ;   B5 =  B5_B ;   B6 =  B6_B ;   B7 =  B7_B ;   B8 =  B8_B ;let    ISAB =  !SAB ;   ISAB =  !SAB ;let    ISBA =  !SBA ;   ISBA =  !SBA ;   IGAB =  !GAB ;   IGBABAR =  !GBABAR ;   A1_O =  !((SBA & QA1) | (ISBA & B1)) ;   A2_O =  !((SBA & QA2) | (ISBA & B2)) ;   A3_O =  !((SBA & QA3) | (ISBA & B3)) ;   A4_O =  !((SBA & QA4) | (ISBA & B4)) ;   A5_O =  !((SBA & QA5) | (ISBA & B5)) ;   A6_O =  !((SBA & QA6) | (ISBA & B6)) ;   A7_O =  !((SBA & QA7) | (ISBA & B7)) ;   A8_O =  !((SBA & QA8) | (ISBA & B8)) ;   B1_O =  !((SAB & QB1) | (ISAB & A1)) ;   B2_O =  !((SAB & QB2) | (ISAB & A2)) ;   B3_O =  !((SAB & QB3) | (ISAB & A3)) ;   B4_O =  !((SAB & QB4) | (ISAB & A4)) ;   B5_O =  !((SAB & QB5) | (ISAB & A5)) ;   B6_O =  !((SAB & QB6) | (ISAB & A6)) ;   B7_O =  !((SAB & QB7) | (ISAB & A7)) ;   B8_O =  !((SAB & QB8) | (ISAB & A8)) ;');
		Connect(this.UHC651LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.UHC651LOG.pins.GAB_I, this.pins.GAB_I);
		Connect(this.UHC651LOG.pins.CBA_I, this.pins.CBA_I);
		Connect(this.UHC651LOG.pins.SBA_I, this.pins.SBA_I);
		Connect(this.UHC651LOG.pins.CAB_I, this.pins.CAB_I);
		Connect(this.UHC651LOG.pins.SAB_I, this.pins.SAB_I);
		Connect(this.UHC651LOG.pins.A1_B, this.pins.A1_B);
		Connect(this.UHC651LOG.pins.A2_B, this.pins.A2_B);
		Connect(this.UHC651LOG.pins.A3_B, this.pins.A3_B);
		Connect(this.UHC651LOG.pins.A4_B, this.pins.A4_B);
		Connect(this.UHC651LOG.pins.A5_B, this.pins.A5_B);
		Connect(this.UHC651LOG.pins.A6_B, this.pins.A6_B);
		Connect(this.UHC651LOG.pins.A7_B, this.pins.A7_B);
		Connect(this.UHC651LOG.pins.A8_B, this.pins.A8_B);
		Connect(this.UHC651LOG.pins.B1_B, this.pins.B1_B);
		Connect(this.UHC651LOG.pins.B2_B, this.pins.B2_B);
		Connect(this.UHC651LOG.pins.B3_B, this.pins.B3_B);
		Connect(this.UHC651LOG.pins.B4_B, this.pins.B4_B);
		Connect(this.UHC651LOG.pins.B5_B, this.pins.B5_B);
		Connect(this.UHC651LOG.pins.B6_B, this.pins.B6_B);
		Connect(this.UHC651LOG.pins.B7_B, this.pins.B7_B);
		Connect(this.UHC651LOG.pins.B8_B, this.pins.B8_B);
		Connect(this.UHC651LOG.pins.QA1, QA1);
		Connect(this.UHC651LOG.pins.QA2, QA2);
		Connect(this.UHC651LOG.pins.QA3, QA3);
		Connect(this.UHC651LOG.pins.QA4, QA4);
		Connect(this.UHC651LOG.pins.QA5, QA5);
		Connect(this.UHC651LOG.pins.QA6, QA6);
		Connect(this.UHC651LOG.pins.QA7, QA7);
		Connect(this.UHC651LOG.pins.QA8, QA8);
		Connect(this.UHC651LOG.pins.QB1, QB1);
		Connect(this.UHC651LOG.pins.QB2, QB2);
		Connect(this.UHC651LOG.pins.QB3, QB3);
		Connect(this.UHC651LOG.pins.QB4, QB4);
		Connect(this.UHC651LOG.pins.QB5, QB5);
		Connect(this.UHC651LOG.pins.QB6, QB6);
		Connect(this.UHC651LOG.pins.QB7, QB7);
		Connect(this.UHC651LOG.pins.QB8, QB8);
		Connect(this.UHC651LOG.pins.GBABAR, GBABAR);
		Connect(this.UHC651LOG.pins.GAB, GAB);
		Connect(this.UHC651LOG.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.UHC651LOG.pins.SBA, SBA);
		Connect(this.UHC651LOG.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.UHC651LOG.pins.SAB, SAB);
		Connect(this.UHC651LOG.pins.A1, A1);
		Connect(this.UHC651LOG.pins.A2, A2);
		Connect(this.UHC651LOG.pins.A3, A3);
		Connect(this.UHC651LOG.pins.A4, A4);
		Connect(this.UHC651LOG.pins.A5, A5);
		Connect(this.UHC651LOG.pins.A6, A6);
		Connect(this.UHC651LOG.pins.A7, A7);
		Connect(this.UHC651LOG.pins.A8, A8);
		Connect(this.UHC651LOG.pins.B1, B1);
		Connect(this.UHC651LOG.pins.B2, B2);
		Connect(this.UHC651LOG.pins.B3, B3);
		Connect(this.UHC651LOG.pins.B4, B4);
		Connect(this.UHC651LOG.pins.B5, B5);
		Connect(this.UHC651LOG.pins.B6, B6);
		Connect(this.UHC651LOG.pins.B7, B7);
		Connect(this.UHC651LOG.pins.B8, B8);
		Connect(this.UHC651LOG.pins.A1_O, A1_O);
		Connect(this.UHC651LOG.pins.A2_O, A2_O);
		Connect(this.UHC651LOG.pins.A3_O, A3_O);
		Connect(this.UHC651LOG.pins.A4_O, A4_O);
		Connect(this.UHC651LOG.pins.A5_O, A5_O);
		Connect(this.UHC651LOG.pins.A6_O, A6_O);
		Connect(this.UHC651LOG.pins.A7_O, A7_O);
		Connect(this.UHC651LOG.pins.A8_O, A8_O);
		Connect(this.UHC651LOG.pins.B1_O, B1_O);
		Connect(this.UHC651LOG.pins.B2_O, B2_O);
		Connect(this.UHC651LOG.pins.B3_O, B3_O);
		Connect(this.UHC651LOG.pins.B4_O, B4_O);
		Connect(this.UHC651LOG.pins.B5_O, B5_O);
		Connect(this.UHC651LOG.pins.B6_O, B6_O);
		Connect(this.UHC651LOG.pins.B7_O, B7_O);
		Connect(this.UHC651LOG.pins.B8_O, B8_O);
		Connect(this.UHC651LOG.pins.IGAB, IGAB);
		Connect(this.UHC651LOG.pins.IGBABAR, IGBABAR);
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
class SN74HC652 extends Component {
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
		let QB1BAR = new Pin();
		Connect(this.U1.pins.QBAR0, QB1BAR);
		let QB2BAR = new Pin();
		Connect(this.U1.pins.QBAR1, QB2BAR);
		let QB3BAR = new Pin();
		Connect(this.U1.pins.QBAR2, QB3BAR);
		let QB4BAR = new Pin();
		Connect(this.U1.pins.QBAR3, QB4BAR);
		let QB5BAR = new Pin();
		Connect(this.U1.pins.QBAR4, QB5BAR);
		let QB6BAR = new Pin();
		Connect(this.U1.pins.QBAR5, QB6BAR);
		let QB7BAR = new Pin();
		Connect(this.U1.pins.QBAR6, QB7BAR);
		let QB8BAR = new Pin();
		Connect(this.U1.pins.QBAR7, QB8BAR);
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
		let QA1BAR = new Pin();
		Connect(this.U2.pins.QBAR0, QA1BAR);
		let QA2BAR = new Pin();
		Connect(this.U2.pins.QBAR1, QA2BAR);
		let QA3BAR = new Pin();
		Connect(this.U2.pins.QBAR2, QA3BAR);
		let QA4BAR = new Pin();
		Connect(this.U2.pins.QBAR3, QA4BAR);
		let QA5BAR = new Pin();
		Connect(this.U2.pins.QBAR4, QA5BAR);
		let QA6BAR = new Pin();
		Connect(this.U2.pins.QBAR5, QA6BAR);
		let QA7BAR = new Pin();
		Connect(this.U2.pins.QBAR6, QA7BAR);
		let QA8BAR = new Pin();
		Connect(this.U2.pins.QBAR7, QA8BAR);
		this.U3 = new buf3a(8);
		let A1_O = new Pin();
		Connect(this.U3.pins.IN0_0, A1_O);
		let A2_O = new Pin();
		Connect(this.U3.pins.IN1_0, A2_O);
		let A3_O = new Pin();
		Connect(this.U3.pins.IN2_0, A3_O);
		let A4_O = new Pin();
		Connect(this.U3.pins.IN3_0, A4_O);
		let A5_O = new Pin();
		Connect(this.U3.pins.IN4_0, A5_O);
		let A6_O = new Pin();
		Connect(this.U3.pins.IN5_0, A6_O);
		let A7_O = new Pin();
		Connect(this.U3.pins.IN6_0, A7_O);
		let A8_O = new Pin();
		Connect(this.U3.pins.IN7_0, A8_O);
		let IGBABAR = new Pin();
		Connect(this.U3.pins.EN, IGBABAR);
		Connect(this.U3.pins.OUT0, A1_IO);
		Connect(this.U3.pins.OUT1, A2_IO);
		Connect(this.U3.pins.OUT2, A3_IO);
		Connect(this.U3.pins.OUT3, A4_IO);
		Connect(this.U3.pins.OUT4, A5_IO);
		Connect(this.U3.pins.OUT5, A6_IO);
		Connect(this.U3.pins.OUT6, A7_IO);
		Connect(this.U3.pins.OUT7, A8_IO);
		this.U4 = new buf3a(8);
		let B1_O = new Pin();
		Connect(this.U4.pins.IN0_0, B1_O);
		let B2_O = new Pin();
		Connect(this.U4.pins.IN1_0, B2_O);
		let B3_O = new Pin();
		Connect(this.U4.pins.IN2_0, B3_O);
		let B4_O = new Pin();
		Connect(this.U4.pins.IN3_0, B4_O);
		let B5_O = new Pin();
		Connect(this.U4.pins.IN4_0, B5_O);
		let B6_O = new Pin();
		Connect(this.U4.pins.IN5_0, B6_O);
		let B7_O = new Pin();
		Connect(this.U4.pins.IN6_0, B7_O);
		let B8_O = new Pin();
		Connect(this.U4.pins.IN7_0, B8_O);
		let GAB = new Pin();
		Connect(this.U4.pins.EN, GAB);
		Connect(this.U4.pins.OUT0, B1_IO);
		Connect(this.U4.pins.OUT1, B2_IO);
		Connect(this.U4.pins.OUT2, B3_IO);
		Connect(this.U4.pins.OUT3, B4_IO);
		Connect(this.U4.pins.OUT4, B5_IO);
		Connect(this.U4.pins.OUT5, B6_IO);
		Connect(this.U4.pins.OUT6, B7_IO);
		Connect(this.U4.pins.OUT7, B8_IO);
		this.U5 = new buf3a(8);
		let A1 = new Pin();
		Connect(this.U5.pins.IN0_0, A1);
		let A2 = new Pin();
		Connect(this.U5.pins.IN1_0, A2);
		let A3 = new Pin();
		Connect(this.U5.pins.IN2_0, A3);
		let A4 = new Pin();
		Connect(this.U5.pins.IN3_0, A4);
		let A5 = new Pin();
		Connect(this.U5.pins.IN4_0, A5);
		let A6 = new Pin();
		Connect(this.U5.pins.IN5_0, A6);
		let A7 = new Pin();
		Connect(this.U5.pins.IN6_0, A7);
		let A8 = new Pin();
		Connect(this.U5.pins.IN7_0, A8);
		let GBABAR = new Pin();
		Connect(this.U5.pins.EN, GBABAR);
		Connect(this.U5.pins.OUT0, A1_IO);
		Connect(this.U5.pins.OUT1, A2_IO);
		Connect(this.U5.pins.OUT2, A3_IO);
		Connect(this.U5.pins.OUT3, A4_IO);
		Connect(this.U5.pins.OUT4, A5_IO);
		Connect(this.U5.pins.OUT5, A6_IO);
		Connect(this.U5.pins.OUT6, A7_IO);
		Connect(this.U5.pins.OUT7, A8_IO);
		this.U6 = new buf3a(8);
		let B1 = new Pin();
		Connect(this.U6.pins.IN0_0, B1);
		let B2 = new Pin();
		Connect(this.U6.pins.IN1_0, B2);
		let B3 = new Pin();
		Connect(this.U6.pins.IN2_0, B3);
		let B4 = new Pin();
		Connect(this.U6.pins.IN3_0, B4);
		let B5 = new Pin();
		Connect(this.U6.pins.IN4_0, B5);
		let B6 = new Pin();
		Connect(this.U6.pins.IN5_0, B6);
		let B7 = new Pin();
		Connect(this.U6.pins.IN6_0, B7);
		let B8 = new Pin();
		Connect(this.U6.pins.IN7_0, B8);
		let IGAB = new Pin();
		Connect(this.U6.pins.EN, IGAB);
		Connect(this.U6.pins.OUT0, B1_IO);
		Connect(this.U6.pins.OUT1, B2_IO);
		Connect(this.U6.pins.OUT2, B3_IO);
		Connect(this.U6.pins.OUT3, B4_IO);
		Connect(this.U6.pins.OUT4, B5_IO);
		Connect(this.U6.pins.OUT5, B6_IO);
		Connect(this.U6.pins.OUT6, B7_IO);
		Connect(this.U6.pins.OUT7, B8_IO);
		this.UHC652LOG = new logicexp(['GBABAR_I','GAB_I','CBA_I','SBA_I','CAB_I','SAB_I','A1_B','A2_B','A3_B','A4_B','A5_B','A6_B','A7_B','A8_B','B1_B','B2_B','B3_B','B4_B','B5_B','B6_B','B7_B','B8_B','QA1BAR','QA2BAR','QA3BAR','QA4BAR','QA5BAR','QA6BAR','QA7BAR','QA8BAR','QB1BAR','QB2BAR','QB3BAR','QB4BAR','QB5BAR','QB6BAR','QB7BAR','QB8BAR'], ['GBABAR','GAB','CBA','SBA','CAB','SAB','A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','A1_O','A2_O','A3_O','A4_O','A5_O','A6_O','A7_O','A8_O','B1_O','B2_O','B3_O','B4_O','B5_O','B6_O','B7_O','B8_O','IGAB','IGBABAR'], []).Logic('   GBABAR =  GBABAR_I ;   GAB =  GAB_I ;   CBA =  CBA_I ;   SBA =  SBA_I ;   CAB =  CAB_I ;   SAB =  SAB_I ;   A1 =  A1_B ;   A2 =  A2_B ;   A3 =  A3_B ;   A4 =  A4_B ;   A5 =  A5_B ;   A6 =  A6_B ;   A7 =  A7_B ;   A8 =  A8_B ;   B1 =  B1_B ;   B2 =  B2_B ;   B3 =  B3_B ;   B4 =  B4_B ;   B5 =  B5_B ;   B6 =  B6_B ;   B7 =  B7_B ;   B8 =  B8_B ;let    ISAB =  !SAB ;   ISAB =  !SAB ;let    ISBA =  !SBA ;   ISBA =  !SBA ;   IGAB =  !GAB ;   IGBABAR =  !GBABAR ;   A1_O =  !((SBA & QA1BAR) | (ISBA & !B1)) ;   A2_O =  !((SBA & QA2BAR) | (ISBA & !B2)) ;   A3_O =  !((SBA & QA3BAR) | (ISBA & !B3)) ;   A4_O =  !((SBA & QA4BAR) | (ISBA & !B4)) ;   A5_O =  !((SBA & QA5BAR) | (ISBA & !B5)) ;   A6_O =  !((SBA & QA6BAR) | (ISBA & !B6)) ;   A7_O =  !((SBA & QA7BAR) | (ISBA & !B7)) ;   A8_O =  !((SBA & QA8BAR) | (ISBA & !B8)) ;   B1_O =  !((SAB & QB1BAR) | (ISAB & !A1)) ;   B2_O =  !((SAB & QB2BAR) | (ISAB & !A2)) ;   B3_O =  !((SAB & QB3BAR) | (ISAB & !A3)) ;   B4_O =  !((SAB & QB4BAR) | (ISAB & !A4)) ;   B5_O =  !((SAB & QB5BAR) | (ISAB & !A5)) ;   B6_O =  !((SAB & QB6BAR) | (ISAB & !A6)) ;   B7_O =  !((SAB & QB7BAR) | (ISAB & !A7)) ;   B8_O =  !((SAB & QB8BAR) | (ISAB & !A8)) ;');
		Connect(this.UHC652LOG.pins.GBABAR_I, this.pins.GBABAR_I);
		Connect(this.UHC652LOG.pins.GAB_I, this.pins.GAB_I);
		Connect(this.UHC652LOG.pins.CBA_I, this.pins.CBA_I);
		Connect(this.UHC652LOG.pins.SBA_I, this.pins.SBA_I);
		Connect(this.UHC652LOG.pins.CAB_I, this.pins.CAB_I);
		Connect(this.UHC652LOG.pins.SAB_I, this.pins.SAB_I);
		Connect(this.UHC652LOG.pins.A1_B, this.pins.A1_B);
		Connect(this.UHC652LOG.pins.A2_B, this.pins.A2_B);
		Connect(this.UHC652LOG.pins.A3_B, this.pins.A3_B);
		Connect(this.UHC652LOG.pins.A4_B, this.pins.A4_B);
		Connect(this.UHC652LOG.pins.A5_B, this.pins.A5_B);
		Connect(this.UHC652LOG.pins.A6_B, this.pins.A6_B);
		Connect(this.UHC652LOG.pins.A7_B, this.pins.A7_B);
		Connect(this.UHC652LOG.pins.A8_B, this.pins.A8_B);
		Connect(this.UHC652LOG.pins.B1_B, this.pins.B1_B);
		Connect(this.UHC652LOG.pins.B2_B, this.pins.B2_B);
		Connect(this.UHC652LOG.pins.B3_B, this.pins.B3_B);
		Connect(this.UHC652LOG.pins.B4_B, this.pins.B4_B);
		Connect(this.UHC652LOG.pins.B5_B, this.pins.B5_B);
		Connect(this.UHC652LOG.pins.B6_B, this.pins.B6_B);
		Connect(this.UHC652LOG.pins.B7_B, this.pins.B7_B);
		Connect(this.UHC652LOG.pins.B8_B, this.pins.B8_B);
		Connect(this.UHC652LOG.pins.QA1BAR, QA1BAR);
		Connect(this.UHC652LOG.pins.QA2BAR, QA2BAR);
		Connect(this.UHC652LOG.pins.QA3BAR, QA3BAR);
		Connect(this.UHC652LOG.pins.QA4BAR, QA4BAR);
		Connect(this.UHC652LOG.pins.QA5BAR, QA5BAR);
		Connect(this.UHC652LOG.pins.QA6BAR, QA6BAR);
		Connect(this.UHC652LOG.pins.QA7BAR, QA7BAR);
		Connect(this.UHC652LOG.pins.QA8BAR, QA8BAR);
		Connect(this.UHC652LOG.pins.QB1BAR, QB1BAR);
		Connect(this.UHC652LOG.pins.QB2BAR, QB2BAR);
		Connect(this.UHC652LOG.pins.QB3BAR, QB3BAR);
		Connect(this.UHC652LOG.pins.QB4BAR, QB4BAR);
		Connect(this.UHC652LOG.pins.QB5BAR, QB5BAR);
		Connect(this.UHC652LOG.pins.QB6BAR, QB6BAR);
		Connect(this.UHC652LOG.pins.QB7BAR, QB7BAR);
		Connect(this.UHC652LOG.pins.QB8BAR, QB8BAR);
		Connect(this.UHC652LOG.pins.GBABAR, GBABAR);
		Connect(this.UHC652LOG.pins.GAB, GAB);
		Connect(this.UHC652LOG.pins.CBA, CBA);
		let SBA = new Pin();
		Connect(this.UHC652LOG.pins.SBA, SBA);
		Connect(this.UHC652LOG.pins.CAB, CAB);
		let SAB = new Pin();
		Connect(this.UHC652LOG.pins.SAB, SAB);
		Connect(this.UHC652LOG.pins.A1, A1);
		Connect(this.UHC652LOG.pins.A2, A2);
		Connect(this.UHC652LOG.pins.A3, A3);
		Connect(this.UHC652LOG.pins.A4, A4);
		Connect(this.UHC652LOG.pins.A5, A5);
		Connect(this.UHC652LOG.pins.A6, A6);
		Connect(this.UHC652LOG.pins.A7, A7);
		Connect(this.UHC652LOG.pins.A8, A8);
		Connect(this.UHC652LOG.pins.B1, B1);
		Connect(this.UHC652LOG.pins.B2, B2);
		Connect(this.UHC652LOG.pins.B3, B3);
		Connect(this.UHC652LOG.pins.B4, B4);
		Connect(this.UHC652LOG.pins.B5, B5);
		Connect(this.UHC652LOG.pins.B6, B6);
		Connect(this.UHC652LOG.pins.B7, B7);
		Connect(this.UHC652LOG.pins.B8, B8);
		Connect(this.UHC652LOG.pins.A1_O, A1_O);
		Connect(this.UHC652LOG.pins.A2_O, A2_O);
		Connect(this.UHC652LOG.pins.A3_O, A3_O);
		Connect(this.UHC652LOG.pins.A4_O, A4_O);
		Connect(this.UHC652LOG.pins.A5_O, A5_O);
		Connect(this.UHC652LOG.pins.A6_O, A6_O);
		Connect(this.UHC652LOG.pins.A7_O, A7_O);
		Connect(this.UHC652LOG.pins.A8_O, A8_O);
		Connect(this.UHC652LOG.pins.B1_O, B1_O);
		Connect(this.UHC652LOG.pins.B2_O, B2_O);
		Connect(this.UHC652LOG.pins.B3_O, B3_O);
		Connect(this.UHC652LOG.pins.B4_O, B4_O);
		Connect(this.UHC652LOG.pins.B5_O, B5_O);
		Connect(this.UHC652LOG.pins.B6_O, B6_O);
		Connect(this.UHC652LOG.pins.B7_O, B7_O);
		Connect(this.UHC652LOG.pins.B8_O, B8_O);
		Connect(this.UHC652LOG.pins.IGAB, IGAB);
		Connect(this.UHC652LOG.pins.IGBABAR, IGBABAR);
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
 * REGISTER FILES 4X4 WITH 3-STATE OUTPUTS
 */
class SN74HC670 extends Component {
	constructor() {
		super();
		this.pins = {
			WEBAR_I: new Pin(),
			REBAR_I: new Pin(),
			WA_I: new Pin(),
			WB_I: new Pin(),
			RA_I: new Pin(),
			RB_I: new Pin(),
			D0_I: new Pin(),
			D1_I: new Pin(),
			D2_I: new Pin(),
			D3_I: new Pin(),
			Q0_O: new Pin(),
			Q1_O: new Pin(),
			Q2_O: new Pin(),
			Q3_O: new Pin(),
		}
		this.UA = new dltch(4);
		Connect(this.UA.pins.PRESET, _D_HI);
		Connect(this.UA.pins.CLEAR, _D_HI);
		let GATEA = new Pin();
		Connect(this.UA.pins.GATE, GATEA);
		let D0 = new Pin();
		Connect(this.UA.pins.D0, D0);
		let D1 = new Pin();
		Connect(this.UA.pins.D1, D1);
		let D2 = new Pin();
		Connect(this.UA.pins.D2, D2);
		let D3 = new Pin();
		Connect(this.UA.pins.D3, D3);
		let AQ0 = new Pin();
		Connect(this.UA.pins.Q0, AQ0);
		let AQ1 = new Pin();
		Connect(this.UA.pins.Q1, AQ1);
		let AQ2 = new Pin();
		Connect(this.UA.pins.Q2, AQ2);
		let AQ3 = new Pin();
		Connect(this.UA.pins.Q3, AQ3);
		let _D_NC = new Pin();
		Connect(this.UA.pins.QBAR0, _D_NC);
		Connect(this.UA.pins.QBAR1, _D_NC);
		Connect(this.UA.pins.QBAR2, _D_NC);
		Connect(this.UA.pins.QBAR3, _D_NC);
		this.UB = new dltch(4);
		Connect(this.UB.pins.PRESET, _D_HI);
		Connect(this.UB.pins.CLEAR, _D_HI);
		let GATEB = new Pin();
		Connect(this.UB.pins.GATE, GATEB);
		Connect(this.UB.pins.D0, D0);
		Connect(this.UB.pins.D1, D1);
		Connect(this.UB.pins.D2, D2);
		Connect(this.UB.pins.D3, D3);
		let BQ0 = new Pin();
		Connect(this.UB.pins.Q0, BQ0);
		let BQ1 = new Pin();
		Connect(this.UB.pins.Q1, BQ1);
		let BQ2 = new Pin();
		Connect(this.UB.pins.Q2, BQ2);
		let BQ3 = new Pin();
		Connect(this.UB.pins.Q3, BQ3);
		Connect(this.UB.pins.QBAR0, _D_NC);
		Connect(this.UB.pins.QBAR1, _D_NC);
		Connect(this.UB.pins.QBAR2, _D_NC);
		Connect(this.UB.pins.QBAR3, _D_NC);
		this.UC = new dltch(4);
		Connect(this.UC.pins.PRESET, _D_HI);
		Connect(this.UC.pins.CLEAR, _D_HI);
		let GATEC = new Pin();
		Connect(this.UC.pins.GATE, GATEC);
		Connect(this.UC.pins.D0, D0);
		Connect(this.UC.pins.D1, D1);
		Connect(this.UC.pins.D2, D2);
		Connect(this.UC.pins.D3, D3);
		let CQ0 = new Pin();
		Connect(this.UC.pins.Q0, CQ0);
		let CQ1 = new Pin();
		Connect(this.UC.pins.Q1, CQ1);
		let CQ2 = new Pin();
		Connect(this.UC.pins.Q2, CQ2);
		let CQ3 = new Pin();
		Connect(this.UC.pins.Q3, CQ3);
		Connect(this.UC.pins.QBAR0, _D_NC);
		Connect(this.UC.pins.QBAR1, _D_NC);
		Connect(this.UC.pins.QBAR2, _D_NC);
		Connect(this.UC.pins.QBAR3, _D_NC);
		this.UD = new dltch(4);
		Connect(this.UD.pins.PRESET, _D_HI);
		Connect(this.UD.pins.CLEAR, _D_HI);
		let GATED = new Pin();
		Connect(this.UD.pins.GATE, GATED);
		Connect(this.UD.pins.D0, D0);
		Connect(this.UD.pins.D1, D1);
		Connect(this.UD.pins.D2, D2);
		Connect(this.UD.pins.D3, D3);
		let DQ0 = new Pin();
		Connect(this.UD.pins.Q0, DQ0);
		let DQ1 = new Pin();
		Connect(this.UD.pins.Q1, DQ1);
		let DQ2 = new Pin();
		Connect(this.UD.pins.Q2, DQ2);
		let DQ3 = new Pin();
		Connect(this.UD.pins.Q3, DQ3);
		Connect(this.UD.pins.QBAR0, _D_NC);
		Connect(this.UD.pins.QBAR1, _D_NC);
		Connect(this.UD.pins.QBAR2, _D_NC);
		Connect(this.UD.pins.QBAR3, _D_NC);
		this.UHC670LOG = new logicexp(['WEBAR_I','REBAR_I','WA_I','WB_I','RA_I','RB_I','D0_I','D1_I','D2_I','D3_I','AQ0','AQ1','AQ2','AQ3','BQ0','BQ1','BQ2','BQ3','CQ0','CQ1','CQ2','CQ3','DQ0','DQ1','DQ2','DQ3'], ['WEBAR','REBAR','WA','WB','RA','RB','D0','D1','D2','D3','GATEA','GATEB','GATEC','GATED','Q0','Q1','Q2','Q3'], []).Logic('   WEBAR   =  WEBAR_I ;   REBAR   =  REBAR_I ;   WA      =  WA_I ;   WB      =  WB_I ;   RA      =  RA_I ;   RB      =  RB_I ;   D0      =  D0_I ;   D1      =  D1_I ;   D2      =  D2_I ;   D3      =  D3_I ;let    ENABLE2 =  !(WEBAR | WB) ;   ENABLE2 =  !(WEBAR | WB) ;let    ENABLE1 =  !(WEBAR | ENABLE2) ;   ENABLE1 =  !(WEBAR | ENABLE2) ;   GATEA   =  ENABLE2 & !WA ;   GATEB   =  ENABLE2 &  WA ;   GATEC   =  ENABLE1 & !WA ;   GATED   =  ENABLE1 &  WA ;   Q0      =  (AQ0 & !RA & !RB) |               (BQ0 &  RA & !RB) |               (CQ0 & !RA &  RB) |               (DQ0 &  RA &  RB)             ;   Q1      =  (AQ1 & !RA & !RB) |               (BQ1 &  RA & !RB) |               (CQ1 & !RA &  RB) |               (DQ1 &  RA &  RB)             ;   Q2      =  (AQ2 & !RA & !RB) |               (BQ2 &  RA & !RB) |               (CQ2 & !RA &  RB) |               (DQ2 &  RA &  RB)             ;   Q3      =  (AQ3 & !RA & !RB) |               (BQ3 &  RA & !RB) |               (CQ3 & !RA &  RB) |               (DQ3 &  RA &  RB)             ;');
		Connect(this.UHC670LOG.pins.WEBAR_I, this.pins.WEBAR_I);
		Connect(this.UHC670LOG.pins.REBAR_I, this.pins.REBAR_I);
		Connect(this.UHC670LOG.pins.WA_I, this.pins.WA_I);
		Connect(this.UHC670LOG.pins.WB_I, this.pins.WB_I);
		Connect(this.UHC670LOG.pins.RA_I, this.pins.RA_I);
		Connect(this.UHC670LOG.pins.RB_I, this.pins.RB_I);
		Connect(this.UHC670LOG.pins.D0_I, this.pins.D0_I);
		Connect(this.UHC670LOG.pins.D1_I, this.pins.D1_I);
		Connect(this.UHC670LOG.pins.D2_I, this.pins.D2_I);
		Connect(this.UHC670LOG.pins.D3_I, this.pins.D3_I);
		Connect(this.UHC670LOG.pins.AQ0, AQ0);
		Connect(this.UHC670LOG.pins.AQ1, AQ1);
		Connect(this.UHC670LOG.pins.AQ2, AQ2);
		Connect(this.UHC670LOG.pins.AQ3, AQ3);
		Connect(this.UHC670LOG.pins.BQ0, BQ0);
		Connect(this.UHC670LOG.pins.BQ1, BQ1);
		Connect(this.UHC670LOG.pins.BQ2, BQ2);
		Connect(this.UHC670LOG.pins.BQ3, BQ3);
		Connect(this.UHC670LOG.pins.CQ0, CQ0);
		Connect(this.UHC670LOG.pins.CQ1, CQ1);
		Connect(this.UHC670LOG.pins.CQ2, CQ2);
		Connect(this.UHC670LOG.pins.CQ3, CQ3);
		Connect(this.UHC670LOG.pins.DQ0, DQ0);
		Connect(this.UHC670LOG.pins.DQ1, DQ1);
		Connect(this.UHC670LOG.pins.DQ2, DQ2);
		Connect(this.UHC670LOG.pins.DQ3, DQ3);
		let WEBAR = new Pin();
		Connect(this.UHC670LOG.pins.WEBAR, WEBAR);
		let REBAR = new Pin();
		Connect(this.UHC670LOG.pins.REBAR, REBAR);
		let WA = new Pin();
		Connect(this.UHC670LOG.pins.WA, WA);
		let WB = new Pin();
		Connect(this.UHC670LOG.pins.WB, WB);
		let RA = new Pin();
		Connect(this.UHC670LOG.pins.RA, RA);
		let RB = new Pin();
		Connect(this.UHC670LOG.pins.RB, RB);
		Connect(this.UHC670LOG.pins.D0, D0);
		Connect(this.UHC670LOG.pins.D1, D1);
		Connect(this.UHC670LOG.pins.D2, D2);
		Connect(this.UHC670LOG.pins.D3, D3);
		Connect(this.UHC670LOG.pins.GATEA, GATEA);
		Connect(this.UHC670LOG.pins.GATEB, GATEB);
		Connect(this.UHC670LOG.pins.GATEC, GATEC);
		Connect(this.UHC670LOG.pins.GATED, GATED);
		let Q0 = new Pin();
		Connect(this.UHC670LOG.pins.Q0, Q0);
		let Q1 = new Pin();
		Connect(this.UHC670LOG.pins.Q1, Q1);
		let Q2 = new Pin();
		Connect(this.UHC670LOG.pins.Q2, Q2);
		let Q3 = new Pin();
		Connect(this.UHC670LOG.pins.Q3, Q3);
		Connect(Q0, this.pins.Q0_O);
		Connect(Q1, this.pins.Q1_O);
		Connect(Q2, this.pins.Q2_O);
		Connect(Q3, this.pins.Q3_O);
	}
}
/**
 * 12-BIT ADDRESS COMPARATORS
 */
class SN74HC677 extends Component {
	constructor() {
		super();
		this.pins = {
			A1_I: new Pin(),
			A2_I: new Pin(),
			A3_I: new Pin(),
			A4_I: new Pin(),
			A5_I: new Pin(),
			A6_I: new Pin(),
			A7_I: new Pin(),
			A8_I: new Pin(),
			A9_I: new Pin(),
			A10_I: new Pin(),
			A11_I: new Pin(),
			A12_I: new Pin(),
			A13_I: new Pin(),
			A14_I: new Pin(),
			A15_I: new Pin(),
			A16_I: new Pin(),
			GBAR_I: new Pin(),
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Y_O: new Pin(),
		}
		this.UHC677LOG = new logicexp(['A1_I','A2_I','A3_I','A4_I','A5_I','A6_I','A7_I','A8_I','A9_I','A10_I','A11_I','A12_I','A13_I','A14_I','A15_I','A16_I','P0_I','P1_I','P2_I','P3_I','GBAR_I'], ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','A14','A15','A16','P0','P1','P2','P3','GBAR','Y'], []).Logic('   A1   =  A1_I ;   A2   =  A2_I ;   A3   =  A3_I ;   A4   =  A4_I ;   A5   =  A5_I ;   A6   =  A6_I ;   A7   =  A7_I ;   A8   =  A8_I ;   A9   =  A9_I ;   A10  =  A10_I ;   A11  =  A11_I ;   A12  =  A12_I ;   A13  =  A13_I ;   A14  =  A14_I ;   A15  =  A15_I ;   A16  =  A16_I ;   P0   =  P0_I ;   P1   =  P1_I ;   P2   =  P2_I ;   P3   =  P3_I ;   GBAR =  GBAR_I ;let    P0BAR =  !P0 ;   P0BAR =  !P0 ;let    P1BAR =  !P1 ;   P1BAR =  !P1 ;let    P2BAR =  !P2 ;   P2BAR =  !P2 ;let    P3BAR =  !P3 ;   P3BAR =  !P3 ;let    ZERO  =  P2BAR & P1BAR & P0BAR ;   ZERO  =  P2BAR & P1BAR & P0BAR ;let    ONE   =  P2BAR & P1BAR & P0 ;   ONE   =  P2BAR & P1BAR & P0 ;let    TWO   =  P2BAR & P1 & P0BAR ;   TWO   =  P2BAR & P1 & P0BAR ;let    THREE =  P2BAR & P1 & P0 ;   THREE =  P2BAR & P1 & P0 ;let    FOUR  =  P2 & P1BAR & P0BAR ;   FOUR  =  P2 & P1BAR & P0BAR ;let    FIVE  =  P2 & P1BAR & P0 ;   FIVE  =  P2 & P1BAR & P0 ;let    SIX   =  P2 & P1 & P0BAR ;   SIX   =  P2 & P1 & P0BAR ;let    SEVEN =  P2 & P1 & P0 ;   SEVEN =  P2 & P1 & P0 ;let    OUT1  =  !(P3BAR & ZERO) ;   OUT1  =  !(P3BAR & ZERO) ;let    OUT2  =  !(P3BAR & ONE) & OUT1 ;   OUT2  =  !(P3BAR & ONE) & OUT1 ;let    OUT3  =  !(P3BAR & TWO) & OUT2 ;   OUT3  =  !(P3BAR & TWO) & OUT2 ;let    OUT4  =  !(P3BAR & THREE) & OUT3 ;   OUT4  =  !(P3BAR & THREE) & OUT3 ;let    OUT5  =  !(P3BAR & FOUR) & OUT4 ;   OUT5  =  !(P3BAR & FOUR) & OUT4 ;let    OUT6  =  !(P3BAR & FIVE) & OUT5 ;   OUT6  =  !(P3BAR & FIVE) & OUT5 ;let    OUT7  =  !(P3BAR & SIX) & OUT6 ;   OUT7  =  !(P3BAR & SIX) & OUT6 ;let    OUT8  =  !(P3BAR & SEVEN) & OUT7 ;   OUT8  =  !(P3BAR & SEVEN) & OUT7 ;let    OUT9  =  !(P3 & ZERO) & P3 & OUT8 ;   OUT9  =  !(P3 & ZERO) & P3 & OUT8 ;let    OUT10 =  !(P3 & ONE) & OUT9 ;   OUT10 =  !(P3 & ONE) & OUT9 ;let    OUT11 =  !(P3 & TWO) & OUT10 ;   OUT11 =  !(P3 & TWO) & OUT10 ;let    OUT12 =  !(P3 & THREE) & OUT11 ;   OUT12 =  !(P3 & THREE) & OUT11 ;let    OUT13 =  !(P3 & FOUR) & OUT12 ;   OUT13 =  !(P3 & FOUR) & OUT12 ;let    OUT14 =  !(P3 & FIVE) & OUT13 ;   OUT14 =  !(P3 & FIVE) & OUT13 ;let    OUT15 =  !(P3 & SIX) & OUT14 ;   OUT15 =  !(P3 & SIX) & OUT14 ;let    AND1_2   =  !GBAR & (OUT1 ^ A1) & (OUT2 ^ A2) ;   AND1_2   =  !GBAR & (OUT1 ^ A1) & (OUT2 ^ A2) ;let    AND3_5   =  (OUT3 ^ A3) & (OUT4 ^ A4) & (OUT5 ^ A5) ;   AND3_5   =  (OUT3 ^ A3) & (OUT4 ^ A4) & (OUT5 ^ A5) ;let    AND6_8   =  (OUT6 ^ A6) & (OUT7 ^ A7) & (OUT8 ^ A8) ;   AND6_8   =  (OUT6 ^ A6) & (OUT7 ^ A7) & (OUT8 ^ A8) ;let    AND9_11  =  (OUT9 ^ A9) & (OUT10 ^ A10) & (OUT11 ^ A11) ;   AND9_11  =  (OUT9 ^ A9) & (OUT10 ^ A10) & (OUT11 ^ A11) ;let    AND12_14 =  (OUT12 ^ A12) & (OUT13 ^ A13) & (OUT14 ^ A14) ;   AND12_14 =  (OUT12 ^ A12) & (OUT13 ^ A13) & (OUT14 ^ A14) ;let    AND15_16 =  (OUT15 ^ A15) & A16 ;   AND15_16 =  (OUT15 ^ A15) & A16 ;   Y =  !(AND1_2 & AND3_5 & AND6_8 & AND9_11 & AND12_14 & AND15_16) ;');
		Connect(this.UHC677LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.UHC677LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.UHC677LOG.pins.A3_I, this.pins.A3_I);
		Connect(this.UHC677LOG.pins.A4_I, this.pins.A4_I);
		Connect(this.UHC677LOG.pins.A5_I, this.pins.A5_I);
		Connect(this.UHC677LOG.pins.A6_I, this.pins.A6_I);
		Connect(this.UHC677LOG.pins.A7_I, this.pins.A7_I);
		Connect(this.UHC677LOG.pins.A8_I, this.pins.A8_I);
		Connect(this.UHC677LOG.pins.A9_I, this.pins.A9_I);
		Connect(this.UHC677LOG.pins.A10_I, this.pins.A10_I);
		Connect(this.UHC677LOG.pins.A11_I, this.pins.A11_I);
		Connect(this.UHC677LOG.pins.A12_I, this.pins.A12_I);
		Connect(this.UHC677LOG.pins.A13_I, this.pins.A13_I);
		Connect(this.UHC677LOG.pins.A14_I, this.pins.A14_I);
		Connect(this.UHC677LOG.pins.A15_I, this.pins.A15_I);
		Connect(this.UHC677LOG.pins.A16_I, this.pins.A16_I);
		Connect(this.UHC677LOG.pins.P0_I, this.pins.P0_I);
		Connect(this.UHC677LOG.pins.P1_I, this.pins.P1_I);
		Connect(this.UHC677LOG.pins.P2_I, this.pins.P2_I);
		Connect(this.UHC677LOG.pins.P3_I, this.pins.P3_I);
		Connect(this.UHC677LOG.pins.GBAR_I, this.pins.GBAR_I);
		let A1 = new Pin();
		Connect(this.UHC677LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC677LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.UHC677LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.UHC677LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.UHC677LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.UHC677LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.UHC677LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.UHC677LOG.pins.A8, A8);
		let A9 = new Pin();
		Connect(this.UHC677LOG.pins.A9, A9);
		let A10 = new Pin();
		Connect(this.UHC677LOG.pins.A10, A10);
		let A11 = new Pin();
		Connect(this.UHC677LOG.pins.A11, A11);
		let A12 = new Pin();
		Connect(this.UHC677LOG.pins.A12, A12);
		let A13 = new Pin();
		Connect(this.UHC677LOG.pins.A13, A13);
		let A14 = new Pin();
		Connect(this.UHC677LOG.pins.A14, A14);
		let A15 = new Pin();
		Connect(this.UHC677LOG.pins.A15, A15);
		let A16 = new Pin();
		Connect(this.UHC677LOG.pins.A16, A16);
		let P0 = new Pin();
		Connect(this.UHC677LOG.pins.P0, P0);
		let P1 = new Pin();
		Connect(this.UHC677LOG.pins.P1, P1);
		let P2 = new Pin();
		Connect(this.UHC677LOG.pins.P2, P2);
		let P3 = new Pin();
		Connect(this.UHC677LOG.pins.P3, P3);
		let GBAR = new Pin();
		Connect(this.UHC677LOG.pins.GBAR, GBAR);
		let Y = new Pin();
		Connect(this.UHC677LOG.pins.Y, Y);
		Connect(Y, this.pins.Y_O);
	}
}
/**
 * 12-BIT ADDRESS COMPARATORS
 */
class SN74HC678 extends Component {
	constructor() {
		super();
		this.pins = {
			A1_I: new Pin(),
			A2_I: new Pin(),
			A3_I: new Pin(),
			A4_I: new Pin(),
			A5_I: new Pin(),
			A6_I: new Pin(),
			A7_I: new Pin(),
			A8_I: new Pin(),
			A9_I: new Pin(),
			A10_I: new Pin(),
			A11_I: new Pin(),
			A12_I: new Pin(),
			A13_I: new Pin(),
			A14_I: new Pin(),
			A15_I: new Pin(),
			A16_I: new Pin(),
			C_I: new Pin(),
			P3_I: new Pin(),
			P2_I: new Pin(),
			P1_I: new Pin(),
			P0_I: new Pin(),
			Y_O: new Pin(),
		}
		this.UHC678LOG = new logicexp(['A1_I','A2_I','A3_I','A4_I','A5_I','A6_I','A7_I','A8_I','A9_I','A10_I','A11_I','A12_I','A13_I','A14_I','A15_I','A16_I','P0_I','P1_I','P2_I','P3_I','C_I'], ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','A14','A15','A16','P0','P1','P2','P3','C','DY'], []).Logic('   A1   =  A1_I ;   A2   =  A2_I ;   A3   =  A3_I ;   A4   =  A4_I ;   A5   =  A5_I ;   A6   =  A6_I ;   A7   =  A7_I ;   A8   =  A8_I ;   A9   =  A9_I ;   A10  =  A10_I ;   A11  =  A11_I ;   A12  =  A12_I ;   A13  =  A13_I ;   A14  =  A14_I ;   A15  =  A15_I ;   A16  =  A16_I ;   P0   =  P0_I ;   P1   =  P1_I ;   P2   =  P2_I ;   P3   =  P3_I ;   C =  C_I ;let    P0BAR =  !P0 ;   P0BAR =  !P0 ;let    P1BAR =  !P1 ;   P1BAR =  !P1 ;let    P2BAR =  !P2 ;   P2BAR =  !P2 ;let    P3BAR =  !P3 ;   P3BAR =  !P3 ;let    ZERO  =  P2BAR & P1BAR & P0BAR ;   ZERO  =  P2BAR & P1BAR & P0BAR ;let    ONE   =  P2BAR & P1BAR & P0 ;   ONE   =  P2BAR & P1BAR & P0 ;let    TWO   =  P2BAR & P1 & P0BAR ;   TWO   =  P2BAR & P1 & P0BAR ;let    THREE =  P2BAR & P1 & P0 ;   THREE =  P2BAR & P1 & P0 ;let    FOUR  =  P2 & P1BAR & P0BAR ;   FOUR  =  P2 & P1BAR & P0BAR ;let    FIVE  =  P2 & P1BAR & P0 ;   FIVE  =  P2 & P1BAR & P0 ;let    SIX   =  P2 & P1 & P0BAR ;   SIX   =  P2 & P1 & P0BAR ;let    SEVEN =  P2 & P1 & P0 ;   SEVEN =  P2 & P1 & P0 ;let    OUT1  =  !(P3BAR & ZERO) ;   OUT1  =  !(P3BAR & ZERO) ;let    OUT2  =  !(P3BAR & ONE) & OUT1 ;   OUT2  =  !(P3BAR & ONE) & OUT1 ;let    OUT3  =  !(P3BAR & TWO) & OUT2 ;   OUT3  =  !(P3BAR & TWO) & OUT2 ;let    OUT4  =  !(P3BAR & THREE) & OUT3 ;   OUT4  =  !(P3BAR & THREE) & OUT3 ;let    OUT5  =  !(P3BAR & FOUR) & OUT4 ;   OUT5  =  !(P3BAR & FOUR) & OUT4 ;let    OUT6  =  !(P3BAR & FIVE) & OUT5 ;   OUT6  =  !(P3BAR & FIVE) & OUT5 ;let    OUT7  =  !(P3BAR & SIX) & OUT6 ;   OUT7  =  !(P3BAR & SIX) & OUT6 ;let    OUT8  =  !(P3BAR & SEVEN) & OUT7 ;   OUT8  =  !(P3BAR & SEVEN) & OUT7 ;let    OUT9  =  !(P3 & ZERO) & P3 & OUT8 ;   OUT9  =  !(P3 & ZERO) & P3 & OUT8 ;let    OUT10 =  !(P3 & ONE) & OUT9 ;   OUT10 =  !(P3 & ONE) & OUT9 ;let    OUT11 =  !(P3 & TWO) & OUT10 ;   OUT11 =  !(P3 & TWO) & OUT10 ;let    OUT12 =  !(P3 & THREE) & OUT11 ;   OUT12 =  !(P3 & THREE) & OUT11 ;let    OUT13 =  !(P3 & FOUR) & OUT12 ;   OUT13 =  !(P3 & FOUR) & OUT12 ;let    OUT14 =  !(P3 & FIVE) & OUT13 ;   OUT14 =  !(P3 & FIVE) & OUT13 ;let    OUT15 =  !(P3 & SIX) & OUT14 ;   OUT15 =  !(P3 & SIX) & OUT14 ;let    AND1_2   =  (OUT1 ^ A1) & (OUT2 ^ A2) ;   AND1_2   =  (OUT1 ^ A1) & (OUT2 ^ A2) ;let    AND3_5   =  (OUT3 ^ A3) & (OUT4 ^ A4) & (OUT5 ^ A5) ;   AND3_5   =  (OUT3 ^ A3) & (OUT4 ^ A4) & (OUT5 ^ A5) ;let    AND6_8   =  (OUT6 ^ A6) & (OUT7 ^ A7) & (OUT8 ^ A8) ;   AND6_8   =  (OUT6 ^ A6) & (OUT7 ^ A7) & (OUT8 ^ A8) ;let    AND9_11  =  (OUT9 ^ A9) & (OUT10 ^ A10) & (OUT11 ^ A11) ;   AND9_11  =  (OUT9 ^ A9) & (OUT10 ^ A10) & (OUT11 ^ A11) ;let    AND12_14 =  (OUT12 ^ A12) & (OUT13 ^ A13) & (OUT14 ^ A14) ;   AND12_14 =  (OUT12 ^ A12) & (OUT13 ^ A13) & (OUT14 ^ A14) ;let    AND15_16 =  (OUT15 ^ A15) & A16 ;   AND15_16 =  (OUT15 ^ A15) & A16 ;   DY =  (AND1_2 & AND3_5 & AND6_8 & AND9_11 & AND12_14 & AND15_16) ;');
		Connect(this.UHC678LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.UHC678LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.UHC678LOG.pins.A3_I, this.pins.A3_I);
		Connect(this.UHC678LOG.pins.A4_I, this.pins.A4_I);
		Connect(this.UHC678LOG.pins.A5_I, this.pins.A5_I);
		Connect(this.UHC678LOG.pins.A6_I, this.pins.A6_I);
		Connect(this.UHC678LOG.pins.A7_I, this.pins.A7_I);
		Connect(this.UHC678LOG.pins.A8_I, this.pins.A8_I);
		Connect(this.UHC678LOG.pins.A9_I, this.pins.A9_I);
		Connect(this.UHC678LOG.pins.A10_I, this.pins.A10_I);
		Connect(this.UHC678LOG.pins.A11_I, this.pins.A11_I);
		Connect(this.UHC678LOG.pins.A12_I, this.pins.A12_I);
		Connect(this.UHC678LOG.pins.A13_I, this.pins.A13_I);
		Connect(this.UHC678LOG.pins.A14_I, this.pins.A14_I);
		Connect(this.UHC678LOG.pins.A15_I, this.pins.A15_I);
		Connect(this.UHC678LOG.pins.A16_I, this.pins.A16_I);
		Connect(this.UHC678LOG.pins.P0_I, this.pins.P0_I);
		Connect(this.UHC678LOG.pins.P1_I, this.pins.P1_I);
		Connect(this.UHC678LOG.pins.P2_I, this.pins.P2_I);
		Connect(this.UHC678LOG.pins.P3_I, this.pins.P3_I);
		Connect(this.UHC678LOG.pins.C_I, this.pins.C_I);
		let A1 = new Pin();
		Connect(this.UHC678LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC678LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.UHC678LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.UHC678LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.UHC678LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.UHC678LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.UHC678LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.UHC678LOG.pins.A8, A8);
		let A9 = new Pin();
		Connect(this.UHC678LOG.pins.A9, A9);
		let A10 = new Pin();
		Connect(this.UHC678LOG.pins.A10, A10);
		let A11 = new Pin();
		Connect(this.UHC678LOG.pins.A11, A11);
		let A12 = new Pin();
		Connect(this.UHC678LOG.pins.A12, A12);
		let A13 = new Pin();
		Connect(this.UHC678LOG.pins.A13, A13);
		let A14 = new Pin();
		Connect(this.UHC678LOG.pins.A14, A14);
		let A15 = new Pin();
		Connect(this.UHC678LOG.pins.A15, A15);
		let A16 = new Pin();
		Connect(this.UHC678LOG.pins.A16, A16);
		let P0 = new Pin();
		Connect(this.UHC678LOG.pins.P0, P0);
		let P1 = new Pin();
		Connect(this.UHC678LOG.pins.P1, P1);
		let P2 = new Pin();
		Connect(this.UHC678LOG.pins.P2, P2);
		let P3 = new Pin();
		Connect(this.UHC678LOG.pins.P3, P3);
		let C = new Pin();
		Connect(this.UHC678LOG.pins.C, C);
		let DY = new Pin();
		Connect(this.UHC678LOG.pins.DY, DY);
		this.U1 = new dltch(1);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.GATE, C);
		Connect(this.U1.pins.D0, DY);
		let _D_NC = new Pin();
		Connect(this.U1.pins.Q0, _D_NC);
		let Y = new Pin();
		Connect(this.U1.pins.QBAR0, Y);
		Connect(Y, this.pins.Y_O);
	}
}
/**
 * 12-BIT ADDRESS COMPARATORS
 */
class SN74HC679 extends Component {
	constructor() {
		super();
		this.pins = {
			A1_I: new Pin(),
			A2_I: new Pin(),
			A3_I: new Pin(),
			A4_I: new Pin(),
			A5_I: new Pin(),
			A6_I: new Pin(),
			A7_I: new Pin(),
			A8_I: new Pin(),
			A9_I: new Pin(),
			A10_I: new Pin(),
			A11_I: new Pin(),
			A12_I: new Pin(),
			P0_I: new Pin(),
			P1_I: new Pin(),
			P2_I: new Pin(),
			P3_I: new Pin(),
			GBAR_I: new Pin(),
			Y_O: new Pin(),
		}
		this.UHC679LOG = new logicexp(['A1_I','A2_I','A3_I','A4_I','A5_I','A6_I','A7_I','A8_I','A9_I','A10_I','A11_I','A12_I','P0_I','P1_I','P2_I','P3_I','GBAR_I'], ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','P0','P1','P2','P3','GBAR','Y'], []).Logic('   A1   =  A1_I ;   A2   =  A2_I ;   A3   =  A3_I ;   A4   =  A4_I ;   A5   =  A5_I ;   A6   =  A6_I ;   A7   =  A7_I ;   A8   =  A8_I ;   A9   =  A9_I ;   A10  =  A10_I ;   A11  =  A11_I ;   A12  =  A12_I ;   P0   =  P0_I ;   P1   =  P1_I ;   P2   =  P2_I ;   P3   =  P3_I ;   GBAR =  GBAR_I ;let    P0BAR =  !P0 ;   P0BAR =  !P0 ;let    P1BAR =  !P1 ;   P1BAR =  !P1 ;let    P2BAR =  !P2 ;   P2BAR =  !P2 ;let    P3BAR =  !P3 ;   P3BAR =  !P3 ;let    ZERO  =  P2BAR & P1BAR & P0BAR ;   ZERO  =  P2BAR & P1BAR & P0BAR ;let    ONE   =  P2BAR & P1BAR & P0 ;   ONE   =  P2BAR & P1BAR & P0 ;let    TWO   =  P2BAR & P1 & P0BAR ;   TWO   =  P2BAR & P1 & P0BAR ;let    THREE =  P2BAR & P1 & P0 ;   THREE =  P2BAR & P1 & P0 ;let    FOUR  =  P2 & P1BAR & P0BAR ;   FOUR  =  P2 & P1BAR & P0BAR ;let    FIVE  =  P2 & P1BAR & P0 ;   FIVE  =  P2 & P1BAR & P0 ;let    SIX   =  P2 & P1 & P0BAR ;   SIX   =  P2 & P1 & P0BAR ;let    SEVEN =  P2 & P1 & P0 ;   SEVEN =  P2 & P1 & P0 ;let    OUT1  =  !(P3BAR & ZERO) ;   OUT1  =  !(P3BAR & ZERO) ;let    OUT2  =  !(P3BAR & ONE) & OUT1 ;   OUT2  =  !(P3BAR & ONE) & OUT1 ;let    OUT3  =  !(P3BAR & TWO) & OUT2 ;   OUT3  =  !(P3BAR & TWO) & OUT2 ;let    OUT4  =  !(P3BAR & THREE) & OUT3 ;   OUT4  =  !(P3BAR & THREE) & OUT3 ;let    OUT5  =  !(P3BAR & FOUR) & OUT4 ;   OUT5  =  !(P3BAR & FOUR) & OUT4 ;let    OUT6  =  !(P3BAR & FIVE) & OUT5 ;   OUT6  =  !(P3BAR & FIVE) & OUT5 ;let    OUT7  =  !(P3BAR & SIX) & OUT6 ;   OUT7  =  !(P3BAR & SIX) & OUT6 ;let    OUT8  =  !(P3BAR & SEVEN) & OUT7 ;   OUT8  =  !(P3BAR & SEVEN) & OUT7 ;let    OUT9  =  !(P3 & ZERO) & P3 & OUT8 ;   OUT9  =  !(P3 & ZERO) & P3 & OUT8 ;let    OUT10 =  !(P3 & ONE) & OUT9 ;   OUT10 =  !(P3 & ONE) & OUT9 ;let    OUT11 =  !(P3 & TWO) & OUT10 ;   OUT11 =  !(P3 & TWO) & OUT10 ;let    OUT12 =  !(P3 & THREE) & OUT11 ;   OUT12 =  !(P3 & THREE) & OUT11 ;let    OUT13 =  !(P3 & FOUR) & OUT12 ;   OUT13 =  !(P3 & FOUR) & OUT12 ;let    OUT14 =  !(P3 & FIVE) & OUT13 ;   OUT14 =  !(P3 & FIVE) & OUT13 ;let    OUT15 =  !(P3 & SIX) & OUT14 ;   OUT15 =  !(P3 & SIX) & OUT14 ;let    OUT16 =  !(P3 & SEVEN) ;   OUT16 =  !(P3 & SEVEN) ;let    AND1_2  =  !GBAR & (OUT1 ^ A1) & (OUT2 ^ A2) ;   AND1_2  =  !GBAR & (OUT1 ^ A1) & (OUT2 ^ A2) ;let    AND3_5  =  (OUT3 ^ A3) & (OUT4 ^ A4) & (OUT5 ^ A5) ;   AND3_5  =  (OUT3 ^ A3) & (OUT4 ^ A4) & (OUT5 ^ A5) ;let    AND6_8  =  (OUT6 ^ A6) & (OUT7 ^ A7) & (OUT8 ^ A8) ;   AND6_8  =  (OUT6 ^ A6) & (OUT7 ^ A7) & (OUT8 ^ A8) ;let    AND9_11 =  (OUT9 ^ A9) & (OUT10 ^ A10) & (OUT11 ^ A11) ;   AND9_11 =  (OUT9 ^ A9) & (OUT10 ^ A10) & (OUT11 ^ A11) ;let    AND12   =  (OUT12 ^ A12) & (OUT13 ^ OUT16) & (OUT14 ^ OUT16) ;   AND12   =  (OUT12 ^ A12) & (OUT13 ^ OUT16) & (OUT14 ^ OUT16) ;   Y =  !( (AND1_2 & AND3_5 & AND6_8) & (AND9_11 & AND12 & (OUT15 ^ OUT16)) ) ;');
		Connect(this.UHC679LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.UHC679LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.UHC679LOG.pins.A3_I, this.pins.A3_I);
		Connect(this.UHC679LOG.pins.A4_I, this.pins.A4_I);
		Connect(this.UHC679LOG.pins.A5_I, this.pins.A5_I);
		Connect(this.UHC679LOG.pins.A6_I, this.pins.A6_I);
		Connect(this.UHC679LOG.pins.A7_I, this.pins.A7_I);
		Connect(this.UHC679LOG.pins.A8_I, this.pins.A8_I);
		Connect(this.UHC679LOG.pins.A9_I, this.pins.A9_I);
		Connect(this.UHC679LOG.pins.A10_I, this.pins.A10_I);
		Connect(this.UHC679LOG.pins.A11_I, this.pins.A11_I);
		Connect(this.UHC679LOG.pins.A12_I, this.pins.A12_I);
		Connect(this.UHC679LOG.pins.P0_I, this.pins.P0_I);
		Connect(this.UHC679LOG.pins.P1_I, this.pins.P1_I);
		Connect(this.UHC679LOG.pins.P2_I, this.pins.P2_I);
		Connect(this.UHC679LOG.pins.P3_I, this.pins.P3_I);
		Connect(this.UHC679LOG.pins.GBAR_I, this.pins.GBAR_I);
		let A1 = new Pin();
		Connect(this.UHC679LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC679LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.UHC679LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.UHC679LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.UHC679LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.UHC679LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.UHC679LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.UHC679LOG.pins.A8, A8);
		let A9 = new Pin();
		Connect(this.UHC679LOG.pins.A9, A9);
		let A10 = new Pin();
		Connect(this.UHC679LOG.pins.A10, A10);
		let A11 = new Pin();
		Connect(this.UHC679LOG.pins.A11, A11);
		let A12 = new Pin();
		Connect(this.UHC679LOG.pins.A12, A12);
		let P0 = new Pin();
		Connect(this.UHC679LOG.pins.P0, P0);
		let P1 = new Pin();
		Connect(this.UHC679LOG.pins.P1, P1);
		let P2 = new Pin();
		Connect(this.UHC679LOG.pins.P2, P2);
		let P3 = new Pin();
		Connect(this.UHC679LOG.pins.P3, P3);
		let GBAR = new Pin();
		Connect(this.UHC679LOG.pins.GBAR, GBAR);
		let Y = new Pin();
		Connect(this.UHC679LOG.pins.Y, Y);
		Connect(Y, this.pins.Y_O);
	}
}
/**
 * 12-BIT ADDRESS COMPARATORS
 */
class SN74HC680 extends Component {
	constructor() {
		super();
		this.pins = {
			A1_I: new Pin(),
			A2_I: new Pin(),
			A3_I: new Pin(),
			A4_I: new Pin(),
			A5_I: new Pin(),
			A6_I: new Pin(),
			A7_I: new Pin(),
			A8_I: new Pin(),
			A9_I: new Pin(),
			A10_I: new Pin(),
			A11_I: new Pin(),
			A12_I: new Pin(),
			P0_I: new Pin(),
			P1_I: new Pin(),
			P2_I: new Pin(),
			P3_I: new Pin(),
			C_I: new Pin(),
			Y_O: new Pin(),
		}
		this.UHC680LOG = new logicexp(['A1_I','A2_I','A3_I','A4_I','A5_I','A6_I','A7_I','A8_I','A9_I','A10_I','A11_I','A12_I','P0_I','P1_I','P2_I','P3_I','C_I'], ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','P0','P1','P2','P3','C','DY'], []).Logic('   A1   =  A1_I ;   A2   =  A2_I ;   A3   =  A3_I ;   A4   =  A4_I ;   A5   =  A5_I ;   A6   =  A6_I ;   A7   =  A7_I ;   A8   =  A8_I ;   A9   =  A9_I ;   A10  =  A10_I ;   A11  =  A11_I ;   A12  =  A12_I ;   P0   =  P0_I ;   P1   =  P1_I ;   P2   =  P2_I ;   P3   =  P3_I ;   C =  C_I ;let    P0BAR =  !P0 ;   P0BAR =  !P0 ;let    P1BAR =  !P1 ;   P1BAR =  !P1 ;let    P2BAR =  !P2 ;   P2BAR =  !P2 ;let    P3BAR =  !P3 ;   P3BAR =  !P3 ;let    ZERO  =  P2BAR & P1BAR & P0BAR ;   ZERO  =  P2BAR & P1BAR & P0BAR ;let    ONE   =  P2BAR & P1BAR & P0 ;   ONE   =  P2BAR & P1BAR & P0 ;let    TWO   =  P2BAR & P1 & P0BAR ;   TWO   =  P2BAR & P1 & P0BAR ;let    THREE =  P2BAR & P1 & P0 ;   THREE =  P2BAR & P1 & P0 ;let    FOUR  =  P2 & P1BAR & P0BAR ;   FOUR  =  P2 & P1BAR & P0BAR ;let    FIVE  =  P2 & P1BAR & P0 ;   FIVE  =  P2 & P1BAR & P0 ;let    SIX   =  P2 & P1 & P0BAR ;   SIX   =  P2 & P1 & P0BAR ;let    SEVEN =  P2 & P1 & P0 ;   SEVEN =  P2 & P1 & P0 ;let    OUT1  =  !(P3BAR & ZERO) ;   OUT1  =  !(P3BAR & ZERO) ;let    OUT2  =  !(P3BAR & ONE) & OUT1 ;   OUT2  =  !(P3BAR & ONE) & OUT1 ;let    OUT3  =  !(P3BAR & TWO) & OUT2 ;   OUT3  =  !(P3BAR & TWO) & OUT2 ;let    OUT4  =  !(P3BAR & THREE) & OUT3 ;   OUT4  =  !(P3BAR & THREE) & OUT3 ;let    OUT5  =  !(P3BAR & FOUR) & OUT4 ;   OUT5  =  !(P3BAR & FOUR) & OUT4 ;let    OUT6  =  !(P3BAR & FIVE) & OUT5 ;   OUT6  =  !(P3BAR & FIVE) & OUT5 ;let    OUT7  =  !(P3BAR & SIX) & OUT6 ;   OUT7  =  !(P3BAR & SIX) & OUT6 ;let    OUT8  =  !(P3BAR & SEVEN) & OUT7 ;   OUT8  =  !(P3BAR & SEVEN) & OUT7 ;let    OUT9  =  !(P3 & ZERO) & P3 & OUT8 ;   OUT9  =  !(P3 & ZERO) & P3 & OUT8 ;let    OUT10 =  !(P3 & ONE) & OUT9 ;   OUT10 =  !(P3 & ONE) & OUT9 ;let    OUT11 =  !(P3 & TWO) & OUT10 ;   OUT11 =  !(P3 & TWO) & OUT10 ;let    OUT12 =  !(P3 & THREE) & OUT11 ;   OUT12 =  !(P3 & THREE) & OUT11 ;let    OUT13 =  !(P3 & FOUR) & OUT12 ;   OUT13 =  !(P3 & FOUR) & OUT12 ;let    OUT14 =  !(P3 & FIVE) & OUT13 ;   OUT14 =  !(P3 & FIVE) & OUT13 ;let    OUT15 =  !(P3 & SIX) & OUT14 ;   OUT15 =  !(P3 & SIX) & OUT14 ;let    OUT16 =  !(P3 & SEVEN) ;   OUT16 =  !(P3 & SEVEN) ;let    AND1_2  =  (OUT1 ^ A1) & (OUT2 ^ A2) ;   AND1_2  =  (OUT1 ^ A1) & (OUT2 ^ A2) ;let    AND3_5  =  (OUT3 ^ A3) & (OUT4 ^ A4) & (OUT5 ^ A5) ;   AND3_5  =  (OUT3 ^ A3) & (OUT4 ^ A4) & (OUT5 ^ A5) ;let    AND6_8  =  (OUT6 ^ A6) & (OUT7 ^ A7) & (OUT8 ^ A8) ;   AND6_8  =  (OUT6 ^ A6) & (OUT7 ^ A7) & (OUT8 ^ A8) ;let    AND9_11 =  (OUT9 ^ A9) & (OUT10 ^ A10) & (OUT11 ^ A11) ;   AND9_11 =  (OUT9 ^ A9) & (OUT10 ^ A10) & (OUT11 ^ A11) ;let    AND12   =  (OUT12 ^ A12) & (OUT13 ^ OUT16) & (OUT14 ^ OUT16) ;   AND12   =  (OUT12 ^ A12) & (OUT13 ^ OUT16) & (OUT14 ^ OUT16) ;   DY =  ((AND1_2 & AND3_5 & AND6_8) & (AND9_11 & AND12 & (OUT15 ^ OUT16))) ;');
		Connect(this.UHC680LOG.pins.A1_I, this.pins.A1_I);
		Connect(this.UHC680LOG.pins.A2_I, this.pins.A2_I);
		Connect(this.UHC680LOG.pins.A3_I, this.pins.A3_I);
		Connect(this.UHC680LOG.pins.A4_I, this.pins.A4_I);
		Connect(this.UHC680LOG.pins.A5_I, this.pins.A5_I);
		Connect(this.UHC680LOG.pins.A6_I, this.pins.A6_I);
		Connect(this.UHC680LOG.pins.A7_I, this.pins.A7_I);
		Connect(this.UHC680LOG.pins.A8_I, this.pins.A8_I);
		Connect(this.UHC680LOG.pins.A9_I, this.pins.A9_I);
		Connect(this.UHC680LOG.pins.A10_I, this.pins.A10_I);
		Connect(this.UHC680LOG.pins.A11_I, this.pins.A11_I);
		Connect(this.UHC680LOG.pins.A12_I, this.pins.A12_I);
		Connect(this.UHC680LOG.pins.P0_I, this.pins.P0_I);
		Connect(this.UHC680LOG.pins.P1_I, this.pins.P1_I);
		Connect(this.UHC680LOG.pins.P2_I, this.pins.P2_I);
		Connect(this.UHC680LOG.pins.P3_I, this.pins.P3_I);
		Connect(this.UHC680LOG.pins.C_I, this.pins.C_I);
		let A1 = new Pin();
		Connect(this.UHC680LOG.pins.A1, A1);
		let A2 = new Pin();
		Connect(this.UHC680LOG.pins.A2, A2);
		let A3 = new Pin();
		Connect(this.UHC680LOG.pins.A3, A3);
		let A4 = new Pin();
		Connect(this.UHC680LOG.pins.A4, A4);
		let A5 = new Pin();
		Connect(this.UHC680LOG.pins.A5, A5);
		let A6 = new Pin();
		Connect(this.UHC680LOG.pins.A6, A6);
		let A7 = new Pin();
		Connect(this.UHC680LOG.pins.A7, A7);
		let A8 = new Pin();
		Connect(this.UHC680LOG.pins.A8, A8);
		let A9 = new Pin();
		Connect(this.UHC680LOG.pins.A9, A9);
		let A10 = new Pin();
		Connect(this.UHC680LOG.pins.A10, A10);
		let A11 = new Pin();
		Connect(this.UHC680LOG.pins.A11, A11);
		let A12 = new Pin();
		Connect(this.UHC680LOG.pins.A12, A12);
		let P0 = new Pin();
		Connect(this.UHC680LOG.pins.P0, P0);
		let P1 = new Pin();
		Connect(this.UHC680LOG.pins.P1, P1);
		let P2 = new Pin();
		Connect(this.UHC680LOG.pins.P2, P2);
		let P3 = new Pin();
		Connect(this.UHC680LOG.pins.P3, P3);
		let C = new Pin();
		Connect(this.UHC680LOG.pins.C, C);
		let DY = new Pin();
		Connect(this.UHC680LOG.pins.DY, DY);
		this.U1 = new dltch(1);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		Connect(this.U1.pins.GATE, C);
		Connect(this.U1.pins.D0, DY);
		let _D_NC = new Pin();
		Connect(this.U1.pins.Q0, _D_NC);
		let Y = new Pin();
		Connect(this.U1.pins.QBAR0, Y);
		Connect(Y, this.pins.Y_O);
	}
}
/**
 * 8-BIT MAGNITUDE COMPARATORS
 */
class SN74HC684 extends Component {
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
		this.UHC684LOG = new logicexp(['P7_I','P6_I','P5_I','P4_I','P3_I','P2_I','P1_I','P0_I','Q7_I','Q6_I','Q5_I','Q4_I','Q3_I','Q2_I','Q1_I','Q0_I'], ['P7','P6','P5','P4','P3','P2','P1','P0','Q7','Q6','Q5','Q4','Q3','Q2','Q1','Q0','PEQBAR','PGQBAR'], []).Logic('   P7 =  P7_I ;   P6 =  P6_I ;   P5 =  P5_I ;   P4 =  P4_I ;   P3 =  P3_I ;   P2 =  P2_I ;   P1 =  P1_I ;   P0 =  P0_I ;   Q7 =  Q7_I ;   Q6 =  Q6_I ;   Q5 =  Q5_I ;   Q4 =  Q4_I ;   Q3 =  Q3_I ;   Q2 =  Q2_I ;   Q1 =  Q1_I ;   Q0 =  Q0_I ;let    PQ7    =  !(P7 ^ Q7) ;   PQ7    =  !(P7 ^ Q7) ;let    PQ6    =  !(P6 ^ Q6) ;   PQ6    =  !(P6 ^ Q6) ;let    PQ5    =  !(P5 ^ Q5) ;   PQ5    =  !(P5 ^ Q5) ;let    PQ4    =  !(P4 ^ Q4) ;   PQ4    =  !(P4 ^ Q4) ;let    PQ3    =  !(P3 ^ Q3) ;   PQ3    =  !(P3 ^ Q3) ;let    PQ2    =  !(P2 ^ Q2) ;   PQ2    =  !(P2 ^ Q2) ;let    PQ1    =  !(P1 ^ Q1) ;   PQ1    =  !(P1 ^ Q1) ;let    PQ0    =  !(P0 ^ Q0) ;   PQ0    =  !(P0 ^ Q0) ;let    PQ67   =  PQ6 & PQ7  ;   PQ67   =  PQ6 & PQ7  ;let    PQ57   =  PQ5 & PQ67 ;   PQ57   =  PQ5 & PQ67 ;let    PQ47   =  PQ4 & PQ57 ;   PQ47   =  PQ4 & PQ57 ;let    PQ37   =  PQ3 & PQ47 ;   PQ37   =  PQ3 & PQ47 ;let    PQ27   =  PQ2 & PQ37 ;   PQ27   =  PQ2 & PQ37 ;let    PQ17   =  PQ1 & PQ27 ;   PQ17   =  PQ1 & PQ27 ;   PEQBAR =  !(PQ7 & PQ6 & PQ5 & PQ4 & PQ3 & PQ2 & PQ1 & PQ0) ;   PGQBAR =  !((PQ17 & !Q0 & P0) | (PQ27 & !Q1 & P1) | (PQ37 & !Q2 & P2) |                (PQ47 & !Q3 & P3) | (PQ57 & !Q4 & P4) | (PQ67 & !Q5 & P5) |                (PQ7 & !Q6 & P6)  | (!Q7 & P7)) ;');
		Connect(this.UHC684LOG.pins.P7_I, this.pins.P7_I);
		Connect(this.UHC684LOG.pins.P6_I, this.pins.P6_I);
		Connect(this.UHC684LOG.pins.P5_I, this.pins.P5_I);
		Connect(this.UHC684LOG.pins.P4_I, this.pins.P4_I);
		Connect(this.UHC684LOG.pins.P3_I, this.pins.P3_I);
		Connect(this.UHC684LOG.pins.P2_I, this.pins.P2_I);
		Connect(this.UHC684LOG.pins.P1_I, this.pins.P1_I);
		Connect(this.UHC684LOG.pins.P0_I, this.pins.P0_I);
		Connect(this.UHC684LOG.pins.Q7_I, this.pins.Q7_I);
		Connect(this.UHC684LOG.pins.Q6_I, this.pins.Q6_I);
		Connect(this.UHC684LOG.pins.Q5_I, this.pins.Q5_I);
		Connect(this.UHC684LOG.pins.Q4_I, this.pins.Q4_I);
		Connect(this.UHC684LOG.pins.Q3_I, this.pins.Q3_I);
		Connect(this.UHC684LOG.pins.Q2_I, this.pins.Q2_I);
		Connect(this.UHC684LOG.pins.Q1_I, this.pins.Q1_I);
		Connect(this.UHC684LOG.pins.Q0_I, this.pins.Q0_I);
		let P7 = new Pin();
		Connect(this.UHC684LOG.pins.P7, P7);
		let P6 = new Pin();
		Connect(this.UHC684LOG.pins.P6, P6);
		let P5 = new Pin();
		Connect(this.UHC684LOG.pins.P5, P5);
		let P4 = new Pin();
		Connect(this.UHC684LOG.pins.P4, P4);
		let P3 = new Pin();
		Connect(this.UHC684LOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.UHC684LOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.UHC684LOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.UHC684LOG.pins.P0, P0);
		let Q7 = new Pin();
		Connect(this.UHC684LOG.pins.Q7, Q7);
		let Q6 = new Pin();
		Connect(this.UHC684LOG.pins.Q6, Q6);
		let Q5 = new Pin();
		Connect(this.UHC684LOG.pins.Q5, Q5);
		let Q4 = new Pin();
		Connect(this.UHC684LOG.pins.Q4, Q4);
		let Q3 = new Pin();
		Connect(this.UHC684LOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.UHC684LOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.UHC684LOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.UHC684LOG.pins.Q0, Q0);
		let PEQBAR = new Pin();
		Connect(this.UHC684LOG.pins.PEQBAR, PEQBAR);
		let PGQBAR = new Pin();
		Connect(this.UHC684LOG.pins.PGQBAR, PGQBAR);
		Connect(PEQBAR, this.pins.PEQBAR_O);
		Connect(PGQBAR, this.pins.PGQBAR_O);
	}
}
/**
 * 8-BIT IDENTITY COMPARATORS
 */
class SN74HC688 extends Component {
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
		this.UHC688LOG = new logicexp(['P7_I','P6_I','P5_I','P4_I','P3_I','P2_I','P1_I','P0_I','Q7_I','Q6_I','Q5_I','Q4_I','Q3_I','Q2_I','Q1_I','Q0_I','GBAR_I'], ['P7','P6','P5','P4','P3','P2','P1','P0','Q7','Q6','Q5','Q4','Q3','Q2','Q1','Q0','GBAR','PEQBAR'], []).Logic('   P7 =  P7_I ;   P6 =  P6_I ;   P5 =  P5_I ;   P4 =  P4_I ;   P3 =  P3_I ;   P2 =  P2_I ;   P1 =  P1_I ;   P0 =  P0_I ;   Q7 =  Q7_I ;   Q6 =  Q6_I ;   Q5 =  Q5_I ;   Q4 =  Q4_I ;   Q3 =  Q3_I ;   Q2 =  Q2_I ;   Q1 =  Q1_I ;   Q0 =  Q0_I ;   GBAR =  GBAR_I ;let    PEQ7 =  !(P7 ^ Q7) ;   PEQ7 =  !(P7 ^ Q7) ;let    PEQ6 =  !(P6 ^ Q6) ;   PEQ6 =  !(P6 ^ Q6) ;let    PEQ5 =  !(P5 ^ Q5) ;   PEQ5 =  !(P5 ^ Q5) ;let    PEQ4 =  !(P4 ^ Q4) ;   PEQ4 =  !(P4 ^ Q4) ;let    PEQ3 =  !(P3 ^ Q3) ;   PEQ3 =  !(P3 ^ Q3) ;let    PEQ2 =  !(P2 ^ Q2) ;   PEQ2 =  !(P2 ^ Q2) ;let    PEQ1 =  !(P1 ^ Q1) ;   PEQ1 =  !(P1 ^ Q1) ;let    PEQ0 =  !(P0 ^ Q0) ;   PEQ0 =  !(P0 ^ Q0) ;let    AND0_2 =  PEQ0 & PEQ1 & PEQ2 ;   AND0_2 =  PEQ0 & PEQ1 & PEQ2 ;let    AND3_5 =  PEQ3 & PEQ4 & PEQ5 ;   AND3_5 =  PEQ3 & PEQ4 & PEQ5 ;let    AND6_7 =  PEQ6 & PEQ7 ;   AND6_7 =  PEQ6 & PEQ7 ;   PEQBAR =  !(AND0_2 & AND3_5 & AND6_7 & !GBAR) ;');
		Connect(this.UHC688LOG.pins.P7_I, this.pins.P7_I);
		Connect(this.UHC688LOG.pins.P6_I, this.pins.P6_I);
		Connect(this.UHC688LOG.pins.P5_I, this.pins.P5_I);
		Connect(this.UHC688LOG.pins.P4_I, this.pins.P4_I);
		Connect(this.UHC688LOG.pins.P3_I, this.pins.P3_I);
		Connect(this.UHC688LOG.pins.P2_I, this.pins.P2_I);
		Connect(this.UHC688LOG.pins.P1_I, this.pins.P1_I);
		Connect(this.UHC688LOG.pins.P0_I, this.pins.P0_I);
		Connect(this.UHC688LOG.pins.Q7_I, this.pins.Q7_I);
		Connect(this.UHC688LOG.pins.Q6_I, this.pins.Q6_I);
		Connect(this.UHC688LOG.pins.Q5_I, this.pins.Q5_I);
		Connect(this.UHC688LOG.pins.Q4_I, this.pins.Q4_I);
		Connect(this.UHC688LOG.pins.Q3_I, this.pins.Q3_I);
		Connect(this.UHC688LOG.pins.Q2_I, this.pins.Q2_I);
		Connect(this.UHC688LOG.pins.Q1_I, this.pins.Q1_I);
		Connect(this.UHC688LOG.pins.Q0_I, this.pins.Q0_I);
		Connect(this.UHC688LOG.pins.GBAR_I, this.pins.GBAR_I);
		let P7 = new Pin();
		Connect(this.UHC688LOG.pins.P7, P7);
		let P6 = new Pin();
		Connect(this.UHC688LOG.pins.P6, P6);
		let P5 = new Pin();
		Connect(this.UHC688LOG.pins.P5, P5);
		let P4 = new Pin();
		Connect(this.UHC688LOG.pins.P4, P4);
		let P3 = new Pin();
		Connect(this.UHC688LOG.pins.P3, P3);
		let P2 = new Pin();
		Connect(this.UHC688LOG.pins.P2, P2);
		let P1 = new Pin();
		Connect(this.UHC688LOG.pins.P1, P1);
		let P0 = new Pin();
		Connect(this.UHC688LOG.pins.P0, P0);
		let Q7 = new Pin();
		Connect(this.UHC688LOG.pins.Q7, Q7);
		let Q6 = new Pin();
		Connect(this.UHC688LOG.pins.Q6, Q6);
		let Q5 = new Pin();
		Connect(this.UHC688LOG.pins.Q5, Q5);
		let Q4 = new Pin();
		Connect(this.UHC688LOG.pins.Q4, Q4);
		let Q3 = new Pin();
		Connect(this.UHC688LOG.pins.Q3, Q3);
		let Q2 = new Pin();
		Connect(this.UHC688LOG.pins.Q2, Q2);
		let Q1 = new Pin();
		Connect(this.UHC688LOG.pins.Q1, Q1);
		let Q0 = new Pin();
		Connect(this.UHC688LOG.pins.Q0, Q0);
		let GBAR = new Pin();
		Connect(this.UHC688LOG.pins.GBAR, GBAR);
		let PEQBAR = new Pin();
		Connect(this.UHC688LOG.pins.PEQBAR, PEQBAR);
		Connect(PEQBAR, this.pins.PEQBAR_O);
	}
}
/**
 * Hex 2-Input NAND Drivers
 */
class SN74HC804 extends Component {
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
 * Hex 2-Input NOR Drivers
 */
class SN74HC805 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Hex 2-Input AND Drivers
 */
class SN74HC808 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new and(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Hex 2-Input OR Drivers
 */
class SN74HC832 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new or(2);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * Dual 4-Input Positive-Nor Gate
 */
class SN74HC4002 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			D: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nor(4);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * COUNTER BINARY 14-BIT, ASYNCHRONOUS
 */
class SN74HC4020 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR_I: new Pin(),
			CLK_I: new Pin(),
			QA_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
			QI_O: new Pin(),
			QJ_O: new Pin(),
			QK_O: new Pin(),
			QL_O: new Pin(),
			QM_O: new Pin(),
			QN_O: new Pin(),
		}
		this.U1 = new jkff(1);
		Connect(this.U1.pins.PRESET, _D_HI);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CLRBAR);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.J0, _D_HI);
		Connect(this.U1.pins.K0, _D_HI);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, CLRBAR);
		Connect(this.U2.pins.CLOCK, QA);
		Connect(this.U2.pins.J0, _D_HI);
		Connect(this.U2.pins.K0, _D_HI);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		Connect(this.U2.pins.QBAR0, _D_NC);
		this.U3 = new jkff(1);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, CLRBAR);
		Connect(this.U3.pins.CLOCK, QB);
		Connect(this.U3.pins.J0, _D_HI);
		Connect(this.U3.pins.K0, _D_HI);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		Connect(this.U3.pins.QBAR0, _D_NC);
		this.U4 = new jkff(1);
		Connect(this.U4.pins.PRESET, _D_HI);
		Connect(this.U4.pins.CLEAR, CLRBAR);
		Connect(this.U4.pins.CLOCK, QC);
		Connect(this.U4.pins.J0, _D_HI);
		Connect(this.U4.pins.K0, _D_HI);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		Connect(this.U4.pins.QBAR0, _D_NC);
		this.U5 = new jkff(1);
		Connect(this.U5.pins.PRESET, _D_HI);
		Connect(this.U5.pins.CLEAR, CLRBAR);
		Connect(this.U5.pins.CLOCK, QD);
		Connect(this.U5.pins.J0, _D_HI);
		Connect(this.U5.pins.K0, _D_HI);
		let QE = new Pin();
		Connect(this.U5.pins.Q0, QE);
		Connect(this.U5.pins.QBAR0, _D_NC);
		this.U6 = new jkff(1);
		Connect(this.U6.pins.PRESET, _D_HI);
		Connect(this.U6.pins.CLEAR, CLRBAR);
		Connect(this.U6.pins.CLOCK, QE);
		Connect(this.U6.pins.J0, _D_HI);
		Connect(this.U6.pins.K0, _D_HI);
		let QF = new Pin();
		Connect(this.U6.pins.Q0, QF);
		Connect(this.U6.pins.QBAR0, _D_NC);
		this.U7 = new jkff(1);
		Connect(this.U7.pins.PRESET, _D_HI);
		Connect(this.U7.pins.CLEAR, CLRBAR);
		Connect(this.U7.pins.CLOCK, QF);
		Connect(this.U7.pins.J0, _D_HI);
		Connect(this.U7.pins.K0, _D_HI);
		let QG = new Pin();
		Connect(this.U7.pins.Q0, QG);
		Connect(this.U7.pins.QBAR0, _D_NC);
		this.U8 = new jkff(1);
		Connect(this.U8.pins.PRESET, _D_HI);
		Connect(this.U8.pins.CLEAR, CLRBAR);
		Connect(this.U8.pins.CLOCK, QG);
		Connect(this.U8.pins.J0, _D_HI);
		Connect(this.U8.pins.K0, _D_HI);
		let QH = new Pin();
		Connect(this.U8.pins.Q0, QH);
		Connect(this.U8.pins.QBAR0, _D_NC);
		this.U9 = new jkff(1);
		Connect(this.U9.pins.PRESET, _D_HI);
		Connect(this.U9.pins.CLEAR, CLRBAR);
		Connect(this.U9.pins.CLOCK, QH);
		Connect(this.U9.pins.J0, _D_HI);
		Connect(this.U9.pins.K0, _D_HI);
		let QI = new Pin();
		Connect(this.U9.pins.Q0, QI);
		Connect(this.U9.pins.QBAR0, _D_NC);
		this.U10 = new jkff(1);
		Connect(this.U10.pins.PRESET, _D_HI);
		Connect(this.U10.pins.CLEAR, CLRBAR);
		Connect(this.U10.pins.CLOCK, QI);
		Connect(this.U10.pins.J0, _D_HI);
		Connect(this.U10.pins.K0, _D_HI);
		let QJ = new Pin();
		Connect(this.U10.pins.Q0, QJ);
		Connect(this.U10.pins.QBAR0, _D_NC);
		this.U11 = new jkff(1);
		Connect(this.U11.pins.PRESET, _D_HI);
		Connect(this.U11.pins.CLEAR, CLRBAR);
		Connect(this.U11.pins.CLOCK, QJ);
		Connect(this.U11.pins.J0, _D_HI);
		Connect(this.U11.pins.K0, _D_HI);
		let QK = new Pin();
		Connect(this.U11.pins.Q0, QK);
		Connect(this.U11.pins.QBAR0, _D_NC);
		this.U12 = new jkff(1);
		Connect(this.U12.pins.PRESET, _D_HI);
		Connect(this.U12.pins.CLEAR, CLRBAR);
		Connect(this.U12.pins.CLOCK, QK);
		Connect(this.U12.pins.J0, _D_HI);
		Connect(this.U12.pins.K0, _D_HI);
		let QL = new Pin();
		Connect(this.U12.pins.Q0, QL);
		Connect(this.U12.pins.QBAR0, _D_NC);
		this.U13 = new jkff(1);
		Connect(this.U13.pins.PRESET, _D_HI);
		Connect(this.U13.pins.CLEAR, CLRBAR);
		Connect(this.U13.pins.CLOCK, QL);
		Connect(this.U13.pins.J0, _D_HI);
		Connect(this.U13.pins.K0, _D_HI);
		let QM = new Pin();
		Connect(this.U13.pins.Q0, QM);
		Connect(this.U13.pins.QBAR0, _D_NC);
		this.U14 = new jkff(1);
		Connect(this.U14.pins.PRESET, _D_HI);
		Connect(this.U14.pins.CLEAR, CLRBAR);
		Connect(this.U14.pins.CLOCK, QM);
		Connect(this.U14.pins.J0, _D_HI);
		Connect(this.U14.pins.K0, _D_HI);
		let QN = new Pin();
		Connect(this.U14.pins.Q0, QN);
		Connect(this.U14.pins.QBAR0, _D_NC);
		this.U15 = new bufa(2);
		Connect(this.U15.pins.IN0_0, this.pins.CLK_I);
		Connect(this.U15.pins.IN1_0, this.pins.CLR_I);
		Connect(this.U15.pins.OUT0, CLK);
		let CLR = new Pin();
		Connect(this.U15.pins.OUT1, CLR);
		this.U16 = new inv();
		Connect(this.U16.pins.IN0, CLR);
		Connect(this.U16.pins.OUT, CLRBAR);
		Connect(QA, this.pins.QA_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
		Connect(QF, this.pins.QF_O);
		Connect(QG, this.pins.QG_O);
		Connect(QH, this.pins.QH_O);
		Connect(QI, this.pins.QI_O);
		Connect(QJ, this.pins.QJ_O);
		Connect(QK, this.pins.QK_O);
		Connect(QL, this.pins.QL_O);
		Connect(QM, this.pins.QM_O);
		Connect(QN, this.pins.QN_O);
	}
}
class SN74HC4024 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR_I: new Pin(),
			CLK_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
		}
		this.U1 = new jkff(1);
		Connect(this.U1.pins.PRESET, _D_HI);
		let MR = new Pin();
		Connect(this.U1.pins.CLEAR, MR);
		let TA = new Pin();
		Connect(this.U1.pins.CLOCK, TA);
		Connect(this.U1.pins.J0, _D_HI);
		Connect(this.U1.pins.K0, _D_HI);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, MR);
		Connect(this.U2.pins.CLOCK, QA);
		Connect(this.U2.pins.J0, _D_HI);
		Connect(this.U2.pins.K0, _D_HI);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		Connect(this.U2.pins.QBAR0, _D_NC);
		this.U3 = new jkff(1);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, MR);
		Connect(this.U3.pins.CLOCK, QB);
		Connect(this.U3.pins.J0, _D_HI);
		Connect(this.U3.pins.K0, _D_HI);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		Connect(this.U3.pins.QBAR0, _D_NC);
		this.U4 = new jkff(1);
		Connect(this.U4.pins.PRESET, _D_HI);
		Connect(this.U4.pins.CLEAR, MR);
		Connect(this.U4.pins.CLOCK, QC);
		Connect(this.U4.pins.J0, _D_HI);
		Connect(this.U4.pins.K0, _D_HI);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		Connect(this.U4.pins.QBAR0, _D_NC);
		this.U5 = new jkff(1);
		Connect(this.U5.pins.PRESET, _D_HI);
		Connect(this.U5.pins.CLEAR, MR);
		Connect(this.U5.pins.CLOCK, QD);
		Connect(this.U5.pins.J0, _D_HI);
		Connect(this.U5.pins.K0, _D_HI);
		let QE = new Pin();
		Connect(this.U5.pins.Q0, QE);
		Connect(this.U5.pins.QBAR0, _D_NC);
		this.U6 = new jkff(1);
		Connect(this.U6.pins.PRESET, _D_HI);
		Connect(this.U6.pins.CLEAR, MR);
		Connect(this.U6.pins.CLOCK, QE);
		Connect(this.U6.pins.J0, _D_HI);
		Connect(this.U6.pins.K0, _D_HI);
		let QF = new Pin();
		Connect(this.U6.pins.Q0, QF);
		Connect(this.U6.pins.QBAR0, _D_NC);
		this.U7 = new jkff(1);
		Connect(this.U7.pins.PRESET, _D_HI);
		Connect(this.U7.pins.CLEAR, MR);
		Connect(this.U7.pins.CLOCK, QF);
		Connect(this.U7.pins.J0, _D_HI);
		Connect(this.U7.pins.K0, _D_HI);
		let QG = new Pin();
		Connect(this.U7.pins.Q0, QG);
		Connect(this.U7.pins.QBAR0, _D_NC);
		this.UHC4024LOG = new logicexp(['CLR_I','CLK_I'], ['CLR','CLK','MR','TA'], []).Logic('   CLR =  CLR_I ;   CLK =  CLK_I ;   MR =  !CLR ;   TA =  MR & CLK ;');
		Connect(this.UHC4024LOG.pins.CLR_I, this.pins.CLR_I);
		Connect(this.UHC4024LOG.pins.CLK_I, this.pins.CLK_I);
		let CLR = new Pin();
		Connect(this.UHC4024LOG.pins.CLR, CLR);
		let CLK = new Pin();
		Connect(this.UHC4024LOG.pins.CLK, CLK);
		Connect(this.UHC4024LOG.pins.MR, MR);
		Connect(this.UHC4024LOG.pins.TA, TA);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
		Connect(QF, this.pins.QF_O);
		Connect(QG, this.pins.QG_O);
	}
}
/**
 * COUNTER BINARY 12-BIT, ASYNCHRONOUS
 */
class SN74HC4040 extends Component {
	constructor() {
		super();
		this.pins = {
			CLR_I: new Pin(),
			CLK_I: new Pin(),
			QA_O: new Pin(),
			QB_O: new Pin(),
			QC_O: new Pin(),
			QD_O: new Pin(),
			QE_O: new Pin(),
			QF_O: new Pin(),
			QG_O: new Pin(),
			QH_O: new Pin(),
			QI_O: new Pin(),
			QJ_O: new Pin(),
			QK_O: new Pin(),
			QL_O: new Pin(),
		}
		this.U1 = new jkff(1);
		Connect(this.U1.pins.PRESET, _D_HI);
		let CLRBAR = new Pin();
		Connect(this.U1.pins.CLEAR, CLRBAR);
		let CLK = new Pin();
		Connect(this.U1.pins.CLOCK, CLK);
		Connect(this.U1.pins.J0, _D_HI);
		Connect(this.U1.pins.K0, _D_HI);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let _D_NC = new Pin();
		Connect(this.U1.pins.QBAR0, _D_NC);
		this.U2 = new jkff(1);
		Connect(this.U2.pins.PRESET, _D_HI);
		Connect(this.U2.pins.CLEAR, CLRBAR);
		Connect(this.U2.pins.CLOCK, QA);
		Connect(this.U2.pins.J0, _D_HI);
		Connect(this.U2.pins.K0, _D_HI);
		let QB = new Pin();
		Connect(this.U2.pins.Q0, QB);
		Connect(this.U2.pins.QBAR0, _D_NC);
		this.U3 = new jkff(1);
		Connect(this.U3.pins.PRESET, _D_HI);
		Connect(this.U3.pins.CLEAR, CLRBAR);
		Connect(this.U3.pins.CLOCK, QB);
		Connect(this.U3.pins.J0, _D_HI);
		Connect(this.U3.pins.K0, _D_HI);
		let QC = new Pin();
		Connect(this.U3.pins.Q0, QC);
		Connect(this.U3.pins.QBAR0, _D_NC);
		this.U4 = new jkff(1);
		Connect(this.U4.pins.PRESET, _D_HI);
		Connect(this.U4.pins.CLEAR, CLRBAR);
		Connect(this.U4.pins.CLOCK, QC);
		Connect(this.U4.pins.J0, _D_HI);
		Connect(this.U4.pins.K0, _D_HI);
		let QD = new Pin();
		Connect(this.U4.pins.Q0, QD);
		Connect(this.U4.pins.QBAR0, _D_NC);
		this.U5 = new jkff(1);
		Connect(this.U5.pins.PRESET, _D_HI);
		Connect(this.U5.pins.CLEAR, CLRBAR);
		Connect(this.U5.pins.CLOCK, QD);
		Connect(this.U5.pins.J0, _D_HI);
		Connect(this.U5.pins.K0, _D_HI);
		let QE = new Pin();
		Connect(this.U5.pins.Q0, QE);
		Connect(this.U5.pins.QBAR0, _D_NC);
		this.U6 = new jkff(1);
		Connect(this.U6.pins.PRESET, _D_HI);
		Connect(this.U6.pins.CLEAR, CLRBAR);
		Connect(this.U6.pins.CLOCK, QE);
		Connect(this.U6.pins.J0, _D_HI);
		Connect(this.U6.pins.K0, _D_HI);
		let QF = new Pin();
		Connect(this.U6.pins.Q0, QF);
		Connect(this.U6.pins.QBAR0, _D_NC);
		this.U7 = new jkff(1);
		Connect(this.U7.pins.PRESET, _D_HI);
		Connect(this.U7.pins.CLEAR, CLRBAR);
		Connect(this.U7.pins.CLOCK, QF);
		Connect(this.U7.pins.J0, _D_HI);
		Connect(this.U7.pins.K0, _D_HI);
		let QG = new Pin();
		Connect(this.U7.pins.Q0, QG);
		Connect(this.U7.pins.QBAR0, _D_NC);
		this.U8 = new jkff(1);
		Connect(this.U8.pins.PRESET, _D_HI);
		Connect(this.U8.pins.CLEAR, CLRBAR);
		Connect(this.U8.pins.CLOCK, QG);
		Connect(this.U8.pins.J0, _D_HI);
		Connect(this.U8.pins.K0, _D_HI);
		let QH = new Pin();
		Connect(this.U8.pins.Q0, QH);
		Connect(this.U8.pins.QBAR0, _D_NC);
		this.U9 = new jkff(1);
		Connect(this.U9.pins.PRESET, _D_HI);
		Connect(this.U9.pins.CLEAR, CLRBAR);
		Connect(this.U9.pins.CLOCK, QH);
		Connect(this.U9.pins.J0, _D_HI);
		Connect(this.U9.pins.K0, _D_HI);
		let QI = new Pin();
		Connect(this.U9.pins.Q0, QI);
		Connect(this.U9.pins.QBAR0, _D_NC);
		this.U10 = new jkff(1);
		Connect(this.U10.pins.PRESET, _D_HI);
		Connect(this.U10.pins.CLEAR, CLRBAR);
		Connect(this.U10.pins.CLOCK, QI);
		Connect(this.U10.pins.J0, _D_HI);
		Connect(this.U10.pins.K0, _D_HI);
		let QJ = new Pin();
		Connect(this.U10.pins.Q0, QJ);
		Connect(this.U10.pins.QBAR0, _D_NC);
		this.U11 = new jkff(1);
		Connect(this.U11.pins.PRESET, _D_HI);
		Connect(this.U11.pins.CLEAR, CLRBAR);
		Connect(this.U11.pins.CLOCK, QJ);
		Connect(this.U11.pins.J0, _D_HI);
		Connect(this.U11.pins.K0, _D_HI);
		let QK = new Pin();
		Connect(this.U11.pins.Q0, QK);
		Connect(this.U11.pins.QBAR0, _D_NC);
		this.U12 = new jkff(1);
		Connect(this.U12.pins.PRESET, _D_HI);
		Connect(this.U12.pins.CLEAR, CLRBAR);
		Connect(this.U12.pins.CLOCK, QK);
		Connect(this.U12.pins.J0, _D_HI);
		Connect(this.U12.pins.K0, _D_HI);
		let QL = new Pin();
		Connect(this.U12.pins.Q0, QL);
		Connect(this.U12.pins.QBAR0, _D_NC);
		this.U13 = new bufa(2);
		Connect(this.U13.pins.IN0_0, this.pins.CLK_I);
		Connect(this.U13.pins.IN1_0, this.pins.CLR_I);
		Connect(this.U13.pins.OUT0, CLK);
		let CLR = new Pin();
		Connect(this.U13.pins.OUT1, CLR);
		this.U14 = new inv();
		Connect(this.U14.pins.IN0, CLR);
		Connect(this.U14.pins.OUT, CLRBAR);
		Connect(QA, this.pins.QA_O);
		Connect(QB, this.pins.QB_O);
		Connect(QC, this.pins.QC_O);
		Connect(QD, this.pins.QD_O);
		Connect(QE, this.pins.QE_O);
		Connect(QF, this.pins.QF_O);
		Connect(QG, this.pins.QG_O);
		Connect(QH, this.pins.QH_O);
		Connect(QI, this.pins.QI_O);
		Connect(QJ, this.pins.QJ_O);
		Connect(QK, this.pins.QK_O);
		Connect(QL, this.pins.QL_O);
	}
}
/**
 * Triple 3-input Or Gate
 */
class SN74HC4075 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			C: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new or(3);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
/**
 * 8-input Or_Nor Gate
 */
class SN74HC4078A extends Component {
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
			W: new Pin(),
		}
		this.U1 = new or(8);
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.IN2, this.pins.C);
		Connect(this.U1.pins.IN3, this.pins.D);
		Connect(this.U1.pins.IN4, this.pins.E);
		Connect(this.U1.pins.IN5, this.pins.F);
		Connect(this.U1.pins.IN6, this.pins.G);
		Connect(this.U1.pins.IN7, this.pins.H);
		let Y1 = new Pin();
		Connect(this.U1.pins.OUT, Y1);
		this.U2 = new buf();
		Connect(this.U2.pins.IN0, Y1);
		Connect(this.U2.pins.OUT, this.pins.Y);
		this.U3 = new inv();
		Connect(this.U3.pins.IN0, Y1);
		Connect(this.U3.pins.OUT, this.pins.W);
	}
}
/**
 * DECODER_DEMULTIPLEXER 4-16 LINE WITH ADDRESS LATCHES
 */
class SN74HC4514 extends Component {
	constructor() {
		super();
		this.pins = {
			LE_I: new Pin(),
			GBAR_I: new Pin(),
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
		this.U1 = new dltch(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let LE = new Pin();
		Connect(this.U1.pins.GATE, LE);
		let A = new Pin();
		Connect(this.U1.pins.D0, A);
		let B = new Pin();
		Connect(this.U1.pins.D1, B);
		let C = new Pin();
		Connect(this.U1.pins.D2, C);
		let D = new Pin();
		Connect(this.U1.pins.D3, D);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		let QABAR = new Pin();
		Connect(this.U1.pins.QBAR0, QABAR);
		let QBBAR = new Pin();
		Connect(this.U1.pins.QBAR1, QBBAR);
		let QCBAR = new Pin();
		Connect(this.U1.pins.QBAR2, QCBAR);
		let QDBAR = new Pin();
		Connect(this.U1.pins.QBAR3, QDBAR);
		this.UHC4514LOG = new logicexp(['LE_I','GBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['LE','GBAR','A','B','C','D','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9','Y10','Y11','Y12','Y13','Y14','Y15'], []).Logic('   LE      =  LE_I ;   GBAR    =  GBAR_I ;let    G       =  !GBAR ;   G       =  !GBAR ;   A       =  A_I ;   B       =  B_I ;   C       =  C_I ;   D       =  D_I ;   Y0      =  G & QDBAR & QCBAR & QBBAR & QABAR ;   Y1      =  G & QDBAR & QCBAR & QBBAR & QA    ;   Y2      =  G & QDBAR & QCBAR & QB    & QABAR ;   Y3      =  G & QDBAR & QCBAR & QB    & QA    ;   Y4      =  G & QDBAR & QC    & QBBAR & QABAR ;   Y5      =  G & QDBAR & QC    & QBBAR & QA    ;   Y6      =  G & QDBAR & QC    & QB    & QABAR ;   Y7      =  G & QDBAR & QC    & QB    & QA    ;   Y8      =  G & QD    & QCBAR & QBBAR & QABAR ;   Y9      =  G & QD    & QCBAR & QBBAR & QA    ;   Y10     =  G & QD    & QCBAR & QB    & QABAR ;   Y11     =  G & QD    & QCBAR & QB    & QA    ;   Y12     =  G & QD    & QC    & QBBAR & QABAR ;   Y13     =  G & QD    & QC    & QBBAR & QA    ;   Y14     =  G & QD    & QC    & QB    & QABAR ;   Y15     =  G & QD    & QC    & QB    & QA    ;');
		Connect(this.UHC4514LOG.pins.LE_I, this.pins.LE_I);
		Connect(this.UHC4514LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC4514LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC4514LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC4514LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC4514LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC4514LOG.pins.QA, QA);
		Connect(this.UHC4514LOG.pins.QB, QB);
		Connect(this.UHC4514LOG.pins.QC, QC);
		Connect(this.UHC4514LOG.pins.QD, QD);
		Connect(this.UHC4514LOG.pins.QABAR, QABAR);
		Connect(this.UHC4514LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC4514LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC4514LOG.pins.QDBAR, QDBAR);
		Connect(this.UHC4514LOG.pins.LE, LE);
		let GBAR = new Pin();
		Connect(this.UHC4514LOG.pins.GBAR, GBAR);
		Connect(this.UHC4514LOG.pins.A, A);
		Connect(this.UHC4514LOG.pins.B, B);
		Connect(this.UHC4514LOG.pins.C, C);
		Connect(this.UHC4514LOG.pins.D, D);
		let Y0 = new Pin();
		Connect(this.UHC4514LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC4514LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC4514LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC4514LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC4514LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.UHC4514LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.UHC4514LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.UHC4514LOG.pins.Y7, Y7);
		let Y8 = new Pin();
		Connect(this.UHC4514LOG.pins.Y8, Y8);
		let Y9 = new Pin();
		Connect(this.UHC4514LOG.pins.Y9, Y9);
		let Y10 = new Pin();
		Connect(this.UHC4514LOG.pins.Y10, Y10);
		let Y11 = new Pin();
		Connect(this.UHC4514LOG.pins.Y11, Y11);
		let Y12 = new Pin();
		Connect(this.UHC4514LOG.pins.Y12, Y12);
		let Y13 = new Pin();
		Connect(this.UHC4514LOG.pins.Y13, Y13);
		let Y14 = new Pin();
		Connect(this.UHC4514LOG.pins.Y14, Y14);
		let Y15 = new Pin();
		Connect(this.UHC4514LOG.pins.Y15, Y15);
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
 * DECODER_DEMULTIPLEXER 4-16 LINE WITH ADDRESS LATCHES
 */
class SN74HC4515 extends Component {
	constructor() {
		super();
		this.pins = {
			LE_I: new Pin(),
			GBAR_I: new Pin(),
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
		this.U1 = new dltch(4);
		Connect(this.U1.pins.PRESET, _D_HI);
		Connect(this.U1.pins.CLEAR, _D_HI);
		let LE = new Pin();
		Connect(this.U1.pins.GATE, LE);
		let A = new Pin();
		Connect(this.U1.pins.D0, A);
		let B = new Pin();
		Connect(this.U1.pins.D1, B);
		let C = new Pin();
		Connect(this.U1.pins.D2, C);
		let D = new Pin();
		Connect(this.U1.pins.D3, D);
		let QA = new Pin();
		Connect(this.U1.pins.Q0, QA);
		let QB = new Pin();
		Connect(this.U1.pins.Q1, QB);
		let QC = new Pin();
		Connect(this.U1.pins.Q2, QC);
		let QD = new Pin();
		Connect(this.U1.pins.Q3, QD);
		let QABAR = new Pin();
		Connect(this.U1.pins.QBAR0, QABAR);
		let QBBAR = new Pin();
		Connect(this.U1.pins.QBAR1, QBBAR);
		let QCBAR = new Pin();
		Connect(this.U1.pins.QBAR2, QCBAR);
		let QDBAR = new Pin();
		Connect(this.U1.pins.QBAR3, QDBAR);
		this.UHC4515LOG = new logicexp(['LE_I','GBAR_I','A_I','B_I','C_I','D_I','QA','QB','QC','QD','QABAR','QBBAR','QCBAR','QDBAR'], ['LE','GBAR','A','B','C','D','Y0','Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9','Y10','Y11','Y12','Y13','Y14','Y15'], []).Logic('   LE      =  LE_I ;   GBAR    =  GBAR_I ;   A       =  A_I ;   B       =  B_I ;   C       =  C_I ;   D       =  D_I ;let    G       =  !GBAR ;   G       =  !GBAR ;   Y0      =  !(G & QDBAR & QCBAR & QBBAR & QABAR) ;   Y1      =  !(G & QDBAR & QCBAR & QBBAR & QA   ) ;   Y2      =  !(G & QDBAR & QCBAR & QB    & QABAR) ;   Y3      =  !(G & QDBAR & QCBAR & QB    & QA   ) ;   Y4      =  !(G & QDBAR & QC    & QBBAR & QABAR) ;   Y5      =  !(G & QDBAR & QC    & QBBAR & QA   ) ;   Y6      =  !(G & QDBAR & QC    & QB    & QABAR) ;   Y7      =  !(G & QDBAR & QC    & QB    & QA   ) ;   Y8      =  !(G & QD    & QCBAR & QBBAR & QABAR) ;   Y9      =  !(G & QD    & QCBAR & QBBAR & QA   ) ;   Y10     =  !(G & QD    & QCBAR & QB    & QABAR) ;   Y11     =  !(G & QD    & QCBAR & QB    & QA   ) ;   Y12     =  !(G & QD    & QC    & QBBAR & QABAR) ;   Y13     =  !(G & QD    & QC    & QBBAR & QA   ) ;   Y14     =  !(G & QD    & QC    & QB    & QABAR) ;   Y15     =  !(G & QD    & QC    & QB    & QA   ) ;');
		Connect(this.UHC4515LOG.pins.LE_I, this.pins.LE_I);
		Connect(this.UHC4515LOG.pins.GBAR_I, this.pins.GBAR_I);
		Connect(this.UHC4515LOG.pins.A_I, this.pins.A_I);
		Connect(this.UHC4515LOG.pins.B_I, this.pins.B_I);
		Connect(this.UHC4515LOG.pins.C_I, this.pins.C_I);
		Connect(this.UHC4515LOG.pins.D_I, this.pins.D_I);
		Connect(this.UHC4515LOG.pins.QA, QA);
		Connect(this.UHC4515LOG.pins.QB, QB);
		Connect(this.UHC4515LOG.pins.QC, QC);
		Connect(this.UHC4515LOG.pins.QD, QD);
		Connect(this.UHC4515LOG.pins.QABAR, QABAR);
		Connect(this.UHC4515LOG.pins.QBBAR, QBBAR);
		Connect(this.UHC4515LOG.pins.QCBAR, QCBAR);
		Connect(this.UHC4515LOG.pins.QDBAR, QDBAR);
		Connect(this.UHC4515LOG.pins.LE, LE);
		let GBAR = new Pin();
		Connect(this.UHC4515LOG.pins.GBAR, GBAR);
		Connect(this.UHC4515LOG.pins.A, A);
		Connect(this.UHC4515LOG.pins.B, B);
		Connect(this.UHC4515LOG.pins.C, C);
		Connect(this.UHC4515LOG.pins.D, D);
		let Y0 = new Pin();
		Connect(this.UHC4515LOG.pins.Y0, Y0);
		let Y1 = new Pin();
		Connect(this.UHC4515LOG.pins.Y1, Y1);
		let Y2 = new Pin();
		Connect(this.UHC4515LOG.pins.Y2, Y2);
		let Y3 = new Pin();
		Connect(this.UHC4515LOG.pins.Y3, Y3);
		let Y4 = new Pin();
		Connect(this.UHC4515LOG.pins.Y4, Y4);
		let Y5 = new Pin();
		Connect(this.UHC4515LOG.pins.Y5, Y5);
		let Y6 = new Pin();
		Connect(this.UHC4515LOG.pins.Y6, Y6);
		let Y7 = new Pin();
		Connect(this.UHC4515LOG.pins.Y7, Y7);
		let Y8 = new Pin();
		Connect(this.UHC4515LOG.pins.Y8, Y8);
		let Y9 = new Pin();
		Connect(this.UHC4515LOG.pins.Y9, Y9);
		let Y10 = new Pin();
		Connect(this.UHC4515LOG.pins.Y10, Y10);
		let Y11 = new Pin();
		Connect(this.UHC4515LOG.pins.Y11, Y11);
		let Y12 = new Pin();
		Connect(this.UHC4515LOG.pins.Y12, Y12);
		let Y13 = new Pin();
		Connect(this.UHC4515LOG.pins.Y13, Y13);
		let Y14 = new Pin();
		Connect(this.UHC4515LOG.pins.Y14, Y14);
		let Y15 = new Pin();
		Connect(this.UHC4515LOG.pins.Y15, Y15);
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
 * 8-bit  Addressable Latches
 */
class SN74HC4724 extends Component {
	constructor() {
		super();
		this.pins = {
			GBAR: new Pin(),
			CLR: new Pin(),
			S0: new Pin(),
			S1: new Pin(),
			S2: new Pin(),
			D: new Pin(),
			Q0: new Pin(),
			Q1: new Pin(),
			Q2: new Pin(),
			Q3: new Pin(),
			Q4: new Pin(),
			Q5: new Pin(),
			Q6: new Pin(),
			Q7: new Pin(),
		}
		this.U10 = new bufa(6);
		Connect(this.U10.pins.IN0_0, this.pins.GBAR);
		Connect(this.U10.pins.IN1_0, this.pins.CLR);
		Connect(this.U10.pins.IN2_0, this.pins.S0);
		Connect(this.U10.pins.IN3_0, this.pins.S1);
		Connect(this.U10.pins.IN4_0, this.pins.S2);
		Connect(this.U10.pins.IN5_0, this.pins.D);
		let GB = new Pin();
		Connect(this.U10.pins.OUT0, GB);
		let CLRD = new Pin();
		Connect(this.U10.pins.OUT1, CLRD);
		let S0D = new Pin();
		Connect(this.U10.pins.OUT2, S0D);
		let S1D = new Pin();
		Connect(this.U10.pins.OUT3, S1D);
		let S2D = new Pin();
		Connect(this.U10.pins.OUT4, S2D);
		let DD = new Pin();
		Connect(this.U10.pins.OUT5, DD);
		this.U11 = new anda(3,9);
		let ED0 = new Pin();
		Connect(this.U11.pins.IN0_0, ED0);
		let G = new Pin();
		Connect(this.U11.pins.IN0_1, G);
		Connect(this.U11.pins.IN0_2, CLRD);
		let ED1 = new Pin();
		Connect(this.U11.pins.IN1_0, ED1);
		Connect(this.U11.pins.IN1_1, G);
		Connect(this.U11.pins.IN1_2, CLRD);
		let ED2 = new Pin();
		Connect(this.U11.pins.IN2_0, ED2);
		Connect(this.U11.pins.IN2_1, G);
		Connect(this.U11.pins.IN2_2, CLRD);
		let ED3 = new Pin();
		Connect(this.U11.pins.IN3_0, ED3);
		Connect(this.U11.pins.IN3_1, G);
		Connect(this.U11.pins.IN3_2, CLRD);
		let ED4 = new Pin();
		Connect(this.U11.pins.IN4_0, ED4);
		Connect(this.U11.pins.IN4_1, G);
		Connect(this.U11.pins.IN4_2, CLRD);
		let ED5 = new Pin();
		Connect(this.U11.pins.IN5_0, ED5);
		Connect(this.U11.pins.IN5_1, G);
		Connect(this.U11.pins.IN5_2, CLRD);
		let ED6 = new Pin();
		Connect(this.U11.pins.IN6_0, ED6);
		Connect(this.U11.pins.IN6_1, G);
		Connect(this.U11.pins.IN6_2, CLRD);
		let ED7 = new Pin();
		Connect(this.U11.pins.IN7_0, ED7);
		Connect(this.U11.pins.IN7_1, G);
		Connect(this.U11.pins.IN7_2, CLRD);
		Connect(this.U11.pins.IN8_0, GB);
		let CLRDD = new Pin();
		Connect(this.U11.pins.IN8_1, CLRDD);
		Connect(this.U11.pins.IN8_2, _D_HI);
		let CE0 = new Pin();
		Connect(this.U11.pins.OUT0, CE0);
		let CE1 = new Pin();
		Connect(this.U11.pins.OUT1, CE1);
		let CE2 = new Pin();
		Connect(this.U11.pins.OUT2, CE2);
		let CE3 = new Pin();
		Connect(this.U11.pins.OUT3, CE3);
		let CE4 = new Pin();
		Connect(this.U11.pins.OUT4, CE4);
		let CE5 = new Pin();
		Connect(this.U11.pins.OUT5, CE5);
		let CE6 = new Pin();
		Connect(this.U11.pins.OUT6, CE6);
		let CE7 = new Pin();
		Connect(this.U11.pins.OUT7, CE7);
		let XXEN = new Pin();
		Connect(this.U11.pins.OUT8, XXEN);
		this.U12 = new ora(2,8);
		Connect(this.U12.pins.IN0_0, CE0);
		let CLRB = new Pin();
		Connect(this.U12.pins.IN0_1, CLRB);
		Connect(this.U12.pins.IN1_0, CE1);
		Connect(this.U12.pins.IN1_1, CLRB);
		Connect(this.U12.pins.IN2_0, CE2);
		Connect(this.U12.pins.IN2_1, CLRB);
		Connect(this.U12.pins.IN3_0, CE3);
		Connect(this.U12.pins.IN3_1, CLRB);
		Connect(this.U12.pins.IN4_0, CE4);
		Connect(this.U12.pins.IN4_1, CLRB);
		Connect(this.U12.pins.IN5_0, CE5);
		Connect(this.U12.pins.IN5_1, CLRB);
		Connect(this.U12.pins.IN6_0, CE6);
		Connect(this.U12.pins.IN6_1, CLRB);
		Connect(this.U12.pins.IN7_0, CE7);
		Connect(this.U12.pins.IN7_1, CLRB);
		let CLR0 = new Pin();
		Connect(this.U12.pins.OUT0, CLR0);
		let CLR1 = new Pin();
		Connect(this.U12.pins.OUT1, CLR1);
		let CLR2 = new Pin();
		Connect(this.U12.pins.OUT2, CLR2);
		let CLR3 = new Pin();
		Connect(this.U12.pins.OUT3, CLR3);
		let CLR4 = new Pin();
		Connect(this.U12.pins.OUT4, CLR4);
		let CLR5 = new Pin();
		Connect(this.U12.pins.OUT5, CLR5);
		let CLR6 = new Pin();
		Connect(this.U12.pins.OUT6, CLR6);
		let CLR7 = new Pin();
		Connect(this.U12.pins.OUT7, CLR7);
		this.U13 = new buf();
		Connect(this.U13.pins.IN0, CLRD);
		Connect(this.U13.pins.OUT, CLRDD);
		this.UD1 = new inva(6);
		Connect(this.UD1.pins.IN0_0, GB);
		Connect(this.UD1.pins.IN1_0, CLRD);
		Connect(this.UD1.pins.IN2_0, S0D);
		Connect(this.UD1.pins.IN3_0, S1D);
		Connect(this.UD1.pins.IN4_0, S2D);
		Connect(this.UD1.pins.IN5_0, XXEN);
		Connect(this.UD1.pins.OUT0, G);
		Connect(this.UD1.pins.OUT1, CLRB);
		let S0B = new Pin();
		Connect(this.UD1.pins.OUT2, S0B);
		let S1B = new Pin();
		Connect(this.UD1.pins.OUT3, S1B);
		let S2B = new Pin();
		Connect(this.UD1.pins.OUT4, S2B);
		let XEN = new Pin();
		Connect(this.UD1.pins.OUT5, XEN);
		this.UD2 = new anda(3,8);
		Connect(this.UD2.pins.IN0_0, S2B);
		Connect(this.UD2.pins.IN0_1, S1B);
		Connect(this.UD2.pins.IN0_2, S0B);
		Connect(this.UD2.pins.IN1_0, S2B);
		Connect(this.UD2.pins.IN1_1, S1B);
		Connect(this.UD2.pins.IN1_2, S0D);
		Connect(this.UD2.pins.IN2_0, S2B);
		Connect(this.UD2.pins.IN2_1, S1D);
		Connect(this.UD2.pins.IN2_2, S0B);
		Connect(this.UD2.pins.IN3_0, S2B);
		Connect(this.UD2.pins.IN3_1, S1D);
		Connect(this.UD2.pins.IN3_2, S0D);
		Connect(this.UD2.pins.IN4_0, S2D);
		Connect(this.UD2.pins.IN4_1, S1B);
		Connect(this.UD2.pins.IN4_2, S0B);
		Connect(this.UD2.pins.IN5_0, S2D);
		Connect(this.UD2.pins.IN5_1, S1B);
		Connect(this.UD2.pins.IN5_2, S0D);
		Connect(this.UD2.pins.IN6_0, S2D);
		Connect(this.UD2.pins.IN6_1, S1D);
		Connect(this.UD2.pins.IN6_2, S0B);
		Connect(this.UD2.pins.IN7_0, S2D);
		Connect(this.UD2.pins.IN7_1, S1D);
		Connect(this.UD2.pins.IN7_2, S0D);
		let E0 = new Pin();
		Connect(this.UD2.pins.OUT0, E0);
		let E1 = new Pin();
		Connect(this.UD2.pins.OUT1, E1);
		let E2 = new Pin();
		Connect(this.UD2.pins.OUT2, E2);
		let E3 = new Pin();
		Connect(this.UD2.pins.OUT3, E3);
		let E4 = new Pin();
		Connect(this.UD2.pins.OUT4, E4);
		let E5 = new Pin();
		Connect(this.UD2.pins.OUT5, E5);
		let E6 = new Pin();
		Connect(this.UD2.pins.OUT6, E6);
		let E7 = new Pin();
		Connect(this.UD2.pins.OUT7, E7);
		this.UD3 = new anda(2,8);
		Connect(this.UD3.pins.IN0_0, E0);
		Connect(this.UD3.pins.IN0_1, G);
		Connect(this.UD3.pins.IN1_0, E1);
		Connect(this.UD3.pins.IN1_1, G);
		Connect(this.UD3.pins.IN2_0, E2);
		Connect(this.UD3.pins.IN2_1, G);
		Connect(this.UD3.pins.IN3_0, E3);
		Connect(this.UD3.pins.IN3_1, G);
		Connect(this.UD3.pins.IN4_0, E4);
		Connect(this.UD3.pins.IN4_1, G);
		Connect(this.UD3.pins.IN5_0, E5);
		Connect(this.UD3.pins.IN5_1, G);
		Connect(this.UD3.pins.IN6_0, E6);
		Connect(this.UD3.pins.IN6_1, G);
		Connect(this.UD3.pins.IN7_0, E7);
		Connect(this.UD3.pins.IN7_1, G);
		let EN0 = new Pin();
		Connect(this.UD3.pins.OUT0, EN0);
		let EN1 = new Pin();
		Connect(this.UD3.pins.OUT1, EN1);
		let EN2 = new Pin();
		Connect(this.UD3.pins.OUT2, EN2);
		let EN3 = new Pin();
		Connect(this.UD3.pins.OUT3, EN3);
		let EN4 = new Pin();
		Connect(this.UD3.pins.OUT4, EN4);
		let EN5 = new Pin();
		Connect(this.UD3.pins.OUT5, EN5);
		let EN6 = new Pin();
		Connect(this.UD3.pins.OUT6, EN6);
		let EN7 = new Pin();
		Connect(this.UD3.pins.OUT7, EN7);
		this.UD4 = new bufa(8);
		Connect(this.UD4.pins.IN0_0, E0);
		Connect(this.UD4.pins.IN1_0, E1);
		Connect(this.UD4.pins.IN2_0, E2);
		Connect(this.UD4.pins.IN3_0, E3);
		Connect(this.UD4.pins.IN4_0, E4);
		Connect(this.UD4.pins.IN5_0, E5);
		Connect(this.UD4.pins.IN6_0, E6);
		Connect(this.UD4.pins.IN7_0, E7);
		Connect(this.UD4.pins.OUT0, ED0);
		Connect(this.UD4.pins.OUT1, ED1);
		Connect(this.UD4.pins.OUT2, ED2);
		Connect(this.UD4.pins.OUT3, ED3);
		Connect(this.UD4.pins.OUT4, ED4);
		Connect(this.UD4.pins.OUT5, ED5);
		Connect(this.UD4.pins.OUT6, ED6);
		Connect(this.UD4.pins.OUT7, ED7);
		this.UL0 = new dltch(1);
		let PREB = new Pin();
		Connect(this.UL0.pins.PRESET, PREB);
		Connect(this.UL0.pins.CLEAR, CLR0);
		Connect(this.UL0.pins.GATE, EN0);
		Connect(this.UL0.pins.D0, DD);
		Connect(this.UL0.pins.Q0, this.pins.Q0);
		let _D_NC = new Pin();
		Connect(this.UL0.pins.QBAR0, _D_NC);
		this.UL1 = new dltch(1);
		Connect(this.UL1.pins.PRESET, PREB);
		Connect(this.UL1.pins.CLEAR, CLR1);
		Connect(this.UL1.pins.GATE, EN1);
		Connect(this.UL1.pins.D0, DD);
		Connect(this.UL1.pins.Q0, this.pins.Q1);
		Connect(this.UL1.pins.QBAR0, _D_NC);
		this.UL2 = new dltch(1);
		Connect(this.UL2.pins.PRESET, PREB);
		Connect(this.UL2.pins.CLEAR, CLR2);
		Connect(this.UL2.pins.GATE, EN2);
		Connect(this.UL2.pins.D0, DD);
		Connect(this.UL2.pins.Q0, this.pins.Q2);
		Connect(this.UL2.pins.QBAR0, _D_NC);
		this.UL3 = new dltch(1);
		Connect(this.UL3.pins.PRESET, PREB);
		Connect(this.UL3.pins.CLEAR, CLR3);
		Connect(this.UL3.pins.GATE, EN3);
		Connect(this.UL3.pins.D0, DD);
		Connect(this.UL3.pins.Q0, this.pins.Q3);
		Connect(this.UL3.pins.QBAR0, _D_NC);
		this.UL4 = new dltch(1);
		Connect(this.UL4.pins.PRESET, PREB);
		Connect(this.UL4.pins.CLEAR, CLR4);
		Connect(this.UL4.pins.GATE, EN4);
		Connect(this.UL4.pins.D0, DD);
		Connect(this.UL4.pins.Q0, this.pins.Q4);
		Connect(this.UL4.pins.QBAR0, _D_NC);
		this.UL5 = new dltch(1);
		Connect(this.UL5.pins.PRESET, PREB);
		Connect(this.UL5.pins.CLEAR, CLR5);
		Connect(this.UL5.pins.GATE, EN5);
		Connect(this.UL5.pins.D0, DD);
		Connect(this.UL5.pins.Q0, this.pins.Q5);
		Connect(this.UL5.pins.QBAR0, _D_NC);
		this.UL6 = new dltch(1);
		Connect(this.UL6.pins.PRESET, PREB);
		Connect(this.UL6.pins.CLEAR, CLR6);
		Connect(this.UL6.pins.GATE, EN6);
		Connect(this.UL6.pins.D0, DD);
		Connect(this.UL6.pins.Q0, this.pins.Q6);
		Connect(this.UL6.pins.QBAR0, _D_NC);
		this.UL7 = new dltch(1);
		Connect(this.UL7.pins.PRESET, PREB);
		Connect(this.UL7.pins.CLEAR, CLR7);
		Connect(this.UL7.pins.GATE, EN7);
		Connect(this.UL7.pins.D0, DD);
		Connect(this.UL7.pins.Q0, this.pins.Q7);
		Connect(this.UL7.pins.QBAR0, _D_NC);
		this.UL8 = new buf();
		Connect(this.UL8.pins.IN0, _D_HI);
		Connect(this.UL8.pins.OUT, PREB);
		this.UL9 = new bufa(3);
		Connect(this.UL9.pins.IN0_0, G);
		let G1 = new Pin();
		Connect(this.UL9.pins.IN1_0, G1);
		let G2 = new Pin();
		Connect(this.UL9.pins.IN2_0, G2);
		let GD = new Pin();
		Connect(this.UL9.pins.OUT0, GD);
		Connect(this.UL9.pins.OUT1, G2);
		let G3 = new Pin();
		Connect(this.UL9.pins.OUT2, G3);
		this.UL10 = new and(2);
		Connect(this.UL10.pins.IN0, this.pins.GBAR);
		Connect(this.UL10.pins.IN1, GD);
		Connect(this.UL10.pins.OUT, G1);
		this.UL11 = new or(2);
		Connect(this.UL11.pins.IN0, G1);
		Connect(this.UL11.pins.IN1, G3);
		let CLK = new Pin();
		Connect(this.UL11.pins.OUT, CLK);
		this.UL12 = new suhdck(3);
		this.UL13 = new or(6);
		let SU0 = new Pin();
		Connect(this.UL13.pins.IN0, SU0);
		let SU1 = new Pin();
		Connect(this.UL13.pins.IN1, SU1);
		let SU2 = new Pin();
		Connect(this.UL13.pins.IN2, SU2);
		let HD0 = new Pin();
		Connect(this.UL13.pins.IN3, HD0);
		let HD1 = new Pin();
		Connect(this.UL13.pins.IN4, HD1);
		let HD2 = new Pin();
		Connect(this.UL13.pins.IN5, HD2);
		let ENX = new Pin();
		Connect(this.UL13.pins.OUT, ENX);
		this.UL14 = new and(2);
		Connect(this.UL14.pins.IN0, XEN);
		Connect(this.UL14.pins.IN1, ENX);
		let ENCX = new Pin();
		Connect(this.UL14.pins.OUT, ENCX);
		this.UL15 = new buf3a(9);
		let _D_X = new Pin();
		Connect(this.UL15.pins.IN0_0, _D_X);
		Connect(this.UL15.pins.IN1_0, _D_X);
		Connect(this.UL15.pins.IN2_0, _D_X);
		Connect(this.UL15.pins.IN3_0, _D_X);
		Connect(this.UL15.pins.IN4_0, _D_X);
		Connect(this.UL15.pins.IN5_0, _D_X);
		Connect(this.UL15.pins.IN6_0, _D_X);
		Connect(this.UL15.pins.IN7_0, _D_X);
		Connect(this.UL15.pins.IN8_0, _D_X);
		Connect(this.UL15.pins.EN, ENCX);
		Connect(this.UL15.pins.OUT0, PREB);
		Connect(this.UL15.pins.OUT1, CLR0);
		Connect(this.UL15.pins.OUT2, CLR1);
		Connect(this.UL15.pins.OUT3, CLR2);
		Connect(this.UL15.pins.OUT4, CLR3);
		Connect(this.UL15.pins.OUT5, CLR4);
		Connect(this.UL15.pins.OUT6, CLR5);
		Connect(this.UL15.pins.OUT7, CLR6);
		Connect(this.UL15.pins.OUT8, CLR7);
	}
}
/**
 * 6-Section Multifunction (Nand, Invert, Nor, Flip-Flop) Circuits
 */
class SN74HC7074 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A: new Pin(),
			_2A: new Pin(),
			_3A: new Pin(),
			_3B: new Pin(),
			_6A: new Pin(),
			_6B: new Pin(),
			_1Y: new Pin(),
			_2Y: new Pin(),
			_3Y: new Pin(),
			_6Y: new Pin(),
			_4CLK: new Pin(),
			_4PREBAR: new Pin(),
			_4CLRBAR: new Pin(),
			_4D: new Pin(),
			_4Q: new Pin(),
			_4QBAR: new Pin(),
			_5CLK: new Pin(),
			_5PREBAR: new Pin(),
			_5CLRBAR: new Pin(),
			_5D: new Pin(),
			_5Q: new Pin(),
			_5QBAR: new Pin(),
		}
		this.U0 = new bufa(4);
		Connect(this.U0.pins.IN0_0, this.pins._4PREBAR);
		Connect(this.U0.pins.IN1_0, this.pins._4CLRBAR);
		Connect(this.U0.pins.IN2_0, this.pins._5PREBAR);
		Connect(this.U0.pins.IN3_0, this.pins._5CLRBAR);
		let _4PREB = new Pin();
		Connect(this.U0.pins.OUT0, _4PREB);
		let _4CLRB = new Pin();
		Connect(this.U0.pins.OUT1, _4CLRB);
		let _5PREB = new Pin();
		Connect(this.U0.pins.OUT2, _5PREB);
		let _5CLRB = new Pin();
		Connect(this.U0.pins.OUT3, _5CLRB);
		this.U1 = new inva(2);
		Connect(this.U1.pins.IN0_0, this.pins._1A);
		Connect(this.U1.pins.IN1_0, this.pins._2A);
		Connect(this.U1.pins.OUT0, this.pins._1Y);
		Connect(this.U1.pins.OUT1, this.pins._2Y);
		this.U2 = new nand(2);
		Connect(this.U2.pins.IN0, this.pins._3A);
		Connect(this.U2.pins.IN1, this.pins._3B);
		Connect(this.U2.pins.OUT, this.pins._3Y);
		this.U3 = new nor(2);
		Connect(this.U3.pins.IN0, this.pins._6A);
		Connect(this.U3.pins.IN1, this.pins._6B);
		Connect(this.U3.pins.OUT, this.pins._6Y);
		this.U4 = new dff(1);
		Connect(this.U4.pins.PRESET, _4PREB);
		Connect(this.U4.pins.CLEAR, _4CLRB);
		Connect(this.U4.pins.CLOCK, this.pins._4CLK);
		Connect(this.U4.pins.D0, this.pins._4D);
		Connect(this.U4.pins.Q0, this.pins._4Q);
		Connect(this.U4.pins.QBAR0, this.pins._4QBAR);
		this.U5 = new dff(1);
		Connect(this.U5.pins.PRESET, _5PREB);
		Connect(this.U5.pins.CLEAR, _5CLRB);
		Connect(this.U5.pins.CLOCK, this.pins._5CLK);
		Connect(this.U5.pins.D0, this.pins._5D);
		Connect(this.U5.pins.Q0, this.pins._5Q);
		Connect(this.U5.pins.QBAR0, this.pins._5QBAR);
	}
}
/**
 * 6-Section Multifunction (Nand, Invert, Flip-Flop) Circuits
 */
class SN74HC7075 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A: new Pin(),
			_2A: new Pin(),
			_3A: new Pin(),
			_3B: new Pin(),
			_6A: new Pin(),
			_6B: new Pin(),
			_1Y: new Pin(),
			_2Y: new Pin(),
			_3Y: new Pin(),
			_6Y: new Pin(),
			_4CLK: new Pin(),
			_4PREBAR: new Pin(),
			_4CLRBAR: new Pin(),
			_4D: new Pin(),
			_4Q: new Pin(),
			_4QBAR: new Pin(),
			_5CLK: new Pin(),
			_5PREBAR: new Pin(),
			_5CLRBAR: new Pin(),
			_5D: new Pin(),
			_5Q: new Pin(),
			_5QBAR: new Pin(),
		}
		this.U1 = new bufa(4);
		Connect(this.U1.pins.IN0_0, this.pins._4PREBAR);
		Connect(this.U1.pins.IN1_0, this.pins._4CLRBAR);
		Connect(this.U1.pins.IN2_0, this.pins._5PREBAR);
		Connect(this.U1.pins.IN3_0, this.pins._5CLRBAR);
		let _4PREB = new Pin();
		Connect(this.U1.pins.OUT0, _4PREB);
		let _4CLRB = new Pin();
		Connect(this.U1.pins.OUT1, _4CLRB);
		let _5PREB = new Pin();
		Connect(this.U1.pins.OUT2, _5PREB);
		let _5CLRB = new Pin();
		Connect(this.U1.pins.OUT3, _5CLRB);
		this.U2 = new inva(2);
		Connect(this.U2.pins.IN0_0, this.pins._1A);
		Connect(this.U2.pins.IN1_0, this.pins._2A);
		Connect(this.U2.pins.OUT0, this.pins._1Y);
		Connect(this.U2.pins.OUT1, this.pins._2Y);
		this.U3 = new nanda(2,2);
		Connect(this.U3.pins.IN0_0, this.pins._3A);
		Connect(this.U3.pins.IN0_1, this.pins._3B);
		Connect(this.U3.pins.IN1_0, this.pins._6A);
		Connect(this.U3.pins.IN1_1, this.pins._6B);
		Connect(this.U3.pins.OUT0, this.pins._3Y);
		Connect(this.U3.pins.OUT1, this.pins._6Y);
		this.U4 = new dff(1);
		Connect(this.U4.pins.PRESET, _4PREB);
		Connect(this.U4.pins.CLEAR, _4CLRB);
		Connect(this.U4.pins.CLOCK, this.pins._4CLK);
		Connect(this.U4.pins.D0, this.pins._4D);
		Connect(this.U4.pins.Q0, this.pins._4Q);
		Connect(this.U4.pins.QBAR0, this.pins._4QBAR);
		this.U5 = new dff(1);
		Connect(this.U5.pins.PRESET, _5PREB);
		Connect(this.U5.pins.CLEAR, _5CLRB);
		Connect(this.U5.pins.CLOCK, this.pins._5CLK);
		Connect(this.U5.pins.D0, this.pins._5D);
		Connect(this.U5.pins.Q0, this.pins._5Q);
		Connect(this.U5.pins.QBAR0, this.pins._5QBAR);
	}
}
/**
 * 6-Section Multifunction (Invert, Nor, Flip-Flop) Circuits
 */
class SN74HC7076 extends Component {
	constructor() {
		super();
		this.pins = {
			_1A: new Pin(),
			_2A: new Pin(),
			_3A: new Pin(),
			_3B: new Pin(),
			_6A: new Pin(),
			_6B: new Pin(),
			_1Y: new Pin(),
			_2Y: new Pin(),
			_3Y: new Pin(),
			_6Y: new Pin(),
			_4CLK: new Pin(),
			_4PREBAR: new Pin(),
			_4CLRBAR: new Pin(),
			_4D: new Pin(),
			_4Q: new Pin(),
			_4QBAR: new Pin(),
			_5CLK: new Pin(),
			_5PREBAR: new Pin(),
			_5CLRBAR: new Pin(),
			_5D: new Pin(),
			_5Q: new Pin(),
			_5QBAR: new Pin(),
		}
		this.U1 = new bufa(4);
		Connect(this.U1.pins.IN0_0, this.pins._4PREBAR);
		Connect(this.U1.pins.IN1_0, this.pins._4CLRBAR);
		Connect(this.U1.pins.IN2_0, this.pins._5PREBAR);
		Connect(this.U1.pins.IN3_0, this.pins._5CLRBAR);
		let _4PREB = new Pin();
		Connect(this.U1.pins.OUT0, _4PREB);
		let _4CLRB = new Pin();
		Connect(this.U1.pins.OUT1, _4CLRB);
		let _5PREB = new Pin();
		Connect(this.U1.pins.OUT2, _5PREB);
		let _5CLRB = new Pin();
		Connect(this.U1.pins.OUT3, _5CLRB);
		this.U2 = new inva(2);
		Connect(this.U2.pins.IN0_0, this.pins._1A);
		Connect(this.U2.pins.IN1_0, this.pins._2A);
		Connect(this.U2.pins.OUT0, this.pins._1Y);
		Connect(this.U2.pins.OUT1, this.pins._2Y);
		this.U3 = new nora(2,2);
		Connect(this.U3.pins.IN0_0, this.pins._3A);
		Connect(this.U3.pins.IN0_1, this.pins._3B);
		Connect(this.U3.pins.IN1_0, this.pins._6A);
		Connect(this.U3.pins.IN1_1, this.pins._6B);
		Connect(this.U3.pins.OUT0, this.pins._3Y);
		Connect(this.U3.pins.OUT1, this.pins._6Y);
		this.U4 = new dff(1);
		Connect(this.U4.pins.PRESET, _4PREB);
		Connect(this.U4.pins.CLEAR, _4CLRB);
		Connect(this.U4.pins.CLOCK, this.pins._4CLK);
		Connect(this.U4.pins.D0, this.pins._4D);
		Connect(this.U4.pins.Q0, this.pins._4Q);
		Connect(this.U4.pins.QBAR0, this.pins._4QBAR);
		this.U5 = new dff(1);
		Connect(this.U5.pins.PRESET, _5PREB);
		Connect(this.U5.pins.CLEAR, _5CLRB);
		Connect(this.U5.pins.CLOCK, this.pins._5CLK);
		Connect(this.U5.pins.D0, this.pins._5D);
		Connect(this.U5.pins.Q0, this.pins._5Q);
		Connect(this.U5.pins.QBAR0, this.pins._5QBAR);
	}
}
/**
 * Quadruple 2-Input Exclusive-Nor Gates w_ Totem-Pole Outputs
 */
class SN74HC7266 extends Component {
	constructor() {
		super();
		this.pins = {
			A: new Pin(),
			B: new Pin(),
			Y: new Pin(),
		}
		this.U1 = new nxor();
		Connect(this.U1.pins.IN0, this.pins.A);
		Connect(this.U1.pins.IN1, this.pins.B);
		Connect(this.U1.pins.OUT, this.pins.Y);
	}
}
module.exports.SN74HC00 = SN74HC00;
module.exports.SN74HC01 = SN74HC01;
module.exports.SN74HC02 = SN74HC02;
module.exports.SN74HC03 = SN74HC03;
module.exports.SN74HC04 = SN74HC04;
module.exports.SN74HC05 = SN74HC05;
module.exports.SN74HC08 = SN74HC08;
module.exports.SN74HC09 = SN74HC09;
module.exports.SN74HC10 = SN74HC10;
module.exports.SN74HC11 = SN74HC11;
module.exports.SN74HC14 = SN74HC14;
module.exports.SN74HC20 = SN74HC20;
module.exports.SN74HC21 = SN74HC21;
module.exports.SN74HC27 = SN74HC27;
module.exports.SN74HC30 = SN74HC30;
module.exports.SN74HC32 = SN74HC32;
module.exports.SN74HC35 = SN74HC35;
module.exports.SN74HC36 = SN74HC36;
module.exports.SN74HC42 = SN74HC42;
module.exports.SN74HC51 = SN74HC51;
module.exports.SN74HC73 = SN74HC73;
module.exports.SN74HC74 = SN74HC74;
module.exports.SN74HC75 = SN74HC75;
module.exports.SN74HC76 = SN74HC76;
module.exports.SN74HC78 = SN74HC78;
module.exports.SN74HC85A = SN74HC85A;
module.exports.SN74HC86 = SN74HC86;
module.exports.SN74HC93 = SN74HC93;
module.exports.SN74HC95 = SN74HC95;
module.exports.SN74HC107 = SN74HC107;
module.exports.SN74HC109 = SN74HC109;
module.exports.SN74HC112 = SN74HC112;
module.exports.SN74HC113 = SN74HC113;
module.exports.SN74HC114 = SN74HC114;
module.exports.SN74HC125 = SN74HC125;
module.exports.SN74HC126 = SN74HC126;
module.exports.SN74HC132 = SN74HC132;
module.exports.SN74HC133 = SN74HC133;
module.exports.SN74HC137 = SN74HC137;
module.exports.SN74HC138 = SN74HC138;
module.exports.SN74HC139 = SN74HC139;
module.exports.SN74HC147 = SN74HC147;
module.exports.SN74HC148 = SN74HC148;
module.exports.SN74HC151 = SN74HC151;
module.exports.SN74HC152 = SN74HC152;
module.exports.SN74HC153 = SN74HC153;
module.exports.SN74HC154 = SN74HC154;
module.exports.SN74HC155 = SN74HC155;
module.exports.SN74HC157 = SN74HC157;
module.exports.SN74HC158 = SN74HC158;
module.exports.SN74HC160 = SN74HC160;
module.exports.SN74HC161 = SN74HC161;
module.exports.SN74HC162 = SN74HC162;
module.exports.SN74HC163 = SN74HC163;
module.exports.SN74HC164 = SN74HC164;
module.exports.SN74HC165 = SN74HC165;
module.exports.SN74HC166 = SN74HC166;
module.exports.SN74HC173 = SN74HC173;
module.exports.SN74HC174 = SN74HC174;
module.exports.SN74HC175 = SN74HC175;
module.exports.SN74HC180 = SN74HC180;
module.exports.SN74HC181 = SN74HC181;
module.exports.SN74HC182 = SN74HC182;
module.exports.SN74HC190 = SN74HC190;
module.exports.SN74HC191 = SN74HC191;
module.exports.SN74HC192 = SN74HC192;
module.exports.SN74HC193 = SN74HC193;
module.exports.SN74HC194 = SN74HC194;
module.exports.SN74HC195 = SN74HC195;
module.exports.SN74HC237 = SN74HC237;
module.exports.SN74HC238 = SN74HC238;
module.exports.SN74HC239 = SN74HC239;
module.exports.SN74HC240 = SN74HC240;
module.exports.SN74HC241 = SN74HC241;
module.exports.SN74HC242 = SN74HC242;
module.exports.SN74HC243 = SN74HC243;
module.exports.SN74HC244 = SN74HC244;
module.exports.SN74HC245 = SN74HC245;
module.exports.SN74HC251 = SN74HC251;
module.exports.SN74HC253 = SN74HC253;
module.exports.SN74HC257 = SN74HC257;
module.exports.SN74HC258 = SN74HC258;
module.exports.SN74HC259 = SN74HC259;
module.exports.SN74HC266 = SN74HC266;
module.exports.SN74HC273 = SN74HC273;
module.exports.SN74HC279 = SN74HC279;
module.exports.SN74HC280 = SN74HC280;
module.exports.SN74HC283 = SN74HC283;
module.exports.SN74HC298 = SN74HC298;
module.exports.SN74HC299 = SN74HC299;
module.exports.SN74HC352 = SN74HC352;
module.exports.SN74HC353 = SN74HC353;
module.exports.SN74HC354 = SN74HC354;
module.exports.SN74HC356 = SN74HC356;
module.exports.SN74HC365 = SN74HC365;
module.exports.SN74HC366 = SN74HC366;
module.exports.SN74HC367 = SN74HC367;
module.exports.SN74HC368 = SN74HC368;
module.exports.SN74HC373 = SN74HC373;
module.exports.SN74HC374 = SN74HC374;
module.exports.SN74HC375 = SN74HC375;
module.exports.SN74HC377 = SN74HC377;
module.exports.SNHC377DAT = SNHC377DAT;
module.exports.SN74HC378 = SN74HC378;
module.exports.SNHC378DAT = SNHC378DAT;
module.exports.SN74HC379 = SN74HC379;
module.exports.SNHC379DAT = SNHC379DAT;
module.exports.SN74HC386 = SN74HC386;
module.exports.SN74HC390 = SN74HC390;
module.exports.SN74HC393 = SN74HC393;
module.exports.SN74HC490 = SN74HC490;
module.exports.SN74HC533 = SN74HC533;
module.exports.SN74HC534 = SN74HC534;
module.exports.SN74HC540 = SN74HC540;
module.exports.SN74HC541 = SN74HC541;
module.exports.SN74HC563 = SN74HC563;
module.exports.SN74HC564 = SN74HC564;
module.exports.SN74HC573 = SN74HC573;
module.exports.SN74HC574 = SN74HC574;
module.exports.SN74HC590A = SN74HC590A;
module.exports.SN74HC594 = SN74HC594;
module.exports.SN74HC595 = SN74HC595;
module.exports.SN74HC604 = SN74HC604;
module.exports.SNHC604DAT = SNHC604DAT;
module.exports.SN74HC620 = SN74HC620;
module.exports.SN74HC623 = SN74HC623;
module.exports.SN74HC640 = SN74HC640;
module.exports.SN74HC643 = SN74HC643;
module.exports.SN74HC645 = SN74HC645;
module.exports.SN74HC646 = SN74HC646;
module.exports.SN74HC648 = SN74HC648;
module.exports.SN74HC651 = SN74HC651;
module.exports.SN74HC652 = SN74HC652;
module.exports.SN74HC670 = SN74HC670;
module.exports.SN74HC677 = SN74HC677;
module.exports.SN74HC678 = SN74HC678;
module.exports.SN74HC679 = SN74HC679;
module.exports.SN74HC680 = SN74HC680;
module.exports.SN74HC684 = SN74HC684;
module.exports.SN74HC688 = SN74HC688;
module.exports.SN74HC804 = SN74HC804;
module.exports.SN74HC805 = SN74HC805;
module.exports.SN74HC808 = SN74HC808;
module.exports.SN74HC832 = SN74HC832;
module.exports.SN74HC4002 = SN74HC4002;
module.exports.SN74HC4020 = SN74HC4020;
module.exports.SN74HC4024 = SN74HC4024;
module.exports.SN74HC4040 = SN74HC4040;
module.exports.SN74HC4075 = SN74HC4075;
module.exports.SN74HC4078A = SN74HC4078A;
module.exports.SN74HC4514 = SN74HC4514;
module.exports.SN74HC4515 = SN74HC4515;
module.exports.SN74HC4724 = SN74HC4724;
module.exports.SN74HC7074 = SN74HC7074;
module.exports.SN74HC7075 = SN74HC7075;
module.exports.SN74HC7076 = SN74HC7076;
module.exports.SN74HC7266 = SN74HC7266;