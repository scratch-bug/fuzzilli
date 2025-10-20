const v1 = -1.5314540273657803e+308 != -1.5314540273657803e+308;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = class extends F3 {
    constructor(a8, a9) {
        super();
        function f10(a11, a12) {
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f17(a18, a19) {
                for (let i = 0; i < 5; i++) {
                    switch (a9) {
                        case v1:
                            break;
                    }
                }
                return a9;
            }
            F13.constructor = f17;
            const t21 = F13.constructor;
            return t21();
        }
        f10(v6, a8);
        %PrepareFunctionForOptimization(f10);
        %OptimizeMaglevOnNextCall(f10);
        f10();
        function f25() {
            return v6;
        }
        WebAssembly.compileStreaming().catch(f25);
    }
}
new v6(2.2250738585072014e-308, F3);
