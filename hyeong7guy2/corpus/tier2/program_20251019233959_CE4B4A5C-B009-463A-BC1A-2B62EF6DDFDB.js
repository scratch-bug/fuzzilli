function f0() {
    return f0;
}
const v1 = class extends f0 {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            a7 | a7;
            function F9(a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = class extends F9 {
                constructor(a14, a15) {
                    super();
                    function f17() {
                        return this;
                    }
                    WebAssembly.compileStreaming().catch(f17);
                }
            }
            new v12();
            return arguments;
        }
        f5();
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        const v23 = f5();
        function f25() {
            return v23;
        }
        WebAssembly.compileStreaming(WebAssembly, a3).catch(f25);
    }
}
new v1();
