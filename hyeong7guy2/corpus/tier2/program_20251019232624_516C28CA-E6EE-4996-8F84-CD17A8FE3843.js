function f0() {
    return f0;
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                f0--;
            }
            new F11(v4, F11);
            return f0;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8();
        function f20() {
            return a7;
        }
        WebAssembly.compileStreaming(WebAssembly, a7).catch(f20);
    }
}
new v4(v4, F1);
