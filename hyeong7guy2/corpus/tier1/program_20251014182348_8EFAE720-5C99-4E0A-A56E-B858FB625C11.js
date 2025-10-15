function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        Intl.type = f3;
        Intl.v8BreakIterator(f3, Intl);
        return Symbol;
    }
    function f7() {
        return f3;
    }
    f3.toString = f7;
    return f3;
}
function f8(a9) {
    return f2;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f8 });
try { new Uint16Array(f1); } catch (e) {}
