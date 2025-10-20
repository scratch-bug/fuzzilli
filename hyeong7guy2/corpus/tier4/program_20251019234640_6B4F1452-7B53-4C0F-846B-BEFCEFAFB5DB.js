const v2 = new BigInt64Array(127);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return v2[-2];
    }
    f7();
    %PrepareFunctionForOptimization(f7);
    %OptimizeFunctionOnNextCall(f7);
    f7();
}
new F3(127, v2);
