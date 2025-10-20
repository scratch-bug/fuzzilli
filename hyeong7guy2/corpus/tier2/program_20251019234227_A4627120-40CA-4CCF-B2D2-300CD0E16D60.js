function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        Object.setPrototypeOf(Object, this).entries(this);
        return a5;
    }
    f4(this, this, f4);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v13 = new F0();
const v14 = v13.constructor;
new v14(v14, v14, v14, F0, F0);
