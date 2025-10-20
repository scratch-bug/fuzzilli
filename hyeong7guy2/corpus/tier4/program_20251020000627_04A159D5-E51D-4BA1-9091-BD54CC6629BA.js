function f0(a1, a2, a3) {
    const v7 = BigInt.asIntN(15, -1024n);
    return v7 < v7;
}
const v9 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(v9, f0, f0);
