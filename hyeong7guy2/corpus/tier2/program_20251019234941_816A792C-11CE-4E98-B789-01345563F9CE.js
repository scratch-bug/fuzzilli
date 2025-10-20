function f2(a3, a4, a5) {
    const v8 = BigInt.asUintN(1, -229684853n);
    try {
        f2(-229684853n, 2071780254, v8);
    } catch(e10) {
    }
    return a3;
}
const v11 = f2();
const v13 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v13 });
%OptimizeFunctionOnNextCall(f2);
f2(v13, v11, 1);
