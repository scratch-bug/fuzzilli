function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f15() {
                    return a4;
                }
                WebAssembly.compileStreaming().catch(f15);
                globalThis.console.trace();
            }
            new F8();
            return F8;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
Reflect.construct(F1, F1).toString(null);
