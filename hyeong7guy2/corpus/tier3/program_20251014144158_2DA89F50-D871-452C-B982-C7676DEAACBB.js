function f1(a2, a3) {
    a3--;
    a3 | a3;
    arguments[1] = arguments;
    try { arguments["o"](); } catch (e) {}
    return a3;
}
f1(Math, -13);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(Math, f1);
