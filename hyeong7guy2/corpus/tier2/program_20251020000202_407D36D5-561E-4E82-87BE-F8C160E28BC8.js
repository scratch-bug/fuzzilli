function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a7;
            }
            function f16(a17) {
                const v20 = Number(-9007199254740992n);
                v20 % v20;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(F0, -1, f4, a6);
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0(F0, F0);
const v25 = new F0(v24, F0);
new F0(v24, v25);
