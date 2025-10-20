function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const v6 = Temporal.PlainDate;
        const v7 = v6.prototype;
        v7.with(v7, a4, Symbol, f3, v6);
        return f2;
    }
    return f3;
}
function f9(a10) {
    return a10;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
try { new Uint16Array(f1); } catch (e) {}
