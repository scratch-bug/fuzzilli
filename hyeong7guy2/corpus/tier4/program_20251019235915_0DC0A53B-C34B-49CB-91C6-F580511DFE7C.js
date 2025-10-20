function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    const v6 = t2(a3, a4);
    const v7 = v6.wasm;
    try { v7.deserializeModule(F0, v6, v7); } catch (e) {}
}
function f9() {
    return d8;
}
F0.constructor = f9;
new F0();
