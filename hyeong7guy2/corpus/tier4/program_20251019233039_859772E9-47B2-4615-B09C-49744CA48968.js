function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = new String();
        return v9.toUpperCase();
    }
    f4.call(F0, f4, f4, a2);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v13 = new F0(F0, F0);
const t11 = v13.constructor;
const v15 = new t11();
const t13 = v15.constructor;
new t13(v15);
