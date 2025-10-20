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
                for (let i19 = 0; i19 < 20000; i19++) {
                    i19 / 2;
                    i19++;
                }
                function f28(a29, a30, a31) {
                    return a8;
                }
                f28(v1, arguments);
            }
            const v33 = new F14(F14, v12);
            return v33;
        }
        f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9();
        function f37() {
            return this;
        }
        WebAssembly.compileStreaming(a7, v5).catch(f37);
    }
}
new v5();
