function f0() {
    const v3 = Temporal.ZonedDateTime;
    v3.compare({ day: 25, month: 2, timeZone: "-16:00", year: 6 });
    return Temporal;
}
try { f0(); } catch (e) {}
