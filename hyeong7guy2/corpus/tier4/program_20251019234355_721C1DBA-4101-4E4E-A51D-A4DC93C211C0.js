class C1 extends Float64Array {
}
const v2 = new C1();
try { Symbol.keyFor(v2); } catch (e) {}
