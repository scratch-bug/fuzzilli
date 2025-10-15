async function* f0(a1, a2, a3, a4) {
    await using v7 = {};
    await Symbol;
    yield v7;
    return a1;
}
f0();
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
