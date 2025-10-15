function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                const v19 = Math.expm1(a14);
                function f20(a21, a22, a23) {
                    const v24 = { [v19]: a17 };
                    return F0;
                }
                const v25 = f20();
                const v26 = f20(this, a6, F0);
                f20(F0, a2, v26);
                f20(v26, v25, f20(a3, v26, v19));
                f20();
                f20(f20, F0, a12);
                f20();
                f20();
                return a2;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(f4, F0, a5, a3);
        return this;
    }
    f4(a2, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v36 = new F0();
new F0();
new F0(F0, v36);
