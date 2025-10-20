function f0() {
    return f0;
}
const v1 = class extends f0 {
}
function f2(a3, a4) {
    2283 == v1.length;
    return f2;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
