const v1 = class extends Uint16Array {
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            const v12 = class extends v1 {
            }
            new v12();
            return a8;
        }
        f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9();
        function f17() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming().catch(f17);
    }
}
new v5();
