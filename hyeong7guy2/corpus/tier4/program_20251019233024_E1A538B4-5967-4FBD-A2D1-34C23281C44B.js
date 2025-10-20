function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function f11(a12, a13) {
                a12.cos(a13);
                return f11;
            }
            f11(Math, 577928152);
            %PrepareFunctionForOptimization(f11);
            %OptimizeMaglevOnNextCall(f11);
            f11(Math);
            return F0;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f21() {
            return v3;
        }
        WebAssembly.compileStreaming().catch(f21);
    }
}
new v3(v3, F0);
