const v92 = new Uint8Array([0,97,115,109,1,0,0,0,1,11,2,96,1,111,1,111,96,2,124,111,0,0,3,2,1,0,7,8,1,4,109,97,105,110,0,0,10,44,1,42,1,1,127,68,0,0,0,0,0,0,0,0,208,110,4,64,124,111,32,3,26,68,31,133,235,133,30,209,42,64,32,0,32,1,65,1,106,33,1,32,1,65,1,72,13,0,32,3,11,11]);
const wasm_code = v92;
const v95 = WebAssembly.Module;
let v96;
try { v96 = new v95(wasm_code); } catch (e) {}
const wasm_module = v96;
const v98 = WebAssembly.Instance;
let v99;
try { v99 = new v98(wasm_module); } catch (e) {}
const instance = v99;
const main = instance?.exports?.main;
for (let i105 = 0; i105 < 100; ++i105) {
    try { main(null); } catch (e) {}
}
const v114 = { p: 1 };
try { main(v114); } catch (e) {}
