function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                function f10(a11) {
                    return a11;
                }
                function F12(a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    const t11 = globalThis.performance.measureMemory;
                    t11();
                }
                new F12();
                function f22() {
                    return f10;
                }
                WebAssembly.instantiateStreaming().catch(f22);
                return f10;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v25 = new F5(a2, F0);
        class C26 {
            static [v25](a28, a29, a30) {
            }
        }
        eval(a3);
        const v35 = Array(262144);
        function f36(a37) {
            return a37;
        }
        try { f36.constructor(v35); } catch (e) {}
        function f39(a40) {
            return a40;
        }
        return f39;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v41 = new F0();
class C42 {
    static [v41](a44, a45, a46) {
    }
}
