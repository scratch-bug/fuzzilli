function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a11[Symbol.toPrimitive] = Symbol;
        }
        const v16 = new F9(this);
        return v16;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(Symbol, F1);
const v19 = new F1();
new F1(v19, F1);
