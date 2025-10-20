function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            function f20() {
                return 1000000.0;
            }
            function f21(a22) {
                function f24() {
                    return a16;
                }
                WebAssembly.compileStreaming("add", a11).catch(f24);
                globalThis.console.trace();
                return f21;
            }
            Object.defineProperty(this, "e", { get: f20, set: f21 });
            this.e = -1;
        }
        new F14();
    }
    new F9(true, true);
}
new F4(true);
new F4("add", Int32Array, 1000000.0);
