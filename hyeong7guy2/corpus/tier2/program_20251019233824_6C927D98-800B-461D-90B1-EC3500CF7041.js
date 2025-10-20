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
            v14.b = v14;
            return v14 instanceof f7;
        }
        f7(v3, a5);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f20() {
            return v3;
        }
        WebAssembly.compileStreaming().catch(f20);
    }
}
new v3(F0, F0);
