function f1(a2, a3) {
    const v4 = new Int32Array(a2, a2, a2);
    const v5 = v4.entries();
    v5.next(a3, a3, v5, v5, v5);
    return a3;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
