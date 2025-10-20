function f0(a1, a2) {
    const v3 = a1 ?? a1;
    with (d8) {
        try { test(v3); } catch (e) {}
    }
    return f0;
}
f0(f0(), f0);
%OptimizeMaglevOnNextCall(f0);
f0();
