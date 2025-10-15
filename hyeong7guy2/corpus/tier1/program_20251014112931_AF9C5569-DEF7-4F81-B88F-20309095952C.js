function f2() {
    return "string";
}
function f3() {
    function f4(a5) {
        Intl.v8BreakIterator(f4);
        return a5;
    }
    f4[0] = "string";
    return f4;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f8 });
try { new Uint16Array(f2); } catch (e) {}
