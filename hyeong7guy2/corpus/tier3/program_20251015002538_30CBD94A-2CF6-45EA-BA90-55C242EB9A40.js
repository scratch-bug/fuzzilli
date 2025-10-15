function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        return -Math.expm1(-406.2166264507465);
    }
    f5(F1, a3, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v13 = new F1();
const t9 = v13.constructor;
new t9();
new F1();
