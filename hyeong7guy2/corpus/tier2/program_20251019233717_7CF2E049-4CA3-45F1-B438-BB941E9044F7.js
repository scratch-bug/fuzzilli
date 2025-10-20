function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
        }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const t7 = globalThis.performance.measureMemory;
            t7(a9, this);
        }
        const v15 = new F7();
        function f17() {
            function F18(a20, a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                function f24() {
                    return a22;
                }
                const v25 = [1.0,NaN];
                function F26(a28, a29) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f30() {
                        function f31(a32) {
                            return a28;
                        }
                        v25[1623786241] = f31;
                        return f24;
                    }
                    Object.defineProperty(this, "toString", { get: f30 });
                }
                const v33 = new F26(v15, f5);
                class C34 {
                    static [v33](a36, a37, a38) {
                    }
                }
            }
            new F18(a2, F7, a2, F0);
            return this;
        }
        WebAssembly.instantiateStreaming(WebAssembly, WebAssembly, this).catch(f17);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v42 = new F0();
class C43 {
    static [v42](a45, a46, a47) {
    }
}
