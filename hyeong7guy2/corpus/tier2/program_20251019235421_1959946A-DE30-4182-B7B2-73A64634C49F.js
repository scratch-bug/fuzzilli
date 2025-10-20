function f1(a2, a3) {
    return "´UyVSP";
}
Symbol.toString = f1;
function f5() {
    return f5;
}
function f6() {
    function f7(a8) {
        const v10 = Temporal.ZonedDateTime;
        const v11 = {};
        function f12() {
            return Symbol;
        }
        Object.defineProperty(v11, "offset", { configurable: true, get: f12 });
        v10.from(v11);
        return v11;
    }
    return f7;
}
function f14(a15) {
    return f6;
}
Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f14 });
try { new Uint16Array(f5); } catch (e) {}
