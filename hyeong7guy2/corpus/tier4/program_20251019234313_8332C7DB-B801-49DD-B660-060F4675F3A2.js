function f0(a1, a2) {
    const v4 = new SharedArrayBuffer();
    const v6 = new DataView(v4);
    const v7 = v6.setInt32;
    try { v7(); } catch (e) {}
    return v4;
}
f0.apply(f0, f0, f0);
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
