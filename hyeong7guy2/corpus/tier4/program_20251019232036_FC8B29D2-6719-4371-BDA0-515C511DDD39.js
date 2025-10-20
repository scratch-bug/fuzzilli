function f0() {
    try {
        const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        const t3 = WebAssembly.Module;
        const v38 = new t3(v35);
        const t5 = WebAssembly.Instance;
        const v40 = new t5(v38);
        const t7 = v40.exports.f;
        t7(0);
    } catch(e44) {
    }
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
