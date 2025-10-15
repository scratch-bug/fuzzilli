function f0(a1) {
    return a1 ?? (a1 ?? a1);
}
f0(f0(f0));
%OptimizeMaglevOnNextCall(f0);
f0(f0);
