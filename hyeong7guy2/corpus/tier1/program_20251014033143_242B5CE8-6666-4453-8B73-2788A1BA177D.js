function f1() {
    return WebAssembly;
}
WebAssembly.instantiateStreaming(WebAssembly).catch(f1);
new Uint8ClampedArray(268435441);
gc();
