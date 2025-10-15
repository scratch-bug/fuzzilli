function f1() {
    return f1;
}
WebAssembly.compileStreaming(WebAssembly, f1).catch(f1);
const v5 = globalThis.console;
v5.trace(v5, WebAssembly);
