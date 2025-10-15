class C1 extends Uint8ClampedArray {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            const v8 = a7 | a7;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14(a15, a16, a17) {
                    function F18(a20, a21, a22, a23) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    function f24() {
                        return F18;
                    }
                    Object.defineProperty(F18, 3, { configurable: true, get: f24 });
                    return a12;
                }
                f14(a7, arguments);
            }
            new F10(F10, v8);
            return v8;
        }
        f5();
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        const v28 = f5(f5, a3);
        function f30() {
            return v28;
        }
        WebAssembly.compileStreaming().catch(f30);
    }
}
new C1(Uint8ClampedArray, Uint8ClampedArray);
