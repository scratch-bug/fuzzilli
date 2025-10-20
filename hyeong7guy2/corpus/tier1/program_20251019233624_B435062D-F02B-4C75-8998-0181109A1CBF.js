function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a2;
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
                            let v31 = -1098098658;
                            function F35(a37, a38) {
                                if (!new.target) { throw 'must be called with new'; }
                                a38++;
                                this.e = a38;
                            }
                            const v40 = new F35("2147483647", -3612);
                            v40.b = v40;
                            new F35(a26, F18);
                            let v42 = 30349n;
                            ({"b":v42,"e":v31,...Int32Array} = v40);
                        }
                        return f29;
                    }
                    Object.defineProperty(this, "toString", { get: f28 });
                }
                const v43 = new F24(F18, a22);
                class C44 {
                    static [v43](a46, a47, a48) {
                    }
                }
            }
            new F18(F18, f5, F18, this);
            return F18;
        }
        WebAssembly.instantiateStreaming().catch(f17);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v52 = new F0();
class C53 {
    static [v52](a55, a56, a57) {
    }
}
