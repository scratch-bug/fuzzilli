class C3 extends WeakMap {
}
function* f4(a5, a6) {
    yield* "valueOf";
    yield* C3;
    yield* 375.62178942127207;
    return C3;
}
const v7 = f4();
try { v7.toArray(); } catch (e) {}
%OptimizeMaglevOnNextCall(f4);
f4();
