function f0(a1, a2) {
    a1.cos(a2, a1, a2);
    try {
        class C4 {
        }
        f0(C4);
    } catch(e6) {
    }
    return a1;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
f0(Math);
