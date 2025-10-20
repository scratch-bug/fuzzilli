function f3() {
    return Symbol;
}
function f4() {
    function f5(a6) {
        function f7() {
            return a6;
        }
        function f8() {
            function f9() {
            }
            try { f9(); } catch (e) {}
            let v11;
            try {
            const t0 = 0;
            v11 = t0();
            } catch (e) {}
            v11 ?? v11;
            const v17 = {
                valueOf(a14, a15) {
                    try {
                    } catch(e16) {
                    }
                    return f7;
                },
            };
            v17.ownKeys = f5;
            const v19 = new Proxy(f9, v17);
            for (const v20 in v19) {
            }
            return Uint8Array;
        }
        const v21 = Symbol.iterator;
        f7.bind(null, ...{ [v21]: f8 });
        return Symbol;
    }
    return f5;
}
function f25(a26) {
    return f4;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f25 });
try { new Uint8Array(f3); } catch (e) {}
