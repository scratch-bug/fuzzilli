const v1 = WebAssembly.Memory;
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9() {
            return a8;
        }
        const v10 = v1.Exception;
        try { v10(v10, F2); } catch (e) {}
        WebAssembly.compileStreaming().catch(f9);
    }
}
new v5(v1, WebAssembly);
