function f2() {
    return Symbol;
}
function f3() {
    function f4(a5) {
        function f6() {
            return f6;
        }
        function f7() {
            function f8() {
                class C9 {
                    static [f8](a11, a12, a13) {
                    }
                }
                return f8;
            }
            try {
            const t0 = 0;
            t0();
            } catch (e) {}
            const v15 = {};
            v15.ownKeys = f4;
            const v17 = new Proxy(f8, v15);
            for (const v18 in v17) {
            }
            return f4;
        }
        const v19 = Symbol.iterator;
        return f6.bind(null, ...{ [v19]: f7 });
    }
    return f4;
}
function f23(a24) {
    return f2;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f23 });
try { new Uint16Array(f2); } catch (e) {}
