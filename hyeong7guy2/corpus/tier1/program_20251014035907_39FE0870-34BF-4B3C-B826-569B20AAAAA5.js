function f0(a1) {
    Object.f = a1;
    return a1;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
