const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        return v1["has"]();
    }
    f6(WeakMap, f6, v1);
    %OptimizeFunctionOnNextCall(f6);
}
new F2(F2, v1);
new F2();
new F2();
