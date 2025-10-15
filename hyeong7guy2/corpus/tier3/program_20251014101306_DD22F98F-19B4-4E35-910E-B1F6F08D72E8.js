function* f0(a1, a2) {
    try { new Symbol(a2); } catch (e) {}
    return f0;
}
f0().toArray();
%OptimizeMaglevOnNextCall(f0);
f0();
