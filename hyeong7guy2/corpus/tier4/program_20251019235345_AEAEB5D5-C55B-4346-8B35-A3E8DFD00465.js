function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a13 != a13;
        }
        const v16 = new F9(a3, a4, 0.2747522027226579);
        const t8 = v16.constructor;
        new t8();
        return F1;
    }
    f5(this, a3, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v20 = new F1();
const t16 = v20.constructor;
new t16();
new F1();
