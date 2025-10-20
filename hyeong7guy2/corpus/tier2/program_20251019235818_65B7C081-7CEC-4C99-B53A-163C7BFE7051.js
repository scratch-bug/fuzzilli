function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f16(a17, a18, a19) {
                    -4294967297n << -4294967297n;
                    return f16;
                }
                f16(a9, arguments);
            }
            new F12(F12, v10);
            return this;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(v3, v3);
        function f27() {
            return this;
        }
        WebAssembly.compileStreaming().catch(f27);
    }
}
new v3();
