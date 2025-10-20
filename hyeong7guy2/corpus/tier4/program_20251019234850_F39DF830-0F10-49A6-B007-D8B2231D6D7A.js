function f0(a1, a2) {
    for (let i4 = 0;
        (() => {
            try { Math.log10(i4); } catch (e) {}
            Math.ceil(i4);
            return a2;
        })();
        ) {
    }
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
gc();
const v14 = class extends Date {
}
try { v14(); } catch (e) {}
%OptimizeMaglevOnNextCall(f0);
f0();
