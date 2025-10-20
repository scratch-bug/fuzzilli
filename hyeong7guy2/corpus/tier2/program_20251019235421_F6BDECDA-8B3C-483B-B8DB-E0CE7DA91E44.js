function f1(a2, a3) {
    function f4(a5, a6) {
        return a5;
    }
    return f4;
}
Symbol.toString = f1;
function f7() {
    return Symbol;
}
function f8() {
    function f9(a10) {
        const v12 = Temporal.ZonedDateTime;
        const v13 = {};
        function f14() {
            return Symbol;
        }
        Object.defineProperty(v13, "offset", { configurable: true, get: f14 });
        v12.from(v13);
        return f9;
    }
    return f9;
}
function f16(a17) {
    return a17;
}
Object.defineProperty(f7, Symbol.iterator, { configurable: true, enumerable: true, get: f8, set: f16 });
try { new Uint16Array(f7); } catch (e) {}
