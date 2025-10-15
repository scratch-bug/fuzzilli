function f0(a1, a2) {
    return Math.imul();
}
const v5 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(v5, v5);
