function f1() {
    const v2 = new Date();
    const v3 = v2.getUTCDay;
    v3.bind(v2, f1, Date, v3);
    return v2;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
