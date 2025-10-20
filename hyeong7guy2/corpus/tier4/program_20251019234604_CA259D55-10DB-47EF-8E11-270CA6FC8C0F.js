for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            return a4;
        }
        WebAssembly.compileStreaming().catch(f8);
        globalThis.console.trace();
    }
    new F1(F1, v0, F1, v0);
}
