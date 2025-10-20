function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            return a9 | f7;
        }
        f7(F0, F0);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(a6, F0);
    }
}
new v3(v3, F0);
