function f2(a3, a4, a5) {
    let v6 = -229684853n;
    v6--;
    const v11 = v6 % BigInt.asUintN(10, -v6);
    try {
        f2(v6, 2071780254, v11);
    } catch(e13) {
    }
    return 10;
}
f2(2071780254, 2071780254, f2);
const v16 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v16 });
%OptimizeFunctionOnNextCall(f2);
f2();
