const v1 = Temporal.PlainMonthDay;
const v2 = v1.prototype;
try { v2.equals(v1, v2); } catch (e) {}
