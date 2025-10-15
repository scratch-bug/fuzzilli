const t0 = Temporal.PlainDate;
const v4 = new t0(6, 6, 6);
const v5 = v4.toPlainDateTime();
try { v5.withCalendar(7); } catch (e) {}
