function f1(a2, a3) {
    a3 | a3;
    -65535n & -65535n;
    let v8;
    try { v8 = arguments["o"](); } catch (e) {}
    return v8;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
