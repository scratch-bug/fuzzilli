function f0(a1, a2) {
    const v3 = a1.log2;
    v3(v3);
    try {
        f0();
    } catch(e6) {
    }
    return f0;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0(); } catch (e) {}
