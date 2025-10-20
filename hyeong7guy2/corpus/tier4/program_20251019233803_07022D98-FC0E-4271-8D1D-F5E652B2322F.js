function* f1(a2, a3) {
    yield* "valueOf";
    class C5 extends Int32Array {
    }
    const v6 = new C5();
    v6[4294967295];
    return Int32Array;
}
const v8 = f1();
v8.toArray("valueOf", v8);
%OptimizeMaglevOnNextCall(f1);
f1(v8, v8);
