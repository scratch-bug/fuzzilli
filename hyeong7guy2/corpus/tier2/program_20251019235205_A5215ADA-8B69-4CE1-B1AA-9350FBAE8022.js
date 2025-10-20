function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = class extends F10 {
                constructor(a14, a15) {
                    function f16(a17) {
                        return a15;
                    }
                    const v19 = { maxByteLength: 4294967295 };
                    return f16;
                }
            }
            new v12(a5, a6);
            return v12;
        }
        const v21 = f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(v21, this);
        function f24() {
            return f24;
        }
        WebAssembly.compileStreaming(WebAssembly).catch(f24);
    }
}
new v3(F0, v3);
