class C2 extends WeakMap {
}
function* f3(a4, a5) {
    yield* "valueOf";
    yield* C2;
    return WeakMap;
}
f3();
f3();
%OptimizeMaglevOnNextCall(f3);
f3();
