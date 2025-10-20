function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            Float64Array["16" + Float64Array];
        }
        new F9(Float64Array, F9, f5, Float64Array);
        return a6;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(Float64Array, F1);
new F1();
new F1();
