function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        Math.abs(f4);
        return F0;
    }
    f4(F0, this, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0(F0, F0);
const v12 = new F0();
const v13 = new F0(v11, v12);
const t12 = v13.constructor;
new t12();
