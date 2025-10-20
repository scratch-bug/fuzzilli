const v0 = [0.0,64976.141103226226,-425825.53228441754];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            parseInt();
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function F17(a19) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v20 = class extends F17 {
                    toString(a22, a23, a24, a25) {
                        super.a = v0;
                    }
                    constructor(a27, a28) {
                        return v20;
                    }
                }
            }
            const v29 = new F13();
            const t24 = v29.constructor;
            new t24();
            return a9;
        }
        f8(v0, F1);
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8();
    }
}
new v4(F1, v0);
