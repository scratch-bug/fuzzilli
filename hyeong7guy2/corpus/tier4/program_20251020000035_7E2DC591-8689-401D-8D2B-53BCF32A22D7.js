let v0 = -1814329209;
function f1(a2, a3) {
    c = f1;
    ++v0;
    try { arguments["o"](); } catch (e) {}
    return v0;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(v0, v0);
