function f1() {
    return "In";
}
function f2() {
    const t4 = Temporal.PlainMonthDay;
    new t4("In");
    return f2;
}
function f6(a7) {
    return a7;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f6 });
try { new Uint16Array(f1); } catch (e) {}
