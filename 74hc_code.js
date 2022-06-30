/**
 * Quadruple 2-input Positive-Nand Gates
 */
class SN74HC00 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nand(2);
	}
}

/**
 * Quadruple 2-input Positive-Nand Gates with Open-Collector Outputs
 */
class SN74HC01 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nand(2);
	}
}

/**
 * Quadruple 2-input Positive-Nor Gates
 */
class SN74HC02 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nor(2);
	}
}

/**
 * Quadruple 2-input Positive-Nand Gates with Open-Collector Outputs
 */
class SN74HC03 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nand(2);
	}
}

/**
 * Hex Inverters
 */
class SN74HC04 {
	constructor() {
		this.pins = {
			A: false,
			Y: false,
		}
		this.U1 = new inv();
	}
}

/**
 * Hex Inverters with Open-Collector Outputs
 */
class SN74HC05 {
	constructor() {
		this.pins = {
			A: false,
			Y: false,
		}
		this.U1 = new inv();
	}
}

/**
 * Quadruple 2-input Positive-And Gates
 */
class SN74HC08 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new and(2);
	}
}

/**
 * Quadruple 2-input Positive-And Gates with Open-Collector Outputs
 */
class SN74HC09 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new and(2);
	}
}

/**
 * Triple 3-input Positive-Nand Gates
 */
class SN74HC10 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			Y: false,
		}
		this.U1 = new nand(3);
	}
}

/**
 * Triple 3-input Positive-And Gates
 */
class SN74HC11 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			Y: false,
		}
		this.U1 = new and(3);
	}
}

/**
 * Hex Schmitt-Trigger Inverters
 */
class SN74HC14 {
	constructor() {
		this.pins = {
			A: false,
			Y: false,
		}
		this.U1 = new inv();
	}
}

/**
 * Dual 4-input Positive-Nand Gates
 */
class SN74HC20 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			D: false,
			Y: false,
		}
		this.U1 = new nand(4);
	}
}

/**
 * Dual 4-input Positive-And Gates
 */
class SN74HC21 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			D: false,
			Y: false,
		}
		this.U1 = new and(4);
	}
}

/**
 * Triple 3-input Positive-Nor Gates
 */
class SN74HC27 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			Y: false,
		}
		this.U1 = new nor(3);
	}
}

/**
 * 8-input Positive-Nand Gates
 */
class SN74HC30 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			D: false,
			E: false,
			F: false,
			G: false,
			H: false,
			Y: false,
		}
		this.U1 = new nand(8);
	}
}

/**
 * Quadruple 2-input Positive-Or Gates
 */
class SN74HC32 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new or(2);
	}
}

/**
 * Hex Noninverters with Open-Collector Outputs
 */
class SN74HC35 {
	constructor() {
		this.pins = {
			A: false,
			Y: false,
		}
		this.U1 = new buf();
	}
}

/**
 * Quadruple 2-input Positive-Nor Gate
 */
class SN74HC36 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nor(2);
	}
}

/**
 * DECODER BCD-DECIMAL 4-10 LINE
 */
class SN74HC42 {
	constructor() {
		this.pins = {
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
			Y5_O: false,
			Y6_O: false,
			Y7_O: false,
			Y8_O: false,
			Y9_O: false,
		}
		this.UHC42LOG = new logicexp(4,14);
	}
}

class SN74HC51 {
	constructor() {
		this.pins = {
			A1: false,
			B1: false,
			C1: false,
			D1: false,
			E1: false,
			F1: false,
			Y1: false,
			A2: false,
			B2: false,
			C2: false,
			D2: false,
			Y2: false,
		}
		this.U1 = new aoi(3,2);
		this.U2 = new aoi(2,2);
	}
}

/**
 * Dual J-K Flip-Flops with Clear
 */
class SN74HC73 {
	constructor() {
		this.pins = {
			CLK: false,
			CLRBAR: false,
			J: false,
			K: false,
			Q: false,
			QBAR: false,
		}
		this.U1 = new jkff(1);
	}
}

/**
 * Dual D-Type Positive-Edge-Triggered Flip-Flops w_ Preset & Clear
 */
class SN74HC74 {
	constructor() {
		this.pins = {
			_1CLRBAR: false,
			_1D: false,
			_1CLK: false,
			_1PREBAR: false,
			_1Q: false,
			_1QBAR: false,
		}
		this.UFF1 = new dff(1);
	}
}

/**
 * 4-bit bistable latches (dual 2-bit common clock)
 */
class SN74HC75 {
	constructor() {
		this.pins = {
			_1D: false,
			_2D: false,
			C: false,
			_1Q: false,
			_1QBAR: false,
			_2Q: false,
			_2QBAR: false,
		}
		this.UIBUF = new bufa(3);
		this.U12 = new dltch(2);
	}
}

/**
 * Dual J-K Flip-Flops with Preset and Clear
 */
class SN74HC76 {
	constructor() {
		this.pins = {
			CLK: false,
			PREBAR: false,
			CLRBAR: false,
			J: false,
			K: false,
			Q: false,
			QBAR: false,
		}
		this.U1 = new jkff(1);
	}
}

/**
 * Dual J-K Flip-Flops with Preset, Common Clear, and Common Clock
 */
class SN74HC78 {
	constructor() {
		this.pins = {
			CLK: false,
			CLRBAR: false,
			_1PREBAR: false,
			_1J: false,
			_1K: false,
			_1Q: false,
			_1QBAR: false,
			_2PREBAR: false,
			_2J: false,
			_2K: false,
			_2Q: false,
			_2QBAR: false,
		}
		this.UIBUF = new bufa(4);
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
	}
}

/**
 * 4-BIT MAGNITUDE COMPARATOR
 */
class SN74HC85A {
	constructor() {
		this.pins = {
			P3_I: false,
			P2_I: false,
			P1_I: false,
			P0_I: false,
			Q3_I: false,
			Q2_I: false,
			Q1_I: false,
			Q0_I: false,
			PGQ_I: false,
			PEQ_I: false,
			PLQ_I: false,
			YPGQ_O: false,
			YPEQ_O: false,
			YPLQ_O: false,
		}
		this.UHC85ALOG = new logicexp(11,14);
	}
}

/**
 * Quadruple 2-input Exclusive-Or Gates
 */
class SN74HC86 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new xor();
	}
}

/**
 * COUNTER BINARY 4-BIT, ASYNCHRONOUS
 */
class SN74HC93 {
	constructor() {
		this.pins = {
			CKA_I: false,
			CKB_I: false,
			R01_I: false,
			R02_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new bufa(4);
		this.U6 = new nand(2);
	}
}

/**
 * 4-BIT PARALLEL SHIFT REGISTERS
 */
class SN74HC95 {
	constructor() {
		this.pins = {
			MODE_I: false,
			CLK1_I: false,
			CLK2_I: false,
			SER_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.UHC95LOG = new logicexp(11,13);
		this.U1 = new dff(4);
	}
}

/**
 * Dual J-K Flip-Flops with Clear
 */
class SN74HC107 {
	constructor() {
		this.pins = {
			CLK: false,
			CLRBAR: false,
			J: false,
			K: false,
			Q: false,
			QBAR: false,
		}
		this.U1 = new jkff(1);
	}
}

/**
 * Dual J-Kbar Positive-Edge-Triggered Flip-Flops w_ Preset & Clear
 */
class SN74HC109 {
	constructor() {
		this.pins = {
			CLK: false,
			PREBAR: false,
			CLRBAR: false,
			J: false,
			KBAR: false,
			Q: false,
			QBAR: false,
		}
		this.U1 = new jkff(1);
		this.U2 = new inva(2);
	}
}

/**
 * Dual J-K Negative-Edge-Triggered Flip-Flops with Preset & Clear
 */
class SN74HC112 {
	constructor() {
		this.pins = {
			CLK: false,
			PREBAR: false,
			CLRBAR: false,
			J: false,
			K: false,
			Q: false,
			QBAR: false,
		}
		this.U1 = new jkff(1);
	}
}

/**
 * Dual J-K Negative-Edge-Triggered Flip-Flops with Preset
 */
class SN74HC113 {
	constructor() {
		this.pins = {
			CLK: false,
			PREBAR: false,
			J: false,
			K: false,
			Q: false,
			QBAR: false,
		}
		this.U1 = new jkff(1);
	}
}

/**
 * Dual J-K Negative-Edge-Triggered Flip-Flops with Preset & Common Clear, & Common Clock
 */
class SN74HC114 {
	constructor() {
		this.pins = {
			CLK: false,
			CLRBAR: false,
			_1PREBAR: false,
			_1J: false,
			_1K: false,
			_1Q: false,
			_1QBAR: false,
			_2PREBAR: false,
			_2J: false,
			_2K: false,
			_2Q: false,
			_2QBAR: false,
		}
		this.UIBUF = new bufa(4);
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
	}
}

/**
 * Quadruple Bus Buffer with 3-state Outputs
 */
class SN74HC125 {
	constructor() {
		this.pins = {
			A: false,
			GBAR: false,
			Y: false,
		}
		this.U1 = new buf3();
		this.U2 = new inv();
	}
}

/**
 * Quadruple Bus Buffer with 3-state Outputs
 */
class SN74HC126 {
	constructor() {
		this.pins = {
			A: false,
			G: false,
			Y: false,
		}
		this.U1 = new buf3();
	}
}

/**
 * Quadruple 2-input Positive-Nand Schmitt Triggers
 */
class SN74HC132 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nand(2);
	}
}

