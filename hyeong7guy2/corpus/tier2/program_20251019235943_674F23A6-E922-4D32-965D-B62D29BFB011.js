function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
            }
            for (let i12 = 10, i13 = 10; i13; i13--) {
            }
            function f21() {
                return f21;
            }
            function f22() {
                function f23(a24) {
                    function f25() {
                        return a3;
                    }
                    function f26() {
                        function f27(a28, a29) {
                            function f30(a31) {
                                const v32 = async (a33, a34, a35, a36) => {
                                    await f27;
                                    return v32;
                                };
                                return v32;
                            }
                            return f27;
                        }
                        function f38() {
                        }
                        try {
                        const t0 = 0;
                        t0();
                        } catch (e) {}
                        const v40 = {};
                        v40.ownKeys = f23;
                        const v42 = new Proxy(f38, v40);
                        for (const v43 in v42) {
                        }
                        return this;
                    }
                    const v44 = Symbol.iterator;
                    f25.bind(null, ...{ [v44]: f26 });
                    return F0;
                }
                return f23;
            }
            function f48(a49) {
                return a49;
            }
            Object.defineProperty(f21, Symbol.iterator, { configurable: true, enumerable: true, get: f22, set: f48 });
            try { new Uint16Array(f21); } catch (e) {}
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v53 = new F4();
    class C54 {
        static [v53](a56, a57, a58) {
        }
    }
}
new F0();
