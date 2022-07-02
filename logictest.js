let A0BAR   = true;
let A1BAR   = true;
let A2BAR   = false;
let A3BAR   = false;

let B0BAR   = false;
let B1BAR   = false;
let B2BAR   = true;
let B3BAR   = false;

let S0      = true;
let S1      = true;
let S2      = false;
let S3      = true;

let M       = true;

let CN      = false;

let TOP3    =  !( (A3BAR & B3BAR & S3) | (A3BAR & !B3BAR & S2) ) ;
let BOT3    =  !(        (!B3BAR & S1) |  A3BAR | (B3BAR & S0) ) ;
let TOP2    =  !( (A2BAR & B2BAR & S3) | (A2BAR & !B2BAR & S2) ) ;
let BOT2    =  !(        (!B2BAR & S1) |  A2BAR | (B2BAR & S0) ) ;
let TOP1    =  !( (A1BAR & B1BAR & S3) | (A1BAR & !B1BAR & S2) ) ;
let BOT1    =  !(        (!B1BAR & S1) |  A1BAR | (B1BAR & S0) ) ;
let TOP0    =  !( (A0BAR & B0BAR & S3) | (A0BAR & !B0BAR & S2) ) ;
let BOT0    =  !(        (!B0BAR & S1) |  A0BAR | (B0BAR & S0) ) ;
let MBAR    =  !M ;
let F3BAR   =  (TOP3 ^ BOT3) ^ !( (  CN & MBAR & TOP2 & TOP1 & TOP0) |                                  (BOT0 & MBAR & TOP2 & TOP1) |                                  (BOT1 & MBAR & TOP2) |                                  (BOT2 & MBAR) ) ;
let F2BAR   =  (TOP2 ^ BOT2) ^ !( (  CN & MBAR & TOP1 & TOP0) |                                  (BOT0 & MBAR & TOP1) |                                  (BOT1 & MBAR) ) ;
let F1BAR   =  (TOP1 ^ BOT1) ^ !( (  CN & MBAR & TOP0) |                                  (BOT0 & MBAR) ) ;
let F0BAR   =  (TOP0 ^ BOT0) ^ !(    CN & MBAR) ;
let AEQUALB =  F3BAR & F2BAR & F1BAR & F0BAR ;
let PBAR    =  !(         TOP3 & TOP2 & TOP1 & TOP0) ;
let GBAR    =  !( (BOT0 & TOP3 & TOP2 & TOP1) |                  (BOT1 & TOP3 & TOP2) |                  (BOT2 & TOP3) |                    BOT3 ) ;
let CN_4    =  !GBAR | (!PBAR & CN) ;

(true ^ false) ^ !(    false & false)



console.log(TOP0, BOT0, CN, MBAR);
