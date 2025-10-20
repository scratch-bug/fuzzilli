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
                function f16(a17, a18, a19) {
                    const v20 = {};
                    new Proxy(f7, v20);
                    ~v20;
                    return F12;
                }
                f16(a9, arguments);
            }
            const v25 = new F12(F12, v10);
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
new v3();
