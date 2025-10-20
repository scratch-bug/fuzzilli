function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = globalThis.performance;
    try { v6.mark(8); } catch (e) {}
}
new F1(F1, 8);
