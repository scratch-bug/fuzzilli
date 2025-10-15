const wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,9,2,96,0,1,107,96,0,0,2,9,1,1,109,1,102,0,0,3,2,1,1,7,8,1,4,116,101,115,116,0,1,10,7,1,5,0,16,0,11]);
let trigger = false;
const imports = {
    m: {
        f: () => {
            if (trigger) {
                return null;
            }
            return "warmup";
        }
    }
};
const wasmModule = new WebAssembly.Module(wasmCode);
const instance = new WebAssembly.Instance(wasmModule, imports);
const { test } = instance.exports;
for (let i = 0; i < 100; i++) {
    try {
        test();
    } catch (e) {}
}
trigger = true;
try {
    test();
} catch (e) {}