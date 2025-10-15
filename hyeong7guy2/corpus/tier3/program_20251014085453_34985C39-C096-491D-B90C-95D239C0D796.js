const t0 = Temporal.Duration;
const v2 = new t0();
v2.roundingMode = Temporal;
try { v2.round(v2); } catch (e) {}
