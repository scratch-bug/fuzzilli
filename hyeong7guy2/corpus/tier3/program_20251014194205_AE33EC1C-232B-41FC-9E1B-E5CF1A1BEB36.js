function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            516685201 / a14;
        }
        new F9();
        return F9;
    }
    f5(this, F1, 516685201);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
