class C1 {
}
C1.second = -2.0;
const v3 = Temporal.PlainTime;
try { v3.compare(C1); } catch (e) {}
