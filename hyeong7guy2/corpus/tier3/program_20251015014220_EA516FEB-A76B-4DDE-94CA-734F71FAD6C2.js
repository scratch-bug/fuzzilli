function f0(a1, a2) {
    const v5 = new Float64Array(15);
    v5[3];
    const v7 = a1.cos();
    v7 & v7;
    try {
        f0(v7, f0);
    } catch(e10) {
    }
    return arguments[0];
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0(); } catch (e) {}
