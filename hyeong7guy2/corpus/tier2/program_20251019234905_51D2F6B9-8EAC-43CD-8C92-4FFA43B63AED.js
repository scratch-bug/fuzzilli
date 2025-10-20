function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return F0;
        }
        function f9(a10, a11) {
            return this;
        }
        f8.constructor = f9;
        class C12 extends f8 {
        }
        const t12 = C12.constructor;
        t12().isNaN(C12);
        return f4;
    }
    const v17 = f4(F0, f4(), a3);
    v17(a3, F0, v17);
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0(F0, F0);
const v20 = v19.constructor;
new v20();
const t23 = v19.constructor;
const v23 = new t23();
const t25 = v23.constructor;
new t25(v19, v19, F0, v23, v20);
