function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            JSON.stringify({}).substring(a4, -0.0);
        }
        const v19 = new F9(a6, a4, a6, a3);
        return v19;
    }
    f5(F1, f5, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v21 = new F1();
const t14 = v21.constructor;
new t14();
new F1();
