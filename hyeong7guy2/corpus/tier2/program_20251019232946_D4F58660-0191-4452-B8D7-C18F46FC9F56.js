function f0(a1, a2, a3) {
    const v5 = new BigUint64Array(a3, a3, a1);
    for (const v6 in v5) {
    }
    return a2;
}
f0();
const v9 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v9 });
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
