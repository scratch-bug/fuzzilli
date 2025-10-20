function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                return a10;
            }
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                const t10 = globalThis.performance.measureMemory;
                t10(F11, F0, f8);
            }
            const v19 = new F11();
            for (let i21 = 0;
                (() => {
                    const v24 = new Map();
                    v24.clear();
                    return i21 < 20000;
                })();
                ++i21) {
            }
            function f31() {
                const t23 = Intl.DateTimeFormat;
                t23();
                return f31;
            }
            WebAssembly.instantiateStreaming(v19).catch(f31);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v38 = new F4(F0, F0);
    class C39 {
        static [v38](a41, a42, a43) {
        }
    }
}
new F0();
