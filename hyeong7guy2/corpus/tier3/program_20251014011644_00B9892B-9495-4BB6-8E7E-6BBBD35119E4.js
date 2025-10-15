function f1(a2) {
    return Int16Array;
}
class C3 extends f1 {
    #g;
}
new C3();
try { new C3(); } catch (e) {}
