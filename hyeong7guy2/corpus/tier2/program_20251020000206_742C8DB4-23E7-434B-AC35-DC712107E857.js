function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a14;
            }
            function f16(a17) {
                const v20 = Number(-9007199254740992n);
                v20 / v20;
                return a14;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        const v22 = new F9(F0, a5, F9, f4);
        return v22;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0(F0, F0);
const v25 = v24.constructor;
new v25(v25, v25, F0, v24, v25);
new F0();
