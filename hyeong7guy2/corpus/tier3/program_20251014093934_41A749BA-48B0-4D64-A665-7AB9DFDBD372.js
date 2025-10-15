function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        typeof 2;
        return this;
    }
    f5(F1, 2, 2);
    %OptimizeFunctionOnNextCall(f5);
}
const v11 = new F1(F1, F1);
const v12 = new F1(2, v11);
new F1(v12, v12);
