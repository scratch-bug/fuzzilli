function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = a14--;
            try { Symbol.apply(F1, v15); } catch (e) {}
        }
        new F9();
        return this;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(F1, Symbol);
new F1();
new F1(Symbol, F1);
