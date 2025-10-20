function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const t5 = Temporal.PlainTime;
        const v7 = new t5();
        v7.round();
        return f2;
    }
    return f3;
}
function f9(a10) {
    return f1;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
try { new Uint16Array(f1); } catch (e) {}
