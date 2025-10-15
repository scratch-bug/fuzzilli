function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6) {
        Array.isArray(a2);
        return Array;
    }
    f4();
    %PrepareFunctionForOptimization(f4);
    %OptimizeFunctionOnNextCall(f4);
    f4(f4, F0);
}
new F0();
