function f1(a2, a3) {
    a2.cos(a3);
    const v5 = a3++;
    v5 | v5;
    let v9;
    try { v9 = arguments["o"](); } catch (e) {}
    return v9;
}
f1(Math, 577928152);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(Math);
