function f0(a1, a2) {
    a2 | a2;
    for (const v5 of arguments) {
    }
    arguments[1] = arguments;
    return a2;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
