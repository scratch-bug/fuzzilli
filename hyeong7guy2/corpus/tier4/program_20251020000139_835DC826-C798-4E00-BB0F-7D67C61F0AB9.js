function f1(a2, a3, a4) {
    try { BigInt.asIntN(15, -2); } catch (e) {}
    return BigInt;
}
f1(f1, f1, -2);
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
