const v1 = Temporal.PlainYearMonth;
const v2 = v1.prototype;
try { v2.toPlainDate(v1); } catch (e) {}
