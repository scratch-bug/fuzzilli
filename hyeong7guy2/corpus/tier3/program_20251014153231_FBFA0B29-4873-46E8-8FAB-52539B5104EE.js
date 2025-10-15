const v0 = /[Mabc+?]/vy;
function f1(a2, a3) {
    let v4 = delete v0[1655];
    const v5 = --v4;
    const v6 = v5 - v5;
    [v5];
    return v6;
}
const v8 = f1(f1, f1);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(f1, v8);
