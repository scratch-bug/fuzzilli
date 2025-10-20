function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        let v12 = BigInt(-26206);
        return v12--;
    }
    f6(a5, F0, F0);
    %PrepareFunctionForOptimization(f6);
    %OptimizeFunctionOnNextCall(f6);
    f6(F0, this, a3);
}
new F0(F0, F0, F0, F0);
