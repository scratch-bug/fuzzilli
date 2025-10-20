function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8(a9, a10, a11) {
                class C12 {
                }
                function F13(a15) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v16 = class extends C12 {
                    constructor(a18, a19) {
                        const v21 = WebAssembly.compileStreaming(a19);
                        function f22() {
                            function f23(a24) {
                                return a24(C12, a18);
                            }
                            f23[Symbol.species] = f23;
                            return f23;
                        }
                        function f27(a28) {
                            return a28;
                        }
                        Object.defineProperty(v21, "constructor", { configurable: true, get: f22, set: f27 });
                        v21.then(a19);
                    }
                }
                new v16(F13);
                return f5;
            }
            new Worker(f8, { type: "function" });
        }
        f6();
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v36 = new F1(Symbol, F1);
class C37 {
    static [v36](a39, a40, a41) {
    }
}
