for (let i = 0; i < 10; i++) {
    function f0() {
    }
    %PrepareFunctionForOptimization(f0);
    f0();
    %OptimizeMaglevOnNextCall(f0);
}
