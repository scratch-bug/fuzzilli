function f1() {
    const v2 = new Date(Date);
    return v2.getDay();
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