/**
 * 13-input Positive-Nand Gates
 */
class SN74HC133 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			D: false,
			E: false,
			F: false,
			G: false,
			H: false,
			I: false,
			J: false,
			K: false,
			L: false,
			M: false,
			Y: false,
		}
		this.U1 = new nand(13);
	}
}

/**
 * DECODER_DEMULTIPLEXER 3-8 LINE WITH ADDRESS LATCHES
 */
class SN74HC137 {
	constructor() {
		this.pins = {
			G1_I: false,
			G2BAR_I: false,
			GLBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
			Y5_O: false,
			Y6_O: false,
			Y7_O: false,
		}
		this.U1 = new dltch(3);
		this.UHC137LOG = new logicexp(12,14);
	}
}

/**
 * DECODER_DEMULTIPLEXER 3-8 LINE
 */
class SN74HC138 {
	constructor() {
		this.pins = {
			G1_I: false,
			G2ABAR_I: false,
			G2BBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
			Y5_O: false,
			Y6_O: false,
			Y7_O: false,
		}
		this.UHC138LOG = new logicexp(6,9);
	}
}

/**
 * DECODER_DEMULTIPLEXER 2-4 LINE
 */
class SN74HC139 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			A_I: false,
			B_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
		}
		this.UHC139LOG = new logicexp(3,7);
	}
}

/**
 * PRIORITY ENCODER 10-4 LINE
 */
class SN74HC147 {
	constructor() {
		this.pins = {
			IN1_I: false,
			IN2_I: false,
			IN3_I: false,
			IN4_I: false,
			IN5_I: false,
			IN6_I: false,
			IN7_I: false,
			IN8_I: false,
			IN9_I: false,
			A_O: false,
			B_O: false,
			C_O: false,
			D_O: false,
		}
		this.UHC147LOG = new logicexp(9,13);
	}
}

/**
 * PRIORITY ENCODER 8-3 LINE
 */
class SN74HC148 {
	constructor() {
		this.pins = {
			IN0_I: false,
			IN1_I: false,
			IN2_I: false,
			IN3_I: false,
			IN4_I: false,
			IN5_I: false,
			IN6_I: false,
			IN7_I: false,
			EI_I: false,
			A0_O: false,
			A1_O: false,
			A2_O: false,
			GS_O: false,
			EO_O: false,
		}
		this.UHC148LOG = new logicexp(9,14);
	}
}

/**
 * MULTIPLEXER_DATA SELECTOR 8-1 LINE
 */
class SN74HC151 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D0_I: false,
			D1_I: false,
			D2_I: false,
			D3_I: false,
			D4_I: false,
			D5_I: false,
			D6_I: false,
			D7_I: false,
			Y_O: false,
			W_O: false,
		}
		this.UHC151LOG = new logicexp(12,14);
	}
}

/**
 * MULTIPLEXER_DATA SELECTOR 8-1 LINE
 */
class SN74HC152 {
	constructor() {
		this.pins = {
			A_I: false,
			B_I: false,
			C_I: false,
			D0_I: false,
			D1_I: false,
			D2_I: false,
			D3_I: false,
			D4_I: false,
			D5_I: false,
			D6_I: false,
			D7_I: false,
			W_O: false,
		}
		this.UHC152LOG = new logicexp(11,12);
	}
}

/**
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC153 {
	constructor() {
		this.pins = {
			G1BAR_I: false,
			G2BAR_I: false,
			A_I: false,
			B_I: false,
			_1C0_I: false,
			_1C1_I: false,
			_1C2_I: false,
			_1C3_I: false,
			_2C0_I: false,
			_2C1_I: false,
			_2C2_I: false,
			_2C3_I: false,
			Y1_O: false,
			Y2_O: false,
		}
		this.UHC153LOG = new logicexp(12,14);
	}
}

/**
 * DECODER_DEMULTIPLEXER 4-16 LINE
 */
class SN74HC154 {
	constructor() {
		this.pins = {
			G1BAR_I: false,
			G2BAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
			Y5_O: false,
			Y6_O: false,
			Y7_O: false,
			Y8_O: false,
			Y9_O: false,
			Y10_O: false,
			Y11_O: false,
			Y12_O: false,
			Y13_O: false,
			Y14_O: false,
			Y15_O: false,
		}
		this.UHC154LOG = new logicexp(6,21);
	}
}

/**
 * DECODER_DEMULTIPLEXER 2-4 LINE
 */
class SN74HC155 {
	constructor() {
		this.pins = {
			G1BAR_I: false,
			G2BAR_I: false,
			A_I: false,
			B_I: false,
			C1_I: false,
			C2BAR_I: false,
			_1Y0_O: false,
			_1Y1_O: false,
			_1Y2_O: false,
			_1Y3_O: false,
			_2Y0_O: false,
			_2Y1_O: false,
			_2Y2_O: false,
			_2Y3_O: false,
		}
		this.UHC155LOG = new logicexp(6,14);
	}
}

/**
 * QUADRUPLE 2-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC157 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			_1A_I: false,
			_1B_I: false,
			_2A_I: false,
			_2B_I: false,
			_3A_I: false,
			_3B_I: false,
			_4A_I: false,
			_4B_I: false,
			SEL_I: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
		}
		this.UHC157LOG = new logicexp(10,14);
	}
}

/**
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC158 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			_1A_I: false,
			_1B_I: false,
			_2A_I: false,
			_2B_I: false,
			_3A_I: false,
			_3B_I: false,
			_4A_I: false,
			_4B_I: false,
			SEL_I: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
		}
		this.UHC158LOG = new logicexp(10,14);
	}
}

/**
 * Synchronous 4-bit Decade Counters with asynchronous clear
 */
class SN74HC160 {
	constructor() {
		this.pins = {
			CLK_I: false,
			ENP_I: false,
			ENT_I: false,
			CLRBAR_I: false,
			LOADBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			RCO_O: false,
		}
		this.UHC160LOG = new logicexp(15,15);
		this.UDFF = new dff(4);
	}
}

/**
 * Synchronous 4-bit Binary Counter with Direct Clear
 */
class SN74HC161 {
	constructor() {
		this.pins = {
			CLK_I: false,
			ENP_I: false,
			ENT_I: false,
			CLRBAR_I: false,
			LOADBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			RCO_O: false,
		}
		this.U1 = new dff(4);
		this.UHC161LOG = new logicexp(17,15);
	}
}

/**
 * Synchronous 4-bit Decade Counters with asynchronous clear
 */
class SN74HC162 {
	constructor() {
		this.pins = {
			CLK_I: false,
			ENP_I: false,
			ENT_I: false,
			CLRBAR_I: false,
			LOADBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			RCO_O: false,
		}
		this.UHC162LOG = new logicexp(15,15);
		this.UDFF = new dff(4);
	}
}

/**
 * Synchronous 4-bit Binary Counter with Direct Clear
 */
class SN74HC163 {
	constructor() {
		this.pins = {
			CLK_I: false,
			ENP_I: false,
			ENT_I: false,
			CLRBAR_I: false,
			LOADBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			RCO_O: false,
		}
		this.U1 = new dff(4);
		this.UHC163LOG = new logicexp(17,15);
	}
}

class SN74HC164 {
	constructor() {
		this.pins = {
			CLRBAR_I: false,
			CLK_I: false,
			A_I: false,
			B_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			QE_O: false,
			QF_O: false,
			QG_O: false,
			QH_O: false,
		}
		this.U1 = new bufa(4);
		this.U2 = new and(2);
		this.U3 = new dff(8);
	}
}

/**
 * PARALLEL-LOAD 8-BIT SHIFT REGISTERS
 */
class SN74HC165 {
	constructor() {
		this.pins = {
			SH_LDBAR_I: false,
			CLK_INH_I: false,
			CLK_I: false,
			SER_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			E_I: false,
			F_I: false,
			G_I: false,
			H_I: false,
			QH_O: false,
			QHBAR_O: false,
		}
		this.UHC165LOG = new logicexp(12,29);
		this.U1 = new dff(1);
		this.U2 = new dff(1);
		this.U3 = new dff(1);
		this.U4 = new dff(1);
		this.U5 = new dff(1);
		this.U6 = new dff(1);
		this.U7 = new dff(1);
		this.U8 = new dff(1);
	}
}

/**
 * PARALLEL LOAD 8-BIT SHIFT REGISTERS
 */
