function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function F15(a17, a18, a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    Float64Array["16" + Float64Array];
                }
                new F15();
            }
            new F10();
            return a5;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(this, a6);
        function f29() {
            return f29;
        }
        WebAssembly.compileStreaming().catch(f29);
    }
}
new v3(F0, v3);
