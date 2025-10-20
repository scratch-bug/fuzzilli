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
        eval();
        const t12 = C12.constructor;
        const v16 = t12();
        try { v16.readbuffer(); } catch (e) {}
        const v19 = a6 || v16.isFinite(v16);
        v19 && v19;
    }
    f4(this, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
const v23 = v22.constructor;
const v24 = new v23(v23, F0);
const v25 = v24.constructor;
new v25(v23, F0, v25);
