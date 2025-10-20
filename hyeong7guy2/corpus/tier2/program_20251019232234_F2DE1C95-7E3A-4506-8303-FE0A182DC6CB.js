class C1 {
}
function f2(a3) {
    throw 13;
    return a3;
}
const v4 = class extends C1 {
    constructor(a6, a7) {
        super();
        const v9 = WebAssembly.compileStreaming();
        function f10() {
            function f11(a12) {
                a12(C1, a6);
                return this;
            }
            f11[Symbol.species] = f11;
            return f11;
        }
        function f16(a17) {
            return a17;
        }
        Object.defineProperty(v9, "constructor", { configurable: true, get: f10, set: f16 });
        v9.then(f10);
    }
}
new v4(f2);
