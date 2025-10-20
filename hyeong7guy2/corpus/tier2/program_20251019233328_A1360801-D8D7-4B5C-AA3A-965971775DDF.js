const v1 = {};
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            const v12 = a11 | a11;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function f18(a19, a20, a21) {
                    Symbol ** v1;
                    return v5;
                }
                f18(a11, arguments);
            }
            new F14(F14, v12);
            return v1;
        }
        const v25 = f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9();
        function f28() {
            return v25;
        }
        WebAssembly.compileStreaming().catch(f28);
    }
}
new v5(v1, F2);
