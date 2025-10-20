function f0(a1, a2, a3) {
    const v7 = BigInt.asUintN(15, -229684853n);
    const v8 = v7 % v7;
    try {
        f0(-229684853n, 15, v8);
    } catch(e10) {
    }
    return a2;
}
f0(f0, f0, f0);
const v13 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v13 });
%OptimizeFunctionOnNextCall(f0);
f0();
