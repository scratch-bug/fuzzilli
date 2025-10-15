class C1 extends Uint8ClampedArray {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            const v8 = a7 | a7;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14(a15, a16, a17) {
                    function f18(a19, a20) {
                        return a13;
                    }
                    function f21(a22, a23) {
                        return a16;
                    }
                    f18.constructor = f21;
                    return a16;
                }
                f14(a7, arguments);
            }
            new F10(F10, v8);
            return f5;
        }
        f5();
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        const v27 = f5();
        function f29() {
            return v27;
        }
        WebAssembly.compileStreaming(WebAssembly, a3).catch(f29);
    }
}
new C1(C1, Uint8ClampedArray);
