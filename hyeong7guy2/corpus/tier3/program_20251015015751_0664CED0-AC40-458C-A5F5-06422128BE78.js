const v1 = new Uint8Array(Uint8Array, Uint8Array);
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17(a18) {
                function f20() {
                    return a15;
                }
                WebAssembly.compileStreaming(v1, a18).catch(f20);
                globalThis.console.trace();
                return a6;
            }
            f17(v1);
        }
        new F11(a10, F2, F11, Uint8Array);
    }
    new F7(a4, a4);
}
new F2();
