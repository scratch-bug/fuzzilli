const v1 = class extends Date {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            a4 += a7;
        }
        f5(this, this);
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5(a3, a4);
        function f11() {
        }
        WebAssembly.compileStreaming().catch(f11);
    }
}
new v1();
