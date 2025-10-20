function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = -Infinity;
        v8 - v8;
        return this;
    }
    f4(a3, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0();
const v12 = v11.constructor;
new v12(v11, v11);
new F0(v12, F0);
