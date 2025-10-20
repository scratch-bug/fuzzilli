for (let i1 = 10, i2 = 10; i2; i2--) {
}
function f10() {
    return Symbol;
}
function f11() {
    function f12(a13) {
        function f14() {
            return 0;
        }
        function f15() {
            function f16(a17, a18) {
                function f19(a20) {
                    function F22(a24, a25) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f26() {
                            function f27(a28) {
                                const t17 = [];
                                t17[11] = Infinity;
                                return f12;
                            }
                            return f26;
                        }
                    }
                    return f15;
                }
                return f19;
            }
            function f30() {
                return f12;
            }
            try {
            const t0 = 0;
            t0();
            } catch (e) {}
            const v32 = {};
            v32.ownKeys = f12;
            const v34 = new Proxy(f30, v32);
            for (const v35 in v34) {
            }
            return f10;
        }
        const v36 = Symbol.iterator;
        f14.bind(null, ...{ [v36]: f15 });
        return 0;
    }
    return f12;
}
function f40(a41) {
    return f40;
}
Object.defineProperty(f10, Symbol.iterator, { configurable: true, enumerable: true, get: f11, set: f40 });
try { new Uint16Array(f10); } catch (e) {}
