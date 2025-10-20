function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
        }
        for (let i8 = 10, i9 = 10; i9; i9--) {
        }
        function f17() {
            return a3;
        }
        function f18() {
            function f19(a20) {
                function f21() {
                    return Symbol;
                }
                function f22() {
                    function f23(a24, a25) {
                        function f26(a27) {
                            const v28 = async (a29, a30, a31, a32) => {
                                await f23;
                                return f23;
                            };
                            return f26;
                        }
                        return f5;
                    }
                    function f34() {
                        return f23;
                    }
                    try {
                    const t0 = 0;
                    t0();
                    } catch (e) {}
                    const v36 = {};
                    v36.ownKeys = f19;
                    const v38 = new Proxy(f34, v36);
                    for (const v39 in v38) {
                    }
                    return a2;
                }
                const v40 = Symbol.iterator;
                f21.bind(null, ...{ [v40]: f22 });
                return v40;
            }
            return f19;
        }
        function f44(a45) {
            return F0;
        }
        Object.defineProperty(f17, Symbol.iterator, { configurable: true, enumerable: true, get: f18, set: f44 });
        try { new Uint16Array(f17); } catch (e) {}
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v49 = new F0();
class C50 {
    static [v49](a52, a53, a54) {
    }
}
