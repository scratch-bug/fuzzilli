function f1(a2, a3) {
    a3 | a3;
    arguments[1] = a3;
    typeof a3;
    try { arguments["o"](); } catch (e) {}
    return arguments;
}
f1(Math, -13);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
