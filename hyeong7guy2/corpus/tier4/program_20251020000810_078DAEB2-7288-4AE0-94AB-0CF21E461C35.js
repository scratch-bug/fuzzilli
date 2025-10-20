function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = ("2147483647").split("2147483647");
        try { v9.filter(); } catch (e) {}
        return a2;
    }
    f4(F0, F0, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0();
const t11 = v12.constructor;
new t11();
new F0();
