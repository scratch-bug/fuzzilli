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
                function f16(a17, a18, a19) {
                    function f21() {
                        return a19;
                    }
                    function f22() {
                        function f23() {
                            return { done: true };
                        }
                        return { next: f23 };
                    }
                    const v27 = Symbol.iterator;
                    return f21.bind(null, ...{ [v27]: f22 });
                }
                f16(a9, arguments);
            }
            const v32 = new F12(F12, v10);
            const v33 = v32.constructor;
            const v34 = new v33(v33, v3, a5);
            return v34;
        }
        f7(v3, a5);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        const v36 = f7();
        function f38() {
            return v36;
        }
        WebAssembly.compileStreaming().catch(f38);
    }
}
new v3();
