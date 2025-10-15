function f2() {
    return Symbol;
}
function f3() {
    const t4 = Temporal.PlainTime;
    const v6 = new t4();
    v6.round("8461");
    return v6;
}
function f8(a9) {
    return f8;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f8 });
try { new Uint16Array(f2); } catch (e) {}
