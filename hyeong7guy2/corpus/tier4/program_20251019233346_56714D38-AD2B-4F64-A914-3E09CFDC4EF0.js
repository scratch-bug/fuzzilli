const v1 = Temporal.PlainYearMonth;
const v2 = v1.prototype;
try { v2.with(v2, v1, v2, v2, Temporal); } catch (e) {}
