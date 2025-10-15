function f1() {
    const v3 = Temporal.ZonedDateTime;
    const t2 = v3.from({ day: 25, month: 2, timeZone: "+11:00", year: 256 }).since;
    return t2("+11:00");
}
try { f1(); } catch (e) {}
