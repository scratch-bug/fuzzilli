function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            a8 | a9;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                try { new undefined(a5, -9223372036854775808, a14, ...a6); } catch (e) {}
            }
            const v18 = new F11();
            return v18;
        }
        f7(a6, a6);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f22() {
            return v3;
        }
        WebAssembly.compileStreaming(WebAssembly).catch(f22);
    }
}
new v3();
