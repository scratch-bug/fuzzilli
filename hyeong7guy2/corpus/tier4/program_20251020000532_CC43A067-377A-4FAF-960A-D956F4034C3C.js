function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F3.constructor;
    const v11 = t2().wasm.serializeModule;
    try { v11(a7); } catch (e) {}
}
function f13() {
    return d8;
}
F3.constructor = f13;
const v15 = new F3();
const t11 = v15.constructor;
new t11(26528n, Date, 18);
