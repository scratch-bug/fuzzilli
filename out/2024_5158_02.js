function trigger(arg) {
    return Array.prototype.concat.call([], arg);
}

for (let i = 0; i < 10000; ++i) {
    trigger({});
}

try {
    let wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]);
    let wasm_module = new WebAssembly.Module(wasm_code);
    let wasm_instance = new WebAssembly.Instance(wasm_module);
    let obj = {};
    Object.setPrototypeOf(obj, wasm_instance);
    trigger(obj);
} catch (e) {
}