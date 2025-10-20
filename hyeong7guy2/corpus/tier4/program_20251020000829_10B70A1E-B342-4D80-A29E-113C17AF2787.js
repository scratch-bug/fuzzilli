let v0 = 257;
let v1 = "5";
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            let v12 = arguments;
            [v12,v0,,v1] = v12;
            return eval();
        }
        f9(v0, a8);
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9(F2, v0);
        function f18() {
            return a7;
        }
        WebAssembly.compileStreaming().catch(f18);
    }
}
new v5();
