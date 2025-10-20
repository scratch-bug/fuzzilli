function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return F0;
        }
        const t6 = Intl.DateTimeFormat;
        const v11 = t6();
        function f12(a13, a14) {
            return v11;
        }
        f8.constructor = f12;
        class C15 extends f8 {
        }
        const t14 = C15.constructor;
        t14();
        return a7;
    }
    f4(a2, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0(F0, F0);
const v20 = new F0(v19, v19);
new F0(v20, v19);
