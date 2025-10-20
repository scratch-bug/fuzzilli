function f0(a1, a2, a3) {
    let v5 = -229684853n;
    v5++;
    const v8 = BigInt.asIntN(15, v5);
    BigInt.d = f0;
    return v8;
}
f0(f0, f0, f0);
const v11 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v11 });
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
