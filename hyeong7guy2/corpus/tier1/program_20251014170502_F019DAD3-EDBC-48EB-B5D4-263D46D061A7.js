function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        const v6 = Intl.v8BreakIterator();
        v6.next(v6.adoptText(f3), f3);
        return v6;
    }
    return f3;
}
function f9(a10) {
    return a10;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
try { new Uint16Array(f1); } catch (e) {}
