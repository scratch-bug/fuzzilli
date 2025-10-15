const v2 = Temporal.PlainDateTime;
const v3 = new v2(4, 4, 4);
try { v3.with(v2); } catch (e) {}
