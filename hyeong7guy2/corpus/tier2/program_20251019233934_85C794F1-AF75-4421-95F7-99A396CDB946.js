function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return a5;
        }
        function f9(a10, a11) {
            return this;
        }
        f8.constructor = f9;
        class C12 extends f8 {
        }
        const t12 = C12.constructor;
        t12().isNaN(C12).e;
        return a2;
    }
    f4(a3, this, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0(F0, F0);
const t20 = v18.constructor;
new t20();
const t22 = v18.constructor;
new t22();
