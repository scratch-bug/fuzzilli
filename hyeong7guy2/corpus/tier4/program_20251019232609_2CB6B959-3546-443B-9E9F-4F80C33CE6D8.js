function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = Promise.all;
        try { v9(a2, a7, a3, this, a5); } catch (e) {}
        return this;
    }
    f4.call();
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0(F0, F0);
const v13 = v12.constructor;
new v13();
new v13();
