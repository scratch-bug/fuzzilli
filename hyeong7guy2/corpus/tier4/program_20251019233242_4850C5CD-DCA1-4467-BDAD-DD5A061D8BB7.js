function* f1(a2, a3) {
    yield* "valueOf";
    Temporal.PlainYearMonth;
    return f1;
}
const v6 = f1(f1, f1);
const v7 = v6.toArray("valueOf", v6, "valueOf", v6);
%OptimizeMaglevOnNextCall(f1);
f1(f1, v7);
