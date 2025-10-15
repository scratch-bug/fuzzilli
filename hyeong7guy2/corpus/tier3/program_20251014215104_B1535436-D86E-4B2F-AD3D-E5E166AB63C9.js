function f0(a1, a2) {
    const v3 = a2 | a2;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        a6.prototype = a6;
        function f8(a9, a10, a11) {
            return f8;
        }
        f8(a7, v3, a1);
    }
    new F4(F4);
    const v14 = new F4(F4);
    return v14;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(f0, f0);
function f18() {
    return WebAssembly;
}
WebAssembly.compileStreaming(WebAssembly, f0).catch(f18);
