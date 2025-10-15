const v0 = /[Mabc+?]/vy;
function f1(a2, a3) {
    let v4 = delete v0[1655];
    [--v4];
    return v0;
}
f1(f1, f1);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(f1, f1);
