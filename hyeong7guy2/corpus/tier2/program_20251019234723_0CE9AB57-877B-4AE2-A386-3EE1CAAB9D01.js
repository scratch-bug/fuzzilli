function f0(a1, a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v6 = v4 >= 24999;
        const v8 = ({ idx: v6 }).idx;
        for (let v9 = 0; v9 < 5; v9++) {
            v8 + 1;
        }
        ++v4;
    }
    return a3;
}
f0(f0, f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
