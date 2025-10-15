function f0(a1, a2, a3) {
    -9007199254740992 != -9007199254740992;
    const v7 = Math.round(-9007199254740992);
    v7 & v7;
    return f0;
}
f0();
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
