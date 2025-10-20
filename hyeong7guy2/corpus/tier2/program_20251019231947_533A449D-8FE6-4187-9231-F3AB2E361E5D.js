function f1() {
    function f2(a3) {
        const v6 = Temporal.Instant.prototype;
        v6.toZonedDateTimeISO(f2, v6);
        return Temporal;
    }
    try { f2(); } catch (e) {}
    return f1;
}
Object.defineProperty(Math, "valueOf", { configurable: true, enumerable: true, get: f1 });
Math / Math;
