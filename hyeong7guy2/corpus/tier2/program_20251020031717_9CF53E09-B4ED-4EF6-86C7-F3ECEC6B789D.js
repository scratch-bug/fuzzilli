function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
        }
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            const t7 = globalThis.performance.measureMemory;
            t7();
        }
        new F8();
        function f20() {
            function F21(a23, a24, a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                function F27(a29, a30) {
                    if (!new.target) { throw 'must be called with new'; }
                    function F31(a33, a34) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f35() {
                            function f36(a37) {
                                for (let i39 = 0;
                                    (() => {
                                        Symbol.g = Symbol;
                                        return i39 < 20000;
                                    })();
                                    i39++) {
                                }
                            }
                            return f36;
                        }
                        Object.defineProperty(this, "toString", { get: f35 });
                    }
                    const v45 = new F31();
                    class C46 {
                        static [v45](a48, a49, a50) {
                        }
                    }
                }
                new F27();
            }
            new F21();
        }
        WebAssembly.instantiateStreaming().catch(f20);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v55 = new F1();
class C56 {
    static [v55](a58, a59, a60) {
    }
}