class SN74HC166 {
	constructor() {
		this.pins = {
			CLRBAR_I: false,
			SH_LDBAR_I: false,
			CLK_INH_I: false,
			CLK_I: false,
			SER_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			E_I: false,
			F_I: false,
			G_I: false,
			H_I: false,
			QH_O: false,
		}
		this.UHC166LOG = new logicexp(20,30);
		this.U1 = new jkff(8);
	}
}

/**
 * REGISTERS D-TYPE 4-BIT WITH 3-STATE OUTPUTS
 */
class SN74HC173 {
	constructor() {
		this.pins = {
			CLR_I: false,
			CLK_I: false,
			E0BAR_I: false,
			E1BAR_I: false,
			M_I: false,
			N_I: false,
			_1D_I: false,
			_2D_I: false,
			_3D_I: false,
			_4D_I: false,
			_1Q_O: false,
			_2Q_O: false,
			_3Q_O: false,
			_4Q_O: false,
		}
		this.U1 = new dff(4);
		this.UHC173LOG = new logicexp(14,13);
	}
}

/**
 * HEX D-TYPE FLIP-FLOPS WITH CLEAR
 */
class SN74HC174 {
	constructor() {
		this.pins = {
			CLRBAR: false,
			CLK: false,
			D1: false,
			D2: false,
			D3: false,
			D4: false,
			D5: false,
			D6: false,
			Q1: false,
			Q2: false,
			Q3: false,
			Q4: false,
			Q5: false,
			Q6: false,
		}
		this.UD = new dff(6);
	}
}

/**
 * QUADRUPLE D-TYPE FLIP-FLOPS WITH CLEAR
 */
class SN74HC175 {
	constructor() {
		this.pins = {
			CLRBAR: false,
			CLK: false,
			D1: false,
			D2: false,
			D3: false,
			D4: false,
			Q1: false,
			Q2: false,
			Q3: false,
			Q4: false,
			Q1BAR: false,
			Q2BAR: false,
			Q3BAR: false,
			Q4BAR: false,
		}
		this.UD = new dff(4);
	}
}

/**
 * PARITY GENERATOR_CHECKER ODD_EVEN 9-BIT
 */
class SN74HC180 {
	constructor() {
		this.pins = {
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			E_I: false,
			F_I: false,
			G_I: false,
			H_I: false,
			EIN_I: false,
			OIN_I: false,
			EOUT_O: false,
			OOUT_O: false,
		}
		this.UHC180LOG = new logicexp(10,4);
	}
}

/**
 * ALU _ FUNCTION GENERATOR
 */
class SN74HC181 {
	constructor() {
		this.pins = {
			A0BAR_I: false,
			A1BAR_I: false,
			A2BAR_I: false,
			A3BAR_I: false,
			B0BAR_I: false,
			B1BAR_I: false,
			B2BAR_I: false,
			B3BAR_I: false,
			S0_I: false,
			S1_I: false,
			S2_I: false,
			S3_I: false,
			M_I: false,
			CN_I: false,
			F0BAR_O: false,
			F1BAR_O: false,
			F2BAR_O: false,
			F3BAR_O: false,
			AEQUALB_O: false,
			PBAR_O: false,
			GBAR_O: false,
			CN_4_O: false,
		}
		this.UHC181LOG = new logicexp(14,22);
	}
}

/**
 * LOOK-AHEAD CARRY GENERATOR
 */
class SN74HC182 {
	constructor() {
		this.pins = {
			G3BAR_I: false,
			G2BAR_I: false,
			G1BAR_I: false,
			G0BAR_I: false,
			P3BAR_I: false,
			P2BAR_I: false,
			P1BAR_I: false,
			P0BAR_I: false,
			CN_I: false,
			GBAR_O: false,
			PBAR_O: false,
			CN_X_O: false,
			CN_Y_O: false,
			CN_Z_O: false,
		}
		this.UHC182LOG = new logicexp(9,14);
	}
}

/**
 * Synchronous 4-bit Up_Down Decade Counters
 */
class SN74HC190 {
	constructor() {
		this.pins = {
			CLK_I: false,
			DUBAR_I: false,
			CTENBAR_I: false,
			LOADBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			RCOBAR_O: false,
			MXMNOUT_O: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.UHC190 = new logicexp(12,22);
		this.UDA = new dff(1);
		this.UDB = new dff(1);
		this.UDC = new dff(1);
		this.UDD = new dff(1);
	}
}

class SN74HC191 {
	constructor() {
		this.pins = {
			CLK_I: false,
			DUBAR_I: false,
			CTENBAR_I: false,
			LOADBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			RCOBAR_O: false,
			MXMNOUT_O: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.U1 = new dff(1);
		this.U2 = new dff(1);
		this.U3 = new dff(1);
		this.U4 = new dff(1);
		this.UHC191LOG = new logicexp(12,22);
	}
}

class SN74HC192 {
	constructor() {
		this.pins = {
			UP_I: false,
			DOWN_I: false,
			CLR_I: false,
			LOADBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			BOBAR_O: false,
			COBAR_O: false,
		}
		this.U1 = new dff(1);
		this.U2 = new dff(1);
		this.U3 = new dff(1);
		this.U4 = new dff(1);
		this.U5 = new srff(1);
		this.UHC192LOG = new logicexp(14,22);
	}
}

class SN74HC193 {
	constructor() {
		this.pins = {
			UP_I: false,
			DOWN_I: false,
			CLR_I: false,
			LOADBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			BOBAR_O: false,
			COBAR_O: false,
		}
		this.U1 = new dff(1);
		this.U2 = new dff(1);
		this.U3 = new dff(1);
		this.U4 = new dff(1);
		this.U5 = new srff(1);
		this.UHC193LOG = new logicexp(14,22);
	}
}

/**
 * 4-BIT BIDIRECTIONAL UNIVERSAL SHIFT REGISTERS
 */
class SN74HC194 {
	constructor() {
		this.pins = {
			CLK_I: false,
			CLRBAR_I: false,
			S1_I: false,
			S0_I: false,
			SL_I: false,
			SR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.UHC194LOG = new logicexp(14,19);
		this.U1 = new jkff(4);
	}
}

/**
 * 4-BIT PARALLEL-ACCESS SHIFT REGISTERS
 */
class SN74HC195 {
	constructor() {
		this.pins = {
			CLK_I: false,
			SH_LDBAR_I: false,
			CLRBAR_I: false,
			J_I: false,
			KBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			QDBAR_O: false,
		}
		this.UHC195LOG = new logicexp(13,18);
		this.U1 = new jkff(4);
	}
}

/**
 * DECODER_DEMULTIPLEXER 3-8 LINE WITH ADDRESS LATCHES
 */
class SN74HC237 {
	constructor() {
		this.pins = {
			GLBAR_I: false,
			G1_I: false,
			G2BAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
			Y5_O: false,
			Y6_O: false,
			Y7_O: false,
		}
		this.U1 = new dltch(3);
		this.UHC237LOG = new logicexp(12,14);
	}
}

/**
 * DECODER_DEMULTIPLEXER 3-8 LINE
 */
class SN74HC238 {
	constructor() {
		this.pins = {
			G1_I: false,
			G2ABAR_I: false,
			G2BBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
			Y5_O: false,
			Y6_O: false,
			Y7_O: false,
		}
		this.UHC238LOG = new logicexp(6,12);
	}
}

/**
 * DECODER_DEMULTIPLEXER 2-4 LINE
 */
class SN74HC239 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			A_I: false,
			B_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
		}
		this.UHC239LOG = new logicexp(3,7);
	}
}

/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC240 {
	constructor() {
		this.pins = {
			_1A1: false,
			_1A2: false,
			_1A3: false,
			_1A4: false,
			_2A1: false,
			_2A2: false,
			_2A3: false,
			_2A4: false,
			G1BAR: false,
			G2BAR: false,
			_1Y1: false,
			_1Y2: false,
			_1Y3: false,
			_1Y4: false,
			_2Y1: false,
			_2Y2: false,
			_2Y3: false,
			_2Y4: false,
		}
		this.UAB = new inva(2);
		this.U1 = new inv3a(4);
		this.U2 = new inv3a(4);
	}
}

/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC241 {
	constructor() {
		this.pins = {
			_1A1: false,
			_1A2: false,
			_1A3: false,
			_1A4: false,
			_2A1: false,
			_2A2: false,
			_2A3: false,
			_2A4: false,
			G1BAR: false,
			G2: false,
			_1Y1: false,
			_1Y2: false,
			_1Y3: false,
			_1Y4: false,
			_2Y1: false,
			_2Y2: false,
			_2Y3: false,
			_2Y4: false,
		}
		this.UA = new inv();
		this.U1 = new buf3a(4);
		this.U2 = new buf3a(4);
	}
}

