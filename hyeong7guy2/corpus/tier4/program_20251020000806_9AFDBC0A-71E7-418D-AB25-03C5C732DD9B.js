WebAssembly.then = -7;
function f2() {
    return WebAssembly;
}
WebAssembly.instantiateStreaming(WebAssembly).catch(f2);
