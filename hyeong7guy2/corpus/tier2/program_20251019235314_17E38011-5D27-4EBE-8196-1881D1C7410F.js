function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                ~[this,this,this,this];
            }
            new F12(F0, this);
            return arguments;
        }
        const v19 = f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(f7, a6);
        function f22() {
            return F0;
        }
        WebAssembly.compileStreaming(v19, a6).catch(f22);
    }
}
new v3();
