const wasm_code = new Uint8Array([0,97,115,109,1,0,0,0,1,7,1,96,2,124,111,1,111,3,2,1,0,7,8,1,4,109,97,105,110,0,0,10,16,1,13,0,4,0,32,1,32,0,65,1,13,0,32,1,11]);
let wasm_mod;
try {
    wasm_mod = new WebAssembly.Module(wasm_code);
} catch (e) {
}
if (wasm_mod) {
    const wasm_inst = new WebAssembly.Instance(wasm_mod, {});
    const main = wasm_inst.exports.main;
    for (let i = 0; i < 100; i++) {
        main(1.1, null);
    }
    main(2.2, {x: 1});
}