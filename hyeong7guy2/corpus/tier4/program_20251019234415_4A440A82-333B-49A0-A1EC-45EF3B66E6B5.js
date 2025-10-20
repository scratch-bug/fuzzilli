const v3 = Temporal.ZonedDateTime;
const v9 = {
    calendar: "islamic-civil",
    day: 22,
    era: "bh",
    eraYear: 1024,
    monthCode: "M03",
    timeZone: "America/La_Paz",
};
const v10 = v3.from(v9);
try { v10.subtract(null); } catch (e) {}
