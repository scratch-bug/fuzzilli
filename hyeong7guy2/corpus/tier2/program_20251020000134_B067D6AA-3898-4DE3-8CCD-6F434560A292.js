function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    const v6 = ("🙌🏿").fontsize();
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        function f14() {
            return f4;
        }
        WebAssembly.compileStreaming(this).catch(f14);
        globalThis.console.trace();
    }
    new F7(F0, v6);
    return F0;
}
({ construct: f4 }).construct();
