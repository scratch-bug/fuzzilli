function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    const v5 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        const v14 = new a11(102);
        v14[31] = v14;
    }
    const v15 = new F7(Object, Uint32Array, Uint32Array);
    const t11 = v15.constructor;
    new t11(v5, v15, F0);
    return f4;
}
f4();
%PrepareFunctionForOptimization(f4);
%OptimizeFunctionOnNextCall(f4);
f4();
