function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7(a8) {
    return 1000000000.0;
}
Object.defineProperty(F1, "valueOf", { writable: true, value: f7 });
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const t9 = Temporal.PlainTime;
    new t9(a12, a11, a11, a11, F1);
}
try { new F9(); } catch (e) {}
