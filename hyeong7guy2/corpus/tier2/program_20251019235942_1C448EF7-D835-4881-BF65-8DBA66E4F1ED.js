function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = Temporal.ZonedDateTime;
    const v14 = {
        calendar: "islamic-civil",
        day: 22,
        era: "bh",
        eraYear: 1024,
        monthCode: "M03",
        timeZone: "America/La_Paz",
    };
    const v15 = v8.from(v14);
    try { v15.subtract(null, 0); } catch (e) {}
}
new F1();
