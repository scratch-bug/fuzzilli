function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let i9 = 38489;
            (() => {
                for (const v11 of [0.3355499447371395]) {
                }
                return i9 < 20000;
            })();
            ) {
        }
        return F0;
    }
    f4(F0, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0(F0, F0);
const v18 = v17.constructor;
const v19 = new v18();
new F0(v18, v19);
