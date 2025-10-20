function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                return a3;
            }
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                const v17 = globalThis.performance.measureMemory;
                v17(v17, this, v17);
            }
            const v19 = new F11();
            function f21() {
                const v22 = class {
                    static {
                        class C25 extends this.constructor {
                        }
                        new C25();
                    }
                }
                return a3;
            }
            WebAssembly.instantiateStreaming(this, a3, v19).catch(f21);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v29 = new F4(F0, a2);
    class C30 {
        static [v29](a32, a33, a34) {
        }
    }
}
new F0();
