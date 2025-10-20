function f1() {
    const v3 = Temporal.ZonedDateTime;
    return v3.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 }).getTimeZoneTransition("-16:00");
}
try { f1(); } catch (e) {}
