function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        this.d /= -2147483649;
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
                return this;
            }
            function f18(a19) {
                function f21() {
                    return F6;
                }
                WebAssembly.compileStreaming().catch(f21);
                globalThis.console.trace();
                return a15;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = -1;
        }
        new F11(F1, F1, F1, a3);
    }
    new F6(a3, F6);
}
new F1();