/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC242 {
	constructor() {
		this.pins = {
			A1: false,
			A2: false,
			A3: false,
			A4: false,
			G1: false,
			G2: false,
			B1: false,
			B2: false,
			B3: false,
			B4: false,
		}
		this.UAB = new inva(2);
		this.UC = new or(2);
		this.UD = new nand(2);
		this.UEF = new nora(2,2);
		this.U1 = new inv3a(4);
		this.U2 = new inv3a(4);
	}
}

/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC243 {
	constructor() {
		this.pins = {
			A1: false,
			A2: false,
			A3: false,
			A4: false,
			G1: false,
			G2: false,
			B1: false,
			B2: false,
			B3: false,
			B4: false,
		}
		this.UAB = new inva(2);
		this.UC = new or(2);
		this.UD = new nand(2);
		this.UEF = new nora(2,2);
		this.U1 = new buf3a(4);
		this.U2 = new buf3a(4);
	}
}

/**
 * OCTAL BUFFERS AND LINE DRIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC244 {
	constructor() {
		this.pins = {
			_1A1: false,
			_1A2: false,
			_1A3: false,
			_1A4: false,
			_2A1: false,
			_2A2: false,
			_2A3: false,
			_2A4: false,
			G1BAR: false,
			G2BAR: false,
			_1Y1: false,
			_1Y2: false,
			_1Y3: false,
			_1Y4: false,
			_2Y1: false,
			_2Y2: false,
			_2Y3: false,
			_2Y4: false,
		}
		this.UAB = new inva(2);
		this.U1 = new buf3a(4);
		this.U2 = new buf3a(4);
	}
}

/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC245 {
	constructor() {
		this.pins = {
			DIR_I: false,
			GBAR_I: false,
			A1_B: false,
			A2_B: false,
			A3_B: false,
			A4_B: false,
			A5_B: false,
			A6_B: false,
			A7_B: false,
			A8_B: false,
			B1_B: false,
			B2_B: false,
			B3_B: false,
			B4_B: false,
			B5_B: false,
			B6_B: false,
			B7_B: false,
			B8_B: false,
		}
		this.U1 = new bufa(2);
		this.U2 = new inv();
		this.U3 = new nora(2,2);
		this.U4 = new buf3a(8);
		this.U5 = new buf3a(8);
	}
}

/**
 * MULTIPLEXER_DATA SELECTOR 8-1 LINE WITH 3-STATE OUTPUTS
 */
class SN74HC251 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D0_I: false,
			D1_I: false,
			D2_I: false,
			D3_I: false,
			D4_I: false,
			D5_I: false,
			D6_I: false,
			D7_I: false,
			Y_O: false,
			W_O: false,
		}
		this.UHC251LOG = new logicexp(12,14);
	}
}

/**
 * DUAL 1-OF-4 DATA SELECTORS_MULTIPLEXERS WITH 3-STATE OUTPUTS
 */
class SN74HC253 {
	constructor() {
		this.pins = {
			G1BAR_I: false,
			G2BAR_I: false,
			A_I: false,
			B_I: false,
			_1C0_I: false,
			_1C1_I: false,
			_1C2_I: false,
			_1C3_I: false,
			_2C0_I: false,
			_2C1_I: false,
			_2C2_I: false,
			_2C3_I: false,
			Y1_O: false,
			Y2_O: false,
		}
		this.UHC253LOG = new logicexp(12,14);
	}
}

/**
 * QUADRUPLE 2-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC257 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			_1A_I: false,
			_1B_I: false,
			_2A_I: false,
			_2B_I: false,
			_3A_I: false,
			_3B_I: false,
			_4A_I: false,
			_4B_I: false,
			SEL_I: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
		}
		this.UHC257LOG = new logicexp(10,14);
	}
}

/**
 * QUADRUPLE 2-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC258 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			_1A_I: false,
			_1B_I: false,
			_2A_I: false,
			_2B_I: false,
			_3A_I: false,
			_3B_I: false,
			_4A_I: false,
			_4B_I: false,
			SEL_I: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
		}
		this.UHC258LOG = new logicexp(10,14);
	}
}

/**
 * 8-BIT ADDRESSABLE LATCHES
 */
