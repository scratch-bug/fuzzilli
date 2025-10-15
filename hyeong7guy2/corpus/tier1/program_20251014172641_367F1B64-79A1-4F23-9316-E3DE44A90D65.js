function f0(a1, a2) {
    Object.defineProperty(arguments, "o", { configurable: true, value: a2 });
    return f0;
}
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
