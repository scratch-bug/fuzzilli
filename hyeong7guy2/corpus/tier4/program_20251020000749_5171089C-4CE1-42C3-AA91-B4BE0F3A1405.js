function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            try {
                const v11 = class extends Uint32Array {
                    constructor(a13) {
                        return 9007199254740991;
                    }
                }
                new v11();
            } catch(e16) {
            }
            return a6;
        }
        f7(a6, v3);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f20() {
            return f20;
        }
        WebAssembly.compileStreaming().catch(f20);
    }
}
new v3();
