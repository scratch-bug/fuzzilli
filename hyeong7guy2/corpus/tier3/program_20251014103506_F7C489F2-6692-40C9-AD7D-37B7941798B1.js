function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v10 = Date.prototype.getMonth;
        try { v10.apply(); } catch (e) {}
        return F0;
    }
    f4(F0, a2, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
const v14 = new F0();
const t12 = v14.constructor;
new t12(v13, F0, F0);
