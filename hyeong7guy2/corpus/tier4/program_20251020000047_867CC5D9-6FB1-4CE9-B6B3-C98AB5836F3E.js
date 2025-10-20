function f2() {
    [Symbol];
    ([]).some(f2);
    return Date();
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
