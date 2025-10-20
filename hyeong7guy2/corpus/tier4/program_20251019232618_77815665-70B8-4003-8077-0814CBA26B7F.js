class C1 extends BigInt64Array {
}
const v2 = new C1();
class C3 {
}
C3.minutes = v2;
const t6 = Temporal.PlainTime;
const v6 = new t6();
v6.since(v6).subtract(C3);
