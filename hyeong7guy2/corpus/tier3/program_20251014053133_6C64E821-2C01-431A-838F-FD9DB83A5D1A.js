const v2 = Temporal.PlainDate;
const v3 = new v2(6, 6, 6);
try { v3.with(v2); } catch (e) {}
