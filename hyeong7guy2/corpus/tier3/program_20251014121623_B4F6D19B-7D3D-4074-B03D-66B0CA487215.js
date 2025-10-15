function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v11 = 4294967296 >>> 0;
        Uint8Array[0] += v11 / v11;
        return this;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v14 = new F1();
const v15 = new F1();
new F1(v15, v14);
