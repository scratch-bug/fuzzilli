function f0() {
    return f0;
}
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
Object.defineProperty(F1, "smallestUnit", { writable: true, configurable: true, enumerable: true, value: f0 });
function f7() {
    const v9 = Temporal.ZonedDateTime;
    const v14 = v9.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 });
    v14.since(v14, F1);
    return 6;
}
try { f7(); } catch (e) {}
