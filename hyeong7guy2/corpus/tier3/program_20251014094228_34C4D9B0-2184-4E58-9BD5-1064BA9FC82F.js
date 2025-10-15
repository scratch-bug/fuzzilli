function* f1(a2, a3, a4) {
    yield a2;
    yield* 9007199254740990n;
    return a3;
}
f1(9007199254740990n, 9007199254740990n, f1);
const v7 = f1();
%OptimizeFunctionOnNextCall(f1);
f1(v7, f1, 9007199254740990n);
