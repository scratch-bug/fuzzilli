function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
        }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const t7 = globalThis.performance.measureMemory;
            t7();
        }
        new F7();
        function f19() {
            function F20(a22, a23, a24, a25) {
                if (!new.target) { throw 'must be called with new'; }
                function F26(a28, a29) {
                    if (!new.target) { throw 'must be called with new'; }
                    function F30(a32, a33) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f34() {
                            function f35(a36) {
                                for (let i38 = 0;
                                    (() => {
                                        Symbol.g = Symbol;
                                        return i38 < 20000;
                                    })();
                                    i38++) {
                                }
                            }
                            return f35;
                        }
                        Object.defineProperty(this, "toString", { get: f34 });
                    }
                    const v44 = new F30();
                    class C45 {
                        static [v44](a47, a48, a49) {
                        }
                    }
                }
                new F26();
            }
            new F20();
        }
        WebAssembly.instantiateStreaming().catch(f19);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v54 = new F0();
class C55 {
    static [v54](a57, a58, a59) {
    }
}
