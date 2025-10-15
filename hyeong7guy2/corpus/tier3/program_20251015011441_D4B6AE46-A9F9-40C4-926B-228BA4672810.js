function f1() {
    const v2 = new Date(f1);
    return v2.getSeconds();
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
