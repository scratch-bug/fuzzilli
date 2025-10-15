function f1() {
    let v2 = 0;
    do {
        const v3 = Symbol.dispose;
        const v5 = {
            [v3]() {
            },
        };
        using v6 = v5;
        v2++;
    } while (v2 < 4)
    return v2;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
