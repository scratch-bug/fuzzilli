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
                `string${536870912n}undefined`;
            }
            const v17 = new F11(F0, a9);
            v17.constructor;
            return a8;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f22() {
            return a5;
        }
        WebAssembly.compileStreaming().catch(f22);
    }
}
new v3(F0, F0);