class SN74HC259 {
	constructor() {
		this.pins = {
			CLRBAR: false,
			GBAR: false,
			D: false,
			S0: false,
			S1: false,
			S2: false,
			Q0: false,
			Q1: false,
			Q2: false,
			Q3: false,
			Q4: false,
			Q5: false,
			Q6: false,
			Q7: false,
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
 * QUADRUPLE 2-INPUT EXCLUSIVE-NOR GATES WITH OPEN-COLLECTOR OUTPUTS.
 */
class SN74HC266 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nxor();
	}
}

/**
 * OCTAL D-TYPE EDGE-TRIGGERED FLIP-FLOPS WITH CLEAR
 */
class SN74HC273 {
	constructor() {
		this.pins = {
			CLRBAR: false,
			CLK: false,
			D1: false,
			D2: false,
			D3: false,
			D4: false,
			D5: false,
			D6: false,
			D7: false,
			D8: false,
			Q1: false,
			Q2: false,
			Q3: false,
			Q4: false,
			Q5: false,
			Q6: false,
			Q7: false,
			Q8: false,
		}
		this.UD = new dff(8);
	}
}

/**
 * QUADRUPLE SBAR-RBAR LATCHES
 */
class SN74HC279 {
	constructor() {
		this.pins = {
			_1RBAR: false,
			_1S1BAR: false,
			_1S2BAR: false,
			_2RBAR: false,
			_2SBAR: false,
			_1Q: false,
			_2Q: false,
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
class SN74HC280 {
	constructor() {
		this.pins = {
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			E_I: false,
			F_I: false,
			G_I: false,
			H_I: false,
			I_I: false,
			EOUT_O: false,
			OOUT_O: false,
		}
		this.UHC280LOG = new logicexp(9,2);
	}
}

/**
 * 4-BIT BINARY FULL ADDERS WITH FAST CARRY
 */
class SN74HC283 {
	constructor() {
		this.pins = {
			C0_I: false,
			A1_I: false,
			A2_I: false,
			A3_I: false,
			A4_I: false,
			B1_I: false,
			B2_I: false,
			B3_I: false,
			B4_I: false,
			C4_O: false,
			SUM1_O: false,
			SUM2_O: false,
			SUM3_O: false,
			SUM4_O: false,
		}
		this.UHC283LOG = new logicexp(9,14);
	}
}

/**
 * MULTIPLEXERS QUAD 2-INPUT WITH STORAGE
 */
class SN74HC298 {
	constructor() {
		this.pins = {
			WS_I: false,
			CLK_I: false,
			A1_I: false,
			A2_I: false,
			B1_I: false,
			B2_I: false,
			C1_I: false,
			C2_I: false,
			D1_I: false,
			D2_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.U1 = new jkff(4);
		this.UHC298LOG = new logicexp(10,18);
	}
}

/**
 * 8-BIT UNIVERSAL SHIFT_STORAGE REGISTERS
 */
class SN74HC299 {
	constructor() {
		this.pins = {
			CLK_I: false,
			CLRBAR_I: false,
			S1_I: false,
			S0_I: false,
			G1BAR_I: false,
			G2BAR_I: false,
			SL_I: false,
			SR_I: false,
			A_QA_B: false,
			B_QB_B: false,
			C_QC_B: false,
			D_QD_B: false,
			E_QE_B: false,
			F_QF_B: false,
			G_QG_B: false,
			H_QH_B: false,
			QAP_O: false,
			QHP_O: false,
		}
		this.UHC299LOG = new logicexp(32,25);
		this.U1 = new dff(8);
	}
}

/**
 * DUAL 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS
 */
class SN74HC352 {
	constructor() {
		this.pins = {
			G1BAR_I: false,
			G2BAR_I: false,
			A_I: false,
			B_I: false,
			_1C0_I: false,
			_1C1_I: false,
			_1C2_I: false,
			_1C3_I: false,
			_2C0_I: false,
			_2C1_I: false,
			_2C2_I: false,
			_2C3_I: false,
			Y1_O: false,
			Y2_O: false,
		}
		this.UHC352LOG = new logicexp(12,14);
	}
}

/**
 * DUAL 1-OF-4 DATA SELECTORS_MULTIPLEXERS WITH 3-STATE OUTPUTS
 */
class SN74HC353 {
	constructor() {
		this.pins = {
			G1BAR_I: false,
			G2BAR_I: false,
			A_I: false,
			B_I: false,
			_1C0_I: false,
			_1C1_I: false,
			_1C2_I: false,
			_1C3_I: false,
			_2C0_I: false,
			_2C1_I: false,
			_2C2_I: false,
			_2C3_I: false,
			Y1_O: false,
			Y2_O: false,
		}
		this.UHC353LOG = new logicexp(12,14);
	}
}

/**
 * 4-LINE TO 1-LINE LINE DATA SELECTORS_MULTIPLEXERS_REGISTERS
 */
class SN74HC354 {
	constructor() {
		this.pins = {
			G1BAR_I: false,
			G2BAR_I: false,
			G3_I: false,
			SCBAR_I: false,
			S0_I: false,
			S1_I: false,
			S2_I: false,
			DCBAR_I: false,
			D0_I: false,
			D1_I: false,
			D2_I: false,
			D3_I: false,
			D4_I: false,
			D5_I: false,
			D6_I: false,
			D7_I: false,
			Y_O: false,
			W_O: false,
		}
		this.UHC354LOG = new logicexp(30,21);
		this.U1 = new dltch(8);
		this.U2 = new dltch(3);
	}
}

/**
 * 4-LINE TO 1-LINE DATA SELECTORS_MULTIPLEXERS_REGISTERS
 */
class SN74HC356 {
	constructor() {
		this.pins = {
			G1BAR_I: false,
			G2BAR_I: false,
			G3_I: false,
			SCBAR_I: false,
			S0_I: false,
			S1_I: false,
			S2_I: false,
			CLK_I: false,
			D0_I: false,
			D1_I: false,
			D2_I: false,
			D3_I: false,
			D4_I: false,
			D5_I: false,
			D6_I: false,
			D7_I: false,
			Y_O: false,
			W_O: false,
		}
		this.UHC356LOG = new logicexp(30,20);
		this.U1 = new dff(8);
		this.U2 = new dltch(3);
	}
}

/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74HC365 {
	constructor() {
		this.pins = {
			A1: false,
			A2: false,
			A3: false,
			A4: false,
			A5: false,
			A6: false,
			G1BAR: false,
			G2BAR: false,
			Y1: false,
			Y2: false,
			Y3: false,
			Y4: false,
			Y5: false,
			Y6: false,
		}
		this.UA = new nor(2);
		this.U1 = new buf3a(6);
	}
}

/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74HC366 {
	constructor() {
		this.pins = {
			A1: false,
			A2: false,
			A3: false,
			A4: false,
			A5: false,
			A6: false,
			G1BAR: false,
			G2BAR: false,
			Y1: false,
			Y2: false,
			Y3: false,
			Y4: false,
			Y5: false,
			Y6: false,
		}
		this.UA = new nor(2);
		this.U1 = new inv3a(6);
	}
}

/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74HC367 {
	constructor() {
		this.pins = {
			_1A1: false,
			_1A2: false,
			_1A3: false,
			_1A4: false,
			_2A1: false,
			_2A2: false,
			G1BAR: false,
			G2BAR: false,
			_1Y1: false,
			_1Y2: false,
			_1Y3: false,
			_1Y4: false,
			_2Y1: false,
			_2Y2: false,
		}
		this.UINV = new inva(2);
		this.U1 = new buf3a(4);
		this.U2 = new buf3a(2);
	}
}

/**
 * Hex Bus Drivers with 3-STATE Outputs
 */
class SN74HC368 {
	constructor() {
		this.pins = {
			_1A1: false,
			_1A2: false,
			_1A3: false,
			_1A4: false,
			_2A1: false,
			_2A2: false,
			G1BAR: false,
			G2BAR: false,
			_1Y1: false,
			_1Y2: false,
			_1Y3: false,
			_1Y4: false,
			_2Y1: false,
			_2Y2: false,
		}
		this.UINV = new inva(2);
		this.UA = new inv();
		this.UB = new inv();
		this.U1 = new inv3a(4);
		this.U2 = new inv3a(2);
	}
}

/**
 * Octal D-Type Transparent Latches with 3-STATE Outputs
 */
class SN74HC373 {
	constructor() {
		this.pins = {
			OCBAR: false,
			C: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_7D: false,
			_8D: false,
			_1Q: false,
			_2Q: false,
			_3Q: false,
			_4Q: false,
			_5Q: false,
			_6Q: false,
			_7Q: false,
			_8Q: false,
		}
		this.UA = new inv();
		this.U1 = new dltch(8);
		this.U2 = new buf3a(8);
	}
}

/**
 * Octal D-Type Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74HC374 {
	constructor() {
		this.pins = {
			OCBAR: false,
			CLK: false,
			D1: false,
			D2: false,
			D3: false,
			D4: false,
			D5: false,
			D6: false,
			D7: false,
			D8: false,
			Q1: false,
			Q2: false,
			Q3: false,
			Q4: false,
			Q5: false,
			Q6: false,
			Q7: false,
			Q8: false,
		}
		this.UOC = new inv();
		this.UD = new dff(8);
		this.UQS = new buf3a(8);
	}
}

/**
 * 4-bit Bistable Latches
 */
class SN74HC375 {
	constructor() {
		this.pins = {
			_1D: false,
			_2D: false,
			C: false,
			_1Q: false,
			_1QBAR: false,
			_2Q: false,
			_2QBAR: false,
		}
	}
}

/**
 * Octal D-TYPE Flip-Flops with Clock Enable
 */
class SN74HC377 {
	constructor() {
		this.pins = {
			GBAR: false,
			CLK: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_7D: false,
			_8D: false,
			_1Q: false,
			_2Q: false,
			_3Q: false,
			_4Q: false,
			_5Q: false,
			_6Q: false,
			_7Q: false,
			_8Q: false,
		}
		this.UBUF = new bufa(2);
	}
}

class SNHC377DAT {
	constructor() {
		this.pins = {
			GB: false,
			CLK: false,
			D: false,
			Q: false,
			DPWR: false,
			DGND: false,
		}
		this.USET = new inva(2);
		this.UNXOR = new nxor();
		this.UIN = new buf3();
		this.UINV = new inva(2);
		this.UAO = new ao(2,2);
		this.UDFF = new dff(1);
		this.UQOUT = new buf();
	}
}

/**
 * Octal D-TYPE Flip-Flops with Clock Enable
 */
class SN74HC378 {
	constructor() {
		this.pins = {
			CLK: false,
			GBAR: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_1Q: false,
			_2Q: false,
			_3Q: false,
			_4Q: false,
			_5Q: false,
			_6Q: false,
		}
		this.UBUF = new bufa(2);
	}
}

class SNHC378DAT {
	constructor() {
		this.pins = {
			GB: false,
			CLK: false,
			D: false,
			Q: false,
			DPWR: false,
			DGND: false,
		}
		this.USET = new inva(2);
		this.UNXOR = new nxor();
		this.UIN = new buf3();
		this.UINV = new inva(2);
		this.UAO = new ao(2,2);
		this.UDFF = new dff(1);
		this.UQOUT = new buf();
	}
}

/**
 * Octal D-TYPE Flip-Flops with Clock Enable
 */
class SN74HC379 {
	constructor() {
		this.pins = {
			CLK: false,
			GBAR: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_1Q: false,
			_1QBAR: false,
			_2Q: false,
			_2QBAR: false,
			_3Q: false,
			_3QBAR: false,
			_4Q: false,
			_4QBAR: false,
		}
		this.UBUF = new bufa(2);
	}
}

class SNHC379DAT {
	constructor() {
		this.pins = {
			GB: false,
			CLK: false,
			D: false,
			Q: false,
			QB: false,
			DPWR: false,
			DGND: false,
		}
		this.USET = new inva(2);
		this.UNXOR = new nxor();
		this.UIN = new buf3();
		this.UINV = new inva(2);
		this.UAO = new ao(2,2);
		this.UDFF = new dff(1);
		this.UQOUT = new bufa(2);
	}
}

/**
 * Quadruple 2-Input Exclusive-OR-Gates
 */
class SN74HC386 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.UY = new xor();
	}
}

/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74HC390 {
	constructor() {
		this.pins = {
			CKA_I: false,
			CKB_I: false,
			CLR_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.UHC390LOG = new logicexp(6,6);
	}
}

/**
 * COUNTER BINARY 4-BIT, ASYNCHRONOUS
 */
class SN74HC393 {
	constructor() {
		this.pins = {
			A_I: false,
			CLR_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new bufa(2);
		this.U6 = new inv();
	}
}

/**
 * COUNTER DECADE 4-BIT, ASYNCHRONOUS
 */
class SN74HC490 {
	constructor() {
		this.pins = {
			CLR_I: false,
			SET9_I: false,
			CLK_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.UHC490LOG = new logicexp(7,8);
	}
}

/**
 * Octal D-TYPE Transparent Latches with 3-STATE Outputs
 */
class SN74HC533 {
	constructor() {
		this.pins = {
			OCBAR: false,
			C: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_7D: false,
			_8D: false,
			_1QBAR: false,
			_2QBAR: false,
			_3QBAR: false,
			_4QBAR: false,
			_5QBAR: false,
			_6QBAR: false,
			_7QBAR: false,
			_8QBAR: false,
		}
		this.UOC = new inv();
		this.UQI = new dltch(8);
		this.UQBAR = new buf3a(8);
	}
}

/**
 * Octal D-TYPE Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74HC534 {
	constructor() {
		this.pins = {
			OCBAR: false,
			CLK: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_7D: false,
			_8D: false,
			_1QBAR: false,
			_2QBAR: false,
			_3QBAR: false,
			_4QBAR: false,
			_5QBAR: false,
			_6QBAR: false,
			_7QBAR: false,
			_8QBAR: false,
		}
		this.UOC = new inv();
		this.UDFF = new dff(8);
		this.UOCQ = new inv3a(8);
	}
}

/**
 * Octal Buffers and Line Drivers with 3-STATE Outputs
 */
class SN74HC540 {
	constructor() {
		this.pins = {
			A1: false,
			A2: false,
			A3: false,
			A4: false,
			A5: false,
			A6: false,
			A7: false,
			A8: false,
			G1BAR: false,
			G2BAR: false,
			Y1: false,
			Y2: false,
			Y3: false,
			Y4: false,
			Y5: false,
			Y6: false,
			Y7: false,
			Y8: false,
		}
		this.UA = new nor(2);
		this.U1 = new inv3a(8);
	}
}

/**
 * Octal Buffers and Line Driver with 3-STATE Outputs
 */
class SN74HC541 {
	constructor() {
		this.pins = {
			A1: false,
			A2: false,
			A3: false,
			A4: false,
			A5: false,
			A6: false,
			A7: false,
			A8: false,
			G1BAR: false,
			G2BAR: false,
			Y1: false,
			Y2: false,
			Y3: false,
			Y4: false,
			Y5: false,
			Y6: false,
			Y7: false,
			Y8: false,
		}
		this.UA = new nor(2);
		this.U1 = new buf3a(8);
	}
}

/**
 * Octal D-TYPE Transparent Latches with 3-STATE Outputs
 */
class SN74HC563 {
	constructor() {
		this.pins = {
			OCBAR: false,
			C: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_7D: false,
			_8D: false,
			_1QBAR: false,
			_2QBAR: false,
			_3QBAR: false,
			_4QBAR: false,
			_5QBAR: false,
			_6QBAR: false,
			_7QBAR: false,
			_8QBAR: false,
		}
		this.UINV = new inv();
		this.UQBUF = new dltch(8);
		this.UQOUT = new buf3a(8);
	}
}

/**
 * Octal D-TYPE Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74HC564 {
	constructor() {
		this.pins = {
			OCBAR: false,
			CLK: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_7D: false,
			_8D: false,
			_1QBAR: false,
			_2QBAR: false,
			_3QBAR: false,
			_4QBAR: false,
			_5QBAR: false,
			_6QBAR: false,
			_7QBAR: false,
			_8QBAR: false,
		}
		this.UOC = new inv();
		this.UDFF = new dff(8);
		this.UOCQ = new inv3a(8);
	}
}

/**
 * Octal D-TYPE Transparent Latches with 3-STATE Outputs
 */
class SN74HC573 {
	constructor() {
		this.pins = {
			OCBAR: false,
			C: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_7D: false,
			_8D: false,
			_1Q: false,
			_2Q: false,
			_3Q: false,
			_4Q: false,
			_5Q: false,
			_6Q: false,
			_7Q: false,
			_8Q: false,
		}
		this.U0 = new inv();
		this.U1 = new dltch(8);
		this.U2 = new buf3a(8);
	}
}

/**
 * Octal D-TYPE Edge-Triggered Flip-Flops with 3-STATE Outputs
 */
class SN74HC574 {
	constructor() {
		this.pins = {
			OCBAR: false,
			CLK: false,
			_1D: false,
			_2D: false,
			_3D: false,
			_4D: false,
			_5D: false,
			_6D: false,
			_7D: false,
			_8D: false,
			_1Q: false,
			_2Q: false,
			_3Q: false,
			_4Q: false,
			_5Q: false,
			_6Q: false,
			_7Q: false,
			_8Q: false,
		}
		this.UOC = new inv();
		this.UD = new dff(8);
		this.UQS = new buf3a(8);
	}
}

class SN74HC590A {
	constructor() {
		this.pins = {
			GBAR_I: false,
			CCK_I: false,
			RCK_I: false,
			CCKENBAR_I: false,
			CCLRBAR_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			QE_O: false,
			QF_O: false,
			QG_O: false,
			QH_O: false,
			RCOBAR_O: false,
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
		this.UHC590ALOG = new logicexp(14,15);
	}
}

/**
 * 8-BIT SHIFT REGISTERS WITH INPUT LATCHES
 */
class SN74HC594 {
	constructor() {
		this.pins = {
			SRCK_I: false,
			RCK_I: false,
			SRCLRBAR_I: false,
			RCLRBAR_I: false,
			SER_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			QE_O: false,
			QF_O: false,
			QG_O: false,
			QH_O: false,
			QHP_O: false,
		}
		this.U1 = new bufa(5);
		this.U2 = new dff(8);
		this.U3 = new dff(8);
	}
}

/**
 * 8-BIT SHIFT REGISTERS WITH 3-STATE OUTPUT REGISTERS
 */
class SN74HC595 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			SRCK_I: false,
			RCK_I: false,
			SRCLRBAR_I: false,
			SER_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			QE_O: false,
			QF_O: false,
			QG_O: false,
			QH_O: false,
			QHP_O: false,
		}
		this.U1 = new bufa(5);
		this.U2 = new dff(8);
		this.U3 = new dff(8);
	}
}

/**
 * Octal 2-Input Multiplexed Latches with 3-STATE Outputs
 */
class SN74HC604 {
	constructor() {
		this.pins = {
			A_BBAR: false,
			CLK: false,
			A1: false,
			B1: false,
			A2: false,
			B2: false,
			A3: false,
			B3: false,
			A4: false,
			B4: false,
			A5: false,
			B5: false,
			A6: false,
			B6: false,
			A7: false,
			B7: false,
			A8: false,
			B8: false,
			Y1: false,
			Y2: false,
			Y3: false,
			Y4: false,
			Y5: false,
			Y6: false,
			Y7: false,
			Y8: false,
		}
		this.UBUF = new bufa(2);
		this.UAB_B = new inv();
	}
}

class SNHC604DAT {
	constructor() {
		this.pins = {
			A_BB: false,
			AB_B: false,
			CK: false,
			D1: false,
			D2: false,
			Y: false,
			DPWR: false,
			DGND: false,
		}
		this.UAB = new dff(2);
		this.UYI = new ao(2,2);
		this.UY = new buf3();
	}
}

/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC620 {
	constructor() {
		this.pins = {
			GBABAR_I: false,
			GAB_I: false,
			A1_B: false,
			A2_B: false,
			A3_B: false,
			A4_B: false,
			A5_B: false,
			A6_B: false,
			A7_B: false,
			A8_B: false,
			B1_B: false,
			B2_B: false,
			B3_B: false,
			B4_B: false,
			B5_B: false,
			B6_B: false,
			B7_B: false,
			B8_B: false,
		}
		this.U1 = new buf();
		this.U2 = new inv();
		this.U3 = new inv3a(8);
		this.U4 = new inv3a(8);
	}
}

/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC623 {
	constructor() {
		this.pins = {
			GBABAR_I: false,
			GAB_I: false,
			A1_B: false,
			A2_B: false,
			A3_B: false,
			A4_B: false,
			A5_B: false,
			A6_B: false,
			A7_B: false,
			A8_B: false,
			B1_B: false,
			B2_B: false,
			B3_B: false,
			B4_B: false,
			B5_B: false,
			B6_B: false,
			B7_B: false,
			B8_B: false,
		}
		this.U1 = new buf();
		this.U2 = new inv();
		this.U3 = new buf3a(8);
		this.U4 = new buf3a(8);
	}
}

/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC640 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			DIR_I: false,
			A1_B: false,
			A2_B: false,
			A3_B: false,
			A4_B: false,
			A5_B: false,
			A6_B: false,
			A7_B: false,
			A8_B: false,
			B1_B: false,
			B2_B: false,
			B3_B: false,
			B4_B: false,
			B5_B: false,
			B6_B: false,
			B7_B: false,
			B8_B: false,
		}
		this.U1 = new bufa(2);
		this.U2 = new inv();
		this.U3 = new nora(2,2);
		this.U4 = new inv3a(8);
		this.U5 = new inv3a(8);
	}
}

/**
 * OCTAL BUS TRANSCEIVERS WITH 3-STATE OUTPUTS
 */
class SN74HC643 {
	constructor() {
		this.pins = {
			GBAR: false,
			DIR: false,
			A1: false,
			A2: false,
			A3: false,
			A4: false,
			A5: false,
			A6: false,
			A7: false,
			A8: false,
			B1: false,
			B2: false,
			B3: false,
			B4: false,
			B5: false,
			B6: false,
			B7: false,
			B8: false,
		}
		this.UBUF = new buf();
		this.UINV = new inva(2);
		this.UEN = new anda(2,2);
		this.UA = new buf3a(8);
		this.UB = new inv3a(8);
	}
}

/**
 * OCTAL BUS TRANSCEIVERS
 */
class SN74HC645 {
	constructor() {
		this.pins = {
			GBAR: false,
			DIR: false,
			A1: false,
			A2: false,
			A3: false,
			A4: false,
			A5: false,
			A6: false,
			A7: false,
			A8: false,
			B1: false,
			B2: false,
			B3: false,
			B4: false,
			B5: false,
			B6: false,
			B7: false,
			B8: false,
		}
		this.UBUFF = new bufa(2);
		this.UA = new nor(2);
		this.UB = new inv();
		this.UC = new and(2);
		this.U1 = new buf3a(8);
		this.U2 = new buf3a(8);
	}
}

/**
 * OCTAL BUS TRANSCEIVER_REGISTER WITH 3-STATE OUTPUTS
 */
class SN74HC646 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			DIR_I: false,
			CBA_I: false,
			SBA_I: false,
			CAB_I: false,
			SAB_I: false,
			A1_B: false,
			A2_B: false,
			A3_B: false,
			A4_B: false,
			A5_B: false,
			A6_B: false,
			A7_B: false,
			A8_B: false,
			B1_B: false,
			B2_B: false,
			B3_B: false,
			B4_B: false,
			B5_B: false,
			B6_B: false,
			B7_B: false,
			B8_B: false,
		}
		this.UHC646LOG1 = new logicexp(38,40);
		this.UAREG = new dff(8);
		this.UBREG = new dff(8);
	}
}

