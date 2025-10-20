const v1 = class extends Date {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            class C9 {
                static [8n] = 8n;
            }
            return f5;
        }
        f5(this, this);
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f13() {
        }
        WebAssembly.compileStreaming().catch(f13);
    }
}
new v1(Date, v1);
