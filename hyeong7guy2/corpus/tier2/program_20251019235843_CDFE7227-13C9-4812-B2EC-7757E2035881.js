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
                let v16 = undefined;
                v16 = a9--;
            }
            new F12(v10, a9);
            return arguments;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f22() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming(v3, a6).catch(f22);
    }
}
new v3();
