function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
            }
            function f16(a17) {
                const v20 = Number(-9007199254740992n);
                return v20 - v20;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
        return F0;
    }
    f4(a3, F0, this);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v25 = new F0();
const t22 = v25.constructor;
new t22(v25, F0);
