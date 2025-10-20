function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a6;
        }
        for (let i8 = 10, i9 = 10; i9; i9--) {
        }
        function f17() {
            return a2;
        }
        function f18() {
            function f19(a20) {
                function f21() {
                    return f21;
                }
                function f22() {
                    function f23(a24, a25) {
                        for (let i28 = 0, i29 = 10;
                            (() => {
                                function f30(a31) {
                                    return f30;
                                }
                                return i29;
                            })();
                            ) {
                        }
                        return f21;
                    }
                    function f36() {
                        return f21;
                    }
                    try {
                    const t0 = 0;
                    t0(a3);
                    } catch (e) {}
                    const v38 = {};
                    v38.ownKeys = f19;
                    const v40 = new Proxy(f36, v38);
                    for (const v41 in v40) {
                    }
                    return f36;
                }
                const v42 = Symbol.iterator;
                f21.bind(null, ...{ [v42]: f22 });
                return f4;
            }
            return f19;
        }
        function f46(a47) {
            return a47;
        }
        Object.defineProperty(f17, Symbol.iterator, { configurable: true, enumerable: true, get: f18, set: f46 });
        try { new Uint16Array(f17); } catch (e) {}
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v51 = new F0();
class C52 {
    static [v51](a54, a55, a56) {
    }
}
