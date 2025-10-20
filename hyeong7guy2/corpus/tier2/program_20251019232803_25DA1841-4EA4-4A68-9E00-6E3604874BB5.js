function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        Intl.v8BreakIterator(f3);
        return f2;
    }
    function f7(a8, a9) {
        return Symbol;
    }
    f3[Symbol.toPrimitive] = f7;
    f3[0] = f3;
    return f3;
}
function f11(a12) {
    return a12;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f11 });
try { new Uint16Array(f1); } catch (e) {}
