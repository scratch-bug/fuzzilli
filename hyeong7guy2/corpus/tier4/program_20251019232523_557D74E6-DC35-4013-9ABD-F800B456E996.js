function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15(a16) {
                const v17 = Symbol.isConcatSpreadable;
                this[v17];
                return v17;
            }
            f15(f15);
        }
        new F9();
        return Symbol;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1(Symbol, F1);
new F1();
