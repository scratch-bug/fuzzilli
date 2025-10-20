function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
            }
            function f16(a17) {
                function F18(a20, a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v24 = Math.expm1(F18);
                async function* f25(a26, a27, a28, a29) {
                    await v24;
                }
                return F0;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(a7, -1, f4, a3);
        return a7;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v33 = new F0();
new F0(F0, v33);
new F0(v33, F0);
