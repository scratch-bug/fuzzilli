function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return f8;
        }
        function f9(a10, a11) {
            return this;
        }
        f8.constructor = f9;
        class C12 extends f8 {
        }
        const t12 = C12.constructor;
        const v14 = t12();
        v14.isFinite(v14);
        return f4;
    }
    f4(this, F0, a2);
    f4(F0, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0();
const v19 = v18.constructor;
new v19(v19, v18, v19);
const v21 = new F0();
const t25 = v21.constructor;
new t25();
new F0(F0, F0);
