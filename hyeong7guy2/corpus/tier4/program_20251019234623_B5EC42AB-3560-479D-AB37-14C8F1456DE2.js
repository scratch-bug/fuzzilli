function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a14.unescape();
        }
        new F9(a3, a8, Symbol, this);
        return Symbol;
    }
    f5(F1, F1, f5);
    %OptimizeFunctionOnNextCall(f5);
}
const v18 = new F1(Symbol, F1);
const t14 = v18.constructor;
const v20 = new t14();
new F1(v20, Symbol);
