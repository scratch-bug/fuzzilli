const v0 = [];
function f1() {
    return v0;
}
function f2() {
    return f2;
}
f2.toString = f1;
class C3 extends f2 {
}
try { v0[C3](); } catch (e) {}
