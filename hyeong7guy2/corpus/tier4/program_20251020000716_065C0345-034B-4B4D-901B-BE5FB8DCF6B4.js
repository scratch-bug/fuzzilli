class C1 extends Int16Array {
}
const v4 = Temporal.PlainMonthDay;
const v7 = v4.from({ day: 7, month: 330 });
v7.year = C1;
try { v7.toPlainDate(v7); } catch (e) {}
