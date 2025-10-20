const v1 = class extends Float64Array {
}
const v2 = [16,12241,-1249097985];
v2.f = v1;
function f3() {
    class C5 {
        constructor(a7, a8) {
            a8.reduceRight();
        }
    }
    let v10;
    try { v10 = new C5(487231775, v2); } catch (e) {}
    return v10;
}
f3();
%PrepareFunctionForOptimization(f3);
%OptimizeFunctionOnNextCall(f3);
f3();
