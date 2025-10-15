function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        -Math.expm1(-406.2166264507465);
        return a8;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v13 = new F1(-406.2166264507465, -406.2166264507465);
const t10 = v13.constructor;
const v15 = new t10();
new F1(v15, v13);
