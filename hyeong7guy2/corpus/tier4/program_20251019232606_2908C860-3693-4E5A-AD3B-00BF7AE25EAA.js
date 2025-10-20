function f1() {
    return f1;
}
WebAssembly.compileStreaming().catch(f1);
const v6 = { maxByteLength: 1000 };
let v7 = 3;
v7++;
const v9 = new SharedArrayBuffer(v7, v6);
const v11 = new Uint8Array(v9);
new Uint8ClampedArray(v11);
for (let i15 = 10, i16 = 10; i16; i16--) {
}
for (let i24 = 0, i25 = 10; i25; i25--) {
}
