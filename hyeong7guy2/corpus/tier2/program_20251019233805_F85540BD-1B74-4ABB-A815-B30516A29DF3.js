function f3() {
    return 0;
}
function f4() {
    function f5(a6) {
        function f7() {
            return f4;
        }
        function f8() {
            function f9() {
                return f7;
            }
            let v10;
            try {
            const t0 = 0;
            v10 = t0(a6, f9, f5, a6, f7);
            } catch (e) {}
            const v17 = {
                [v10]: f5,
                [129](a12, a13, a14, a15) {
                    /(ab)?/dus;
                },
            };
            v17.ownKeys = f5;
            const v19 = new Proxy(f9, v17);
            for (const v20 in v19) {
            }
            return 129;
        }
        const v21 = Symbol.iterator;
        f7.bind(null, ...{ [v21]: f8 });
        return f5;
    }
    return f5;
}
function f25(a26) {
    return a26;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f25 });
try { new Uint16Array(f3); } catch (e) {}
