function f1() {
    return f1;
}
function f2() {
    const v5 = Temporal.PlainDate.prototype;
    v5.toZonedDateTime();
    return v5;
}
function f7(a8) {
    return f7;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f7 });
try { new Uint16Array(f1); } catch (e) {}
