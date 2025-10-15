function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        a7.arguments;
        return a2;
    }
    f4(F0, a2, f4);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v11 = new F0();
const v12 = v11.constructor;
new v12(v11, v12);
