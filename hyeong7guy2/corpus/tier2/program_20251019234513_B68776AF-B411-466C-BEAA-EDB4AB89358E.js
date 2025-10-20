function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function f12(a13) {
                function F14(a16, a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f21() {
                        return f21;
                    }
                    WebAssembly.compileStreaming().catch(f21);
                    globalThis.console.trace(a13, f12, this, this);
                }
                new F14();
                return a5;
            }
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v28 = new F7();
    (65535).hasOwnProperty(v28);
}
new F1();
