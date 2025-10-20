function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        return ([a2]).reduce(a6);
    }
    f4(a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0(F0, F0);
new F0(v11, F0);
new F0();
