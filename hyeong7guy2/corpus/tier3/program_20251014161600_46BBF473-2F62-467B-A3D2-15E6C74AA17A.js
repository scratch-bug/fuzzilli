function f1(a2, a3) {
    return f1;
}
const v4 = f1();
function* f6(a7, a8) {
    try { a8.slice(268435456n, v4); } catch (e) {}
    yield* "valueOf";
    return a7;
}
f6(f1, 268435456n).toArray();
%OptimizeMaglevOnNextCall(f6);
f6();
