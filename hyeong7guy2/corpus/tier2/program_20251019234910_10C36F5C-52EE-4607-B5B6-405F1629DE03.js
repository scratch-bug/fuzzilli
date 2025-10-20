function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function f10() {
                function f11(a12) {
                    return a12;
                }
                function F13(a15, a16) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v19 = globalThis.performance.measureMemory;
                    v19(v19, a8);
                }
                new F13();
                function f23() {
                    return f11;
                }
                WebAssembly.instantiateStreaming(Array).catch(f23);
                return f11;
            }
            Object.defineProperty(this, "toString", { get: f10 });
        }
        const v26 = new F6(a4, F1);
        class C27 {
            static [v26](a29, a30, a31) {
            }
        }
        const v33 = Array(262144);
        v33.f = v33;
        Array(262144);
        gc.call();
        function f37(a38) {
            return a38;
        }
        return f37;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v39 = new F1(F1, Array);
class C40 {
    static [v39](a42, a43, a44) {
    }
}
