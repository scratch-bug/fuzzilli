function f0() {
    let v15 = 123;
    v15++;
    const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,v15,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    const t4 = WebAssembly.Module;
    const v39 = new t4(v36);
    const t6 = WebAssembly.Instance;
    const v41 = new t6(v39);
    const t8 = v41.exports.f;
    t8();
    function F45(a47) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F45();
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
