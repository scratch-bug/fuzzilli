const buf = new Uint8Array([0,97,115,109,1,0,0,0,1,17,3,79,1,95,1,127,0,79,1,94,1,110,0,96,1,107,1,0,3,4,3,0,0,0,7,32,4,8,99,114,101,97,116,101,95,65,0,0,6,119,97,114,109,117,112,0,1,1,102,0,2,10,23,3,6,0,65,129,138,138,138,2,67,0,0,11,2,0,11,7,0,32,0,91,1,0,11]);
const wasmModule = new WebAssembly.Module(buf);
const instance = new WebAssembly.Instance(wasmModule);
const { create_A, warmup, f } = instance.exports;

let trigger = false;
for (let i = 0; i < 100; i++) {
    if (trigger) {
        try {
            f(create_A());
        } catch(e) {
        }
    } else {
        warmup(create_A());
    }
}
trigger = true;
try {
    f(create_A());
} catch(e) {
}