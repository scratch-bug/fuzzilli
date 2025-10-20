function f1() {
    const v2 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        gc();
        v2.e = a7;
        a8[8] = Object;
    }
    new F4(Object, Uint32Array, Uint32Array);
    new F4(v2, v2, v2);
    return Object;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
