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
                    for (let v20 = 0; v20 < 5; v20++) {
                        "p" + v20;
                    }
                    return this;
                }
                f16(a9, arguments);
            }
            new F12(F12, v10);
            return a5;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f28() {
            return f7;
        }
        WebAssembly.compileStreaming().catch(f28);
    }
}
new v3(F0, v3);
