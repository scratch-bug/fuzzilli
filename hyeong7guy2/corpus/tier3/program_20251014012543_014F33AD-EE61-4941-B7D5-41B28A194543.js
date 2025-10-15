function f0() {
    return f0;
}
class C1 extends f0 {
}
class C2 {
}
try { C2[C1](); } catch (e) {}
