function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v5 = class extends F2 {
        constructor(a7, a8) {
            super();
            function f9(a10, a11) {
                function F12(a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    this instanceof F12;
                    this[Symbol] = a11;
                }
                new F12(v5, a11);
                return F0;
            }
            f9(a8, F2);
            %PrepareFunctionForOptimization(f9);
            %OptimizeMaglevOnNextCall(f9);
            f9();
            function f22() {
                return f22;
            }
            WebAssembly.compileStreaming().catch(f22);
        }
    }
    new v5(this, v5);
}
new F0();
