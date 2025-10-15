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
            a17.constructor.isSafeInteger(a15);
        }
        new F12(v10, -1, C11, -2147483648);
        return a4;
    }
    f5(a4, this, -2147483648);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
const v23 = new F1();
const t20 = v23.constructor;
new t20();
