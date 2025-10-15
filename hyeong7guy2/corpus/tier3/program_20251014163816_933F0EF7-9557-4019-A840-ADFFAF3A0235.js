function f0(a1) {
    for (const v3 in arguments) {
    }
    return f0;
}
f0(f0(f0));
%OptimizeFunctionOnNextCall(f0);
f0();
