const v1 = Temporal.PlainTime;
const v2 = new v1();
const v3 = v2.since(v2);
try { v3.with(v1); } catch (e) {}
