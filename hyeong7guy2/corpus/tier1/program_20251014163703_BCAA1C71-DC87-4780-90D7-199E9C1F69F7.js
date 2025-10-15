function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let i9 = 0;
            (() => {
                const v11 = i9 < 20000;
                for (let v12 = 0; v12 < 5; v12++) {
                }
                return v11;
            })();
            i9++) {
        }
        const v16 = {};
        const v18 = {
            next() {
                return v16;
            },
        };
        return v18;
    }
    f4(F0, a2, a2);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v21 = new F0();
new F0(v21, v21);
