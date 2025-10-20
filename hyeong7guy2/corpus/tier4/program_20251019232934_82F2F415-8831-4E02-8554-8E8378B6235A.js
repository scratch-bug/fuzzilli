function f0() {
    return f0;
}
function f1() {
    const v2 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        Array.prototype.reduce.apply(v2, [f0]);
    }
    new F3();
    return f1;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
