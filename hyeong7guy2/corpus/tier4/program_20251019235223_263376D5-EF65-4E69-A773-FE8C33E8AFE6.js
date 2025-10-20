function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a12++;
            a12 + a12;
        }
        const v17 = new F9();
        const t9 = v17.constructor;
        const v19 = new t9(a4, a3);
        return v19;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v21 = new F1();
const v22 = v21.constructor;
const v23 = new v22(6n);
const v24 = v23.constructor;
new v24(v24, v22);
