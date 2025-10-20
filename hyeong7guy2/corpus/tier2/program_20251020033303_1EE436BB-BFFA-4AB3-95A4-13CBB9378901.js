function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                    }
                    function F14(a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                        const t11 = globalThis.performance.measureMemory;
                        t11();
                    }
                    new F14();
                    function f24() {
                    }
                    WebAssembly.instantiateStreaming().catch(f24);
                    return f12;
                }
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v27 = new F7();
            class C28 {
                static [v27](a30, a31, a32) {
                }
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v33 = new F0();
class C34 {
    static [v33](a36, a37, a38) {
    }
}
