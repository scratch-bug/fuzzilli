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
                a15 & a15;
                function f17(a18, a19, a20) {
                    return a6;
                }
                f17(a9, arguments);
            }
            const v22 = new F12(F12, v10);
            const t17 = v22.constructor;
            new t17(a8, arguments);
            return a8;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f28() {
            return v3;
        }
        WebAssembly.compileStreaming().catch(f28);
    }
}
new v3();
