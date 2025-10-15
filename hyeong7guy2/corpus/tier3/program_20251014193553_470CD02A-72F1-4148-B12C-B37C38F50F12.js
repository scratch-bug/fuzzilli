function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    let v9 = undefined;
    function f12() {
        return WebAssembly;
    }
    WebAssembly.instantiateStreaming().catch(f12);
    gc();
    const v55 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    const v72 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,124,0]);
    WebAssembly.instantiate(v72);
    const v74 = %WasmStruct();
    WebAssembly.compile(v55);
    v9 = undefined;
}
new F4(114.28460175642499, F4);
