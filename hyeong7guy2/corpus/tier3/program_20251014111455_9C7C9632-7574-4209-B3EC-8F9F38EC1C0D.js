function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        ([a2]).at(a6);
        return F0;
    }
    f4(a2, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0();
new F0(v11, v11);
new F0();
