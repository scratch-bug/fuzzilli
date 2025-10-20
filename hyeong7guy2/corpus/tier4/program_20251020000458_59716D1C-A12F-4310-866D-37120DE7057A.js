function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = class {
    }
    async function* f6(a7, a8, a9) {
        arguments[v5];
        return F0;
    }
    f6();
    %PrepareFunctionForOptimization(f6);
    %OptimizeMaglevOnNextCall(f6);
    f6();
}
new F0();
