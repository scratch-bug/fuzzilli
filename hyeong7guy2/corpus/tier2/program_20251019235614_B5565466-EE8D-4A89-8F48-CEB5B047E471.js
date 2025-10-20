const v1 = { maxByteLength: 4110001933 };
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                return a12;
            }
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                const v19 = globalThis.performance.measureMemory;
                v19(v19);
            }
            const v21 = new F13(this, this);
            function f23() {
                const v25 = { type: "minor" };
                return f11;
            }
            WebAssembly.instantiateStreaming(v1, v21, a4).catch(f23);
            return f11;
        }
        function F28(a30, a31) {
            if (!new.target) { throw 'must be called with new'; }
            function F32(a34, a35, a36, a37) {
                if (!new.target) { throw 'must be called with new'; }
                const v41 = {
                    construct(a39, a40) {
                        return F28;
                    },
                };
            }
            new F32();
        }
        new F28();
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v44 = new F6();
    class C45 {
        static [v44](a47, a48, a49) {
        }
    }
}
new F2();
