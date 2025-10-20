function f2(a3, a4) {
    const v5 = a4 | a4;
    arguments[1] = Array;
    typeof a4;
    try { arguments["o"](); } catch (e) {}
    return v5;
}
f2(Math, -13);
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
