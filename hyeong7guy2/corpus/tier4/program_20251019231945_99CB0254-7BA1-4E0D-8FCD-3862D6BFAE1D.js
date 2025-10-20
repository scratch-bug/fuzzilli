function f0(a1, a2, a3) {
    for (let i5 = 0; i5 <= 0; ++i5) {
    }
    return a1;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
