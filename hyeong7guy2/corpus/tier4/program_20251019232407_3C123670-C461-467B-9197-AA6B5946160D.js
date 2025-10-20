function f1() {
    const v3 = Temporal.ZonedDateTime;
    const v8 = v3.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 });
    v8.since(v8).with(25);
    return 6;
}
try { f1(); } catch (e) {}
