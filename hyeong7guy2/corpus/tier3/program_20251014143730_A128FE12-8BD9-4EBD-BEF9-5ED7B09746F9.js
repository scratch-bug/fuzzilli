function f1(a2, a3, a4) {
    "p" + -1024;
    return a4;
}
f1(f1, -1024, f1);
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
