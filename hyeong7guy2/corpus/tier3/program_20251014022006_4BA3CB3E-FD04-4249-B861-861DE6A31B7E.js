class C1 extends Date {
}
const v2 = new C1();
try { new SharedArrayBuffer(v2); } catch (e) {}
