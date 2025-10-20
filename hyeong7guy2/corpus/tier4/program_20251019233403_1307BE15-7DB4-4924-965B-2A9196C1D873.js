class C1 {
}
C1.microseconds = 1000;
const t3 = Temporal.PlainDate;
const v5 = new t3(6, 6, 6);
try { v5.add(C1, 6); } catch (e) {}
