function f0(a1, a2) {
    const v4 = arguments[1];
    v4 >> v4;
    ("o").slice(a2, v4).toLocaleUpperCase();
    try { arguments["o"](); } catch (e) {}
    return f0;
}
const v10 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(v10, f0);
