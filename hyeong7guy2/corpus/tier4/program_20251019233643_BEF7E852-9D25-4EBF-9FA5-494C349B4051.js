const v2 = Temporal.PlainDateTime;
v2.microsecond = v2;
const v3 = new v2(4, 4, 4);
try { v3.with(v2); } catch (e) {}
