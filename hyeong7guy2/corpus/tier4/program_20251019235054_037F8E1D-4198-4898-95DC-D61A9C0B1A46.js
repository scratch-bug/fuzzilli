class C2 extends Uint8ClampedArray {
    constructor(a4, a5) {
        super();
        function f6(a7, a8) {
            const v9 = a8 | a8;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                const v15 = this.constructor;
                try { new v15(undefined, this); } catch (e) {}
                a14 !== a14;
                function f18(a19, a20, a21) {
                    return a20;
                }
                f18(a8, arguments);
            }
            const v23 = new F11(F11, v9);
            return v23;
        }
        f6();
        %PrepareFunctionForOptimization(f6);
        %OptimizeMaglevOnNextCall(f6);
        f6();
        function f27() {
            return this;
        }
        WebAssembly.compileStreaming().catch(f27);
    }
}
new C2(Uint8ClampedArray, C2);
