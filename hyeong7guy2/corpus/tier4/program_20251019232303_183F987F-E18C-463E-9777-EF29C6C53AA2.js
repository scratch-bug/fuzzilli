function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    const v7 = t2(a4, a4).wasm;
    try { v7.serializeModule(); } catch (e) {}
}
function f9() {
    return d8;
}
F0.constructor = f9;
new F0(F0, f9, F0);
