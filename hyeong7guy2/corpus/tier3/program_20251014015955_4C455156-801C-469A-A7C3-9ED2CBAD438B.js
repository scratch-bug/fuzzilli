class C1 extends BigInt64Array {
}
const v2 = new C1();
try { v2.fill(C1, v2, BigInt64Array); } catch (e) {}
