function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    const v8 = t2().wasm.deserializeModule;
    try { new v8(); } catch (e) {}
}
function f10() {
    return d8;
}
F0.constructor = f10;
new F0(F0, f10, F0);
