function f1(a2) {
    const v3 = ~a2;
    const v4 = a2 & a2;
    v4 << v4;
    try {
    const t0 = null;
    t0(-4294967297, v3);
    } catch (e) {}
    return f1;
}
f1();
f1(f1);
%OptimizeMaglevOnNextCall(f1);
f1(f1);
