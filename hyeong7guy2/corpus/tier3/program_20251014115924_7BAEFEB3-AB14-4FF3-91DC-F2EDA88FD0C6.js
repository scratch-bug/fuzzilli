const t0 = Temporal.Duration;
const v2 = new t0();
v2.relativeTo = v2;
try { v2.round(v2); } catch (e) {}
