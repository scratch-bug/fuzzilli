const v1 = Temporal.PlainYearMonth;
const v2 = v1.prototype;
try { v2.until(v1, v1); } catch (e) {}
