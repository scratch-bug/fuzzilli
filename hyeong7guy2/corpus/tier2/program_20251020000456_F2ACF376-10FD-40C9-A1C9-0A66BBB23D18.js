function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    let v2 = this;
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function f12(a13) {
                function F14(a16, a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f21() {
                        return a18;
                    }
                    WebAssembly.compileStreaming().catch(f21);
                    globalThis.console.trace("function", v2);
                }
                new F14();
                return a9;
            }
            const v28 = %WasmStruct();
            v2 = v28;
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v29 = new F7();
    v29.hasOwnProperty(v29);
}
new F1();
