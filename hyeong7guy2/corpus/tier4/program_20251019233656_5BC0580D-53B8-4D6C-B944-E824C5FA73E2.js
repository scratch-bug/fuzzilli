function f0(a1, a2) {
    a1.name.concat(a2);
    return f0;
}
f0(f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(f0);
