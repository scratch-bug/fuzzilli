function f0(a1, a2) {
    a1.cos();
    try {
        f0();
    } catch(e5) {
        e5.d = e5;
    }
    const v6 = a2 | a2;
    arguments[1] = arguments;
    return v6;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0(); } catch (e) {}
