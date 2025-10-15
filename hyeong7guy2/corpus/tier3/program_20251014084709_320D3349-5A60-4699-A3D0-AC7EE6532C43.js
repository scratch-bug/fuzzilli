class C0 {
}
function f1() {
    return C0;
}
C0[Symbol.toPrimitive] = f1;
try { (108).toFixed(C0); } catch (e) {}
