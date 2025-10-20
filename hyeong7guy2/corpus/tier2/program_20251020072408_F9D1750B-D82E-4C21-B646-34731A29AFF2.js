function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const t9 = {};
                t9[2367412113] &= 1e-15;
            }
            new F10(F10, F0);
            new F10();
            return v3;
        }
        f7(v3, a5);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(f7, v3);
        function f21() {
            return F0;
        }
        WebAssembly.compileStreaming(a6, a5).catch(f21);
    }
}
new v3(F0, F0);
