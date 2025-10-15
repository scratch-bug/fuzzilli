for (let v0 = 0; v0 < 5; v0++) {
    function f1(a2) {
        return Object();
    }
    %PrepareFunctionForOptimization(f1);
    %OptimizeFunctionOnNextCall(f1);
    f1();
}
