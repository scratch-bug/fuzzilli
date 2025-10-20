for (let i1 = 10, i2 = 10; i2; i2--) {
}
function f10() {
    return 0;
}
function f11() {
    function f12(a13) {
        function f14() {
            return f12;
        }
        function f15() {
            function f16(a17, a18) {
                for (let i21 = 0, i22 = 10;
                    (() => {
                        function f23(a24) {
                            return a13;
                        }
                        return i22;
                    })();
                    ) {
                }
                return a13;
            }
            function f29() {
                return f29;
            }
            try {
            const t0 = 0;
            t0();
            } catch (e) {}
            const v31 = {};
            v31.ownKeys = f12;
            const v33 = new Proxy(f29, v31);
            for (const v34 in v33) {
            }
            return Proxy;
        }
        const v35 = Symbol.iterator;
        f14.bind(null, ...{ [v35]: f15 });
        return f12;
    }
    return f12;
}
function f39(a40) {
    return f39;
}
Object.defineProperty(f10, Symbol.iterator, { configurable: true, enumerable: true, get: f11, set: f39 });
try { new Uint16Array(f10); } catch (e) {}
