function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = {};
        for (let v9 = 0; v9 < 5; v9++) {
            v8.d = v8;
            for (let v10 = 0; v10 < 5; v10++) {
            }
        }
        return F0;
    }
    f4(F0, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0(F0, F0);
new F0(v12, F0);
new F0();
