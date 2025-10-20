function f0() {
    const v3 = Date.prototype.getMonth;
    let v4;
    try { v4 = v3.call(v3); } catch (e) {}
    return v4;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
