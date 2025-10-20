function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = Math.acos(a5);
        v9 | v9;
        return v9;
    }
    f4(F0, F0, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0(F0, F0);
const v13 = v12.constructor;
new v13();
new F0(v13, F0);
