function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    return F0;
}
const v5 = class extends f4 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            a11 | a11;
            function F13() {
                if (!new.target) { throw 'must be called with new'; }
                for (let v15 = 0; v15 < 5; v15++) {
                    const v17 = { a: 1 };
                }
                const v19 = { a: 1.1 };
            }
            new F13(F0);
            return a11;
        }
        const v21 = f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9(f9, f9);
        function f24() {
            return v21;
        }
        WebAssembly.compileStreaming(WebAssembly, a8).catch(f24);
    }
}
new v5();
