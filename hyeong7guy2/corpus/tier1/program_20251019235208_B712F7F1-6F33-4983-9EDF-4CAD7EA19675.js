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
            function F12() {
                if (!new.target) { throw 'must be called with new'; }
                for (let v14 = 0; v14 < 5; v14++) {
                    Object.defineProperty(F0, F0, { writable: true, enumerable: true, value: { a: 1 } });
                }
                const v18 = { a: 1.1 };
            }
            new F12();
            return F0;
        }
        const v20 = f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        const v21 = f9(v20, v20);
        function f23() {
            return v21;
        }
        WebAssembly.compileStreaming().catch(f23);
    }
}
new v5(v5, F0);
