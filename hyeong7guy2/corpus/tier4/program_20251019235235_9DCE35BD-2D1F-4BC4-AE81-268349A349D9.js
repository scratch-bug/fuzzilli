function f1() {
    const v2 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        a6[15] = 1.1;
        for (let i12 = 0; i12 < 30000; i12++) {
            a6[0];
            a6 = [1];
        }
        a8[8] = Object;
    }
    const v21 = new F4(Object, Uint32Array, Uint32Array);
    new F4(v2, v2, v2);
    return v21;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
