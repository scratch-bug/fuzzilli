function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    const v6 = Temporal.ZonedDateTime;
    v6.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 }).with(F0, Temporal);
    return F0;
}
try { f4(); } catch (e) {}
