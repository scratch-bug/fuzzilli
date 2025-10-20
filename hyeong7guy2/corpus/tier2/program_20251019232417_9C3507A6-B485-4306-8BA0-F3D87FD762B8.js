function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return F0;
        }
        function f9(a10, a11) {
            return a11;
        }
        f8.constructor = f9;
        class C12 extends f8 {
        }
        C12.constructor(a3);
        const v14 = C12.constructor;
        v14.a = v14;
        return a5;
    }
    f4(F0, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v16 = new F0();
const t21 = v16.constructor;
new t21();
const t23 = v16.constructor;
new t23();
