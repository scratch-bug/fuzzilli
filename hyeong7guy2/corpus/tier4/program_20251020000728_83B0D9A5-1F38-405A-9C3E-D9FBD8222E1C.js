function f0(a1) {
    return a1;
}
class C2 extends f0 {
}
function f4() {
    return Uint32Array;
}
WebAssembly.compileStreaming(C2, Uint32Array).then(Uint32Array, f4);
globalThis.console.context().debug(C2);
