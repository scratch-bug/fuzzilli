function f0() {
    return f0;
}
const v1 = class extends f0 {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            a7 | a7;
            function F9() {
                if (!new.target) { throw 'must be called with new'; }
                for (let v11 = 0; v11 < 5; v11++) {
                    const v13 = { a: 1 };
                }
                const v15 = { a: 1.1 };
            }
            new F9();
            return arguments;
        }
        f5();
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f21() {
            return a4;
        }
        WebAssembly.compileStreaming(this, a4).catch(f21);
    }
}
new v1(f0, f0);
