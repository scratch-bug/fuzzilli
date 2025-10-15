const v0 = class {
}
class C1 {
}
try { C1(); } catch (e) {}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t7 = globalThis.performance.measureMemory;
    t7();
}
new F3();
