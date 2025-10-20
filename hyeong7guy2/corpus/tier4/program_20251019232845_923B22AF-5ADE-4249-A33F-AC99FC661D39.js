function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function f11(a12) {
                function f14() {
                    return f11;
                }
                f14.apply(4, arguments);
                return v3;
            }
            f11(f11, a6);
            return a5;
        }
        f7(a5, a6);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f20() {
            return a6;
        }
        WebAssembly.compileStreaming().catch(f20);
    }
}
new v3(v3, v3);
