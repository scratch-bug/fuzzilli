function f0() {
    return f0;
}
const v1 = class extends f0 {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            const v8 = a7 | a7;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14(a15, a16, a17) {
                    a7--;
                }
                f14(a7, arguments);
                Object.defineProperty(this, 2147483647, { value: a6 });
            }
            new F10(F10, v8);
            return arguments;
        }
        const v21 = f5(a3, a3);
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        const v22 = f5(a4, v21);
        function f24() {
            return v22;
        }
        WebAssembly.compileStreaming(WebAssembly, a4).catch(f24);
    }
}
new v1();
