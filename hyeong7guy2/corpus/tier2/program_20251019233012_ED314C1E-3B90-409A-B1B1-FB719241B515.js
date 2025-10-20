const v1 = {};
function f2() {
    return Symbol;
}
function f3() {
    const t5 = Temporal.Duration;
    const v6 = new t5();
    v6.toString(v1);
}
function f8(a9) {
    return Symbol;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f8 });
new Uint16Array(f2);
