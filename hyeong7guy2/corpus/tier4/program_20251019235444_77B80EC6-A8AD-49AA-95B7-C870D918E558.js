function f0(a1, a2) {
    arguments.b = arguments;
    return f0;
}
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(f0, f0);
