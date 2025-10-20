function f0(a1, a2, a3) {
    const v7 = BigInt.asUintN(15, -229684853n);
    let v8 = v7 - v7;
    v8--;
    return f0;
}
const v10 = f0(f0, f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(f0, f0, v10);
