const v2 = new SharedArrayBuffer(3);
const v4 = new Uint8Array(v2);
v4[0] = v4;
function f6() {
    return v4;
}
WebAssembly.instantiateStreaming().catch(f6);
