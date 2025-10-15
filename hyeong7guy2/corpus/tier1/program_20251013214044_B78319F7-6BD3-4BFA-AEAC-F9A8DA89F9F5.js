function f0(a1, a2, a3) {
    return a1;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
