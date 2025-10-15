function f0() {
    return f0;
}
const v37 = %WasmStruct();
gc();
const v46 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,13,1,7,105,109,112,111,114,116,115,1,102,0,0,7,9,1,5,114,101,101,120,112,0,0]);
const t6 = WebAssembly.Module;
const v49 = new t6(v46);
const v50 = WebAssembly.Instance;
const v51 = { f: f0 };
new v50(v49, { imports: v51 });
