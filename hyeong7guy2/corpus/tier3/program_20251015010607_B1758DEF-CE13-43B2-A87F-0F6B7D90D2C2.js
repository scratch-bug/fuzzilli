function f2(a3, a4) {
    a4 | a4;
    (15).toLocaleString(...arguments, -13);
    try { arguments["o"](); } catch (e) {}
    return -13;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
