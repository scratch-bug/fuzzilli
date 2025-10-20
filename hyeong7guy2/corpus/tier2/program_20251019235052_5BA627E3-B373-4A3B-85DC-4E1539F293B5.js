function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a3;
            }
            function f15(a16) {
                let v17 = 1;
                v17--;
                for (let v19 = 0; v19 < 5; v19++) {
                    const v20 = v17 * v19;
                    const t13 = {};
                    t13.b = v20;
                    const v23 = {
                        get g() {
                            return a7;
                        },
                    };
                }
                return a5;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v24 = new F8();
        v24.e = v24;
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v26 = new F0(F0, F0);
new F0(v26, F0);
new F0(v26, F0);
