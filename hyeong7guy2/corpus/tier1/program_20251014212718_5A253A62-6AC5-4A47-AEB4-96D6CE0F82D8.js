function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return a9;
        }
        function f12(a13) {
            for (let v14 = 0; v14 < 25; v14++) {
            }
            function f16() {
                return F5;
            }
            WebAssembly.compileStreaming(a9).catch(f16);
            globalThis.console.trace();
            return -1;
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
        this.e = -1;
    }
    new F5();
}
new F0();
new F0();
