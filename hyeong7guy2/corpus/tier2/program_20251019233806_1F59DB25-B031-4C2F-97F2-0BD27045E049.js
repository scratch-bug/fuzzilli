function f1() {
    return f1;
}
function f2() {
    Intl.v8BreakIterator().resolvedOptions();
}
function f6(a7) {
    return f2;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f6 });
new Uint16Array(f1);
