function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            a10 | a10;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                Temporal = 536870888n;
            }
            const v17 = new F12();
            return v17;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        const v19 = f8(a6, a6);
        function f21() {
            return f21;
        }
        WebAssembly.compileStreaming(v19).catch(f21);
    }
}
new v4();
