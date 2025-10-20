class C0 {
}
class C1 extends C0 {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            a7 | a7;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F9();
            a4 += a7;
            return a6;
        }
        f5();
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5(a4, this);
        function f17() {
            return C0;
        }
        WebAssembly.compileStreaming().catch(f17);
    }
}
new C1();
