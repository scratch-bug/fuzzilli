const wasm_code = new Uint8Array([0,97,115,109,1,0,0,0,1,11,2,95,1,127,0,96,1,127,1,127,3,2,1,1,7,8,1,4,109,97,105,110,0,0,10,20,1,18,0,32,0,4,107,0,65,201,10,251,3,0,5,0,11,251,11,0,11]);
const wasm_module = new WebAssembly.Module(wasm_code);
const wasm_instance = new WebAssembly.Instance(wasm_module);
const main = wasm_instance.exports.main;

let do_trigger = false;
for (let i = 0; i < 25000; i++) {
    if (i === 24999) {
        do_trigger = true;
    }
    try {
        main(do_trigger ? 0 : 1);
    } catch (e) {
    }
}