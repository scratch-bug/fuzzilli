function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        const v6 = Temporal.ZonedDateTime;
        const v7 = {};
        function f8() {
            return Symbol;
        }
        Object.defineProperty(v7, "offset", { configurable: true, get: f8 });
        v6.from(v7);
        return v7;
    }
    return f3;
}
function f10(a11) {
    return a11;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f10 });
try { new Uint16Array(f1); } catch (e) {}
