const t0 = Temporal.Duration;
const v3 = new t0(-4096, -4096);
v3.roundingIncrement = -4096;
try { v3.round(v3); } catch (e) {}
