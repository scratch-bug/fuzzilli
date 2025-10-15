function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        Intl.type = Intl;
        Intl.v8BreakIterator(f3, Intl);
        return f3;
    }
    return f3;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f7 });
try { new Uint16Array(f1); } catch (e) {}
