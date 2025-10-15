function f0() {
    const v2 = Date.prototype;
    const v3 = v2.getMonth;
    try { v3.call(v2); } catch (e) {}
    return Date;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
