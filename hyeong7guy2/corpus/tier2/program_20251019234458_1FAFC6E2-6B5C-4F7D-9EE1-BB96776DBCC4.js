function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return this;
            }
            function f16(a17) {
                Number(-9007199254740992n);
                return a11;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        const v21 = new F9(F9, F0, this, F0);
        return v21;
    }
    f4(F0, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0(F0, F0);
new F0(v23, v23);
new F0();
