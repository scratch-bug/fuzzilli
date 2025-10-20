function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = a11.arguments;
            function f16() {
                return -1;
            }
            function f17(a18) {
                function f19(a20, a21, a22, a23) {
                    return f19;
                }
                f19(f16, v15);
                return f16;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        const v25 = new F9(F0);
        return v25;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v27 = new F0(F0, F0);
const t26 = v27.constructor;
new t26();
new F0();
