function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = globalThis.performance;
    try { v5.mark(); } catch (e) {}
    const v7 = v5.measureMemory;
    v7(v7, this, a2, this);
}
new F0(F0, F0);
