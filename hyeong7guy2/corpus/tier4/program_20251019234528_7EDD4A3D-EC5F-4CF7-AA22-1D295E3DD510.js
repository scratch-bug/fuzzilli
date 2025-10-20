function f2() {
    throw -7;
    return f2;
}
WebAssembly.then = f2;
function f3() {
    return f3;
}
WebAssembly.instantiateStreaming(WebAssembly).catch(f3);
