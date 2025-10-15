const v76 = new Uint8Array([0,97,115,109,1,0,0,0,1,16,4,95,1,95,96,1,108,0,0,96,1,109,0,0,96,1,127,0,3,3,2,1,3,4,4,1,112,0,1,7,8,1,4,109,97,105,110,0,1,9,7,1,0,65,0,11,1,0,10,11,2,2,0,11,7,0,208,0,65,0,17,2,0,11]);
const wasmCode = v76;
function poc(a79, a80) {
    try {
        try { a79(a80); } catch (e) {}
    } catch(e82) {
    }
}
const v84 = WebAssembly.Module;
let v85;
try { v85 = new v84(wasmCode); } catch (e) {}
const wasmModule = v85;
const v87 = WebAssembly.Instance;
let v88;
try { v88 = new v87(wasmModule); } catch (e) {}
const wasmInstance = v88;
const hot_func = wasmInstance?.exports?.main;
for (let i94 = 0; i94 < 100; i94++) {
}
