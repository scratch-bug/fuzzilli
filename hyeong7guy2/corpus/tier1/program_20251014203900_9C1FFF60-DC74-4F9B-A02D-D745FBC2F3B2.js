function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v10 = [-28740];
        class C11 {
        }
        C11.h = a7;
        C11.h = a4;
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = a17.constructor;
            try { v18(a7); } catch (e) {}
        }
        new F12(v10, -1, C11, -2147483648);
        return a6;
    }
    f5(-2147483648, F1, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v22 = new F1(-2147483648, F1);
new F1();
new F1(F1, v22);
