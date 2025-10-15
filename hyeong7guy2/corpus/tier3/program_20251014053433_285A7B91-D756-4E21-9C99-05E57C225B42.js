const v2 = Temporal.PlainDate;
v2.calendar = v2;
const v3 = new v2(6, 6, 6);
try { v3.with(v2); } catch (e) {}
