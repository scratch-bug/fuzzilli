function f0() {
    const v4 = (-9007199254740990n * -4294967297n) ^ -9007199254740990n;
    try { v4(); } catch (e) {}
    return -4294967297n;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
