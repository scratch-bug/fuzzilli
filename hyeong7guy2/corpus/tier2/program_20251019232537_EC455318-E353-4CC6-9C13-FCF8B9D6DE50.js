class C0 {
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        const v9 = WebAssembly.compileStreaming(WebAssembly, a7);
        function f10() {
            function f11(a12) {
                a12(C0, f11);
                return f11;
            }
            f11[Symbol.species] = f11;
            return f11;
        }
        function f16(a17) {
            return a17;
        }
        Object.defineProperty(v9, "constructor", { configurable: true, get: f10, set: f16 });
        v9.then();
    }
}
new v4(C0, F1);
