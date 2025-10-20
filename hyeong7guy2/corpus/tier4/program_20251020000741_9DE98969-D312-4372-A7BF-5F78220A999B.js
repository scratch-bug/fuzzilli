function f0(a1, a2) {
    const v3 = a2 | a2;
    v3 * v3;
    arguments[1] = arguments;
    return arguments;
}
f0();
f0.call();
%OptimizeMaglevOnNextCall(f0);
f0();
