function f0(a1, a2) {
    a1.LN2 = a1;
    a2 ^ a2;
    arguments[1] = arguments;
    return a2;
}
f0(Math);
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(Math);
