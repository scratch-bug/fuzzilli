function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const t5 = Temporal.PlainDate;
        const v9 = new t5(15, 5, 5);
        return v9.toJSON();
    }
    return f3;
}
function f11(a12) {
    return a12;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f11 });
try { new Uint16Array(f1); } catch (e) {}
