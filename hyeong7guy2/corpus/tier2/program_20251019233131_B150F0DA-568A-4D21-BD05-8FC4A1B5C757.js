function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                Error.isError(Math.log1p(a17));
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(a2, this, f4, -1);
        return a7;
    }
    f4(a3, this, a3);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v25 = new F0();
new F0(v25, v25);
