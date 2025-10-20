function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14(a15, a16, a17) {
                    +{};
                    return eval(a8);
                }
                f14(f7, a8, F10);
            }
            new F10();
            return a6;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(this, v3);
        function f27() {
            return a5;
        }
        WebAssembly.compileStreaming().catch(f27);
    }
}
new v3(F0, F0);
