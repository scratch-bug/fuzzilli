function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const v6 = Intl.v8BreakIterator();
        const t6 = v6.resolvedOptions;
        t6(v6, f3);
        return f3;
    }
    return f3;
}
function f9(a10) {
    return f9;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
try { new Uint16Array(f1); } catch (e) {}
