const v1 = ["fJ"];
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                v1[3422] = a15;
            }
            for (let i17 = 0; i17 < 20000; i17++) {
            }
            new F12(a10, "fJ");
        }
        f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9(v5, a7);
        for (let i29 = 0, i30 = 10; i30; i30--) {
        }
        function f36() {
            return f36;
        }
        WebAssembly.compileStreaming().catch(f36);
    }
}
new v5();
