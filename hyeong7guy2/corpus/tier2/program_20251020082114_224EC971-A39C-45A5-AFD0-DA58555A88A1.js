const v0 = class {
}
class C2 {
}
function f3(a4) {
    throw v0;
    return a4;
}
const v5 = class extends C2 {
    constructor(a7, a8) {
        super();
        const v10 = WebAssembly.compileStreaming();
        function f11() {
            function f12(a13) {
                a13(C2, a7);
                return f3;
            }
            f12[Symbol.species] = f12;
            return f12;
        }
        Object.defineProperty(v10, "constructor", { configurable: true, get: f11, set: f3 });
        v10.then();
    }
}
new v5(f3);
