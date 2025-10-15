function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    return F0;
}
function f4() {
    const v6 = Temporal.ZonedDateTime;
    const v11 = v6.from({ day: 25, month: 2, timeZone: "-16:00", year: 25 });
    try { v11.getTimeZoneTransition(F0); } catch (e) {}
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f3.bind(null, ...{ [v17]: f4 });
