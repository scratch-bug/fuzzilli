function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = new Map();
            v15["has"](a8, a11);
        }
        new F9();
        return a4;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(Map, F1);
const v21 = new F1();
new F1(F1, v21);
