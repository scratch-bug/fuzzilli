function f1() {
    return Symbol;
}
function f2() {
    const v4 = Temporal.Duration;
    const v5 = new v4();
    v5.add(v4);
    return v5;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f7 });
try { new Uint16Array(f1); } catch (e) {}
