function f0() {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        gc();
        with (d8) {
            const t5 = test.FastCAPI;
            const v13 = new t5();
            v13.enforce_range_compare_u64(test, -2.220446049250313e-16);
        }
    }
    const v15 = new F1(F1, f0, F1, F1);
    new F1(F1, f0, F1, v15);
    return F1;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
