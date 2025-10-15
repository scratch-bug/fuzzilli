const v0 = class {
}
function f1() {
    return -65537n;
}
v0.valueOf = f1;
class C3 {
}
function f4(a5) {
    a5 ** a5;
    return a5;
}
C3.constructor = f4;
const v7 = C3.constructor;
try { v7(v0); } catch (e) {}
