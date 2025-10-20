function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        %OptimizeFunctionOnNextCall(f5);
        parseInt("o");
        return a6;
    }
    f5();
}
new F1(F1, F1);
const v13 = new F1();
const t11 = v13.constructor;
new t11();
