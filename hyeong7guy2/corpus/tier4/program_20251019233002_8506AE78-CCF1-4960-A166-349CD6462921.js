function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            ("NFC").endsWith(-3.0);
        }
        new F9();
        return F1;
    }
    f5(F1, f5, a3);
    %OptimizeFunctionOnNextCall(f5);
}
const v19 = new F1();
const v20 = new F1(-3.0, v19);
const v21 = v20.constructor;
new v21(-3.0, v21, F1, -3.0);
new F1();
