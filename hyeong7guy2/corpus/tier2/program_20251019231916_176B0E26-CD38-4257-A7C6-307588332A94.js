const v0 = class {
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            Proxy.prototype = v0;
            return f8;
        }
        f8(F1, this);
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(F1, f8);
        function f15() {
            return f15;
        }
        WebAssembly.compileStreaming(v4, a7).catch(f15);
    }
}
new v4();
