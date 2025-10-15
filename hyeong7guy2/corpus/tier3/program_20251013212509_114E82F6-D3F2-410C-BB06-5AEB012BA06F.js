function f0() {
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
