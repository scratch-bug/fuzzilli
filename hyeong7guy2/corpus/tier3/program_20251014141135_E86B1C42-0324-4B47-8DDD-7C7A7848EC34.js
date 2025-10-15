function f1() {
    const v3 = Temporal.ZonedDateTime;
    const v7 = { day: 25, month: 2, timeZone: "-16:00", year: 6 };
    v3.from(v7).with(v7);
    return 2;
}
try { f1(); } catch (e) {}
