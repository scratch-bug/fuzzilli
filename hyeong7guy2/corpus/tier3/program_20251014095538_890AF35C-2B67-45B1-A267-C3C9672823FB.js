const v1 = -14n >> -14n;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        v1 / v1;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v12 = new F2(F2, v1);
const t10 = v12.constructor;
new t10();
new F2();
