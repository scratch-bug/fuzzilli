function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f14(a15) {
                const v18 = new Uint32Array(24084);
                function f19(a20) {
                    v18[2];
                    eval();
                    return f19;
                }
                f19(Uint32Array);
                f19(this);
                return f19;
            }
            F10.constructor = f14;
            const t22 = F10.constructor;
            return t22();
        }
        f7(a6, this);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(f7, v3);
    }
}
new v3();
