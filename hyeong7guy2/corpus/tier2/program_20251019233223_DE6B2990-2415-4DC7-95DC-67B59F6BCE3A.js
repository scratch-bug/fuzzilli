function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return F0;
        }
        function f9(a10, a11) {
            return f4;
        }
        f8.constructor = f9;
        class C12 extends f8 {
        }
        const v13 = C12.constructor;
        v13();
        const v15 = v13();
        C12 === a5;
        return v15;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
