class C0 {
}
const v1 = class extends C0 {
}
function f2() {
    const v3 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        a6.keys();
        a7.e = v1;
        a8[8] = a8;
    }
    const v11 = new F4(v3, v3, v3);
    const t13 = v11.constructor;
    new t13(v3, v1, f2);
    return f2;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
