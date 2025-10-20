function f1() {
    function f2(a3) {
        const v6 = Temporal.Instant.prototype;
        try { v6.since(a3, f1, v6, a3); } catch (e) {}
        return a3;
    }
    return f2;
}
Object.defineProperty(Math, "valueOf", { configurable: true, enumerable: true, get: f1 });
Math / Math;
