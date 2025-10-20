function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        Intl.getCanonicalLocales().adoptText();
        return f3;
    }
    return f3;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f8 });
try { new Uint16Array(f1); } catch (e) {}