/**
 * OCTAL BUS TRANSCEIVER_REGISTER WITH 3-STATE OUTPUTS
 */
class SN74HC648 {
	constructor() {
		this.pins = {
			GBAR_I: false,
			DIR_I: false,
			CBA_I: false,
			SBA_I: false,
			CAB_I: false,
			SAB_I: false,
			A1_B: false,
			A2_B: false,
			A3_B: false,
			A4_B: false,
			A5_B: false,
			A6_B: false,
			A7_B: false,
			A8_B: false,
			B1_B: false,
			B2_B: false,
			B3_B: false,
			B4_B: false,
			B5_B: false,
			B6_B: false,
			B7_B: false,
			B8_B: false,
		}
		this.UHC648LOG1 = new logicexp(38,40);
		this.UAREG = new dff(8);
		this.UBREG = new dff(8);
	}
}

/**
 * OCTAL BUS TRANSCEIVERS AND REGISTERS WITH INVERTED 3-STATE OUTPUTS
 */
class SN74HC651 {
	constructor() {
		this.pins = {
			GBABAR_I: false,
			GAB_I: false,
			CBA_I: false,
			SBA_I: false,
			CAB_I: false,
			SAB_I: false,
			A1_B: false,
			A2_B: false,
			A3_B: false,
			A4_B: false,
			A5_B: false,
			A6_B: false,
			A7_B: false,
			A8_B: false,
			B1_B: false,
			B2_B: false,
			B3_B: false,
			B4_B: false,
			B5_B: false,
			B6_B: false,
			B7_B: false,
			B8_B: false,
		}
		this.U1 = new dff(8);
		this.U2 = new dff(8);
		this.U3 = new buf3a(8);
		this.U4 = new buf3a(8);
		this.U5 = new buf3a(8);
		this.U6 = new buf3a(8);
		this.UHC651LOG = new logicexp(38,40);
	}
}

