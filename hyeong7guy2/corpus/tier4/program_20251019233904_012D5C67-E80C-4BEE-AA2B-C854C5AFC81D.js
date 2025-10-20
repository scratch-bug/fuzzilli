function f0(a1, a2) {
    const v5 = new Array(223);
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        v5[3] /= 223;
    }
    new F6();
    return v5;
}
const v13 = f0(f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(v13, f0);
