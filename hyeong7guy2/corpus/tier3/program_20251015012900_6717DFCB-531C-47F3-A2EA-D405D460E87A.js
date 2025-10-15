const t0 = Temporal.Duration;
const v3 = new t0();
v3.relativeTo = 1024;
try { v3.round(v3); } catch (e) {}
