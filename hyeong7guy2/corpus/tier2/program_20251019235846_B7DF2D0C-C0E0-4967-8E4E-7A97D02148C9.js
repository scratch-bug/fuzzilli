function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const v6 = Temporal.ZonedDateTime;
        v6.from({ offset: "+20:00", timeZone: "America/Indiana/Petersburg" });
        return v6;
    }
    return f3;
}
function f11(a12) {
    return f11;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f11 });
try { new Uint16Array(f1); } catch (e) {}
