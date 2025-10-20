function f1() {
    return WebAssembly;
}
WebAssembly.instantiateStreaming().catch(f1);
function f4() {
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const v15 = new ArrayBuffer(3725, { maxByteLength: 3725 });
        const v17 = new Float32Array(v15);
        v17[103] = a10;
    }
    const v18 = new F5();
    return v18;
}
f4();
%PrepareFunctionForOptimization(f4);
%OptimizeFunctionOnNextCall(f4);
f4();
