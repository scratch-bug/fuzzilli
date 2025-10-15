class C1 extends BigUint64Array {
}
const v2 = new C1();
try { v2.fill(BigUint64Array, C1, C1); } catch (e) {}
