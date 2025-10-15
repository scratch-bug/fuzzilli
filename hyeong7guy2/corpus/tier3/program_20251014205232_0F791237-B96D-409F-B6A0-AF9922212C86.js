function f0(a1, a2) {
    const v3 = a2 | a2;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        this.isPrototypeOf(F4, F4, a7, v3, this);
    }
    const v9 = new F4(f0, f0);
    return v9.__lookupGetter__;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
const v12 = f0();
function f14() {
    return v12;
}
WebAssembly.compileStreaming(WebAssembly, f14).catch(f14);
