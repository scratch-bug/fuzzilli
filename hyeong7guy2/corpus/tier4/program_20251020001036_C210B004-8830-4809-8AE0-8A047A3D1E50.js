function f0(a1, a2, a3) {
    const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t2 = WebAssembly.Module;
    new t2(v39);
    const v58 = %WasmStruct();
    const v59 = %WasmArray();
    const v86 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
    return WebAssembly.compile(v86);
}
const v91 = new Worker(f0, { type: "function" });
v91.getMessage();
