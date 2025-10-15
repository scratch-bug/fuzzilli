function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let i9 = -128; i9++, i9 < 6139;) {
        }
        return a7;
    }
    f4(f4, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v16 = new F0(F0, F0);
const v17 = new F0(F0, F0);
new F0(v16, v17);
