function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            f = 2.18185649370332;
        }
        new F9();
        return this;
    }
    f5(F1, 2.18185649370332, a4);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(F1, 2.18185649370332);
new F1();
new F1();
