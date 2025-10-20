function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            a9 | a9;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function f15(a16, a17, a18) {
                    Symbol < Int8Array;
                    return F11;
                }
                f15(a9);
            }
            new F11();
            return a6;
        }
        const v24 = f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(a6, v24);
        function f27() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming().catch(f27);
    }
}
new v3(F0, F0);
