function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = globalThis.performance.measureMemory;
    t2();
}
const v8 = new F0();
const v10 = %WasmArray();
function f11() {
    return F0;
}
WebAssembly.instantiateStreaming(v8, v10, v10).catch(f11);
