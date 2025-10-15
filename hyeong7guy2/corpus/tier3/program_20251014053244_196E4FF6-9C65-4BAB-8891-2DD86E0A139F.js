function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
gc();
const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,0,120,112,0,0,10,6,1,4,0,65,42,11]);
const v64 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,124,0]);
WebAssembly.instantiate(v64);
const v67 = %WasmStruct();
WebAssembly.compile(v47);
