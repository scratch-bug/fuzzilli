const v0 = [0.0,64976.141103226226,-425825.53228441754];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function F15(a17) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v18 = class extends F15 {
                    toString(a20, a21, a22, a23) {
                        super.a = v0;
                    }
                    constructor(a25, a26) {
                        return v18;
                    }
                }
            }
            const v27 = new F11();
            const v28 = v27.constructor;
            new v28(F1, f8, v28);
            return this;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8();
    }
}
new v4(v0, v0);
