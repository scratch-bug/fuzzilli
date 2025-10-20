function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v12 = new Float64Array(536870912);
            function f13(a14) {
                v12[599];
                const v17 = 3 - 3;
                const v19 = ("m")[0];
                function F20(a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                    function F24(a26) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    F24(v17);
                    -v19;
                }
                return a5;
            }
            f13();
            return f13();
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
    }
}
new v3(v3, v3);
