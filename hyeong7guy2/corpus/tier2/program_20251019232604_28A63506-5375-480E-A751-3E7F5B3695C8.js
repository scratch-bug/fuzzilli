function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return F0;
        }
        function f9(a10, a11) {
            class C12 {
            }
            return f9;
        }
        f8.constructor = f9;
        class C13 extends f8 {
        }
        const v14 = `unit${C13}bigint`;
        const v15 = C13.constructor;
        v15(v14);
        return v15;
    }
    f4(F0, F0, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0(F0, F0);
const v19 = new F0(v18, v18);
new F0(v19, F0);
