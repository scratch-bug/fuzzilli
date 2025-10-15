function f1() {
    return f1;
}
WebAssembly.instantiateStreaming(129).catch(f1);
