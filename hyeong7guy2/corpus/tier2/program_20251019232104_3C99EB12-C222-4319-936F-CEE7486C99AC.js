function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Temporal.ZonedDateTime;
    const v12 = {
        calendar: "islamic-civil",
        day: 22,
        era: "bh",
        eraYear: 1024,
        monthCode: "M03",
        timeZone: "America/La_Paz",
    };
    v6.from(v12).eraYear;
}
new F0(F0, F0);
