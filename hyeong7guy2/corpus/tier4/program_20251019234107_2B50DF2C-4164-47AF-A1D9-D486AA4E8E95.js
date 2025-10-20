function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            "0" & "0";
        }
        new F9(F9, F1, a7, a4);
        return F9;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1("0", "0");
const v19 = new F1();
new F1(v19, "0");
