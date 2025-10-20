const v2 = new Int32Array(10);
class C3 {
}
const v4 = class extends C3 {
}
function f5() {
    const v6 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        a11[8] = a11;
    }
    const v13 = new F7(v6, v6, v6);
    const t12 = v13.constructor;
    new t12(v2, v2, v2);
    const t14 = v13.constructor;
    new t14(v6, v4, f5);
    return v13;
}
f5();
%PrepareFunctionForOptimization(f5);
%OptimizeFunctionOnNextCall(f5);
f5();
