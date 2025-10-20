function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                const v16 = { 964434629: F12 };
            }
            const v17 = new F12(this, a9);
            const t13 = v17.constructor;
            const v19 = new t13(a8, arguments);
            return v19;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f23() {
            return this;
        }
        WebAssembly.compileStreaming().catch(f23);
    }
}
new v3();
