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
                    return a15;
                }
                function F18() {
                    if (!new.target) { throw 'must be called with new'; }
                    for (let v20 = 0; v20 < 5; v20++) {
                        const v22 = { a: 1 };
                    }
                    const v24 = { a: 1.1 };
                }
                new F18();
                f14(a7, arguments);
            }
            const v27 = new F10(F10, v8);
            return v27;
        }
        f5(this, a4);
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f31() {
            return f31;
        }
        WebAssembly.compileStreaming().catch(f31);
    }
}
new v1();
