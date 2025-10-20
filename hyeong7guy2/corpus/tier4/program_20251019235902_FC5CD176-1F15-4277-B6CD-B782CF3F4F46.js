async function* f1(a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        yield* 3;
    }
    return a3;
}
f1(f1, f1);
f1();
%OptimizeMaglevOnNextCall(f1);
f1(3, f1);
