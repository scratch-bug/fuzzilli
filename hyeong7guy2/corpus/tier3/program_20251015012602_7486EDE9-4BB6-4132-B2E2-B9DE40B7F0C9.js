class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        Math.exp(C0);
        return a3;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v12 = new F1();
const v13 = new F1(F1, F1);
const t13 = v13.constructor;
new t13(v13, v12, v13, F1);
new F1();
