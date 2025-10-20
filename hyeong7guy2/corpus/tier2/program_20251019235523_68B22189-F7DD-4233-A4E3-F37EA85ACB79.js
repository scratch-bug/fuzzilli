function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    return Symbol;
}
function f6() {
    function f7(a8) {
        Intl.type = F0;
        Intl.v8BreakIterator(f7, Intl);
        return a8;
    }
    return f7;
}
function f11(a12) {
    return f11;
}
Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f11 });
try { new Uint16Array(f5); } catch (e) {}
