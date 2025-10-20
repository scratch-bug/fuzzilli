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
                ([1])[0] % 1;
                function f21(a22, a23, a24) {
                    return a15;
                }
                f21(a9, arguments);
            }
            new F12(F12, v10);
            return arguments;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        const v28 = f7(a6, a5);
        function f30() {
            return v28;
        }
        WebAssembly.compileStreaming().catch(f30);
    }
}
new v3();
