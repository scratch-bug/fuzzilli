function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        return ([this]).at(a6);
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0(F0, F0);
new F0(F0, v11);
new F0();
