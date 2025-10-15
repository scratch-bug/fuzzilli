function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = globalThis.performance;
    try { v5.measure(); } catch (e) {}
    const t4 = v5.measureMemory;
    t4();
}
const v9 = new F0();
const t8 = v9.constructor;
new t8();
