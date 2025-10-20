function f1(a2, a3, a4) {
    return BigInt.asUintN(0, -229684853n);
}
f1(f1, 0, f1(f1, 0, f1));
%OptimizeFunctionOnNextCall(f1);
f1();
