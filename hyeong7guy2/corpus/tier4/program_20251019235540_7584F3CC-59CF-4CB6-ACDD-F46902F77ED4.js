function* f1(a2, a3) {
    a3--;
    yield* "valueOf";
    return f1;
}
const v5 = f1();
v5.toArray();
%OptimizeMaglevOnNextCall(f1);
f1(v5, "valueOf");
