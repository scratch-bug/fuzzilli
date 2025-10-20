function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const v6 = Temporal.PlainDate;
        const v7 = v6.prototype;
        const t6 = Intl.Collator;
        t6(a4, a4).compare(Symbol, v7);
        return v6;
    }
    return f3;
}
function f12(a13) {
    return f2;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f12 });
try { new Uint16Array(f1); } catch (e) {}
