function f3() {
    return Symbol;
}
function f4() {
    function f5(a6) {
        const t5 = Temporal.PlainDate;
        new t5(4294967296, 5, 5);
        return Symbol;
    }
    return f5;
}
function f10(a11) {
    return a11;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f10 });
try { new Uint16Array(f3); } catch (e) {}
