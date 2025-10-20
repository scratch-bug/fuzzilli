function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = globalThis.performance;
    try { v5.measure(v5); } catch (e) {}
}
new F0(F0, F0);
