function f0() {
    return f0;
}
const v1 = class extends f0 {
    constructor(a3, a4) {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                function f10(a11) {
                    function f12() {
                    }
                    return Math.log2(f12);
                }
                f10();
                f10();
                %OptimizeMaglevOnNextCall(f10);
                return f10;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v17 = new F5();
        class C18 {
            static [v17](a20, a21, a22) {
            }
        }
        super();
        function f24() {
            return v1;
        }
        WebAssembly.compileStreaming(C18).catch(f24);
    }
}
new v1(f0, v1);
