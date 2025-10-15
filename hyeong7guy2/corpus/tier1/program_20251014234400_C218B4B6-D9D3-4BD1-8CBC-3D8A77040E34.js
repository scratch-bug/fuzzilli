function f0() {
    return f0;
}
function f1() {
    const t4 = Temporal.PlainDate;
    const v6 = new t4(15, 5, 5);
    v6.withCalendar(f1);
    return f0;
}
function f8(a9) {
    return f8;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f8 });
try { new Uint16Array(f0); } catch (e) {}
