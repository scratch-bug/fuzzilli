function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = globalThis.console;
    try { v5.assert(); } catch (e) {}
}
new F0();
