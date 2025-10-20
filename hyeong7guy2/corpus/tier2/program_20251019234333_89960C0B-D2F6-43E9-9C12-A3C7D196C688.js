function f1() {
    return Symbol;
}
function f2() {
    return Temporal.ZonedDateTime.compare();
}
function f6(a7) {
    return a7;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f6 });
try { new Uint16Array(f1); } catch (e) {}
