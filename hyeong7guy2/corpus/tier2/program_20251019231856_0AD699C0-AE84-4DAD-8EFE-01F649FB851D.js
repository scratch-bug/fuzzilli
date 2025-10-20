function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a8 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                a15 - a14;
                function f17(a18, a19, a20) {
                    return arguments;
                }
                f17(a9, arguments);
            }
            new F12(F12, v10);
            return a5;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f26() {
            return f7;
        }
        WebAssembly.compileStreaming().catch(f26);
    }
}
new v3(F0, v3);
