const wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 2, 9, 1, 3, 105, 109, 112, 1, 102, 0, 0, 7, 9, 1, 5, 101, 120, 112, 95, 102, 0, 0]);
const import_object = { imp: { f: () => {} } };
const module = new WebAssembly.Module(wasm_code);
const instance = new WebAssembly.Instance(module, import_object);
const f = instance.exports.exp_f;
for (let i = 0; i < 25000; ++i) {
    f();
}