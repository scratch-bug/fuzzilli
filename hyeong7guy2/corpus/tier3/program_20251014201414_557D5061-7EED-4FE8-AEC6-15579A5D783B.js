function f0(a1) {
    const v3 = [1];
    try { v3.filter(a1); } catch (e) {}
    return a1;
}
f0(f0);
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
