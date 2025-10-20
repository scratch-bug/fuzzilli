function* f1(a2, a3) {
    yield* "valueOf";
    for (const v5 in "xV") {
        const v10 = {
            [f1](a7, a8, a9) {
            },
        };
    }
    return "valueOf";
}
f1().toArray();
%OptimizeMaglevOnNextCall(f1);
f1();
