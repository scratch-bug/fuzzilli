function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return a5;
        }
        function f9(a10, a11) {
            return f4;
        }
        f8.constructor = f9;
        class C12 extends f8 {
        }
        const v13 = C12.constructor;
        v13(v13, F0, v13, a6);
        return v13();
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0(F0, F0);
const v18 = new F0(v17, v17);
const v19 = new F0(v18, v17);
const t22 = v19.constructor;
new t22();
