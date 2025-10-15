function f1() {
    return f1;
}
WebAssembly.compileStreaming().catch(f1);
globalThis.console.debug(f1);
