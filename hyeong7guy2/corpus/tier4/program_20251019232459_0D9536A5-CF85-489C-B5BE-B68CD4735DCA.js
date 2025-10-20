function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            try {
                class C10 {
                }
                C10["16" + C10];
            } catch(e14) {
            }
            return v3;
        }
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(a5, a5);
        function f17() {
            return a5;
        }
        WebAssembly.compileStreaming(WebAssembly, v3).catch(f17);
    }
}
new v3();
