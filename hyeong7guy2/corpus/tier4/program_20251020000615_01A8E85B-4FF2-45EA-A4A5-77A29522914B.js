function f0(a1, a2) {
    const v4 = new Set(a2);
    try { v4.forEach(f0, v4); } catch (e) {}
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
