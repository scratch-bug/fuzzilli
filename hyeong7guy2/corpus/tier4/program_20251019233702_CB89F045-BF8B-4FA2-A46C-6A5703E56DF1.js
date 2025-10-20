function f1(a2, a3) {
    a3 | a3;
    -65535n * -65535n;
    try { arguments["o"](); } catch (e) {}
    return a3;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(-65535n, -65535n);
