function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        return Intl.v8BreakIterator(f3);
    }
    f3[0] = f3;
    return f3;
}
function f7(a8) {
    return Symbol;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f7 });
try { new Uint16Array(f1); } catch (e) {}
