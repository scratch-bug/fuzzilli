function f0(a1, a2) {
    try { new DataView(); } catch (e) {}
    let v6;
    try { v6 = SharedArrayBuffer.getInt32(); } catch (e) {}
    f0 >> v6;
    return f0;
}
f0(f0, f0);
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
