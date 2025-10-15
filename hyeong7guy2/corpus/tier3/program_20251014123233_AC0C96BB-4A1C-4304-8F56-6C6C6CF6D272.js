function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        Object.setPrototypeOf(Object, this).f;
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0(F0, F0);
new F0(v12, v12);
new F0();
