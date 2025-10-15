class C1 extends Float64Array {
}
const v2 = new C1();
const v3 = new C1();
try { v3.sort(v2); } catch (e) {}
