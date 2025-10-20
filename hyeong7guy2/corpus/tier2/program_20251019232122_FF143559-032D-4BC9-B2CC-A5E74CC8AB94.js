class C0 {
}
const v1 = class {
}
function f2() {
    return v1;
}
const v3 = class extends f2 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f16(a17, a18, a19) {
                    v1 ^ C0;
                    return this;
                }
                f16(a9, arguments);
            }
            const v22 = new F12(F12, v10);
            return v22;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f26() {
            return f2;
        }
        WebAssembly.compileStreaming().catch(f26);
    }
}
new v3();
