function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f4;
            }
            function f16(a17) {
                Error.isError(Math.log1p(!a17));
                return a17;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        const v23 = new F9();
        return v23;
    }
    f4(this, this, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v25 = new F0();
new F0(v25, v25);
new F0();
