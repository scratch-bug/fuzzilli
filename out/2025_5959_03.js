const wasmHex = "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b";
const wasmCode = new Uint8Array(wasmHex.match(/../g).map(h => parseInt(h, 16)));

try {
    const module = new WebAssembly.Module(wasmCode);
    const instance = new WebAssembly.Instance(module);
    const f = instance.exports.f;

    for (let i = 0; i < 10000; ++i) {
        f(i % 2);
    }

    f(0);
    f(1);

} catch (e) {
}