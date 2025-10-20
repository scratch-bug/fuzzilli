function f1(a2, a3) {
    const v4 = a2 ?? a2;
    const v5 = a3 ?? a3;
    const v6 = new Int32Array(a3);
    const v7 = v6.entries();
    let v8;
    try { v8 = v7.take(); } catch (e) {}
    const v9 = v7.next(v8, f1, v4);
    try { v9(v5, v9, v6); } catch (e) {}
    return v8;
}
const v11 = f1(f1, Int32Array);
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1(v11, f1);
