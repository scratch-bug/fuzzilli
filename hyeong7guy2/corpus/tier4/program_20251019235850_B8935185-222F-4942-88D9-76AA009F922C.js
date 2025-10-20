const v1 = -2121n >> -2121n;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        v1 / v1;
        return -2121n;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v12 = new F2();
const t11 = v12.constructor;
const v14 = new t11();
new F2(v14, -2121n);
