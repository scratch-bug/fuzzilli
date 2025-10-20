function f1() {
    return Uint32Array;
}
const v4 = WebAssembly.compileStreaming(WebAssembly).then(Uint32Array, f1);
const v6 = globalThis.console;
v6.log(Uint32Array, WebAssembly, v6, v4);
