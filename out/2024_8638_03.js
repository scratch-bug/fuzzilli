function f() {}
const wasm_code = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,13,1,7,105,109,112,111,114,116,115,1,102,0,0,7,9,1,5,114,101,101,120,112,0,0]);
const wasm_module = new WebAssembly.Module(wasm_code);
const instance = new WebAssembly.Instance(wasm_module, { imports: { f: f } });
const reexp = instance.exports.reexp;
for (let i = 0; i < 20000; i++) {
    reexp();
}