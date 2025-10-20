function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        return -BigInt(64);
    }
    const v14 = f6();
    %PrepareFunctionForOptimization(f6);
    %OptimizeFunctionOnNextCall(f6);
    f6(F0, v14, a5);
}
new F0(F0, F0, F0, F0);
