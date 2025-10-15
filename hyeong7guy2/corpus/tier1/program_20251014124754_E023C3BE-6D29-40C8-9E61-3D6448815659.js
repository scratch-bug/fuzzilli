function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const v6 = Temporal.ZonedDateTime;
        const v7 = {};
        v7.timeZone = v7;
        v6.from(v7);
        return Symbol;
    }
    return f3;
}
function f9(a10) {
    return f1;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
try { new Uint16Array(f1); } catch (e) {}
