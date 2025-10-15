class C1 {
}
const v2 = new C1();
v2.length = 1n;
class C3 extends C1 {
}
try { C3.apply(v2, v2); } catch (e) {}
