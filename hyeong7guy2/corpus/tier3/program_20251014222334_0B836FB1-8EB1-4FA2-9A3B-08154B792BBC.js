let v0 = /[Mabc+?]/vy;
function f1(a2, a3) {
    const v4 = --v0;
    const v5 = [v4,v4];
    v5[1] = v5;
    return a3;
}
const v6 = f1(v0, v0);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(v6, v0);
