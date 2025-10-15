function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const v6 = Intl.v8BreakIterator();
        v6.next();
        return v6;
    }
    return f3;
}
function f8(a9) {
    return f8;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f8 });
try { new Uint16Array(f1); } catch (e) {}
