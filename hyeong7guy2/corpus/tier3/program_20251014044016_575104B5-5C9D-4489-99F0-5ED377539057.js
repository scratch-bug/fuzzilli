async function* f0(a1, a2) {
    return a2;
}
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
