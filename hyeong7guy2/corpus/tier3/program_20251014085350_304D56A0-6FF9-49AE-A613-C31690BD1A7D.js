class C1 extends Float32Array {
}
const v2 = new C1();
try { Uint8Array.apply(Date, v2); } catch (e) {}
