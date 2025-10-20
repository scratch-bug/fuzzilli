function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        return Reflect.apply();
    }
    try { f4(F0, F0, F0); } catch (e) {}
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0();
const v12 = new F0();
const t10 = v12.constructor;
new t10(v11, v11);
