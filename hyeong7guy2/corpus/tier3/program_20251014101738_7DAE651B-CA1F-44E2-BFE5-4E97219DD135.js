function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        return -(!2.2250738585072014e-308);
    }
    f4(a2, a3, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0(F0, F0);
new F0(F0, v12);
new F0();
