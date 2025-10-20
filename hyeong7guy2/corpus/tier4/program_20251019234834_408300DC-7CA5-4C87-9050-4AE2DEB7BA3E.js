function* f1(a2, a3) {
    yield* "valueOf";
    function f5(a6) {
        return f5;
    }
    function F7(a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i12 = 0, i13 = 10; i13; i13--) {
    }
    F7[Symbol.toPrimitive] = f5;
    return f5;
}
f1(f1, "valueOf").toArray();
%OptimizeMaglevOnNextCall(f1);
f1();
