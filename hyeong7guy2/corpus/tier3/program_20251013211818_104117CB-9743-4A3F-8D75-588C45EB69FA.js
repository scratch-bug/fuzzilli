class C1 extends Uint8Array {
}
const v2 = new C1();
try { Symbol.keyFor(v2); } catch (e) {}
