function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        Math.clz32();
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0(F0, F0);
const v12 = new F0(v11, F0);
new F0(v11, v12);
