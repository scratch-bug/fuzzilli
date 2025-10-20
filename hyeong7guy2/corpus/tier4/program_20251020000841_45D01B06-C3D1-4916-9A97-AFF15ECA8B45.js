const v1 = Temporal.PlainMonthDay;
const v5 = v1.from({ day: 7, month: 4 });
try { v5.with(7); } catch (e) {}
