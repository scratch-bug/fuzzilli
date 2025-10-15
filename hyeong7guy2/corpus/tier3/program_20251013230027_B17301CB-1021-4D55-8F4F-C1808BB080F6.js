function f0() {
    return f0;
}
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
%OptimizeMaglevOnNextCall(f0);
