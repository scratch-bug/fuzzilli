function* f1(a2, a3) {
    yield* "valueOf";
    using v5 = {};
    return v5;
}
const v6 = f1();
try { v6.toArray(); } catch (e) {}
%OptimizeMaglevOnNextCall(f1);
f1();
