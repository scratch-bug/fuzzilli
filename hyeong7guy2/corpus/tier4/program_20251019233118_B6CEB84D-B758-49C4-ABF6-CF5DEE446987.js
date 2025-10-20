const v2 = new BigUint64Array(192);
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = class extends F3 {
    constructor(a8, a9) {
        super();
        function f10(a11, a12) {
            v2.length;
            return a9;
        }
        f10();
        %PrepareFunctionForOptimization(f10);
        %OptimizeMaglevOnNextCall(f10);
        f10();
        function f17() {
            return 192;
        }
        WebAssembly.compileStreaming().catch(f17);
    }
}
new v6();
