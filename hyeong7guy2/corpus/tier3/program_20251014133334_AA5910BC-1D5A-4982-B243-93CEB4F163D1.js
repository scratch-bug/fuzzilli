const t0 = Temporal.PlainTime;
const v2 = new t0();
v2.roundingIncrement = v2;
try { v2.round(v2); } catch (e) {}
