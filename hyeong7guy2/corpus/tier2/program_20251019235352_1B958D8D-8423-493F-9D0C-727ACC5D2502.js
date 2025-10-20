function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f8() {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function f15() {
                    return a12;
                }
                const v16 = WebAssembly.compileStreaming();
                v16.catch(f15);
                const v19 = globalThis.console;
                v19.trace(v16, v19, a6, v19);
            }
            const v21 = new F9(a6, WebAssembly, F0, v3);
            return v21;
        }
        WebAssembly.compileStreaming(WebAssembly).catch(f8);
    }
}
new v3(F0, v3);
