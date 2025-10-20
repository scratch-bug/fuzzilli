const v2 = new Int8Array(1000);
new Float64Array(v2);
function f6() {
    return v2;
}
WebAssembly.compileStreaming().then(Uint32Array, f6);
