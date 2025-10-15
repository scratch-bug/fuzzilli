function f0(a1, a2) {
    a2 | a2;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        try { new this(); } catch (e) {}
        -(a7--);
    }
    const v11 = new F4(f0, F4);
    const v12 = new F4(F4, v11);
    return v12;
}
const v13 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(v13, f0);
function f16() {
    return f16;
}
WebAssembly.compileStreaming(WebAssembly, f16).catch(f16);
