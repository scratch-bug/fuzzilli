for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = class extends F9 {
    constructor(a14, a15) {
        super();
        function f16(a17, a18) {
            const v19 = a18 | a18;
            function F21(a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                function f25(a26, a27, a28) {
                    return v12;
                }
                const v30 = new SharedArrayBuffer();
                const v32 = new DataView(v30);
                try { v32.setFloat64(); } catch (e) {}
                f25(a18, arguments);
            }
            new F21(F21, v19);
            return arguments;
        }
        f16();
        %PrepareFunctionForOptimization(f16);
        %OptimizeMaglevOnNextCall(f16);
        f16();
        function f39() {
            return a14;
        }
        WebAssembly.compileStreaming().catch(f39);
    }
}
new v12(F9, v12);
