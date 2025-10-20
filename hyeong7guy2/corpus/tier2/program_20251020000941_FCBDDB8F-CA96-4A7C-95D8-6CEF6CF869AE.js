function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function F17(a19, a20, a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                    Float64Array["16" + f7];
                }
                new F17(a5, a14, this, a8);
                function f27(a28, a29, a30) {
                    return a29;
                }
                f27(a9, arguments);
            }
            new F12(F12, v10);
            return a5;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f36() {
            return f7;
        }
        WebAssembly.compileStreaming(this).catch(f36);
    }
}
new v3();
