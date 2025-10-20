function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                for (const v17 in /(fp*)/vi) {
                }
                function f18(a19, a20, a21) {
                    return a19;
                }
                f18(a9, arguments);
            }
            const v23 = new F12(F12, v10);
            const t18 = v23.constructor;
            const v25 = new t18(a8, arguments);
            return v25;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f29() {
            return f29;
        }
        WebAssembly.compileStreaming(WebAssembly, v3).catch(f29);
    }
}
new v3(v3, v3);
