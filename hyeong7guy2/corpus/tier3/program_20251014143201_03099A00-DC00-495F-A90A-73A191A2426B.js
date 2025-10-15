const v1 = Temporal.PlainTime;
const v2 = new v1();
const v3 = v2.with;
try { v3(v2, v1); } catch (e) {}
