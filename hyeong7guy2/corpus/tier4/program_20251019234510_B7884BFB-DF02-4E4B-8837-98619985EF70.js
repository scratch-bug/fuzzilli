function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f8(a9) {
            function f11() {
                return f11;
            }
            return f11.apply(4, arguments);
        }
        f8(this);
        f8(v3);
        %OptimizeFunctionOnNextCall(f8);
        f8();
        function f17() {
            return f17;
        }
        WebAssembly.compileStreaming().catch(f17);
    }
}
new v3();
