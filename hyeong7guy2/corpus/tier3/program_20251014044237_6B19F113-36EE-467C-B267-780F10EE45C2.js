function f0(a1) {
    if (!a1) {
        const v2 = {};
    }
    return f0;
}
f0(f0);
f0(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
