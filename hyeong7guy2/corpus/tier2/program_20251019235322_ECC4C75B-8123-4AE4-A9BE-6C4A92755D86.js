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
                    Symbol[Symbol.toPrimitive] = Symbol;
                }
                new F12(a7, v5);
                return F0;
            }
            f9(a8, F0);
            %PrepareFunctionForOptimization(f9);
            %OptimizeMaglevOnNextCall(f9);
            f9(f9, this);
            function f22() {
                return WebAssembly;
            }
            WebAssembly.compileStreaming(this).catch(f22);
        }
    }
    new v5(this, F2);
}
new F0();
