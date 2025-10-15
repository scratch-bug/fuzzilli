function f1(a2, a3, a4) {
    "p" + 473;
    return a4;
}
f1(473, 473, 473);
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
