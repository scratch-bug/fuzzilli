class C1 extends Uint8ClampedArray {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            const v8 = a7 | a7;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v15 = ([this,this,this,this,this]).push();
                v15 * v15;
                function f17(a18, a19, a20) {
                    return F10;
                }
                f17(a7, arguments);
            }
            new F10(F10, v8);
            return a4;
        }
        f5();
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5(a3, Uint8ClampedArray);
        function f26() {
            return f26;
        }
        WebAssembly.compileStreaming().catch(f26);
    }
}
new C1();
