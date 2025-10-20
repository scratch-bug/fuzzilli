function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F10(a5, F10);
            v14 instanceof f7;
            return v3;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(a5, a6);
        function f19() {
            return f19;
        }
        WebAssembly.compileStreaming(a6, v3).catch(f19);
    }
}
new v3();
