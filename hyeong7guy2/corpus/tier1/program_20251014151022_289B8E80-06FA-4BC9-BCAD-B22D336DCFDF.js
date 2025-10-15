function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                const v19 = Math.expm1(a14);
                async function* f20(a21, a22, a23, a24) {
                    await v19;
                    return a22;
                }
                return F0;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        const v26 = new F9(a3, -1, a2, a7);
        return v26;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v28 = new F0();
new F0(v28, F0);
new F0();
