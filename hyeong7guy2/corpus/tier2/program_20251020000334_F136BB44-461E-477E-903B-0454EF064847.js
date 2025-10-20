function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function f12(a13) {
                function F14(a16, a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f21() {
                        return a17;
                    }
                    WebAssembly.compileStreaming(a5, a18).catch(f21);
                    const v25 = globalThis.console;
                    v25.trace(this, this, v25);
                }
                new F14();
            }
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v28 = new F7();
    true.hasOwnProperty(v28);
}
new F1();
