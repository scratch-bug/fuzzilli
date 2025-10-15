function f0(a1, a2) {
    class C3 {
    }
    const v4 = a1.cos();
    try {
        f0(v4, f0);
    } catch(e6) {
    }
    const v7 = a2 | a2;
    arguments[1] = arguments;
    return v7;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0(Math, f0); } catch (e) {}
