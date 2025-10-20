const v0 = class {
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
                (v0 ^ -65535) / -65535;
            }
            new F11(F11, a10);
            return F1;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(a7, F1);
        function f22() {
            return v4;
        }
        WebAssembly.compileStreaming(this, a7).catch(f22);
    }
}
new v4();
