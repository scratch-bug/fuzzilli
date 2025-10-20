function f1() {
    with (d8) {
        const t2 = test.FastCAPI;
        const v5 = new t2();
        v5.enforce_range_compare_i64(-5.0, d8);
    }
    return d8;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
