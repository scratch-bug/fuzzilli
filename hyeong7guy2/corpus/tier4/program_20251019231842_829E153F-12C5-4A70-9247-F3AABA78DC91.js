const v1 = Temporal.PlainMonthDay;
const v5 = v1.from({ day: 25, month: 7 });
try { v5.toLocaleString(); } catch (e) {}
