function f1(a2, a3) {
    try { a2.apply(WeakMap, f1, f1, WeakMap); } catch (e) {}
    return a3;
}
f1(WeakMap);
f1(Math);
%OptimizeMaglevOnNextCall(f1);
f1(WeakMap, Math);
