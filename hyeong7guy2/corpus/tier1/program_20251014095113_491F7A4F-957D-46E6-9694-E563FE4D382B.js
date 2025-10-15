function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return this;
            }
            function f16(a17) {
                return f16;
            }
            f16.isPrototypeOf(a2);
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        try { F9(); } catch (e) {}
        new F9();
        return F0;
    }
    f4(F0, a3, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
new F0(v22, v22);
new F0();
