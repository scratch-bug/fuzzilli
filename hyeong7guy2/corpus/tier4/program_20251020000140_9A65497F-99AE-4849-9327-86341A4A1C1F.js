class C1 {
}
const v2 = C1.toString;
try { v2.call(16); } catch (e) {}
