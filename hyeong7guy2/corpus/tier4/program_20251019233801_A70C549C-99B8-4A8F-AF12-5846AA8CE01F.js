function f0(a1) {
    return f0;
}
const v2 = class extends f0 {
}
function f3() {
    for (let v4 = 0; v4 < 5; v4++) {
        typeof v2;
        eval();
    }
    return f3;
}
%PrepareFunctionForOptimization(f3);
%OptimizeMaglevOnNextCall(f3);
f3();
