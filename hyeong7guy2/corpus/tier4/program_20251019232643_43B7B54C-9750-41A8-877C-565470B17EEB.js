function f2() {
    return f2;
}
WebAssembly.compileStreaming().catch(f2);
let v5 = -1e-15;
v5--;
const v10 = new ArrayBuffer(71, { maxByteLength: 1024 });
const v12 = new Uint16Array(v10);
v12.fill(v5);
