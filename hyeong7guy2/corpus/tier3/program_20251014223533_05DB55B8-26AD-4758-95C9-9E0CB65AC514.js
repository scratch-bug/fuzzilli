function f0(a1, a2) {
    a2 | a2;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        a6.name;
    }
    const v9 = new F4(f0);
    return v9.constructor;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(f0, f0);
function f14() {
    return WebAssembly;
}
WebAssembly.compileStreaming().catch(f14);
