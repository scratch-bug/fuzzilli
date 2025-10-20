function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F10();
            return v14.constructor;
        }
        const v17 = f7(v3, f7());
        f7();
        f7(f7, a5);
        f7(a5, v3);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f23() {
            return v17;
        }
        WebAssembly.compileStreaming(v3, v3).catch(f23);
    }
}
new v3(v3, v3);
