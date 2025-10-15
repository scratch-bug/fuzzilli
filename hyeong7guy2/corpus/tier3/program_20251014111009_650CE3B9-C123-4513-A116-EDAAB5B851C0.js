function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        return a5.length;
    }
    f4(this);
    %OptimizeFunctionOnNextCall(f4);
    f4(2);
}
const v12 = new F0(F0, F0);
new F0(v12, v12);
