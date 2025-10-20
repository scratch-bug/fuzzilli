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
                    return this;
                }
                const t13 = {};
                t13.d >>>= 100000;
                f17(a10, arguments);
            }
            new F13(F13, v11);
            return F1;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(v4, a7);
        function f28() {
            return f28;
        }
        WebAssembly.compileStreaming(this, a6).catch(f28);
    }
}
new v4();
