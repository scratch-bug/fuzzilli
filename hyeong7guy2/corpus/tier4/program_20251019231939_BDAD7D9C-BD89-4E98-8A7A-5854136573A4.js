for (let v0 = 0; v0 < 5; v0++) {
    function f2(a3) {
        return v0;
    }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming(this, a6).catch(f11);
        globalThis.console.trace();
    }
    new F4(f2, v0, F4, F4);
    this.onmessage = f2;
    delete this.onmessage;
}
