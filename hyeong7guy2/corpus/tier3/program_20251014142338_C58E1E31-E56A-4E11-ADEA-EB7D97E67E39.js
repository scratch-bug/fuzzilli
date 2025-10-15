const v2 = Temporal.PlainMonthDay;
const v6 = v2.from({ day: 25, month: 7 });
try { v6.equals(Date); } catch (e) {}
