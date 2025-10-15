function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        Promise.resolve(Promise);
        return f4;
    }
    f4.call();
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0(F0, F0);
const v12 = v11.constructor;
const v13 = new v12(v11, v12, v12, v12, v12);
new F0(v11, v13);
