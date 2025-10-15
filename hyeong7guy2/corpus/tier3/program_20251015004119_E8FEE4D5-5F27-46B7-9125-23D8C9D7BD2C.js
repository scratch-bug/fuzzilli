function f0(a1, a2) {
    a1 / a1;
    const v4 = a1.cos();
    v4 << v4;
    try {
        f0();
    } catch(e7) {
    }
    arguments[0];
    return a2;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0(); } catch (e) {}
