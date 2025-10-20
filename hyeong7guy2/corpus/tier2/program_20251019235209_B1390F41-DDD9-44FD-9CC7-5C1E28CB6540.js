function f0(a1, a2, a3) {
    for (let i5 = 0; i5 <= 25000; ++i5) {
        const v12 = i5 === 24999;
        const v13 = { idx: v12 };
        const v18 = [1.1,-751.6156519606214,3.3,4.4,-751.6156519606214];
        let v19 = v13.idx;
        for (let v20 = 0; v20 < 10; v20++) {
            v19 = v19 + 1;
            ++v20;
        }
        v18[v19] = 6.6;
    }
    return a1;
}
const v25 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(f0, v25, f0);
