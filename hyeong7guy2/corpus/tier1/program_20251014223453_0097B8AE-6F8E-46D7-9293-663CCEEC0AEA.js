function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a3(); } catch (e) {}
    function f5() {
        function f6(a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f15() {
                    return F8;
                }
                WebAssembly.compileStreaming(a7, a13).catch(f15);
                globalThis.console.trace();
            }
            new F8();
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F0(F0, F0);
v22.hasOwnProperty(v22);
