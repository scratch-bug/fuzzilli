const v1 = Temporal.PlainMonthDay;
const v4 = { day: 25, month: 7 };
const v5 = v1.from(v4);
try { v5.toLocaleString(v4, v4); } catch (e) {}
