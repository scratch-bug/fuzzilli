class C1 extends Uint32Array {
}
const v2 = new C1();
class C3 {
}
try { C3.apply(C1, v2); } catch (e) {}
