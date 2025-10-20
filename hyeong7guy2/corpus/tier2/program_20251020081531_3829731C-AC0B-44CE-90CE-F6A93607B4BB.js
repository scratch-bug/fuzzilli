let v0 = 10;
v0++;
function f3(a4, a5, a6) {
    const v9 = BigInt.asUintN(v0, -229684853n);
    v9 / v9;
    const v11 = -229684853n - v9;
    try {
        f3(-229684853n, 2071780254, v11);
    } catch(e13) {
    }
    return a5;
}
f3();
const v16 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v16 });
%OptimizeFunctionOnNextCall(f3);
f3(v0, v0, 2071780254);
