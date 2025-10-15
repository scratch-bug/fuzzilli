function f0() {
    const v3 = Date.prototype.getMonth;
    try { v3.call(); } catch (e) {}
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
