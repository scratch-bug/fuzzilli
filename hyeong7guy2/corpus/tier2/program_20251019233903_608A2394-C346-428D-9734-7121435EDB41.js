function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            a5 != a5;
            return a7 >>> a7;
        }
        f4(f4());
        return a3;
    }
    f1();
    %PrepareFunctionForOptimization(f1);
    %OptimizeMaglevOnNextCall(f1);
    return f1(f0, f1);
}
({ construct: f0 }).construct();
