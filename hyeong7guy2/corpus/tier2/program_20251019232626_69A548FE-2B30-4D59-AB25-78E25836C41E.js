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
                    const v18 = class {
                        static set f(a20) {
                        }
                        static f;
                    }
                    return F10;
                }
                f14(a7, arguments);
            }
            const v22 = new F10(F10, v8);
            return v22;
        }
        f5(v1, a3);
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f26() {
            return f26;
        }
        WebAssembly.compileStreaming(this, v1).catch(f26);
    }
}
new v1();
