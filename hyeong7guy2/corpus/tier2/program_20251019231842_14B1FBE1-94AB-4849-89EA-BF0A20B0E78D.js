function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v9 = a8 / a8;
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a12;
            }
            function f17(a18) {
                function f19(a20, a21, a22, a23) {
                    return f16;
                }
                f19(v9);
                return a18;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
        }
        const v25 = new F10(a3, v9, v9, a8);
        v25.e = v25;
        return a4;
    }
    f5(a3, a3, a4);
    %OptimizeFunctionOnNextCall(f5);
}
const v27 = new F1(-2147483647, -2147483647);
new F1(v27, v27);
new F1();
