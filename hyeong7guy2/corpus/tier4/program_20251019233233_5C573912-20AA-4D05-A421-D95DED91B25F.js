function f0(a1, a2, a3) {
    let v6 = BigInt(15);
    return v6++;
}
f0(f0, f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
