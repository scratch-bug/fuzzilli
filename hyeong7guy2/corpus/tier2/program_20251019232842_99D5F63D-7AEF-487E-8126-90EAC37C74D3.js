const v1 = class extends Uint8ClampedArray {
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            const v12 = a10 | a11;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                for (let v18 = 0; v18 < 5; v18++) {
                    v18++;
                    -v18;
                }
                function f21(a22, a23, a24) {
                    return Uint8ClampedArray;
                }
                f21(v1, arguments);
            }
            new F14(F14, v12);
            return v12;
        }
        f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9();
        function f30() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming(this, a7).catch(f30);
    }
}
new v5();
