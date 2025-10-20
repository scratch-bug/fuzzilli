function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        Temporal.PlainDate.prototype.equals();
        return f1;
    }
    return f3;
}
function f9(a10) {
    return f2;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
try { new Uint16Array(f1); } catch (e) {}
