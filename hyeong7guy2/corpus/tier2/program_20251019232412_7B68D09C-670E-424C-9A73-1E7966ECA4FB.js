function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            a9 | a9;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                /la+b|cl?/si;
            }
            const v16 = new F11();
            return v16;
        }
        f7(f7, a6);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(F0, a6);
    }
}
new v3();
