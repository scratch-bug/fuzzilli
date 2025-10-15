const v2 = Temporal.PlainYearMonth;
const v3 = new v2(1, 1);
try { v3.equals(v2); } catch (e) {}
