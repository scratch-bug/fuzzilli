function f1(a2, a3) {
    const v4 = new Int32Array();
    const v5 = v4.entries();
    const v6 = v5.constructor;
    let v7;
    try { v7 = v6.apply(v6, v5); } catch (e) {}
    return v7;
}
f1(f1, Int32Array);
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1(Int32Array, f1);
