class C1 extends Uint8ClampedArray {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            const v8 = a7 | a7;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14(a15, a16, a17) {
                    function f18(a19, a20) {
                        return a17;
                    }
                    f18.constructor();
                    return a13;
                }
                f14(a7, arguments);
            }
            new F10(F10, v8);
            return Uint8ClampedArray;
        }
        f5(C1, a3);
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f27() {
            return C1;
        }
        WebAssembly.compileStreaming().catch(f27);
    }
}
new C1();
