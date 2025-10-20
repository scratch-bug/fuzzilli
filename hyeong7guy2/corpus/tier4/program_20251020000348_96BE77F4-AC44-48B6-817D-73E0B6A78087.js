function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f8(a9) {
            const v11 = arguments[0];
            function f12() {
                return v11;
            }
            f12.apply(4, arguments);
        }
        f8(v3);
        f8();
        %OptimizeFunctionOnNextCall(f8);
        f8(F0);
        function f18() {
            return f18;
        }
        WebAssembly.compileStreaming().catch(f18);
    }
}
new v3(v3, F0);
