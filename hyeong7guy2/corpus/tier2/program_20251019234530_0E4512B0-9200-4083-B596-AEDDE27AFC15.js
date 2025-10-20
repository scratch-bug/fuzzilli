function f0(a1, a2, a3) {
    let v5 = -229684853n;
    const v6 = v5++;
    const v8 = BigInt.asUintN(15, v5);
    try {
        f0(v5, 15, v6);
    } catch(e10) {
    }
    return v8;
}
f0(f0, f0, f0);
const v13 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v13 });
%OptimizeFunctionOnNextCall(f0);
f0();
