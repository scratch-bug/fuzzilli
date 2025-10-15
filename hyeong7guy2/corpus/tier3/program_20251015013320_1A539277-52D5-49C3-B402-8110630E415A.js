function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        Array(262144, f4);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0(F0, F0);
const v13 = new F0(F0, v12);
new F0(v13, v13);
