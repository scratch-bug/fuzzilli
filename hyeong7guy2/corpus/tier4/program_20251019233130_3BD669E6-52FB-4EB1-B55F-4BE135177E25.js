function f0(a1, a2) {
    a1.cos();
    try {
        f0();
    } catch(e6) {
    }
    arguments[0].min(15, 15);
    return 15;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0(Math, Math); } catch (e) {}
