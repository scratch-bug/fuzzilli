function f1(a2, a3) {
    -13 < a3;
    return a3;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
