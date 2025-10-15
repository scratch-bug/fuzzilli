function* f1(a2, a3) {
    yield* "valueOf";
    const t2 = "xV";
    t2.d = -5.0;
    return a3;
}
f1("valueOf", "valueOf").toArray();
%OptimizeMaglevOnNextCall(f1);
f1();
