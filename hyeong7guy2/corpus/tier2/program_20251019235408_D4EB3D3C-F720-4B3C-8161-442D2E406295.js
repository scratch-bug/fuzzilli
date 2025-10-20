function f0(a1, a2) {
    for (let i4 = 0;
        (() => {
            const v7 = Math.ceil(i4);
            const v8 = { f: v7 };
            return i4 < 20000;
        })();
        i4++) {
    }
    a2 | a2;
    arguments.length = arguments;
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
