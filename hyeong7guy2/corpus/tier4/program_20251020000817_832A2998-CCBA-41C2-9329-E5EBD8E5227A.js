function f0() {
    ([0,0,0,0]).slice(0, 0);
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
