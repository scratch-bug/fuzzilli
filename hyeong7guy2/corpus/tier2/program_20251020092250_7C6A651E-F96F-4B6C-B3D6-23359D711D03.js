function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        return F0;
    }
    Object.defineProperty(Temporal, "calendarName", { get: f6 });
    const t9 = Temporal.PlainDate;
    const v8 = new t9(6, 6, 6);
    try { v8.toString(Temporal); } catch (e) {}
}
new F2();
