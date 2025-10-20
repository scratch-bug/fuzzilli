const v0 = [-387908.77759840584,-2.220446049250313e-16,-0.0,0.7671244934206317,1.0301830155922962e+308,4.0];
class C1 {
}
const v2 = class extends C1 {
}
function f3() {
    const v4 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const v11 = this.constructor;
        try { new v11(v0, v4, a7); } catch (e) {}
        a7.keys(C1, v4, C1, v2);
        a9[8] = a9;
    }
    const v14 = new F5(v4, v4, v4);
    const t15 = v14.constructor;
    new t15(v4, v2, f3);
    return v0;
}
f3();
%PrepareFunctionForOptimization(f3);
%OptimizeFunctionOnNextCall(f3);
f3();
