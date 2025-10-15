const wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 2, 7, 1, 1, 109, 1, 102, 0, 0, 7, 5, 1, 1, 101, 0, 0]);
const wasm_module = new WebAssembly.Module(wasm_code);
const import_object = { m: { f: () => {} } };
const wasm_instance = new WebAssembly.Instance(wasm_module, import_object);
const exported_func = wasm_instance.exports.e;
const promising_func = WebAssembly.promising(exported_func);

for (let i = 0; i < 100; i++) {
    try {
        promising_func();
    } catch (e) {
    }
}

try {
    promising_func();
} catch (e) {
}