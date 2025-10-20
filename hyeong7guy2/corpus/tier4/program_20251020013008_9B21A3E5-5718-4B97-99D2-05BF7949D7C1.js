function f0(a1, a2) {
    const v3 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        a7[0] = a8;
    }
    new F5(Object);
    new F5(v3);
    return Object;
}
f0(f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
