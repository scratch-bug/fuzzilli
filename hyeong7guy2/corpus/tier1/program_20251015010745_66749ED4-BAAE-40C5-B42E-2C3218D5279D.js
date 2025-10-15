function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = globalThis.performance.measureMemory;
    t2();
}
new F0();
function f19() {
}
WebAssembly.instantiateStreaming().catch(f19);
