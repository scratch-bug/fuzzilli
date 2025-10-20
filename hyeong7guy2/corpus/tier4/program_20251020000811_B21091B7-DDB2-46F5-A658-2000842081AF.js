function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F9.constructor = Array;
        F9.constructor();
        return this;
    }
    f5(F1, this, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v17 = new F1();
const t14 = v17.constructor;
new t14();
new F1();
