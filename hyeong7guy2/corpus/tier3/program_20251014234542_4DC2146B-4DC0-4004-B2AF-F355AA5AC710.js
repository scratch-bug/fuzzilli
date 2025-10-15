class C1 extends Uint8ClampedArray {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            const v8 = a7 | a7;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14(a15, a16, a17) {
                    class C18 {
                    }
                    function F19(a21, a22, a23, a24) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    try { F19.apply(F19, F19); } catch (e) {}
                    return Uint8ClampedArray;
                }
                f14(a7, arguments);
            }
            new F10(F10, v8);
            return a7;
        }
        f5();
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f31() {
            return f31;
        }
        WebAssembly.compileStreaming().catch(f31);
    }
}
new C1();
