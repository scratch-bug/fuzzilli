function f0(a1, a2) {
    const v4 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        a8[15] = 1.1;
        a10[8] = Object;
    }
    new F6(Object, Uint32Array, Uint32Array);
    new F6(v4, v4, v4);
    return a2;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
