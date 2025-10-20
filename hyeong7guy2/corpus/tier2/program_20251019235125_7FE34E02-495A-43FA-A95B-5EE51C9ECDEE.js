class C0 {
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            const v11 = a10 | a10;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function f17(a18, a19, a20) {
                    return this;
                }
                [0.0,64976.141103226226,-425825.53228441754];
                function F22(a24) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v25 = class extends F22 {
                    constructor(a27, a28) {
                        super();
                    }
                }
                new v25(a7, F13);
                f17(a10, arguments);
            }
            new F13(C0);
            return v11;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8();
        function f35() {
            return f35;
        }
        WebAssembly.compileStreaming().catch(f35);
    }
}
new v4();
