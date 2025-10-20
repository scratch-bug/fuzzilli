for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = class extends F9 {
    constructor(a14, a15) {
        super();
        function f16(a17, a18) {
            function F19(a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                let v23 = 2147483649;
                v23++;
                Array(v23);
            }
            function f29() {
                return f29;
            }
            f29.apply(4, arguments);
            new F19(f29, f29);
            return a15;
        }
        f16();
        %PrepareFunctionForOptimization(f16);
        %OptimizeMaglevOnNextCall(f16);
        const v33 = f16();
        function f35() {
            return v12;
        }
        WebAssembly.compileStreaming(v12, v33).catch(f35);
    }
}
new v12(F9, F9);
