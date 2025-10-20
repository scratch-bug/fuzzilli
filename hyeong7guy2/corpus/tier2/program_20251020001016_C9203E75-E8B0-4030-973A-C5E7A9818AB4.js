function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
function f9(a10) {
    return F0;
}
Object.defineProperty(F5, "toString", { writable: true, enumerable: true, value: f9 });
function f12() {
    return f12;
}
WebAssembly.compileStreaming(WebAssembly, Uint32Array).then(Uint32Array, f12);
const v18 = globalThis.console.context();
try { v18.info(F5); } catch (e) {}
