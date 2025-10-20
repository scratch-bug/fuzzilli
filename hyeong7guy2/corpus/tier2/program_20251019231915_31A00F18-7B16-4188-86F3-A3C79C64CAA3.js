function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a7;
            }
            function f15(a16) {
                for (let v17 = 0; v17 < 5; v17++) {
                    const v18 = v17++;
                    v17 * v17;
                    const v25 = {
                        [v18](a21, a22, a23, a24) {
                        },
                    };
                }
                return f15;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v26 = new F8(a7, a7, a2, a7);
        v26.e = v26;
        return F8;
    }
    f4(F0, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v28 = new F0();
const v29 = v28.constructor;
new v29(v29, v29, v29);
new F0(v28, F0);
