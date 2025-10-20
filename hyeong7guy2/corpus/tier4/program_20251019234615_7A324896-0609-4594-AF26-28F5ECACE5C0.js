function f0(a1, a2) {
    const v4 = new SharedArrayBuffer();
    const v6 = new DataView(v4);
    let v7;
    try { v7 = v6.getInt32(); } catch (e) {}
    Array++;
    f0 >> v7;
    return SharedArrayBuffer;
}
f0(f0(), f0);
%OptimizeMaglevOnNextCall(f0);
f0();
