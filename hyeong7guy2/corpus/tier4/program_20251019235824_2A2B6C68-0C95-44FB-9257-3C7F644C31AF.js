function f2(a3, a4, a5) {
    const v9 = -229684853n % BigInt.asUintN(10, -229684853n);
    try {
        f2(-229684853n, 2071780254, v9);
    } catch(e11) {
    }
    return a3;
}
const v12 = f2();
%OptimizeFunctionOnNextCall(f2);
f2(v12, 2071780254, v12);
