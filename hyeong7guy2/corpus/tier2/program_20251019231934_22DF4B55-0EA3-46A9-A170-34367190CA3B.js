function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                if (this == arguments) {
                }
            }
            new F11(v3, a9);
            return F0;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(v3, f7);
        function f20() {
            return a5;
        }
        WebAssembly.compileStreaming().catch(f20);
    }
}
new v3();
