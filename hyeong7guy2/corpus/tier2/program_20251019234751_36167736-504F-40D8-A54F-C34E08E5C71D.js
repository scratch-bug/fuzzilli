function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a9 | a9;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                try {
                    const v15 = class extends this {
                    }
                    `-63824`;
                } catch(e17) {
                }
            }
            new F11(a6);
            return v10;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(a6, F0);
        function f22() {
            return F0;
        }
        WebAssembly.compileStreaming(a5).catch(f22);
    }
}
new v3(F0, F0);
