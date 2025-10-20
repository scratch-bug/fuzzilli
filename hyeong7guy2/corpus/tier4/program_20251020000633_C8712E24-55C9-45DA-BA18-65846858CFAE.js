async function* f1(a2, a3, a4) {
    yield* "object";
    yield* [await a3];
    return f1;
}
f1("object", "object", f1);
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
