const v2 = new Float64Array(10);
const v5 = new Int32Array(10);
function f6() {
    const v7 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F8(a10, a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        a10[2] = a10;
    }
    const v14 = new F8(v7);
    const t9 = v14.constructor;
    new t9(v5);
    const t11 = v14.constructor;
    const v18 = new t11(v7);
    const t13 = v18.constructor;
    const v20 = new t13(v2);
    return v20;
}
f6();
%PrepareFunctionForOptimization(f6);
%OptimizeFunctionOnNextCall(f6);
f6();
