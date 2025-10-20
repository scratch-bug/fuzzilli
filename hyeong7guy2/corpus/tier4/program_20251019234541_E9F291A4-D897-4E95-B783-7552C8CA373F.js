function f1() {
    return Uint32Array;
}
const v3 = WebAssembly.compileStreaming();
v3.then(Uint32Array, f1);
globalThis.console.context().assert(v3);
