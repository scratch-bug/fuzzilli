function f1() {
    return f1;
}
WebAssembly.compileStreaming().catch(f1);
