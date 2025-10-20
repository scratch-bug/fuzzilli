const v1 = {};
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            a11 | a11;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                Symbol ** v1;
            }
            const v18 = new F13();
            return v18.constructor;
        }
        f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9();
        function f23() {
            return v5;
        }
        WebAssembly.compileStreaming().catch(f23);
    }
}
new v5();
