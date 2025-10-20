function f0(a1, a2) {
    const v3 = a2++;
    const v4 = v3 >>> v3;
    v4 - v4;
    return f0;
}
function f6(a7, a8) {
    arguments.o = f0;
    const v11 = arguments["o"]();
    new v11(v11);
    return a8;
}
f6();
%PrepareFunctionForOptimization(f6);
%OptimizeMaglevOnNextCall(f6);
f6();
