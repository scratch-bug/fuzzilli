const v2 = class extends WeakSet {
    constructor(a4, a5) {
        super();
        function f6(a7, a8) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                const v15 = new Uint8ClampedArray(956);
                v15[10] /= true;
            }
            new F9();
            return a5;
        }
        f6(f6, WeakSet);
        %PrepareFunctionForOptimization(f6);
        %OptimizeMaglevOnNextCall(f6);
        f6();
        function f20() {
            return f20;
        }
        WebAssembly.compileStreaming().catch(f20);
    }
}
new v2(true, v2);
for (let i26 = 0, i27 = 10; i27; i27--) {
}
