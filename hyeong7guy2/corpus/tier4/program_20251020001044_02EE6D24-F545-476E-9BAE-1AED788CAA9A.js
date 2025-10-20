function f0() {
    return f0;
}
const v1 = f0.bind(f0, f0, f0);
WebAssembly.instantiateStreaming().catch(v1);
