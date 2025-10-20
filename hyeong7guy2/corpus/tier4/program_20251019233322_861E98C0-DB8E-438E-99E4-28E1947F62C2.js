function f1() {
    ([]).some(f1);
    return Date();
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
