function f1() {
    const v2 = new Date();
    v2.getDay();
    return Date;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
