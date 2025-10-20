function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return f4;
        }
        function f9() {
            return a3;
        }
        class C10 extends f9 {
        }
        function f11() {
            return f8;
        }
        f11.constructor = f8;
        const v12 = f11.constructor;
        function f13(a14, a15) {
            return F0;
        }
        v12[Symbol.toPrimitive] = f13;
        return f9;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0(F0, F0);
new F0(v19, F0);
new F0();
