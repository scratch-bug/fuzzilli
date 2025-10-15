function f0(a1, a2) {
    for (const v4 in "boolean") {
    }
    const v5 = a1.cos();
    try {
        f0("boolean", a1);
    } catch(e7) {
    }
    a2 | a2;
    arguments[1] = a2;
    return v5;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0.apply(); } catch (e) {}
