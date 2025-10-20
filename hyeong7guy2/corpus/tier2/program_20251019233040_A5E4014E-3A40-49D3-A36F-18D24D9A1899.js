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
                    function F20(a22, a23) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v24 = new F20(a17, f16);
                    class C25 {
                        static [v24](a27, a28, a29) {
                        }
                    }
                    return C25;
                }
                f16(a9, arguments);
            }
            new F12(F12, v10);
            return v3;
        }
        const v32 = f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f35() {
            return v32;
        }
        WebAssembly.compileStreaming().catch(f35);
    }
}
new v3();
