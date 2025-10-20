function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    return 12770;
}
Object.defineProperty(F1, "day", { configurable: true, get: f4 });
const v7 = Temporal.ZonedDateTime;
v7.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 }).with(F1);
