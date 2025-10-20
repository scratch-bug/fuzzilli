function f0(a1, a2, a3) {
    let v5 = -229684853n;
    v5++;
    return BigInt.asUintN(5, v5);
}
const v9 = f0();
f0(v9, f0, v9);
const v12 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v12 });
%OptimizeFunctionOnNextCall(f0);
f0();
