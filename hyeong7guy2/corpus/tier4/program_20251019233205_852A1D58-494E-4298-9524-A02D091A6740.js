function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        this & Math.asinh(1);
        return F1;
    }
    f5(F1, 1, a4);
    %OptimizeFunctionOnNextCall(f5);
}
const v13 = new F1();
const v14 = new F1(v13, v13);
const t11 = v14.constructor;
new t11(v14, v13);
