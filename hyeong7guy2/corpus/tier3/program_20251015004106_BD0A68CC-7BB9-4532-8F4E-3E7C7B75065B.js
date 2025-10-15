function f0() {
}
class C1 extends f0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t6 = globalThis.performance.measureMemory;
    t6();
}
new F2();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    [6,-65537];
    gc();
}
new F11();
