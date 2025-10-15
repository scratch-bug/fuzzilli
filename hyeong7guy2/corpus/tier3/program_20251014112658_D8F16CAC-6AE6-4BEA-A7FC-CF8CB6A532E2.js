function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        -9007199254740992n > -9007199254740992n;
        return a7;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0(F0, F0);
const t10 = v11.constructor;
new t10();
new F0();
