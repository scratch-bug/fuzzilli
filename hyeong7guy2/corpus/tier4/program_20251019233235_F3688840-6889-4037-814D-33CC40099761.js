const v1 = new Set();
function f2() {
    return v1;
}
const v3 = class extends f2 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            v1.has();
            return f7;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f14() {
            return v1;
        }
        WebAssembly.compileStreaming(this, a5).catch(f14);
    }
}
new v3();
