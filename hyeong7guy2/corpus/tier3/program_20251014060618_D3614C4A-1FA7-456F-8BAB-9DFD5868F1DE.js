function f1(a2, a3) {
    const v5 = typeof a3;
    try { arguments["o"](); } catch (e) {}
    return v5;
}
f1(Math, 577928152);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(Math, 577928152);
