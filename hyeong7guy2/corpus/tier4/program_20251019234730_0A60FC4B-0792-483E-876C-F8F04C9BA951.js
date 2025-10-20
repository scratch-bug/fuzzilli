function* f0(a1, a2, a3) {
    yield -84330272;
    return a3;
}
f0();
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
