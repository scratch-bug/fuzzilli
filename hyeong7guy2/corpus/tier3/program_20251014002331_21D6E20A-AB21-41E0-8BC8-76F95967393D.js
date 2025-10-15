function f0(a1, a2) {
    for (let v3 = 0; v3 < 5; v3++) {
    }
    return a2;
}
f0(f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(f0, f0);
