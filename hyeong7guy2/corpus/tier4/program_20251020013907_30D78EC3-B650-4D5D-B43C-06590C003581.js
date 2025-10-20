function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
F1.nanosecond = 12770;
const v6 = Temporal.ZonedDateTime;
v6.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 }).with(F1);
