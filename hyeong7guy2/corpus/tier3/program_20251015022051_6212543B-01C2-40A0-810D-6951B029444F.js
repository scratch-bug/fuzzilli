function f1() {
    return Uint32Array;
}
const v2 = class {
}
WebAssembly.compileStreaming().then(Uint32Array, f1);
globalThis.console.context(v2);
