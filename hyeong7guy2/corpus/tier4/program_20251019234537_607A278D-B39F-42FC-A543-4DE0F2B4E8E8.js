function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = new Set();
        v9.clear();
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0();
const v13 = new F0(F0, v12);
new F0(v12, v13);
