function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Temporal.ZonedDateTime;
    const v12 = {
        calendar: "islamic-c9ivil",
        day: 22,
        era: "bh",
        eraYear: 1024,
        monthCode: "M03",
        timeZone: "-07:56",
    };
    v6.from(v12).toLocaleString();
}
try { new F0(); } catch (e) {}
