function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
        }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const v12 = globalThis.performance;
            const v13 = v12.measureMemory;
            v13(v13, v12, a2);
        }
        new F7();
        function f17() {
            function F18(a20, a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                function F24(a26, a27) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f28() {
                        function f29(a30) {
                        }
                        return f29;
                    }
                    function F32(a34, a35) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f36() {
                            function f37(a38) {
                                for (let i40 = 0;
                                    (() => {
                                        Symbol.g = Symbol;
                                        return i40 < 20000;
                                    })();
                                    i40++) {
                                    /(fp*)/vi;
                                }
                                for (let v47 = 0; v47 < 5; v47++) {
                                }
                            }
                            return f37;
                        }
                        Object.defineProperty(this, "toString", { get: f36 });
                    }
                    const v48 = new F32();
                    class C49 {
                        static [v48](a51, a52, a53) {
                        }
                    }
                    Object.defineProperty(this, "toString", { get: f28 });
                }
                new F24(F18, a22);
            }
            new F18();
            return F18;
        }
        WebAssembly.instantiateStreaming().catch(f17);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v58 = new F0();
class C59 {
    static [v58](a61, a62, a63) {
    }
}
