function trigger(a1) {
    const v2 = [];
    return Array.prototype.concat.call(v2, a1);
}
for (let i8 = 0; i8 < 10000; ++i8) {
    trigger({});
}
try {
    const v26 = new Uint8Array([0,97,115,109,1,0,0,0]);
    let wasm_code = v26;
    const t10 = WebAssembly.Module;
    const v30 = new t10(wasm_code);
    let wasm_module = v30;
    const t13 = WebAssembly.Instance;
    const v33 = new t13(wasm_module);
    let wasm_instance = v33;
    let obj = {};
    Object.setPrototypeOf(obj, wasm_instance);
    trigger(obj);
} catch(e40) {
}
