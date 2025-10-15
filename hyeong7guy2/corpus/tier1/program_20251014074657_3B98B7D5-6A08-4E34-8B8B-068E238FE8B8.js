function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return F0;
            }
            function f16(a17) {
                return parseInt(16);
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(a7, a3, f4, F0);
        return a5;
    }
    f4(a2, F0, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0(F0, F0);
new F0(v23, F0);
new F0();
