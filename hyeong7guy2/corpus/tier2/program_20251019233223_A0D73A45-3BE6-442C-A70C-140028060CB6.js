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
                    Temporal = 536870888n;
                    return a20;
                }
                f17(a10, arguments);
            }
            new F13(F13, v11);
            return a9;
        }
        const v24 = f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(v4, v24);
        function f27() {
            return v4;
        }
        WebAssembly.compileStreaming().catch(f27);
    }
}
new v4(v4, v4);
