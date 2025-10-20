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
                }
            }
            const v24 = new F11();
            const v25 = v24.constructor;
            function F26(a28) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v29 = class extends F26 {
                constructor(a31, a32) {
                    function F33() {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v35 = class extends F33 {
                    }
                    v35(v29);
                }
            }
            const v37 = new v25();
            return v37;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(v0, v0);
    }
}
new v4(v0, F1);
