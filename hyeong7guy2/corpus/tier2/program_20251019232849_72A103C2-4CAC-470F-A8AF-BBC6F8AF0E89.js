function f0() {
    return f0;
}
function f1() {
    Temporal.PlainDate.prototype.add(f1);
    return f1;
}
function f6(a7) {
    return a7;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f6 });
try { new Uint16Array(f0); } catch (e) {}
