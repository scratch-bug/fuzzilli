function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return a2;
        }
        function f9(a10, a11) {
            return this;
        }
        f8.constructor = f9;
        class C12 extends f8 {
            constructor(a14) {
                eval();
            }
        }
        const t15 = C12.constructor;
        t15().isNaN(C12).e;
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
const v23 = v22.constructor;
new v23(v22, v23);
const t25 = v22.constructor;
new t25();
