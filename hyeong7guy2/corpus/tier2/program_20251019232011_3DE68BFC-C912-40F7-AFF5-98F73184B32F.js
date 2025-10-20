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
            function F29(a31) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v32 = class extends F29 {
                constructor(a34, a35) {
                    function F36() {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v38 = class extends F36 {
                    }
                    try { v38(v32); } catch (e) {}
                }
            }
            new v28(this, v0, F29, a9);
            return this;
        }
        f8(a6, F1);
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8();
    }
}
new v4();
