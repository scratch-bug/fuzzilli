function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = class extends F5 {
        constructor(a10, a11) {
            super();
            function f13() {
                return WebAssembly;
            }
            WebAssembly.compileStreaming(this).catch(f13);
        }
    }
    new v8(F0, a4);
    function F17(a19, a20) {
        if (!new.target) { throw 'must be called with new'; }
        function f21() {
            function f22(a23) {
            }
            function F24(a26, a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                for (const v32 in [0,97]) {
                    gc(gc);
                }
            }
            new F24();
            return f22;
        }
        Object.defineProperty(this, "toString", { get: f21 });
    }
    const v36 = new F17();
    class C37 {
        static [v36](a39, a40, a41) {
        }
    }
}
new F0(F0, F0, F0);
