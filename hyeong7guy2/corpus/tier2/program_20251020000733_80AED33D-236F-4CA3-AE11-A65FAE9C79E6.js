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
            try { v18.apply(a7, a17); } catch (e) {}
        }
        new F12(v10, -1, C11, -2147483648);
        return a4;
    }
    f5(f5, a4, this);
    %OptimizeFunctionOnNextCall(f5);
}
const v22 = new F1();
const v23 = new F1(v22, v22);
const t21 = v23.constructor;
new t21(v23);
