function f0(a1, a2, a3) {
    for (let i5 = 0; i5 < 25000; ++i5) {
        const v12 = i5 === 24999;
        const v13 = { idx: v12 };
        const v14 = [v13,v13,v13,v13];
        let v15 = v13.idx;
        for (let v16 = 0; v16 < 5; v16++) {
            v15 = v15 << 1;
        }
        v14[v15] = 6.6;
    }
    return a1;
}
const v20 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(v20, f0, f0);