/**
 * BUS TRANSCEIVERS AND REGISTERS OCTAL WITH 3-STATE OUTPUTS
 */
class SN74HC652 {
	constructor() {
		this.pins = {
			GBABAR_I: false,
			GAB_I: false,
			CBA_I: false,
			SBA_I: false,
			CAB_I: false,
			SAB_I: false,
			A1_B: false,
			A2_B: false,
			A3_B: false,
			A4_B: false,
			A5_B: false,
			A6_B: false,
			A7_B: false,
			A8_B: false,
			B1_B: false,
			B2_B: false,
			B3_B: false,
			B4_B: false,
			B5_B: false,
			B6_B: false,
			B7_B: false,
			B8_B: false,
		}
		this.U1 = new dff(8);
		this.U2 = new dff(8);
		this.U3 = new buf3a(8);
		this.U4 = new buf3a(8);
		this.U5 = new buf3a(8);
		this.U6 = new buf3a(8);
		this.UHC652LOG = new logicexp(38,40);
	}
}

/**
 * REGISTER FILES 4X4 WITH 3-STATE OUTPUTS
 */
class SN74HC670 {
	constructor() {
		this.pins = {
			WEBAR_I: false,
			REBAR_I: false,
			WA_I: false,
			WB_I: false,
			RA_I: false,
			RB_I: false,
			D0_I: false,
			D1_I: false,
			D2_I: false,
			D3_I: false,
			Q0_O: false,
			Q1_O: false,
			Q2_O: false,
			Q3_O: false,
		}
		this.UA = new dltch(4);
		this.UB = new dltch(4);
		this.UC = new dltch(4);
		this.UD = new dltch(4);
		this.UHC670LOG = new logicexp(26,18);
	}
}

/**
 * 12-BIT ADDRESS COMPARATORS
 */
class SN74HC677 {
	constructor() {
		this.pins = {
			A1_I: false,
			A2_I: false,
			A3_I: false,
			A4_I: false,
			A5_I: false,
			A6_I: false,
			A7_I: false,
			A8_I: false,
			A9_I: false,
			A10_I: false,
			A11_I: false,
			A12_I: false,
			A13_I: false,
			A14_I: false,
			A15_I: false,
			A16_I: false,
			GBAR_I: false,
			P3_I: false,
			P2_I: false,
			P1_I: false,
			P0_I: false,
			Y_O: false,
		}
		this.UHC677LOG = new logicexp(21,22);
	}
}

/**
 * 12-BIT ADDRESS COMPARATORS
 */
class SN74HC678 {
	constructor() {
		this.pins = {
			A1_I: false,
			A2_I: false,
			A3_I: false,
			A4_I: false,
			A5_I: false,
			A6_I: false,
			A7_I: false,
			A8_I: false,
			A9_I: false,
			A10_I: false,
			A11_I: false,
			A12_I: false,
			A13_I: false,
			A14_I: false,
			A15_I: false,
			A16_I: false,
			C_I: false,
			P3_I: false,
			P2_I: false,
			P1_I: false,
			P0_I: false,
			Y_O: false,
		}
		this.UHC678LOG = new logicexp(21,22);
		this.U1 = new dltch(1);
	}
}

/**
 * 12-BIT ADDRESS COMPARATORS
 */
class SN74HC679 {
	constructor() {
		this.pins = {
			A1_I: false,
			A2_I: false,
			A3_I: false,
			A4_I: false,
			A5_I: false,
			A6_I: false,
			A7_I: false,
			A8_I: false,
			A9_I: false,
			A10_I: false,
			A11_I: false,
			A12_I: false,
			P0_I: false,
			P1_I: false,
			P2_I: false,
			P3_I: false,
			GBAR_I: false,
			Y_O: false,
		}
		this.UHC679LOG = new logicexp(17,18);
	}
}

/**
 * 12-BIT ADDRESS COMPARATORS
 */
class SN74HC680 {
	constructor() {
		this.pins = {
			A1_I: false,
			A2_I: false,
			A3_I: false,
			A4_I: false,
			A5_I: false,
			A6_I: false,
			A7_I: false,
			A8_I: false,
			A9_I: false,
			A10_I: false,
			A11_I: false,
			A12_I: false,
			P0_I: false,
			P1_I: false,
			P2_I: false,
			P3_I: false,
			C_I: false,
			Y_O: false,
		}
		this.UHC680LOG = new logicexp(17,18);
		this.U1 = new dltch(1);
	}
}

/**
 * 8-BIT MAGNITUDE COMPARATORS
 */
class SN74HC684 {
	constructor() {
		this.pins = {
			P7_I: false,
			P6_I: false,
			P5_I: false,
			P4_I: false,
			P3_I: false,
			P2_I: false,
			P1_I: false,
			P0_I: false,
			Q7_I: false,
			Q6_I: false,
			Q5_I: false,
			Q4_I: false,
			Q3_I: false,
			Q2_I: false,
			Q1_I: false,
			Q0_I: false,
			PEQBAR_O: false,
			PGQBAR_O: false,
		}
		this.UHC684LOG = new logicexp(16,18);
	}
}

/**
 * 8-BIT IDENTITY COMPARATORS
 */
class SN74HC688 {
	constructor() {
		this.pins = {
			P7_I: false,
			P6_I: false,
			P5_I: false,
			P4_I: false,
			P3_I: false,
			P2_I: false,
			P1_I: false,
			P0_I: false,
			Q7_I: false,
			Q6_I: false,
			Q5_I: false,
			Q4_I: false,
			Q3_I: false,
			Q2_I: false,
			Q1_I: false,
			Q0_I: false,
			GBAR_I: false,
			PEQBAR_O: false,
		}
		this.UHC688LOG = new logicexp(17,18);
	}
}

/**
 * Hex 2-Input NAND Drivers
 */
class SN74HC804 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nand(2);
	}
}

