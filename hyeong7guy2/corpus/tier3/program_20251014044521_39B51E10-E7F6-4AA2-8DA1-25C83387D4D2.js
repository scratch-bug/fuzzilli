const v1 = new Uint32Array();
function f2() {
    return Uint32Array;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = a6.includes;
    try { v7.apply(F3, this, F3); } catch (e) {}
}
const v9 = new F3(f2, v1);
function f11() {
    return f2;
}
WebAssembly.instantiateStreaming(v9, v1, v9).catch(f11);
