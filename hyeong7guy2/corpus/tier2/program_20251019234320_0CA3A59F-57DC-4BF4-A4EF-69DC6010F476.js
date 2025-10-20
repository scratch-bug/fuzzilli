function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            const v11 = -9223372036854775807 | a10;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function f17(a18, a19, a20) {
                    return a10;
                }
                const t13 = [F1];
                t13["p"] = -9223372036854775807;
                f17(a10, arguments);
            }
            const v24 = new F13(F13, v11);
            return v24;
        }
        const v25 = f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(F1, v4);
        function f28() {
            return v25;
        }
        WebAssembly.compileStreaming(this, v4).catch(f28);
    }
}
new v4();
