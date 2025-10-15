function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        Temporal.PlainDate.prototype.withCalendar();
        return f1;
    }
    return f2;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f8 });
try { new Uint16Array(f0); } catch (e) {}
