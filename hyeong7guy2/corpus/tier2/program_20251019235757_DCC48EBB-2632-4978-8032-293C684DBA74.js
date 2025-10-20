function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        const t5 = Temporal.PlainDate;
        const v8 = new t5(15, 5, 5);
        +v8;
        return v8;
    }
    return f2;
}
function f10(a11) {
    return f0;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f10 });
try { new Uint16Array(f0); } catch (e) {}
