class C0 {
}
function f1() {
    function f2(a3, a4) {
        const v7 = C0--;
        Math.hypot();
        Math.atan2(v7, C0);
    }
    f2();
    %PrepareFunctionForOptimization(f2);
    %OptimizeMaglevOnNextCall(f2);
    f2();
}
({ construct: f1 }).construct();
