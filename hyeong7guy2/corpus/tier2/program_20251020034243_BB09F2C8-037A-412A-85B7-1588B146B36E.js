function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            const v11 = a10 | a10;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function f17(a18, a19, a20) {
                    return a6;
                }
                const v21 = new Uint32Array(this, v4);
                const v22 = v21.length;
                v22 + v22;
                f17(a10, arguments);
            }
            new F13(F13, v11);
            return a9;
        }
        f8(a7, a7);
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(v4, a7);
        function f29() {
            return f29;
        }
        WebAssembly.compileStreaming(v4, a6).catch(f29);
    }
}
new v4();
