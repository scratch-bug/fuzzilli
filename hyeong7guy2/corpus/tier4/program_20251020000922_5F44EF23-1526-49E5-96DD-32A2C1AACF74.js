function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            for (let i13 = 0, i14 = 10; i14; i14--) {
            }
            let v20 = 536870912;
            const v21 = new Float64Array(v20);
            function f22(a23) {
                function F24(a26, a27) {
                    if (!new.target) { throw 'must be called with new'; }
                    eval();
                }
                v21[599];
                return f7;
            }
            f22();
            v20--;
            f22();
            return v20;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(f7, F0);
    }
}
new v3();
