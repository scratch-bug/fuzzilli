class C2 extends WeakMap {
}
function* f3(a4, a5) {
    yield* "valueOf";
    yield* C2;
    return a4;
}
const v6 = f3(WeakMap, "valueOf");
try { v6.toArray(); } catch (e) {}
%OptimizeMaglevOnNextCall(f3);
f3(WeakMap, f3);
