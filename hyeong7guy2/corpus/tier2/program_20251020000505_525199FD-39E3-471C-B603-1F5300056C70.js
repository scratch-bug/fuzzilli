function f2(a3, a4, a5) {
    let v6 = -229684853n;
    const v10 = v6 % BigInt.asUintN(10, v6++);
    try {
        f2(v6, 2071780254, v10);
    } catch(e12) {
    }
    return 2071780254;
}
f2();
const v15 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v15 });
%OptimizeFunctionOnNextCall(f2);
f2(Int16Array, 2071780254, 2071780254);
