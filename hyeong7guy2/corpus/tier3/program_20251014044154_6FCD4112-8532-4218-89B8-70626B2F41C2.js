for (let v0 = 0; v0 < 250; v0++) {
    function f1() {
    }
    f1();
    %PrepareFunctionForOptimization(f1);
    %OptimizeFunctionOnNextCall(f1);
}
