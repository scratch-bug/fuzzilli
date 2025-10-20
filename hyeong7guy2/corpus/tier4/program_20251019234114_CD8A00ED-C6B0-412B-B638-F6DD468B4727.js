const v0 = [-2.0,311.20884723584527,1000.0,-1.186552188623687e+307];
function f1(a2, a3) {
    v0.pop();
    return v0.pop();
}
f1(v0, f1);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
