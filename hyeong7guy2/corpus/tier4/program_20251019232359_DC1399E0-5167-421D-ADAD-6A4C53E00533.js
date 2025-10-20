const v2 = Temporal.PlainMonthDay;
const v5 = v2.from({ day: 7, month: 330 });
try { v5.toPlainDate(v5); } catch (e) {}
