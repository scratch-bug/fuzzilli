function f0() {
    const v2 = typeof null;
    v2 === "function";
    return `symbol${v2}268435441`;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
