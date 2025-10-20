function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    return F1;
}
function f8() {
    function f9(a10) {
        function f11() {
            return Symbol;
        }
        function f12() {
            function f13() {
                const v15 = class extends BigUint64Array {
                }
                return f13;
            }
            try {
            const t0 = 0;
            t0(F1, Symbol);
            } catch (e) {}
            const v17 = {};
            v17.ownKeys = f9;
            const v19 = new Proxy(f13, v17);
            for (const v20 in v19) {
            }
            return f12;
        }
        const v21 = Symbol.iterator;
        const v22 = { [v21]: f12 };
        f11.bind(F1, ...v22);
        return v22;
    }
    return f9;
}
function f24(a25) {
    return 0;
}
Object.defineProperty(f7, Symbol.iterator, { configurable: true, enumerable: true, get: f8, set: f24 });
try { new Uint16Array(f7); } catch (e) {}
