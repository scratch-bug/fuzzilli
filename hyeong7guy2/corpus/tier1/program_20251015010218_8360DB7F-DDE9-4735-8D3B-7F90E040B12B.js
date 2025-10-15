function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = globalThis.performance.measureMemory;
    t2();
}
new F3();
[0,97,536870889,109,0,0,0,0,1,15,4,95,0,97,108,0,-9007199254740992,127,0,96,0,107,2,1,127];
const v68 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t8 = WebAssembly.Module;
const v71 = new t8(v68);
function f72() {
    return 536870912;
}
const v73 = { f: f72 };
const v74 = { m: v73 };
const v75 = %WasmArray();
const t16 = WebAssembly.Instance;
new t16(v71, v74);
new Float32Array();
function f82() {
}
WebAssembly.instantiateStreaming().catch(f82);