/**
 * Hex 2-Input NOR Drivers
 */
class SN74HC805 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nor(2);
	}
}

/**
 * Hex 2-Input AND Drivers
 */
class SN74HC808 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new and(2);
	}
}

/**
 * Hex 2-Input OR Drivers
 */
class SN74HC832 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new or(2);
	}
}

/**
 * Dual 4-Input Positive-Nor Gate
 */
class SN74HC4002 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			D: false,
			Y: false,
		}
		this.U1 = new nor(4);
	}
}

/**
 * COUNTER BINARY 14-BIT, ASYNCHRONOUS
 */
class SN74HC4020 {
	constructor() {
		this.pins = {
			CLR_I: false,
			CLK_I: false,
			QA_O: false,
			QD_O: false,
			QE_O: false,
			QF_O: false,
			QG_O: false,
			QH_O: false,
			QI_O: false,
			QJ_O: false,
			QK_O: false,
			QL_O: false,
			QM_O: false,
			QN_O: false,
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new jkff(1);
		this.U6 = new jkff(1);
		this.U7 = new jkff(1);
		this.U8 = new jkff(1);
		this.U9 = new jkff(1);
		this.U10 = new jkff(1);
		this.U11 = new jkff(1);
		this.U12 = new jkff(1);
		this.U13 = new jkff(1);
		this.U14 = new jkff(1);
		this.U15 = new bufa(2);
		this.U16 = new inv();
	}
}

class SN74HC4024 {
	constructor() {
		this.pins = {
			CLR_I: false,
			CLK_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			QE_O: false,
			QF_O: false,
			QG_O: false,
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new jkff(1);
		this.U6 = new jkff(1);
		this.U7 = new jkff(1);
		this.UHC4024LOG = new logicexp(2,4);
	}
}

/**
 * COUNTER BINARY 12-BIT, ASYNCHRONOUS
 */
class SN74HC4040 {
	constructor() {
		this.pins = {
			CLR_I: false,
			CLK_I: false,
			QA_O: false,
			QB_O: false,
			QC_O: false,
			QD_O: false,
			QE_O: false,
			QF_O: false,
			QG_O: false,
			QH_O: false,
			QI_O: false,
			QJ_O: false,
			QK_O: false,
			QL_O: false,
		}
		this.U1 = new jkff(1);
		this.U2 = new jkff(1);
		this.U3 = new jkff(1);
		this.U4 = new jkff(1);
		this.U5 = new jkff(1);
		this.U6 = new jkff(1);
		this.U7 = new jkff(1);
		this.U8 = new jkff(1);
		this.U9 = new jkff(1);
		this.U10 = new jkff(1);
		this.U11 = new jkff(1);
		this.U12 = new jkff(1);
		this.U13 = new bufa(2);
		this.U14 = new inv();
	}
}

/**
 * Triple 3-input Or Gate
 */
class SN74HC4075 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			Y: false,
		}
		this.U1 = new or(3);
	}
}

/**
 * 8-input Or_Nor Gate
 */
class SN74HC4078A {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			C: false,
			D: false,
			E: false,
			F: false,
			G: false,
			H: false,
			Y: false,
			W: false,
		}
		this.U1 = new or(8);
		this.U2 = new buf();
		this.U3 = new inv();
	}
}

/**
 * DECODER_DEMULTIPLEXER 4-16 LINE WITH ADDRESS LATCHES
 */
class SN74HC4514 {
	constructor() {
		this.pins = {
			LE_I: false,
			GBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
			Y5_O: false,
			Y6_O: false,
			Y7_O: false,
			Y8_O: false,
			Y9_O: false,
			Y10_O: false,
			Y11_O: false,
			Y12_O: false,
			Y13_O: false,
			Y14_O: false,
			Y15_O: false,
		}
		this.U1 = new dltch(4);
		this.UHC4514LOG = new logicexp(14,22);
	}
}

/**
 * DECODER_DEMULTIPLEXER 4-16 LINE WITH ADDRESS LATCHES
 */
class SN74HC4515 {
	constructor() {
		this.pins = {
			LE_I: false,
			GBAR_I: false,
			A_I: false,
			B_I: false,
			C_I: false,
			D_I: false,
			Y0_O: false,
			Y1_O: false,
			Y2_O: false,
			Y3_O: false,
			Y4_O: false,
			Y5_O: false,
			Y6_O: false,
			Y7_O: false,
			Y8_O: false,
			Y9_O: false,
			Y10_O: false,
			Y11_O: false,
			Y12_O: false,
			Y13_O: false,
			Y14_O: false,
			Y15_O: false,
		}
		this.U1 = new dltch(4);
		this.UHC4515LOG = new logicexp(14,22);
	}
}

/**
 * 8-bit  Addressable Latches
 */
class SN74HC4724 {
	constructor() {
		this.pins = {
			GBAR: false,
			CLR: false,
			S0: false,
			S1: false,
			S2: false,
			D: false,
			Q0: false,
			Q1: false,
			Q2: false,
			Q3: false,
			Q4: false,
			Q5: false,
			Q6: false,
			Q7: false,
		}
		this.U10 = new bufa(6);
		this.U11 = new anda(3,9);
		this.U12 = new ora(2,8);
		this.U13 = new buf();
		this.UD1 = new inva(6);
		this.UD2 = new anda(3,8);
		this.UD3 = new anda(2,8);
		this.UD4 = new bufa(8);
		this.UL0 = new dltch(1);
		this.UL1 = new dltch(1);
		this.UL2 = new dltch(1);
		this.UL3 = new dltch(1);
		this.UL4 = new dltch(1);
		this.UL5 = new dltch(1);
		this.UL6 = new dltch(1);
		this.UL7 = new dltch(1);
		this.UL8 = new buf();
		this.UL9 = new bufa(3);
		this.UL10 = new and(2);
		this.UL11 = new or(2);
		this.UL12 = new suhdck(3);
		this.UL13 = new or(6);
		this.UL14 = new and(2);
		this.UL15 = new buf3a(9);
	}
}

/**
 * 6-Section Multifunction (Nand, Invert, Nor, Flip-Flop) Circuits
 */
class SN74HC7074 {
	constructor() {
		this.pins = {
			_1A: false,
			_2A: false,
			_3A: false,
			_3B: false,
			_6A: false,
			_6B: false,
			_1Y: false,
			_2Y: false,
			_3Y: false,
			_6Y: false,
			_4CLK: false,
			_4PREBAR: false,
			_4CLRBAR: false,
			_4D: false,
			_4Q: false,
			_4QBAR: false,
			_5CLK: false,
			_5PREBAR: false,
			_5CLRBAR: false,
			_5D: false,
			_5Q: false,
			_5QBAR: false,
		}
		this.U0 = new bufa(4);
		this.U1 = new inva(2);
		this.U2 = new nand(2);
		this.U3 = new nor(2);
		this.U4 = new dff(1);
		this.U5 = new dff(1);
	}
}

/**
 * 6-Section Multifunction (Nand, Invert, Flip-Flop) Circuits
 */
class SN74HC7075 {
	constructor() {
		this.pins = {
			_1A: false,
			_2A: false,
			_3A: false,
			_3B: false,
			_6A: false,
			_6B: false,
			_1Y: false,
			_2Y: false,
			_3Y: false,
			_6Y: false,
			_4CLK: false,
			_4PREBAR: false,
			_4CLRBAR: false,
			_4D: false,
			_4Q: false,
			_4QBAR: false,
			_5CLK: false,
			_5PREBAR: false,
			_5CLRBAR: false,
			_5D: false,
			_5Q: false,
			_5QBAR: false,
		}
		this.U1 = new bufa(4);
		this.U2 = new inva(2);
		this.U3 = new nanda(2,2);
		this.U4 = new dff(1);
		this.U5 = new dff(1);
	}
}

/**
 * 6-Section Multifunction (Invert, Nor, Flip-Flop) Circuits
 */
class SN74HC7076 {
	constructor() {
		this.pins = {
			_1A: false,
			_2A: false,
			_3A: false,
			_3B: false,
			_6A: false,
			_6B: false,
			_1Y: false,
			_2Y: false,
			_3Y: false,
			_6Y: false,
			_4CLK: false,
			_4PREBAR: false,
			_4CLRBAR: false,
			_4D: false,
			_4Q: false,
			_4QBAR: false,
			_5CLK: false,
			_5PREBAR: false,
			_5CLRBAR: false,
			_5D: false,
			_5Q: false,
			_5QBAR: false,
		}
		this.U1 = new bufa(4);
		this.U2 = new inva(2);
		this.U3 = new nora(2,2);
		this.U4 = new dff(1);
		this.U5 = new dff(1);
	}
}

/**
 * Quadruple 2-Input Exclusive-Nor Gates w_ Totem-Pole Outputs
 */
class SN74HC7266 {
	constructor() {
		this.pins = {
			A: false,
			B: false,
			Y: false,
		}
		this.U1 = new nxor();
	}
}