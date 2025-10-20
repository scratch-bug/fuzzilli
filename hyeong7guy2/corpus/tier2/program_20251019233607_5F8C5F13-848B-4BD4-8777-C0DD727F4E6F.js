function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return f16;
            }
            function f17(a18) {
                function f20() {
                    return f20;
                }
                WebAssembly.compileStreaming(-1).catch(f20);
                return a8;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10();
    }
    new F5();
}
new F0();
