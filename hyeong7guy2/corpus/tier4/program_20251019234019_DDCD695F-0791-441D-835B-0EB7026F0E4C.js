let v0 = -1814329209;
function f1(a2, a3) {
    ++v0;
    try { arguments["o"](); } catch (e) {}
    return "o";
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
