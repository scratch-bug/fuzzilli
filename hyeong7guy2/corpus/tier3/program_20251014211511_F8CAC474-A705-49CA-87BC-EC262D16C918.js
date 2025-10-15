function f0() {
    return f0;
}
const v1 = class extends f0 {
}
function f2(a3, a4) {
    a4 | a4;
    function f6(a7, a8) {
        a7.keys();
        return a7;
    }
    let v10;
    try { v10 = new f6(v1); } catch (e) {}
    v10 ?? v10;
    return f2;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
