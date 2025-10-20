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
                    const v22 = new Uint8ClampedArray();
                    v22[10] /= undefined;
                    return this;
                }
                f17(a10, arguments);
            }
            const v25 = new F13(C0, v11);
            return v25;
        }
        const v26 = f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(v4, this);
        function f29() {
            return v26;
        }
        WebAssembly.compileStreaming().catch(f29);
    }
}
new v4(F1, v4);
