function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a2;
            }
            function f15(a16) {
                let v17 = 1;
                v17--;
                for (let v19 = 0; v19 < 5; v19++) {
                    v17 * v19;
                    const v22 = {
                        get g() {
                            return a3;
                        },
                    };
                }
                return a5;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v23 = new F8(F0, F0, this, a6);
        v23.e = v23;
        return a3;
    }
    f4(F0, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v25 = new F0();
new F0();
new F0(v25, v25);
