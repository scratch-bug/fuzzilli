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
                    return f16 >= a8;
                }
                f16(a9, arguments);
            }
            new F12(F12, v10);
            return v3;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f26() {
            return f26;
        }
        WebAssembly.compileStreaming(WebAssembly).catch(f26);
    }
}
new v3(F0, v3);
