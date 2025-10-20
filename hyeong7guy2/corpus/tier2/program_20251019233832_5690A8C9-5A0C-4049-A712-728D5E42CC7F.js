function f1() {
    function f2(a3) {
        const v6 = Temporal.Instant.prototype;
        try { v6.toLocaleString(f1); } catch (e) {}
        return f2;
    }
    return f2;
}
Object.defineProperty(Math, "valueOf", { configurable: true, enumerable: true, get: f1 });
Math / Math;
