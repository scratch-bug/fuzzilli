function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a14;
            }
            function f16(a17) {
                function F18(a20, a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let i25 = 1.1; i25 < 20000; i25++) {
                }
                Math.expm1(F18);
                return f15;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(this, F0, a6, F9);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v34 = new F0();
new F0(v34, v34);
new F0();
