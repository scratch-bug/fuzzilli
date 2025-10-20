const v3 = Temporal.PlainDateTime;
const v4 = new v3(4, 4, 4);
try { v4.with(v3, 3197); } catch (e) {}
