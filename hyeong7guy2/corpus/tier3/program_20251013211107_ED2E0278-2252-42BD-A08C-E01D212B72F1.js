function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
try { Set.apply(C1, v2); } catch (e) {}
