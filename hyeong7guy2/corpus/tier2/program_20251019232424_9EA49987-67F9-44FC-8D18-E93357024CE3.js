function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12) {
                if (!new.target) { throw 'must be called with new'; }
                function F13(a15, a16) {
                    if (!new.target) { throw 'must be called with new'; }
                    ([this,this,this,this,this]).pop();
                }
                new F13(a9, v3);
            }
            new F10(a8);
            a9 | a9;
            return a6;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f25() {
            return this;
        }
        WebAssembly.compileStreaming().catch(f25);
    }
}
new v3(F0, v3);
