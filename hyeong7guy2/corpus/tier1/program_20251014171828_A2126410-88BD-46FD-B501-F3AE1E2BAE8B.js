function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                a17 << a17;
                return 2147483647;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = 2147483647;
        }
        const v19 = new F9(F0, 2147483647, F9, 2147483647);
        v19.e = v19;
        return a2;
    }
    f4(F0, F0, this);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v22 = new F0();
new F0(v22, v22);
