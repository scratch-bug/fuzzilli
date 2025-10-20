function f1(a2, a3, a4) {
    let v5 = -229684853n;
    v5++;
    for (let v7 = 0; v7 < 5; v7++) {
    }
    return BigInt.asIntN(1, v5);
}
f1(1, 1, 1);
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
